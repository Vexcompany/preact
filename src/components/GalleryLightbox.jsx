import { useEffect, useCallback } from 'react'

export default function GalleryLightbox({ images, currentIndex, onClose, onNav }) {
  const prev = useCallback(() => onNav((currentIndex - 1 + images.length) % images.length), [currentIndex, images.length, onNav])
  const next = useCallback(() => onNav((currentIndex + 1) % images.length), [currentIndex, images.length, onNav])

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose, prev, next])

  if (currentIndex === null || !images?.length) return null

  return (
    <div
      className="fixed inset-0 bg-ink/92 backdrop-blur-sm z-[900] flex items-center justify-center animate-route-fade"
      onClick={onClose}
    >
      <button
        onClick={(e) => { e.stopPropagation(); prev() }}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-parchment/70 hover:text-parchment text-4xl bg-transparent border-0 cursor-pointer z-10 transition-colors"
      >‹</button>

      <div className="max-w-[90vw] max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
        <img
          src={images[currentIndex]?.src}
          alt={images[currentIndex]?.alt || ''}
          className="max-w-full max-h-[85vh] object-contain rounded-brand shadow-[0_30px_80px_rgba(11,18,32,0.7)]"
        />
        {images[currentIndex]?.alt && (
          <p className="text-center text-parchment/60 text-sm mt-3 font-mono">{images[currentIndex].alt}</p>
        )}
        <p className="text-center text-parchment/40 text-xs mt-1 font-mono">
          {currentIndex + 1} / {images.length}
        </p>
      </div>

      <button
        onClick={(e) => { e.stopPropagation(); next() }}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-parchment/70 hover:text-parchment text-4xl bg-transparent border-0 cursor-pointer z-10 transition-colors"
      >›</button>

      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-parchment/50 hover:text-parchment text-2xl bg-transparent border-0 cursor-pointer transition-colors"
      >✕</button>
    </div>
  )
}
