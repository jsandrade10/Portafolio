// Página única. Las tarjetas con fotos abren el visor (Lightbox) con la galería del proyecto.
import { useState } from 'react'
import BeforeAfter from './BeforeAfter.jsx'
import Lightbox from './Lightbox.jsx'
import { propios, obras, academicos } from './proyectos.js'

const contacto = {
  email: 'jsandrade10@gmail.com',
  telefono: '099 275 4846',
  telefonoIntl: '+593992754846',
}

function Placeholder({ label, className = '' }) {
  return <div className={`ph ${className}`}>{label}</div>
}

function Grid({ items }) {
  const [abierto, setAbierto] = useState(null)
  return (
    <div className="grid">
      {items.map((p) => {
        const { nombre, tipo, credito, resumen, portada, alt, anio, ubicacion, fotos } = p
        const imagen = portada ? (
          <div className="card-img">
            <img src={portada} alt={alt} loading="lazy" width="1200" height="900" />
            {fotos?.length > 1 && <span className="card-n">{fotos.length} imágenes</span>}
          </div>
        ) : (
          <Placeholder label="Foto" className="ph-card" />
        )
        return (
          <article key={nombre} className="card">
            {fotos?.length ? (
              <button className="card-btn" onClick={() => setAbierto(p)} aria-label={`Ver fotos de ${nombre}`}>
                {imagen}
              </button>
            ) : (
              imagen
            )}
            <h3>{nombre}</h3>
            <p className="muted">{[tipo, ubicacion, anio].filter(Boolean).join(' · ')}</p>
            {credito && <p className="muted credito">{credito}</p>}
            {resumen && <p className="resumen">{resumen}</p>}
          </article>
        )
      })}
      {abierto && <Lightbox titulo={abierto.nombre} fotos={abierto.fotos} onClose={() => setAbierto(null)} />}
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
            left={{ src: '/img/hero/casa-aj-obra.jpg', alt: 'Casa AJ durante la construcción, en obra gris' }}
            right={{ src: '/img/hero/casa-aj-final.jpg', alt: 'Casa AJ terminada: volúmenes de hormigón visto y muro de ladrillo' }}
            leftLabel="En obra"
            rightLabel="Terminado"
          />
          <div className="hero-text">
            <h1>Joaquín Andrade</h1>
            <p>Arquitecto — frase de presentación</p>
          </div>
        </section>

        <section id="proyectos" className="section">
          <h2>Proyectos</h2>
          <h3 className="subhead">Proyecto propio</h3>
          <Grid items={propios} />
          <h3 className="subhead">Jefe de obra en Arq. Buró</h3>
          <p className="muted intro">Obras diseñadas por Diez + Muller y construidas por Arq. Buró, donde trabajo como jefe de obra.</p>
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
