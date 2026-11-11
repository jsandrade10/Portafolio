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
| **UNI** (USFQ) | Proyectos académicos propios. En el sitio, **los 6 (T4 → Tesis)** en la sección **"Diseños"** (T4–T6 se quitaron y Joaquín pidió volverlos a poner el 2026-11-09). | **Nunca presentarlos como universitarios** (pedido de Joaquín, 2026-11-09): sin "taller", "USFQ", "tesis", "tutor", "entrega" ni "lámina" en ningún texto, ruta o imagen. Ficha: tipo, ubicación, año, "diseño > Joaquín Andrade". T4 (Centro Comunitario): **Joaquín pidió quitar los créditos de Sofía Murillo** (2026-11-09); como es trabajo en equipo, su ficha tampoco dice "diseño > Joaquín Andrade" (campo `coautoria: true`). |

- **Permiso para publicar todas las fotos de las carpetas: confirmado** por Joaquín.
- **Años**: T4 y T5 2020 · T6 y T7 2021 · T8 (Portugal) y Tesis 2022. Tesis entregada el 14/12/2022, Taller IX. Nombre completo en la tesis: Joaquín Sebastián Andrade Soria.
- T8: las entregas de **proceso** (Aldea Jardín y entrega 2) son con **Katherine Pazmiño**; la lámina final de la Galería-Talleres es solo de Joaquín. Como en el sitio solo se muestra la final, T8 no lleva crédito de coautoría. Si algún día se muestra el proceso, acreditarla.
- **No inventar** año, ubicación ni m² de las obras de WORK (siguen PENDIENTES), ni el crédito del fotógrafo de las fotos profesionales (`_A74…-HDR`, `DSC…-HDR`).
- Los nombres de las obras son iniciales de clientes: no deducir ni publicar nombres.

## Preferencias de Joaquín (aprendidas en las sesiones)

- **Diseños (antes "Académico")**: T4 → Tesis, sin ninguna referencia universitaria. Rótulos borrados: T4 (franja gris inferior "USFQ · Sofía Murillo · Joaquín Andrade · Taller de Arquitectura II · Ejercicio II…", recortada en cada lámina a 1312–1328 px de alto), T5 (franja negra "USFQ · nº de estudiante · Taller 5", recortada a 1860–1890 px), T6 lámina 02 (encabezado "USFQ / TALLER VI / ENTREGA FINAL / JOAQUÍN ANDRADE" rellenado en blanco con `blanquea.mjs`, rectángulo 60,52,548×182); las láminas de T7 llevaban una franja "USFQ · TALLER 7 · ENTREGA FINAL" + número de estudiante: se recortó (`recorta.mjs`, filas 0–1905); se quitó la portada del PORTAFOLIO de la tesis (decía "USFQ 22.12.2022"). Si se agregan imágenes nuevas, revisar que no tengan logos ni rótulos de la universidad.
- **Solo entregas FINALES.** Nada de análisis, anteproyectos, entregas intermedias ni maquetas de estudio. Se pueden usar recortes de las láminas finales para mostrar detalles.
- **En obras: lo más llamativo es el resultado terminado**; el proceso acompaña al final de cada galería.
- **Inicio**: franjas horizontales, una por proyecto, en el orden que él pidió; que no se vean demasiado cortadas en computadora. Detalles de color solo si son **muy sobrios**.
- **Comparador** (ahora en Casa AJ): **En obra a la izquierda y Terminado a la derecha**; las dos fotos deben verse como **la misma imagen**. **No hacer zoom de más**: debe verse la casa completa.
- **Créditos de Sofía Murillo: quitados** a pedido de Joaquín (no volver a ponerlos).
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

## Estado actual del sitio (2026-11-09)

**Stack**: React + Vite, sitio estático con rutas por hash (sin dependencias), Vercel. Comandos en `~/Desktop/Portafolio`: `npm run dev` (http://localhost:5173), `npm run build`.

**Diseño** (inspirado en https://mk27.com/ a pedido de Joaquín; no se copia su logo, textos ni fotos):
- Fondo negro, Roboto Light 12,5 px con espaciado, nombre "JOAQUÍN ANDRADE · ARQUITECTO" a la izquierda y **hamburguesa** a la derecha (también en computadora).
- **Menú** a pantalla completa: **PROYECTOS** (Remodelación YM + obras de Arq. Buró), **DISEÑOS** (los 6 proyectos universitarios, presentados sin referencia a la universidad), SOBRE MÍ, CONTACTO.
- **Inicio** = franjas horizontales a todo el ancho, **una por proyecto** (lista `franjas` en App.jsx; `pos` = parte visible de la foto). Alto: computadora `clamp(260px, 25vw, 440px)` (≈360 px a 1440 px; Joaquín las veía muy cortadas con 230), celular 230 px. B/N; al pasar el mouse, color + nombre + rol ("Jefe de obra", "Diseño y dirección de obra", "Diseño"); en celular el nombre se ve siempre con sombra inferior. Se probó un mosaico de tamaños distintos y **Joaquín prefirió las franjas horizontales**.
- **Orden (pedido por Joaquín)**: Remodelación YM, Casa JC, FR, AJ, JV, LT, BR, Colegio Mine, Mundaneum Beirut, Galería-Talleres, Edificio Nexo, Facultad, Biblioteca, Centro Comunitario. Desde la sesión 4 el menú, las grillas y "proyecto anterior / siguiente" siguen este mismo orden (es el orden de las listas en `proyectos.js`).
- Franja de la **Facultad**: `disenos/facultad-arquitectura-inicio.jpg`, gris con el ladrillo en tono terracota apagado (`detalle_color.mjs`, #a06a4e, fuerza 0.45; los blancos no se tiñen) y sin filtro B/N (`color: true`). Portada de **Mundaneum** = render de la fachada de arcos con la mezquita y las ruinas romanas (recorte de `mundaneum-beirut/01.jpg`, 74,206,1856×846 → 1600×729).
- **Rutas**: `#/` · `#/proyectos` y `#/disenos` (grilla de portadas) · `#/p/<slug>` = **todas las fotos del proyecto en grilla de 3 columnas** (lo que abre cada franja y el menú; B/N, color y descripción al pasar) · `#/p/<slug>/<n>` = al hacer clic en una foto: foto n grande (clic → visor a pantalla completa), ficha "campo > valor" a la derecha, miniaturas abajo, resumen debajo; la dirección se actualiza al cambiar de foto; al pie: ‹ proyecto anterior · TODAS LAS FOTOS · siguiente › · `#/sobre-mi` · `#/contacto`.
- **Fichas**: tipo, ubicación, año; obras: "diseño > Diez + Muller · construcción > Arq. Buró · jefe de obra > Joaquín Andrade"; YM: "diseño y dirección de obra > Joaquín Andrade"; diseños: "diseño > Joaquín Andrade", **excepto el Centro Comunitario** (`coautoria: true`, sin crédito de diseño).
- El **comparador obra/terminado** (Casa AJ) está en la página `#/p/casa-aj/<n>`, debajo del resumen.
- **Sobre mí** (provisional): "Arquitecto en Quito. Jefe de obra en Arq. Buró." + formación (Arquitectura, USFQ), proyecto propio, trabajo; caja gris para la foto. **Contacto**: email, teléfono, WhatsApp, Quito.

| Archivo | Qué hay |
|---|---|
| `index.html` | `lang="es"`, título "Joaquín Andrade — Arquitectura", fuente Roboto (Google Fonts), theme-color negro. |
| `src/App.jsx` | `useRuta` (hash), `Header` (nombre + hamburguesa + menú), `Inicio` (`franjas`), `Categoria`, `Fotos` (grilla de un proyecto), `Proyecto` (`Galeria` + `ficha()`), `SobreMi`, `Contacto`. `slugDe(p)` = carpeta de sus fotos; `rolDe(p)` = texto del rol. |
| `src/proyectos.js` | **Todos los datos**: `propios`, `obras`, `disenos` (nombre, tipo, anio, ubicacion, credito, coautoria, resumen, portada, alt, fotos). `galeria(slug, alts)` arma las fotos: un texto (alt y pie de foto) por imagen, en el orden de los archivos `NN.jpg`. **Si se agrega o quita una imagen, renumerar archivos y ajustar la lista de textos.** |
| `src/Lightbox.jsx` | Visor a pantalla completa: flechas, teclado (← → Esc), deslizar en celular, miniaturas, pie de foto. La imagen va `position:absolute; inset:0; object-fit:contain` (no usar `max-height:%`). |
| `src/BeforeAfter.jsx` | Comparador: la barra sigue al mouse sin clic; en táctil se arrastra; flechas ±5 %. |
| `src/index.css` | Variables en `:root` (`--bg` negro, `--izq` 240 px = margen del contenido). Cortes: ≤1100 px `--izq` 44 px; ≤700 px celular (grillas de 1 columna, proyecto apilado). |
| `public/img/hero/` | `casa-aj-obra.jpg` (alineada) y `casa-aj-final.jpg`, 2100×1400 (comparador). |
| `public/img/obras/`, `public/img/disenos/` | Portadas 1200×900 (Mundaneum 1600×729) + `facultad-arquitectura-inicio.jpg`. |
| `public/img/<slug>/` | Galerías: `NN.jpg` (fotos 1600 px; láminas 2000 px) + `NN-t.jpg` (miniatura 400 px). |

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

**Diseños (en el sitio) — solo entregas finales** (página del PDF → número de imagen; portadas en `public/img/disenos/`)
- `centro-comunitario` (6): T4 `CENTRO COMUNITARIO.pdf` págs. 9, 1, 2, 5, 6, 7. Portada: axonometría (pág. 9, recorte `[.02,.03,.52,.52]`).
- `facultad-arquitectura` (5): T5 `ENTREGA FINAL.pdf` págs. 5, 1, 2, 3, 4. Portada: vista 3D con la torre (pág. 5, `[.056,.635,.434,.835]`).
- `biblioteca` (8): T6 `ENTREGA FINAL.pdf` págs. 7, 1, 2, 3, 4, 6, 5, 8. Portada: quiebrasoles de madera (pág. 7, `[.38,.70,.852,.95]`).
- `edificio-nexo` (6): T7 `ENTREGA FINAL.pdf` págs. 6, 1, 2, 3, 4, 5. Portada: vista desde la calle José Correa (pág. 6, `[.05,.045,.95,.40]`). Las 6 láminas recortadas a 1413×1905 (sin la franja USFQ).
- `galeria-talleres` (7): recortes de T8 `laminas finales.pdf` pág. 1 — maqueta `[.025,.05,.475,.75]`, planta `[.52,.05,.885,.59]`, axonometría y cortes `[.52,.62,.885,.95]`, fotos de maqueta `[.884,.41,.98,.955]`, fotos del sitio `[.884,.04,.98,.41]`, mitad izquierda `[0,0,.5,1]`, mitad derecha `[.5,0,1,1]`. Portada: maqueta blanca `[.02,.17,.48,.68]`.
- `mundaneum-beirut` (13): `PORTAFOLIO.pdf` págs. 21, 17, 29, 30, 7, 20, 23, 27, 28 + `ENTREGA FINAL.pdf` 1, 2 + `MAQUETA.pdf` 1, 2. Portada: render de la fachada de arcos (ver arriba; antes era la maqueta final). Se quitaron las págs. 14 y 15 (maquetas de proceso). Se quitó también la pág. 1 (portada con "USFQ").

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
  - Convertir/redimensionar: `sips -s format jpeg -s formatOptions 72 -Z 1600 in.HEIC --out out.jpg`. **`sips -c` recorta centrado e ignora `--cropOffset`**: para recortar un rectángulo usar `node ~/Desktop/pdf-tools/recorta.mjs in.jpg out.jpg x y ancho alto` (`banda.mjs` e `inicio_franja.mjs <fraccion> <jpgs>` ubican franjas/rótulos oscuros; `blanquea.mjs in out x y w h` rellena un rectángulo de blanco).
  - **Orientación EXIF**: `sips` deja las fotos verticales de celular con los píxeles acostados y Orientation=6. Antes de recortar: `node ~/Desktop/pdf-tools/normaliza.cjs <jpgs>` (gira píxeles y deja la etiqueta en 1). Para medir, usar `node ~/Desktop/pdf-tools/dims.cjs <jpg>` (`sips -g pixelWidth` engaña).
  - Hojas de contacto para revisar muchas fotos: HTML con grilla de miniaturas + `qlmanage -t -s 1800 -o <dir> hoja.html`. Las rutas con tildes no cargan, y qlmanage puede devolver una versión vieja en caché (cambiar el nombre del html).
- **`~/Desktop/pdf-tools/`** (FUERA del repo; npm `mupdf` (WASM) y `puppeteer-core`, instalados con permiso de Joaquín):
  - `inventario.mjs <pdf> <dir> [px]` → texto de todas las páginas (`texto.txt`), vista previa de cada página, tamaños (`info.json`).
  - `render.mjs trabajos.json` → páginas o recortes a JPG: `[{pdf, pagina, recorte:[x0,y0,x1,y1] (fracciones), lado, calidad, salida}]`. PDFs grandes: `node --max-old-space-size=4096`.
  - `alinear.mjs config.json` → alinea dos fotos (comparador del inicio).
  - `capturas2.mjs <url> <dir>` → capturas con Chrome de las rutas de la lista `rutas` (editarla), en computadora y celular, con scroll previo para que carguen las imágenes, + menú abierto. **Usarlo antes de subir cualquier cambio visual.** `recorta.mjs`, `blanquea.mjs`, `banda.mjs`, `inicio_franja.mjs`, `franjas_oscuras.mjs`, `detalle_color.mjs` (ver Imágenes).
  - `capturas.mjs <url> <dir>` (versión vieja, del diseño blanco) → capturas con Chrome en computadora (1440×900) y celular (390×844): inicio, visor abierto (Casa JC y Facultad) y Proyectos. Uso: `npm run build && npx vite preview --port 4173 &`, luego `node ~/Desktop/pdf-tools/capturas.mjs http://localhost:4173/ <dir>`, y al final `pkill -f "vite preview"`. **Usarlo antes de subir cualquier cambio visual.**
  - `normaliza.cjs`, `dims.cjs` (ver arriba).
- **Espacio en disco**: muy justo (~1,2 GB libres al 2026-11-08; renderizar PDFs grandes genera ~1 GB de swap temporal). Borrar archivos temporales del scratchpad y `dist/` al terminar; avisar antes de descargar cosas grandes.

## Principios de diseño

- Estética tipo MK27: fondo negro, texto blanco pequeño, fotos protagonistas (B/N en listados, color en el proyecto).
- Imágenes grandes, `loading="lazy"`, JPG optimizados; rápido en celular (los clientes lo verán desde WhatsApp).
- Menú detrás de la hamburguesa con todos los proyectos listados: cada proyecto a 1–2 clics.
- Textos cortos y claros para clientes; el detalle técnico, aparte.
- Responsive y accesible (alt en todas las fotos; teclado en el visor y el comparador).

## Pendiente / siguiente paso

**Falta que Joaquín entregue:**
- **Sobre mí**: foto de perfil, año de ingreso a la USFQ, trayectoria para la línea de tiempo (USFQ → Portugal 2022 → titulación dic. 2022 → YM 2025 → Arq. Buró desde ¿?), habilidades y software.
- Texto definitivo de **Sobre mí** (hoy es provisional).
- **LinkedIn / Instagram** y **CV en PDF** (para Contacto).
- Opcional: año, ubicación y m² de cada obra de WORK; crédito del fotógrafo; original en alta resolución de `REMODELACIÓN YM/01.jpg`; una foto de obra de Casa AJ tomada desde el mismo punto que la terminada.

**Para la próxima sesión (ofrecido, sin respuesta):** en celular, quitar el texto que se superpone a las láminas en la grilla de fotos; ajustar el encuadre (`pos`) de alguna franja si Joaquín lo pide; copiar este CLAUDE.md al disco externo (no estuvo conectado en la sesión 3).

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

**2026-11-09 — sesión 3** (larga; disco externo NO conectado):
1. Joaquín pidió el sitio "tal cual" https://mk27.com/: se rehízo con fondo negro, franjas en el inicio, grilla por categoría y página de proyecto con ficha (sin copiar logo, textos ni fotos de MK27).
2. Pidió: inicio con una foto por proyecto, menú de hamburguesa con **Proyectos** (YM + obras) y **Diseños** (lo académico), y que **en ningún lado** se vea que los diseños son universitarios. Se quitaron T4–T6, se recortaron las franjas "USFQ" de Nexo y se quitó la portada con "USFQ" de Mundaneum; carpeta `img/academico` → `img/disenos`.
3. Se probó un mosaico de tamaños distintos; Joaquín prefirió volver a las franjas horizontales.
4. Cada franja abre ahora la grilla con todas las fotos del proyecto; al elegir una foto se ve la ficha con la galería.
5. Volvieron T4 (Centro Comunitario), T5 (Facultad) y T6 (Biblioteca), sin rótulos USFQ (recortes y un encabezado blanqueado).
6. Se quitaron los créditos de Sofía Murillo, se fijó el orden del inicio, portada de Mundaneum = render de los arcos, detalle de color terracota en la franja de la Facultad.
7. Franjas más altas en computadora.


**2026-11-11 — sesión 4**: menú, grillas y navegación igualados al orden del inicio (se reordenaron las listas de `proyectos.js`).
- Facultad: la franja dejó de estar siempre en color; ahora es B/N y el tono cálido aparece al pasar el mouse, como las demás (pedido de Joaquín).
- Joaquín pidió convertir las láminas de Diseños en renders realistas. Claude no genera imágenes; se probó mejorar la lámina del Mundaneum con canvas (cielo de atardecer, luz interior en los vidrios) y **Joaquín la rechazó: dejar las láminas como están**. No volver a proponerlo salvo que él traiga renders hechos o pida usar un generador externo (Higgsfield, previa autorización para subir imágenes).
