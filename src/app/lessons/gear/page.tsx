import Link from 'next/link'
import React from 'react'
import Layout from '@/components/Layout'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const gearCategories = [
  {
    title: 'Guitar Types',
    href: '/lessons/gear/guitars',
    icon: '🎸',
    description: 'Explore different guitar types and find your perfect instrument',
    color: 'bg-amber-50 border-amber-200 hover:bg-amber-100',
    iconColor: 'text-amber-600',
    concepts: ['Electric guitars', 'Acoustic guitars', 'Classical guitars', 'Bass guitars', '12-string guitars', 'Baritone guitars']
  },
  {
    title: 'Amps & Cabinets',
    href: '/lessons/gear/amps',
    icon: '🔊',
    description: 'Master amplification and speaker systems for every style',
    color: 'bg-red-50 border-red-200 hover:bg-red-100',
    iconColor: 'text-red-600',
    concepts: ['Tube amplifiers', 'Solid-state amps', 'Digital modeling', 'Speaker cabinets', 'Combo vs head/cab', 'Wattage considerations']
  },
  {
    title: 'Effects Pedals',
    href: '/lessons/gear/effects',
    icon: '🎛️',
    description: 'Shape your tone with overdrive, delay, reverb, and more',
    color: 'bg-purple-50 border-purple-200 hover:bg-purple-100',
    iconColor: 'text-purple-600',
    concepts: ['Overdrive/Distortion', 'Delay & Echo', 'Reverb', 'Modulation effects', 'Wah pedals', 'Signal chain order']
  },
  {
    title: 'Recording Gear',
    href: '/lessons/gear/recording',
    icon: '🎙️',
    description: 'Capture your music with professional recording equipment',
    color: 'bg-blue-50 border-blue-200 hover:bg-blue-100',
    iconColor: 'text-blue-600',
    concepts: ['Audio interfaces', 'Microphones', 'Digital Audio Workstations', 'Monitors & headphones', 'Preamps', 'Recording techniques']
  },
  {
    title: 'Accessories',
    href: '/lessons/gear/accessories',
    icon: '🧰',
    description: 'Essential accessories for maintenance, performance, and comfort',
    color: 'bg-green-50 border-green-200 hover:bg-green-100',
    iconColor: 'text-green-600',
    concepts: ['Strings & picks', 'Cables & connectors', 'Tuners & metronomes', 'Stands & cases', 'Maintenance tools', 'Performance accessories']
  },
]

const gearPhilosophy = [
  {
    title: 'Tone First, Gear Second',
    description: 'Great tone comes from technique and musical knowledge, not expensive gear',
    icon: '🎯',
    color: 'bg-blue-50 border-blue-200'
  },
  {
    title: 'Quality Over Quantity',
    description: 'Invest in fewer, higher-quality pieces rather than many cheap items',
    icon: '💎',
    color: 'bg-emerald-50 border-emerald-200'
  },
  {
    title: 'Know Your Needs',
    description: 'Choose gear based on your musical style, venue size, and budget',
    icon: '🎪',
    color: 'bg-purple-50 border-purple-200'
  },
  {
    title: 'Try Before You Buy',
    description: 'Always test gear in person when possible to ensure it fits your style',
    icon: '👂',
    color: 'bg-orange-50 border-orange-200'
  },
]

const budgetGuide = [
  {
    category: 'Beginner Setup',
    budget: '$300-800',
    description: 'Essential gear to start your musical journey',
    items: ['Entry-level guitar', 'Small practice amp', 'Basic accessories', 'Tuner and picks'],
    color: 'bg-green-100'
  },
  {
    category: 'Intermediate Setup',
    budget: '$800-2500',
    description: 'Quality gear for serious practice and small gigs',
    items: ['Mid-range guitar', 'Versatile combo amp', 'Essential effects pedals', 'Recording interface'],
    color: 'bg-blue-100'
  },
  {
    category: 'Professional Setup',
    budget: '$2500-8000+',
    description: 'High-end gear for recording and live performance',
    items: ['Professional guitars', 'High-end amplification', 'Comprehensive pedalboard', 'Studio recording gear'],
    color: 'bg-purple-100'
  },
]

const toneChain = [
  { component: 'Guitar', description: 'The foundation of your sound', icon: '🎸' },
  { component: 'Effects Pedals', description: 'Shape and color your signal', icon: '🎛️' },
  { component: 'Amplifier', description: 'Amplify and add character', icon: '🔊' },
  { component: 'Speaker Cabinet', description: 'Convert signal to sound waves', icon: '📢' },
  { component: 'Room Acoustics', description: 'Final acoustic environment', icon: '🏠' },
]

const maintenanceTips = [
  {
    title: 'String Care',
    description: 'Keep your strings fresh and your guitar in tune',
    icon: '🎼',
    tips: ['Change strings regularly (every 1-3 months)', 'Wipe down strings after playing', 'Use string cleaner for extended life', 'Keep spare sets handy']
  },
  {
    title: 'Electronics Maintenance',
    description: 'Protect your gear investment with proper care',
    icon: '⚡',
    tips: ['Use quality cables and connectors', 'Power down amps before connecting', 'Keep gear dust-free and dry', 'Service amps annually']
  },
  {
    title: 'Storage & Transport',
    description: 'Protect your gear during storage and travel',
    icon: '🛡️',
    tips: ['Use proper cases for transport', 'Control humidity and temperature', 'Loosen strings for long-term storage', 'Secure pedals and cables']
  },
]

export default function GearLessonsPage() {
  return (
    <Layout>
      <Header
        title="Guitar Gear & Equipment Guide"
        subtitle="Master the tools of the trade with comprehensive guides to guitars, amps, effects, recording gear, and accessories that shape your sound."
      />
      
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-red-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigation */}
          <div className="mb-8">
            <Link 
              href="/lessons" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <span className="mr-2">←</span>
              Back to Lessons
            </Link>
          </div>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">🎛️</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Guitar Gear & Equipment Guide
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Your sound is your signature. Learn about guitars, amplifiers, effects, recording gear, and accessories 
              that will help you find and shape your unique musical voice. From beginner setups to professional rigs, 
              we'll guide you through the gear that matters.
            </p>
          </div>

          {/* Gear Philosophy */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Smart Gear Philosophy</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {gearPhilosophy.map((principle, index) => (
                  <div key={index} className={`${principle.color} rounded-lg p-6 border-2`}>
                    <div className="text-3xl mb-3">{principle.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{principle.title}</h3>
                    <p className="text-sm text-gray-700">{principle.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Signal Chain */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Understanding Your Signal Chain</h2>
              <div className="space-y-4">
                {toneChain.map((component, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-amber-500 to-red-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1 flex items-center gap-4">
                      <span className="text-2xl">{component.icon}</span>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{component.component}</h3>
                        <p className="text-gray-600">{component.description}</p>
                      </div>
                    </div>
                    {index < toneChain.length - 1 && (
                      <div className="hidden md:block text-gray-400">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-sm text-amber-800">
                  <strong>💡 Remember:</strong> Each component in your signal chain affects your final tone. Understanding this flow helps you make informed gear decisions and troubleshoot issues.
                </p>
              </div>
            </div>
          </section>

          {/* Budget Guide */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Budget Planning Guide</h2>
              <div className="space-y-6">
                {budgetGuide.map((setup, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className={`${setup.color} rounded-full w-12 h-12 flex items-center justify-center font-bold text-sm`}>
                      ${setup.budget.split('-')[0].slice(1)}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{setup.category}</h3>
                        <span className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">{setup.budget}</span>
                      </div>
                      <p className="text-gray-600 mb-3">{setup.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {setup.items.map((item, itemIndex) => (
                          <span key={itemIndex} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Gear Categories */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Gear Categories</h2>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {gearCategories.map((category) => (
                <Link
                  key={category.href}
                  href={category.href}
                  className={`${category.color} border-2 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105 group`}
                >
                  <div className="text-center mb-4">
                    <div className={`${category.iconColor} text-4xl mb-3 group-hover:scale-110 transition-transform`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                    <p className="text-sm text-gray-700 mb-4">{category.description}</p>
                  </div>
                  <div className="space-y-2">
                    {category.concepts.map((concept, index) => (
                      <div key={index} className="text-xs bg-white bg-opacity-60 rounded px-3 py-1">
                        {concept}
                      </div>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Maintenance & Care */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Gear Maintenance & Care</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {maintenanceTips.map((tip, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-4">{tip.icon}</span>
                      <h3 className="text-xl font-semibold text-gray-900">{tip.title}</h3>
                    </div>
                    <p className="text-gray-700 mb-4">{tip.description}</p>
                    <ul className="space-y-2">
                      {tip.tips.map((tipItem, tipIndex) => (
                        <li key={tipIndex} className="text-sm text-gray-600 flex items-start">
                          <span className="text-blue-500 mr-2 mt-1">•</span>
                          {tipItem}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Buying Guide */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Smart Buying Strategies</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Before You Buy</h3>
                  <div className="space-y-4">
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                      <h4 className="font-semibold text-blue-800 mb-2">Research Thoroughly</h4>
                      <p className="text-sm text-blue-700">Read reviews, watch demos, and understand specifications before making any purchase.</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                      <h4 className="font-semibold text-green-800 mb-2">Set a Realistic Budget</h4>
                      <p className="text-sm text-green-700">Include all necessary accessories and consider ongoing costs like maintenance and consumables.</p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                      <h4 className="font-semibold text-purple-800 mb-2">Test In Context</h4>
                      <p className="text-sm text-purple-700">Try gear in similar conditions to how you'll use it - home practice, studio, or live venues.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Making the Purchase</h3>
                  <div className="space-y-4">
                    <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                      <h4 className="font-semibold text-orange-800 mb-2">Buy from Reputable Dealers</h4>
                      <p className="text-sm text-orange-700">Choose dealers with good return policies, warranties, and customer service support.</p>
                    </div>
                    <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                      <h4 className="font-semibold text-red-800 mb-2">Consider Used Gear</h4>
                      <p className="text-sm text-red-700">Quality used gear can offer excellent value, especially for vintage and high-end equipment.</p>
                    </div>
                    <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
                      <h4 className="font-semibold text-indigo-800 mb-2">Think Long-term</h4>
                      <p className="text-sm text-indigo-700">Invest in gear that will grow with you and maintain its value over time.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Getting Started */}
          <section className="text-center">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Build Your Perfect Setup</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Whether you're just starting out or upgrading your rig, our comprehensive gear guides will help you 
                make informed decisions that enhance your playing and fit your budget.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/lessons/gear/guitars" className="bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition-colors font-semibold">
                  Choose Your Guitar
                </Link>
                <Link href="/lessons/gear/amps" className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold">
                  Find Your Amp
                </Link>
                <Link href="/lessons/gear/effects" className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold">
                  Explore Effects
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </Layout>
  )
}
