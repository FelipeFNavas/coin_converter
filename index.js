import puppeteer from "puppeteer";
const url = "https://epicgames.com/store/pt-BR/free-games";

const browser = await puppeteer.launch({
  headless: false,
});
const page = await browser.newPage();
await page.goto(url);
await page.screenshot({ path: "./screenshots/googleTeste.png" });
/* clica no botão do jogo grátis */
// await page.$eval("a[role=link]", (el) => el.href());
// console.log(await page.$eval("a[role=link]"));

// await browser.close();
