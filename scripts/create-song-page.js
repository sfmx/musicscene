#!/usr/bin/env node

/**
 * Song Analysis Page Generator
 * 
 * Usage: node scripts/create-song-page.js "song-title" "Artist Name"
 * Example: node scripts/create-song-page.js "Back in Black" "AC/DC"
 */

const fs = require('fs');
const path = require('path');

function createSongSlug(title) {
  return title.toLowerCase()
    .replace(/[^a-z0-9\s]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Remove duplicate hyphens
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
}

function createFunctionName(title) {
  return title
    .replace(/[^a-zA-Z0-9\s]/g, '') // Remove special characters
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('') + 'Analysis';
}

function createSongPage(title, artist) {
  const songSlug = createSongSlug(title);
  const functionName = createFunctionName(title);
  const displayName = title;
  
  // Create directory
  const pageDir = path.join(__dirname, '..', 'src', 'app', 'lessons', 'songs', 'song-analysis', songSlug);
  if (!fs.existsSync(pageDir)) {
    fs.mkdirSync(pageDir, { recursive: true });
  }
  
  // Create page content
  const pageContent = `"use client";

import React from "react";
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export default function ${functionName}() {
  return (
    <SongAnalysisPageTemplate 
      songSlug="${songSlug}" 
      displayName="${displayName}" 
    />
  );
}
`;

  // Write page file
  const pagePath = path.join(pageDir, 'page.tsx');
  fs.writeFileSync(pagePath, pageContent);
  
  console.log(`✅ Created song analysis page:`);
  console.log(`   File: ${pagePath}`);
  console.log(`   URL: /lessons/songs/song-analysis/${songSlug}/`);
  console.log('');
  console.log(`📝 Next steps:`);
  console.log(`   1. Create JSON data file: src/data/songs/${songSlug}.json`);
  console.log(`   2. Add to songData.ts:`);
  console.log(`      - Import: import ${songSlug.replace(/-/g, '')}Data from '@/data/songs/${songSlug}.json';`);
  console.log(`      - Add to map: '${songSlug}': ${songSlug.replace(/-/g, '')}Data as SongData,`);
  console.log(`      - Add to slugs: '${songSlug}'`);
  console.log(`   3. Test at: http://localhost:3000/lessons/songs/song-analysis/${songSlug}/`);
}

// Get command line arguments
const args = process.argv.slice(2);
if (args.length < 2) {
  console.log('Usage: node scripts/create-song-page.js "Song Title" "Artist Name"');
  console.log('Example: node scripts/create-song-page.js "Back in Black" "AC/DC"');
  process.exit(1);
}

const [title, artist] = args;
createSongPage(title, artist);
