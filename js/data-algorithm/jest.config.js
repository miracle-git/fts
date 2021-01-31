module.exports = {
  reporters: [
    "default",
    ["./node_modules/jest-html-reporter", {
      "pageTitle": "Data Algorithm Test Report"
    }]
  ]
}