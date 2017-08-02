


if (typeof exports !== 'undefined') {
    exports.codeToHtml = codeToHtml;
}

var stdin = process.openStdin();


var express = require('express');
var app = express();

var port = process.env.PORT || 5000;

app.use(express.static('public'));
app.set('views', './src/views');

app.set('view engine', 'ejs');



function codeToHtml(string) {
    var hljs = require('highlight.js');

            // full options list (defaults)
    var md = require('markdown-it')({
        html:         true,        // Enable HTML tags in source
        xhtmlOut:     true,        // Use '/' to close single tags (<br />).
                                    // This is only for full CommonMark compatibility.
        breaks:       true,        // Convert '\n' in paragraphs into <br>
        langPrefix:   'language-js',  // CSS language prefix for fenced blocks. Can be
                                    // useful for external highlighters.
        linkify:      true,        // Autoconvert URL-like text to links

        // Enable some language-neutral replacement + quotes beautification
        typographer:  true,

        // Double + single quotes replacement pairs, when typographer enabled,
        // and smartquotes on. Could be either a String or an Array.
        //
        // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
        // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
        quotes: '“”‘’',

        // Highlighter function. Should return escaped HTML,
        // or '' if the source string is not changed and should be escaped externaly.
        // If result starts with <pre... internal wrapper is skipped.
        highlight: function (str, lang) {  
            if (lang && hljs.getLanguage(lang)) {
                try {
                     return '<pre class="hljs" class="language-js"><code>' + md.utils.escapeHtml(str)  + '</code></pre>';
                } catch (__) {

                }
            }
            return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
        }
    });

   
    var result = md.render(string);
    return result;
}
var htmlString = '';
var format = require("string-template")

function  MD2HTML (filepath){
    var filename = filepath.replace(/.+\//, '');
    filename = "unit-" + filename.replace('.md', '');

    console.log("you entered: [" + filepath + "]");
    var fs = require('fs')
    fs.readFile(filepath, 'utf8', function(err, data) {
        if (err) {
            return console.log(err);
        }
        htmlString = data;

        var htmlCode = codeToHtml(htmlString);
        
        fs.readFile('md-2-html-template.html', 'utf8', function(err, templateString) {
            if (err) {
                return console.log(err);
            }
            console.log ("htmlCode: " + htmlCode.length);
            var polymerComponentCode = format(templateString, {
                template_id: filename,
                template_html: htmlCode
            });

            var fs = require('fs');
            var htmlFile = "html_from_md/" + filename + ".html";
            fs.writeFile(htmlFile, polymerComponentCode, function(err) {
                if (err) {
                    return console.log(err);
                }
                console.log("The file " + htmlFile + " was saved!");
            });

        });
    });
}
function batchMD2HTML (mdStrings) {
    var lstMDs = mdStrings.split(' ');
    for (var name of lstMDs) {
        var filepath = "intro/" + name;
        console.log("filepath: " + filepath);
        MD2HTML(filepath);
    }
}

batchMD2HTML ("01-values-data-types-and-operators.md 02-variables.md 03-self-learning-MDN.md 04-comments.md 05-guided-exercises.md 06-prueba-tu-conocimiento.md README.md" );
stdin.addListener("data", function(d) {
    // note:  d is an object, and when converted to a string it will
    // end with a linefeed.  so we (rather crudely) account for that  
    // with toString() and then trim() 
    var filepath = d.toString().trim();
    MD2HTML(filepath);

});


app.get('/', function(req, res) {
    var ret = codeToHtml(htmlString);
    res.render('index', {
        title: 'Hello from render',
        list: ret
    });
});


app.listen(port, function(err) {
    console.log('running server on port ' + port);
});