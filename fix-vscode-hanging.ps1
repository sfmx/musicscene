# VS Code Performance Fix Script
# Run this if VS Code is hanging

Write-Host "Stopping VS Code processes..." -ForegroundColor Yellow
Get-Process -Name "Code" -ErrorAction SilentlyContinue | Stop-Process -Force

Write-Host "Clearing VS Code cache..." -ForegroundColor Yellow
$vscodeCache = "$env:APPDATA\Code\User\workspaceStorage"
if (Test-Path $vscodeCache) {
    Remove-Item "$vscodeCache\*" -Recurse -Force -ErrorAction SilentlyContinue
}

$typescriptCache = "$env:APPDATA\Code\CachedData"
if (Test-Path $typescriptCache) {
    Remove-Item "$typescriptCache\*" -Recurse -Force -ErrorAction SilentlyContinue
}

Write-Host "Clearing TypeScript server cache..." -ForegroundColor Yellow
$tsServerLog = "$env:TEMP\tsserver*"
Remove-Item $tsServerLog -Force -ErrorAction SilentlyContinue

Write-Host "Setting reduced file watching..." -ForegroundColor Yellow
$env:NODE_OPTIONS = "--max-old-space-size=4096"

Write-Host "Restarting VS Code with performance settings..." -ForegroundColor Green
Start-Process "code" -ArgumentList "c:\Source\musicscene", "--disable-extensions", "--disable-gpu"

Write-Host "VS Code restart complete. Extensions disabled for performance." -ForegroundColor Green
Write-Host "To re-enable extensions later, restart VS Code normally." -ForegroundColor Cyan
