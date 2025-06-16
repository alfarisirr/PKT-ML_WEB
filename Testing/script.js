function jalankanKode() {
  const html = document.getElementById("html").value;
  const css = document.getElementById("css").value;
  const js = document.getElementById("js").value;

  const output = `
<!DOCTYPE html>
<html>
<head>
<style>${css}</style>
</head>
<body>
${html}
<script>
${js.replace(/<\/script>/g, "<\\/script>")}
<\/script>
</body>
</html>
`;

  const iframe = document.getElementById("preview");
  const doc = iframe.contentDocument || iframe.contentWindow.document;
  doc.open();
  doc.write(output);
  doc.close();
}
