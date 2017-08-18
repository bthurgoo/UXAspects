let fs = require('fs');
let path = require('path');
let less = require('less');
let process = require('process');

// entry paths
let rootPath = process.cwd();
let stylesPath = path.join(rootPath, 'src', 'styles');
let stylesheetPath = path.join(stylesPath, 'ux-aspects-components.less');

// dist folder paths
let distPath = path.join(rootPath, 'dist');
let lessDistPath = path.join(distPath, 'less');

// output file paths
let lessDestinationPath = path.join(lessDistPath, 'ux-aspects-components.less');

// load in the original less file
let stylesheet = fs.readFileSync(stylesheetPath, 'utf8');

// set up the less options
let options = {
    rootFileInfo: {
        currentDirectory: stylesPath
    }
};

// ensure output directories exists
if (!fs.existsSync(distPath)) {
    fs.mkdirSync(distPath);
}

if (!fs.existsSync(lessDistPath)) {
    fs.mkdirSync(lessDistPath);
}

// parse the less file
less.parse(stylesheet, options, (err, ruleset, imports, options) => {

    // make all the import statements inline
    let statements = ruleset.rules.filter(rule => rule.type === 'Import').map(rule => `@import (inline) "${rule.path.value}";`).join('\n');

    // produce the inline less file
    less.render(statements, options, (err, output) => {

        less.parse(output.css, options, (err, ruleset, imports, options) => {
            let inlineStatements = ruleset.rules.map
        })

        // output the less file
        fs.writeFileSync(lessDestinationPath, output.css);

        // end the script
        process.exit();

    });
});