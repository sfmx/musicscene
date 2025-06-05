import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const progressionTypes = [
	{
		name: 'I-IV-V',
		icon: <span style={{ fontSize: 32 }}>🎼</span>,
		href: '/lessons/theory/progressions/i-iv-v',
		description: 'The classic rock, pop, and blues progression.',
	},
	{
		name: 'ii-V-I',
		icon: <span style={{ fontSize: 32 }}>🎷</span>,
		href: '/lessons/theory/progressions/ii-v-i',
		description: 'Essential in jazz. Smooth and resolved.',
	},
	{
		name: 'I-V-vi-IV',
		icon: <span style={{ fontSize: 32 }}>🎤</span>,
		href: '/lessons/theory/progressions/i-v-vi-iv',
		description: 'The “pop” progression. Used in countless hits.',
	},
	{
		name: '12 Bar Blues',
		icon: <span style={{ fontSize: 32 }}>🎸</span>,
		href: '/lessons/theory/progressions/12-bar-blues',
		description: 'Foundation of blues and rock & roll.',
	},
	{
		name: 'vi-IV-I-V',
		icon: <span style={{ fontSize: 32 }}>🔄</span>,
		href: '/lessons/theory/progressions/vi-iv-i-v',
		description: 'Popular in modern pop and rock.',
	},
	{
		name: 'Circle of Fifths',
		icon: <span style={{ fontSize: 32 }}>⭕</span>,
		href: '/lessons/theory/progressions/circle-of-fifths',
		description: 'Moves through all keys. Great for practice.',
	},
];

export default function ProgressionsPage() {
	return (
		<Layout>
			<Header
				title="Chord Progressions"
				subtitle="Explore the most important progressions in popular music. Click a progression to learn more."
			/>
			<main className="prose mx-auto px-4 py-8">
				<h1>Chord Progressions</h1>
				<p>
					Discover common chord progressions and how they shape popular music.
					Click a progression below to explore its sound, theory, and examples.
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-8">
					{progressionTypes.map((prog) => (
						<Link
							key={prog.name}
							href={prog.href}
							className="flex flex-col items-center bg-slate-100 rounded-lg p-4 shadow hover:bg-slate-200 transition"
						>
							<div className="mb-2 text-blue-600">{prog.icon}</div>
							<div className="font-bold text-lg">{prog.name}</div>
							<div className="text-sm text-gray-600 text-center">
								{prog.description}
							</div>
						</Link>
					))}
				</div>
			</main>
			<Footer />
		</Layout>
	);
}
