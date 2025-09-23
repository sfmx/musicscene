import React from 'react';
import Link from 'next/link';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';
import AlphaTexRenderer from '@/components/AlphaTexRenderer';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const progressionTypes = [
	{
		name: 'I-IV-V',
		icon: <span style={{ fontSize: 32 }}>🎼</span>,
		href: '/lessons/theory/progressions/i-iv-v',
		description: 'The foundational progression in Western music. Used in rock, pop, country, and blues.',
		formula: 'I-IV-V',
		function: 'Tonic-Subdominant-Dominant',
		color: 'bg-yellow-50 border-yellow-200 hover:bg-yellow-100',
		iconColor: 'text-yellow-600',
		mood: 'Strong & Conclusive'
	},
	{
		name: 'ii-V-I',
		icon: <span style={{ fontSize: 32 }}>🎷</span>,
		href: '/lessons/theory/progressions/ii-v-i',
		description: 'The cornerstone of jazz harmony. Creates smooth voice leading and strong resolution.',
		formula: 'ii-V-I',
		function: 'Predominant-Dominant-Tonic',
		color: 'bg-blue-50 border-blue-200 hover:bg-blue-100',
		iconColor: 'text-blue-600',
		mood: 'Jazz & Sophisticated'
	},
	{
		name: 'I-V-vi-IV',
		icon: <span style={{ fontSize: 32 }}>🎤</span>,
		href: '/lessons/theory/progressions/i-v-vi-iv',
		description: 'The "axis progression" found in countless pop hits across all decades.',
		formula: 'I-V-vi-IV',
		function: 'Tonic-Dominant-Relative Minor-Subdominant',
		color: 'bg-green-50 border-green-200 hover:bg-green-100',
		iconColor: 'text-green-600',
		mood: 'Pop & Catchy'
	},
	{
		name: '12 Bar Blues',
		icon: <span style={{ fontSize: 32 }}>🎸</span>,
		href: '/lessons/theory/progressions/12-bar-blues',
		description: 'The backbone of blues, R&B, and early rock & roll. A must-know for all guitarists.',
		formula: 'I-I-I-I-IV-IV-I-I-V-IV-I-I',
		function: 'Classic Blues Structure',
		color: 'bg-orange-50 border-orange-200 hover:bg-orange-100',
		iconColor: 'text-orange-600',
		mood: 'Blues & Soulful'
	},
	{
		name: 'vi-IV-I-V',
		icon: <span style={{ fontSize: 32 }}>🔄</span>,
		href: '/lessons/theory/progressions/vi-iv-i-v',
		description: 'Popular in modern pop and alternative rock. Creates emotional tension and release.',
		formula: 'vi-IV-I-V',
		function: 'Relative Minor Start',
		color: 'bg-purple-50 border-purple-200 hover:bg-purple-100',
		iconColor: 'text-purple-600',
		mood: 'Emotional & Modern'
	},
	{
		name: 'Circle of Fifths',
		icon: <span style={{ fontSize: 32 }}>⭕</span>,
		href: '/lessons/theory/progressions/circle-of-fifths',
		description: 'Advanced harmonic movement. Essential for jazz and classical music.',
		formula: 'vi-ii-V-I',
		function: 'Sequential Fifths Movement',
		color: 'bg-rose-50 border-rose-200 hover:bg-rose-100',
		iconColor: 'text-rose-600',
		mood: 'Classical & Complex'
	},
];

const progressionCategories = [
	{ 
		name: 'Basic Progressions',
		progressions: ['I-IV-V', 'I-V-vi-IV'],
		description: 'Essential progressions that form the foundation of popular music.',
		color: 'bg-yellow-50 border-yellow-200'
	},
	{ 
		name: 'Jazz Progressions',
		progressions: ['ii-V-I', 'Circle of Fifths'],
		description: 'Sophisticated harmonic movements used in jazz and classical music.',
		color: 'bg-blue-50 border-blue-200'
	},
	{ 
		name: 'Blues Progressions',
		progressions: ['12 Bar Blues', 'I-IV-V'],
		description: 'Traditional blues progressions that shaped rock and popular music.',
		color: 'bg-orange-50 border-orange-200'
	},
	{ 
		name: 'Modern Pop',
		progressions: ['I-V-vi-IV', 'vi-IV-I-V'],
		description: 'Contemporary progressions heard in pop, rock, and alternative music.',
		color: 'bg-green-50 border-green-200'
	},
];

const harmonicApplications = [
	{
		title: 'Song Structure',
		description: 'Progressions create the harmonic backbone of verses, choruses, and bridges',
		icon: '🏗️',
		examples: ['Verse progressions set the mood', 'Chorus progressions provide resolution', 'Bridge progressions add contrast']
	},
	{
		title: 'Emotional Impact',
		description: 'Different progressions evoke specific emotions and musical feelings',
		icon: '💫',
		examples: ['Major progressions for happiness', 'Minor progressions for sadness', 'Modal progressions for mystery']
	},
	{
		title: 'Voice Leading',
		description: 'Smooth movement between chord tones creates polished harmonic flow',
		icon: '🎭',
		examples: ['Common tones between chords', 'Step-wise bass movement', 'Contrary motion in voices']
	},
	{
		title: 'Genre Definition',
		description: 'Specific progressions characterize and define musical styles',
		icon: '🎨',
		examples: ['12-bar blues for blues/rock', 'ii-V-I for jazz', 'I-V-vi-IV for pop']
	}
];

export default function ProgressionsPage() {
	return (
		<Layout>
			<Header
				title="Music Theory: Chord Progressions"
				subtitle="Master the harmonic patterns that drive all popular music"
			/>
			<div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					{/* Navigation */}
					<div className="mb-8">
						<Link 
							href="/lessons/theory" 
							className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
						>
							<span className="mr-2">←</span>
							Back to Music Theory
						</Link>
					</div>

					{/* Hero Section */}
					<div className="text-center mb-16">
						<div className="text-6xl mb-6">🎼</div>
						<h1 className="text-4xl font-bold text-gray-900 mb-6">
							Understanding Chord Progressions
						</h1>
						<p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
							Chord progressions are sequences of chords that create the harmonic foundation of music. 
							They provide the emotional journey, structural framework, and stylistic character that defines every song. 
							Master progressions to understand how harmony works and create compelling musical experiences.
						</p>
					</div>

					{/* What Are Progressions */}
					<section className="mb-16">
						<div className="bg-white rounded-xl shadow-lg p-8">
							<h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Are Chord Progressions?</h2>
							<div className="max-w-4xl mx-auto">
								<p className="text-lg text-gray-700 mb-6 leading-relaxed">
									A chord progression is a sequence of chords played in succession that creates the harmonic foundation of a piece of music. 
									Progressions establish key centers, create emotional movement, and provide the structure that supports melody and rhythm. 
									Understanding progressions is essential because they control:
								</p>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
									<div className="bg-blue-50 rounded-lg p-6">
										<h3 className="text-xl font-semibold text-blue-900 mb-4">Harmonic Movement</h3>
										<ul className="text-blue-800 space-y-2">
											<li>• Tension and resolution patterns</li>
											<li>• Key center establishment and maintenance</li>
											<li>• Emotional arc and musical direction</li>
											<li>• Voice leading and smooth transitions</li>
										</ul>
									</div>
									<div className="bg-purple-50 rounded-lg p-6">
										<h3 className="text-xl font-semibold text-purple-900 mb-4">Musical Structure</h3>
										<ul className="text-purple-800 space-y-2">
											<li>• Song sections (verse, chorus, bridge)</li>
											<li>• Genre characteristics and style</li>
											<li>• Rhythmic and melodic support</li>
											<li>• Compositional framework and form</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</section>

					{/* Progression Categories */}
					<section className="mb-16">
						<div className="bg-white rounded-xl shadow-lg p-8">
							<h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Progression Categories</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
								{progressionCategories.map((category, index) => (
									<div key={index} className={`${category.color} rounded-lg p-6 border-2`}>
										<h3 className="text-lg font-semibold text-gray-900 mb-3">{category.name}</h3>
										<p className="text-sm text-gray-700 mb-4">{category.description}</p>
										<div className="space-y-1">
											{category.progressions.map((progression, progressionIndex) => (
												<div key={progressionIndex} className="text-xs bg-white bg-opacity-60 rounded px-2 py-1">
													{progression}
												</div>
											))}
										</div>
									</div>
								))}
							</div>
						</div>
					</section>

					{/* Harmonic Applications */}
					<section className="mb-16">
						<div className="bg-white rounded-xl shadow-lg p-8">
							<h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Harmonic Applications</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
								{harmonicApplications.map((app, index) => (
									<div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
										<div className="text-3xl mb-4 text-center">{app.icon}</div>
										<h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">{app.title}</h3>
										<p className="text-sm text-gray-600 mb-4 text-center">{app.description}</p>
										<div className="space-y-2">
											{app.examples.map((example, exampleIndex) => (
												<div key={exampleIndex} className="text-xs text-gray-500 bg-white rounded px-3 py-2">
													{example}
												</div>
											))}
										</div>
									</div>
								))}
							</div>
						</div>
					</section>

					{/* All Progressions */}
					<section className="mb-16">
						<div className="bg-white rounded-xl shadow-lg p-8">
							<h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Essential Chord Progressions</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
								{progressionTypes.map((progression) => (
									<Link
										key={progression.name}
										href={progression.href}
										className={`${progression.color} rounded-lg border-2 p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group`}
									>
										<div className="text-center mb-4">
											<div className={`text-4xl mb-2 ${progression.iconColor}`}>{progression.icon}</div>
											<h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700">
												{progression.name}
											</h3>
										</div>
										<div className="space-y-3">
											<p className="text-sm text-gray-600 text-center">{progression.description}</p>
											<div className="bg-white bg-opacity-60 rounded p-3 space-y-2">
												<div className="text-xs text-gray-500">
													<span className="font-medium">Formula:</span> {progression.formula}
												</div>
												<div className="text-xs text-gray-500">
													<span className="font-medium">Function:</span> {progression.function}
												</div>
												<div className="text-xs text-gray-500">
													<span className="font-medium">Mood:</span> {progression.mood}
												</div>
											</div>
										</div>
									</Link>
								))}
							</div>
						</div>
					</section>

					{/* Roman Numeral Analysis */}
					<section className="mb-16">
						<div className="bg-white rounded-xl shadow-lg p-8">
							<h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Roman Numeral Analysis</h2>
							<div className="max-w-4xl mx-auto">
								<p className="text-lg text-gray-700 mb-6 leading-relaxed text-center">
									Musicians use Roman numerals to describe chord progressions regardless of key. 
									This system makes it easy to transpose progressions and understand harmonic function across different musical contexts.
								</p>
								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
									<div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
										<h3 className="text-lg font-semibold text-yellow-900 mb-4">Major Key Functions</h3>
										<div className="space-y-2 text-yellow-800">
											<p>• <strong>I, IV, V:</strong> Major chords (uppercase)</p>
											<p>• <strong>ii, iii, vi:</strong> Minor chords (lowercase)</p>
											<p>• <strong>vii°:</strong> Diminished chord</p>
										</div>
									</div>
									<div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
										<h3 className="text-lg font-semibold text-blue-900 mb-4">Chord Functions</h3>
										<div className="space-y-2 text-blue-800">
											<p>• <strong>Tonic (I):</strong> Home, stability, rest</p>
											<p>• <strong>Subdominant (IV):</strong> Departure, movement</p>
											<p>• <strong>Dominant (V):</strong> Tension, wants resolution</p>
										</div>
									</div>
									<div className="bg-green-50 rounded-lg p-6 border border-green-200">
										<h3 className="text-lg font-semibold text-green-900 mb-4">Common Movements</h3>
										<div className="space-y-2 text-green-800">
											<p>• <strong>V → I:</strong> Strongest resolution</p>
											<p>• <strong>IV → I:</strong> Plagal cadence</p>
											<p>• <strong>vi → IV:</strong> Deceptive movement</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

					{/* Example in Key of C */}
					<section className="mb-16">
						<div className="bg-white rounded-xl shadow-lg p-8">
							<h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Common Chords in C Major</h2>
							<div className="max-w-6xl mx-auto">
								<p className="text-lg text-gray-700 mb-6 leading-relaxed text-center">
									Here are the diatonic chords in the key of C major, which we'll use to demonstrate progressions:
								</p>
								<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
									<div className="text-center">
										<h4 className="font-semibold mb-3 text-gray-900">I - C Major</h4>
										<SimpleFretboardDiagram chord="C_major" />
										<p className="text-sm text-gray-600 mt-2">Tonic - Home base</p>
									</div>
									<div className="text-center">
										<h4 className="font-semibold mb-3 text-gray-900">IV - F Major</h4>
										<SimpleFretboardDiagram chord="F_major" />
										<p className="text-sm text-gray-600 mt-2">Subdominant - Movement</p>
									</div>
									<div className="text-center">
										<h4 className="font-semibold mb-3 text-gray-900">V - G Major</h4>
										<SimpleFretboardDiagram chord="G_major" />
										<p className="text-sm text-gray-600 mt-2">Dominant - Tension</p>
									</div>
									<div className="text-center">
										<h4 className="font-semibold mb-3 text-gray-900">vi - A Minor</h4>
										<SimpleFretboardDiagram chord="A_minor" />
										<p className="text-sm text-gray-600 mt-2">Relative minor</p>
									</div>
								</div>
								
								{/* I-IV-V Example */}
								<div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
									<h3 className="text-xl font-semibold text-yellow-900 mb-4 text-center">I-IV-V Progression in C</h3>
									<div className="flex justify-center mb-4">
										<AlphaTexRenderer 
											alphaTex="tabstave notation=true key=C time=4/4
												notes :w C/5 F/4 G/5 C/5" 
											className="scale-75" 
											
										/>
									</div>
									<p className="text-yellow-800 text-center">
										The most fundamental progression: <strong>C Major → F Major → G Major → C Major</strong>
									</p>
								</div>
							</div>
						</div>
					</section>

					{/* Practice and Application */}
					<section className="mb-16">
						<div className="bg-white rounded-xl shadow-lg p-8">
							<h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Practice and Application</h2>
							<div className="max-w-6xl mx-auto">
								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
									<div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
										<h3 className="text-lg font-semibold text-yellow-900 mb-4">🎯 Practice Strategy</h3>
										<ul className="space-y-2 text-yellow-800">
											<li>• <strong>Start slow:</strong> Focus on clean chord changes</li>
											<li>• <strong>Use a metronome:</strong> Develop steady rhythm</li>
											<li>• <strong>Practice transitions:</strong> Smooth voice leading</li>
											<li>• <strong>All keys:</strong> Build complete versatility</li>
											<li>• <strong>Different voicings:</strong> Explore chord inversions</li>
										</ul>
									</div>
									
									<div className="bg-green-50 rounded-lg p-6 border border-green-200">
										<h3 className="text-lg font-semibold text-green-900 mb-4">🎵 Musical Application</h3>
										<ul className="space-y-2 text-green-800">
											<li>• <strong>Learn songs:</strong> Apply progressions in context</li>
											<li>• <strong>Write melodies:</strong> Over familiar progressions</li>
											<li>• <strong>Improvise:</strong> Use progressions as foundation</li>
											<li>• <strong>Arrange music:</strong> Create harmonic arrangements</li>
											<li>• <strong>Compose:</strong> Build original songs</li>
										</ul>
									</div>
									
									<div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
										<h3 className="text-lg font-semibold text-blue-900 mb-4">🎸 Guitar Techniques</h3>
										<ul className="space-y-2 text-blue-800">
											<li>• <strong>Strumming patterns:</strong> Rhythm variations</li>
											<li>• <strong>Fingerpicking:</strong> Arpeggiated progressions</li>
											<li>• <strong>Barre chords:</strong> Full fretboard mobility</li>
											<li>• <strong>Open voicings:</strong> Rich, full sounds</li>
											<li>• <strong>Power chords:</strong> Rock and metal applications</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</section>

					{/* Get Started */}
					<section>
						<div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-8 border border-gray-200">
							<h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Start Your Progression Journey</h2>
							<p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
								Begin with the fundamental progressions and gradually expand your harmonic vocabulary. 
								Understanding progressions is essential for composition, arrangement, and musical understanding.
							</p>
							<div className="grid md:grid-cols-3 gap-6">
								<Link href="/lessons/theory/progressions/i-iv-v" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-yellow-300 hover:shadow-lg transition-all duration-300">
									<div className="text-center">
										<div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition-colors">
											<span className="text-2xl">🎯</span>
										</div>
										<h3 className="text-lg font-semibold text-gray-900 mb-2">Start with I-IV-V</h3>
										<p className="text-sm text-gray-600 mb-4">
											Begin with the most fundamental progression in Western music - simple and powerful.
										</p>
										<span className="text-yellow-600 font-medium text-sm group-hover:text-yellow-700">
											Learn the foundation →
										</span>
									</div>
								</Link>
								
								<Link href="/lessons/theory/progressions/12-bar-blues" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300">
									<div className="text-center">
										<div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
											<span className="text-2xl">🎸</span>
										</div>
										<h3 className="text-lg font-semibold text-gray-900 mb-2">Master 12-Bar Blues</h3>
										<p className="text-sm text-gray-600 mb-4">
											Learn the backbone of blues, rock, and popular music.
										</p>
										<span className="text-orange-600 font-medium text-sm group-hover:text-orange-700">
											Feel the blues →
										</span>
									</div>
								</Link>
								
								<Link href="/lessons/theory/progressions/i-v-vi-iv" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300">
									<div className="text-center">
										<div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
											<span className="text-2xl">🎤</span>
										</div>
										<h3 className="text-lg font-semibold text-gray-900 mb-2">Explore Pop Progressions</h3>
										<p className="text-sm text-gray-600 mb-4">
											Discover the "axis progression" found in countless hit songs.
										</p>
										<span className="text-green-600 font-medium text-sm group-hover:text-green-700">
											Pop perfection →
										</span>
									</div>
								</Link>
							</div>
						</div>
					</section>
				</div>
			</div>
			<Footer />
		</Layout>
	);
}
