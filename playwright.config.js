const config = {
    use: {
        baseURL: 'https://the-internet.herokuapp.com',
        // browserName: 'webkit',
        headless: false,
        // viewport: { width: 1280, height: 720 },
        launchOptions: {
            slowMo: 50,
        },
        screenshot: 'only-on-failure', // 'on', 'off', 'only-on-failure'
        video: 'on', // 'on', 'off', 'retain-on-failure', 'on-first-retry'
        trace: 'on', // 'on', 'off', 'retain-on-failure', 'on-first-retry'
    },
    testDir: './tests',
    retries: 2,
    timeout: 60000,
    projects: [
        {
            name: 'Chromium_600x800',
            use: {
                browserName: 'chromium',
                viewport: { width: 600, height: 800 },
            },
        },
        {
            name: 'Chromium_1280x720',
            use: {
                browserName: 'chromium',
                viewport: { width: 1280, height: 720 },
            },
        },
        {
            name: 'webkit',
            use: {
                browserName: 'webkit',
            }
        },
    ],
}

module.exports = config