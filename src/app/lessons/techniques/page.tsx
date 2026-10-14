import type { Metadata } from 'next';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import AlphaTexRenderer from '@/components/AlphaTexRenderer';

export const metadata: Metadata = {
  title: 'Guitar Techniques: Picking, Legato, Bending & More',
  description:
    'An overview of essential guitar techniques — alternate and hybrid picking, legato, bending and vibrato, muting, slide and tapping — with what to practise, common mistakes, and links to drills and real songs.',
};

const groups = [
  {
    title: 'Picking hand',
    intro:
      'Most speed and clarity problems start in the picking hand. Aim for small, relaxed movements from the wrist, with the pick angled slightly so it glides through the string instead of catching on it.',
    items: [
      {
        name: 'Alternate picking',
        href: '/lessons/practice/technique/alternate-picking/',
        tip: 'Strict down-up motion regardless of string changes. Practise single-string runs with a metronome first, then add string crossings.',
        mistake: 'Moving from the elbow or arm, which tires quickly and limits speed.',
      },
      {
        name: 'Palm muting',
        href: '/lessons/practice/technique/palm-muting/',
        tip: 'Rest the edge of your picking hand just in front of the bridge saddles. Move it forward for a tighter chug and back for more sustain.',
        mistake: 'Resting too far up the strings, which kills the pitch as well as the sustain.',
      },
      {
        name: 'Hybrid picking',
        href: '/lessons/practice/technique/hybrid-picking/',
        tip: 'Pick with the plectrum and pluck higher strings with the middle and ring fingers. Useful for country licks and wide-interval arpeggios.',
        mistake: 'Plucked notes much louder or quieter than picked ones. Work on evening out the volume.',
      },
      {
        name: 'String skipping',
        href: '/lessons/practice/technique/string-skipping/',
        tip: 'Jump over a string without losing time. Start with octave shapes, then move to skipped-string arpeggios.',
        mistake: 'Letting the skipped string ring by accident. Mute it with the fretting hand.',
      },
      {
        name: 'Sweep picking',
        href: '/lessons/practice/technique/sweep-picking/',
        tip: 'One continuous pick stroke across several strings while the fretting hand plays one note per string and releases each note as soon as the next one sounds.',
        mistake: 'Notes ringing together like a strummed chord. The fretting hand has to roll off each note.',
      },
    ],
  },
  {
    title: 'Fretting hand',
    intro:
      'Clean fretting comes from pressing just behind the fret, with only as much pressure as the note needs. Keep the thumb relaxed behind the neck and let your fingers hover close to the strings.',
    items: [
      {
        name: 'Legato (hammer-ons & pull-offs)',
        href: '/lessons/practice/technique/legato/',
        tip: 'Hammer on with the fingertip, firmly enough that the note matches the volume of a picked one. When pulling off, flick the string slightly downward rather than just lifting.',
        mistake: 'Hammered notes that are much quieter than picked ones.',
      },
      {
        name: 'Bending & vibrato',
        href: '/lessons/practice/technique/bending-vibrato/',
        tip: 'Bend with two or three fingers together and push from the wrist. Check your target pitch by fretting it first, then bend up to match it.',
        mistake: 'Bending flat. A bend that falls short of the target pitch sounds out of tune straight away.',
      },
      {
        name: 'Slide',
        href: '/lessons/practice/technique/slide-techniques/',
        tip: 'Keep finger pressure steady through the slide and arrive exactly on the target fret in time.',
        mistake: 'Easing off pressure mid-slide, which makes the note die before it arrives.',
      },
      {
        name: 'Tapping',
        href: '/lessons/practice/technique/tapping/',
        tip: 'Tap with the picking-hand middle or index finger and pull off slightly sideways to sound the next note.',
        mistake: 'Open strings ringing. Mute idle strings with both hands.',
      },
      {
        name: 'Harmonics',
        href: '/lessons/practice/technique/harmonics/',
        tip: 'Touch the string lightly directly above the 12th, 7th or 5th fret wire (not the fret space) and release just after picking.',
        mistake: 'Pressing the string down, which frets a normal note instead.',
      },
    ],
  },
];

const inSongs = [
  { label: 'Rhythm guitar techniques', href: '/lessons/songs/techniques/rhythm/' },
  { label: 'Lead guitar techniques', href: '/lessons/songs/techniques/lead/' },
  { label: 'Bending in famous solos', href: '/lessons/songs/techniques/bending/' },
  { label: 'Slide & legato in songs', href: '/lessons/songs/techniques/slide-legato/' },
  { label: 'Fingerpicking patterns', href: '/lessons/songs/techniques/fingerpicking/' },
  { label: 'Power chords', href: '/lessons/songs/techniques/power-chords/' },
  { label: 'Percussive techniques', href: '/lessons/songs/techniques/percussive/' },
  { label: 'Advanced picking', href: '/lessons/songs/techniques/advanced-picking/' },
];

export default function GuitarTechniquesPage() {
  return (
    <Layout>
      <Header
        title="Guitar Techniques"
        subtitle="What each technique is for, how to practise it, and the mistakes that hold most players back."
      />
      <div className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
        <main className="max-w-5xl mx-auto px-4 py-12">
          <section className="mb-12 max-w-3xl">
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              Technique is only useful when it serves the music. The aim is to play what you hear cleanly, in time and without
              tension. Practise slowly enough to play each exercise perfectly, then raise the metronome a few BPM at a time.
              Playing fast and sloppy mostly trains the sloppiness.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Each technique below links to a dedicated drill with tempo targets. Once it feels comfortable, try it in context
              using the song-based technique lessons at the bottom of the page.
            </p>
          </section>

          {groups.map((g) => (
            <section key={g.title} className="mb-12">
              <h2 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">{g.title}</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-3xl">{g.intro}</p>
              <div className="grid gap-4 md:grid-cols-2">
                {g.items.map((it) => (
                  <div
                    key={it.href}
                    className="bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm"
                  >
                    <h3 className="text-lg font-semibold mb-2">
                      <Link href={it.href} className="text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-amber-400">
                        {it.name} →
                      </Link>
                    </h3>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                      <span className="font-semibold">How: </span>
                      {it.tip}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      <span className="font-semibold">Common mistake: </span>
                      {it.mistake}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">Quick exercise: hammer-on accuracy</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4 max-w-3xl">
              Pick the first note, then hammer on with the ring finger, two frets higher, without picking again. The hammered note
              should be as loud as the picked one. Start at 80 BPM and only speed up when every note is even.
            </p>
            <div className="p-4 bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <AlphaTexRenderer
                alphaTex={`\\title "Hammer-on Exercise"
\\tempo 80
.
:4 5.3{h} 7.3 5.3{h} 7.3 | 5.3{h} 7.3 5.3{h} 7.3 |
5.2{h} 7.2 5.2{h} 7.2 | 5.2{h} 7.2 5.2{h} 7.2 |`}
              />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Techniques in real songs</h2>
            <ul className="grid gap-2 sm:grid-cols-2 text-sm">
              {inSongs.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-blue-600 dark:text-amber-400 hover:underline">
                    {l.label} →
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </Layout>
  );
}
