const browserify = require("browserify");
const es6ify = require("es6ify")
const fs = require("fs-extra");

var b = browserify();

fs.copy("public", "dist", (error) => {
    if (error) throw error;

    console.log("Copy of 'public/' complete!");

    b.add("src/index.js");
    b.transform(es6ify)
    b.bundle((err, src) => {
        if (err) throw err;

        fs.writeFileSync("dist/index.js", src.toString())

        console.log("'browserify' build complete!\n")
        console.log("\tcd dist\n\thttp-server\n\nTo server your CraftyJS game")
    })
})