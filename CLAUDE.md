# CLAUDE.md — Portafolio de Arquitectura (Joaquín Andrade)

## Objetivo

Construir un **portafolio web de arquitectura** para Joaquín Andrade (formado en la USFQ, Quito). La página debe:

1. **Generar impacto visual**: las fotografías y las láminas son lo protagonista, el texto acompaña.
2. **Mostrar dónde ha trabajado y qué ha creado**: obra profesional construida + proyectos académicos.
3. **Ser fácil de navegar y estar muy bien explicada** para tres públicos: **clientes** (sin formación técnica), **constructores** y **arquitectos** que puedan contratarlo.

Idioma del sitio: español (dejar preparada la estructura para una versión en inglés más adelante).

## Estructura de la carpeta

```
/Volumes/JAR BK 1T/PORTFOLIO./   ← material original (curado por Joaquín al 2026-11-08); la carpeta termina en punto
├── REMODELACIÓN YM/   ← PROYECTO PROPIO: 01–06.jpg (selección hecha con Claude) + 07.JPG
├── UNI/               ← recorrido universitario USFQ (PDF de láminas), un taller por semestre
│   ├── T4/CENTRO COMUNITARIO.pdf (214 MB)
│   ├── T5/FACULTAD DE ARQUITECTURA/   (análisis de programa, entregas 1–3, final)
│   ├── T6/BIBLIOTECA/                 (entregas 1–4, final)
│   ├── T7/EDIFICIO NEXO/              (entregas 1–7, final) + T7/PLAN MASA/
│   ├── T8 PORTUGAL/GALERÍA-TALLERES DE ARTE/ (CUADERNO, laminas finales) + PROCESO/
│   └── TESIS/MUNDANEUM BEIRUT/        (entregas 1–3, final, INFORME, MAQUETA, PORTAFOLIO) + TESIS/PLAN MASA/
└── WORK/              ← obras donde Joaquín es JEFE DE OBRA (diseño Diez + Muller, construcción Arq. Buró)
    ├── CASA AJ/  CASA BR/  CASA FR/  CASA JC/  CASA JV/  CASA LT/
    └── COLEGIO MINE/
```

Los archivos `._*` y `.DS_Store` son basura de macOS: ignorarlos.

## Flujo de trabajo con git (OBLIGATORIO)

- **Cada cambio que se haga en el código de la web se commitea y se sube (`push`) a `origin/main` inmediatamente, por Claude, sin pedir confirmación.** Joaquín lo autorizó de forma permanente.
- Commits pequeños, con mensaje claro en español que diga qué cambió.
- Usar `~/.local/bin/git` (ver "Entorno y herramientas").
- Esta copia del `CLAUDE.md` (en el repo) es la principal.
- Nunca subir originales de `UNI/`/`WORK/` ni `.dwg` (el repo es público).

## Reglas importantes

- **Los `.dwg` de WORK NO son de autoría de Joaquín.** Solo sirven para *entender* el proyecto (programa, distribución, superficies, niveles). **Nunca** publicarlos, exportarlos ni redibujarlos tal cual en el sitio. Si se necesita un gráfico explicativo, hacer diagramas propios simplificados (esquemas de zonificación, recorridos, etc.) y confirmarlo antes con Joaquín.
- **No modificar, mover ni borrar los originales** en `UNI/`, `WORK/` y `REMODELACIÓN YM/` (solo crear carpetas con copias si Joaquín lo pide). Todo material procesado (fotos convertidas, recortes, miniaturas) va dentro del proyecto del sitio en `~/Desktop/Portafolio`.
- `CASA JV/` contiene `CASA JV.bak`, `.dwl` y `.dwl2` (archivos de bloqueo/respaldo de AutoCAD): ignorarlos.
- **Créditos** (histórico): en T8 Portugal la fase de análisis urbano ("Aldea Jardín", entrega 1) es en coautoría con **Katherine Pazmiño**; la Galería-Talleres de Arte final aparece firmada solo por Joaquín. Mantener los créditos correctos.
- **Roles y créditos (confirmados por Joaquín, 2026-11-08)** — respetarlos siempre en el sitio:
  - **Remodelación YM**: su **primer proyecto como arquitecto, diseñado y dirigido enteramente por él** (proyecto propio). Es la pieza de autoría profesional del portafolio.
  - **WORK (todas las casas + Colegio Mine)**: **diseño de Diez + Muller** (firma de arquitectura muy reconocida en Ecuador), **construcción de Arq. Buró**, empresa donde Joaquín trabaja como **jefe de obra / residente de obra**. **No son diseños de Joaquín ni es el constructor**: nunca presentarlas como diseño propio. Siempre acreditar a Diez + Muller como autores del diseño.
  - **UNI**: proyectos académicos propios en la USFQ. T4 (Centro Comunitario) es en coautoría con **Sofía Murillo** (aparece en la lámina).
  - **Título de Joaquín en WORK: "Jefe de obra"** (confirmado). **Permiso para publicar todas las fotos de las carpetas: confirmado** por Joaquín (2026-11-08).
  - **Años**: T4 y T5 2020 · T6 y T7 2021 · T8 Portugal y Tesis 2022 (tesis entregada el 14/12/2022, Taller IX, tutor Jaime López Andrade, PhD; nombre completo en la tesis: Joaquín Sebastián Andrade Soria). **YM: Quito, 2025.**
  - T8: las entregas de PROCESO (entrega 1 "Aldea Jardín" y entrega 2 L1–L3) son con **Katherine Pazmiño**; las láminas finales de la Galería-Talleres, solo Joaquín.
  - Siguen PENDIENTES (no inventar): año, ubicación y m² de cada obra de WORK; crédito del fotógrafo de las fotos profesionales.
- Los nombres de las obras son iniciales de clientes (AJ, BR, FR…). No intentar deducir ni publicar nombres de clientes.
- Hay fotos con personas, vehículos y placas: evitar o recortar las que muestren datos identificables.

## Inventario de proyectos

### Obra como jefe de obra (WORK) — diseño Diez + Muller, construcción Arq. Buró

Observaciones a partir de las fotos. Joaquín depuró las carpetas el 2026-11-08: ahora hay menos fotos por obra (AJ 8, BR 4, FR 6, JC 8, JV 5, LT 5, Mine 5); la columna "Fotos" es del inventario anterior. Fechas en nombres de archivo: aprox. **2024–2025**.

| Proyecto | Fotos | Calidad de fotos | Lo que se observa |
|---|---|---|---|
| **CASA AJ** | 47 | 4 fotos profesionales `_A749…-HDR` + fotos de obra (2024-12 → 2025-02) + `ajviejo.HEIF`/`ajnuevo.JPEG` (par antes/después, usado en el hero) | Vivienda de una planta, volúmenes de hormigón visto, muro de ladrillo gris con aparejo, cochera bajo losa en voladizo. Buen material de **proceso de obra**. |
| **CASA BR** | 6 | Solo celular (HEIF) | Interior luminoso, doble altura, cocina abierta, ventanales de piso a techo. Pocas fotos. |
| **CASA FR** | 16 | **Fotografía profesional** (`DSC…-HDR`, `_A74…-HDR`) | Gran vivienda con hormigón visto y muros de tapial/tierra apisonada; varias fotos en etapa de obra gris. Candidata a **proyecto destacado**. |
| **CASA JC** | 11 | 6 profesionales `_A749…-HDR` + fotos de obra (2024-10 → 2025-02) | Dos plantas: volumen superior de hormigón visto sobre base de piedra/laja, carpintería roja, chimenea. Candidata a **imagen de portada**. |
| **CASA JV** | 15 | Celular | Terraza cubierta con mueble de hormigón/chimenea, cielo raso de madera, vista a la montaña. |
| **CASA LT** | 15 | Celular + fotos WhatsApp (2024-01) | Volumen con revoque color terracota, celosía vertical, zócalo de piedra; etapa de obra. |
| **COLEGIO MINE** | 7 | Celular | **Sala multiusos** (el dwg se llama `SALA MULTIUSOS MINE.dwg`): pabellón poligonal con cubierta metálica, ventanales con marcos de madera, entre eucaliptos. Único proyecto no residencial. |

### Proyecto propio — REMODELACIÓN YM

Remodelación de vivienda: interiores con cielo de madera y vigas, arcos nuevos, piso de madera, jardín interior; fachada de ladrillo con puerta de arco. Fotos (celular / WhatsApp):
- `01.jpg` sala doble altura (960×1280, baja resolución → pedir original) · `02.jpg` fachada de ladrillo al anochecer · `03.jpg` arco y puerta · `04.jpg` jardín interior · `05.jpg` proceso: apertura de muros · `06.jpg` proceso: nueva viga y vano · `07.JPG` arco con puerta tallada (1200×1600).
- Portada web: `public/img/obras/remodelacion-ym.jpg` (recorte 4:3 de 01).

### Proyectos universitarios (UNI) — Universidad San Francisco de Quito (USFQ)

- **T4 — Centro Cultural Comunitario "Equinoccio"** (Taller de Arquitectura II, lámina del 04/05/2020, con **Sofía Murillo**): dos volúmenes interconectados, luz cenital, separación de programa servidor/servido.
- **T6 — Biblioteca** (Taller VI): concepto "Dualidad" (público/privado), en la esquina Juan de Azcaray y Av. 10 de Agosto (Quito); muros portantes + columnas de hormigón, luces de 6 m.
- **T7 — Edificio Nexo** (Taller 7, 8 entregas) + **Plan Masa** (láminas del 04 oct).
- **TESIS — Mundaneum Beirut** (USFQ): láminas, informe, fotos de maqueta y un PORTAFOLIO.pdf propio; + Plan Masa. Es el proyecto con el que obtuvo el título.
- **T5 — Taller 5: "Facultad de Arquitectura"** (oct–dic 2020). Facultad en el centro histórico (calles Chile, Guayaquil, Juan José Flores, Mejía). Concepto: aprendizaje por investigación activa/pasiva; un espacio de **exposición** central articula talleres, biblioteca, auditorio y aulas. Archivos: análisis de programa, anteproyectos 2–4 y entrega final (corte longitudinal 1:200, malla estructural, axonometría estructural, implantación 1:500).
- **T8 — Proyecto Avanzado II, Portugal** (mar–jun 2022). Intervención en la aldea de **Casa Branca**.
  - *Aldea Jardín* (análisis urbano, con Katherine Pazmiño): revitalizar y unificar la aldea mediante los espacios verdes existentes; el edificio se subordina al jardín. Diagramas de tipos de verde, contracción/expansión, límite y recorrido, lleno/vacío.
  - *Galería-Talleres de Arte — "el muro como organizador"*: el muro existente se convierte en recorrido y genera filtros hacia patios; talleres en edificio restaurado. Láminas con maqueta blanca, planta, axonometría, cortes y fotos del sitio.

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
  - **git**: usar `~/.local/bin/git` (envoltorio del git que trae GitHub Desktop, instalado en `~/Applications/GitHub Desktop.app`). No está en el PATH: llamarlo con la ruta completa. Credenciales: Git Credential Manager (`~/.local/bin/git-credential-manager`, llavero de macOS), ya autorizado para jsandrade10.
  - **Node.js v22 + npm v10** en `/usr/local/bin`. No usar paquetes que requieran compilación nativa (node-gyp), porque no hay compilador.
  - `sips` y `qlmanage` (nativos de macOS) para imágenes: no hay ImageMagick, `pdftoppm` ni Python.
    - convertir: `sips -s format jpeg -Z 1600 entrada.HEIC --out salida.jpg`
    - miniatura de la 1.ª página de un PDF: `qlmanage -t -s 2000 -o <dir> archivo.pdf`
    - **PDF → mupdf** (npm, WASM, instalado con permiso de Joaquín en `~/Desktop/pdf-tools/`, FUERA del repo):
      - `node inventario.mjs <pdf> <dir> [px]`: texto de todas las páginas (texto.txt), vista previa de cada página y tamaños.
      - `node render.mjs trabajos.json`: renderiza páginas o recortes (`recorte: [x0,y0,x1,y1]` en fracciones de página) a JPG.
      - PDFs grandes: usar `node --max-old-space-size=4096`.
    - **Orientación EXIF**: `sips` convierte HEIC dejando los píxeles acostados con la etiqueta Orientation=6. Antes de recortar, correr `node ~/Desktop/pdf-tools/normaliza.cjs <jpgs>` (gira píxeles y deja la etiqueta en 1). `sips -g pixelWidth` NO es fiable para esto; usar `node ~/Desktop/pdf-tools/dims.cjs <jpg>`.
    - Hojas de contacto: HTML con grilla de miniaturas + `qlmanage -t -s 1800 -o <dir> hoja.html`. Ojo: rutas con tildes no cargan, y qlmanage puede devolver una versión en caché.
- **Espacio**: el disco interno de la Mac tiene poco espacio (~5 GB libres al 2026-10-12). Mantener el proyecto liviano y avisar antes de descargar cosas grandes.

## Dirección del sitio web

**Stack**: **React + Vite** (sitio estático, sin servidor), desplegado en **Vercel** desde `main` (cada push despliega). Vercel detecta Vite solo: build `npm run build`, salida `dist/`.

**Comandos** (en `~/Desktop/Portafolio`):
- `npm run dev` — servidor local en http://localhost:5173
- `npm run build` — build de producción; correrlo antes de cada push para no romper el deploy.

**Estado actual** (una sola página, sin router; sitio en vivo en Vercel):

| Archivo | Qué hay |
|---|---|
| `index.html` | `lang="es"`, título "Joaquín Andrade — Arquitectura". |
| `src/App.jsx` | Página única con anclas: header fijo (Proyectos, Académico, Sobre mí, Contacto) → hero → Proyectos ("Proyecto propio" + "Jefe de obra en Arq. Buró") → Académico → Sobre mí → Contacto → footer. `Grid` pinta tarjetas; si el proyecto tiene `fotos`, la tarjeta es un botón que abre el `Lightbox`. |
| `src/proyectos.js` | **Todos los datos**: `propios`, `obras`, `academicos` (nombre, tipo, año, ubicación, crédito, resumen, portada, alt, fotos). `galeria(slug, alts)` arma la lista de fotos: un texto alternativo por foto, en orden. |
| `src/Lightbox.jsx` | Visor a pantalla completa: flechas, teclado (← → Esc), deslizar en celular, tira de miniaturas, pie de foto = alt, precarga de vecinas, bloqueo de scroll. |
| `src/BeforeAfter.jsx` | Comparador antes/después: la barra sigue al mouse sin clic; en táctil se arrastra; flechas del teclado ±5 %. Izquierda de la barra = `after` (terminado), derecha = `before` (en obra). Usa `clip-path` sobre la imagen `after`. |
| `src/index.css` | Estilos globales con variables en `:root` (`--bg`, `--fg`, `--muted`, `--ph`, `--gutter`) + clases `.ba-*` del comparador y `.contact`. |
| `public/img/hero/` | `casa-aj-obra.jpg` y `casa-aj-final.jpg`, 2100×1400, calidad ~75. |
| `public/img/obras/`, `public/img/academico/` | Portadas de tarjeta 1200×900 (4:3). |
| `public/img/<slug>/` | Galería de cada proyecto: `NN.jpg` (fotos 1600 px; láminas 2000 px) + `NN-t.jpg` (miniatura 400 px). Orden: terminado primero, proceso al final. ~40 MB en total. |

- **Hero (hecho)**: comparador de **Casa AJ** — `WORK/CASA AJ/ajviejo.HEIF` (en obra) vs `ajnuevo.JPEG` (terminada). La foto de obra se recortó a 3:2 para alinearla con la final; la altura coincide, pero queda ~10 % de desfase horizontal porque no se tomaron desde el mismo punto. Si Joaquín consigue una foto de obra con el mismo encuadre, reemplazarla. Etiquetas: "Terminado" (izq.) / "En obra" (der.). El texto de nombre + frase va debajo de la imagen.
- **Contacto (hecho)**: email `jsandrade10@gmail.com` (`mailto:`), teléfono `099 275 4846` (`tel:+593992754846`) y enlace a WhatsApp (`https://wa.me/593992754846`). Faltan LinkedIn/Instagram y CV.
- **Proyectos (hecho)**: los 14 proyectos tienen portada y galería. Casa FR: todas sus fotos son de obra gris. Campos `null` = PENDIENTE y no se muestran.
- **Pendiente**: Sobre mí (foto de perfil, línea de tiempo), frase de presentación del hero.

**Cómo preparar imágenes** (lo que funcionó): convertir con `sips` a JPG, redimensionar (`-z alto ancho` o `-Z lado_mayor`), calidad con `-s formatOptions 75`; recortar con `-c alto ancho --cropOffset y x`. Para comparadores antes/después, las dos fotos deben quedar con **la misma proporción y tamaño**. Revisar visualmente el resultado antes de subir. Nombres en minúsculas con guiones.

**Estructura propuesta**:
1. **Inicio** — comparador antes/después a pantalla completa (hecho, Casa AJ), nombre, "Arquitecto", una frase de presentación, acceso directo a Proyectos y Contacto.
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

Antes de redactar los textos finales, pedir para cada obra de WORK: **ubicación, año, rol, empleador/estudio, tipo de proyecto, m² aproximados, materiales/sistema constructivo** y si hay permiso del cliente/estudio para publicar. Además: material de S4, S6, S7 y TESIS; foto de perfil; CV en PDF; enlaces de LinkedIn/Instagram; frase de presentación; y el nombre del estudio o la marca personal que quiere usar. (Email y teléfono ya están.)

## Bitácora

**2026-10-12 — primera sesión**
- Se revisó el material original (UNI y WORK) y se creó este `CLAUDE.md`.
- Entorno: el disco interno estaba lleno (23 MB libres) y Joaquín liberó espacio. Se decidió **no instalar** las Command Line Tools de Xcode (muy pesadas). Se instaló Node.js 22 (`.pkg`) y GitHub Desktop en `~/Applications` (macOS no dejó instalar en `/Applications` desde la terminal). Se usa el git de GitHub Desktop vía `~/.local/bin/git`, con Git Credential Manager ya autorizado.
- El disco externo es FAT32 → el código se movió a `~/Desktop/Portafolio` (la carpeta `WEB/` del disco externo se borró). El zip de GitHub Desktop quedó en `/Volumes/JAR BK 1T/HERRAMIENTAS/`.
- Repo clonado, proyecto React + Vite creado, **Vercel conectado y desplegando** desde `main`.
- Se agregaron los datos de contacto y el hero con comparador antes/después de Casa AJ.
- **Próximo paso sugerido**: llenar las tarjetas de proyectos con fotos reales (empezar por Casa JC, Casa FR y Casa AJ, que tienen fotografía profesional) y pedir a Joaquín los datos pendientes de cada obra.

**2026-11-08 — segunda sesión**
- Portadas reales (4:3) en las tarjetas de Casa JC, Casa FR y Casa AJ; datos de obra quedan en `null` hasta que Joaquín los confirme.
- Espacio libre en la Mac: ~2,6 GB.
- Joaquín reorganizó el disco: `REMODELACIÓN YM/` está ahora en la raíz y `UNI/` usa T4–T8 + TESIS con subcarpetas por proyecto (revisar su contenido en otra sesión).
- **Remodelación YM — `selección/`** (4 terminado + 2 proceso; el resultado final manda, el proceso acompaña):
  - `01-terminado-sala-doble-altura.jpg` ← `f6d6be57…JPG` (960×1280; `4a7b11b7…` es duplicado). Candidata a portada.
  - `02-terminado-fachada-ladrillo.jpg` ← `eab7b77d…JPG` (fachada de ladrillo al anochecer, puerta de arco).
  - `03-terminado-arco-y-puerta.jpg` ← `IMG_8935.HEIC`; `04-terminado-jardin-interior.jpg` ← `IMG_8937.HEIC`.
  - `05-proceso-apertura-de-muros.jpg` ← `IMG_5828.HEIC`; `06-proceso-nueva-viga-y-vano.jpg` ← `IMG_5910.HEIC`.
  - Pares antes/después posibles: `d953867b`/`IMG_6180` (arco en obra) → `5114f3ae`/`IMG_8935`; `IMG_5910` → `IMG_8762` (vano terminado, de noche). Evitar `774dd02f` y `8bb3246b` (crucifijo, objeto personal) y fotos con obreros identificables.
- **2026-11-08 (cont.)** — Joaquín curó todo el material y aclaró roles: YM = proyecto propio; WORK = jefe de obra en Arq. Buró, diseño de Diez + Muller; UNI = T4–T8 + Tesis (Mundaneum Beirut). La web ahora separa "Proyecto propio" y "Jefe de obra en Arq. Buró" con créditos en cada tarjeta, y Académico lista T4 → Tesis.
- **Siguiente paso**: extraer láminas de los PDF (hace falta una herramienta; propuesta: paquete npm `mupdf`, WASM sin compilación, instalado fuera del repo) para las portadas académicas; luego páginas de proyecto.
- **2026-11-08 (cont. 2)** — Joaquín confirmó "Jefe de obra", permiso para todas las fotos, años de T6/T7 (2021) y Tesis (2022), YM = Quito 2025. Se instaló mupdf en `~/Desktop/pdf-tools`, se extrajeron texto y vistas de los 34 PDF (182 págs.), y se armaron galerías con visor para los 14 proyectos (8 obras + 6 académicos), con resúmenes de concepto sacados de las láminas. Portada de YM cambiada a `03.jpg` (arco y vano de doble altura).
- **Siguiente paso sugerido**: revisar el sitio en el navegador (celular y escritorio); textos "En pocas palabras" por obra; Sobre mí (foto, línea de tiempo: USFQ (año de ingreso PENDIENTE)–2022, Portugal 2022, Arq. Buró); frase del hero; páginas de proyecto individuales si hacen falta.
