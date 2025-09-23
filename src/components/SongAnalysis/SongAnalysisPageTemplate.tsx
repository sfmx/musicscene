"use client";

import React from "react";
import Link from "next/link";
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import SimpleFretboardDiagram from "@/components/SimpleFretboardDiagram";
import { getSongData } from '@/lib/songData';
import SongInfoSection from './SongInfoSection';
import ConsolidatedMusicalAnalysis from './ConsolidatedMusicalAnalysis';
import ImprovedChordProgressionVisualization from './ImprovedChordProgressionVisualization';
import ChordReferenceBox from './ChordReferenceBox';
import ScaleVisualization from './ScaleVisualization';
import SectionNavigation from './SectionNavigation';
import AlphaTexRenderer from '@/components/AlphaTexRenderer';

interface SongAnalysisPageTemplateProps {
  songSlug: string;
  displayName: string;
}

// Utility function to remove consecutive duplicate chords while preserving order
const removeConsecutiveDuplicates = (chords: string[]): string[] => {
  if (chords.length === 0) return [];
  
  const result = [chords[0]];
  for (let i = 1; i < chords.length; i++) {
    const currentChord = chords[i].trim();
    const previousChord = chords[i - 1].trim();
    if (currentChord !== previousChord) {
      result.push(chords[i]);
    }
  }
  return result;
};

export default function SongAnalysisPageTemplate({ songSlug, displayName }: SongAnalysisPageTemplateProps) {
  const songData = getSongData(songSlug);

  if (!songData) {
    return (
      <Layout>
        <Header
          title="Song Not Found"
          subtitle="The requested song analysis could not be found"
        />
        <main className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Song Analysis Not Found</h1>
            <p className="text-gray-600 mb-8">The song &quot;{songSlug}&quot; could not be found in our database.</p>
            <Link href="/lessons/songs/song-analysis" className="text-cyan-600 hover:text-cyan-800">
              ← Back to Song Analysis
            </Link>
          </div>
        </main>
      </Layout>
    );
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-orange-100 text-orange-800';
      case 'advanced':
        return 'bg-red-100 text-red-800';
      case 'expert':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Layout>
      <Header
        title={`"${displayName}" - Complete Song Analysis`}
        subtitle={`Professional breakdown of ${songData.songInfo.artist}'s ${displayName} with theory, technique, and equipment analysis`}
      />
      
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Section Navigation */}
        <SectionNavigation
          sections={[
            "Song Info",
            "Musical Analysis",
            "Chord Reference",
            "Scale Patterns",
            "Chord Progressions",
            "Key Techniques",
            "Equipment & Tone",
            "Learning Path",
            "Practice Notes",
            "Related Songs"
          ]}
        />

        {/* Navigation */}
        <nav className="mb-8 text-sm">
          <Link href="/lessons/songs/song-analysis" className="text-cyan-600 hover:text-cyan-800">
            ← Back to Song Analysis
          </Link>
        </nav>

        {/* Song Header */}
        <div id="song-info">
        <SongInfoSection 
          songData={songData} 
          displayName={displayName} 
          getDifficultyColor={getDifficultyColor} 
        />

        </div>

        {/* Musical Analysis */}
        <div id="musical-analysis">
        <ConsolidatedMusicalAnalysis songData={songData} />
        </div>

        {/* Chord Reference */}
        <div id="chord-reference">
        <ChordReferenceBox
          chords={[
            ...songData.musicalAnalysis.chordProgressions.mainProgression.chords,
            ...songData.musicalAnalysis.chordProgressions.sectionProgressions.flatMap(section => section.progression.split(' - ').map(chord => chord.trim()))
          ]}
        />

        </div>

        {/* Scale Visualization */}
        <div id="scale-patterns">
        <ScaleVisualization
          scales={songData.musicalAnalysis.keyAndScale.scalesUsed}
          primaryKey={songData.musicalAnalysis.keyAndScale.primaryKey}
        />

        </div>

        {/* Chord Progressions */}
        <section id="chord-progressions" className="mb-12">
          <ImprovedChordProgressionVisualization songData={songData} />
        </section>

        {/* Key Techniques */}
        <section id="key-techniques" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Key Techniques</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {songData.techniques.map((technique, index) => (
              <div key={index} className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{technique.name}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs ${getDifficultyColor(technique.difficulty)}`}>
                    {technique.difficulty}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-6">{technique.description}</p>
                
                {technique.details.chords && technique.details.chords.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-800 mb-2">Uses chords:</h4>
                    <div className="flex flex-wrap gap-2">
                      {Array.from(new Set(technique.details.chords)).map((chord, chordIndex) => (
                        <span key={chordIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-mono">
                          {chord}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 mt-2">See chord diagrams in the Chord Reference section above</p>
                  </div>
                )}

                {technique.details.progression && (
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-800 mb-2">Progression:</h4>
                    <p className="text-sm text-gray-600 font-mono">{technique.details.progression}</p>
                  </div>
                )}

                {technique.details.tips && technique.details.tips.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-800 mb-2">Tips:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {technique.details.tips.map((tip, tipIndex) => (
                        <li key={tipIndex}>• {tip}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Equipment */}
        <section id="equipment-&-tone" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Equipment & Tone</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Guitar */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Guitar</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium text-gray-800">Recommended:</p>
                  <p className="text-gray-600">{songData.equipment.guitar.recommended}</p>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Pickup Type:</p>
                  <p className="text-gray-600">{songData.equipment.guitar.pickup}</p>
                </div>
                {songData.equipment.guitar.alternatives.length > 0 && (
                  <div>
                    <p className="font-medium text-gray-800">Alternatives:</p>
                    <ul className="text-gray-600">
                      {songData.equipment.guitar.alternatives.map((alt, index) => (
                        <li key={index}>• {alt}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Amplifier */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Amplifier</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium text-gray-800">Recommended:</p>
                  <p className="text-gray-600">{songData.equipment.amp.recommended}</p>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Settings:</p>
                  <div className="space-y-1 text-gray-600">
                    <p>Gain: {songData.equipment.amp.settings.gain}</p>
                    <p>Treble: {songData.equipment.amp.settings.treble}</p>
                    <p>Middle: {songData.equipment.amp.settings.middle}</p>
                    <p>Bass: {songData.equipment.amp.settings.bass}</p>
                    <p>Presence: {songData.equipment.amp.settings.presence}</p>
                  </div>
                </div>
                {songData.equipment.amp.alternatives.length > 0 && (
                  <div>
                    <p className="font-medium text-gray-800">Alternatives:</p>
                    <ul className="text-gray-600">
                      {songData.equipment.amp.alternatives.map((alt, index) => (
                        <li key={index}>• {alt}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Effects */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Effects</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium text-gray-800">Distortion:</p>
                  <p className="text-gray-600">{songData.equipment.effects.distortion}</p>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Reverb:</p>
                  <p className="text-gray-600">{songData.equipment.effects.reverb}</p>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Other:</p>
                  <p className="text-gray-600">{songData.equipment.effects.other}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Path */}
        <section id="learning-path" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Learning Path</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Beginner */}
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-lg font-semibold text-green-900 mb-3">{songData.learningPath.beginner.title}</h3>
              <p className="text-sm text-green-800 mb-4">Time Estimate: {songData.learningPath.beginner.timeEstimate}</p>
              <ul className="text-sm text-green-700 space-y-2">
                {songData.learningPath.beginner.steps.map((step, index) => (
                  <li key={index}>• {step}</li>
                ))}
              </ul>
            </div>

            {/* Intermediate */}
            <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
              <h3 className="text-lg font-semibold text-orange-900 mb-3">{songData.learningPath.intermediate.title}</h3>
              <p className="text-sm text-orange-800 mb-4">Time Estimate: {songData.learningPath.intermediate.timeEstimate}</p>
              <ul className="text-sm text-orange-700 space-y-2">
                {songData.learningPath.intermediate.steps.map((step: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, index: React.Key | null | undefined) => (
                  <li key={index}>• {step}</li>
                ))}
              </ul>
            </div>

            {/* Advanced */}
            <div className="bg-red-50 rounded-xl p-6 border border-red-200">
              <h3 className="text-lg font-semibold text-red-900 mb-3">{songData.learningPath.advanced.title}</h3>
              <p className="text-sm text-red-800 mb-4">Time Estimate: {songData.learningPath.advanced.timeEstimate}</p>
              <ul className="text-sm text-red-700 space-y-2">
                {songData.learningPath.advanced.steps.map((step, index) => (
                  <li key={index}>• {step}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Practice Notes */}
        <section id="practice-notes" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Practice Notes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Common Mistakes */}
            <div className="bg-red-50 rounded-xl p-6 border border-red-200">
              <h3 className="text-lg font-semibold text-red-900 mb-4">Common Mistakes</h3>
              <ul className="text-sm text-red-700 space-y-2">
                {songData.practiceNotes.commonMistakes.map((mistake, index) => (
                  <li key={index}>• {mistake}</li>
                ))}
              </ul>
            </div>

            {/* Practice Routine */}
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Practice Routine</h3>
              <ul className="text-sm text-blue-700 space-y-2">
                {songData.practiceNotes.practiceRoutine.map((routine, index) => (
                  <li key={index}>• {routine}</li>
                ))}
              </ul>
            </div>

            {/* Focus Areas */}
            {songData.practiceNotes.focusAreas && songData.practiceNotes.focusAreas.length > 0 && (
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="text-lg font-semibold text-green-900 mb-4">Focus Areas</h3>
                <ul className="text-sm text-green-700 space-y-2">
                  {songData.practiceNotes.focusAreas.map((area, index) => (
                    <li key={index}>• {area}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Metronome Work */}
            {songData.practiceNotes.metronomeWork && songData.practiceNotes.metronomeWork.length > 0 && (
              <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                <h3 className="text-lg font-semibold text-purple-900 mb-4">Metronome Work</h3>
                <ul className="text-sm text-purple-700 space-y-2">
                  {songData.practiceNotes.metronomeWork.map((work, index) => (
                    <li key={index}>• {work}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        {/* Related Songs */}
        <section id="related-songs" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Songs</h2>
          
          {/* AC/DC Songs */}
          {songData.relatedSongs.acdc && songData.relatedSongs.acdc.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">More AC/DC Songs</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {songData.relatedSongs.acdc.map((song, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                    <h4 className="font-medium text-gray-900 mb-2">{song.title}</h4>
                    <p className="text-sm text-gray-600 mb-3">{song.similarity}</p>
                    {song.link && (
                      <Link href={song.link} className="text-cyan-600 hover:text-cyan-800 text-sm">
                        View Analysis →
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Similar Techniques */}
          {songData.relatedSongs.similarTechniques && songData.relatedSongs.similarTechniques.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Similar Techniques</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {songData.relatedSongs.similarTechniques.map((song, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                    <h4 className="font-medium text-gray-900 mb-1">{song.title}</h4>
                    <p className="text-sm text-gray-500 mb-2">by {song.artist}</p>
                    {song.technique && (
                      <p className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded inline-block mb-2">
                        {song.technique}
                      </p>
                    )}
                    <p className="text-sm text-gray-600">{song.similarity}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Navigation */}
        <nav className="text-center">
          <Link href="/lessons/songs/song-analysis" className="text-cyan-600 hover:text-cyan-800">
            ← Back to Song Analysis
          </Link>
        </nav>
      </main>
    </Layout>
  );
}
