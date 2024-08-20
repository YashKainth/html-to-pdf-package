const { htmlToPdf, convertHtmlFileToPdf } = require("./index");

const htmlContent =
  "<h1>Hello, World!</h1><p>This is a sample PDF generated from HTML.</p>";
htmlToPdf(htmlContent, "output.pdf").then(() => {
  console.log("PDF generated successfully!");
});

convertHtmlFileToPdf("sample.html", "output-file.pdf").then(() => {
  console.log("PDF generated from HTML file successfully!");
});
