const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("http://localhost:3000/preview", {
    waitUntil: "networkidle2",
  });
  // await page.emulateMediaType("screen");
  await page.pdf({
    path: "./laporan.pdf", // path (relative to CWD) to save the PDF to.
    printBackground: true, // print background colors
    // width: "25cm", // match the css width and height we set for our PDF
    // height: "792px",
    format: "a4",
  });
  await browser.close();
})();
