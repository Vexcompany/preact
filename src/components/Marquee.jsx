const ITEMS = [
  'PAGASKA', 'Paskibra Gala Taksaka', 'SMK Negeri 5 Madiun',
  'Disiplin & Kehormatan', 'PAGASKA', 'Paskibra Gala Taksaka',
  'SMK Negeri 5 Madiun', 'Disiplin & Kehormatan',
]

export default function MarqueeBanner() {
  return (
    <div className="overflow-hidden bg-crimson/90 border-y border-crimson-bright/40 py-2.5 select-none">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span key={i} className="font-mono text-parchment text-[0.72rem] tracking-[0.18em] uppercase mx-7 shrink-0">
            {i % 2 === 0
              ? <span className="text-gold mr-7">✦</span>
              : null}
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
