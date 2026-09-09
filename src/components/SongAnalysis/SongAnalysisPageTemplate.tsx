"use client";

import React from "react";
import Link from "next/link";
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import { getSongData } from '@/lib/songData';
import SongInfoSection from './SongInfoSection';
import ConsolidatedMusicalAnalysis from './ConsolidatedMusicalAnalysis';
import ImprovedChordProgressionVisualization from './ImprovedChordProgressionVisualization';
import ChordReferenceBox from './ChordReferenceBox';
import ScaleVisualization from './ScaleVisualization';
import SectionNavigation from './SectionNavigation';
import AlphaTexRenderer from '@/components/AlphaTexRenderer';

import { getDifficultyColor } from '@/utils/theme';
import RelatedContentSection from '@/components/RelatedContent/RelatedContentSection';
import AdSlot from '@/components/Revenue/AdSlot';
import AffiliateLink from '@/components/Revenue/AffiliateLink';
import Breadcrumbs from '@/components/Breadcrumbs';
import SequentialNav from '@/components/SequentialNav';
import { getSequentialNav } from '@/lib/sequentialNav';
import ExternalSongLinks from './ExternalSongLinks';
import WhyThisSongWorksSection from './WhyThisSongWorksSection';
import JsonLdScript from '@/components/JsonLdScript';
import { SITE_CONFIG } from '@/lib/siteConfig';

interface SongAnalysisPageTemplateProps {
  songSlug: string;
  displayName: string;
}

export default function SongAnalysisPageTemplate({ songSlug, displayName }: SongAnalysisPageTemplateProps) {
  const songData = getSongData(songSlug);
  const nav = getSequentialNav('song-analysis', songSlug);

  if (!songData) {
    return (
      <Layout>
        <Header
          title="Song Not Found"
          subtitle="The requested song analysis could not be found"
          category="Directory"
        />
        <main className="max-w-6xl mx-auto px-4 py-16 text-center text-slate-100 bg-slate-950">
          <h1 className="text-2xl font-bold text-white mb-4">Song Analysis Not Found</h1>
          <p className="text-slate-400 mb-8">The song &quot;{songSlug}&quot; could not be found in our database.</p>
          <Link href="/lessons/songs/song-analysis" className="text-amber-400 hover:text-amber-300 font-bold hover:underline">
            ← Back to Song Analysis Directory
          </Link>
        </main>
      </Layout>
    );
  }

  const songJsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'MusicComposition',
      name: songData.songInfo.title,
      composer: {
        '@type': 'Person',
        name: songData.songInfo.artist,
      },
      musicalKey: songData.musicalAnalysis?.keyAndScale?.primaryKey || songData.songInfo.key,
      timeRequired: songData.songInfo.duration,
      genre: songData.songInfo.genre,
      url: `${SITE_CONFIG.baseUrl}/lessons/songs/song-analysis/${songSlug}/`,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: `"${displayName}" - Complete Guitar Song Analysis & Harmonic Breakdown`,
      description: `Learn how to play and understand "${songData.songInfo.title}" by ${songData.songInfo.artist}. Complete guitar chords, techniques, scale visualizations, and harmonic music theory analysis.`,
      author: {
        '@type': 'Person',
        name: 'Jason Smith',
        jobTitle: 'Founder & Lead Instructor',
        url: `${SITE_CONFIG.baseUrl}/about/`,
      },
      publisher: {
        '@type': 'Organization',
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.baseUrl,
      },
      mainEntityOfPage: `${SITE_CONFIG.baseUrl}/lessons/songs/song-analysis/${songSlug}/`,
    },
  ];

  return (
    <Layout>
      <div className="bg-slate-950 min-h-screen text-slate-100">
        <Header
          title={`"${displayName}" — Guitar Analysis & Breakdown`}
          subtitle={`Note-for-note breakdown of ${songData.songInfo.artist}'s "${displayName}" with chords, scales, theory, and tone analysis.`}
          category="Song Analysis & Harmonic Breakdown"
          badges={[
            { label: 'Key', value: songData.musicalAnalysis?.keyAndScale?.primaryKey || songData.songInfo.key },
            { label: 'Tempo', value: songData.songInfo.tempo },
            { label: 'Tuning', value: songData.songInfo.tuning },
            { label: 'Difficulty', value: songData.difficulty?.overall || 'Intermediate', color: 'bg-amber-500/10 text-amber-300 border-amber-500/30' },
          ]}
        />
        <JsonLdScript data={songJsonLd} />
        
        <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          {/* Section Navigation */}
          <SectionNavigation
            sections={[
              "Song Info",
              "Why It Works",
              "Musical Analysis",
              "Chord Reference",
              "Scale Patterns",
              "Chord Progressions",
              "Key Techniques",
              "Practice Exercises",
              "Equipment & Tone",
              "Learning Path",
              "Practice Notes",
              "Related Songs"
            ]}
          />

          {/* Navigation Breadcrumbs */}
          <Breadcrumbs pathname={`/lessons/songs/song-analysis/${songSlug}`} pageTitle={displayName} />

          {/* Song Header */}
          <div id="song-info">
            <SongInfoSection
              songData={songData}
              displayName={displayName}
            />
            <div className="mb-10 -mt-6 px-1">
              <ExternalSongLinks title={songData.songInfo.title} artist={songData.songInfo.artist} />
            </div>
          </div>

          {/* Why This Song Works (Harmonic Breakdown) */}
          <WhyThisSongWorksSection songSlug={songSlug} displayName={displayName} />

          {/* Musical Analysis */}
          <div id="musical-analysis">
            <ConsolidatedMusicalAnalysis songData={songData} />
          </div>

          {/* Chord Reference */}
          {songData.musicalAnalysis && (
            <div id="chord-reference">
              <ChordReferenceBox
                chords={[
                  ...songData.musicalAnalysis.chordProgressions.mainProgression.chords,
                  ...songData.musicalAnalysis.chordProgressions.sectionProgressions.flatMap(section => section.progression.split(' - ').map(chord => chord.trim()))
                ]}
              />
            </div>
          )}

          {/* Scale Visualization */}
          {songData.musicalAnalysis && (
            <div id="scale-patterns">
              <ScaleVisualization
                scales={songData.musicalAnalysis.keyAndScale.scalesUsed}
                primaryKey={songData.musicalAnalysis.keyAndScale.primaryKey}
              />
            </div>
          )}

          {/* Chord Progressions */}
          <section id="chord-progressions" className="mb-12">
            <ImprovedChordProgressionVisualization songData={songData} />
          </section>

          {/* Key Techniques */}
          <section id="key-techniques" className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                Fretboard Execution
              </span>
              <h2 className="text-2xl font-black text-white">Key Techniques</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {songData.techniques.map((technique, index) => (
                <div key={index} className="bg-slate-900/90 rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-bold text-white">{technique.name}</h3>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs border ${getDifficultyColor(technique.difficulty)}`}>
                        {technique.difficulty}
                      </span>
                    </div>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">{technique.description}</p>
                    
                    {technique.details.chords && technique.details.chords.length > 0 && (
                      <div className="mb-4 bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                        <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Uses chords:</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {Array.from(new Set(technique.details.chords)).map((chord, chordIndex) => (
                            <span key={chordIndex} className="px-2.5 py-1 bg-slate-900 text-amber-300 border border-slate-800 rounded-lg text-xs font-mono font-bold">
                              {chord}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {technique.details.progression && (
                      <div className="mb-4 bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                        <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">Progression:</h4>
                        <p className="text-xs font-mono font-bold text-amber-300">{technique.details.progression}</p>
                      </div>
                    )}

                    {technique.details.tips && technique.details.tips.length > 0 && (
                      <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                        <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">Technique Tips:</h4>
                        <ul className="text-xs text-slate-300 space-y-1.5">
                          {technique.details.tips.map((tip, tipIndex) => (
                            <li key={tipIndex} className="flex items-start gap-1.5">
                              <span className="text-amber-400 font-bold">•</span>
                              <span>{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Practice Exercises */}
          {songData.sections && songData.sections.some(s => s.alphaTab) && (
            <section id="practice-exercises" className="mb-12">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                  Interactive Tab & Audio
                </span>
                <h2 className="text-2xl font-black text-white">Practice Exercises</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Scale and technique exercises in the key of {songData.musicalAnalysis?.keyAndScale?.primaryKey || songData.songInfo.key || 'the song'}. Switch instrument sounds (Acoustic Steel, Nylon, Clean Electric, Piano) and practice at your own tempo.
              </p>
              <div className="space-y-6">
                {songData.sections.filter(s => s.alphaTab).map((section, index) => (
                  <div key={index} className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 shadow-xl">
                    <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
                      <div>
                        <h3 className="text-base font-bold text-white">{section.name}</h3>
                        {section.exerciseLabel && (
                          <p className="text-xs font-bold text-amber-400 mt-0.5">{section.exerciseLabel}</p>
                        )}
                      </div>
                      <span className="text-xs font-mono text-slate-400 bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800">{section.timeStamp}</span>
                    </div>
                    <p className="text-xs text-slate-300 mb-4">{section.description}</p>
                    <AlphaTexRenderer
                      alphaTex={section.alphaTab!}
                    />
                    {section.notes && section.notes.length > 0 && (
                      <ul className="mt-4 text-xs text-slate-400 space-y-1 bg-slate-950 p-3 rounded-xl border border-slate-800">
                        {section.notes.slice(0, 3).map((note, ni) => (
                          <li key={ni} className="flex items-start gap-1.5">
                            <span className="text-amber-400">•</span>
                            <span>{note}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Equipment */}
          <section id="equipment-&-tone" className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                Rig & Signal Chain
              </span>
              <h2 className="text-2xl font-black text-white">Equipment & Tone Setup</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Guitar */}
              <div className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 shadow-xl flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                    <span>🎸</span> Guitar
                  </h3>
                  <div className="space-y-3 text-xs">
                    <div>
                      <p className="font-bold text-slate-400 uppercase text-[10px] mb-1">Recommended Model:</p>
                      <div className="text-slate-200 font-semibold"><AffiliateLink productName={songData.equipment.guitar.recommended} /></div>
                    </div>
                    <div>
                      <p className="font-bold text-slate-400 uppercase text-[10px] mb-1">Pickup Type:</p>
                      <p className="text-slate-300 font-medium">{songData.equipment.guitar.pickup}</p>
                    </div>
                    {songData.equipment.guitar.alternatives.length > 0 && (
                      <div>
                        <p className="font-bold text-slate-400 uppercase text-[10px] mb-1">Alternatives:</p>
                        <ul className="text-slate-300 space-y-1">
                          {songData.equipment.guitar.alternatives.map((alt, index) => (
                            <li key={index}>• <AffiliateLink productName={alt} /></li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Amplifier */}
              <div className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 shadow-xl flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                    <span>⚡</span> Amplifier & Settings
                  </h3>
                  <div className="space-y-3 text-xs">
                    <div>
                      <p className="font-bold text-slate-400 uppercase text-[10px] mb-1">Recommended Amp:</p>
                      <div className="text-slate-200 font-semibold"><AffiliateLink productName={songData.equipment.amp.recommended} /></div>
                    </div>
                    <div>
                      <p className="font-bold text-slate-400 uppercase text-[10px] mb-1">Tone Stack Dial-In:</p>
                      <div className="grid grid-cols-2 gap-1.5 font-mono text-[11px] bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                        <p>Gain: <span className="text-amber-300">{songData.equipment.amp.settings.gain}</span></p>
                        <p>Treble: <span className="text-amber-300">{songData.equipment.amp.settings.treble}</span></p>
                        <p>Middle: <span className="text-amber-300">{songData.equipment.amp.settings.middle}</span></p>
                        <p>Bass: <span className="text-amber-300">{songData.equipment.amp.settings.bass}</span></p>
                        <p className="col-span-2">Presence: <span className="text-amber-300">{songData.equipment.amp.settings.presence}</span></p>
                      </div>
                    </div>
                    {songData.equipment.amp.alternatives.length > 0 && (
                      <div>
                        <p className="font-bold text-slate-400 uppercase text-[10px] mb-1">Alternatives:</p>
                        <ul className="text-slate-300 space-y-1">
                          {songData.equipment.amp.alternatives.map((alt, index) => (
                            <li key={index}>• <AffiliateLink productName={alt} /></li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Effects */}
              <div className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 shadow-xl flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                    <span>🎛️</span> Effects Pedals
                  </h3>
                  <div className="space-y-3 text-xs">
                    <div>
                      <p className="font-bold text-slate-400 uppercase text-[10px] mb-1">Overdrive / Distortion:</p>
                      <p className="text-slate-300">{songData.equipment.effects.distortion}</p>
                    </div>
                    <div>
                      <p className="font-bold text-slate-400 uppercase text-[10px] mb-1">Reverb / Delay:</p>
                      <p className="text-slate-300">{songData.equipment.effects.reverb}</p>
                    </div>
                    <div>
                      <p className="font-bold text-slate-400 uppercase text-[10px] mb-1">Modulation / Other:</p>
                      <p className="text-slate-300">{songData.equipment.effects.other}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <AdSlot slotId="content-mid" format="rectangle" />

          {/* Learning Path */}
          <section id="learning-path" className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                Roadmap
              </span>
              <h2 className="text-2xl font-black text-white">Recommended Learning Path</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Beginner */}
              <div className="bg-slate-900/90 rounded-2xl p-6 border border-emerald-500/30 shadow-xl">
                <h3 className="text-base font-bold text-emerald-400 mb-2">{songData.learningPath.beginner.title}</h3>
                <p className="text-xs text-slate-400 font-mono mb-4">⏱️ {songData.learningPath.beginner.timeEstimate}</p>
                <ul className="text-xs text-slate-300 space-y-2">
                  {songData.learningPath.beginner.steps.map((step, index) => (
                    <li key={index} className="flex items-start gap-1.5">
                      <span className="text-emerald-400 font-bold">•</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Intermediate */}
              <div className="bg-slate-900/90 rounded-2xl p-6 border border-amber-500/30 shadow-xl">
                <h3 className="text-base font-bold text-amber-400 mb-2">{songData.learningPath.intermediate.title}</h3>
                <p className="text-xs text-slate-400 font-mono mb-4">⏱️ {songData.learningPath.intermediate.timeEstimate}</p>
                <ul className="text-xs text-slate-300 space-y-2">
                  {songData.learningPath.intermediate.steps.map((step: any, index: any) => (
                    <li key={index} className="flex items-start gap-1.5">
                      <span className="text-amber-400 font-bold">•</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Advanced */}
              <div className="bg-slate-900/90 rounded-2xl p-6 border border-rose-500/30 shadow-xl">
                <h3 className="text-base font-bold text-rose-400 mb-2">{songData.learningPath.advanced.title}</h3>
                <p className="text-xs text-slate-400 font-mono mb-4">⏱️ {songData.learningPath.advanced.timeEstimate}</p>
                <ul className="text-xs text-slate-300 space-y-2">
                  {songData.learningPath.advanced.steps.map((step, index) => (
                    <li key={index} className="flex items-start gap-1.5">
                      <span className="text-rose-400 font-bold">•</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Practice Notes */}
          <section id="practice-notes" className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                Practice Room
              </span>
              <h2 className="text-2xl font-black text-white">Practice Notes & Routine</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Common Mistakes */}
              <div className="bg-slate-900/90 rounded-2xl p-6 border border-rose-500/30 shadow-xl">
                <h3 className="text-base font-bold text-rose-400 mb-4 flex items-center gap-2">
                  <span>⚠️</span> Common Mistakes to Avoid
                </h3>
                <ul className="text-xs text-slate-300 space-y-2">
                  {songData.practiceNotes.commonMistakes.map((mistake, index) => (
                    <li key={index} className="flex items-start gap-1.5">
                      <span className="text-rose-400 font-bold">•</span>
                      <span>{mistake}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Practice Routine */}
              <div className="bg-slate-900/90 rounded-2xl p-6 border border-blue-500/30 shadow-xl">
                <h3 className="text-base font-bold text-blue-400 mb-4 flex items-center gap-2">
                  <span>⏱️</span> Targeted Practice Routine
                </h3>
                <ul className="text-xs text-slate-300 space-y-2">
                  {songData.practiceNotes.practiceRoutine.map((routine, index) => (
                    <li key={index} className="flex items-start gap-1.5">
                      <span className="text-blue-400 font-bold">•</span>
                      <span>{routine}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Focus Areas */}
              {songData.practiceNotes.focusAreas && songData.practiceNotes.focusAreas.length > 0 && (
                <div className="bg-slate-900/90 rounded-2xl p-6 border border-emerald-500/30 shadow-xl">
                  <h3 className="text-base font-bold text-emerald-400 mb-4 flex items-center gap-2">
                    <span>🎯</span> Key Focus Areas
                  </h3>
                  <ul className="text-xs text-slate-300 space-y-2">
                    {songData.practiceNotes.focusAreas.map((area, index) => (
                      <li key={index} className="flex items-start gap-1.5">
                        <span className="text-emerald-400 font-bold">•</span>
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Metronome Work */}
              {songData.practiceNotes.metronomeWork && songData.practiceNotes.metronomeWork.length > 0 && (
                <div className="bg-slate-900/90 rounded-2xl p-6 border border-purple-500/30 shadow-xl">
                  <h3 className="text-base font-bold text-purple-400 mb-4 flex items-center gap-2">
                    <span>⏱️</span> Metronome Drills
                  </h3>
                  <ul className="text-xs text-slate-300 space-y-2">
                    {songData.practiceNotes.metronomeWork.map((work, index) => (
                      <li key={index} className="flex items-start gap-1.5">
                        <span className="text-purple-400 font-bold">•</span>
                        <span>{work}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>

          <AdSlot slotId="content-bottom" format="banner" />

          <RelatedContentSection contentId={`song-analysis:${songSlug}`} />

          {/* Related Songs */}
          <section id="related-songs" className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                Catalog Connections
              </span>
              <h2 className="text-2xl font-black text-white">Related Songs</h2>
            </div>
            
            {/* Artist Songs */}
            {songData.relatedSongs.acdc && songData.relatedSongs.acdc.length > 0 && (
              <div className="mb-8">
                <h3 className="text-base font-bold text-slate-300 mb-4">More from this Artist</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {songData.relatedSongs.acdc.map((song, index) => (
                    <div key={index} className="bg-slate-900/90 rounded-2xl p-5 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group">
                      <div>
                        <h4 className="font-bold text-white group-hover:text-amber-300 transition-colors mb-2">{song.title}</h4>
                        <p className="text-xs text-slate-400 mb-3">{song.similarity}</p>
                      </div>
                      {song.link && (
                        <Link href={song.link} className="text-amber-400 group-hover:text-amber-300 font-bold text-xs inline-flex items-center gap-1 hover:underline">
                          <span>View Analysis</span>
                          <span>➔</span>
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
                <h3 className="text-base font-bold text-slate-300 mb-4">Songs With Similar Techniques</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {songData.relatedSongs.similarTechniques.map((song, index) => (
                    <div key={index} className="bg-slate-900/90 rounded-2xl p-5 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-bold text-white group-hover:text-amber-300 transition-colors">{song.title}</h4>
                          {song.technique && (
                            <span className="text-[10px] font-bold bg-slate-950 text-blue-400 border border-slate-800 px-2 py-0.5 rounded-full">
                              {song.technique}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-500 mb-2">by {song.artist}</p>
                        <p className="text-xs text-slate-400">{song.similarity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>

          <SequentialNav nav={nav} typeLabel="Song" />
        </main>
      </div>
    </Layout>
  );
}
