// Sitio con estructura tipo estudio de arquitectura (fondo negro, franjas de categorías,
// grilla de proyectos y página de proyecto con ficha). Rutas con hash, sin dependencias:
//   #/                     inicio (franjas)
//   #/<categoria>          grilla: proyecto-propio, jefe-de-obra, academico
//   #/p/<slug>             página de un proyecto
//   #/sobre-mi, #/contacto
import { useEffect, useState } from 'react'
import BeforeAfter from './BeforeAfter.jsx'
import Lightbox from './Lightbox.jsx'
import { propios, obras, academicos } from './proyectos.js'

const contacto = {
  email: 'jsandrade10@gmail.com',
  telefono: '099 275 4846',
  telefonoIntl: '+593992754846',
}

const slugDe = (p) => p.fotos[0].src.split('/')[2]

const categorias = [
  {
    id: 'proyecto-propio',
    nombre: 'Proyecto propio',
    items: propios,
    intro: 'Diseño y dirección de obra de Joaquín Andrade.',
  },
  {
    id: 'jefe-de-obra',
    nombre: 'Jefe de obra',
    items: obras,
    intro: 'Obras diseñadas por Diez + Muller y construidas por Arq. Buró, donde trabajo como jefe de obra.',
  },
  {
    id: 'academico',
    nombre: 'Académico',
    items: academicos,
    intro: 'Universidad San Francisco de Quito, del Taller 4 a la tesis de grado. Entregas finales.',
  },
]

const menu = [
  ...categorias.map((c) => ({ href: `#/${c.id}`, nombre: c.nombre })),
  { href: '#/sobre-mi', nombre: 'Sobre mí' },
  { href: '#/contacto', nombre: 'Contacto' },
]

// Franjas del inicio: una por sección, con la foto que la representa.
const franjas = [
  { href: '#/proyecto-propio', nombre: 'Proyecto propio', src: '/img/remodelacion-ym/01.jpg', pos: '50% 45%', alt: 'Remodelación YM' },
  { href: '#/jefe-de-obra', nombre: 'Jefe de obra', src: '/img/casa-jc/01.jpg', pos: '50% 55%', alt: 'Casa JC' },
  { href: '#/p/casa-aj', nombre: 'En obra / terminado', src: '/img/hero/casa-aj-final.jpg', pos: '50% 50%', alt: 'Casa AJ terminada' },
  { href: '#/academico', nombre: 'Académico', src: '/img/academico/mundaneum-beirut.jpg', pos: '50% 50%', alt: 'Maqueta del Mundaneum Beirut' },
  { href: '#/sobre-mi', nombre: 'Sobre mí', src: '/img/casa-aj/07.jpg', pos: '50% 50%', alt: 'Casa AJ en obra: encofrado de muros y gradas' },
  { href: '#/contacto', nombre: 'Contacto', src: '/img/colegio-mine/01.jpg', pos: '50% 60%', alt: 'Colegio Mine: pabellón entre eucaliptos' },
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
  const activo = (href) => {
    const r = href.slice(2)
    if (ruta === r) return true
    if (ruta.startsWith('p/')) return categorias.find((c) => c.id === r)?.items.some((p) => `p/${slugDe(p)}` === ruta)
    return false
  }
  return (
    <header className={`hd${abierto ? ' hd-abierto' : ''}`}>
      <a href="#/" className="hd-logo" aria-label="Inicio">
        <span>Joaquín</span>
        <span>Andrade</span>
        <span className="hd-sub">Arquitecto</span>
      </a>
      <button className="hd-burger" onClick={() => setAbierto((v) => !v)} aria-expanded={abierto} aria-label="Menú">
        <span /><span /><span />
      </button>
      <nav className="hd-nav">
        {menu.map((m) => (
          <a key={m.href} href={m.href} className={activo(m.href) ? 'activo' : ''}>{m.nombre}</a>
        ))}
      </nav>
    </header>
  )
}

function Inicio() {
  return (
    <main className="franjas">
      <h1 className="sr-only">Joaquín Andrade, arquitecto</h1>
      {franjas.map((f, i) => (
        <a key={f.href + f.nombre} href={f.href} className="franja">
          <img src={f.src} alt={f.alt} style={{ objectPosition: f.pos }} loading={i < 4 ? 'eager' : 'lazy'} />
          <span>{f.nombre}</span>
        </a>
      ))}
    </main>
  )
}

function Categoria({ cat }) {
  return (
    <main>
      <h1 className="sr-only">{cat.nombre}</h1>
      <p className="intro">{cat.intro}</p>
      <div className="grilla">
        {cat.items.map((p) => (
          <a key={p.nombre} href={`#/p/${slugDe(p)}`} className="celda">
            <img src={p.portada} alt={p.alt} loading="lazy" width="1200" height="900" />
            <span className="celda-txt">
              <strong>{p.nombre}</strong>
              <em>{p.tipo}</em>
            </span>
          </a>
        ))}
      </div>
    </main>
  )
}

// Ficha técnica en el formato "campo > valor", con grupos separados por "-".
function ficha(p) {
  const g1 = []
  const tipos = p.tipo.split(' · ')
  g1.push(['tipo', tipos.filter((t) => !/^\d{4}$/.test(t)).join(' · ')])
  if (p.ubicacion) g1.push(['ubicación', p.ubicacion])
  const anio = p.anio ?? tipos.find((t) => /^\d{4}$/.test(t))
  if (anio) g1.push(['año', anio])
  const g2 = (p.credito ?? '').split(' · ').filter(Boolean).map((c) => {
    if (c.startsWith('Con ')) return ['en equipo con', c.slice(4)]
    const [k, v] = c.split(': ')
    return [k.toLowerCase(), v]
  })
  if (p.credito?.includes('Arq. Buró')) g2.push(['jefe de obra', 'Joaquín Andrade'])
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
        <p>Arquitecto por la Universidad San Francisco de Quito (2022). Jefe de obra en Arq. Buró.</p>
        <p>-</p>
        <p>formación &gt; USFQ, arquitectura</p>
        <p>taller 8 &gt; Casa Branca, Portugal, 2022</p>
        <p>titulación &gt; diciembre 2022 · tesis: Mundaneum Beirut</p>
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
  else if (ruta.startsWith('p/')) {
    for (const c of categorias) {
      const p = c.items.find((x) => slugDe(x) === ruta.slice(2))
      if (p) pagina = <Proyecto p={p} cat={c} />
    }
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
