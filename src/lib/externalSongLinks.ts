/**
 * Auto-generates external links for streaming, tabs, and sheet music
 * from song title + artist metadata. No manual maintenance needed.
 */

export interface ExternalSongLink {
  platform: string;
  url: string;
  icon: string;
  category: 'listen' | 'tabs' | 'sheet-music';
  label: string;
}

function encode(text: string): string {
  return encodeURIComponent(text).replace(/%20/g, '+');
}

export function getExternalSongLinks(title: string, artist: string): ExternalSongLink[] {
  const query = encode(`${artist} ${title}`);
  const titleOnly = encode(title);
  const artistTitle = encode(`${artist} ${title}`);

  return [
    // --- Listening ---
    {
      platform: 'Spotify',
      url: `https://open.spotify.com/search/${encodeURIComponent(`${artist} ${title}`)}`,
      icon: 'spotify',
      category: 'listen',
      label: 'Listen on Spotify',
    },
    {
      platform: 'YouTube',
      url: `https://www.youtube.com/results?search_query=${query}`,
      icon: 'youtube',
      category: 'listen',
      label: 'Watch on YouTube',
    },
    {
      platform: 'Apple Music',
      url: `https://music.apple.com/us/search?term=${artistTitle}`,
      icon: 'apple-music',
      category: 'listen',
      label: 'Listen on Apple Music',
    },
    // --- Tabs ---
    {
      platform: 'Ultimate Guitar',
      url: `https://www.ultimate-guitar.com/search.php?search_type=title&value=${titleOnly}`,
      icon: 'ultimate-guitar',
      category: 'tabs',
      label: 'Tabs on Ultimate Guitar',
    },
    {
      platform: 'Songsterr',
      url: `https://www.songsterr.com/?pattern=${artistTitle}`,
      icon: 'songsterr',
      category: 'tabs',
      label: 'Interactive Tabs on Songsterr',
    },
    // --- Sheet Music ---
    {
      platform: 'Musicnotes',
      url: `https://www.musicnotes.com/search/go?w=${artistTitle}`,
      icon: 'musicnotes',
      category: 'sheet-music',
      label: 'Sheet Music on Musicnotes',
    },
  ];
}
