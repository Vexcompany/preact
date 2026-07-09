import { useEffect } from 'react'

export default function MemberLightbox({ member, onClose }) {
  useEffect(() => {
    const handler = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  if (!member) return null

  return (
    <div
      className="fixed inset-0 bg-ink/80 backdrop-blur-sm z-[800] flex items-center justify-center p-6 animate-route-fade"
      onClick={onClose}
    >
      <div
        className="bg-navy border border-gold/25 rounded-brand max-w-sm w-full p-8 text-center shadow-[0_30px_80px_rgba(11,18,32,0.6)] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-parchment/50 hover:text-parchment text-xl leading-none transition-colors bg-transparent border-0 cursor-pointer"
        >
          ✕
        </button>
        <img
          src={member.foto}
          alt={member.nama}
          className="w-[120px] h-[120px] object-cover rounded-full mx-auto mb-5 border-2 border-gold/40 grayscale-[10%]"
        />
        <h3 className="font-display text-parchment text-xl mb-1">{member.nama}</h3>
        <p className="text-gold font-mono text-[0.75rem] tracking-[0.1em] uppercase mb-4">{member.jabatan}</p>
        <div className="text-left border-t border-parchment/10 pt-4 space-y-2">
          <div className="flex justify-between text-[0.85rem]">
            <span className="text-parchment/50 font-mono">TTL</span>
            <span className="text-parchment">{member.ttl}</span>
          </div>
          <div className="flex justify-between text-[0.85rem]">
            <span className="text-parchment/50 font-mono">Instagram</span>
            <span className="text-parchment">{member.sosmed}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
