import Eyebrow from '../components/ui/Eyebrow'
import FormationRule from '../components/ui/FormationRule'

const PILLARS = [
  {
    num: '01',
    title: 'Disiplin',
    desc: 'Ketepatan gerak dan waktu dilatih hingga menjadi refleks, bukan sekadar aturan.',
  },
  {
    num: '02',
    title: 'Kepemimpinan',
    desc: 'Setiap anggota dibentuk untuk mampu memimpin barisan maupun dirinya sendiri.',
  },
  {
    num: '03',
    title: 'Nasionalisme',
    desc: 'Pengibaran Sang Saka Merah Putih dijalankan dengan penuh kehormatan dan makna.',
  },
]

export default function About() {
  return (
    <section className="max-w-site mx-auto px-7 py-24 animate-route-fade">
      <Eyebrow className="mb-4 block">Tentang Kami</Eyebrow>
      <h2 className="font-display text-[clamp(2rem,5vw,3.4rem)] text-parchment font-semibold mb-12">
        Tentang PAGASKA
      </h2>

      {/* Two-column layout */}
      <div className="grid gap-16 lg:grid-cols-[1fr_320px] items-start mb-20">
        <div className="space-y-5 text-parchment/65 text-[0.97rem] leading-relaxed">
          <p>
            <strong className="text-parchment font-semibold">PAGASKA (Paskibra Gala Taksaka)</strong> adalah
            ekstrakurikuler Paskibra dari SMK Negeri 5 Kota Madiun yang berdedikasi dalam melatih
            kedisiplinan, kepemimpinan, dan nasionalisme.
          </p>
          <p>
            Kami fokus pada pelatihan baris-berbaris, pengibaran bendera, dan pembentukan karakter
            siswa yang berintegritas tinggi serta memiliki jiwa patriotisme.
          </p>
          <p>
            PAGASKA telah mengikuti berbagai kompetisi LKBB (Lomba Ketangkasan Baris Berbaris) dan
            terus membina generasi pengibar bendera yang tegas, rapi, dan berjiwa satu komando.
          </p>
        </div>
        <div className="flex items-center justify-center lg:justify-end">
          <img
            src="https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/logo.png"
            alt="Logo PAGASKA"
            className="w-[200px] h-[200px] object-contain opacity-90 drop-shadow-[0_0_40px_rgba(184,145,47,0.18)]"
          />
        </div>
      </div>

      <FormationRule ticks={28} />

      {/* Pillars */}
      <div className="grid gap-8 sm:grid-cols-3 mt-2">
        {PILLARS.map((p) => (
          <div key={p.num} className="relative pl-6 border-l border-gold/30">
            <span className="font-mono text-gold/40 text-[0.72rem] tracking-[0.18em] uppercase mb-3 block">
              {p.num}
            </span>
            <h3 className="font-display text-parchment text-xl mb-3">{p.title}</h3>
            <p className="text-parchment/55 text-[0.9rem] leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
