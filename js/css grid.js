// const tagData = {
// 🔹 Basics (Most Used Today)
//     "display-grid": {
//         title: "Grid container (display: grid / inline-grid)",
//         history: "Turns an element into a grid container, enabling Grid layout for its children. inline-grid behaves like inline-level but still creates a grid formatting context.",
//         code: `<!DOCTYPE html>
// <html>
// <head>
// <meta charset="UTF-8">
// <title>Grid Container Example</title>
// <style>
//   .container {
//     display: grid; /* or inline-grid */
//     grid-template-columns: 150px 1fr;
//     gap: 12px;
//   }
//   .item { background: #cfe8ff; padding: 10px; }
// </style>
// </head>
// <body>
// <h2>Grid Container Example</h2>
// <div class="container">
//   <div class="item">A</div>
//   <div class="item">B</div>
//   <div class="item">C</div>
// </div>
// </body>
// </html>`,
//         quiz: "Which property creates a grid formatting context for child elements?",
//         answer: "display: grid (or inline-grid)"
//     },

//     "grid-template-columns-rows": {
//         title: "grid-template-columns / grid-template-rows",
//         history: "Defines explicit columns and rows for the grid using lengths, percentages, flexible units (fr), and functions like repeat() and minmax().",
//         code: `<!DOCTYPE html>
// <html>
// <head>
// <meta charset="UTF-8">
// <title>Grid Template Columns/Rows Example</title>
// <style>
//   .grid {
//     display: grid;
//     grid-template-columns: 200px 1fr auto;
//     grid-template-rows: 80px 120px;
//     gap: 10px;
//   }
//   .item { background: #ffe0b2; padding: 10px; }
// </style>
// </head>
// <body>
// <h2>grid-template-columns / grid-template-rows</h2>
// <div class="grid">
//   <div class="item">Col 1 fixed (200px)</div>
//   <div class="item">Col 2 flexible (1fr)</div>
//   <div class="item">Col 3 auto</div>
//   <div class="item">Row 2 content</div>
// </div>
// </body>
// </html>`,
//         quiz: "Which properties define the grid's rows and columns?",
//         answer: "grid-template-columns and grid-template-rows"
//     },

//     "gap": {
//         title: "gap (row-gap / column-gap)",
//         history: "Sets spacing between grid tracks without extra margins. Use gap shorthand or row-gap/column-gap for fine control.",
//         code: `<!DOCTYPE html>
// <html>
// <head>
// <meta charset="UTF-8">
// <title>Gap Example</title>
// <style>
//   .grid {
//     display: grid;
//     grid-template-columns: repeat(3, 1fr);
//     gap: 20px; /* row and column gap */
//   }
//   .item { background: #d1ffd6; padding: 12px; }
// </style>
// </head>
// <body>
// <h2>Grid gap Example</h2>
// <div class="grid">
//   <div class="item">1</div><div class="item">2</div><div class="item">3</div>
//   <div class="item">4</div><div class="item">5</div><div class="item">6</div>
// </div>
// </body>
// </html>`,
//         quiz: "Which property sets spacing between grid rows and columns without margins?",
//         answer: "gap"
//     },

//     "grid-auto-rows-columns": {
//         title: "grid-auto-rows / grid-auto-columns",
//         history: "Defines the size of implicitly created rows or columns when items are placed outside the explicit grid.",
//         code: `<!DOCTYPE html>
// <html>
// <head>
// <meta charset="UTF-8">
// <title>Grid Auto Tracks Example</title>
// <style>
//   .grid {
//     display: grid;
//     grid-template-columns: 150px 1fr;
//     grid-auto-rows: 80px; /* size for implicit rows */
//     gap: 10px;
//   }
//   .item { background: #e1d7ff; padding: 8px; }
// </style>
// </head>
// <body>
// <h2>grid-auto-rows / grid-auto-columns</h2>
// <div class="grid">
//   <div class="item" style="grid-column: 1 / 3;">Header (explicit row)</div>
//   <div class="item">Implicit Row A</div>
//   <div class="item">Implicit Row B</div>
// </div>
// </body>
// </html>`,
//         quiz: "Which properties set sizes of auto-generated rows/columns?",
//         answer: "grid-auto-rows and grid-auto-columns"
//     },

//     "grid-auto-flow": {
//         title: "grid-auto-flow",
//         history: "Controls automatic placement of items into the grid (row, column, or dense to backfill gaps).",
//         code: `<!DOCTYPE html>
// <html>
// <head>
// <meta charset="UTF-8">
// <title>Grid Auto Flow Example</title>
// <style>
//   .grid {
//     display: grid;
//     grid-template-columns: 120px 120px 120px;
//     grid-auto-flow: dense;
//     gap: 8px;
//   }
//   .big { grid-column: span 2; background: #ffd6e7; }
//   .item { background: #d6f3ff; padding: 10px; }
// </style>
// </head>
// <body>
// <h2>grid-auto-flow: dense Example</h2>
// <div class="grid">
//   <div class="big">Span 2</div>
//   <div class="item">A</div>
//   <div class="item">B</div>
//   <div class="item">C</div>
//   <div class="item">D</div>
// </div>
// </body>
// </html>`,
//         quiz: "Which property controls automatic grid item placement and can backfill gaps?",
//         answer: "grid-auto-flow"
//     },

// Grid Items (Child level)
//     "grid-column-row": {
//         title: "grid-column / grid-row",
//         history: "Places an item using line numbers or spans. Example: grid-column: 1 / 3; grid-row: 2 / 4; or grid-column: span 2.",
//         code: `<!DOCTYPE html>
// <html>
// <head>
// <meta charset="UTF-8">
// <title>Grid Column/Row Example</title>
// <style>
//   .grid { display: grid; grid-template-columns: repeat(4, 1fr); grid-template-rows: repeat(3, 80px); gap: 8px; }
//   .item { background: #fff1b5; padding: 8px; }
//   .featured { grid-column: 1 / 3; grid-row: 1 / 3; background: #ffc7a2; }
// </style>
// </head>
// <body>
// <h2>grid-column / grid-row</h2>
// <div class="grid">
//   <div class="featured">Spans col 1-2 and rows 1-2</div>
//   <div class="item">X</div><div class="item">Y</div><div class="item">Z</div>
//   <div class="item">M</div><div class="item">N</div><div class="item">O</div>
// </div>
// </body>
// </html>`,
//         quiz: "Which properties position items by line numbers or spans?",
//         answer: "grid-column and grid-row"
//     },

//     "grid-area": {
//         title: "grid-area (named placement)",
//         history: "Assigns a name to a grid item and positions it using grid-template-areas map, or sets shorthand row/column lines.",
//         code: `<!DOCTYPE html>
// <html>
// <head>
// <meta charset="UTF-8">
// <title>Grid Area Named Example</title>
// <style>
//   .grid {
//     display: grid;
//     grid-template-columns: 120px 1fr;
//     grid-template-areas:
//       "sidebar header"
//       "sidebar content";
//     gap: 10px;
//   }
//   .sidebar { grid-area: sidebar; background: #b6f7c1; }
//   .header { grid-area: header; background: #b6e0ff; }
//   .content { grid-area: content; background: #f9d1ff; }
// </style>
// </head>
// <body>
// <h2>grid-template-areas + grid-area</h2>
// <div class="grid">
//   <div class="sidebar">Sidebar</div>
//   <div class="header">Header</div>
//   <div class="content">Content</div>
// </div>
// </body>
// </html>`,
//         quiz: "Which property places items using named areas in a template map?",
//         answer: "grid-area"
//     },

// 🔹 Advanced Features
//     "fr-unit": {
//         title: "fr unit (fraction)",
//         history: "Represents a flexible fraction of remaining space in the grid after fixed sizes are resolved.",
//         code: `<!DOCTYPE html>
// <html>
// <head>
// <meta charset="UTF-8">
// <title>fr Unit Example</title>
// <style>
//   .grid { display: grid; grid-template-columns: 1fr 2fr; gap: 10px; }
//   .item { background: #e2f0cb; padding: 10px; }
// </style>
// </head>
// <body>
// <h2>fr unit Example</h2>
// <div class="grid">
//   <div class="item">1fr</div>
//   <div class="item">2fr (twice remaining space)</div>
// </div>
// </body>
// </html>`,
//         quiz: "Which unit represents flexible fractions of available space?",
//         answer: "fr"
//     },

//     "repeat": {
//         title: "repeat() function",
//         history: "Generates repeated tracks patterns for concise templates. Example: repeat(3, 1fr).",
//         code: `<!DOCTYPE html>
// <html>
// <head>
// <meta charset="UTF-8">
// <title>repeat() Example</title>
// <style>
//   .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
//   .item { background: #ffd9ec; padding: 10px; }
// </style>
// </head>
// <body>
// <h2>repeat() Example</h2>
// <div class="grid">
//   <div class="item">A</div><div class="item">B</div><div class="item">C</div>
// </div>
// </body>
// </html>`,
//         quiz: "Which function repeats grid track patterns?",
//         answer: "repeat()"
//     },

//     "minmax": {
//         title: "minmax() function",
//         history: "Creates a track that clamps between a minimum and maximum size for responsive behavior.",
//         code: `<!DOCTYPE html>
// <html>
// <head>
// <meta charset="UTF-8">
// <title>minmax() Example</title>
// <style>
//   .grid { display: grid; grid-template-columns: minmax(200px, 1fr) 2fr; gap: 10px; }
//   .item { background: #c7e6ff; padding: 10px; }
// </style>
// </head>
// <body>
// <h2>minmax() Example</h2>
// <div class="grid">
//   <div class="item">Responsive min 200px, max 1fr</div>
//   <div class="item">2fr column</div>
// </div>
// </body>
// </html>`,
//         quiz: "Which function clamps a track size between min and max?",
//         answer: "minmax()"
//     },

//     "auto-fit-auto-fill": {
//         title: "auto-fit / auto-fill",
//         history: "Create dynamic responsive grids. auto-fill adds as many tracks as fit; auto-fit collapses empty tracks to distribute space.",
//         code: `<!DOCTYPE html>
// <html>
// <head>
// <meta charset="UTF-8">
// <title>auto-fit / auto-fill Example</title>
// <style>
//   .grid {
//     display: grid;
//     grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
//     gap: 12px;
//   }
//   .item { background: #e9ffd6; padding: 16px; }
// </style>
// </head>
// <body>
// <h2>auto-fit / auto-fill Example</h2>
// <div class="grid">
//   <div class="item">Card 1</div><div class="item">Card 2</div>
//   <div class="item">Card 3</div><div class="item">Card 4</div>
// </div>
// </body>
// </html>`,
//         quiz: "Which keywords create dynamic responsive grids with repeat()?",
//         answer: "auto-fit and auto-fill"
//     },

//     "subgrid": {
//         title: "subgrid (2020+)",
//         history: "Allows nested grids to inherit track definitions from their parent for aligned layouts across components.",
//         code: `<!DOCTYPE html>
// <html>
// <head>
// <meta charset="UTF-8">
// <title>Subgrid Example</title>
// <style>
//   .parent {
//     display: grid;
//     grid-template-columns: 150px 1fr 1fr;
//     gap: 10px;
//   }
//   .child {
//     display: grid;
//     grid-template-columns: subgrid; /* inherit columns */
//     grid-column: 1 / -1;
//     gap: 8px;
//   }
//   .box { background: #ffd7ba; padding: 10px; }
// </style>
// </head>
// <body>
// <h2>Subgrid Example</h2>
// <div class="parent">
//   <div class="box">A</div><div class="box">B</div><div class="box">C</div>
//   <div class="child">
//     <div class="box">Child 1</div>
//     <div class="box">Child 2</div>
//     <div class="box">Child 3</div>
//   </div>
// </div>
// </body>
// </html>`,
//         quiz: "Which feature lets child grids inherit parent tracks?",
//         answer: "subgrid"
//     },

//     "justify-align-items": {
//         title: "justify-items / align-items",
//         history: "Controls alignment of items within their cells along inline (justify) and block (align) axes.",
//         code: `<!DOCTYPE html>
// <html>
// <head>
// <meta charset="UTF-8">
// <title>Item Alignment Example</title>
// <style>
//   .grid { display: grid; grid-template-columns: repeat(3, 1fr); justify-items: center; align-items: center; height: 200px; gap: 10px; }
//   .item { background: #f0f0f0; padding: 10px; }
// </style>
// </head>
// <body>
// <h2>justify-items / align-items</h2>
// <div class="grid">
//   <div class="item">Centered</div><div class="item">Centered</div><div class="item">Centered</div>
// </div>
// </body>
// </html>`,
//         quiz: "Which properties align items inside grid cells along inline and block axes?",
//         answer: "justify-items and align-items"
//     },

//     "place-items-place-content": {
//         title: "place-items / place-content (shorthand)",
//         history: "Shorthands for alignment: place-items combines align-items and justify-items; place-content combines align-content and justify-content.",
//         code: `<!DOCTYPE html>
// <html>
// <head>
// <meta charset="UTF-8">
// <title>place-items / place-content Example</title>
// <style>
//   .grid {
//     display: grid;
//     grid-template-columns: repeat(2, 1fr);
//     place-items: center;        /* align + justify items */
//     place-content: center;      /* align + justify content */
//     height: 220px; gap: 12px;
//   }
//   .item { background: #dff6ff; padding: 12px; }
// </style>
// </head>
// <body>
// <h2>place-items / place-content</h2>
// <div class="grid">
//   <div class="item">A</div><div class="item">B</div>
// </div>
// </body>
// </html>`,
//         quiz: "Which shorthands combine align/justify for items and content?",
//         answer: "place-items and place-content"
//     },

//     // 🔹 Less Common but Powerful
//     "grid-template-areas": {
//         title: "grid-template-areas (visual map)",
//         history: "Defines a visual template using named areas for intuitive placement of items. Works with grid-area names.",
//         code: `<!DOCTYPE html>
// <html>
// <head>
// <meta charset="UTF-8">
// <title>Grid Template Areas Map</title>
// <style>
//   .layout {
//     display: grid;
//     grid-template-columns: 180px 1fr;
//     grid-template-rows: 80px auto;
//     grid-template-areas:
//       "sidebar header"
//       "sidebar content";
//     gap: 10px;
//   }
//   .sidebar { grid-area: sidebar; background: #e8eaf6; }
//   .header { grid-area: header; background: #c5cae9; }
//   .content { grid-area: content; background: #9fa8da; }
// </style>
// </head>
// <body>
// <h2>grid-template-areas</h2>
// <div class="layout">
//   <aside class="sidebar">Sidebar</aside>
//   <header class="header">Header</header>
//   <main class="content">Content</main>
// </div>
// </body>
// </html>`,
//         quiz: "Which property creates named regions for visual placement?",
//         answer: "grid-template-areas"
//     },

//     "grid-auto-flow-dense": {
//         title: "grid-auto-flow: dense",
//         history: "The dense keyword attempts to backfill smaller items into earlier gaps, improving packing efficiency.",
//         code: `<!DOCTYPE html>
// <html>
// <head>
// <meta charset="UTF-8">
// <title>Dense Packing Example</title>
// <style>
//   .grid {
//     display: grid;
//     grid-template-columns: repeat(4, 1fr);
//     grid-auto-flow: dense;
//     gap: 8px;
//   }
//   .wide { grid-column: span 2; background: #ffd1dc; }
//   .item { background: #d1f0ff; padding: 8px; }
// </style>
// </head>
// <body>
// <h2>grid-auto-flow: dense</h2>
// <div class="grid">
//   <div class="wide">Span 2</div>
//   <div class="item">A</div><div class="item">B</div><div class="item">C</div>
//   <div class="item">D</div><div class="item">E</div><div class="item">F</div>
// </div>
// </body>
// </html>`,
//         quiz: "Which keyword backfills items to fill gaps automatically?",
//         answer: "dense (with grid-auto-flow)"
//     },

//     "masonry-experimental": {
//         title: "Masonry layout (experimental)",
//         history: "A native CSS masonry mode creates Pinterest-style staggered grids. Support is experimental and browser-specific.",
//         code: `<!DOCTYPE html>
// <html>
// <head>
// <meta charset="UTF-8">
// <title>Masonry (Experimental) Example</title>
// <style>
//   .grid {
//     display: grid;
//     grid-template-columns: repeat(4, 1fr);
//     grid-auto-flow: row; /* placeholder; note: masonry support varies */
//     gap: 10px;
//   }
//   .item { background: #c8e6c9; padding: 12px; min-height: 60px; }
//   .item:nth-child(odd) { min-height: 120px; }
// </style>
// </head>
// <body>
// <h2>CSS Masonry (Experimental)</h2>
// <div class="grid">
//   <div class="item">1</div><div class="item">2</div><div class="item">3</div><div class="item">4</div>
//   <div class="item">5</div><div class="item">6</div><div class="item">7</div><div class="item">8</div>
// </div>
// </body>
// </html>`,
//         quiz: "Which layout style creates Pinterest-like staggered grids?",
//         answer: "Masonry layout (experimental)"
//     },

//     "aspect-ratio-grid": {
//         title: "Aspect-ratio + Grid",
//         history: "Using aspect-ratio on grid items maintains consistent proportions for cards and images across responsive layouts.",
//         code: `<!DOCTYPE html>
// <html>
// <head>
// <meta charset="UTF-8">
// <title>Aspect-Ratio + Grid Example</title>
// <style>
//   .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px; }
//   .card { aspect-ratio: 16 / 9; background: #fff3cd; border: 1px solid #f0e3a3; }
// </style>
// </head>
// <body>
// <h2>Aspect-ratio + Grid</h2>
// <div class="grid">
//   <div class="card"></div><div class="card"></div><div class="card"></div>
// </div>
// </body>
// </html>`,
//         quiz: "Which property keeps card proportions consistent in a grid?",
//         answer: "aspect-ratio"
//     },

//     "css-shapes-grid": {
//         title: "CSS Shapes + Grid",
//         history: "Combining grid alignment with shape-outside/clip-path enables creative text wrapping and structured placements.",
//         code: `<!DOCTYPE html>
// <html>
// <head>
// <meta charset="UTF-8">
// <title>CSS Shapes + Grid Example</title>
// <style>
//   .layout { display: grid; grid-template-columns: 200px 1fr; gap: 16px; }
//   .shape {
//     float: left; shape-outside: circle(50%);
//     clip-path: circle(50%); width: 160px; height: 160px; background: #ffcccb; margin: 10px;
//   }
//   .content { background: #f5f5f5; padding: 12px; }
// </style>
// </head>
// <body>
// <h2>CSS Shapes + Grid</h2>
// <div class="layout">
//   <div class="content">
//     <div class="shape"></div>
//     <p>Text wraps around the circular shape while overall page structure uses Grid.</p>
//   </div>
//   <div class="content">Sidebar</div>
// </div>
// </body>
// </html>`,
//         quiz: "Which feature allows text to wrap around custom shapes combined with grid alignment?",
//         answer: "CSS Shapes + Grid"
//     },

//     // 🔹 New / Experimental (2023–2025)
//     "container-queries-grid": {
//         title: "Container Queries + Grid",
//         history: "Styles grid tracks and placements based on the container's size, enabling component-level responsiveness independent of viewport.",
//         code: `<!DOCTYPE html>
// <html>
// <head>
// <meta charset="UTF-8">
// <title>Container Queries + Grid</title>
// <style>
//   .card-grid { container-type: inline-size; border: 1px solid #ddd; padding: 12px; }
//   .card-grid > .grid { display: grid; gap: 12px; grid-template-columns: repeat(2, 1fr); }
//   @container (min-width: 500px) {
//     .card-grid > .grid { grid-template-columns: repeat(3, 1fr); }
//   }
//   .item { background: #e3f2fd; padding: 10px; }
// </style>
// </head>
// <body>
// <h2>Container Queries + Grid</h2>
// <div class="card-grid">
//   <div class="grid">
//     <div class="item">A</div><div class="item">B</div><div class="item">C</div>
//     <div class="item">D</div><div class="item">E</div>
//   </div>
// </div>
// </body>
// </html>`,
//         quiz: "Which feature styles grids based on parent container size rather than viewport?",
//         answer: "Container Queries"
//     },

//     "anchor-positioning-grid": {
//         title: "Anchor Positioning with Grid",
//         history: "Positions elements relative to another 'anchor' element for tooltips/popovers; integrates with grid for precise overlays.",
//         code: `<!DOCTYPE html>
// <html>
// <head>
// <meta charset="UTF-8">
// <title>Anchor Positioning (Concept)</title>
// <style>
//   .grid { display: grid; place-items: center; height: 220px; }
//   /* Note: Anchor Positioning syntax and support are evolving */
//   .tooltip { position: absolute; background: #fff; border: 1px solid #ccc; padding: 6px; }
// </style>
// </head>
// <body>
// <h2>Anchor Positioning + Grid (Concept)</h2>
// <div class="grid">
//   <button id="btn">Hover</button>
//   <div class="tooltip">Tooltip near the button</div>
// </div>
// </body>
// </html>`,
//         quiz: "Which feature positions elements relative to another element (tooltips/popovers)?",
//         answer: "Anchor Positioning"
//     },

//     "css-masonry-native": {
//         title: "CSS Masonry Layout (native)",
//         history: "Native support for staggered, masonry-style layouts is emerging. Syntax and support vary; ideal for Pinterest-like grids.",
//         code: `<!DOCTYPE html>
// <html>
// <head>
// <meta charset="UTF-8">
// <title>CSS Masonry (Native-ish)</title>
// <style>
//   .grid {
//     display: grid;
//     grid-template-columns: repeat(4, 1fr);
//     gap: 12px;
//     /* Masonry support is experimental; replace with supported syntax when available */
//   }
//   .card { background: #f0fff4; min-height: 60px; padding: 10px; }
//   .card:nth-child(odd) { min-height: 130px; }
// </style>
// </head>
// <body>
// <h2>CSS Masonry Layout</h2>
// <div class="grid">
//   <div class="card">1</div><div class="card">2</div><div class="card">3</div><div class="card">4</div>
//   <div class="card">5</div><div class="card">6</div><div class="card">7</div><div class="card">8</div>
// </div>
// </body>
// </html>`,
//         quiz: "Which layout provides native staggered columns similar to Pinterest?",
//         answer: "CSS Masonry Layout"
//     },

//     "css-subgrid-improvements": {
//         title: "CSS Subgrid improvements",
//         history: "Expands control for nested grids with subgrid on columns and rows, improving alignment and consistent gutters.",
//         code: `<!DOCTYPE html>
// <html>
// <head>
// <meta charset="UTF-8">
// <title>Subgrid Improvements Example</title>
// <style>
//   .parent {
//     display: grid;
//     grid-template-columns: 160px 1fr 1fr;
//     grid-template-rows: auto auto;
//     gap: 12px;
//   }
//   .child {
//     display: grid;
//     grid-template-columns: subgrid;
//     grid-template-rows: subgrid;
//     grid-column: 1 / -1;
//     grid-row: 2;
//     gap: 12px;
//   }
//   .box { background: #f8e7ff; padding: 8px; }
// </style>
// </head>
// <body>
// <h2>CSS Subgrid Improvements</h2>
// <div class="parent">
//   <div class="box">Header</div><div class="box">Nav</div><div class="box">Actions</div>
//   <div class="child">
//     <div class="box">Post 1</div><div class="box">Post 2</div><div class="box">Post 3</div>
//   </div>
// </div>
// </body>
// </html>`,
//         quiz: "Which feature lets nested grids reuse parent rows and columns?",
//         answer: "subgrid (rows and columns)"
//     }
// };
const tagData = {
  "grid-auto-rows": {
    "title": "grid-auto-rows Property",
    "history": "Defines the size of rows that are created implicitly when grid items are placed outside the explicit grid.",
    "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>grid-auto-rows Example</title>\n<style>\n  .grid {\n    display: grid;\n    grid-template-columns: 120px 120px;\n    grid-auto-rows: 80px; /* implicit rows will be 80px high */\n    gap: 10px;\n    background: #f7f9fb;\n    padding: 12px;\n  }\n  .item { background: #cfeffd; display: flex; align-items: center; justify-content: center; }\n</style>\n</head>\n<body>\n<h2>CSS grid-auto-rows Example</h2>\n<p>Items that overflow the explicit grid create implicit rows sized by <code>grid-auto-rows</code>.</p>\n<div class=\"grid\">\n  <div class=\"item\">1</div>\n  <div class=\"item\">2</div>\n  <div class=\"item\">3 (implicit row)</div>\n  <div class=\"item\">4 (implicit row)</div>\n</div>\n</body>\n</html>",
    "quiz": "Which property defines the size of implicitly created rows in a grid?",
    "answer": "grid-auto-rows"
  },

  "grid-auto-columns": {
    "title": "grid-auto-columns Property",
    "history": "Defines the size of columns that are created implicitly when items are placed outside the explicit grid.",
    "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>grid-auto-columns Example</title>\n<style>\n  .grid {\n    display: grid;\n    grid-template-rows: 80px 80px;\n    grid-auto-columns: 140px; /* implicit columns will be 140px wide */\n    gap: 10px;\n    background: #fff8e6;\n    padding: 12px;\n  }\n  .item { background: #dff7d8; display:flex; align-items:center; justify-content:center; }\n</style>\n</head>\n<body>\n<h2>CSS grid-auto-columns Example</h2>\n<p>An item placed outside the explicit columns will create implicit columns sized by <code>grid-auto-columns</code>.</p>\n<div class=\"grid\">\n  <div class=\"item\" style=\"grid-row:1; grid-column:1;\">A</div>\n  <div class=\"item\" style=\"grid-row:2; grid-column:3;\">B (creates implicit column)</div>\n</div>\n</body>\n</html>",
    "quiz": "Which property defines the size of implicitly created columns in a grid?",
    "answer": "grid-auto-columns"
  },

  "grid-auto-flow": {
    "title": "grid-auto-flow Property",
    "history": "Controls how auto-placed items are inserted into the grid: by row, by column, and whether the placement is dense (fills gaps).",
    "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>grid-auto-flow Example</title>\n<style>\n  .grid {\n    display: grid;\n    grid-template-columns: repeat(3, 100px);\n    grid-auto-flow: row; /* try 'column' or 'row dense' */\n    gap: 8px;\n    padding: 12px;\n    background: #f3f6ff;\n  }\n  .item { background:#ffdede; height:60px; display:flex; align-items:center; justify-content:center; }\n</style>\n</head>\n<body>\n<h2>CSS grid-auto-flow Example</h2>\n<p>Change <code>grid-auto-flow</code> to see items fill by rows or columns.</p>\n<div class=\"grid\">\n  <div class=\"item\">1</div>\n  <div class=\"item\">2</div>\n  <div class=\"item\">3</div>\n  <div class=\"item\">4</div>\n  <div class=\"item\">5</div>\n</div>\n</body>\n</html>",
    "quiz": "Which property controls the auto-placement behavior of grid items?",
    "answer": "grid-auto-flow"
  },

  "grid-column": {
    "title": "grid-column Property",
    "history": "Specifies a grid item's column start and end lines (or span) to control horizontal placement.",
    "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>grid-column Example</title>\n<style>\n  .grid { display:grid; grid-template-columns: repeat(4, 1fr); gap:8px; padding:12px; background:#fffaf0; }\n  .item { background:#e6f0ff; padding:12px; }\n  .wide { grid-column: 1 / 3; }\n  .span { grid-column: span 2; }\n</style>\n</head>\n<body>\n<h2>CSS grid-column Example</h2>\n<div class=\"grid\">\n  <div class=\"item wide\">Wide (1 / 3)</div>\n  <div class=\"item\">A</div>\n  <div class=\"item span\">Span 2</div>\n  <div class=\"item\">B</div>\n</div>\n</body>\n</html>",
    "quiz": "Which property defines a grid item's column start and end positions?",
    "answer": "grid-column"
  },

  "grid-row": {
    "title": "grid-row Property",
    "history": "Specifies a grid item's row start and end lines (or span) to control vertical placement.",
    "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>grid-row Example</title>\n<style>\n  .grid { display:grid; grid-template-rows: repeat(4, 60px); grid-template-columns: 1fr 1fr; gap:8px; padding:12px; background:#f7fff2; }\n  .item { background:#ffe8d6; display:flex; align-items:center; justify-content:center; }\n  .tall { grid-row: 1 / 3; }\n</style>\n</head>\n<body>\n<h2>CSS grid-row Example</h2>\n<div class=\"grid\">\n  <div class=\"item tall\">Tall (1 / 3)</div>\n  <div class=\"item\">1</div>\n  <div class=\"item\">2</div>\n  <div class=\"item\">3</div>\n</div>\n</body>\n</html>",
    "quiz": "Which property defines a grid item's row start and end positions?",
    "answer": "grid-row"
  },

  "grid-area": {
    "title": "grid-area Property",
    "history": "Shorthand for setting grid-row-start, grid-column-start, grid-row-end and grid-column-end; can also reference named areas.",
    "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>grid-area Example</title>\n<style>\n  .grid { display:grid; grid-template-columns: 120px 1fr; grid-template-rows: 60px 1fr; gap:8px; padding:12px; background:#f0f7ff; }\n  .header { grid-area: 1 / 1 / 2 / 3; background:#cfe8ff; padding:10px; }\n  .sidebar { grid-area: 2 / 1 / 3 / 2; background:#e8f7e8; padding:10px; }\n  .main { grid-area: 2 / 2 / 3 / 3; background:#fff1d6; padding:10px; }\n</style>\n</head>\n<body>\n<h2>CSS grid-area Example</h2>\n<div class=\"grid\">\n  <div class=\"header\">Header (1 / 1 / 2 / 3)</div>\n  <div class=\"sidebar\">Sidebar</div>\n  <div class=\"main\">Main</div>\n</div>\n</body>\n</html>",
    "quiz": "Which property is shorthand for defining a grid item's area using start/end lines?",
    "answer": "grid-area"
  },

  "fr-unit": {
    "title": "fr Unit",
    "history": "The <code>fr</code> unit represents a fraction of the available space in the grid container and is commonly used in <code>grid-template-columns</code> and <code>grid-template-rows</code>.",
    "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>fr Unit Example</title>\n<style>\n  .grid { display:grid; grid-template-columns: 1fr 2fr 1fr; gap:8px; padding:12px; background:#f9fbff; }\n  .item { background:#e9f0ff; padding:12px; }\n</style>\n</head>\n<body>\n<h2>CSS fr Unit Example</h2>\n<p>Columns sized with <code>1fr 2fr 1fr</code> — middle column gets twice the free space.</p>\n<div class=\"grid\">\n  <div class=\"item\">1fr</div>\n  <div class=\"item\">2fr (wider)</div>\n  <div class=\"item\">1fr</div>\n</div>\n</body>\n</html>",
    "quiz": "Which unit represents a fraction of the available space in CSS Grid?",
    "answer": "fr"
  },

  "repeat": {
    "title": "repeat() Function",
    "history": "The <code>repeat()</code> function repeats track definitions in <code>grid-template-columns</code> or <code>grid-template-rows</code>, making templates concise and responsive.",
    "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>repeat() Example</title>\n<style>\n  .grid { display:grid; grid-template-columns: repeat(4, 1fr); gap:8px; padding:12px; background:#fff7fb; }\n  .item { background:#f0e8ff; padding:12px; }\n</style>\n</head>\n<body>\n<h2>CSS repeat() Example</h2>\n<p><code>repeat(4, 1fr)</code> creates four equal columns.</p>\n<div class=\"grid\">\n  <div class=\"item\">A</div>\n  <div class=\"item\">B</div>\n  <div class=\"item\">C</div>\n  <div class=\"item\">D</div>\n</div>\n</body>\n</html>",
    "quiz": "Which function repeats track sizes in CSS Grid templates?",
    "answer": "repeat()"
  },

  "minmax": {
    "title": "minmax() Function",
    "history": "Defines a size range for grid tracks, specifying a minimum and maximum size for a column or row.",
    "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>minmax() Example</title>\n<style>\n  .grid { display:grid; grid-template-columns: repeat(3, minmax(120px, 1fr)); gap:8px; padding:12px; background:#f2fff6; }\n  .item { background:#dff7e6; padding:12px; }\n</style>\n</head>\n<body>\n<h2>CSS minmax() Example</h2>\n<p>Each column is at least 120px but can grow to share remaining space.</p>\n<div class=\"grid\">\n  <div class=\"item\">Box 1</div>\n  <div class=\"item\">Box 2</div>\n  <div class=\"item\">Box 3</div>\n</div>\n</body>\n</html>",
    "quiz": "Which function defines a minimum and maximum size for a grid track?",
    "answer": "minmax()"
  },

  "auto-fit-fill": {
    "title": "auto-fit / auto-fill",
    "history": "Used with <code>repeat()</code> and <code>minmax()</code> to create responsive tracks that either fit items into available space (<code>auto-fit</code>) or fill the row with empty tracks (<code>auto-fill</code>).",
    "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>auto-fit / auto-fill Example</title>\n<style>\n  .grid { display:grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap:12px; padding:12px; background:#fff8f2; }\n  .item { background:#ffeedd; padding:18px; text-align:center; }\n</style>\n</head>\n<body>\n<h2>auto-fit / auto-fill Example</h2>\n<p>Resize the window to see how columns adapt using <code>auto-fit</code>.</p>\n<div class=\"grid\">\n  <div class=\"item\">1</div>\n  <div class=\"item\">2</div>\n  <div class=\"item\">3</div>\n  <div class=\"item\">4</div>\n  <div class=\"item\">5</div>\n</div>\n</body>\n</html>",
    "quiz": "Which keywords auto-distribute tracks to fit or fill available space?",
    "answer": "auto-fit / auto-fill"
  },

  "subgrid": {
    "title": "subgrid",
    "history": "Allows a nested grid to inherit track definitions from its parent grid so child items align to the parent's tracks.",
    "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>subgrid Example</title>\n<style>\n  .parent { display:grid; grid-template-columns: 120px 1fr; grid-auto-rows: 60px; gap:8px; padding:12px; background:#f7f7ff; }\n  .child { display:grid; grid-template-columns: subgrid; grid-auto-rows: subgrid; gap:6px; }\n  .box { background:#e8eaff; padding:8px; }\n</style>\n</head>\n<body>\n<h2>CSS subgrid Example</h2>\n<p>Nested grid uses the parent's column and row tracks via <code>subgrid</code>.</p>\n<div class=\"parent\">\n  <div class=\"box\">Left</div>\n  <div class=\"child\">\n    <div class=\"box\">Child A</div>\n    <div class=\"box\">Child B</div>\n  </div>\n</div>\n</body>\n</html>",
    "quiz": "Which keyword allows nested grids to inherit track definitions from the parent?",
    "answer": "subgrid"
  },

  "justify-items": {
    "title": "justify-items Property",
    "history": "Aligns grid items along the inline (row) axis inside their grid area (start, center, end, stretch).",
    "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>justify-items Example</title>\n<style>\n  .grid { display:grid; grid-template-columns: repeat(3, 1fr); gap:8px; padding:12px; background:#f0fff8; justify-items: center; }\n  .item { background:#dff3ea; padding:18px; }\n</style>\n</head>\n<body>\n<h2>CSS justify-items Example</h2>\n<p>Items are centered horizontally within their grid cells using <code>justify-items: center</code>.</p>\n<div class=\"grid\">\n  <div class=\"item\">A</div>\n  <div class=\"item\">B</div>\n  <div class=\"item\">C</div>\n</div>\n</body>\n</html>",
    "quiz": "Which property aligns items along the inline (row) axis inside their grid area?",
    "answer": "justify-items"
  },

  "align-items-grid": {
    "title": "align-items Property",
    "history": "Aligns grid items along the block (column) axis inside their grid area (start, center, end, stretch).",
    "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>align-items Example</title>\n<style>\n  .grid { display:grid; grid-template-columns: repeat(3, 1fr); gap:8px; padding:12px; background:#fff6f6; align-items: center; }\n  .item { background:#ffdfe6; height:80px; display:flex; align-items:center; justify-content:center; }\n</style>\n</head>\n<body>\n<h2>CSS align-items Example</h2>\n<p>Items are vertically centered within their grid cells using <code>align-items: center</code>.</p>\n<div class=\"grid\">\n  <div class=\"item\">1</div>\n  <div class=\"item\">2</div>\n  <div class=\"item\">3</div>\n</div>\n</body>\n</html>",
    "quiz": "Which property aligns items along the block (column) axis inside their grid area?",
    "answer": "align-items"
  },

  "place-items": {
    "title": "place-items Property",
    "history": "Shorthand for setting both <code>align-items</code> and <code>justify-items</code> in one declaration.",
    "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>place-items Example</title>\n<style>\n  .grid { display:grid; grid-template-columns: repeat(3, 1fr); gap:8px; padding:12px; background:#f7f2ff; place-items: center; }\n  .item { background:#e9ddff; padding:18px; }\n</style>\n</head>\n<body>\n<h2>CSS place-items Example</h2>\n<p><code>place-items: center</code> centers items both horizontally and vertically.</p>\n<div class=\"grid\">\n  <div class=\"item\">A</div>\n  <div class=\"item\">B</div>\n  <div class=\"item\">C</div>\n</div>\n</body>\n</html>",
    "quiz": "Which shorthand sets both align-items and justify-items?",
    "answer": "place-items"
  },

  "place-content": {
    "title": "place-content Property",
    "history": "Shorthand for setting both <code>align-content</code> and <code>justify-content</code>, controlling how the whole grid content is distributed within the container.",
    "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>place-content Example</title>\n<style>\n  .grid { display:grid; grid-template-columns: repeat(2, 1fr); grid-auto-rows: 80px; gap:8px; height:300px; padding:12px; background:#f0f7ff; place-content: space-between center; }\n  .item { background:#dff0ff; display:flex; align-items:center; justify-content:center; }\n</style>\n</head>\n<body>\n<h2>CSS place-content Example</h2>\n<p><code>place-content</code> controls distribution of the grid as a whole inside the container.</p>\n<div class=\"grid\">\n  <div class=\"item\">Top</div>\n  <div class=\"item\">Middle</div>\n  <div class=\"item\">Bottom</div>\n</div>\n</body>\n</html>",
    "quiz": "Which shorthand sets both align-content and justify-content?",
    "answer": "place-content"
  },

  "grid-template-areas": {
    "title": "grid-template-areas Property",
    "history": "Defines named areas in a grid template so items can be placed by area name for readable layout definitions.",
    "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>grid-template-areas Example</title>\n<style>\n  .grid { display:grid; grid-template-columns: 200px 1fr; grid-template-rows: auto 1fr auto; grid-template-areas: 'header header' 'sidebar main' 'footer footer'; gap:8px; padding:12px; background:#fffaf5; }\n  .header { grid-area: header; background:#ffdca8; padding:12px; }\n  .sidebar { grid-area: sidebar; background:#e6f7ff; padding:12px; }\n  .main { grid-area: main; background:#e8ffd8; padding:12px; }\n  .footer { grid-area: footer; background:#f0e8ff; padding:12px; }\n</style>\n</head>\n<body>\n<h2>CSS grid-template-areas Example</h2>\n<div class=\"grid\">\n  <div class=\"header\">Header</div>\n  <div class=\"sidebar\">Sidebar</div>\n  <div class=\"main\">Main content</div>\n  <div class=\"footer\">Footer</div>\n</div>\n</body>\n</html>",
    "quiz": "Which property defines named areas for layout in CSS Grid?",
    "answer": "grid-template-areas"
  },

  "grid-auto-flow-dense": {
    "title": "grid-auto-flow: dense",
    "history": "The <code>dense</code> keyword attempts to fill holes in the grid by backfilling smaller items, improving packing but possibly changing source order.",
    "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>grid-auto-flow: dense Example</title>\n<style>\n  .grid { display:grid; grid-template-columns: repeat(3, 120px); grid-auto-rows: 80px; grid-auto-flow: row dense; gap:8px; padding:12px; background:#f8fff4; }\n  .item { background:#e6ffe6; display:flex; align-items:center; justify-content:center; }\n  .big { grid-column: span 2; grid-row: span 2; }\n</style>\n</head>\n<body>\n<h2>grid-auto-flow: dense Example</h2>\n<p>Dense packing may reorder placement to fill gaps.</p>\n<div class=\"grid\">\n  <div class=\"item big\">Big</div>\n  <div class=\"item\">1</div>\n  <div class=\"item\">2</div>\n  <div class=\"item\">3</div>\n  <div class=\"item\">4</div>\n</div>\n</body>\n</html>",
    "quiz": "Which value of grid-auto-flow attempts to backfill gaps with smaller items?",
    "answer": "dense"
  },

  "masonry-layout": {
    "title": "Masonry Layout (experimental)",
    "history": "Experimental approaches and proposals allow masonry-style layouts where items flow vertically into columns of varying heights; browser support is evolving.",
    "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>Masonry Example (concept)</title>\n<style>\n  /* Note: true CSS masonry is experimental; this is a conceptual fallback using column layout */\n  .masonry { column-count: 3; column-gap: 12px; padding:12px; }\n  .item { break-inside: avoid; background:#fff0f0; margin-bottom:12px; padding:12px; }\n</style>\n</head>\n<body>\n<h2>Masonry Layout Example (fallback)</h2>\n<p>True CSS masonry is experimental; this example uses multi-column fallback.</p>\n<div class=\"masonry\">\n  <div class=\"item\">Short</div>\n  <div class=\"item\">A bit taller content</div>\n  <div class=\"item\">Much taller content to show masonry effect</div>\n  <div class=\"item\">Short</div>\n</div>\n</body>\n</html>",
    "quiz": "Which layout arranges items like bricks in columns of varying heights?",
    "answer": "masonry layout"
  },

  "aspect-ratio-grid": {
    "title": "aspect-ratio + Grid",
    "history": "Combining <code>aspect-ratio</code> with grid tracks helps maintain consistent media or card proportions inside grid cells.",
    "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>aspect-ratio + Grid Example</title>\n<style>\n  .grid { display:grid; grid-template-columns: repeat(3, 1fr); gap:12px; padding:12px; }\n  .card { background:#f0f8ff; padding:8px; }\n  .media { background:#dfefff; aspect-ratio: 16 / 9; width:100%; }\n</style>\n</head>\n<body>\n<h2>aspect-ratio + Grid Example</h2>\n<div class=\"grid\">\n  <div class=\"card\"><div class=\"media\"></div></div>\n  <div class=\"card\"><div class=\"media\"></div></div>\n  <div class=\"card\"><div class=\"media\"></div></div>\n</div>\n</body>\n</html>",
    "quiz": "Which property ensures elements keep a fixed width-to-height ratio in grid cells?",
    "answer": "aspect-ratio"
  },

  "css-shapes-grid": {
    "title": "CSS Shapes + Grid",
    "history": "Combining CSS Shapes with grid positioning enables creative layouts where content wraps around shapes while still using grid placement.",
    "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>CSS Shapes + Grid Example</title>\n<style>\n  .wrap { display:grid; grid-template-columns: 200px 1fr; gap:12px; padding:12px; }\n  .shape { width:180px; height:180px; float:left; shape-outside: circle(50%); -webkit-shape-outside: circle(50%); background:#ffdede; }\n  .content { background:#fffaf0; padding:12px; }\n</style>\n</head>\n<body>\n<h2>CSS Shapes + Grid Example (concept)</h2>\n<div class=\"wrap\">\n  <div class=\"shape\"></div>\n  <div class=\"content\">Text flows around the circular shape while grid controls overall layout.</div>\n</div>\n</body>\n</html>",
    "quiz": "Which feature combines content wrapping shapes with grid positioning?",
    "answer": "CSS Shapes + Grid"
  },

  "container-queries-grid": {
    "title": "Container Queries + Grid",
    "history": "Container queries let grid layouts adapt based on the size of their container rather than the viewport, enabling more modular responsive components.",
    "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>Container Queries + Grid Example</title>\n<style>\n  .card { container-type: inline-size; border:1px solid #ddd; padding:12px; }\n  .grid { display:grid; gap:8px; }\n  @container (min-width: 400px) {\n    .grid { grid-template-columns: 1fr 1fr; }\n  }\n  @container (max-width: 399px) {\n    .grid { grid-template-columns: 1fr; }\n  }\n  .item { background:#eef6ff; padding:12px; }\n</style>\n</head>\n<body>\n<h2>Container Queries + Grid Example</h2>\n<div class=\"card\">\n  <div class=\"grid\">\n    <div class=\"item\">A</div>\n    <div class=\"item\">B</div>\n    <div class=\"item\">C</div>\n  </div>\n</div>\n</body>\n</html>",
    "quiz": "Which feature adapts grid layout based on the container size instead of the viewport?",
    "answer": "container queries"
  },

  "anchor-positioning-grid": {
    "title": "Anchor Positioning (experimental)",
    "history": "Anchor positioning is an experimental feature that allows elements (like tooltips) to be positioned relative to anchor nodes; integration with grid enables precise anchored overlays.",
    "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>Anchor Positioning (concept)</title>\n<style>\n  /* Anchor positioning is experimental; this is a conceptual example */\n  .grid { display:grid; grid-template-columns: 1fr 1fr; gap:12px; padding:12px; }\n  .anchor { background:#fff0f0; padding:12px; }\n  .tooltip { position:absolute; background:#222; color:#fff; padding:6px; border-radius:6px; }\n</style>\n</head>\n<body>\n<h2>Anchor Positioning (concept)</h2>\n<div style=\"position:relative;\">\n  <div class=\"grid\">\n    <div class=\"anchor\" id=\"a1\">Anchor 1</div>\n    <div class=\"anchor\">Anchor 2</div>\n  </div>\n  <div class=\"tooltip\" style=\"top:40px; left:20px;\">Tooltip near anchor</div>\n</div>\n</body>\n</html>",
    "quiz": "Which experimental feature positions elements relative to anchor nodes?",
    "answer": "anchor positioning"
  },

  "css-masonry": {
    "title": "CSS Masonry Layout (experimental)",
    "history": "Newer specs and proposals introduce masonry-style layouts natively in CSS; support varies across browsers and is still evolving.",
    "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>CSS Masonry (concept)</title>\n<style>\n  /* Native masonry is experimental; this is a conceptual fallback */\n  .masonry { column-count: 3; column-gap: 12px; padding:12px; }\n  .item { break-inside: avoid; background:#f0f0ff; margin-bottom:12px; padding:12px; }\n</style>\n</head>\n<body>\n<h2>CSS Masonry Example (fallback)</h2>\n<div class=\"masonry\">\n  <div class=\"item\">Short</div>\n  <div class=\"item\">Taller content</div>\n  <div class=\"item\">Even taller content to show masonry effect</div>\n</div>\n</body>\n</html>",
    "quiz": "Which new layout spec introduces masonry-style arrangements in CSS?",
    "answer": "CSS Masonry Layout"
  },

  "subgrid-improvements": {
    "title": "CSS Subgrid Improvements",
    "history": "Ongoing improvements to the <code>subgrid</code> feature aim to make nested grid track sharing more powerful and predictable across complex layouts.",
    "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>subgrid Improvements (concept)</title>\n<style>\n  .parent { display:grid; grid-template-columns: 120px 1fr 1fr; grid-auto-rows: 60px; gap:8px; padding:12px; }\n  .child { display:grid; grid-template-columns: subgrid; grid-auto-rows: subgrid; gap:6px; }\n  .box { background:#eef2ff; padding:8px; }\n</style>\n</head>\n<body>\n<h2>CSS Subgrid Improvements (concept)</h2>\n<div class=\"parent\">\n  <div class=\"box\">Left</div>\n  <div class=\"child\">\n    <div class=\"box\">Child 1</div>\n    <div class=\"box\">Child 2</div>\n  </div>\n  <div class=\"box\">Right</div>\n</div>\n</body>\n</html>",
    "quiz": "Which feature improves nested grid track sharing for complex layouts?",
    "answer": "subgrid improvements"
  }
};

function openModal(tag) {
  document.getElementById('modal').style.display = 'flex';
  document.getElementById('modal-title').innerHTML = tagData[tag].title;
  document.getElementById('modal-history').innerHTML = tagData[tag].history;
  document.getElementById('modal-editor').value = tagData[tag].code;
  document.getElementById('live-preview').srcdoc = tagData[tag].code;
  document.getElementById('quiz-question').innerHTML = tagData[tag].quiz;
  document.getElementById('quiz-answer').value = '';
  document.getElementById('quiz-feedback').innerHTML = '';
  document.getElementById('quiz').setAttribute('data-tag', tag);
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

function copyCode() {
  const code = document.getElementById('modal-editor').value;
  navigator.clipboard.writeText(code).then(() => {
    alert('🎉 Code Copied! 🎉');
  });
}

function runLiveCode() {
  const code = document.getElementById('modal-editor').value;
  document.getElementById('live-preview').srcdoc = code;
}

function checkAnswer() {
  const tag = document.getElementById('quiz').getAttribute('data-tag');
  const answer = document.getElementById('quiz-answer').value.trim().toLowerCase();
  const correct = tagData[tag].answer.toLowerCase();

  if (answer === correct) {
    document.getElementById('quiz-feedback').innerHTML = "<span style='color:green;'>Correct!</span>";
  } else {
    document.getElementById('quiz-feedback').innerHTML = "<span style='color:red;'>Try again!</span>";
  }
}

function searchTag() {
  const input = document.getElementById('searchBar').value.toLowerCase();
  const cards = document.querySelectorAll('.tag-card');

  cards.forEach(card => {
    const tag = card.textContent.toLowerCase(); // card ka text
    if (tag.includes(input)) {
      card.style.display = "inline-block"; // show match
      card.classList.add("highlight");
    } else {
      card.style.display = "none"; // hide non-match
      card.classList.remove("highlight");
    }
  });


  if (input === "") {
    cards.forEach(card => {
      card.style.display = "inline-block";
      card.classList.remove("highlight");
    });
  }
}
