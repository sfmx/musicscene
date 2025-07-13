import React from 'react';
import Link from 'next/link';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const progressionTypes = [
	{
		name: 'I-IV-V',
		icon: <span style={{ fontSize: 32 }}>🎼</span>,
		href: '/lessons/theory/progressions/i-iv-v',
		description: 'The foundational progression in Western music. Used in rock, pop, country, and blues.',
	},
	{
		name: 'ii-V-I',
		icon: <span style={{ fontSize: 32 }}>🎷</span>,
		href: '/lessons/theory/progressions/ii-v-i',
		description: 'The cornerstone of jazz harmony. Creates smooth voice leading and strong resolution.',
	},
	{
		name: 'I-V-vi-IV',
		icon: <span style={{ fontSize: 32 }}>🎤</span>,
		href: '/lessons/theory/progressions/i-v-vi-iv',
		description: 'The "axis progression" found in countless pop hits across all decades.',
	},
	{
		name: '12 Bar Blues',
		icon: <span style={{ fontSize: 32 }}>🎸</span>,
		href: '/lessons/theory/progressions/12-bar-blues',
		description: 'The backbone of blues, R&B, and early rock & roll. A must-know for all guitarists.',
	},
	{
		name: 'vi-IV-I-V',
		icon: <span style={{ fontSize: 32 }}>🔄</span>,
		href: '/lessons/theory/progressions/vi-iv-i-v',
		description: 'Popular in modern pop and alternative rock. Creates emotional tension and release.',
	},
	{
		name: 'Circle of Fifths',
		icon: <span style={{ fontSize: 32 }}>⭕</span>,
		href: '/lessons/theory/progressions/circle-of-fifths',
		description: 'Advanced harmonic movement. Essential for jazz and classical music.',
	},
];

export default function ProgressionsPage() {
	return (
		<Layout>
			<Header
				title="Chord Progressions"
				subtitle="Master the harmonic foundations that drive all popular music"
			/>
			
			<main className="prose mx-auto px-4 py-8">
				{/* Hero Section */}
				<div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-8 mb-8 not-prose">
					<div className="max-w-4xl mx-auto">
						<h1 className="text-4xl font-bold text-gray-800 mb-4">
							Chord Progressions: The DNA of Music
						</h1>
						<p className="text-xl text-gray-600 mb-6">
							Learn the essential chord progressions that form the backbone of virtually every song you know and love.
						</p>
						<div className="bg-blue-50 rounded-lg p-4">
							<h3 className="font-semibold text-blue-800 mb-2">What You&apos;ll Master:</h3>
							<ul className="text-blue-700 space-y-1">
								<li>• The most common progressions in popular music</li>
								<li>• Roman numeral analysis and chord function</li>
								<li>• How to play progressions in any key</li>
								<li>• Voice leading and smooth chord transitions</li>
								<li>• Genre-specific applications and variations</li>
							</ul>
						</div>
					</div>
				</div>

				{/* Progression Grid */}
				<section className="mb-12">
					<h2 className="text-3xl font-bold mb-6">Essential Progressions</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-8">
						{progressionTypes.map((prog) => (
							<Link
								key={prog.name}
								href={prog.href}
								className="flex flex-col items-center bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300"
							>
								<div className="mb-4 text-blue-600">{prog.icon}</div>
								<div className="font-bold text-xl mb-3 text-center">{prog.name}</div>
								<div className="text-sm text-gray-600 text-center leading-relaxed">
									{prog.description}
								</div>
							</Link>
						))}
					</div>
				</section>

				{/* Theory Overview */}
				<section className="mb-12">
					<h2 className="text-3xl font-bold mb-6">Understanding Chord Progressions</h2>
					
					<div className="grid md:grid-cols-2 gap-6 mb-8">
						<div className="bg-green-50 rounded-lg p-6">
							<h3 className="text-xl font-semibold mb-4 text-green-800">What Are Chord Progressions?</h3>
							<p className="text-green-700 mb-4">
								A chord progression is a sequence of chords that creates the harmonic foundation of a song. 
								These patterns of chord movement create the emotional journey that listeners experience.
							</p>
							<ul className="space-y-2 text-green-700">
								<li>• <strong>Movement:</strong> How chords flow from one to another</li>
								<li>• <strong>Function:</strong> Each chord serves a harmonic purpose</li>
								<li>• <strong>Resolution:</strong> Tension and release create musical satisfaction</li>
							</ul>
						</div>
						
						<div className="bg-purple-50 rounded-lg p-6">
							<h3 className="text-xl font-semibold mb-4 text-purple-800">Roman Numeral Analysis</h3>
							<p className="text-purple-700 mb-4">
								Musicians use Roman numerals to describe chord progressions regardless of key. 
								This system makes it easy to transpose and understand harmonic function.
							</p>
							<div className="space-y-2 text-purple-700">
								<p>• <strong>I, IV, V:</strong> Major chords (uppercase)</p>
								<p>• <strong>ii, iii, vi:</strong> Minor chords (lowercase)</p>
								<p>• <strong>vii°:</strong> Diminished chord</p>
							</div>
						</div>
					</div>
				</section>

				{/* Example in Key of C */}
				<section className="mb-12">
					<h2 className="text-3xl font-bold mb-6">Common Chords in C Major</h2>
					<div className="bg-gray-50 rounded-lg p-6">
						<p className="mb-6">Here are the diatonic chords in the key of C major, which we&apos;ll use in our progressions:</p>
						<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
							<div className="text-center">
								<h4 className="font-semibold mb-2">I - C Major</h4>
								<SimpleFretboardDiagram chord="C_major" />
							</div>
							<div className="text-center">
								<h4 className="font-semibold mb-2">IV - F Major</h4>
								<SimpleFretboardDiagram chord="F_major" />
							</div>
							<div className="text-center">
								<h4 className="font-semibold mb-2">V - G Major</h4>
								<SimpleFretboardDiagram chord="G_major" />
							</div>
							<div className="text-center">
								<h4 className="font-semibold mb-2">vi - A Minor</h4>
								<SimpleFretboardDiagram chord="A_minor" />
							</div>
						</div>
					</div>
				</section>

				{/* Practice Tips */}
				<section className="mb-12">
					<h2 className="text-3xl font-bold mb-6">How to Practice Progressions</h2>
					
					<div className="bg-yellow-50 rounded-lg p-6 mb-6">
						<h3 className="text-lg font-semibold mb-3 text-yellow-800">🎯 Practice Strategy</h3>
						<ul className="space-y-2 text-yellow-700">
							<li>• <strong>Start slow:</strong> Focus on clean chord changes</li>
							<li>• <strong>Use a metronome:</strong> Develop steady rhythm</li>
							<li>• <strong>Practice in different keys:</strong> Build versatility</li>
							<li>• <strong>Learn songs:</strong> Apply progressions in context</li>
							<li>• <strong>Experiment with voicings:</strong> Find your sound</li>
						</ul>
					</div>
				</section>
			</main>
			
			<Footer />
		</Layout>
	);
}
