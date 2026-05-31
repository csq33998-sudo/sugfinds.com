param(
  [int]$Port = 8088
)

$root = (Resolve-Path $PSScriptRoot).Path
$rootPrefix = if ($root.EndsWith([System.IO.Path]::DirectorySeparatorChar)) {
  $root
} else {
  "$root$([System.IO.Path]::DirectorySeparatorChar)"
}
$listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Parse("127.0.0.1"), $Port)
$listener.Start()
Write-Host "Serving $root at http://127.0.0.1:$Port/"

$mimeTypes = @{
  ".html" = "text/html; charset=utf-8"
  ".css" = "text/css; charset=utf-8"
  ".js" = "application/javascript; charset=utf-8"
  ".xml" = "application/xml; charset=utf-8"
  ".txt" = "text/plain; charset=utf-8"
  ".png" = "image/png"
  ".jpg" = "image/jpeg"
  ".jpeg" = "image/jpeg"
  ".svg" = "image/svg+xml"
  ".webp" = "image/webp"
}

function Send-Response {
  param(
    [System.Net.Sockets.NetworkStream]$Stream,
    [int]$Status,
    [string]$StatusText,
    [string]$ContentType,
    [byte[]]$Body
  )

  $header = "HTTP/1.1 $Status $StatusText`r`nContent-Type: $ContentType`r`nContent-Length: $($Body.Length)`r`nConnection: close`r`n`r`n"
  $headerBytes = [System.Text.Encoding]::ASCII.GetBytes($header)
  $Stream.Write($headerBytes, 0, $headerBytes.Length)
  $Stream.Write($Body, 0, $Body.Length)
}

function Send-TextResponse {
  param(
    [System.Net.Sockets.NetworkStream]$Stream,
    [int]$Status,
    [string]$StatusText,
    [string]$Text
  )

  $body = [System.Text.Encoding]::UTF8.GetBytes($Text)
  Send-Response -Stream $Stream -Status $Status -StatusText $StatusText -ContentType "text/plain; charset=utf-8" -Body $body
}

while ($true) {
  $client = $listener.AcceptTcpClient()
  try {
    $stream = $client.GetStream()
    $buffer = New-Object byte[] 4096
    $read = $stream.Read($buffer, 0, $buffer.Length)
    $request = [System.Text.Encoding]::ASCII.GetString($buffer, 0, $read)
    $requestLine = ($request -split "`r?`n")[0]
    $parts = $requestLine -split " "
    $path = if ($parts.Length -ge 2) { $parts[1].Split("?")[0] } else { "/" }
    if ($path -match "%(?![0-9A-Fa-f]{2})") {
      Send-TextResponse -Stream $stream -Status 400 -StatusText "Bad Request" -Text "Bad request"
      continue
    }

    try {
      $relative = [System.Uri]::UnescapeDataString($path.TrimStart("/"))
    } catch {
      Send-TextResponse -Stream $stream -Status 400 -StatusText "Bad Request" -Text "Bad request"
      continue
    }
    if ([string]::IsNullOrWhiteSpace($relative)) {
      $relative = "index.html"
    }

    $file = [System.IO.Path]::GetFullPath((Join-Path $root $relative))
    $outsideRoot = -not $file.StartsWith($rootPrefix, [System.StringComparison]::OrdinalIgnoreCase)

    if ($outsideRoot -or -not (Test-Path -LiteralPath $file -PathType Leaf)) {
      Send-TextResponse -Stream $stream -Status 404 -StatusText "Not Found" -Text "Not found"
    } else {
      $extension = [System.IO.Path]::GetExtension($file).ToLowerInvariant()
      $contentType = $mimeTypes[$extension]
      if (-not $contentType) {
        $contentType = "application/octet-stream"
      }
      $body = [System.IO.File]::ReadAllBytes($file)
      Send-Response -Stream $stream -Status 200 -StatusText "OK" -ContentType $contentType -Body $body
    }
  } catch {
    $message = [System.Text.Encoding]::UTF8.GetBytes("Server error")
    if ($stream) {
      Send-Response -Stream $stream -Status 500 -StatusText "Internal Server Error" -ContentType "text/plain; charset=utf-8" -Body $message
    }
  } finally {
    $client.Close()
  }
}
