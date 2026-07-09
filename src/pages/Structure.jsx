import { useState } from 'react'
import { gen1, gen2, gen3 } from '../data/members'
import MemberLightbox from '../components/MemberLightbox'

const GENERATIONS = [
  { id: 1, label: 'Generasi 1', data: gen1 },
  { id: 2, label: 'Generasi 2', data: gen2 },
  { id: 3, label: 'Generasi 3', data: gen3 },
]

function MemberCard({ member, onClick }) {
  return (
    <div className="org-card" onClick={() => onClick(member)}>
      <img
        src={member.foto}
        alt={member.nama}
        className="member-photo"
        loading="lazy"
        onError={(e) => {
          e.target.src = 'https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/logo.png'
        }}
      />
      <h4>{member.jabatan}</h4>
      <p>{member.nama}</p>
    </div>
  )
}

function MemberGrid({ members, cols = 'auto', onClick }) {
  const gridClass =
    cols === 1
      ? 'grid grid-cols-1 place-items-center'
      : cols === 2
      ? 'grid grid-cols-2 gap-4 max-w-md mx-auto'
      : 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'

  return (
    <div className={gridClass}>
      {members.map((m, i) => (
        <MemberCard key={`${m.nama}-${i}`} member={m} onClick={onClick} />
      ))}
    </div>
  )
}

export default function Structure() {
  const [activeGen, setActiveGen] = useState(1)
  const [showDivisi, setShowDivisi] = useState(false)
  const [selectedMember, setSelectedMember] = useState(null)

  const currentGen = GENERATIONS.find((g) => g.id === activeGen)?.data || gen1

  const handleGenSwitch = (id) => {
    setActiveGen(id)
    setShowDivisi(false)
  }

  return (
    <section className="max-w-site mx-auto px-7 py-24 animate-route-fade">
      <h2 className="font-display text-[clamp(2rem,5vw,3.4rem)] text-parchment font-semibold mb-10 text-center">
        Struktur Organisasi
      </h2>

      {/* Generation tabs */}
      <div className="flex justify-center gap-3 mb-14 flex-wrap">
        {GENERATIONS.map((g) => (
          <button
            key={g.id}
            onClick={() => handleGenSwitch(g.id)}
            className={[
              'font-mono text-[0.78rem] tracking-[0.1em] uppercase px-6 py-3 rounded-brand border transition-all duration-250',
              activeGen === g.id
                ? 'bg-gold text-ink border-gold'
                : 'bg-transparent text-parchment/70 border-parchment/20 hover:border-gold/50 hover:text-parchment',
            ].join(' ')}
          >
            {g.label}
          </button>
        ))}
      </div>

      {/* Pembina — single centered card */}
      <div className="max-w-[240px] mx-auto mb-10">
        <MemberGrid members={currentGen.pembina} cols={1} onClick={setSelectedMember} />
      </div>

      {/* Pelatih — 2-column grid */}
      <div className="mb-10">
        <p className="section-title">Pelatih</p>
        <MemberGrid members={currentGen.pelatih} cols={2} onClick={setSelectedMember} />
      </div>

      {/* Pengurus Inti */}
      <div className="mb-10">
        <p className="section-title">Pengurus Inti</p>
        <MemberGrid members={currentGen.inti} onClick={setSelectedMember} />
      </div>

      {/* Toggle divisi */}
      {currentGen.divisi?.length > 0 && (
        <>
          {showDivisi && (
            <div className="mb-10 animate-route-fade">
              <p className="section-title">Pengurus Divisi</p>
              <MemberGrid members={currentGen.divisi} onClick={setSelectedMember} />
            </div>
          )}
          <button
            onClick={() => setShowDivisi((v) => !v)}
            className="btn-outline block mx-auto mt-8"
          >
            {showDivisi ? 'Sembunyikan ↑' : 'Tampilkan Selengkapnya ↓'}
          </button>
        </>
      )}

      {/* Member lightbox */}
      <MemberLightbox member={selectedMember} onClose={() => setSelectedMember(null)} />
    </section>
  )
}
