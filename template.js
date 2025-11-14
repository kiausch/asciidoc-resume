module.exports = {
  paragraph: (node) => `<p class="paragraph">${node.getContent()}</p>`,
  document: (node) => `<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${node.getDocumentTitle()}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="infoBg"></div>
  <div id="content">
    ${node.getContent()}
  </div>
</body>`,
  section: (node) => {
        const title = node.getTitle() === '!' ? '' : `<h${node.getLevel()}>${node.getTitle()}</h${node.getLevel()}>`
        return `<div class="section section${node.getLevel()} ${node.getRole()}">
  ${title}
  ${node.getContent()}
</div>`
  }
}
