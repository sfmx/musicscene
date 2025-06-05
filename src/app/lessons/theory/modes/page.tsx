import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const modeTypes = [
	{
		name: 'Ionian (Major)',
		icon: <span style={{ fontSize: 32 }}>😀</span>,
		href: '/lessons/theory/modes/ionian',
		description: 'Bright and happy. The standard major scale.',
	},
	{
		name: 'Dorian',
		icon: <span style={{ fontSize: 32 }}>😎</span>,
		href: '/lessons/theory/modes/dorian',
		description: 'Minor feel with a jazzy twist. Great for funk and jazz.',
	},
	{
		name: 'Phrygian',
		icon: <span style={{ fontSize: 32 }}>😮</span>,
		href: '/lessons/theory/modes/phrygian',
		description: 'Exotic and Spanish flavor. Flat 2nd degree.',
	},
	{
		name: 'Lydian',
		icon: <span style={{ fontSize: 32 }}>🌟</span>,
		href: '/lessons/theory/modes/lydian',
		description: 'Dreamy and bright. Raised 4th degree.',
	},
	{
		name: 'Mixolydian',
		icon: <span style={{ fontSize: 32 }}>😏</span>,
		href: '/lessons/theory/modes/mixolydian',
		description: 'Bluesy and dominant. Flat 7th degree.',
	},
	{
		name: 'Aeolian (Minor)',
		icon: <span style={{ fontSize: 32 }}>😢</span>,
		href: '/lessons/theory/modes/aeolian',
		description: 'Natural minor scale. Sad and emotional.',
	},
	{
		name: 'Locrian',
		icon: <span style={{ fontSize: 32 }}>😱</span>,
		href: '/lessons/theory/modes/locrian',
		description: 'Dissonant and unstable. Flat 2nd and 5th.',
	},
];

export default function ModesPage() {
	return (
		<Layout>
			<Header
				title="Modes"
				subtitle="Discover the seven modes of the major scale. Click a mode to learn more."
			/>
			<main className="prose mx-auto px-4 py-8">
				<h1>Musical Modes</h1>
				<p>
					Modes are variations of the major scale, each with its own unique sound
					and mood. Click a mode below to explore its theory, sound, and fretboard
					patterns.
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-8">
					{modeTypes.map((mode) => (
						<Link
							key={mode.name}
							href={mode.href}
							className="flex flex-col items-center bg-slate-100 rounded-lg p-4 shadow hover:bg-slate-200 transition"
						>
							<div className="mb-2 text-blue-600">{mode.icon}</div>
							<div className="font-bold text-lg">{mode.name}</div>
							<div className="text-sm text-gray-600 text-center">
								{mode.description}
							</div>
						</Link>
					))}
				</div>
			</main>
			<Footer />
		</Layout>
	);
}
