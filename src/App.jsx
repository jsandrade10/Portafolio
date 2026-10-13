// Wireframe: cajas grises con la estructura del sitio. Sin contenido real todavía.

const obras = ['Casa AJ', 'Casa BR', 'Casa FR', 'Casa JC', 'Casa JV', 'Casa LT', 'Colegio Mine', 'Remodelación YM']
const academicos = ['S5 — Facultad de Arquitectura', 'S8 — Portugal']

function Placeholder({ label, className = '' }) {
  return <div className={`ph ${className}`}>{label}</div>
}

function Grid({ items }) {
  return (
    <div className="grid">
      {items.map((nombre) => (
        <article key={nombre} className="card">
          <Placeholder label="Foto" className="ph-card" />
          <h3>{nombre}</h3>
          <p className="muted">Tipo · Año · Ubicación</p>
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
          <Placeholder label="Imagen principal" className="ph-hero" />
          <div className="hero-text">
            <h1>Joaquín Andrade</h1>
            <p>Arquitecto — frase de presentación</p>
          </div>
        </section>

        <section id="proyectos" className="section">
          <h2>Obra construida</h2>
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
          <p className="muted">Email · WhatsApp · LinkedIn · CV</p>
        </section>
      </main>

      <footer className="footer muted">© {new Date().getFullYear()} Joaquín Andrade</footer>
    </>
  )
}
