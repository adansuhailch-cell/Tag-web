/* const cssTextFonts = {
    "white-space": {
        title: "<h1> Heading Tag",
        history: "Since HTML 2, for headings h1-h6",
        code: "<h1>This is heading 1</h1>",
        quiz: "What tag is used for the largest heading?",
        answer: "h1"
    },
    "tab-size": {
        desc: "Specifies the width of tab characters.",
        example: `pre { tab-size: 4; }`,
        question: "Which property sets the width of tab characters?",
        answer: "tab-size"
    },
    "font-stretch": {
        desc: "Allows you to make text condensed or expanded.",
        example: `p { font-stretch: expanded; }`,
        question: "Which property controls whether text is condensed or expanded?",
        answer: "font-stretch"
    },
    "font": {
        desc: "Shorthand for setting font-style, font-variant, font-weight, font-size, line-height, and font-family.",
        example: `p { font: italic small-caps bold 16px/1.5 Arial; }`,
        question: "Which shorthand property sets multiple font values at once?",
        answer: "font"
    }
};
function openModal(tag) {
    const item = cssTextFonts[tag];
    if (!item) return;
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
    // hidden attribute 
    const tag = document.getElementById('quiz').getAttribute('data-tag');
    const answer = document.getElementById('quiz-answer').value.trim().toLowerCase();
    const correct = tagData[tag].answer.toLowerCase();

    if (answer === correct) {
        document.getElementById('quiz-feedback').innerHTML = "<span style='color:green;'>Correct!</span>";
    } else {
        document.getElementById('quiz-feedback').innerHTML = "<span style='color:red;'>Try again!</span>";
    }
}
// scrool button
document.getElementById("scrollTopBtn").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


document.getElementById("scrollBottomBtn").addEventListener("click", () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
});


window.addEventListener("scroll", () => {
    const topBtn = document.getElementById("scrollTopBtn");
    if (window.scrollY > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}); */

// Data object
const cssTextFonts = {
  "white-space": {
    title: "White-space Property",
    history: "Controls how whitespace inside an element is handled.",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>White Space Demo</title>
  <style>
    p {
      width: 300px;
      border: 2px solid black;
      padding: 10px;
      white-space: pre;
    }
  </style>
</head>
<body>
  <h1>White Space Property Demo</h1>
  <p>
This     is     a      demo    text
where      extra      spaces
and
line breaks
will be shown exactly as written.
  </p>
</body>
</html>`,
    quiz: "Which CSS property controls spaces and line breaks?",
    answer: "white-space"
  },
  "tab-size": {
    title: "Tab-size Property",
    history: "Specifies the width of tab characters.",
    code: `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Tab-size Example</title>
</head>
<body>
<pre style="tab-size: 4; -moz-tab-size: 4; white-space: pre;">
Item1	SubitemA
Item2	SubitemB
</pre>
<code style="display: block; white-space: pre; tab-size: 8; -moz-tab-size: 8;">
Name	Age	City
Ali	16	Karachi
</code>
</body>
</html>`,
    quiz: "Which property sets the width of tab characters?",
    answer: "tab-size"
  },
  "font-stretch": {
    title: "Font-stretch Property",
    history: "Controls how condensed or expanded the text appears.",
    code: `<!DOCTYPE html>
<html>
<head>
    <title>Font Stretch Example</title>
</head>
<body>
    <h2>Font-Stretch Example</h2>
    <p style="font-stretch: condensed; font-family: 'Arial';">
        This text is CONDENSED (narrow).
    </p>
    <p style="font-stretch: expanded; font-family: 'Arial';">
        This text is EXPANDED (wider).
    </p>
</body>
</html>`,
    quiz: "Which CSS property changes the width (condensed/expanded) of the font?",
    answer: "font-stretch"
  },
  "font": {
    title: "font (CSS Shorthand Property)",
    history: "The font shorthand property sets all the font-related properties in one declaration.",
    code: "p {\n  font: italic bold 16px/1.5 'Arial', sans-serif;\n}\n\n/* Equivalent to:\n   font-style: italic;\n   font-weight: bold;\n   font-size: 16px;\n   line-height: 1.5;\n   font-family: 'Arial', sans-serif; */",
    quiz: "Which CSS shorthand property is used to set multiple font properties at once?",
    answer: "font"
  },
  "width": {
    title: "Width Property",
    history: "Defines the width of an element's content box.",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Width Example</title>
  <!-- Internal CSS -->
  <style>
    .box {
      width: 300px;          /* element ki width fix kar di */
      height: 150px;         /* height bhi set kar di */
      background-color: lightblue;
      border: 2px solid navy;
      text-align: center;    /* text ko center align kiya */
      line-height: 150px;    /* text vertically center */
    }
  </style>
</head>
<body>
  <h2>CSS Width Property Example</h2>
  <div class="box">
    This box is 300px wide
  </div>
</body>
</html>`,
    quiz: "Which property sets the horizontal size of an element?",
    answer: "width"
  },
  "padding": {
    title: "padding Property",
    history: "Padding adds inner space between an element’s content and its border.",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Padding Example</title>
  <!-- Internal CSS -->
  <style>
    .box {
      width: 300px;
      height: 150px;
      background-color: lightgreen;
      border: 2px solid darkgreen;

      /* Padding adds space between content and border */
      padding: 30px;

      text-align: center;
    }
  </style>
</head>
<body>
  <h2>CSS Padding Property Example</h2>
  <div class="box">
    This box has 30px padding
  </div>
</body>
</html>`,
    quiz: "Which property sets the vertically size of an element?",
    answer: "padding"
  },
  "margin-top": {
    "title": "margin-top Property",
    "history": "The margin-top property adds space above an element, outside of its border.",
    "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Margin-Top Example</title>\n  <!-- Internal CSS -->\n  <style>\n    .box {\n      width: 300px;\n      height: 100px;\n      background-color: lightblue;\n      border: 2px solid navy;\n\n      /* Margin-top adds space above the element */\n      margin-top: 50px;\n\n      text-align: center;\n    }\n  </style>\n</head>\n<body>\n  <h2>CSS margin-top Property Example</h2>\n  <div class=\"box\">\n    This box has 50px margin-top\n  </div>\n</body>\n</html>",
    "quiz": "Which property adds space above an element, outside of its border?",
    "answer": "margin-top"
  },
  "background-color": {
    "title": "background-color Property",
    "history": "The background-color property sets the background color of an element.",
    "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>Background-Color Example</title>\n<style>\n  .box {\n    width: 200px;\n    height: 100px;\n    background-color: lightblue;\n  }\n</style>\n</head>\n<body>\n<h2>CSS background-color Property Example</h2>\n<div class=\"box\">This box has a lightblue background.</div>\n</body>\n</html>",
    "quiz": "Which property sets the background color of an element?",
    "answer": "background-color"
  },

  "background-clip": {
    "title": "background-clip Property",
    "history": "The background-clip property defines how far the background extends (border-box, padding-box, or content-box).",
    "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>Background-Clip Example</title>\n<style>\n  .box {\n    width: 200px;\n    height: 100px;\n    padding: 20px;\n    border: 5px dashed navy;\n    background: lightblue;\n    background-clip: content-box;\n  }\n</style>\n</head>\n<body>\n<h2>CSS background-clip Property Example</h2>\n<div class=\"box\">Background limited to content-box.</div>\n</body>\n</html>",
    "quiz": "Which property limits background painting area to border-box, padding-box, or content-box?",
    "answer": "background-clip"
  },
  "houdini": {
    title: "CSS Houdini Paint API",
    history: "The CSS Houdini Paint API allows developers to write custom CSS painting logic using JavaScript worklets.",
    code: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>CSS Houdini Paint API Example</title>\n<style>\n  .box {\n    width: 200px;\n    height: 100px;\n    background-image: paint(myPaint);\n  }\n</style>\n<script>\n  if (CSS.paintWorklet) {\n    CSS.paintWorklet.addModule('myPaint.js');\n  }\n</script>\n</head>\n<body>\n<h2>CSS Houdini Paint API Example</h2>\n<div class=\"box\">This box uses custom paint worklet.</div>\n</body>\n</html>\n\n/* myPaint.js file */\nregisterPaint('myPaint', class {\n  paint(ctx, size) {\n    ctx.fillStyle = 'lightblue';\n    ctx.fillRect(0, 0, size.width, size.height);\n    ctx.strokeStyle = 'darkblue';\n    ctx.lineWidth = 4;\n    ctx.strokeRect(0, 0, size.width, size.height);\n  }\n});",
    quiz: "Which API allows custom background rendering through JavaScript?",
    answer: "CSS Houdini Paint API"
  },

  "background-shorthand": {
    title: "background Property (Shorthand)",
    history: "The background property is a shorthand for setting all background-related properties in one declaration.",
    code: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>Background Shorthand Example</title>\n<style>\n  .box {\n    width: 200px;\n    height: 100px;\n    background: #f0f0f0 url('bg.png') no-repeat center/cover;\n    border: 1px solid #333;\n  }\n</style>\n</head>\n<body>\n<h2>CSS background Shorthand Example</h2>\n<div class=\"box\">This box uses background shorthand.</div>\n</body>\n</html>",
    quiz: "Which property is shorthand for setting all background properties?",
    answer: "background"
  },
  "tables-layout": {
    "title": "Tables for Layout (Legacy)",
    "history": "Tables were originally meant for tabular data but misused in the 90s for page layouts. They are heavy and not semantic.",
    "code": "<!DOCTYPE html>\n<html>\n<head>\n<meta charset=\"UTF-8\">\n<title>Table Layout Example</title>\n<style>\n  table { width: 100%; border: 1px solid black; }\n  td { border: 1px solid gray; padding: 10px; }\n</style>\n</head>\n<body>\n<h2>Legacy Table Layout Example</h2>\n<table>\n  <tr>\n    <td>Sidebar</td>\n    <td>Main Content</td>\n  </tr>\n</table>\n</body>\n</html>",
    "quiz": "Which legacy technique used tables for page layout in the 90s?",
    "answer": "Tables"
  },

  "flexbox": {
    "title": "Flexbox Layout",
    "history": "Flexbox is a modern one-dimensional layout system for arranging items in rows or columns. Perfect for navbars, cards, and forms.",
    "code": "<!DOCTYPE html>\n<html>\n<head>\n<meta charset=\"UTF-8\">\n<title>Flexbox Example</title>\n<style>\n  .container { display: flex; gap: 10px; }\n  .item { flex: 1; background: lightcoral; height: 80px; }\n</style>\n</head>\n<body>\n<h2>Flexbox Layout Example</h2>\n<div class=\"container\">\n  <div class=\"item\">Item 1</div>\n  <div class=\"item\">Item 2</div>\n  <div class=\"item\">Item 3</div>\n</div>\n</body>\n</html>",
    "quiz": "Which modern layout system is one-dimensional and perfect for navbars and cards?",
    "answer": "Flexbox"
  },

  "subgrid": {
    "title": "Subgrid Feature",
    "history": "Subgrid allows child elements to inherit parent grid tracks for consistent alignment.",
    "code": "<!DOCTYPE html>\n<html>\n<head>\n<meta charset=\"UTF-8\">\n<title>Subgrid Example</title>\n<style>\n  .parent { display: grid; grid-template-columns: 1fr 1fr; }\n  .child { display: grid; grid-template-columns: subgrid; }\n</style>\n</head>\n<body>\n<h2>CSS Subgrid Example</h2>\n<div class=\"parent\">\n  <div class=\"child\">Child inherits parent grid tracks</div>\n</div>\n</body>\n</html>",
    "quiz": "Which CSS Grid feature allows child elements to inherit parent grid tracks?",
    "answer": "Subgrid"
  },

  "multi-column-power": {
    "title": "Multi-column Layout",
    "history": "The multi-column layout creates newspaper-style columns for text content. Useful for magazines and articles.",
    "code": "<!DOCTYPE html>\n<html>\n<head>\n<meta charset=\"UTF-8\">\n<title>Multi-Column Layout Example</title>\n<style>\n  .text {\n    column-count: 3;\n    column-gap: 20px;\n  }\n</style>\n</head>\n<body>\n<h2>CSS Multi-Column Layout Example</h2>\n<div class=\"text\">\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n</div>\n</body>\n</html>",
    "quiz": "Which CSS feature creates newspaper-style columns?",
    "answer": "Multi-column Layout"
  },
  "flex-direction": {
    title: "flex-direction Property",
    history: "Defines the direction of flex items (row, row-reverse, column, column-reverse).",
    code: `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Flex-Direction Example</title>
<style>
  .container { display: flex; flex-direction: row-reverse; gap: 10px; }
  .item { background: lightblue; padding: 10px; }
</style>
</head>
<body>
<h2>CSS flex-direction Example</h2>
<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>
</body>
</html>`,
    quiz: "Which property defines the direction of flex items?",
    answer: "flex-direction"
  },

  "flex-wrap": {
    title: "flex-wrap Property",
    history: "Controls whether flex items wrap onto multiple lines (nowrap, wrap, wrap-reverse).",
    code: `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Flex-Wrap Example</title>
<style>
  .container { display: flex; flex-wrap: wrap; gap: 10px; }
  .item { width: 120px; height: 60px; background: lightgreen; }
</style>
</head>
<body>
<h2>CSS flex-wrap Example</h2>
<div class="container">
  <div class="item">Box 1</div>
  <div class="item">Box 2</div>
  <div class="item">Box 3</div>
  <div class="item">Box 4</div>
</div>
</body>
</html>`,
    quiz: "Which property controls whether flex items wrap onto multiple lines?",
    answer: "flex-wrap"
  },

  "justify-content": {
    title: "justify-content Property",
    history: "Aligns flex items along the main axis (flex-start, center, space-between, space-around, space-evenly).",
    code: `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Justify-Content Example</title>
<style>
  .container { display: flex; justify-content: space-between; background: lightyellow; padding: 10px; }
  .item { background: lightblue; padding: 10px; }
</style>
</head>
<body>
<h2>CSS justify-content Example</h2>
<div class="container">
  <div class="item">Item A</div>
  <div class="item">Item B</div>
  <div class="item">Item C</div>
</div>
</body>
</html>`,
    quiz: "Which property aligns flex items along the main axis?",
    answer: "justify-content"
  },
  "color-bg": {
    title: "color / background-color",
    history: "Set text color and element background color. Fundamental for visual design and accessibility.",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>color / background-color</title>
<style>
  .box {
    color: red;
    background-color: #f0f8ff;
    padding: 16px;
    border-radius: 8px;
  }
</style>
</head>
<body>
  <div class="box">This text is red on a light background.</div>
</body>
</html>`,
    quiz: "Which properties set text color and element background color?",
    answer: "color and background-color"
  },

  "opacity": {
    title: "opacity",
    history: "Controls element transparency; affects the element and its children. Useful for overlays and subtle UI effects.",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>opacity</title>
<style>
  .bg { background: #333; padding: 20px; color: white; }
  .overlay { background: rgba(255,255,255,0.8); opacity: 0.6; padding: 12px; }
</style>
</head>
<body>
  <div class="bg">
    <div class="overlay">Semi-transparent overlay (opacity: 0.6)</div>
  </div>
</body>
</html>`,
    quiz: "Which property controls element transparency?",
    answer: "opacity"
  },

  "box-shadow": {
    title: "box-shadow",
    history: "Adds shadow behind elements to create depth. Supports offsets, blur, spread, and color (including rgba for soft shadows).",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>box-shadow</title>
<style>
  .card {
    width: 280px;
    padding: 18px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.2);
  }
  body { background: #f4f6f8; display:flex; justify-content:center; align-items:center; height:100vh; }
</style>
</head>
<body>
  <div class="card">Card with box-shadow</div>
</body>
</html>`,
    quiz: "Which property adds a shadow behind elements?",
    answer: "box-shadow"
  },
  "transition": {
    title: "transition",
    history: "Smoothly animate property changes (hover, focus, class toggles). Simple and performant for UI micro-interactions.",
    code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>transition Example</title>
<style>
  .btn { background:#2563eb; color:#fff; padding:12px 18px; border-radius:8px; transition: all 0.3s ease; display:inline-block; }
  .btn:hover { transform: translateY(-6px); background:#1e40af; }
  body { font-family: Arial, sans-serif; padding:24px; }
</style>
</head>
<body>
  <button class="btn">Hover me</button>
</body>
</html>`,
    quiz: "Which property creates smooth hover/focus transitions?",
    answer: "transition"
  },

  "keyframes": {
    title: "@keyframes",
    history: "Defines animation keyframes (steps from→to or multiple stops). Used with animation-name to run CSS animations.",
    code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>@keyframes Example</title>
<style>
  @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
  .box { width:200px; height:100px; background:#f97316; color:#fff; display:flex; align-items:center; justify-content:center; animation: fadeIn 1s ease forwards; margin:24px; border-radius:8px; }
</style>
</head>
<body>
  <div class="box">Fade In</div>
</body>
</html>`,
    quiz: "Which at-rule defines animation steps?",
    answer: "@keyframes"
  },

  "animation-basics": {
    title: "animation-name / animation-duration / animation-delay",
    history: "Control which animation runs, how long it lasts, and when it starts. Core controls for CSS animations.",
    code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>animation controls</title>
<style>
  @keyframes slideUp { from { transform: translateY(20px); opacity:0 } to { transform: translateY(0); opacity:1 } }
  .card { width:260px; padding:18px; background:#06b6d4; color:#fff; border-radius:10px; animation-name: slideUp; animation-duration: 800ms; animation-delay: 300ms; animation-fill-mode: both; }
  body { font-family: Arial, sans-serif; padding:24px; }
</style>
</head>
<body>
  <div class="card">Animated card</div>
</body>
</html>`,
    quiz: "Which properties set animation identity, time, and start delay?",
    answer: "animation-name, animation-duration, animation-delay"
  },


};

// Modal functions
function openModal(tag) {
  const item = cssTextFonts[tag];
  if (!item) return;

  document.getElementById('modal').style.display = 'flex';
  document.getElementById('modal-title').innerHTML = item.title;
  document.getElementById('modal-history').innerHTML = item.history;
  document.getElementById('modal-editor').value = item.code;
  document.getElementById('live-preview').srcdoc = item.code;
  document.getElementById('quiz-question').innerHTML = item.quiz;
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
  const correct = cssTextFonts[tag].answer.toLowerCase();

  if (answer === correct) {
    document.getElementById('quiz-feedback').innerHTML = "<span style='color:green;'>Correct!</span>";
  } else {
    document.getElementById('quiz-feedback').innerHTML = "<span style='color:red;'>Try again!</span>";
  }
}

// Search function
function searchTag() {
  const input = document.getElementById('searchBar').value.toLowerCase();
  const cards = document.querySelectorAll('.tag-card');

  cards.forEach(card => {
    const tag = card.textContent.toLowerCase();
    if (tag.includes(input)) {
      card.style.display = "inline-block";
      card.classList.add("highlight");
    } else {
      card.style.display = "none";
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

// Scroll buttons
document.getElementById("scrollTopBtn").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById("scrollBottomBtn").addEventListener("click", () => {
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
});

window.addEventListener("scroll", () => {
  const topBtn = document.getElementById("scrollTopBtn");
  if (window.scrollY > 200) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});
