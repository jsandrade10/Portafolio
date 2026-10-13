import { useRef, useState } from 'react'

// Comparador antes/después: la barra sigue al mouse (o al dedo al arrastrar).
// Izquierda de la barra = `after` (terminado), derecha = `before` (en obra):
// al mover de izquierda a derecha se revela la obra terminada.
export default function BeforeAfter({ before, after, beforeLabel, afterLabel }) {
  const ref = useRef(null)
  const [pos, setPos] = useState(50)

  const moveTo = (clientX) => {
    const { left, width } = ref.current.getBoundingClientRect()
    setPos(Math.min(100, Math.max(0, ((clientX - left) / width) * 100)))
  }

  const onPointerMove = (e) => {
    // Con mouse basta pasar por encima; en pantallas táctiles hay que arrastrar.
    if (e.pointerType === 'mouse' || e.buttons) moveTo(e.clientX)
  }

  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') setPos((p) => Math.max(0, p - 5))
    if (e.key === 'ArrowRight') setPos((p) => Math.min(100, p + 5))
  }

  return (
    <div
      ref={ref}
      className="ba"
      onPointerMove={onPointerMove}
      onPointerDown={(e) => moveTo(e.clientX)}
      onKeyDown={onKeyDown}
      role="slider"
      tabIndex={0}
      aria-label="Comparar obra en proceso y terminada"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pos)}
    >
      <img src={before.src} alt={before.alt} className="ba-img" fetchPriority="high" draggable="false" />
      <img
        src={after.src}
        alt={after.alt}
        className="ba-img"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        draggable="false"
      />
      <span className="ba-label ba-label-left">{afterLabel}</span>
      <span className="ba-label ba-label-right">{beforeLabel}</span>
      <div className="ba-bar" style={{ left: `${pos}%` }}>
        <span className="ba-handle" aria-hidden="true">‹ ›</span>
      </div>
    </div>
  )
}
