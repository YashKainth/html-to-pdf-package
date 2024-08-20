const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

/**
 * Converts HTML content to a PDF.
 * @param {string} htmlContent - The HTML content to convert.
 * @param {string} outputPath - The path to save the generated PDF.
 */
async function htmlToPdf(htmlContent, outputPath) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setContent(htmlContent, { waitUntil: 'networkidle0' });

  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true, 
  });

  await browser.close();
}

/**
 * Reads HTML from a file and converts it to a PDF.
 * @param {string} htmlFilePath - The path to the HTML file.
 * @param {string} outputPath - The path to save the generated PDF.
 */
async function convertHtmlFileToPdf(htmlFilePath, outputPath) {
  const htmlContent = fs.readFileSync(htmlFilePath, 'utf-8');
  await htmlToPdf(htmlContent, outputPath);
}

module.exports = { htmlToPdf, convertHtmlFileToPdf };
