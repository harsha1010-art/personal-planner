import type { DiagramId } from '../data/notes/types'

// Hand-drawn explanatory diagrams. They show how things are laid out, and are not to scale.
const TEXT = { fontSize: 15, fontWeight: 600, fill: 'currentColor' } as const
const SMALL = { fontSize: 13, fill: 'currentColor', opacity: 0.8 } as const

function Leader({ x1, y1, x2, y2 }: { x1: number | string; y1: number | string; x2: number | string; y2: number | string }) {
  return <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1.2" />
}

function HarappanCity() {
  const blocks = []
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 5; c++) {
      blocks.push(<rect key={`${r}-${c}`} x={286 + c * 62} y={92 + r * 58} width="52" height="46" rx="3" fill="var(--subject)" opacity={0.25} />)
    }
  }
  return (
    <svg viewBox="0 0 720 430" className="w-full" role="img" aria-label="Plan of a typical Harappan city, with a raised citadel to the west, a grid of streets in the lower town to the east, and covered drains along the streets.">
      <rect x="1" y="1" width="718" height="428" rx="14" fill="var(--tint)" />
      <text x="40" y="44" {...TEXT}>WEST</text>
      <text x="640" y="44" {...TEXT}>EAST</text>
      {/* Citadel */}
      <rect x="50" y="80" width="170" height="240" rx="6" fill="var(--subject)" />
      <text x="135" y="112" textAnchor="middle" fontSize="16" fontWeight="700" fill="#fff">Citadel</text>
      <text x="135" y="130" textAnchor="middle" fontSize="12.5" fill="#fff">raised on a platform</text>
      <rect x="82" y="156" width="56" height="42" fill="#fff" opacity="0.92" />
      <rect x="93" y="166" width="34" height="22" fill="var(--subject)" opacity="0.65" />
      <text x="145" y="180" fontSize="12.5" fill="#fff">Great Bath</text>
      <rect x="82" y="222" width="106" height="52" fill="#fff" opacity="0.92" />
      {[0, 1, 2, 3].map((i) => <rect key={i} x={89 + i * 24} y="230" width="18" height="36" fill="var(--subject)" opacity="0.55" />)}
      <text x="135" y="296" textAnchor="middle" fontSize="12.5" fill="#fff">"Granary" or warehouse</text>
      {/* Lower town */}
      {blocks}
      {[0, 1, 2].map((r) => <line key={r} x1="286" x2="596" y1={143 + r * 58} y2={143 + r * 58} stroke="currentColor" strokeWidth="3" strokeDasharray="7 5" />)}
      {[0, 1, 2, 3].map((c) => <line key={c} x1={343 + c * 62} x2={343 + c * 62} y1="92" y2="320" stroke="currentColor" strokeWidth="3" strokeDasharray="7 5" />)}
      <text x="441" y="74" textAnchor="middle" {...TEXT}>Lower town: grid of blocks</text>
      {/* Well and house */}
      <circle cx="312" cy="115" r="7" fill="var(--subject)" />
      <Leader x1="312" y1="122" x2="312" y2="352" />
      <text x="290" y="370" {...SMALL}>Private wells inside houses</text>
      <Leader x1="526" y1="320" x2="526" y2="352" />
      <text x="480" y="370" {...SMALL}>Covered drains along streets</text>
      <text x="135" y="350" textAnchor="middle" {...SMALL}>Baked bricks in a 1:2:4 ratio</text>
      <text x="360" y="410" textAnchor="middle" {...SMALL}>Typical plan, not to scale. Dholavira had three parts, and some towns differ.</text>
    </svg>
  )
}

function Stupa() {
  return (
    <svg viewBox="0 0 720 420" className="w-full" role="img" aria-label="Labelled diagram of a stupa, showing the dome or anda, the harmika and chhatra on top, the medhi drum, the pradakshina path, the vedika railing, the torana gateway, and the relic chamber inside.">
      <rect x="1" y="1" width="718" height="418" rx="14" fill="var(--tint)" />
      <rect x="120" y="340" width="480" height="20" fill="currentColor" opacity="0.28" />
      <rect x="170" y="296" width="380" height="44" fill="var(--subject)" opacity="0.5" />
      <path d="M200 296 A160 160 0 0 1 520 296 Z" fill="var(--subject)" />
      <rect x="338" y="122" width="44" height="18" fill="currentColor" />
      <line x1="360" y1="122" x2="360" y2="62" stroke="currentColor" strokeWidth="4" />
      {[66, 82, 98].map((y, i) => <ellipse key={y} cx="360" cy={y} rx={18 + i * 6} ry="4" fill="currentColor" />)}
      <rect x="340" y="240" width="40" height="30" rx="3" fill="#fff" />
      <rect x="130" y="312" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="3" />
      {[0, 1].map((i) => <line key={i} x1={130 + i * 28} y1="340" x2={130 + i * 28} y2="262" stroke="currentColor" strokeWidth="5" />)}
      <line x1="118" y1="270" x2="170" y2="270" stroke="currentColor" strokeWidth="4" />
      <line x1="118" y1="280" x2="170" y2="280" stroke="currentColor" strokeWidth="4" />
      {[-1, 0, 1, 2].map((i) => <line key={i} x1={560 + i * 14} y1="340" x2={560 + i * 14} y2="312" stroke="currentColor" strokeWidth="3" />)}
      <line x1="538" y1="320" x2="596" y2="320" stroke="currentColor" strokeWidth="3" />

      <Leader x1="395" y1="82" x2="486" y2="62" /><text x="492" y="60" {...TEXT}>Chhatra</text><text x="492" y="77" {...SMALL}>umbrella: honour</text>
      <Leader x1="385" y1="130" x2="486" y2="112" /><text x="492" y="110" {...TEXT}>Harmika</text><text x="492" y="127" {...SMALL}>railing on top</text>
      <Leader x1="290" y1="190" x2="196" y2="150" /><text x="70" y="136" {...TEXT}>Anda</text><text x="70" y="153" {...SMALL}>hemispherical dome</text>
      <Leader x1="378" y1="258" x2="564" y2="205" /><text x="568" y="196" {...TEXT}>Relic chamber</text><text x="568" y="212" {...SMALL}>holds the relics</text>
      <Leader x1="522" y1="312" x2="620" y2="264" /><text x="600" y="246" {...TEXT}>Medhi</text><text x="600" y="260" {...SMALL}>raised drum base</text>
      <Leader x1="590" y1="320" x2="636" y2="300" /><text x="622" y="294" {...TEXT}>Vedika</text>
      <Leader x1="145" y1="262" x2="84" y2="222" /><text x="30" y="204" {...TEXT}>Torana</text><text x="30" y="219" {...SMALL}>carved gateway</text>
      <Leader x1="360" y1="360" x2="360" y2="382" /><text x="360" y="402" textAnchor="middle" {...TEXT}>Pradakshina path, walked clockwise</text>
    </svg>
  )
}

function VedicTexts() {
  const steps = [
    ['Samhitas', 'Hymns and prayers', 'Rig, Sama, Yajur, Atharva'],
    ['Brahmanas', 'Prose on rituals', 'e.g. Shatapatha, Aitareya'],
    ['Aranyakas', '"Forest books"', 'Ritual reinterpreted'],
    ['Upanishads', 'Philosophy (Vedanta)', 'Atman, Brahman, moksha'],
  ]
  return (
    <svg viewBox="0 0 720 300" className="w-full" role="img" aria-label="The layers of Vedic literature in order: Samhitas, Brahmanas, Aranyakas and Upanishads, moving from hymns and ritual to philosophy.">
      <rect x="1" y="1" width="718" height="298" rx="14" fill="var(--tint)" />
      {steps.map(([title, sub, eg], i) => (
        <g key={title} transform={`translate(${24 + i * 172} ${176 - i * 40})`}>
          <rect width="158" height={88 + i * 40} rx="8" fill="var(--subject)" opacity={0.55 + i * 0.15} />
          <text x="79" y="28" textAnchor="middle" fontSize="16" fontWeight="700" fill="#fff">{title}</text>
          <text x="79" y="50" textAnchor="middle" fontSize="12.5" fill="#fff">{sub}</text>
          <text x="79" y="70" textAnchor="middle" fontSize="11.5" fill="#fff">{eg}</text>
        </g>
      ))}
      <text x="24" y="40" {...TEXT}>From ritual to philosophy</text>
      <text x="24" y="60" {...SMALL}>Each layer attaches to one of the four Vedas</text>
    </svg>
  )
}

function TempleStyles() {
  const base = 300
  return (
    <svg viewBox="0 0 720 390" className="w-full" role="img" aria-label="Three temple styles compared. Nagara has a curved shikhara, Dravida a stepped pyramidal vimana and a gopuram at the entrance, and Vesara combines the two.">
      <rect x="1" y="1" width="718" height="388" rx="14" fill="var(--tint)" />
      <path d={`M100 ${base} L100 200 Q104 96 130 62 Q156 96 160 200 L160 ${base} Z`} fill="var(--subject)" />
      <circle cx="130" cy="58" r="10" fill="currentColor" />
      <rect x="50" y="240" width="50" height="60" fill="var(--subject)" opacity="0.55" />
      <text x="110" y="330" textAnchor="middle" fontSize="18" fontWeight="700" fill="currentColor">Nagara</text>
      <text x="110" y="350" textAnchor="middle" {...SMALL}>North India</text>
      <text x="110" y="368" textAnchor="middle" {...SMALL}>Curved shikhara, amalaka</text>

      {[0, 1, 2, 3, 4].map((i) => <rect key={i} x={318 + i * 9} y={262 - i * 40} width={104 - i * 18} height="38" fill="var(--subject)" opacity={0.95 - i * 0.08} />)}
      <rect x="360" y="82" width="20" height="20" rx="10" fill="currentColor" />
      <rect x="250" y="215" width="52" height="85" fill="var(--subject)" opacity="0.55" />
      <rect x="258" y="190" width="36" height="25" fill="var(--subject)" opacity="0.4" />
      <line x1="240" y1={base} x2="430" y2={base} stroke="currentColor" strokeWidth="3" />
      <text x="340" y="330" textAnchor="middle" fontSize="18" fontWeight="700" fill="currentColor">Dravida</text>
      <text x="340" y="350" textAnchor="middle" {...SMALL}>South India</text>
      <text x="340" y="368" textAnchor="middle" {...SMALL}>Stepped vimana, gopuram gate</text>

      {[0, 1, 2].map((i) => <rect key={i} x={538 + i * 14} y={258 - i * 44} width={104 - i * 28} height="42" rx="6" fill="var(--subject)" opacity={0.95 - i * 0.12} />)}
      <path d="M566 170 Q590 104 614 170 Z" fill="var(--subject)" />
      <circle cx="590" cy="132" r="8" fill="currentColor" />
      <text x="590" y="330" textAnchor="middle" fontSize="18" fontWeight="700" fill="currentColor">Vesara</text>
      <text x="590" y="350" textAnchor="middle" {...SMALL}>Deccan</text>
      <text x="590" y="368" textAnchor="middle" {...SMALL}>Mix of both, later Chalukya</text>
      <text x="24" y="34" {...TEXT}>Three temple styles</text>
    </svg>
  )
}

function Chaitya() {
  return (
    <svg viewBox="0 0 720 300" className="w-full" role="img" aria-label="Plan of a chaitya hall: an entrance leading to a long nave lined with pillars, ending in a rounded apse with a stupa for worship. A narrow aisle runs around for circumambulation.">
      <rect x="1" y="1" width="718" height="298" rx="14" fill="var(--tint)" />
      <path d="M90 70 L520 70 A80 80 0 0 1 520 230 L90 230 Z" fill="var(--subject)" opacity="0.18" stroke="var(--subject)" strokeWidth="4" />
      {[...Array(9).keys()].map((i) => <g key={i}><circle cx={130 + i * 46} cy="105" r="7" fill="var(--subject)" /><circle cx={130 + i * 46} cy="195" r="7" fill="var(--subject)" /></g>)}
      <circle cx="540" cy="150" r="30" fill="var(--subject)" />
      <text x="50" y="155" textAnchor="middle" {...TEXT}>Entry</text>
      <text x="300" y="155" textAnchor="middle" {...TEXT}>Nave</text>
      <text x="540" y="155" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff">Stupa</text>
      <text x="300" y="56" textAnchor="middle" {...SMALL}>Rows of pillars, with a narrow aisle behind them</text>
      <text x="300" y="262" textAnchor="middle" {...SMALL}>A horseshoe-shaped chaitya window lights the hall. Karle has the finest example.</text>
    </svg>
  )
}

export function Diagram({ id }: { id: DiagramId }) {
  if (id === 'harappan-city') return <HarappanCity />
  if (id === 'stupa') return <Stupa />
  if (id === 'temple-styles') return <TempleStyles />
  if (id === 'chaitya') return <Chaitya />
  return <VedicTexts />
}
