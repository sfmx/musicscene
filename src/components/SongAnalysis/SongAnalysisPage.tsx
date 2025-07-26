import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import SongInfoHeader from '@/components/SongAnalysis/SongInfoHeader';
import TechniquesSection from '@/components/SongAnalysis/TechniquesSection';
import SongSections from '@/components/SongAnalysis/SongSections';
import EquipmentSection from '@/components/SongAnalysis/EquipmentSection';
import LearningPathSection from '@/components/SongAnalysis/LearningPathSection';
import RelatedSongsSection from '@/components/SongAnalysis/RelatedSongsSection';
import PracticeNotesSection from '@/components/SongAnalysis/PracticeNotesSection';
import { SongData } from '@/lib/songData';

interface SongAnalysisPageProps {
  songData: SongData;
  backToAnalysisLink?: string;
}

export default function SongAnalysisPage({ 
  songData, 
  backToAnalysisLink = "/lessons/songs/song-analysis" 
}: SongAnalysisPageProps) {
  return (
    <Layout>
      <Header
        title={`"${songData.songInfo.title}" - Complete Song Analysis`}
        subtitle={`Professional breakdown of ${songData.songInfo.artist}'s ${songData.songInfo.title.toLowerCase()} with theory, technique, and equipment analysis`}
      />
      
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Navigation */}
        <nav className="mb-8 text-sm">
          <Link href={backToAnalysisLink} className="text-cyan-600 hover:text-cyan-800">
            ← Back to Song Analysis
          </Link>
        </nav>

        {/* Song Header */}
        <SongInfoHeader 
          songInfo={songData.songInfo} 
          difficulty={songData.difficulty} 
        />

        {/* Key Techniques */}
        <TechniquesSection techniques={songData.techniques} />

        {/* Song Structure */}
        <SongSections sections={songData.sections} />

        {/* Equipment & Tone */}
        <EquipmentSection equipment={songData.equipment} />

        {/* Learning Path */}
        <LearningPathSection learningPath={songData.learningPath} />

        {/* Practice Notes */}
        <PracticeNotesSection practiceNotes={songData.practiceNotes} />

        {/* Related Songs */}
        <RelatedSongsSection relatedSongs={songData.relatedSongs} />

        {/* References */}
        {songData.references && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">References & Additional Resources</h2>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="space-y-3 text-sm">
                {songData.references.ultimateGuitar && (
                  <p>
                    <strong>Ultimate Guitar:</strong>{' '}
                    <a 
                      href={songData.references.ultimateGuitar} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-cyan-600 hover:text-cyan-800"
                    >
                      Official tabs and community versions
                    </a>
                  </p>
                )}
                {songData.references.officialTab && (
                  <p><strong>Official Tab:</strong> {songData.references.officialTab}</p>
                )}
                {songData.references.videoLessons && (
                  <div>
                    <strong>Video Lessons:</strong>
                    <ul className="mt-1 ml-4 space-y-1">
                      {songData.references.videoLessons.map((lesson, i) => (
                        <li key={i}>• {lesson}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
