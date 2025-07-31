"use client";

import React from "react";
import Link from "next/link";
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import SimpleFretboardDiagram from "@/components/SimpleFretboardDiagram";
import { VexTab } from '@/components/VexTab';
import { getSongData, SongData } from '@/lib/songData';
import SongInfoSection from './SongInfoSection';
import MusicalAnalysisSection from './MusicalAnalysisSection';
import MusicalAnalysisScales from './MusicalAnalysisScales';
import AlphaTexRenderer from '@/components/AlphaTexRenderer';

interface SongAnalysisPageTemplateProps {
  songSlug: string;
  displayName: string;
}

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
            <p className="text-gray-600 mb-8">The song "{songSlug}" could not be found in our database.</p>
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
        {/* Navigation */}
        <nav className="mb-8 text-sm">
          <Link href="/lessons/songs/song-analysis" className="text-cyan-600 hover:text-cyan-800">
            ← Back to Song Analysis
          </Link>
        </nav>

        {/* Song Header */}
        <SongInfoSection 
          songData={songData} 
          displayName={displayName} 
          getDifficultyColor={getDifficultyColor} 
        />

        {/* Musical Analysis */}
        <MusicalAnalysisSection songData={songData} />

        {/* Detailed Scale Analysis */}
        <MusicalAnalysisScales songData={songData} />

        {/* Key Techniques */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Techniques</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {songData.techniques.map((technique, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">{technique.name}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs ${getDifficultyColor(technique.difficulty)}`}>
                    {technique.difficulty}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{technique.description}</p>
                
                {technique.details.chords && technique.details.chords.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-800 mb-2">Chords Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {technique.details.chords.map((chord, chordIndex) => (
                        <span key={chordIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                          {chord}
                        </span>
                      ))}
                    </div>
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

        {/* Song Sections */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Song Sections</h2>
          <div className="space-y-6">
            {songData.sections.map((section, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{section.name}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span>{section.timeStamp}</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      {section.technique}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{section.description}</p>

                {section.chords && section.chords.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-800 mb-2">Chords:</h4>
                    <div className="flex flex-wrap gap-2">
                      {section.chords.map((chord, chordIndex) => (
                        <span key={chordIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded font-mono">
                          {chord}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {section.progression && (
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-800 mb-2">Progression:</h4>
                    <p className="text-sm text-gray-600 font-mono bg-gray-50 p-2 rounded">
                      {section.progression}
                    </p>
                  </div>
                )}

                {section.vexTab && (
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-800 mb-2">Notation:</h4>
                    <div className="bg-gray-50 p-4 rounded">
                      <VexTab notation={section.vexTab} />
                    </div>
                  </div>
                )}

                {section.tab && (
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-800 mb-2">Tablature:</h4>
                    <AlphaTexRenderer
                      alphaTex={section.tab}
                      title={`${section.name} - ${section.technique}`}
                      showValidation={false}
                      className="bg-gray-50 rounded-lg p-4"
                    />
                  </div>
                )}

                {section.notes && section.notes.length > 0 && (
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Performance Notes:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {section.notes.map((note, noteIndex) => (
                        <li key={noteIndex}>• {note}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Equipment */}
        <section className="mb-12">
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
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Learning Path</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Beginner */}
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-lg font-semibold text-green-900 mb-3">{songData.learningPath.beginner.title}</h3>
              <p className="text-sm text-green-800 mb-4">Time Estimate: {songData.learningPath.beginner.timeEstimate}</p>
              <ul className="text-sm text-green-700 space-y-2">
                {songData.learningPath.beginner.skills.map((skill, index) => (
                  <li key={index}>• {skill}</li>
                ))}
              </ul>
            </div>

            {/* Intermediate */}
            <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
              <h3 className="text-lg font-semibold text-orange-900 mb-3">{songData.learningPath.intermediate.title}</h3>
              <p className="text-sm text-orange-800 mb-4">Time Estimate: {songData.learningPath.intermediate.timeEstimate}</p>
              <ul className="text-sm text-orange-700 space-y-2">
                {songData.learningPath.intermediate.skills.map((skill, index) => (
                  <li key={index}>• {skill}</li>
                ))}
              </ul>
            </div>

            {/* Advanced */}
            <div className="bg-red-50 rounded-xl p-6 border border-red-200">
              <h3 className="text-lg font-semibold text-red-900 mb-3">{songData.learningPath.advanced.title}</h3>
              <p className="text-sm text-red-800 mb-4">Time Estimate: {songData.learningPath.advanced.timeEstimate}</p>
              <ul className="text-sm text-red-700 space-y-2">
                {songData.learningPath.advanced.skills.map((skill, index) => (
                  <li key={index}>• {skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Practice Notes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Practice Notes</h2>
          <div className="grid md:grid-cols-3 gap-6">
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

            {/* Metronome Work */}
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-900 mb-4">Metronome Work</h3>
              <ul className="text-sm text-purple-700 space-y-2">
                {songData.practiceNotes.metronomeWork.map((work, index) => (
                  <li key={index}>• {work}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Related Songs */}
        <section className="mb-12">
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
