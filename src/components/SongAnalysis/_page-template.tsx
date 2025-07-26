/*
SONG ANALYSIS PAGE TEMPLATE

Copy this template to create new song analysis pages.
File path: src/app/lessons/songs/song-analysis/[song-slug]/page.tsx

INSTRUCTIONS:
1. Copy the code below to your new page file
2. Replace placeholders with your song information
3. Create corresponding JSON data file
4. Register song in songData.ts

TEMPLATE CODE:
*/

"use client";

import React from "react";
import SongAnalysisPageTemplate from '@/components/SongAnalysis/SongAnalysisPageTemplate';

export default function YourSongNameAnalysis() {
  return (
    <SongAnalysisPageTemplate 
      songSlug="your-song-slug" 
      displayName="Your Song Display Name" 
    />
  );
}

/*
EXAMPLE REPLACEMENTS:

For "Back in Black" by AC/DC:
- Function name: BackInBlackAnalysis
- songSlug: "back-in-black"
- displayName: "Back in Black"

For "Sweet Child O' Mine" by Guns N' Roses:
- Function name: SweetChildOMineAnalysis  
- songSlug: "sweet-child-o-mine"
- displayName: "Sweet Child O' Mine"

REQUIRED STEPS:
1. Create JSON: src/data/songs/your-song-slug.json
2. Add import to songData.ts: import yourSongData from '@/data/songs/your-song-slug.json';
3. Add to songDataMap: 'your-song-slug': yourSongData as SongData,
4. Add to getAllSongSlugs(): [...existing, 'your-song-slug']
*/
