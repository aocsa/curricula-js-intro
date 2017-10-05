if (typeof exports !== "undefined") {
   exports.codeToHtml = codeToHtml;
}

var stdin = process.openStdin();

var express = require("express");
var app = express();

var port = process.env.PORT || 5000;

app.use(express.static("public"));
app.set("views", "./src/views");

app.set("view engine", "ejs");

function codeToHtml(string) {
   var hljs = require("highlight.js");

   // full options list (defaults)
   var md = require("markdown-it")({
      html: true, // Enable HTML tags in source
      xhtmlOut: true, // Use '/' to close single tags (<br />).
      // This is only for full CommonMark compatibility.
      breaks: true, // Convert '\n' in paragraphs into <br>
      langPrefix: "language-js", // CSS language prefix for fenced blocks. Can be
      // useful for external highlighters.
      linkify: true, // Autoconvert URL-like text to links

      // Enable some language-neutral replacement + quotes beautification
      typographer: true,

      // Double + single quotes replacement pairs, when typographer enabled,
      // and smartquotes on. Could be either a String or an Array.
      //
      // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
      // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
      quotes: "“”‘’",

      // Highlighter function. Should return escaped HTML,
      // or '' if the source string is not changed and should be escaped externaly.
      // If result starts with <pre... internal wrapper is skipped.
      highlight: function(str, lang) {
         if (lang && hljs.getLanguage(lang)) {
            try {
               return (
                  '<pre class="hljs" class="language-js"><code>' +
                  md.utils.escapeHtml(str) +
                  "</code></pre>"
               );
            } catch (__) {}
         }
         return (
            '<pre class="hljs"><code>' +
            md.utils.escapeHtml(str) +
            "</code></pre>"
         );
      }
   });

   var result = md.render(string);
   return result;
}
var markDownString = "";
var format = require("string-template");
 
const path = require("path");

const mkdirSync = function(dirPath) {
   try {
      fs.mkdirSync(dirPath);
   } catch (err) {
      if (err.code !== "EEXIST") throw err;
   }
};

const common_html_path = "";
var fs = require("fs");

function CreateIndex(testFolder, filepath) {
   var fs = require("fs");
   if (filepath == undefined || filepath.length == 0) {
      console.log("filepath undefined >" + testFolder);
      return;
   }
   var filename = filepath.replace(/.+\//, "");
   filename = "index";

   console.log("you entered: [" + filepath + "]");

   markDownString = fs.readFileSync(filepath, "utf8");
   var firstLine = markDownString.split("\n")[0];
   var label_name = firstLine.replace("#", "");

   var htmlCode = codeToHtml(markDownString.replace(firstLine, ""));

   var templateString = fs.readFileSync("md-2-units-template.html", "utf8");

   console.log("htmlCode: " + htmlCode.length);
   var polymerComponentCode = format(templateString, {
      //template_id: filename,
      template_html: htmlCode
   });

   var fs = require("fs");
   var htmlFile = testFolder + "/" + filename + ".html";
   fs.writeFile(htmlFile, polymerComponentCode, function(err) {
      if (err) {
         return console.log(err);
      }
      console.log("The file " + htmlFile + " was saved!");
   });
   return {
      name: filename,
      label: label_name
   };
}
function MD2HTML(testFolder, filepath) {
   var fs = require("fs");
   if (filepath == undefined || filepath.length == 0) {
      console.log("filepath undefined >" + testFolder);
      return;
   }
   var filename = filepath.replace(/.+\//, "");
   filename = "unit-" + filename.replace(".md", "");

   console.log("you entered: [" + filepath + "]");

   markDownString = fs.readFileSync(filepath, "utf8");
   var firstLine = markDownString.split("\n")[0];
   var label_name = firstLine.replace("#", "");

   var htmlCode = codeToHtml(markDownString.replace(firstLine, ""));

   var templateString = fs.readFileSync("md-2-html-template.html", "utf8");

   console.log("htmlCode: " + htmlCode.length);
   var polymerComponentCode = format(templateString, {
      template_id: filename,
      template_html: htmlCode
   });

   var fs = require("fs");
   var htmlFile = testFolder + "/" + filename + ".html";
   fs.writeFile(htmlFile, polymerComponentCode, function(err) {
      if (err) {
         return console.log(err);
      }
      console.log("The file " + htmlFile + " was saved!");
   });
   return {
      name: filename,
      label: label_name
   };
}

var glob = require("glob");

function batchMD2HTML(codelabtitle, testFolder) {
   // options is optional
   glob(testFolder, function(err, files) {
      if (err) {
         return console.log(err);
      }
      //../01-intro/02-variables-and-data-types/*.md
      var htmlFolders = testFolder.replace("*.md", "");
      console.log(htmlFolders);

      var lstMDs = files;
      var codelabs_steps = [];
      for (var filepath of lstMDs) {
         console.log("filepath:**" + filepath + "**");

         var obj = MD2HTML(htmlFolders, filepath);
         codelabs_steps.push({
            html_file_name: obj.name + ".html",
            codelab_step: obj.name,
            label: obj.label
         });
      }
      let links_html = "";
      let steps_html = "";
      for (let obj of codelabs_steps) {
         let html_file = obj.html_file_name;
         let template_id = obj.codelab_step;
         let label = obj.label;

         links_html += '<link rel="import" href="' + html_file + '">';

         var step =
            '<google-codelab-step label="' +
            label +
            '" duration="10">' +
            "<" +
            template_id +
            "> </" +
            template_id +
            ">" +
            "</google-codelab-step>";

         steps_html += step;
      }

      var templateString = fs.readFileSync("md-2-index-template.html", "utf8");
      var htmlIndexContent = format(templateString, {
         codelab_title: codelabtitle,
         link_htmlfiles: links_html,
         codelab_steps: steps_html
      });

      var htmlFile = htmlFolders + "index.html";
      console.log("htmlfile: " + htmlFile);
      fs.writeFile(htmlFile, htmlIndexContent, function(err) {
         if (err) {
            return console.log(err);
         }
         console.log("The file " + htmlFile + " was saved!");
      });
   });
}

function processBook() {
   var bookDir = "../11-react/*";

   glob(bookDir, function(err, files) {
      if (err) {
         return console.log(err);
      }
      for (var filepath of files) {
         console.log("filepath> " + filepath);
         if (filepath.indexOf("assets") >= 0) {
            continue;
         }
         if (filepath.indexOf("README.md") >= 0) {
            var htmlFolders = filepath.replace("README.md", "");
            CreateIndex(htmlFolders, filepath);
         } else if (fs.lstatSync(filepath).isDirectory()) {
            batchMD2HTML("Laboratoria", filepath + "/*.md");
         }
      }
   });
}
processBook();

stdin.addListener("data", function(d) {
   // note:  d is an object, and when converted to a string it will
   // end with a linefeed.  so we (rather crudely) account for that
   // with toString() and then trim()
   var filepath = d.toString().trim();
   MD2HTML(filepath);
});

app.get("/", function(req, res) {
   var ret = codeToHtml(markDownString);
   res.render("index", {
      title: "Hello from render",
      list: ret
   });
});

app.listen(port, function(err) {
   console.log("running server on port " + port);
});
