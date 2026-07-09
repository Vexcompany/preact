export default function LoadingScreen({ visible }) {
  return (
    <div
      className={`fixed inset-0 bg-ink z-[9999] flex flex-col items-center justify-center transition-[opacity,visibility] duration-500 ${
        visible ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      <div className="mb-6">
        <img
          src="https://files.catbox.moe/2amvxp.png"
          alt="Lambang PAGASKA"
          className="w-[72px] h-[72px] object-contain drop-shadow-[0_0_18px_rgba(184,145,47,0.35)]"
        />
      </div>
      <p className="font-mono text-parchment text-[0.75rem] tracking-[0.3em] uppercase mb-5">
        Paskibra Gala Taksaka
      </p>
      <div className="w-[180px] h-[2px] bg-white/10 overflow-hidden">
        <div className="h-full w-0 bg-gold animate-load-fill" />
      </div>
    </div>
  )
}
