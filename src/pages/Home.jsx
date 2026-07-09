import { Link } from 'react-router-dom'
import FormationRule from '../components/ui/FormationRule'

export default function Home() {
  return (
    <section className="min-h-[calc(100svh-68px-40px)] flex flex-col items-center justify-center text-center px-6 py-24 animate-route-fade">
      <img
        src="https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/logo.png"
        alt="Logo PAGASKA"
        className="w-28 h-28 object-contain mb-8 drop-shadow-[0_0_28px_rgba(184,145,47,0.3)]"
      />
      <h1 className="font-display text-[clamp(3.2rem,10vw,6.5rem)] font-semibold text-parchment leading-none tracking-tight mb-4">
        PAGASKA
      </h1>
      <p className="text-parchment/60 text-[clamp(0.9rem,2.5vw,1.1rem)] tracking-[0.06em] mb-10">
        Paskibra Gala Taksaka · SMK Negeri 5 Kota Madiun
      </p>
      <FormationRule ticks={24} />
      <Link to="/about" className="btn-outline mt-2">
        Selengkapnya →
      </Link>
    </section>
  )
}
