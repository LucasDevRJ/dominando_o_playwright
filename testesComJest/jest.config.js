module.exports = {
    preset: 'jest-playwright-preset',
    "reporters": [
        "default",
        ["jest-html-reporters", {
            "publicPath": "./html-report",
            "filename": "report.html",
            "expand": true
        }]
    ]
}