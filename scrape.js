const fs = require('fs');
const puppeteer = require('puppeteer');

const scrape = async () => {
	const url = process.env.SCRAPE_URL;
	if (!url) {
		console.error("SCRAPE_URL is not set");
		process.exit(1);
	}

	const browser = await puppeteer.launch({
		headless: "new",
		args: ['--no-sandbox']
	});

	const page = await browser.newPage();
	await page.goto(url);

	const data = await page.evaluate(() => ({
		title: document.title,
		heading: document.querySelector('h1')?.innerText || 'No heading found',
	}));

	fs.writeFileSync('scraped_data.json', JSON.stringify(data, null, 2));
	await browser.close();
};

scrape();
