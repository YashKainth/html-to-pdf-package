#HTML to PDF Package
A simple npm package to convert HTML content into PDF files using Puppeteer.

##Features

- Converts HTML content to PDF files.
- Supports HTML strings and HTML files.
- Easy-to-use API.

##Installation
To install the package, use npm:
npm install html-to-pdf-package

##Usage
###Convert HTML String to PDF
const { htmlToPdf } = require('html-to-pdf-package');
const htmlContent = '<h1>Hello, World!</h1><p>This is a sample PDF generated from HTML.</p>';
htmlToPdf(htmlContent, 'output.pdf')
.then(() => {
console.log('PDF generated successfully!');
})
.catch(error => {
console.error('Error generating PDF:', error);
});

###Convert HTML File to PDF
const { convertHtmlFileToPdf } = require('html-to-pdf-package');
convertHtmlFileToPdf('sample.html', 'output-file.pdf')
.then(() => {
console.log('PDF generated from HTML file successfully!');
})
.catch(error => {
console.error('Error generating PDF from file:', error);
});

##API
###htmlToPdf(htmlContent, outputPath)

- Parameters:
  - htmlContent (string): The HTML content to convert to PDF.
  - outputPath (string): The path where the generated PDF will be saved.
- Returns: A promise that resolves when the PDF has been successfully generated.
  ###convertHtmlFileToPdf(htmlFilePath, outputPath)
- Parameters:
  - htmlFilePath (string): The path to the HTML file to convert to PDF.
  - outputPath (string): The path where the generated PDF will be saved.
- Returns: A promise that resolves when the PDF has been successfully generated.
  ##Contributing
  We welcome contributions to improve this package. To contribute:

1. Fork the repository.
2. Create a new branch (git checkout -b feature-branch).
3. Make your changes and commit them (git commit -am 'Add new feature').
4. Push your branch (git push origin feature-branch).
5. Create a pull request.

## Contact

If you have any questions or need support, please contact Yash Kainth.

## Acknowledgements

- Puppeteer: The library used for converting HTML to PDF.
