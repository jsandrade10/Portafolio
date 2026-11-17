// Sitio con estética tipo estudio (fondo negro). Rutas con hash, sin dependencias:
//   #/                 inicio: franjas horizontales, una por proyecto
//   #/proyectos        grilla de obras (proyecto propio + dirección de obra)
//   #/disenos          grilla de diseños
//   #/p/<slug>         todas las fotos del proyecto en grilla (como las categorías de mk27)
//   #/p/<slug>/<n>     ficha del proyecto con la foto n grande, info a la derecha y miniaturas abajo
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
  linkedin: 'https://www.linkedin.com/in/joaquin-andrade-249205151',
}

const slugDe = (p) => p.fotos[0].src.split('/')[2]
const rolDe = (p) => (propios.includes(p) ? 'Diseño y dirección de obra' : obras.includes(p) ? 'Dirección de obra' : 'Diseño')

const categorias = [
  { id: 'proyectos', nombre: 'Proyectos', items: [...propios, ...obras] },
  { id: 'disenos', nombre: 'Diseños', items: disenos },
]

const porSlug = Object.fromEntries([...propios, ...obras, ...disenos].map((p) => [slugDe(p), p]))

// Inicio: franjas horizontales a todo el ancho, una por proyecto (pos = qué parte de la foto se ve).
const franjas = [
  { slug: 'remodelacion-ym', src: '/img/remodelacion-ym/01.jpg', pos: '50% 55%', alta: true },
  { slug: 'casa-jc', src: '/img/casa-jc/01.jpg', pos: '50% 55%' },
  { slug: 'casa-fr', src: '/img/casa-fr/05.jpg', pos: '50% 58%' },
  { slug: 'casa-aj', src: '/img/casa-aj/01.jpg', pos: '50% 60%' },
  { slug: 'casa-jv', src: '/img/casa-jv/01.jpg', pos: '50% 55%' },
  { slug: 'casa-lt', src: '/img/casa-lt/01.jpg', pos: '50% 50%' },
  { slug: 'casa-br', src: '/img/casa-br/01.jpg', pos: '50% 50%' },
  { slug: 'colegio-mine', src: '/img/obras/colegio-mine-inicio.jpg', pos: '50% 45%' },
  { slug: 'mundaneum-beirut', src: '/img/disenos/mundaneum-beirut.jpg', pos: '50% 55%' },
  { slug: 'galeria-talleres', src: '/img/disenos/galeria-talleres-inicio.jpg', pos: '50% 45%' },
  { slug: 'edificio-nexo', src: '/img/disenos/edificio-nexo-inicio.jpg', pos: '50% 35%' },
  // Vista del conjunto pasada a ilustración (ilustra2.mjs: cielo de acuarela, líneas grises suaves, ladrillo cálido, grano).
  { slug: 'facultad-arquitectura', src: '/img/disenos/facultad-arquitectura-inicio.jpg', pos: '50% 35%' },
  { slug: 'biblioteca', src: '/img/biblioteca/02.jpg', pos: '50% 10%' },
  { slug: 'centro-comunitario', src: '/img/centro-comunitario/02.jpg', pos: '50% 68%' },
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
  const actual = ruta.startsWith('p/') ? ruta.split('/')[1] : null
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
          <a key={m.slug} href={`#/p/${m.slug}`} className={m.alta ? "franja franja-alta" : "franja"}>
            <img src={m.src} alt={p.alt} style={{ objectPosition: m.pos, '--gris': m.gris }} loading={i < 4 ? 'eager' : 'lazy'} />
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
  if (obras.includes(p)) g2.push(['dirección de obra', 'Joaquín Andrade'])
  if (disenos.includes(p) && !p.credito && !p.coautoria) g2.push(['diseño', 'Joaquín Andrade'])
  return [g1, g2].filter((g) => g.length)
}

function Galeria({ p, inicio = 0 }) {
  const [i, setI] = useState(inicio)
  // Mantiene la dirección al día con la foto que se ve (sin recargar ni saltar).
  useEffect(() => {
    history.replaceState(null, '', `#/p/${slugDe(p)}/${i + 1}`)
  }, [i, p])
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

// Todas las fotos de un proyecto en grilla; cada foto abre la ficha en esa imagen.
function Fotos({ p }) {
  const slug = slugDe(p)
  return (
    <main>
      <h1 className="tit-cat">{p.nombre}</h1>
      <div className="grilla grilla-fotos">
        {p.fotos.map((f, k) => (
          <a key={f.src} href={`#/p/${slug}/${k + 1}`} className="celda">
            <img src={f.src} srcSet={`${f.thumb} 400w, ${f.src} 1600w`} sizes="(max-width: 700px) 50vw, 33vw" alt={f.alt} loading={k < 6 ? 'eager' : 'lazy'} />
            <span className="celda-txt">
              <em>{f.alt}</em>
            </span>
          </a>
        ))}
      </div>
    </main>
  )
}

function Proyecto({ p, cat, foto }) {
  const lista = cat.items
  const k = lista.indexOf(p)
  const ant = lista[(k - 1 + lista.length) % lista.length]
  const sig = lista[(k + 1) % lista.length]
  const slug = slugDe(p)
  return (
    <main className="proy">
      <div className="proy-media">
        <Galeria key={`${slug}-${foto}`} p={p} inicio={foto} />
      </div>
      <aside className="proy-ficha">
        <h1>{p.nombre}</h1>
        {ficha(p).map((g, gi) => (
          <dl key={gi} className="ficha-grupo">
            {g.map(([k2, v]) => (
              <div key={k2} className="ficha-dato">
                <dt>{k2.charAt(0).toUpperCase() + k2.slice(1)}:</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        ))}
      </aside>
      <div className="proy-texto">
        {[].concat(p.resumen ?? []).map((par, k) => <p key={k}>{par}</p>)}
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
            <a href={`#/p/${slug}`}>Todas las fotos</a>
            <a href={`#/p/${slugDe(sig)}`}>{sig.nombre} ›</a>
          </nav>
        )}
      </div>
    </main>
  )
}

// Datos de "Sobre mí", tomados del CV de Joaquín (sin dirección ni referencias).
// Cada entrada: [título, detalle, enlace opcional].
const cv = [
  ['Experiencia', [
    ['Arq. Buró · Quito', 'Dirección de Proyectos en obras residenciales diseñadas por Diez + Muller\nNov. 2023 – actualidad'],
    ['Remodelación YM · Oyambarillo, Quito', 'Proyecto propio: diseño y dirección de obra · 2025', '#/p/remodelacion-ym'],
    ['Arquitectura Infinita (Arquinf Constructores) · Quito', 'Diseño arquitectónico de proyectos residenciales · ene.–ago. 2023\nPrácticas profesionales · sep.–dic. 2022'],
    ['Grupo KFC · Quito', 'Pasantía en el departamento de Desarrollo y Proyectos · oct.–dic. 2017'],
    ['Haller Architekten · Friburgo, Alemania', 'Pasantía · jun.–ago. 2016'],
  ]],
  ['Formación', [
    ['Arquitectura', 'Universidad San Francisco de Quito · 2018–2022'],
    ['Intercambio en Arquitectura', 'Universidad de Évora, Portugal · 2022'],
    ['Bachillerato en Ciencias', 'Colegio Binacional Alemán, Quito · 2017'],
  ]],
  ['Idiomas', [
    ['Español', 'Lengua materna'],
    ['Inglés', 'Avanzado'],
    ['Alemán', 'Intermedio'],
  ]],
  ['Software', [
    ['AutoCAD · SketchUp · Twinmotion', 'Adobe Photoshop · Adobe Illustrator · Microsoft Office'],
  ]],
]

function SobreMi() {
  return (
    <main className="pagina">
      <img
        className="retrato"
        src="/img/sobre-mi/retrato.jpg"
        alt="Retrato de Joaquín Andrade, arquitecto"
        width="840"
        height="1120"
      />
      <div className="pagina-txt">
        <h1>Sobre mí</h1>
        <p>Arquitecto en Quito. Dirección de Proyectos en Arq. Buró.</p>
        <p className="cv-intro">
          Soy arquitecto con formación contemporánea y una visión integral del proceso constructivo, desde el
          diseño hasta la obra. Tengo experiencia en la coordinación con clientes, proveedores y equipos de
          trabajo, lo que me permite integrar creatividad, técnica y funcionalidad en cada proyecto. Me motiva
          seguir aprendiendo, asumir nuevos retos y aportar valor en todas las etapas del desarrollo
          arquitectónico.
        </p>
        {cv.map(([sec, items]) => (
          <section key={sec} className="ficha-grupo cv-sec">
            <h2>{sec}:</h2>
            {items.map(([t, d, href]) => (
              <div key={t} className="cv-item">
                <p>{href ? <a href={href}>{t}</a> : t}</p>
                {d.split('\n').map((l) => (
                  <p key={l} className="cv-det">{l}</p>
                ))}
              </div>
            ))}
          </section>
        ))}
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
        <dl className="ficha-grupo">
          {[
            ['Email', <a href={`mailto:${contacto.email}`}>{contacto.email}</a>],
            ['Teléfono', <a href={`tel:${contacto.telefonoIntl}`}>{contacto.telefono}</a>],
            ['WhatsApp', <a href={wa} target="_blank" rel="noreferrer">Escríbeme</a>],
            ['LinkedIn', <a href={contacto.linkedin} target="_blank" rel="noreferrer">Joaquín Andrade</a>],
            ['Ubicación', 'Quito, Ecuador'],
          ].map(([k, v]) => (
            <div key={k} className="ficha-dato">
              <dt>{k}:</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
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
  else if (ruta.startsWith('p/') && porSlug[ruta.split('/')[1]]) {
    const [, slug, n] = ruta.split('/')
    const p = porSlug[slug]
    const foto = Math.min(Math.max(parseInt(n, 10) || 0, 0), p.fotos.length)
    pagina = n ? <Proyecto p={p} cat={categorias.find((c) => c.items.includes(p))} foto={Math.max(foto - 1, 0)} /> : <Fotos p={p} />
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
