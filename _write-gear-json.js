const fs = require('fs');
const path = require('path');

const basePath = 'c:/Source/musicscene/src/data/gear-lessons';

// 1. gear-root-index.json
const gearRootIndex = {
  "pageTitle": "Guitar Gear & Equipment Guide",
  "subtitle": "Master the tools of the trade with comprehensive guides to guitars, amps, effects, recording gear, and accessories that shape your sound.",
  "heroIcon": "\u{1F39B}\uFE0F",
  "heroDescription": "Your sound is your signature. Learn about guitars, amplifiers, effects, recording gear, and accessories that will help you find and shape your unique musical voice. From beginner setups to professional rigs, we'll guide you through the gear that matters.",
  "backLink": {
    "href": "/lessons",
    "label": "Back to Lessons"
  },
  "gearCategories": [
    {
      "title": "Guitar Types",
      "href": "/lessons/gear/guitars",
      "icon": "\uD83C\uDFB8",
      "description": "Explore different guitar types and find your perfect instrument",
      "color": "bg-amber-50 border-amber-200 hover:bg-amber-100",
      "iconColor": "text-amber-600",
      "concepts": ["Electric guitars", "Acoustic guitars", "Classical guitars", "Bass guitars", "12-string guitars", "Baritone guitars"]
    },
    {
      "title": "Amps & Cabinets",
      "href": "/lessons/gear/amps",
      "icon": "\uD83D\uDD0A",
      "description": "Master amplification and speaker systems for every style",
      "color": "bg-red-50 border-red-200 hover:bg-red-100",
      "iconColor": "text-red-600",
      "concepts": ["Tube amplifiers", "Solid-state amps", "Digital modeling", "Speaker cabinets", "Combo vs head/cab", "Wattage considerations"]
    },
    {
      "title": "Effects Pedals",
      "href": "/lessons/gear/effects",
      "icon": "\u{1F39B}\uFE0F",
      "description": "Shape your tone with overdrive, delay, reverb, and more",
      "color": "bg-purple-50 border-purple-200 hover:bg-purple-100",
      "iconColor": "text-purple-600",
      "concepts": ["Overdrive/Distortion", "Delay & Echo", "Reverb", "Modulation effects", "Wah pedals", "Signal chain order"]
    },
    {
      "title": "Recording Gear",
      "href": "/lessons/gear/recording",
      "icon": "\uD83C\uDF99\uFE0F",
      "description": "Capture your music with professional recording equipment",
      "color": "bg-blue-50 border-blue-200 hover:bg-blue-100",
      "iconColor": "text-blue-600",
      "concepts": ["Audio interfaces", "Microphones", "Digital Audio Workstations", "Monitors & headphones", "Preamps", "Recording techniques"]
    },
    {
      "title": "Accessories",
      "href": "/lessons/gear/accessories",
      "icon": "\uD83E\uDDF0",
      "description": "Essential accessories for maintenance, performance, and comfort",
      "color": "bg-green-50 border-green-200 hover:bg-green-100",
      "iconColor": "text-green-600",
      "concepts": ["Strings & picks", "Cables & connectors", "Tuners & metronomes", "Stands & cases", "Maintenance tools", "Performance accessories"]
    }
  ],
  "gearPhilosophy": [
    {
      "title": "Tone First, Gear Second",
      "description": "Great tone comes from technique and musical knowledge, not expensive gear",
      "icon": "\uD83C\uDFAF",
      "color": "bg-blue-50 border-blue-200"
    },
    {
      "title": "Quality Over Quantity",
      "description": "Invest in fewer, higher-quality pieces rather than many cheap items",
      "icon": "\uD83D\uDC8E",
      "color": "bg-emerald-50 border-emerald-200"
    },
    {
      "title": "Know Your Needs",
      "description": "Choose gear based on your musical style, venue size, and budget",
      "icon": "\uD83C\uDFAA",
      "color": "bg-purple-50 border-purple-200"
    },
    {
      "title": "Try Before You Buy",
      "description": "Always test gear in person when possible to ensure it fits your style",
      "icon": "\uD83D\uDC42",
      "color": "bg-orange-50 border-orange-200"
    }
  ],
  "budgetGuide": [
    {
      "category": "Beginner Setup",
      "budget": "$300-800",
      "description": "Essential gear to start your musical journey",
      "items": ["Entry-level guitar", "Small practice amp", "Basic accessories", "Tuner and picks"],
      "color": "bg-green-100"
    },
    {
      "category": "Intermediate Setup",
      "budget": "$800-2500",
      "description": "Quality gear for serious practice and small gigs",
      "items": ["Mid-range guitar", "Versatile combo amp", "Essential effects pedals", "Recording interface"],
      "color": "bg-blue-100"
    },
    {
      "category": "Professional Setup",
      "budget": "$2500-8000+",
      "description": "High-end gear for recording and live performance",
      "items": ["Professional guitars", "High-end amplification", "Comprehensive pedalboard", "Studio recording gear"],
      "color": "bg-purple-100"
    }
  ],
  "toneChain": [
    { "component": "Guitar", "description": "The foundation of your sound", "icon": "\uD83C\uDFB8" },
    { "component": "Effects Pedals", "description": "Shape and color your signal", "icon": "\u{1F39B}\uFE0F" },
    { "component": "Amplifier", "description": "Amplify and add character", "icon": "\uD83D\uDD0A" },
    { "component": "Speaker Cabinet", "description": "Convert signal to sound waves", "icon": "\uD83D\uDCE2" },
    { "component": "Room Acoustics", "description": "Final acoustic environment", "icon": "\uD83C\uDFE0" }
  ],
  "maintenanceTips": [
    {
      "title": "String Care",
      "description": "Keep your strings fresh and your guitar in tune",
      "icon": "\uD83C\uDFBC",
      "tips": ["Change strings regularly (every 1-3 months)", "Wipe down strings after playing", "Use string cleaner for extended life", "Keep spare sets handy"]
    },
    {
      "title": "Electronics Maintenance",
      "description": "Protect your gear investment with proper care",
      "icon": "\u26A1",
      "tips": ["Use quality cables and connectors", "Power down amps before connecting", "Keep gear dust-free and dry", "Service amps annually"]
    },
    {
      "title": "Storage & Transport",
      "description": "Protect your gear during storage and travel",
      "icon": "\uD83D\uDEE1\uFE0F",
      "tips": ["Use proper cases for transport", "Control humidity and temperature", "Loosen strings for long-term storage", "Secure pedals and cables"]
    }
  ],
  "buyingStrategies": [
    {
      "title": "Before You Buy",
      "items": [
        { "title": "Research Thoroughly", "description": "Read reviews, watch demos, and understand specifications before making any purchase.", "color": "bg-blue-50 border-blue-200" },
        { "title": "Set a Realistic Budget", "description": "Include all necessary accessories and consider ongoing costs like maintenance and consumables.", "color": "bg-green-50 border-green-200" },
        { "title": "Test In Context", "description": "Try gear in similar conditions to how you'll use it - home practice, studio, or live venues.", "color": "bg-purple-50 border-purple-200" }
      ]
    },
    {
      "title": "Making the Purchase",
      "items": [
        { "title": "Buy from Reputable Dealers", "description": "Choose dealers with good return policies, warranties, and customer service support.", "color": "bg-orange-50 border-orange-200" },
        { "title": "Consider Used Gear", "description": "Quality used gear can offer excellent value, especially for vintage and high-end equipment.", "color": "bg-red-50 border-red-200" },
        { "title": "Think Long-term", "description": "Invest in gear that will grow with you and maintain its value over time.", "color": "bg-indigo-50 border-indigo-200" }
      ]
    }
  ],
  "gettingStarted": {
    "title": "Build Your Perfect Setup",
    "description": "Whether you're just starting out or upgrading your rig, our comprehensive gear guides will help you make informed decisions that enhance your playing and fit your budget.",
    "links": [
      { "href": "/lessons/gear/guitars", "label": "Choose Your Guitar", "color": "bg-amber-600" },
      { "href": "/lessons/gear/amps", "label": "Find Your Amp", "color": "bg-red-600" },
      { "href": "/lessons/gear/effects", "label": "Explore Effects", "color": "bg-purple-600" }
    ]
  }
};

// 2. guitars-index.json
const guitarsIndex = {
  "pageTitle": "Guitar Types & Buying Guide",
  "subtitle": "Master the art of choosing the perfect guitar for your style and budget",
  "heroGradient": "bg-gradient-to-r from-orange-100 to-red-100",
  "heroInfo": {
    "title": "Find Your Perfect Guitar",
    "text": "From acoustic to electric, classical to bass - discover the unique characteristics, sound qualities, and ideal uses for each type of guitar.",
    "items": [
      "Sound characteristics and tonal qualities",
      "Best genres and playing styles for each type",
      "Budget considerations and buying tips",
      "Setup and maintenance requirements",
      "Recommended models for beginners and pros"
    ]
  },
  "types": [
    { "name": "Acoustic", "icon": "\uD83C\uDFB8", "href": "/lessons/gear/guitars/acoustic", "description": "Classic steel-string and nylon-string guitars for unplugged sound." },
    { "name": "Electric", "icon": "\u26A1", "href": "/lessons/gear/guitars/electric", "description": "Versatile and expressive. Used in rock, blues, jazz, and more." },
    { "name": "Bass", "icon": "\uD83C\uDFB5", "href": "/lessons/gear/guitars/bass", "description": "Provides the low end and groove in bands." },
    { "name": "Classical", "icon": "\uD83C\uDFBC", "href": "/lessons/gear/guitars/classical", "description": "Nylon strings, wide neck. Used for classical and flamenco." },
    { "name": "12-String", "icon": "\uD83D\uDD14", "href": "/lessons/gear/guitars/12-string", "description": "Rich, shimmering sound. Great for folk and rock." },
    { "name": "Baritone", "icon": "\u2B07\uFE0F", "href": "/lessons/gear/guitars/baritone", "description": "Lower tuning for deep, powerful tones." }
  ],
  "sections": [
    {
      "title": "Quick Comparison Guide",
      "layout": "table",
      "tableHeaders": ["Guitar Type", "Best For", "Price Range", "Beginner Friendly"],
      "tableRows": [
        ["Acoustic", "Folk, country, singer-songwriter", "$100 - $3000+", "\u2B50\u2B50\u2B50\u2B50\u2B50"],
        ["Electric", "Rock, blues, jazz, metal", "$150 - $5000+", "\u2B50\u2B50\u2B50\u2B50"],
        ["Classical", "Classical, flamenco, fingerstyle", "$200 - $8000+", "\u2B50\u2B50\u2B50"],
        ["Bass", "All genres - rhythm section", "$200 - $4000+", "\u2B50\u2B50\u2B50"]
      ]
    },
    {
      "title": "Essential Buying Tips",
      "layout": "grid-2",
      "cards": [
        {
          "title": "For Beginners",
          "bgColor": "bg-blue-50",
          "items": [
            "Start with a budget of $200-500",
            "Consider acoustic for simplicity",
            "Electric if you love rock/blues",
            "Try before you buy if possible",
            "Factor in amplifier costs for electric"
          ]
        },
        {
          "title": "For Intermediate Players",
          "bgColor": "bg-green-50",
          "items": [
            "Upgrade based on your playing style",
            "Consider specialized guitars (12-string, etc.)",
            "Look for solid wood construction",
            "Research pickup types for electrics",
            "Don't forget about setup and maintenance"
          ]
        }
      ]
    }
  ]
};

// 3. amps-index.json
const ampsIndex = {
  "pageTitle": "Guitar & Bass Amplifiers",
  "subtitle": "Master the art of amplification - from vintage tubes to modern modeling technology",
  "heroGradient": "bg-gradient-to-r from-amber-100 to-orange-100",
  "heroInfo": {
    "title": "Amplifiers: Your Sound, Amplified",
    "text": "Discover the world of guitar and bass amplification, from classic tube warmth to cutting-edge digital modeling.",
    "items": [
      "Different amplifier technologies and their unique characteristics",
      "How to choose the right amp for your style and venue",
      "Understanding power ratings, speaker configurations, and features",
      "Maintenance tips and getting the best tone from your amp",
      "Famous amplifiers used by legendary musicians"
    ]
  },
  "types": [
    { "name": "Tube Amps", "icon": "\uD83D\uDD25", "href": "/lessons/gear/amps/tube", "description": "Warm, dynamic sound. Classic choice for many guitarists." },
    { "name": "Solid State Amps", "icon": "\uD83D\uDCA1", "href": "/lessons/gear/amps/solid-state", "description": "Reliable, affordable, and lightweight." },
    { "name": "Modeling Amps", "icon": "\uD83D\uDDA5\uFE0F", "href": "/lessons/gear/amps/modeling", "description": "Digital technology for a wide range of tones." },
    { "name": "Hybrid Amps", "icon": "\uD83D\uDD00", "href": "/lessons/gear/amps/hybrid", "description": "Combines tube warmth with solid state reliability." },
    { "name": "Bass Amps", "icon": "\uD83C\uDFB5", "href": "/lessons/gear/amps/bass", "description": "Designed for bass frequencies and power." },
    { "name": "Mini/Practice Amps", "icon": "\uD83D\uDD0A", "href": "/lessons/gear/amps/mini", "description": "Portable and perfect for home practice." }
  ],
  "sections": [
    {
      "title": "Understanding Amplifier Basics",
      "layout": "grid-2",
      "cards": [
        {
          "title": "How Amplifiers Work",
          "bgColor": "bg-blue-50",
          "description": "An amplifier takes the weak electrical signal from your guitar pickup and amplifies it to drive speakers, making your guitar audible and shaping its tone in the process.",
          "items": [
            "Preamp: Shapes and colors the tone",
            "Power amp: Provides volume and dynamics",
            "Speaker: Converts electrical energy to sound waves"
          ]
        },
        {
          "title": "Key Specifications",
          "bgColor": "bg-green-50",
          "description": "Understanding amp specifications helps you choose the right amplifier for your needs and playing situations.",
          "items": [
            "Wattage: Power output and volume capability",
            "Speaker size: Affects tone and frequency response",
            "Channels: Clean and distorted sound options"
          ]
        }
      ]
    },
    {
      "title": "Choosing Your Amplifier",
      "subtitle": "\uD83C\uDFAF Consider Your Needs",
      "bgColor": "bg-yellow-50",
      "layout": "grid-3",
      "cards": [
        {
          "title": "Practice at Home",
          "items": ["1-15 watts", "Headphone output", "Built-in effects", "Compact size"]
        },
        {
          "title": "Small Venues",
          "items": ["15-30 watts", "Good clean headroom", "Effects loop", "Portable but powerful"]
        },
        {
          "title": "Large Venues",
          "items": ["50+ watts", "Multiple channels", "Professional features", "Road-worthy construction"]
        }
      ]
    },
    {
      "title": "Getting Great Tone",
      "subtitle": "Essential Tone Tips",
      "bgColor": "bg-purple-50",
      "layout": "grid-2",
      "cards": [
        {
          "title": "EQ Settings",
          "items": [
            "Start with all knobs at 12 o'clock",
            "Adjust bass for room acoustics",
            "Use mids for cutting through the mix",
            "Treble adds clarity and sparkle"
          ]
        },
        {
          "title": "Volume Sweet Spots",
          "items": [
            "Tube amps sound best when pushed",
            "Find the amp's natural breakup point",
            "Use attenuators for apartment playing",
            "Stage volume vs. recorded volume"
          ]
        }
      ]
    }
  ]
};

// 4. effects-index.json
const effectsIndex = {
  "pageTitle": "Guitar Effects & Pedals",
  "subtitle": "Master the art of sonic sculpting - from classic overdrive to ambient reverb",
  "heroGradient": "bg-gradient-to-r from-purple-100 to-pink-100",
  "heroInfo": {
    "title": "Effects: Shape Your Sound",
    "text": "Discover the magical world of guitar effects, from subtle enhancement to complete sonic transformation.",
    "items": [
      "How each effect type shapes and colors your guitar tone",
      "Proper signal chain order for optimal sound",
      "Famous effects used by legendary guitarists",
      "Building your first pedalboard and advanced setups",
      "Digital vs. analog effects and their characteristics"
    ]
  },
  "types": [
    { "name": "Overdrive", "icon": "\uD83D\uDD25", "href": "/lessons/gear/effects/overdrive", "description": "Adds warmth and grit. Essential for rock and blues.", "category": "Distortion" },
    { "name": "Distortion", "icon": "\u26A1", "href": "/lessons/gear/effects/distortion", "description": "Heavier, more aggressive sound. Used in metal and hard rock.", "category": "Distortion" },
    { "name": "Fuzz", "icon": "\uD83C\uDF2A\uFE0F", "href": "/lessons/gear/effects/fuzz", "description": "Vintage, buzzy tone. Iconic in psychedelic and classic rock.", "category": "Distortion" },
    { "name": "Chorus", "icon": "\uD83C\uDF0A", "href": "/lessons/gear/effects/chorus", "description": "Thickens your sound with shimmering modulation.", "category": "Modulation" },
    { "name": "Delay", "icon": "\u23F1\uFE0F", "href": "/lessons/gear/effects/delay", "description": "Echoes your notes for rhythmic or ambient effects.", "category": "Time-Based" },
    { "name": "Reverb", "icon": "\uD83C\uDFDB\uFE0F", "href": "/lessons/gear/effects/reverb", "description": "Adds space and depth. Simulates rooms and halls.", "category": "Time-Based" },
    { "name": "Wah", "icon": "\uD83D\uDC44", "href": "/lessons/gear/effects/wah", "description": "Expressive filter sweep. Famous in funk and rock.", "category": "Filter" },
    { "name": "Compressor", "icon": "\uD83D\uDCCF", "href": "/lessons/gear/effects/compressor", "description": "Evens out your dynamics for a polished sound.", "category": "Dynamics" },
    { "name": "Tremolo", "icon": "\uD83C\uDF17", "href": "/lessons/gear/effects/tremolo", "description": "Creates rhythmic volume swells.", "category": "Modulation" }
  ],
  "sections": [
    {
      "title": "Understanding Guitar Effects",
      "layout": "grid-2",
      "cards": [
        {
          "title": "How Effects Work",
          "bgColor": "bg-blue-50",
          "description": "Effects pedals process your guitar signal in various ways - from simple EQ adjustments to complex digital algorithms that completely transform your sound.",
          "items": [
            "Input: Receives your guitar signal",
            "Processing: Alters the signal electronically",
            "Output: Sends modified signal to amp"
          ]
        },
        {
          "title": "Signal Chain Order",
          "bgColor": "bg-green-50",
          "description": "The order of effects in your signal chain dramatically affects your tone. Here's the traditional order for optimal results.",
          "items": [
            "1. Dynamics: Compressor, Gate",
            "2. Distortion: Overdrive, Fuzz",
            "3. Modulation: Chorus, Tremolo",
            "4. Time: Delay, Reverb"
          ]
        }
      ]
    },
    {
      "title": "Building Your Pedalboard",
      "subtitle": "\uD83C\uDFAF Essential Effects for Beginners",
      "bgColor": "bg-yellow-50",
      "layout": "grid-3",
      "cards": [
        {
          "title": "Starter Board (3-4 pedals)",
          "items": ["Overdrive/Distortion", "Delay", "Reverb", "Optional: Chorus"]
        },
        {
          "title": "Intermediate Board (5-7 pedals)",
          "items": ["Compressor", "Two drive pedals", "Modulation effects", "Delay and Reverb"]
        },
        {
          "title": "Advanced Board (8+ pedals)",
          "items": ["Multiple drive stages", "Specialized effects", "Loopers and switchers", "Expression pedals"]
        }
      ]
    },
    {
      "title": "Legendary Effects Users",
      "subtitle": "Icons and Their Signature Sounds",
      "bgColor": "bg-purple-50",
      "layout": "grid-2",
      "cards": [
        {
          "title": "Distortion Masters",
          "items": [
            "Jimi Hendrix: Fuzz Face, Uni-Vibe",
            "Tony Iommi: Heavy distortion, wah",
            "Kurt Cobain: Big Muff, chorus",
            "Jack White: Vintage fuzz, octave"
          ]
        },
        {
          "title": "Ambient Pioneers",
          "items": [
            "David Gilmour: Delay, reverb, chorus",
            "The Edge: Dotted eighth delays",
            "Kevin Shields: Reverse reverb, tremolo",
            "Jonny Greenwood: Pitch shifting, loops"
          ]
        }
      ]
    }
  ]
};

// 5. recording-index.json
const recordingIndex = {
  "pageTitle": "Recording Gear & Home Studio",
  "subtitle": "Master the art of music production - from bedroom setups to professional studios",
  "heroGradient": "bg-gradient-to-r from-purple-100 to-blue-100",
  "heroInfo": {
    "title": "Recording: Capture Your Music",
    "text": "Build your dream studio with the right gear. From basic home recording to professional production, understand the tools that bring your musical ideas to life.",
    "items": [
      "Essential recording gear for any budget",
      "Setting up your home studio for best results",
      "Understanding audio interfaces and signal flow",
      "Choosing the right microphones for your needs",
      "Digital Audio Workstation (DAW) selection and usage",
      "Monitoring and mixing with proper speakers/headphones"
    ]
  },
  "types": [
    { "name": "Audio Interfaces", "icon": "\uD83C\uDF9A\uFE0F", "href": "/lessons/gear/recording/interfaces", "description": "Connect your instruments and microphones to your computer." },
    { "name": "Microphones", "icon": "\uD83C\uDFA4", "href": "/lessons/gear/recording/microphones", "description": "Capture vocals and instruments with clarity." },
    { "name": "DAWs", "icon": "\uD83D\uDCBB", "href": "/lessons/gear/recording/daw", "description": "Digital Audio Workstations for recording and mixing." },
    { "name": "Monitors & Headphones", "icon": "\uD83C\uDFA7", "href": "/lessons/gear/recording/monitors-headphones", "description": "Hear your music accurately while mixing and recording." },
    { "name": "Preamps", "icon": "\uD83D\uDD0A", "href": "/lessons/gear/recording/preamps", "description": "Boost microphone and instrument signals for recording." },
    { "name": "Cables & Accessories", "icon": "\uD83D\uDD0C", "href": "/lessons/gear/recording/cables", "description": "Essential connections and tools for your studio." }
  ],
  "sections": [
    {
      "title": "Home Studio Fundamentals",
      "layout": "grid-2",
      "cards": [
        {
          "title": "Signal Chain",
          "bgColor": "bg-green-50",
          "description": "Understanding the path your audio takes from instrument to final recording.",
          "items": [
            "1. Source: Guitar, voice, instrument",
            "2. Preamp: Boost signal level",
            "3. Interface: Convert to digital",
            "4. DAW: Record and process",
            "5. Monitors: Playback and mixing"
          ]
        },
        {
          "title": "Room Acoustics",
          "bgColor": "bg-orange-50",
          "description": "Your recording environment affects everything from capture to mixing.",
          "items": [
            "Treatment: Absorb reflections",
            "Isolation: Prevent bleed and noise",
            "Positioning: Optimize speaker placement",
            "Monitoring: Accurate listening environment"
          ]
        }
      ]
    },
    {
      "title": "Studio Setup by Budget",
      "subtitle": "\uD83C\uDFAF Essential Setups",
      "bgColor": "bg-yellow-50",
      "layout": "grid-3",
      "cards": [
        {
          "title": "Starter Studio ($300-800)",
          "items": ["USB Audio Interface", "Dynamic Microphone", "Studio Headphones", "Free/Budget DAW", "Basic Cables"]
        },
        {
          "title": "Home Studio ($800-2500)",
          "items": ["Multi-input Interface", "Condenser + Dynamic Mics", "Studio Monitors + Headphones", "Professional DAW", "Acoustic Treatment"]
        },
        {
          "title": "Pro Setup ($2500+)",
          "items": ["High-end Interface/Preamps", "Multiple Premium Mics", "Reference Monitors", "Full Room Treatment", "Hardware Processing"]
        }
      ]
    },
    {
      "title": "Legendary Home Studios",
      "subtitle": "Studios That Changed Music",
      "bgColor": "bg-purple-50",
      "layout": "grid-2",
      "cards": [
        {
          "title": "Bedroom Productions",
          "items": [
            "Billie Eilish: Bedroom studio with Finneas",
            "Tame Impala: Kevin Parker's home setup",
            "Bon Iver: Cabin recordings (For Emma)",
            "Tyler, The Creator: Bedroom beats to Grammy wins"
          ]
        },
        {
          "title": "Home Studio Legends",
          "items": [
            "Nine Inch Nails: Trent Reznor's home studio",
            "Beck: Multi-album home recordings",
            "Sufjan Stevens: Bedroom symphonies",
            "Mac DeMarco: Lo-fi home recordings"
          ]
        }
      ]
    }
  ]
};

// 6. accessories-index.json
const accessoriesIndex = {
  "pageTitle": "Guitar Accessories & Essentials",
  "subtitle": "Complete your setup with the right tools - from picks to metronomes, everything you need to play better",
  "heroGradient": "bg-gradient-to-r from-green-100 to-teal-100",
  "heroInfo": {
    "title": "Accessories: The Essential Toolkit",
    "text": "The right accessories can transform your playing experience. From basic picks to advanced tools, discover what every guitarist needs in their arsenal.",
    "items": [
      "Essential accessories every guitarist needs",
      "How the right tools improve your playing",
      "Quality vs. budget considerations",
      "Maintenance and care for your accessories",
      "Professional setup and organization tips",
      "When and why to upgrade your gear"
    ]
  },
  "types": [
    { "name": "Guitar Picks", "icon": "\uD83E\uDE99", "href": "/lessons/gear/accessories/picks", "description": "Essential for most guitarists. Available in many shapes and thicknesses." },
    { "name": "Capos", "icon": "\uD83E\uDDF2", "href": "/lessons/gear/accessories/capos", "description": "Change the key of your guitar easily." },
    { "name": "Tuners", "icon": "\u{1F39B}\uFE0F", "href": "/lessons/gear/accessories/tuners", "description": "Keep your instrument in perfect pitch." },
    { "name": "Straps", "icon": "\uD83E\uDEA2", "href": "/lessons/gear/accessories/straps", "description": "Play comfortably while standing." },
    { "name": "Cables", "icon": "\uD83D\uDD0C", "href": "/lessons/gear/accessories/cables", "description": "Connect your gear reliably." },
    { "name": "Cases & Bags", "icon": "\uD83C\uDF92", "href": "/lessons/gear/accessories/cases", "description": "Protect your instrument on the go." },
    { "name": "Stands & Hangers", "icon": "\uD83E\uDE91", "href": "/lessons/gear/accessories/stands", "description": "Store your instrument safely and accessibly." },
    { "name": "Slides", "icon": "\uD83E\uDDCA", "href": "/lessons/gear/accessories/slides", "description": "For blues and unique sounds." },
    { "name": "Metronomes", "icon": "\u23F2\uFE0F", "href": "/lessons/gear/accessories/metronomes", "description": "Practice your timing and rhythm." }
  ],
  "sections": [
    {
      "title": "Building Your Accessory Collection",
      "layout": "grid-2",
      "cards": [
        {
          "title": "Essential First Purchases",
          "bgColor": "bg-blue-50",
          "description": "Start with the basics that every guitarist absolutely needs for proper playing and practice.",
          "items": [
            "Guitar Picks: Multiple thicknesses",
            "Tuner: Clip-on or pedal style",
            "Guitar Cable: Quality instrument cable",
            "Strap: Comfortable and adjustable",
            "Case/Bag: Protection for your guitar"
          ]
        },
        {
          "title": "Next Level Additions",
          "bgColor": "bg-orange-50",
          "description": "Once you have the basics, these accessories will enhance your playing and practice.",
          "items": [
            "Capo: For key changes and new voicings",
            "Guitar Stand: Safe storage and easy access",
            "Metronome: Develop solid timing",
            "Slide: For blues and experimental sounds",
            "Multiple Cables: Backup and different lengths"
          ]
        }
      ]
    },
    {
      "title": "Quality vs. Budget Considerations",
      "subtitle": "\uD83C\uDFAF Smart Shopping Tips",
      "bgColor": "bg-yellow-50",
      "layout": "grid-3",
      "cards": [
        {
          "title": "Buy Quality Once",
          "items": ["Guitar cases and bags", "Instrument cables", "Guitar stands", "Quality tuners", "Professional straps"]
        },
        {
          "title": "Budget Options Work",
          "items": ["Guitar picks (try variety packs)", "Basic capos", "Simple metronomes", "Starter accessories", "Practice tools"]
        },
        {
          "title": "Upgrade When Ready",
          "items": ["Slides (material preference)", "Premium picks", "Advanced tuners", "Specialized accessories", "Performance gear"]
        }
      ]
    },
    {
      "title": "Accessory Organization & Care",
      "subtitle": "Keep Everything Organized",
      "bgColor": "bg-purple-50",
      "layout": "grid-2",
      "cards": [
        {
          "title": "Storage Solutions",
          "items": [
            "Pick holders and dispensers",
            "Accessory pouches in guitar cases",
            "Dedicated accessory cases",
            "Wall-mounted organizers",
            "Practice station setup"
          ]
        },
        {
          "title": "Maintenance Tips",
          "items": [
            "Clean cables and connectors regularly",
            "Store picks in dry environments",
            "Check tuner battery levels",
            "Inspect straps for wear",
            "Replace items before they fail"
          ]
        }
      ]
    },
    {
      "title": "Legendary Accessory Choices",
      "subtitle": "Iconic Accessories in Music",
      "bgColor": "bg-gray-50",
      "layout": "grid-2",
      "cards": [
        {
          "title": "Famous Pick Users",
          "items": [
            "Eddie Van Halen: Fender Heavy picks",
            "Eric Clapton: Martin Medium picks",
            "Brian May: Sixpence coin as pick",
            "Billy Gibbons: Mexican peso picks"
          ]
        },
        {
          "title": "Iconic Slides & Capos",
          "items": [
            "Duane Allman: Coricidin bottle slide",
            "Keith Richards: Open G capo setup",
            "Joni Mitchell: Custom tunings with capos",
            "Derek Trucks: Glass slide technique"
          ]
        }
      ]
    }
  ]
};

// Write all files
const files = [
  [path.join(basePath, 'gear-root-index.json'), gearRootIndex],
  [path.join(basePath, 'guitars', 'guitars-index.json'), guitarsIndex],
  [path.join(basePath, 'amps', 'amps-index.json'), ampsIndex],
  [path.join(basePath, 'effects', 'effects-index.json'), effectsIndex],
  [path.join(basePath, 'recording', 'recording-index.json'), recordingIndex],
  [path.join(basePath, 'accessories', 'accessories-index.json'), accessoriesIndex],
];

files.forEach(([filePath, data]) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
  console.log(`Written: ${filePath}`);
});

console.log('\nAll 6 gear index JSON files written successfully!');
