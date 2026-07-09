import { Link } from 'react-router-dom'
import Eyebrow from '../components/ui/Eyebrow'
import FormationRule from '../components/ui/FormationRule'

const SERVICES = [
  {
    icon: 'fi-brands-open-ai',
    title: 'Taksaka AI',
    desc: 'Asisten AI untuk membantu kebutuhan informasi dan pembelajaran interaktif seputar Paskibra dan kegiatan sekolah.',
    href: 'https://ai.pagaska.my.id',
    locked: false,
  },
  {
    icon: 'fi-brands-spotify',
    title: 'Pagaska Music',
    desc: 'Platform streaming lagu dan mars Paskibra Gala Taksaka, lengkap dengan playlist latihan dan koleksi lagu patriotik.',
    href: 'https://music.pagaska.my.id',
    locked: false,
  },
  {
    icon: 'fi-rs-cloud',
    title: 'Pagaska Cloud',
    desc: 'Penyimpanan cloud untuk dokumen, foto, dan file penting organisasi Paskibra dengan akses aman dan terorganisir.',
    href: 'https://cloud.pagaska.my.id',
    locked: false,
  },
]

export default function Project() {
  return (
    <section className="max-w-site mx-auto px-7 py-24 animate-route-fade">
      {/* Header */}
      <div className="text-center mb-16">
        <img
          src="https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/logo.png"
          alt="Logo PAGASKA"
          className="w-20 h-20 object-contain mx-auto mb-6 drop-shadow-[0_0_20px_rgba(184,145,47,0.25)]"
        />
        <Eyebrow className="justify-center mb-4 block">Portal Digital</Eyebrow>
        <h1 className="font-display text-[clamp(2.5rem,7vw,4.5rem)] text-parchment font-semibold leading-none mb-2">
          PAGASKA
        </h1>
        <p className="text-parchment/60 tracking-[0.06em] mb-1">Paskibra Gala Taksaka</p>
        <p className="text-parchment/40 text-sm tracking-[0.08em]">SMK Negeri 5 Kota Madiun</p>
        <FormationRule ticks={20} />
        <p className="text-parchment/55 text-[0.95rem] max-w-xl mx-auto leading-relaxed">
          Selamat datang di portal resmi Paskibra Gala Taksaka. Kami adalah organisasi kebanggaan SMKN 5 Kota Madiun yang berdedikasi dalam pengibaran bendera dan pembentukan karakter pelajar.
        </p>
        <Link to="/home" className="btn-outline inline-flex mt-8">
          ← Kembali ke Beranda
        </Link>
      </div>

      {/* Services */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10">
        {SERVICES.map((s) => (
          <a
            key={s.title}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="service-card group"
          >
            <i className={`fi ${s.icon} text-gold text-3xl mb-5 block`} />
            <h3 className="font-display text-parchment text-xl mb-3">{s.title}</h3>
            <p className="text-parchment/55 text-[0.9rem] leading-relaxed flex-1">{s.desc}</p>
            <span className="font-mono text-[0.7rem] tracking-[0.08em] text-gold/60 uppercase mt-5 inline-flex items-center gap-1 transition-all duration-200 group-hover:gap-3">
              Buka <span>→</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
