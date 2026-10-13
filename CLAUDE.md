# CLAUDE.md — Portafolio de Arquitectura (Joaquín Andrade)

## Objetivo

Construir un **portafolio web de arquitectura** para Joaquín Andrade (formado en la USFQ, Quito). La página debe:

1. **Generar impacto visual**: las fotografías y las láminas son lo protagonista, el texto acompaña.
2. **Mostrar dónde ha trabajado y qué ha creado**: obra profesional construida + proyectos académicos.
3. **Ser fácil de navegar y estar muy bien explicada** para tres públicos: **clientes** (sin formación técnica), **constructores** y **arquitectos** que puedan contratarlo.

Idioma del sitio: español (dejar preparada la estructura para una versión en inglés más adelante).

## Estructura de la carpeta

```
/Volumes/JAR BK 1T/PORTFOLIO./   ← material original; ojo: la carpeta termina en punto
├── UNI/               ← proyectos universitarios (autoría propia)
│   ├── S4/  S6/  S7/  TESIS/   ← VACÍAS por ahora (pendiente de material)
│   ├── S5/            ← Taller 5, USFQ, 2020 — "Facultad de Arquitectura"
│   └── S8 PORTUGAL/   ← Proyecto Avanzado II, 2022 — "Aldea Jardín" / Galería-Talleres de Arte
│       ├── PROCESO/        (entregas intermedias)
│       └── ENTREGA FINAL/  (CUADERNO.pdf, laminas finales.pdf)
└── WORK/              ← obra profesional: una carpeta por proyecto
    ├── CASA AJ/  CASA BR/  CASA FR/  CASA JC/  CASA JV/  CASA LT/
    ├── COLEGIO MINE/
    └── REMODELACIÓN YM/
```

Los archivos `._*` y `.DS_Store` son basura de macOS: ignorarlos.

## Reglas importantes

- **Los `.dwg` de WORK NO son de autoría de Joaquín.** Solo sirven para *entender* el proyecto (programa, distribución, superficies, niveles). **Nunca** publicarlos, exportarlos ni redibujarlos tal cual en el sitio. Si se necesita un gráfico explicativo, hacer diagramas propios simplificados (esquemas de zonificación, recorridos, etc.) y confirmarlo antes con Joaquín.
- **No modificar, mover ni borrar los originales** en `UNI/` y `WORK/`. Todo material procesado (fotos convertidas, recortes, miniaturas) va dentro del proyecto del sitio en `~/Desktop/Portafolio`.
- `CASA JV/` contiene `CASA JV.bak`, `.dwl` y `.dwl2` (archivos de bloqueo/respaldo de AutoCAD): ignorarlos.
- **Créditos**: en S8 Portugal la fase de análisis urbano ("Aldea Jardín", entrega 1) es en coautoría con **Katherine Pazmiño**; la Galería-Talleres de Arte final aparece firmada solo por Joaquín. Mantener los créditos correctos.
- **Rol en cada obra profesional: DESCONOCIDO.** No inventar el rol (diseño, dirección de obra, residencia, interiorismo…), el estudio/empleador, la ubicación, el año ni los m². Preguntar a Joaquín y marcar como `PENDIENTE` hasta tenerlo.
- Los nombres de las obras son iniciales de clientes (AJ, BR, FR…). No intentar deducir ni publicar nombres de clientes.
- Hay fotos con personas, vehículos y placas: evitar o recortar las que muestren datos identificables.

## Inventario de proyectos

### Obra profesional (WORK)

Observaciones a partir de las fotos (a confirmar con Joaquín). Fechas en nombres de archivo: aprox. **2024–2025**.

| Proyecto | Fotos | Calidad de fotos | Lo que se observa |
|---|---|---|---|
| **CASA AJ** | 45 | 4 fotos profesionales `_A749…-HDR` + fotos de obra (2024-12 → 2025-02) | Vivienda de una planta, volúmenes de hormigón visto, muro de ladrillo gris con aparejo, cochera bajo losa en voladizo. Buen material de **proceso de obra**. |
| **CASA BR** | 6 | Solo celular (HEIF) | Interior luminoso, doble altura, cocina abierta, ventanales de piso a techo. Pocas fotos. |
| **CASA FR** | 16 | **Fotografía profesional** (`DSC…-HDR`, `_A74…-HDR`) | Gran vivienda con hormigón visto y muros de tapial/tierra apisonada; varias fotos en etapa de obra gris. Candidata a **proyecto destacado**. |
| **CASA JC** | 11 | 6 profesionales `_A749…-HDR` + fotos de obra (2024-10 → 2025-02) | Dos plantas: volumen superior de hormigón visto sobre base de piedra/laja, carpintería roja, chimenea. Candidata a **imagen de portada**. |
| **CASA JV** | 15 | Celular | Terraza cubierta con mueble de hormigón/chimenea, cielo raso de madera, vista a la montaña. |
| **CASA LT** | 15 | Celular + fotos WhatsApp (2024-01) | Volumen con revoque color terracota, celosía vertical, zócalo de piedra; etapa de obra. |
| **COLEGIO MINE** | 7 | Celular | **Sala multiusos** (el dwg se llama `SALA MULTIUSOS MINE.dwg`): pabellón poligonal con cubierta metálica, ventanales con marcos de madera, entre eucaliptos. Único proyecto no residencial. |
| **REMODELACIÓN YM** | 123 | Celular | Remodelación: interiores con cielo de madera y vigas, arcos, piso de madera. Mucho material → ideal para **antes / durante / después**. Requiere curaduría fuerte. |

### Proyectos universitarios (UNI) — Universidad San Francisco de Quito (USFQ)

- **S5 — Taller 5: "Facultad de Arquitectura"** (oct–dic 2020). Facultad en el centro histórico (calles Chile, Guayaquil, Juan José Flores, Mejía). Concepto: aprendizaje por investigación activa/pasiva; un espacio de **exposición** central articula talleres, biblioteca, auditorio y aulas. Archivos: análisis de programa, anteproyectos 2–4 y entrega final (corte longitudinal 1:200, malla estructural, axonometría estructural, implantación 1:500).
- **S8 — Proyecto Avanzado II, Portugal** (mar–jun 2022). Intervención en la aldea de **Casa Branca**.
  - *Aldea Jardín* (análisis urbano, con Katherine Pazmiño): revitalizar y unificar la aldea mediante los espacios verdes existentes; el edificio se subordina al jardín. Diagramas de tipos de verde, contracción/expansión, límite y recorrido, lleno/vacío.
  - *Galería-Talleres de Arte — "el muro como organizador"*: el muro existente se convierte en recorrido y genera filtros hacia patios; talleres en edificio restaurado. Láminas con maqueta blanca, planta, axonometría, cortes y fotos del sitio.
- **S4, S6, S7, TESIS**: carpetas vacías — material pendiente.

## Notas técnicas sobre los archivos

- **Formatos de imagen**: 124 HEIC + 43 HEIF (no se ven en navegadores) + 71 JPEG/JPG. Hay que convertir a **JPG/WebP** redimensionado (p. ej. 2400px para hero, 1600px para galería, 600px para miniaturas).
- Algunos PDF son muy pesados (`S5/ENTREGA FINAL.pdf` 113 MB, `S8/PROCESO/Entrega 2 L2.pdf` 267 MB): nunca enlazarlos directamente; exportar páginas/recortes como imágenes optimizadas.
- `.dwg` en formato AutoCAD 2018 (AC1032); no hay lector instalado. Para entender plantas, pedir a Joaquín exportes PDF/PNG o capturas.
- Las rutas tienen espacios, tildes (`REMODELACIÓN YM`) y la carpeta raíz termina en punto: siempre entrecomillar rutas. En el sitio, usar nombres de archivo en minúsculas sin espacios ni tildes (`casa-jc/01.jpg`).

## Entorno y herramientas

- **Dos ubicaciones**:
  - **Material original** (solo lectura): `/Volumes/JAR BK 1T/PORTFOLIO.` (disco externo). El disco está en **FAT32** (`msdos`): no admite symlinks ni apps de macOS. **No poner código, `node_modules` ni apps aquí.**
  - **Código del sitio**: `~/Desktop/Portafolio`, clon de https://github.com/jsandrade10/Portafolio (repo **público**). Las imágenes procesadas (fotos convertidas, recortes, miniaturas) van dentro de ese proyecto (p. ej. `public/img/`). Nunca subir al repo los originales de `UNI/`/`WORK/` (y menos los `.dwg`); solo las imágenes optimizadas y curadas que use el sitio.
- **Mac**: Intel (x86_64), macOS 12.6 Monterey. **Sin Command Line Tools de Xcode** (decisión de Joaquín: no instalar nada pesado), así que `/usr/bin/git` y `python3` no funcionan.
  - **git**: usar `~/.local/bin/git` (envoltorio del git que trae GitHub Desktop, instalado en `~/Applications/GitHub Desktop.app`). No está en el PATH: llamarlo con la ruta completa.
  - **Node.js v22 + npm v10** en `/usr/local/bin`. No usar paquetes que requieran compilación nativa (node-gyp), porque no hay compilador.
  - `sips` y `qlmanage` (nativos de macOS) para imágenes: no hay ImageMagick, `pdftoppm` ni Python.
    - convertir: `sips -s format jpeg -Z 1600 entrada.HEIC --out salida.jpg`
    - miniatura de la 1.ª página de un PDF: `qlmanage -t -s 2000 -o <dir> archivo.pdf`
    - Para extraer **todas** las páginas de los PDF de UNI hará falta otra herramienta (p. ej. un paquete npm sin compilación nativa) — preguntar a Joaquín antes de instalar.
- **Espacio**: el disco interno de la Mac anda casi lleno (~5 GB libres). Mantener el proyecto liviano y avisar antes de descargar cosas grandes.

## Dirección del sitio web

**Stack**: **React + Vite** (sitio estático, sin servidor). Fácil de alojar gratis (GitHub Pages, Netlify, Vercel).

**Estructura propuesta**:
1. **Inicio** — imagen a pantalla completa (CASA JC o CASA FR), nombre, "Arquitecto", una frase de presentación, acceso directo a Proyectos y Contacto.
2. **Proyectos** — grilla visual filtrable: *Obra construida* / *Académicos*, y por tipo (vivienda nueva, remodelación, educativo).
3. **Página de proyecto** — plantilla común:
   - Foto hero + ficha rápida (ubicación, año, tipo, superficie, **rol de Joaquín**, estado).
   - "En pocas palabras" (2–3 líneas para clientes).
   - Galería curada (8–15 fotos máx.), con lightbox.
   - Sección de **proceso** (obra gris → terminado) donde haya material (AJ, JC, FR, YM).
   - Para remodelaciones: comparador antes/después.
   - Bloque técnico breve para constructores/arquitectos (sistema constructivo, materiales: hormigón visto, ladrillo, piedra, tapial, madera…).
4. **Académico** — S5 y S8 con láminas, diagramas y maquetas; explicar el concepto en lenguaje simple.
5. **Sobre mí / Trayectoria** — formación (USFQ), intercambio/estudio en Portugal, dónde ha trabajado (línea de tiempo), habilidades y software.
6. **Contacto** — email, WhatsApp, LinkedIn/Instagram, CV descargable en PDF.

**Principios de diseño**:
- Estética sobria y arquitectónica: mucho blanco/espacio, tipografía limpia, paleta neutra que no compita con el hormigón, piedra y madera de las fotos.
- Imágenes grandes, carga diferida (`loading="lazy"`), formatos optimizados; el sitio debe ser rápido también en celular (los clientes lo verán desde WhatsApp).
- Navegación simple: máximo 5 elementos en el menú, siempre visible; cada proyecto a 1 clic desde la portada.
- Textos cortos y claros; evitar jerga en lo que lee el cliente, dejar el detalle técnico en un bloque aparte.
- Responsive y accesible (textos alternativos en todas las fotos).

## Información pendiente de Joaquín

Antes de redactar los textos finales, pedir para cada obra de WORK: **ubicación, año, rol, empleador/estudio, tipo de proyecto, m² aproximados, materiales/sistema constructivo** y si hay permiso del cliente/estudio para publicar. Además: material de S4, S6, S7 y TESIS; foto de perfil; CV; datos de contacto; y el nombre del estudio o la marca personal que quiere usar.
