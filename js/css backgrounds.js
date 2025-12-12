const tagData = {
  "background-image": {
    "title": "background-image Property",
    "history": "The background-image property sets an image as the background of an element.",
    "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>Background-Image Example</title>\n<style>\n  .box {\n    width: 200px;\n    height: 100px;\n    background-image: url('bg.png');\n    background-size: cover;\n  }\n</style>\n</head>\n<body>\n<h2>CSS background-image Property Example</h2>\n<div class=\"box\">This box has an image background.</div>\n</body>\n</html>",
    "quiz": "Which property sets an image as the background of an element?",
    "answer": "background-image"
  },

  "background-repeat": {
    "title": "background-repeat Property",
    "history": "The background-repeat property controls how a background image is repeated.",
    "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>Background-Repeat Example</title>\n<style>\n  .box {\n    width: 200px;\n    height: 100px;\n    background-image: url('bg.png');\n    background-repeat: no-repeat;\n  }\n</style>\n</head>\n<body>\n<h2>CSS background-repeat Property Example</h2>\n<div class=\"box\">This box has no-repeat background image.</div>\n</body>\n</html>",
    "quiz": "Which property controls how a background image is repeated?",
    "answer": "background-repeat"
  },

  "background-position": {
    "title": "background-position Property",
    "history": "The background-position property sets the starting position of a background image.",
    "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>Background-Position Example</title>\n<style>\n  .box {\n    width: 200px;\n    height: 100px;\n    background-image: url('bg.png');\n    background-repeat: no-repeat;\n    background-position: center;\n  }\n</style>\n</head>\n<body>\n<h2>CSS background-position Property Example</h2>\n<div class=\"box\">This box has background image centered.</div>\n</body>\n</html>",
    "quiz": "Which property sets the starting position of a background image?",
    "answer": "background-position"
  },

  "background-size": {
    "title": "background-size Property",
    "history": "The background-size property specifies the size of the background image.",
    "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>Background-Size Example</title>\n<style>\n  .box {\n    width: 200px;\n    height: 100px;\n    background-image: url('bg.png');\n    background-size: cover;\n  }\n</style>\n</head>\n<body>\n<h2>CSS background-size Property Example</h2>\n<div class=\"box\">This box uses background-size: cover.</div>\n</body>\n</html>",
    "quiz": "Which property specifies the size of the background image?",
    "answer": "background-size"
  },

  "background-attachment": {
    "title": "background-attachment Property",
    "history": "The background-attachment property determines if the background scrolls with the page or stays fixed.",
    "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>Background-Attachment Example</title>\n<style>\n  body {\n    background-image: url('bg.png');\n    background-attachment: fixed;\n    background-size: cover;\n  }\n</style>\n</head>\n<body>\n<h2>CSS background-attachment Property Example</h2>\n<p>This page has a fixed background image.</p>\n</body>\n</html>",
    "quiz": "Which property determines if the background scrolls or stays fixed?",
    "answer": "background-attachment"
  },
  "background-origin": {
    "title": "background-origin Property",
    "history": "The background-origin property specifies the positioning area for background images (border-box, padding-box, content-box).",
    "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>Background-Origin Example</title>\n<style>\n  .box {\n    width: 200px;\n    height: 100px;\n    border: 10px solid red;\n    background-image: url('bg.png');\n    background-repeat: no-repeat;\n    background-origin: border-box;\n  }\n</style>\n</head>\n<body>\n<h2>CSS background-origin Property Example</h2>\n<div class=\"box\">Background positioned from border-box.</div>\n</body>\n</html>",
    "quiz": "Which property specifies the positioning area for background images?",
    "answer": "background-origin"
  },

  "background-blend-mode": {
    "title": "background-blend-mode Property",
    "history": "The background-blend-mode property blends multiple background layers together, similar to Photoshop blend modes.",
    "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>Background-Blend-Mode Example</title>\n<style>\n  .box {\n    width: 200px;\n    height: 100px;\n    background-image: url('bg.png'), linear-gradient(to right, red, blue);\n    background-blend-mode: multiply;\n  }\n</style>\n</head>\n<body>\n<h2>CSS background-blend-mode Property Example</h2>\n<div class=\"box\">Background layers blended with multiply.</div>\n</body>\n</html>",
    "quiz": "Which property blends multiple background layers together?",
    "answer": "background-blend-mode"
  },

  "multiple-backgrounds": {
    "title": "Multiple Backgrounds",
    "history": "CSS allows multiple background images or colors on a single element, separated by commas.",
    "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>Multiple Backgrounds Example</title>\n<style>\n  .box {\n    width: 200px;\n    height: 100px;\n    background: url('a.png'), url('b.png');\n    background-size: cover, contain;\n  }\n</style>\n</head>\n<body>\n<h2>CSS Multiple Backgrounds Example</h2>\n<div class=\"box\">This box has two background images.</div>\n</body>\n</html>",
    "quiz": "How can you apply multiple background images to one element?",
    "answer": "Separate them with commas in background property"
  },

  "gradients": {
    "title": "Gradients",
    "history": "CSS gradients allow smooth transitions between colors without images (linear, radial, conic).",
    "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>Gradients Example</title>\n<style>\n  .box {\n    width: 200px;\n    height: 100px;\n    background: linear-gradient(to right, red, blue);\n  }\n</style>\n</head>\n<body>\n<h2>CSS Gradients Example</h2>\n<div class=\"box\">This box uses a linear gradient.</div>\n</body>\n</html>",
    "quiz": "Which CSS feature creates smooth color transitions without images?",
    "answer": "gradients"
  },

  "layering": {
    "title": "Background Layering",
    "history": "Each background layer can be controlled separately with properties like background-size, background-position, etc.",
    "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>Background Layering Example</title>\n<style>\n  .box {\n    width: 200px;\n    height: 100px;\n    background: url('a.png'), linear-gradient(to right, yellow, green);\n    background-size: contain, cover;\n  }\n</style>\n</head>\n<body>\n<h2>CSS Background Layering Example</h2>\n<div class=\"box\">This box has layered backgrounds.</div>\n</body>\n</html>",
    "quiz": "Which feature allows controlling each background layer separately?",
    "answer": "Background layering"
  },

  "conic-gradient": {
    "title": "conic-gradient() Function",
    "history": "The conic-gradient() function creates pie chart-like circular gradients without images.",
    "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>Conic-Gradient Example</title>\n<style>\n  .box {\n    width: 200px;\n    height: 200px;\n    background: conic-gradient(red, yellow, green, blue);\n    border-radius: 50%;\n  }\n</style>\n</head>\n<body>\n<h2>CSS conic-gradient() Example</h2>\n<div class=\"box\">This box uses conic-gradient.</div>\n</body>\n</html>",
    "quiz": "Which function creates pie chart-like circular gradients?",
    "answer": "conic-gradient()"
  },

  "background-clip-text": {
    "title": "background-clip: text",
    "history": "Using background-clip: text fills text with an image or gradient instead of solid color.",
    "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>Background-Clip Text Example</title>\n<style>\n  .text {\n    font-size: 40px;\n    background: linear-gradient(to right, red, blue);\n    -webkit-background-clip: text;\n    color: transparent;\n  }\n</style>\n</head>\n<body>\n<h2>CSS background-clip:text Example</h2>\n<p class=\"text\">Gradient Text</p>\n</body>\n</html>",
    "quiz": "Which property can fill text with an image or gradient?",
    "answer": "background-clip: text"
  },

  "css-logical-properties": {
    "title": "CSS Logical Properties for Background",
    "history": "Logical properties adapt background positioning to writing modes (inline vs block directions).",
    "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>CSS Logical Properties Example</title>\n<style>\n  .box {\n    width: 200px;\n    height: 100px;\n    background-image: url('bg.png');\n    background-position-inline: center;\n    background-position-block: start;\n  }\n</style>\n</head>\n<body>\n<h2>CSS Logical Properties Example</h2>\n<div class=\"box\">Background positioned using logical properties.</div>\n</body>\n</html>",
    "quiz": "Which properties adapt background positioning to writing modes?",
    "answer": "background-position-inline and background-position-block"
  },

  "system-colors": {
    "title": "System Colors",
    "history": "System colors adapt automatically to the operating system theme (light/dark mode).",
    "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>System Colors Example</title>\n<style>\n  .box {\n    width: 200px;\n    height: 100px;\n    background-color: Canvas;\n  }\n</style>\n</head>\n<body>\n<h2>CSS System Colors Example</h2>\n<div class=\"box\">This box uses system color Canvas.</div>\n</body>\n</html>",
    "quiz": "Which feature adapts background colors to OS theme automatically?",
    "answer": "System colors"
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
