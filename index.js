import puppeteer from "puppeteer";
import readlineSync from "readline-sync";

async function coinConverter() {
  try {
    const baseCoin =
      readlineSync.question("Informe uma moeda base: ") || "dolar";
    const targetCoin =
      readlineSync.question("Informe a moeda desejada: ") || "real";
    const url = `https://www.google.com/search?q=${baseCoin}+para+${targetCoin}&oq=${baseCoin}+para+${targetCoin}&aqs=chrome..69i57j0i512l9.2385j1j7&sourceid=chrome&ie=UTF-8`;

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({
      width: 1920,
      height: 1080,
    });

    await page.goto(url);
    await page.screenshot({
      path: `./screenshots/${baseCoin}-${targetCoin}_${new Date().getTime()}.png`,
    });

    const result = await page.evaluate(() => {
      return {
        baseCoin: document.querySelector(".a61j6.vk_gy.vk_sh.Hg3mWc").value,
      };
    });
    console.log(
      `O valor de 1 ${baseCoin} para ${targetCoin} é: ${result.baseCoin}`
    );
    await browser.close();
  } catch (err) {
    console.log("Erro ao converter moeda");
  }
}

await coinConverter();
