# cleanup.ps1
Write-Host "🧹 Cleaning up MusicScene project..." -ForegroundColor Green

# Build artifacts
Write-Host "Removing build artifacts..." -ForegroundColor Yellow
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force out -ErrorAction SilentlyContinue  
Remove-Item -Recurse -Force dist -ErrorAction SilentlyContinue
Remove-Item -Force .tsbuildinfo -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force node_modules\.cache -ErrorAction SilentlyContinue

# VS Code caches
Write-Host "Clearing VS Code caches..." -ForegroundColor Yellow
Remove-Item -Recurse -Force .vscode\workspace-* -ErrorAction SilentlyContinue

# TypeScript caches
Write-Host "Clearing TypeScript caches..." -ForegroundColor Yellow
Remove-Item -Force *.tsbuildinfo -ErrorAction SilentlyContinue

# ESLint cache
Remove-Item -Force .eslintcache -ErrorAction SilentlyContinue

Write-Host "✅ Cleanup complete!" -ForegroundColor Green
Write-Host "💡 Now restart VS Code: code ." -ForegroundColor Cyan