//https://stackoverflow.com/questions/39962913/write-file-from-a-template-in-node-js
//https://stackoverflow.com/questions/25181736/express-4-0-cannot-find-module-html-cannot-find-module-handlebars

const fs = require('fs');
const Handlebars = require('handlebars');

// var source = '<div>{{title}} lama</div>';
var source = fs.readFileSync('template/test.html','utf8');

const template = Handlebars.compile(source);

const contents = template({title: 'Wohooo!'});

fs.writeFile('contents.html', contents, err => {
    if (err) {
        return console.error('Autsch! Failed to store template: ${err.message}.');
    }

    console.log('Saved template!');
});