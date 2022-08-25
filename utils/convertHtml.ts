const convertHtml = (html: string) => {
  return `
    <link rel="stylesheet" href="${origin}/build.css">

    <script>
      document.addEventListener('DOMContentLoaded', () => {
        let links = [...document.querySelectorAll('a')]
        let forms = [...document.querySelectorAll('form')]

        links.forEach(link => link.addEventListener('click', (e) => e.preventDefault()))
        forms.forEach(form => form.addEventListener('submit', (e) => e.preventDefault()))
      })
    </script>

    <body>
      ${html}
    </body>
  `;
};

export default convertHtml;
