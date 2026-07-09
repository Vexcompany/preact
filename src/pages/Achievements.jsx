import { useState } from 'react'
import { achievements } from '../data/achievements'
import GalleryLightbox from '../components/GalleryLightbox'
import Eyebrow from '../components/ui/Eyebrow'

const RIBBON_STYLES = {
  ppi: 'bg-crimson text-parchment',
  aqua: 'bg-navy text-parchment border border-parchment/10',
  gold: 'bg-gold text-ink',
}

export default function Achievements() {
  const [gallery, setGallery] = useState({ images: [], index: null })

  const openGallery = (images, index) => setGallery({ images, index })
  const closeGallery = () => setGallery({ images: [], index: null })
  const navGallery = (index) => setGallery((prev) => ({ ...prev, index }))

  return (
    <section className="max-w-[880px] mx-auto px-7 py-24 animate-route-fade">
      <Eyebrow className="mb-4 block">Rekam Jejak</Eyebrow>
      <h2 className="font-display text-[clamp(2rem,5vw,3.4rem)] text-parchment font-semibold mb-14">
        Prestasi PAGASKA
      </h2>

      <div className="space-y-10">
        {achievements.map((a) => (
          <article
            key={a.id}
            className="bg-white/[0.04] border border-parchment/10 rounded-brand overflow-hidden shadow-[0_8px_22px_rgba(0,0,0,0.3)]"
          >
            {/* Header */}
            <div className="px-8 pt-8 pb-0 text-center">
              <span className={`ribbon ${RIBBON_STYLES[a.ribbon.variant] || ''}`}>
                {a.ribbon.label}
              </span>
              <h2 className="font-display text-[clamp(1.35rem,3vw,1.9rem)] text-parchment mb-4">
                {a.title}
              </h2>
              <div className="flex justify-center flex-wrap gap-5 text-parchment/55 text-sm mb-6">
                <span>{a.meta.type}</span>
                <span>📅 {a.meta.date}</span>
                <span>📍 {a.meta.location}</span>
              </div>
            </div>

            {/* Body */}
            <div className="px-8 pb-8">
              <img
                src={a.coverImage}
                alt={a.title}
                className="w-full max-h-[380px] object-cover rounded-brand mb-3"
                loading="lazy"
              />
              {a.caption && (
                <p className="text-center text-parchment/50 text-sm italic mb-6">{a.caption}</p>
              )}

              <p className="text-parchment/60 text-[0.95rem] leading-relaxed mb-6">
                {a.description}
              </p>

              {/* Details */}
              <div className="bg-white/[0.05] rounded-brand p-6 mb-6 grid gap-3">
                {a.details.map((d) => (
                  <div key={d.label} className="grid grid-cols-[140px_1fr] gap-3 text-[0.9rem]">
                    <span className="text-parchment font-semibold">{d.label}:</span>
                    <span className="text-parchment/60">{d.value}</span>
                  </div>
                ))}
              </div>

              {/* YouTube embed */}
              {a.youtubeId && (
                <div className="relative w-full pt-[56.25%] rounded-brand overflow-hidden mb-6 bg-ink">
                  <iframe
                    className="absolute inset-0 w-full h-full border-0"
                    src={`https://www.youtube.com/embed/${a.youtubeId}`}
                    title={a.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}

              {/* Gallery */}
              {a.gallery?.length > 0 && (
                <>
                  <h3 className="font-display text-parchment text-lg mb-4">Gallery Dokumentasi</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                    {a.gallery.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => openGallery(a.gallery, i)}
                        className="aspect-square overflow-hidden rounded-brand cursor-pointer group bg-transparent border-0 p-0"
                      >
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.06]"
                          loading="lazy"
                        />
                      </button>
                    ))}
                  </div>
                </>
              )}

              {/* Footer */}
              <div className="flex flex-wrap justify-between items-center gap-4 pt-5 border-t border-parchment/10">
                <div className="flex flex-wrap gap-2">
                  {a.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <GalleryLightbox
        images={gallery.images}
        currentIndex={gallery.index}
        onClose={closeGallery}
        onNav={navGallery}
      />
    </section>
  )
}
