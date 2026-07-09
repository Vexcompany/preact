import Eyebrow from '../components/ui/Eyebrow'

const TIMELINE = [
  {
    year: '2022',
    title: 'Awal Perjalanan',
    desc: 'PAGASKA didirikan sebagai ekstrakurikuler Paskibra di SMK Negeri 5 Kota Madiun. Pada tahun yang sama, mengikuti lomba LKBB pertama kali di tingkat Provinsi di Gor Lila Bhuana pada 16 Desember 2022.',
  },
  {
    year: '2023',
    title: 'Prestasi Pasukan Pengibar Bendera',
    desc: '3 anggota PAGASKA berhasil terpilih untuk berpartisipasi dalam penurunan bendera Merah Putih di Kecamatan Dalung.',
  },
  {
    year: '2024',
    title: 'Prestasi Kecamatan',
    desc: '10 siswa PAGASKA berhasil terpilih untuk berpartisipasi dalam penurunan bendera Merah Putih di Kecamatan Dalung pada 17 Agustus 2024 di Lapangan Binaraga Dalung.',
  },
]

export default function History() {
  return (
    <section className="max-w-site mx-auto px-7 py-24 animate-route-fade">
      <Eyebrow className="mb-4 block">Perjalanan</Eyebrow>
      <h2 className="font-display text-[clamp(2rem,5vw,3.4rem)] text-parchment font-semibold mb-3">
        Sejarah PAGASKA
      </h2>
      <p className="text-parchment/50 text-[0.97rem] mb-16 font-mono tracking-[0.04em]">
        Tiga tahun barisan, satu komando yang sama.
      </p>

      {/* Timeline */}
      <div className="relative pl-8 border-l border-gold/20 space-y-14">
        {TIMELINE.map((item) => (
          <div key={item.year} className="relative">
            {/* Dot */}
            <span className="absolute -left-[2.15rem] top-[0.35rem] w-3 h-3 rounded-full bg-gold shadow-[0_0_12px_rgba(184,145,47,0.5)] border-2 border-ink" />
            <Eyebrow className="mb-3 block">{item.year}</Eyebrow>
            <h3 className="font-display text-parchment text-xl mb-3">{item.title}</h3>
            <p className="text-parchment/60 text-[0.95rem] leading-relaxed max-w-2xl">{item.desc}</p>
          </div>
        ))}
        {/* End marker */}
        <div className="relative">
          <span className="absolute -left-[2.3rem] top-0 w-[18px] h-[18px] rounded-full border-2 border-gold/40 flex items-center justify-center">
            <span className="w-2 h-2 bg-gold/50 rounded-full" />
          </span>
          <p className="text-parchment/30 font-mono text-[0.75rem] tracking-[0.12em] uppercase pt-1">
            Perjalanan berlanjut…
          </p>
        </div>
      </div>
    </section>
  )
}
