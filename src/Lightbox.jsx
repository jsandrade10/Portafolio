// Visor de fotos a pantalla completa: flechas, teclado (← → Esc), deslizar en táctil y tira de miniaturas.
import { useEffect, useRef, useState } from 'react'

export default function Lightbox({ titulo, fotos, inicio = 0, onClose }) {
  const [i, setI] = useState(inicio)
  const cerrarRef = useRef(null)
  const tiraRef = useRef(null)
  const toque = useRef(null)
  const n = fotos.length
  const ir = (d) => setI((v) => (v + d + n) % n)

  // Teclado, bloqueo del scroll de la página y foco inicial en "cerrar".
  useEffect(() => {
    const previo = document.activeElement
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    cerrarRef.current?.focus()
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowRight') ir(1)
      else if (e.key === 'ArrowLeft') ir(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = overflow
      previo?.focus?.()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Precarga las fotos vecinas y mantiene visible la miniatura activa.
  useEffect(() => {
    ;[i + 1, i - 1].forEach((k) => {
      const img = new Image()
      img.src = fotos[(k + n) % n].src
    })
    tiraRef.current?.children[i]?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' })
  }, [i, fotos, n])

  const onTouchStart = (e) => { toque.current = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    if (toque.current == null) return
    const dx = e.changedTouches[0].clientX - toque.current
    if (Math.abs(dx) > 40) ir(dx < 0 ? 1 : -1)
    toque.current = null
  }

  const foto = fotos[i]
  return (
    <div className="lb" role="dialog" aria-modal="true" aria-label={`Fotos de ${titulo}`} onClick={onClose}>
      <div className="lb-top" onClick={(e) => e.stopPropagation()}>
        <span className="lb-titulo">{titulo}</span>
        <span className="lb-cont">{i + 1} / {n}</span>
        <button ref={cerrarRef} className="lb-btn lb-cerrar" onClick={onClose} aria-label="Cerrar">✕</button>
      </div>

      <div className="lb-escena" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <img key={foto.src} className="lb-img" src={foto.src} alt={foto.alt} onClick={(e) => e.stopPropagation()} />
        {n > 1 && (
          <>
            <button className="lb-btn lb-prev" onClick={(e) => { e.stopPropagation(); ir(-1) }} aria-label="Foto anterior">‹</button>
            <button className="lb-btn lb-next" onClick={(e) => { e.stopPropagation(); ir(1) }} aria-label="Foto siguiente">›</button>
          </>
        )}
      </div>

      <p className="lb-pie" onClick={(e) => e.stopPropagation()}>{foto.alt}</p>

      {n > 1 && (
        <div className="lb-tira" ref={tiraRef} onClick={(e) => e.stopPropagation()}>
          {fotos.map((f, k) => (
            <button key={f.src} className={`lb-mini${k === i ? ' activa' : ''}`} onClick={() => setI(k)} aria-label={`Ver foto ${k + 1}`} aria-current={k === i}>
              <img src={f.thumb} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
