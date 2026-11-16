import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

async function main() {
  console.log('--- Step 1: Generating Synchronized Audio Track ---');
  execSync('python scripts/generate_audio.py', { stdio: 'inherit' });

  const tempDir = path.resolve('./temp_video_rec');
  if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });

  const htmlPath = 'file:///' + path.resolve('./scripts/video-scene.html').replace(/\\/g, '/');

  console.log('--- Step 2: Recording 1080p Video via Playwright ---');
  const browser = await chromium.launch({
    headless: true,
    args: ['--enable-gpu', '--disable-dev-shm-usage', '--no-sandbox']
  });

  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    recordVideo: {
      dir: tempDir,
      size: { width: 1920, height: 1080 },
    },
  });

  const page = await context.newPage();
  await page.goto(htmlPath);

  console.log('Recording 35 seconds of choreographed UI demo...');
  await page.waitForTimeout(35500);

  await page.close();
  await context.close();
  await browser.close();

  const files = fs.readdirSync(tempDir).filter(f => f.endsWith('.webm'));
  if (files.length === 0) {
    throw new Error('No recorded webm file found in ' + tempDir);
  }

  const recordedWebm = path.join(tempDir, files[0]);
  const audioWav = path.resolve('./scripts/demo_audio.wav');
  const outputMp4 = path.resolve('./public/social/sight-reading-guitar-mic-demo.mp4');
  const outputThumb = path.resolve('./public/social/sight-reading-guitar-mic-thumb.png');

  // Ensure output directory exists
  const socialDir = path.dirname(outputMp4);
  if (!fs.existsSync(socialDir)) fs.mkdirSync(socialDir, { recursive: true });

  console.log('--- Step 3: Finding FFmpeg Executable ---');
  const ffmpegExe = execSync('python -c "import imageio_ffmpeg; print(imageio_ffmpeg.get_ffmpeg_exe())"')
    .toString()
    .trim();
  console.log('Using FFmpeg at:', ffmpegExe);

  console.log('--- Step 4: Muxing High-Definition MP4 Video ---');
  // Combine video and audio: H.264 (libx264) + AAC, yuv420p for universal Facebook/Instagram compatibility
  const ffmpegCmd = `"${ffmpegExe}" -y -i "${recordedWebm}" -i "${audioWav}" -c:v libx264 -preset slow -crf 19 -pix_fmt yuv420p -c:a aac -b:a 192k -t 35.0 -movflags +faststart "${outputMp4}"`;
  execSync(ffmpegCmd, { stdio: 'inherit' });

  console.log('--- Step 5: Generating High-Impact Video Thumbnail ---');
  // Capture frame at 10.5s (showing note E3, detected pitch E2, green success beacon and staff)
  const thumbCmd = `"${ffmpegExe}" -y -ss 00:00:10.500 -i "${outputMp4}" -frames:v 1 -q:v 2 "${outputThumb}"`;
  execSync(thumbCmd, { stdio: 'inherit' });

  // Clean up temporary files
  fs.rmSync(tempDir, { recursive: true, force: true });
  if (fs.existsSync(audioWav)) fs.rmSync(audioWav);

  console.log('=============================================');
  console.log('Video generated successfully:');
  console.log('MP4:', outputMp4, `(${(fs.statSync(outputMp4).size / (1024 * 1024)).toFixed(2)} MB)`);
  console.log('Thumbnail:', outputThumb);
  console.log('=============================================');
}

main().catch(err => {
  console.error('Video generation failed:', err);
  process.exit(1);
});
