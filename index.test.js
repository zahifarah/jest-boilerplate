/*
Current settings have Jest running with the `--watchAll` flag; which reruns the test on save (when a file has changed). 

You can disable this behavior by going to `package.json` and removing the flag.
*/
const mainFunction = require("./index")

test("boilerplate test, fails", () => {
  expect(mainFunction()).toBe(true)
})
