<#
.SYNOPSIS
Builds the MusicScene Next.js application and deploys it to the AWS S3 bucket.

.DESCRIPTION
This script runs the standard production build process using npm.
If the build is successful, it synchronizes the resulting ./out directory
with the 'musicscene' S3 bucket, deleting any obsolete files.
#>

Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "  Starting MusicScene Deployment Process" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Build the project
Write-Host "[1/2] Running 'npm run build'..." -ForegroundColor Yellow
npm run build

# Check if build was successful
if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "❌ Build failed with exit code $LASTEXITCODE. Deployment aborted." -ForegroundColor Red
    exit $LASTEXITCODE
}

Write-Host "✅ Build completed successfully!" -ForegroundColor Green
Write-Host ""

# Step 2: Sync to AWS S3
Write-Host "[2/3] Syncing './out' directory to s3://musicscene..." -ForegroundColor Yellow
aws s3 sync ./out s3://musicscene --delete

# Check if sync was successful
if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "❌ AWS S3 sync failed with exit code $LASTEXITCODE." -ForegroundColor Red
    exit $LASTEXITCODE
}

Write-Host "✅ S3 Sync completed successfully!" -ForegroundColor Green
Write-Host ""

# Step 3: Invalidate CloudFront
$DistributionId = "EMEO566RGP4JE"
Write-Host "[3/3] Invalidating CloudFront Cache for Distribution $DistributionId..." -ForegroundColor Yellow
aws cloudfront create-invalidation --distribution-id $DistributionId --paths "/*"

# Check if invalidation was successful
if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "❌ CloudFront invalidation failed with exit code $LASTEXITCODE." -ForegroundColor Red
    exit $LASTEXITCODE
}

Write-Host ""
Write-Host "==========================================" -ForegroundColor Green
Write-Host "  ✅ Deployment completed successfully! " -ForegroundColor Green
Write-Host "==========================================" -ForegroundColor Green
