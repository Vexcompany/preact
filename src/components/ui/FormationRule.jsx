/**
 * FormationRule — signature visual divider
 * Mimics the tick-count spacing used in Paskibra drill formations.
 * Every 4th tick is taller (visual "beat").
 */
export default function FormationRule({ ticks = 28, light = false }) {
  return (
    <div className={`formation-rule my-10 ${light ? 'light' : ''}`}>
      {Array.from({ length: ticks }, (_, i) => (
        <span key={i} />
      ))}
    </div>
  )
}
