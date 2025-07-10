const { chromium } = require('playwright');
const { expect } = require('expect');

(async() => {
    const browser = await chromium.launch({ headless: false, slowMo: 300 });
    const context = await browser.newContext({ acceptDownloads: true });
    const page = await context.newPage();

    await page.goto('https://www.file.io/', { timeout: 5000 });
    await page.setInputFiles('#select-files-input', 'arquivo.txt', { timeout: 3000 });

    await page.waitForTimeout(20000); // Wait for the file to be processed
    const mensagemDeSucesso = await page.textContent('body > div.min-h-full.grid.grid-cols-1.grid-rows-\\[auto_auto_minmax\\(0\\,_1fr\\)\\].\\[--lmwr-header-height\\:3\\.5rem\\] > div.h-full > div > div > main > div > div.default\\:flex.default\\:text-left.gap-2\\.5.p-4.border.rounded-xl.items-start.border-green-300.bg-green-50 > div.type-d-75-medium.break-words-anywhere.self-center.flex-1.min-w-0.text-green-800 > span');
    expect(mensagemDeSucesso).toBe('Your files are ready! File.io is now part of LimeWire.');

    await page.click('    body > div.min-h-full.grid.grid-cols-1.grid-rows-\\[auto_auto_minmax\\(0\\,_1fr\\)\\].\\[--lmwr-header-height\\:3\\.5rem\\] > div.h-full > div > div > main > div > div.mt-3 > div > div:nth-child(1) > div > div.flex.flex-col.gap-y-4.w-full > div.border.rounded-lg.shadow-sm.relative.bg-white.flex.flex-col.px-5.py-4.gap-y-4.border-slate-300 > div.default\\:flex.items-center.justify-between > div:nth-child(1) > button.default\\:whitespace-nowrap.default\\:rounded-full.default\\:shadow-xs.bg-white.text-slate-700.border.border-solid.border-slate-300.hover\\:bg-slate-50.hover\\:text-slate-800.focus\\:outline-slate-100.focus\\:bg-white.focus\\:text-slate-800.default\\:type-d-75-bold.default\\:py-2\\.5.default\\:px-4.default\\:flex.default\\:relative.default\\:whitespace-nowrap.items-center.justify-center.transition-colors.outline-4.outline-transparent.focus-visible\\:\\!outline-none.focus-visible\\:after\\:opacity-100.after\\:content-\\[\\"\\"\\].after\\:select-none.after\\:pointer-events-none.after\\:absolute.after\\:inset-0.after\\:opacity-0.after\\:transition-opacity.after\\:outline-offset-2.after\\:outline-2.after\\:outline-primary-900.after\\:rounded-\\[inherit\\].hidden.xs\\:flex > span > span.min-w-0.\\[overflow\\:inherit\\].\\[text-overflow\\:inherit\\]\n');

    const [ download ] = await Promise.all([
        page.waitForEvent('download'),
    ]);

    const path = await download.path();
    console.log("Arquivo salvo no caminho: ", path);

    await download.saveAs('downloaded_file.txt');

    await browser.close();
})();