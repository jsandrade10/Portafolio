// Página única. Las tarjetas sin foto siguen como cajas grises hasta tener material.
import BeforeAfter from './BeforeAfter.jsx'

// Datos de los proyectos. Campos en null = PENDIENTE (preguntar a Joaquín; no inventar año, ubicación ni m²).
// Si `portada` es null, la tarjeta muestra la caja gris.

// Proyecto propio: diseño y dirección de obra de Joaquín.
const propios = [
  { nombre: 'Remodelación YM', tipo: 'Remodelación de vivienda', credito: 'Diseño y dirección de obra: Joaquín Andrade', portada: '/img/obras/remodelacion-ym.jpg', alt: 'Remodelación YM: sala de doble altura con cielo de madera y vigas, arcos y piso de madera', anio: null, ubicacion: null },
]

// Obras construidas por Arq. Buró con diseño de Diez + Muller; Joaquín es jefe de obra.
const creditoBuro = 'Diseño: Diez + Muller · Construcción: Arq. Buró'
const obras = [
  { nombre: 'Casa JC', tipo: 'Vivienda', portada: '/img/obras/casa-jc.jpg', alt: 'Casa JC: volumen superior de hormigón visto en voladizo sobre una base de piedra, con chimenea roja' },
  { nombre: 'Casa FR', tipo: 'Vivienda', portada: '/img/obras/casa-fr.jpg', alt: 'Casa FR en obra: muros de tierra apisonada y columnas de acero bajo la losa' },
  { nombre: 'Casa AJ', tipo: 'Vivienda', portada: '/img/obras/casa-aj.jpg', alt: 'Casa AJ: volumen de hormigón visto con jardinera y gradas entre árboles' },
  { nombre: 'Casa BR', tipo: 'Vivienda', portada: null },
  { nombre: 'Casa JV', tipo: 'Vivienda', portada: null },
  { nombre: 'Casa LT', tipo: 'Vivienda', portada: null },
  { nombre: 'Colegio Mine', tipo: 'Educativo · Sala multiusos', portada: null },
].map((o) => ({ anio: null, ubicacion: null, credito: creditoBuro, ...o }))

// Recorrido universitario (USFQ), de T4 a la tesis.
const academicos = [
  { nombre: 'Centro Cultural Comunitario “Equinoccio”', tipo: 'Taller 4 · USFQ · 2020', credito: 'Con Sofía Murillo', portada: null },
  { nombre: 'Facultad de Arquitectura', tipo: 'Taller 5 · USFQ · 2020', portada: null },
  { nombre: 'Biblioteca', tipo: 'Taller 6 · USFQ', portada: null },
  { nombre: 'Edificio Nexo', tipo: 'Taller 7 · USFQ', portada: null },
  { nombre: 'Galería-Talleres de Arte', tipo: 'Taller 8 · Casa Branca, Portugal · 2022', portada: null },
  { nombre: 'Mundaneum Beirut', tipo: 'Tesis de grado · USFQ', portada: null },
]
const contacto = {
  email: 'jsandrade10@gmail.com',
  telefono: '099 275 4846',
  telefonoIntl: '+593992754846',
}

function Placeholder({ label, className = '' }) {
  return <div className={`ph ${className}`}>{label}</div>
}

function Grid({ items }) {
  return (
    <div className="grid">
      {items.map(({ nombre, tipo, credito, portada, alt, anio, ubicacion }) => (
        <article key={nombre} className="card">
          {portada ? (
            <div className="card-img">
              <img src={portada} alt={alt} loading="lazy" width="1200" height="900" />
            </div>
          ) : (
            <Placeholder label="Foto" className="ph-card" />
          )}
          <h3>{nombre}</h3>
          <p className="muted">{[tipo, anio, ubicacion].filter(Boolean).join(' · ')}</p>
          {credito && <p className="muted credito">{credito}</p>}
        </article>
      ))}
    </div>
  )
}

export default function App() {
  return (
    <>
      <header className="header">
        <a href="#inicio" className="logo">Joaquín Andrade</a>
        <nav>
          <a href="#proyectos">Proyectos</a>
          <a href="#academico">Académico</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <main>
        <section id="inicio" className="hero">
          <BeforeAfter
            before={{ src: '/img/hero/casa-aj-obra.jpg', alt: 'Casa AJ durante la construcción, en obra gris' }}
            after={{ src: '/img/hero/casa-aj-final.jpg', alt: 'Casa AJ terminada: volúmenes de hormigón visto y muro de ladrillo' }}
            beforeLabel="En obra"
            afterLabel="Terminado"
          />
          <div className="hero-text">
            <h1>Joaquín Andrade</h1>
            <p>Arquitecto — frase de presentación</p>
          </div>
        </section>

        <section id="proyectos" className="section">
          <h2>Proyectos</h2>
          <h3 className="subhead">Proyecto propio</h3>
          <p className="muted intro">Diseñado y dirigido por mí, de principio a fin.</p>
          <Grid items={propios} />
          <h3 className="subhead">Jefe de obra en Arq. Buró</h3>
          <p className="muted intro">Viviendas diseñadas por Diez + Muller y construidas por Arq. Buró, donde dirijo la obra en sitio.</p>
          <Grid items={obras} />
        </section>

        <section id="academico" className="section">
          <h2>Académico</h2>
          <Grid items={academicos} />
        </section>

        <section id="sobre-mi" className="section split">
          <Placeholder label="Foto de perfil" className="ph-square" />
          <div>
            <h2>Sobre mí</h2>
            <p className="muted">Formación, trayectoria y dónde he trabajado.</p>
            <Placeholder label="Línea de tiempo" className="ph-line" />
          </div>
        </section>

        <section id="contacto" className="section">
          <h2>Contacto</h2>
          <ul className="contact">
            <li>
              <span className="muted">Email</span>
              <a href={`mailto:${contacto.email}`}>{contacto.email}</a>
            </li>
            <li>
              <span className="muted">Teléfono</span>
              <a href={`tel:${contacto.telefonoIntl}`}>{contacto.telefono}</a>
            </li>
            <li>
              <span className="muted">WhatsApp</span>
              <a href={`https://wa.me/${contacto.telefonoIntl.replace('+', '')}`} target="_blank" rel="noreferrer">
                Escríbeme por WhatsApp
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="footer muted">© {new Date().getFullYear()} Joaquín Andrade</footer>
    </>
  )
}
