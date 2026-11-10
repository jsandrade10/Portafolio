// Sitio con estética tipo estudio (fondo negro). Rutas con hash, sin dependencias:
//   #/                 inicio: franjas horizontales, una por proyecto
//   #/proyectos        grilla de obras (proyecto propio + jefe de obra)
//   #/disenos          grilla de diseños
//   #/p/<slug>         página de un proyecto
//   #/sobre-mi, #/contacto
// El menú se abre con la hamburguesa (en computadora y en celular).
// IMPORTANTE: los diseños NO se presentan como trabajos universitarios (pedido de Joaquín).
import { useEffect, useState } from 'react'
import BeforeAfter from './BeforeAfter.jsx'
import Lightbox from './Lightbox.jsx'
import { propios, obras, disenos } from './proyectos.js'

const contacto = {
  email: 'jsandrade10@gmail.com',
  telefono: '099 275 4846',
  telefonoIntl: '+593992754846',
}

const slugDe = (p) => p.fotos[0].src.split('/')[2]
const rolDe = (p) => (propios.includes(p) ? 'Diseño y dirección de obra' : obras.includes(p) ? 'Jefe de obra' : 'Diseño')

const categorias = [
  { id: 'proyectos', nombre: 'Proyectos', items: [...propios, ...obras] },
  { id: 'disenos', nombre: 'Diseños', items: disenos },
]

const porSlug = Object.fromEntries([...propios, ...obras, ...disenos].map((p) => [slugDe(p), p]))

// Inicio: franjas horizontales a todo el ancho, una por proyecto (pos = qué parte de la foto se ve).
const franjas = [
  { slug: 'casa-jc', src: '/img/casa-jc/01.jpg', pos: '50% 55%' },
  { slug: 'remodelacion-ym', src: '/img/remodelacion-ym/01.jpg', pos: '50% 45%' },
  { slug: 'edificio-nexo', src: '/img/disenos/edificio-nexo.jpg', pos: '50% 35%' },
  { slug: 'casa-aj', src: '/img/casa-aj/01.jpg', pos: '50% 60%' },
  { slug: 'casa-fr', src: '/img/casa-fr/01.jpg', pos: '50% 50%' },
  { slug: 'mundaneum-beirut', src: '/img/disenos/mundaneum-beirut.jpg', pos: '50% 50%' },
  { slug: 'casa-jv', src: '/img/casa-jv/01.jpg', pos: '50% 55%' },
  { slug: 'casa-lt', src: '/img/casa-lt/01.jpg', pos: '50% 50%' },
  { slug: 'galeria-talleres', src: '/img/disenos/galeria-talleres.jpg', pos: '50% 50%' },
  { slug: 'casa-br', src: '/img/casa-br/01.jpg', pos: '50% 50%' },
  { slug: 'colegio-mine', src: '/img/colegio-mine/01.jpg', pos: '50% 60%' },
]

function useRuta() {
  const leer = () => window.location.hash.replace(/^#\/?/, '')
  const [ruta, setRuta] = useState(leer)
  useEffect(() => {
    const on = () => {
      setRuta(leer())
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', on)
    return () => window.removeEventListener('hashchange', on)
  }, [])
  return ruta
}

function Header({ ruta }) {
  const [abierto, setAbierto] = useState(false)
  useEffect(() => setAbierto(false), [ruta])
  useEffect(() => {
    if (!abierto) return
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && setAbierto(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = overflow
      window.removeEventListener('keydown', onKey)
    }
  }, [abierto])
  const actual = ruta.startsWith('p/') ? ruta.slice(2) : null
  return (
    <header className={`hd${abierto ? ' hd-abierto' : ''}`}>
      <a href="#/" className="hd-logo" aria-label="Inicio">
        <span>Joaquín Andrade</span>
        <span className="hd-sub">Arquitecto</span>
      </a>
      <button className="hd-burger" onClick={() => setAbierto((v) => !v)} aria-expanded={abierto} aria-controls="menu" aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}>
        <span /><span /><span />
      </button>
      <nav id="menu" className="menu" hidden={!abierto}>
        {categorias.map((c) => (
          <div key={c.id} className="menu-col">
            <a href={`#/${c.id}`} className="menu-tit">{c.nombre}</a>
            <ul>
              {c.items.map((p) => (
                <li key={p.nombre}>
                  <a href={`#/p/${slugDe(p)}`} className={actual === slugDe(p) ? 'activo' : ''}>{p.nombre}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="menu-col">
          <a href="#/sobre-mi" className="menu-tit">Sobre mí</a>
          <a href="#/contacto" className="menu-tit">Contacto</a>
        </div>
      </nav>
    </header>
  )
}

function Inicio() {
  return (
    <main className="franjas">
      <h1 className="sr-only">Joaquín Andrade, arquitecto</h1>
      {franjas.map((m, i) => {
        const p = porSlug[m.slug]
        return (
          <a key={m.slug} href={`#/p/${m.slug}`} className="franja">
            <img src={m.src} alt={p.alt} style={{ objectPosition: m.pos }} loading={i < 4 ? 'eager' : 'lazy'} />
            <span className="franja-txt">
              <strong>{p.nombre}</strong>
              <em>{rolDe(p)}</em>
            </span>
          </a>
        )
      })}
    </main>
  )
}

function Categoria({ cat }) {
  return (
    <main>
      <h1 className="tit-cat">{cat.nombre}</h1>
      <div className="grilla">
        {cat.items.map((p) => (
          <a key={p.nombre} href={`#/p/${slugDe(p)}`} className="celda">
            <img src={p.portada} alt={p.alt} loading="lazy" width="1200" height="900" />
            <span className="celda-txt">
              <strong>{p.nombre}</strong>
              <em>{rolDe(p)}</em>
            </span>
          </a>
        ))}
      </div>
    </main>
  )
}

// Ficha técnica en el formato "campo > valor", con grupos separados por "-".
function ficha(p) {
  const g1 = [['tipo', p.tipo]]
  if (p.ubicacion) g1.push(['ubicación', p.ubicacion])
  if (p.anio) g1.push(['año', p.anio])
  const g2 = (p.credito ?? '').split(' · ').filter(Boolean).map((c) => {
    const [k, v] = c.split(': ')
    return [k.toLowerCase(), v]
  })
  if (obras.includes(p)) g2.push(['jefe de obra', 'Joaquín Andrade'])
  if (disenos.includes(p)) g2.push(['diseño', 'Joaquín Andrade'])
  return [g1, g2].filter((g) => g.length)
}

function Galeria({ p }) {
  const [i, setI] = useState(0)
  const [visor, setVisor] = useState(false)
  const n = p.fotos.length
  const ir = (d) => setI((v) => (v + d + n) % n)
  useEffect(() => {
    if (visor) return
    const onKey = (e) => {
      if (document.querySelector('.hd-abierto')) return
      if (e.key === 'ArrowRight') ir(1)
      else if (e.key === 'ArrowLeft') ir(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visor, n])
  useEffect(() => {
    ;[i + 1, i - 1].forEach((k) => { new Image().src = p.fotos[(k + n) % n].src })
  }, [i, p, n])
  const toque = { x: null }
  const foto = p.fotos[i]
  return (
    <div className="gal">
      <div
        className="gal-escena"
        onTouchStart={(e) => { toque.x = e.touches[0].clientX }}
        onTouchEnd={(e) => {
          if (toque.x == null) return
          const dx = e.changedTouches[0].clientX - toque.x
          if (Math.abs(dx) > 40) ir(dx < 0 ? 1 : -1)
          toque.x = null
        }}
      >
        <button className="gal-zoom" onClick={() => setVisor(true)} aria-label="Ver a pantalla completa">
          <img key={foto.src} src={foto.src} alt={foto.alt} />
        </button>
        {n > 1 && (
          <>
            <button className="gal-flecha gal-prev" onClick={() => ir(-1)} aria-label="Imagen anterior">‹</button>
            <button className="gal-flecha gal-next" onClick={() => ir(1)} aria-label="Imagen siguiente">›</button>
          </>
        )}
      </div>
      <div className="gal-tira">
        {p.fotos.map((f, k) => (
          <button key={f.src} className={k === i ? 'activa' : ''} onClick={() => setI(k)} aria-label={`Ver imagen ${k + 1}`} aria-current={k === i}>
            <img src={f.thumb} alt="" loading="lazy" />
          </button>
        ))}
      </div>
      <p className="gal-pie">{i + 1} / {n} — {foto.alt}</p>
      {visor && <Lightbox titulo={p.nombre} fotos={p.fotos} inicio={i} onClose={() => setVisor(false)} />}
    </div>
  )
}

function Proyecto({ p, cat }) {
  const lista = cat.items
  const k = lista.indexOf(p)
  const ant = lista[(k - 1 + lista.length) % lista.length]
  const sig = lista[(k + 1) % lista.length]
  const slug = slugDe(p)
  return (
    <main className="proy">
      <div className="proy-media">
        <Galeria key={slug} p={p} />
      </div>
      <aside className="proy-ficha">
        <h1>{p.nombre}</h1>
        {ficha(p).map((g, gi) => (
          <div key={gi}>
            {gi > 0 && <p>-</p>}
            {g.map(([k2, v]) => (
              <p key={k2}>{k2} &gt; {v}</p>
            ))}
          </div>
        ))}
      </aside>
      <div className="proy-texto">
        {p.resumen && <p>{p.resumen}</p>}
        {slug === 'casa-aj' && (
          <div className="proy-ba">
            <p>En obra / terminado — mueve la barra para comparar.</p>
            <BeforeAfter
              left={{ src: '/img/hero/casa-aj-obra.jpg', alt: 'Casa AJ durante la construcción, en obra gris' }}
              right={{ src: '/img/hero/casa-aj-final.jpg', alt: 'Casa AJ terminada: volúmenes de hormigón visto y muro de ladrillo' }}
              leftLabel="En obra"
              rightLabel="Terminado"
            />
          </div>
        )}
        {lista.length > 1 && (
          <nav className="proy-nav">
            <a href={`#/p/${slugDe(ant)}`}>‹ {ant.nombre}</a>
            <a href={`#/${cat.id}`}>{cat.nombre}</a>
            <a href={`#/p/${slugDe(sig)}`}>{sig.nombre} ›</a>
          </nav>
        )}
      </div>
    </main>
  )
}

function SobreMi() {
  return (
    <main className="pagina">
      <div className="ph">Foto de perfil</div>
      <div className="pagina-txt">
        <h1>Sobre mí</h1>
        <p>Arquitecto en Quito. Jefe de obra en Arq. Buró.</p>
        <p>-</p>
        <p>formación &gt; Arquitectura, Universidad San Francisco de Quito</p>
        <p>proyecto propio &gt; Remodelación YM, Quito, 2025</p>
        <p>trabajo &gt; jefe de obra en Arq. Buró</p>
      </div>
    </main>
  )
}

function Contacto() {
  const wa = `https://wa.me/${contacto.telefonoIntl.replace('+', '')}`
  return (
    <main className="pagina">
      <div className="pagina-txt">
        <h1>Contacto</h1>
        <p>email &gt; <a href={`mailto:${contacto.email}`}>{contacto.email}</a></p>
        <p>teléfono &gt; <a href={`tel:${contacto.telefonoIntl}`}>{contacto.telefono}</a></p>
        <p>whatsapp &gt; <a href={wa} target="_blank" rel="noreferrer">escríbeme</a></p>
        <p>-</p>
        <p>Quito, Ecuador</p>
      </div>
    </main>
  )
}

export default function App() {
  const ruta = useRuta()
  let pagina = <Inicio />
  const cat = categorias.find((c) => c.id === ruta)
  if (cat) pagina = <Categoria cat={cat} />
  else if (ruta === 'sobre-mi') pagina = <SobreMi />
  else if (ruta === 'contacto') pagina = <Contacto />
  else if (ruta.startsWith('p/') && porSlug[ruta.slice(2)]) {
    const p = porSlug[ruta.slice(2)]
    pagina = <Proyecto p={p} cat={categorias.find((c) => c.items.includes(p))} />
  }
  useEffect(() => {
    const titulo = document.querySelector('main h1')?.textContent
    document.title = titulo && ruta ? `${titulo} — Joaquín Andrade` : 'Joaquín Andrade — Arquitectura'
  }, [ruta])
  return (
    <>
      <Header ruta={ruta} />
      {pagina}
      <footer className="pie">© {new Date().getFullYear()} Joaquín Andrade · Quito</footer>
    </>
  )
}
