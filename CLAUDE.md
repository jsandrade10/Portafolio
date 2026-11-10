# CLAUDE.md — Portafolio de Arquitectura (Joaquín Andrade)

> **Para retomar**: leer "Estado actual", "Preferencias de Joaquín" y "Pendiente / siguiente paso". Esta copia (en el repo `~/Desktop/Portafolio`) es la principal; al terminar cada sesión copiarla también a `/Volumes/JAR BK 1T/PORTFOLIO./CLAUDE.md`.

## Objetivo

Portafolio web de arquitectura de **Joaquín Andrade** (arquitecto, USFQ, Quito). Debe:
1. **Generar impacto visual**: fotos y láminas protagonistas, el texto acompaña.
2. **Mostrar qué ha creado y dónde ha trabajado**: proyecto propio, obras como jefe de obra y recorrido universitario.
3. **Ser fácil de navegar y bien explicado** para **clientes** (sin formación técnica), **constructores** y **arquitectos**.

Idioma: español (estructura preparada para una versión en inglés más adelante).

Sitio en vivo: Vercel, desplegado automáticamente desde `main` de https://github.com/jsandrade10/Portafolio (repo **público**).

## Roles y créditos (confirmados por Joaquín, 2026-11-08) — respetarlos SIEMPRE

| Grupo | Qué es | Cómo se acredita en el sitio |
|---|---|---|
| **Remodelación YM** (Quito, 2025) | Su **primer proyecto como arquitecto**, diseñado y dirigido enteramente por él. | "Diseño y dirección de obra: Joaquín Andrade". Sección "Proyecto propio". |
| **WORK**: Casas AJ, BR, FR, JC, JV, LT + Colegio Mine | **Diseño de Diez + Muller** (firma muy reconocida en Ecuador), **construcción de Arq. Buró**, donde Joaquín trabaja como **jefe de obra**. NO son diseños suyos ni es el constructor. | "Diseño: Diez + Muller · Construcción: Arq. Buró". Sección "Jefe de obra en Arq. Buró". Título confirmado: **"Jefe de obra"**. |
| **UNI** (USFQ) | Proyectos académicos propios, T4 → Tesis. | T4: "Con Sofía Murillo" (firma la lámina). Tesis: "Tutor: Jaime López Andrade, PhD". |

- **Permiso para publicar todas las fotos de las carpetas: confirmado** por Joaquín.
- **Años**: T4 y T5 2020 · T6 y T7 2021 · T8 (Portugal) y Tesis 2022. Tesis entregada el 14/12/2022, Taller IX. Nombre completo en la tesis: Joaquín Sebastián Andrade Soria.
- T8: las entregas de **proceso** (Aldea Jardín y entrega 2) son con **Katherine Pazmiño**; la lámina final de la Galería-Talleres es solo de Joaquín. Como en el sitio solo se muestra la final, T8 no lleva crédito de coautoría. Si algún día se muestra el proceso, acreditarla.
- **No inventar** año, ubicación ni m² de las obras de WORK (siguen PENDIENTES), ni el crédito del fotógrafo de las fotos profesionales (`_A74…-HDR`, `DSC…-HDR`).
- Los nombres de las obras son iniciales de clientes: no deducir ni publicar nombres.

## Preferencias de Joaquín (aprendidas en las sesiones)

- **Académico: solo entregas FINALES.** Nada de análisis, anteproyectos, entregas intermedias ni maquetas de estudio. Se pueden usar recortes de las láminas finales para mostrar detalles.
- **En obras: lo más llamativo es el resultado terminado**; el proceso acompaña al final de cada galería.
- **Inicio**: comparador con **En obra a la izquierda y Terminado a la derecha**; las dos fotos deben verse como **la misma imagen** (mismo ángulo y perspectiva). **No hacer zoom de más**: debe verse la casa completa.
- Revisar **también en computadora**, no solo en celular (los problemas de la sesión 3 eran solo de escritorio).
- Corregir libremente textos mal escritos o mal redactados (los míos y los sacados de láminas).
- No usar frases autorreferenciales tipo "Diseñado y dirigido por mí, de principio a fin" (la pidió quitar).
- No instalar nada pesado en la Mac (sin Xcode CLT). Paquetes npm chicos sí, previa consulta, y fuera del repo.

## Flujo de trabajo con git (OBLIGATORIO)

- **Cada cambio en el código de la web se commitea y se sube (`push`) a `origin/main` inmediatamente, por Claude, sin pedir confirmación** (autorizado de forma permanente).
- Commits pequeños, mensaje claro en español. Usar `~/.local/bin/git` (ruta completa).
- Antes de cada push: `npm run build` (y borrar `dist/` después para ahorrar espacio; está en `.gitignore`).
- Nunca subir originales de `UNI/`, `WORK/`, `REMODELACIÓN YM/` ni `.dwg`: solo imágenes optimizadas.

## Material original (solo lectura)

```
/Volumes/JAR BK 1T/PORTFOLIO./   ← disco externo FAT32; la carpeta termina en punto (entrecomillar rutas)
├── REMODELACIÓN YM/   01.jpg … 06.jpg (selección hecha con Claude) + 07.JPG
├── UNI/
│   ├── T4/CENTRO COMUNITARIO.pdf                       (9 págs., láminas finales, con Sofía Murillo)
│   ├── T5/FACULTAD DE ARQUITECTURA/ENTREGA FINAL.pdf   (+ análisis y entregas 1–3: no usar)
│   ├── T6/BIBLIOTECA/ENTREGA FINAL.pdf                 (+ entregas 1–4: no usar)
│   ├── T7/EDIFICIO NEXO/ENTREGA FINAL.pdf              (+ entregas 1–7 y anteproyecto: no usar) · T7/PLAN MASA/ (no usado)
│   ├── T8 PORTUGAL/GALERÍA-TALLERES DE ARTE/laminas finales.pdf (= CUADERNO.pdf) · PROCESO/ (no usar)
│   └── TESIS/MUNDANEUM BEIRUT/  ENTREGA FINAL.pdf, PORTAFOLIO.pdf (30 págs.), MAQUETA.pdf, INFORME.pdf (32 págs.)
│                                 (+ entregas 1–3: no usar) · TESIS/PLAN MASA/ (no usado)
└── WORK/  CASA AJ/ CASA BR/ CASA FR/ CASA JC/ CASA JV/ CASA LT/ COLEGIO MINE/   (fotos + 1 .dwg por obra)
```

- **Los `.dwg` NO son de Joaquín**: solo para entender el proyecto; nunca publicarlos, exportarlos ni redibujarlos. Diagramas propios solo con su confirmación. Ignorar `CASA JV.dwl/.dwl2` y los `._*` / `.DS_Store`.
- **No modificar, mover ni borrar originales** (solo crear carpetas con copias si Joaquín lo pide).
- PDFs muy pesados (hasta 370 MB): nunca enlazarlos; exportar páginas/recortes optimizados.

## Estado actual del sitio (2026-11-08)

**Stack**: React + Vite, sitio estático con rutas por hash (sin dependencias), Vercel.

**Diseño (2026-11-09, pedido de Joaquín: "tal cual" https://mk27.com/)**: fondo negro, Roboto Light 12,5 px con espaciado, menú en mayúsculas a la derecha (PROYECTO PROPIO · JEFE DE OBRA · ACADÉMICO · SOBRE MÍ · CONTACTO), nombre a la izquierda (no se copia el logo, textos ni fotos de MK27). Inicio = franjas a todo el ancho en blanco y negro (color y nombre al pasar el mouse; en celular, nombre siempre visible). Categoría = grilla de 3 columnas (1,6:1, 3 px de separación), B/N con color al pasar. Proyecto = galería grande con miniaturas (clic → visor a pantalla completa), ficha "campo > valor" a la derecha, texto debajo y navegación anterior/siguiente. El comparador obra/terminado está ahora en la página de Casa AJ (y una franja del inicio lleva ahí). Rutas: `#/`, `#/proyecto-propio`, `#/jefe-de-obra`, `#/academico`, `#/p/<slug>`, `#/sobre-mi`, `#/contacto`. Capturas: `node ~/Desktop/pdf-tools/capturas2.mjs http://localhost:4173/ <dir>`. Comandos en `~/Desktop/Portafolio`: `npm run dev` (http://localhost:5173), `npm run build`.

| Archivo | Qué hay |
|---|---|
| `index.html` | `lang="es"`, título "Joaquín Andrade — Arquitectura". |
| `src/App.jsx` | Header fijo (Proyectos, Académico, Sobre mí, Contacto) → Inicio (comparador + nombre + frase) → Proyectos ("Proyecto propio" + "Jefe de obra en Arq. Buró" con intro "Obras diseñadas por Diez + Muller y construidas por Arq. Buró, donde trabajo como jefe de obra.") → Académico → Sobre mí (cajas grises) → Contacto → footer. `Grid` pinta tarjetas; si el proyecto tiene `fotos`, la tarjeta es un botón (con etiqueta "N imágenes") que abre el `Lightbox`. Muestra `tipo · ubicación · año`, `credito` y `resumen`. |
| `src/proyectos.js` | **Todos los datos**: `propios`, `obras`, `academicos` (nombre, tipo, anio, ubicacion, credito, resumen, portada, alt, fotos). `galeria(slug, alts)` arma las fotos: un texto (alt y pie de foto) por imagen, en el mismo orden que los archivos `NN.jpg`. **Si se agrega o quita una imagen, renumerar archivos y ajustar la lista de textos.** |
| `src/Lightbox.jsx` | Visor a pantalla completa: flechas, teclado (← → Esc), deslizar en celular, tira de miniaturas, pie de foto, precarga de vecinas, bloqueo de scroll. La imagen va `position:absolute; inset:0; object-fit:contain` (no usar `max-height:%`, en escritorio se salía de la pantalla). |
| `src/BeforeAfter.jsx` | Comparador: la barra sigue al mouse sin clic; en táctil se arrastra; flechas ±5 %. Props `left`/`right`, `leftLabel`/`rightLabel` (`clip-path` sobre `left`). |
| `src/index.css` | Variables en `:root` (`--bg`, `--fg`, `--muted`, `--ph`, `--gutter`). Comparador: en celular alto `min(80vh, 66.67vw)`, mín. 360 px; **en ≥700 px mantiene 3:2 sin recortar y cabe en pantalla** (`width: min(100%, (100vh − 72px) × 1.5)`, centrado). |
| `public/img/hero/` | `casa-aj-obra.jpg` (alineada) y `casa-aj-final.jpg`, 2100×1400. |
| `public/img/obras/`, `public/img/academico/` | Portadas de tarjeta 1200×900 (4:3). |
| `public/img/<slug>/` | Galerías: `NN.jpg` (fotos 1600 px; láminas 2000 px) + `NN-t.jpg` (miniatura 400 px). ~40 MB en total. |

### Contenido de cada galería (fuente → archivo)

**Proyecto propio**
- `remodelacion-ym` (7): `03, 01, 02, 04, 07, 05, 06` de `REMODELACIÓN YM/` → 01…07 (05–06 son proceso). Portada = recorte 4:3 de `03.jpg` (arco y vano de doble altura, puerta tallada). `01.jpg` original es de baja resolución (960×1280): pedir el original.

**Jefe de obra (WORK)** — orden: terminado primero, obra al final
- `casa-jc` (8): `_A749249, _A749199, _A749299, _A749373, _A749443` + obra `IMG-20241029-WA0047, IMG_20241202_172719, IMG_20250212_171055`. Portada `_A749249` (voladizo de hormigón, losa reticulada, chimenea roja).
- `casa-fr` (6): `DSC00308, DSC00628, DSC00423, DSC03304, DSC03392, _A741470` — **todas en obra gris** (muros de tierra apisonada, acero). Portada `DSC00628`.
- `casa-aj` (8): `_A749544, ajnuevo, IMG_6158, IMG_7837, IMG_7836` + obra `ajviejo, IMG_3045, IMG_20241212_113615`. Portada `_A749544`.
- `casa-br` (4): `IMG_9515, 9519, 9521, 9520` (fachada blanca con volumen de piedra oscura, escalera de madera, cocina, sala).
- `casa-jv` (5): `IMG_1856, 1857, 2027, 8050, 8051` (volúmenes de revoque ocre, ventanales, luz cenital).
- `casa-lt` (5): `IMG_4090, PHOTO-…-44, PHOTO-…-44 2, PHOTO-…-44 3, IMG_4291` (volúmenes terracota, celosía vertical, piedra). Portada recorte de `IMG_4090`.
- `colegio-mine` (5): `IMG_4040, 4054, 4592, 4156` + obra `IMG_0822` (sala multiusos: pabellón poligonal, cubierta metálica, eucaliptos).

**Académico — solo entregas finales** (página del PDF → número de imagen)
- `centro-comunitario` (6): T4 `CENTRO COMUNITARIO.pdf` págs. 9, 1, 2, 5, 6, 7. Portada: axonometría (pág. 9, recorte `[.02,.03,.52,.52]`).
- `facultad-arquitectura` (5): T5 `ENTREGA FINAL.pdf` págs. 5, 1, 2, 3, 4. Portada: vista 3D con la torre (pág. 5, `[.056,.635,.434,.835]`).
- `biblioteca` (8): T6 `ENTREGA FINAL.pdf` págs. 7, 1, 2, 3, 4, 6, 5, 8. Portada: quiebrasoles de madera (pág. 7, `[.38,.70,.852,.95]`).
- `edificio-nexo` (6): T7 `ENTREGA FINAL.pdf` págs. 6, 1, 2, 3, 4, 5. Portada: vista desde la calle José Correa (pág. 6, `[.05,.045,.95,.40]`).
- `galeria-talleres` (7): recortes de T8 `laminas finales.pdf` pág. 1 — maqueta `[.025,.05,.475,.75]`, planta `[.52,.05,.885,.59]`, axonometría y cortes `[.52,.62,.885,.95]`, fotos de maqueta `[.884,.41,.98,.955]`, fotos del sitio `[.884,.04,.98,.41]`, mitad izquierda `[0,0,.5,1]`, mitad derecha `[.5,0,1,1]`. Portada: maqueta blanca `[.02,.17,.48,.68]`.
- `mundaneum-beirut` (14): `PORTAFOLIO.pdf` págs. 1, 21, 17, 29, 30, 7, 20, 23, 27, 28 + `ENTREGA FINAL.pdf` 1, 2 + `MAQUETA.pdf` 1, 2. Portada: maqueta final (PORTAFOLIO pág. 29, `[.17,.17,.87,.912]`). Se quitaron las págs. 14 y 15 (maquetas de proceso).

Los resúmenes de cada proyecto académico se escribieron a partir del texto de las propias láminas (concepto, ubicación, estructura), en lenguaje simple.

### Comparador del inicio (Casa AJ)

- Fuentes: `WORK/CASA AJ/ajviejo.HEIF` (en obra) y `ajnuevo.JPEG` (terminada), tomadas desde puntos distintos (la terminada más a la derecha).
- La foto de obra se **deformó para calzar** sobre la terminada con `~/Desktop/pdf-tools/alinear.mjs` (configuración usada abajo): homografía inicial a partir de 6 esquinas de la fachada, optimizada por correlación de bordes (Nelder-Mead), y después una **corrección suave de 2.º grado** (`local.modelo: "poli"`) a partir de block matching. **No usar el modo thin-plate spline**: ondula la fachada.
- Encuadre 3:2 = **87 % izquierdo** de la foto terminada (lo máximo que cubre la de obra; con menos ancho Joaquín lo sintió con demasiado zoom). Salida 2100×1400.
- Resultado: la losa, el pilar de ladrillo, la ventana y el muro bajo calzan. Árboles y suelo no pueden calzar por la paralaje. Para un calce perfecto haría falta otra foto de obra desde el mismo punto.
- Configuración usada (escala de 1000 px de ancho; final 1000×667, obra 1000×750):
  `pares` final→obra: (683,278)→(800,312), (686,555)→(812,575), (708,190)→(825,230), (238,197)→(385,240), (390,340)→(518,365), (390,510)→(518,530); `referencia` [[250,200],[700,200],[700,550],[250,550]]; `mascara` [[20,150,725,560]]; `excluir` auto [385,395,670,525] y árbol [40,100,180,560]; `local` {modelo:"poli", paso:25, radio:28, busca:20, nccMin:0.6, texturaMin:40}; `encuadre` [0, 44.2, 868].

## Entorno y herramientas

- **Mac** Intel, macOS 12.6, **sin Command Line Tools de Xcode** (`/usr/bin/git` y `python3` no funcionan). Node.js 22 + npm 10 en `/usr/local/bin` (sin paquetes con compilación nativa).
- **git**: `~/.local/bin/git` (el de GitHub Desktop en `~/Applications`); credenciales con Git Credential Manager, ya autorizado para jsandrade10.
- **Imágenes**: `sips` y `qlmanage` (no hay ImageMagick ni Python).
  - Convertir/redimensionar: `sips -s format jpeg -s formatOptions 72 -Z 1600 in.HEIC --out out.jpg`; recortar `-c alto ancho --cropOffset y x`.
  - **Orientación EXIF**: `sips` deja las fotos verticales de celular con los píxeles acostados y Orientation=6. Antes de recortar: `node ~/Desktop/pdf-tools/normaliza.cjs <jpgs>` (gira píxeles y deja la etiqueta en 1). Para medir, usar `node ~/Desktop/pdf-tools/dims.cjs <jpg>` (`sips -g pixelWidth` engaña).
  - Hojas de contacto para revisar muchas fotos: HTML con grilla de miniaturas + `qlmanage -t -s 1800 -o <dir> hoja.html`. Las rutas con tildes no cargan, y qlmanage puede devolver una versión vieja en caché (cambiar el nombre del html).
- **`~/Desktop/pdf-tools/`** (FUERA del repo; npm `mupdf` (WASM) y `puppeteer-core`, instalados con permiso de Joaquín):
  - `inventario.mjs <pdf> <dir> [px]` → texto de todas las páginas (`texto.txt`), vista previa de cada página, tamaños (`info.json`).
  - `render.mjs trabajos.json` → páginas o recortes a JPG: `[{pdf, pagina, recorte:[x0,y0,x1,y1] (fracciones), lado, calidad, salida}]`. PDFs grandes: `node --max-old-space-size=4096`.
  - `alinear.mjs config.json` → alinea dos fotos (comparador del inicio).
  - `capturas.mjs <url> <dir>` → capturas con Chrome en computadora (1440×900) y celular (390×844): inicio, visor abierto (Casa JC y Facultad) y Proyectos. Uso: `npm run build && npx vite preview --port 4173 &`, luego `node ~/Desktop/pdf-tools/capturas.mjs http://localhost:4173/ <dir>`, y al final `pkill -f "vite preview"`. **Usarlo antes de subir cualquier cambio visual.**
  - `normaliza.cjs`, `dims.cjs` (ver arriba).
- **Espacio en disco**: muy justo (~1,2 GB libres al 2026-11-08; renderizar PDFs grandes genera ~1 GB de swap temporal). Borrar archivos temporales del scratchpad y `dist/` al terminar; avisar antes de descargar cosas grandes.

## Principios de diseño

- Estética tipo MK27: fondo negro, texto blanco pequeño, fotos protagonistas (B/N en listados, color en el proyecto).
- Imágenes grandes, `loading="lazy"`, JPG optimizados; rápido en celular (los clientes lo verán desde WhatsApp).
- Menú de máximo 5 elementos, siempre visible; cada proyecto a 1 clic.
- Textos cortos y claros para clientes; el detalle técnico, aparte.
- Responsive y accesible (alt en todas las fotos; teclado en el visor y el comparador).

## Pendiente / siguiente paso

**Falta que Joaquín entregue:**
- **Sobre mí**: foto de perfil, año de ingreso a la USFQ, trayectoria para la línea de tiempo (USFQ → Portugal 2022 → titulación dic. 2022 → YM 2025 → Arq. Buró desde ¿?), habilidades y software.
- **Frase de presentación** del inicio (hoy dice "Arquitecto — frase de presentación").
- **LinkedIn / Instagram** y **CV en PDF** (para Contacto).
- Opcional: año, ubicación y m² de cada obra de WORK; crédito del fotógrafo; original en alta resolución de `REMODELACIÓN YM/01.jpg`; una foto de obra de Casa AJ tomada desde el mismo punto que la terminada.

**Ideas para después** (consultar antes): textos "En pocas palabras" por obra (sistema constructivo, materiales: hormigón visto, ladrillo, piedra, tierra apisonada, madera); páginas individuales por proyecto con ficha técnica; filtros por tipo; versión en inglés.

## Bitácora

**2026-10-12 — sesión 1**: revisión del material y creación de este archivo. Disco interno lleno → Joaquín liberó espacio; sin Xcode CLT; Node 22 + GitHub Desktop (git vía `~/.local/bin/git`). Código en `~/Desktop/Portafolio` (el disco externo es FAT32). React + Vite + Vercel. Contacto (email, teléfono, WhatsApp) y primer comparador de Casa AJ.

**2026-11-08 — sesión 2** (larga):
1. Portadas reales de JC, FR y AJ.
2. Joaquín reorganizó el disco; se creó `REMODELACIÓN YM/selección/` (hoy son sus `01–06.jpg`) revisando las 89 fotos originales (4 terminado + 2 proceso).
3. Joaquín aclaró roles: YM propio; WORK = jefe de obra en Arq. Buró con diseño de Diez + Muller; UNI = T4 → Tesis. Web separada en "Proyecto propio" / "Jefe de obra en Arq. Buró".
4. Confirmó "Jefe de obra", permiso para todas las fotos, años y YM = Quito 2025. Se instaló `mupdf`; se leyeron los 34 PDF (182 págs.); galerías con visor para los 14 proyectos y resúmenes a partir de las láminas.
5. Joaquín pidió **solo entregas finales** en Académico (se quitó todo el proceso; T8 con recortes de su lámina final), corregir textos, **invertir el comparador** (obra a la izquierda) y **alinear las dos fotos** (homografía + corrección suave).
6. Joaquín: la portada quedó con demasiado zoom y en computadora las imágenes se veían mal. Se abrió el encuadre al 87 %; en escritorio el comparador ya no recorta (3:2) y el visor encaja las fotos. Se instaló `puppeteer-core` para revisar con capturas de Chrome; verificado en computadora y celular.
