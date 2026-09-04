import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";

const BASE_URL = process.env.PORTFOLIO_URL || "http://127.0.0.1:8000";

const OUTPUT_DIR = path.resolve(process.env.PDF_OUTPUT_DIR || "docs/assets/pdf");

fs.mkdirSync(OUTPUT_DIR, { recursive: true });

const portfolios = [
  {
    lang: "en",
    url: `${BASE_URL}/`,
    sections: ["", "experience/", "projects/", "skills/", "education/", "certifications/"],
    output: path.join(OUTPUT_DIR, "amamoun-portfolio-en.pdf"),
  },
  {
    lang: "fr",
    url: `${BASE_URL}/fr/`,
    sections: ["", "experience/", "projects/", "skills/", "education/", "certifications/"],
    output: path.join(OUTPUT_DIR, "amamoun-portfolio-fr.pdf"),
  },
];

const browser = await chromium.launch();

for (const portfolio of portfolios) {
  const page = await browser.newPage({
    viewport: {
      width: 1440,
      height: 1200,
    },
  });

  console.log(`Generating ${portfolio.lang.toUpperCase()} PDF...`);

  const sectionHtml = [];

  for (const section of portfolio.sections) {
    await page.goto(`${BASE_URL}/${portfolio.lang === "fr" ? "fr/" : ""}${section}`, {
      waitUntil: "networkidle",
    });

    sectionHtml.push(await page.locator(".md-content__inner").innerHTML());
  }

  await page.goto(portfolio.url, { waitUntil: "networkidle" });

  await page.locator(".md-content__inner").evaluate((content, sections) => {
    content.innerHTML = sections
      .map((section, index) => index === 0
        ? section
        : `<section class="pdf-section">${section}</section>`)
      .join("");
  }, sectionHtml);

  /*
   * Wait for fonts to finish loading.
   */
  await page.evaluate(async () => {
    if (document.fonts?.ready) {
      await document.fonts.ready;
    }
  });

  /*
   * Remove UI that should not appear in the PDF.
   */
  await page.addStyleTag({
    content: `
      .md-header,
      .md-tabs,
      .md-sidebar,
      .md-footer,
      .md-search,
      .md-dialog,
      .md-content__button,
      .headerlink,
      .portfolio-pdf-button,
      [data-md-component="announce"],
      [data-pdf-ignore] {
        display: none !important;
      }

      .typing-effect {
        width: auto !important;
        white-space: normal !important;
        border-right: 0 !important;
        animation: none !important;
      }

      .pdf-section {
        margin-top: 2.5rem;
        padding-top: 0.5rem;
        border-top: 1px solid #d9dee5;
      }

      .pdf-section h1 {
        margin-top: 0;
      }

      .md-main,
      .md-main__inner,
      .md-content,
      .md-content__inner {
        display: block !important;
        width: 100% !important;
        max-width: none !important;
        margin: 0 !important;
        padding: 0 !important;
      }

      html,
      body {
        background: white !important;
        print-color-adjust: exact !important;
        -webkit-print-color-adjust: exact !important;
      }

      h1,
      h2,
      h3 {
        break-after: avoid;
        page-break-after: avoid;
      }

      p,
      li {
        orphans: 3;
        widows: 3;
      }

      img,
      svg,
      pre,
      table,
      blockquote {
        break-inside: avoid;
        page-break-inside: avoid;
      }
    `,
  });

  await page.emulateMedia({
    media: "print",
  });

  await page.pdf({
    path: portfolio.output,
    format: "A4",
    printBackground: true,
    preferCSSPageSize: false,

    margin: {
      top: "14mm",
      right: "14mm",
      bottom: "16mm",
      left: "14mm",
    },

    displayHeaderFooter: false,
  });

  console.log(`Created: ${portfolio.output}`);

  await page.close();
}

await browser.close();

console.log("PDF generation complete.");
