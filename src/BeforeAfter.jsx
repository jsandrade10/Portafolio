import { useRef, useState } from 'react'

// Comparador de dos fotos alineadas: la barra sigue al mouse (o al dedo al arrastrar).
// `left` se ve a la izquierda de la barra y `right` a la derecha.
// En el inicio: izquierda = en obra, derecha = terminado; al mover hacia la derecha se ve más obra.
export default function BeforeAfter({ left, right, leftLabel, rightLabel }) {
  const ref = useRef(null)
  const [pos, setPos] = useState(50)

  const moveTo = (clientX) => {
    const { left: x0, width } = ref.current.getBoundingClientRect()
    setPos(Math.min(100, Math.max(0, ((clientX - x0) / width) * 100)))
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
      aria-label={`Comparar: ${leftLabel} a la izquierda, ${rightLabel} a la derecha`}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pos)}
    >
      <img src={right.src} alt={right.alt} className="ba-img" fetchPriority="high" draggable="false" />
      <img
        src={left.src}
        alt={left.alt}
        className="ba-img"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        draggable="false"
      />
      <span className="ba-label ba-label-left">{leftLabel}</span>
      <span className="ba-label ba-label-right">{rightLabel}</span>
      <div className="ba-bar" style={{ left: `${pos}%` }}>
        <span className="ba-handle" aria-hidden="true">‹ ›</span>
      </div>
    </div>
  )
}
