"use strict";
(self["webpackChunkhomepage"] = self["webpackChunkhomepage"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Bitter&family=Work+Sans&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  font-family: 'Bitter', serif;
  --background-color: #ffffff;
  --detail-color: #923A56;
  --text-color-dark: #000000;
  --text-color-light: #ffffff;
  --shadow-color: #9b8989;
}

body {
  color: var(--text-color-dark);
}

a {
  text-decoration: none;
  color: var(--text-color-dark);
}

a:hover, a:active {
  color: var(--detail-color);
}

/* ==========
    RESET 
========== */

div, span, h1, h2, h3, p, ul, li, img, a, i {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

ul {
  list-style: none;
}

/* ==========
    BODY
========== */

body {
  background-color: var(--background-color);
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}

.bg-decor {
  position: absolute;
  width: 100%;
  max-width: 1920px;
  height: clamp(650px, 50vh, 750px);
  background-color: var(--detail-color);
  transform: skewY(-12deg);
  top: -250px;
  box-shadow: -3px 1px 4px var(--shadow-color);
  z-index: -1;
}

/* ==========
    ABOUT
========== */

.top {
  display: inline-block;
  margin: 40px 10vw;
}

h1 {
  position: relative;
  bottom: -540px;
  z-index: 1;

  font-family: 'Work Sans', sans-serif;
  font-size: 50px;
  color: var(--text-color-light);
  text-shadow: 1px 1px 3px var(--shadow-color);
}

.about {
  display: inline-block;
  max-height: 540px;
  background-color: var(--background-color);
  box-shadow: 1px 1px 8px var(--shadow-color);
}

.about>h2 {
  font-family: 'Work Sans', sans-serif;
  font-size: 32px;
  margin: 60px 40px 20px 40px;
}

.about>p {
  text-align: justify;
  font-size: 20px;
  margin: 60px 40px;
  line-height: 1.5em;
}

.about>ul {
  margin: 20px 40px;
  justify-content: end;
  align-self: center;
  display: grid;
  grid-auto-flow: column;
  gap: 20px;
}

.about i {
  font-size: 32px;
}

.top picture {
  float: left;
  position: relative;
  top: -30px;
  left: -30px;
}

.top img {
  width: clamp(200px, 40vw, 400px);
  object-fit: cover;
  height: auto;
}

/* ==========
  PROJECTS
========== */

.projects {
  margin: 80px 5vw;
}

.projects>h2 {
  font-family: 'Work Sans', sans-serif;
  font-size: 32px;
  margin: 10px 0px;
}

.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 50px;
}

.card {
  display: grid;
  grid-template-rows: min-content min-content auto;
  grid-template-columns: auto min-content;
  grid-template-areas:
  "image image"
  "title links"
  "description description";
  row-gap: 15px;
  box-shadow: 1px 1px 4px var(--shadow-color);
}

.card>img {
  grid-area: image;
  width: 100%;
  height: auto;
  max-height: 350px;
  object-fit: cover;
}

.card>h3 {
  grid-area: title;
  font-family: 'Work Sans', sans-serif;
  font-size: 24px;
  margin-left: 15px;
}

.card>ul {
  grid-area: links;
  align-self: end;
  display: grid;
  grid-auto-flow: column;
  gap: 5px;
  margin-right: 15px;
}

.card>ul i {
  font-size: 28px;
}

.card>ul svg {
  width: 30px;
  height: auto;
}

.card>p {
  grid-area: description;
  margin: 15px;
}

/* ==========
   FOOTER
========== */

footer {
  background-color: var(--detail-color);
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: clamp(250px, 35vw, 400px) clamp(300px, 40vw, 500px);  
  align-items: center;
  justify-content: space-around;
  padding: 60px 0px;
}

.contact {
  color: var(--text-color-light);
  display: grid;
  row-gap: 15px;
}

.contact>h2 {
  font-family: 'Work Sans', sans-serif;
  font-size: 32px;
}

.contact>ul.contact-info {
  display: grid;
  row-gap: 5px;
}

.contact>ul.contact-info li {
  display: grid;
  grid-auto-flow: column;
  column-gap: 5px;
  grid-template-columns: min-content auto;
  align-items: center;
}

.contact>ul.contact-info svg {
  width: 30px;
  height: auto;
}

.contact>ul.links {
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  gap: 20px;
}

.contact>ul.links i {
  font-size: 30px;
  color: var(--text-color-light);
}

.contact>ul.links i:hover, .contact>ul.links i:active {
  color: var(--text-color-dark);
}

footer>img {
  
  width: 100%;
  height: auto;
}

/* ==========
    MEDIA
========== */

@media screen and (max-width: 599px) {
  .top {
    margin: 40px 5vw;
  }

  .about {
    border: none;
    box-shadow: none;
    display: grid;
    grid-template-columns: auto;
    max-height: none;
  }

  h1 {
    bottom: 0px;
  }

  .about>h2 {
    margin: 40px 5vw;  
  }

  .about>p {
    margin: 20px 5vw;
  }

  .about>ul {
    margin: 20px 5vw;
  }

  .top picture {
    top: 0;
    left: 0;
    float: none;
    position: static;
  }

  .top img {
    width: 100%;
  }

  footer {
    grid-auto-flow: row;
    grid-template-columns: auto;
    padding: 0;
  }

  .contact {
    margin: 60px 20px;
  }
}

@media screen and (min-width: 600px) and (max-width: 1199px) {
  .top {
    display: inline-block;
  }

  h1 {
    position: relative;
    text-align: end;
    margin-right: 40px;
    z-index: 1;
    bottom: 0;
  }

  .about {
    display: inline-block;
  }

  .about>h2 {
    font-family: 'Work Sans', sans-serif;
    font-size: 32px;
    margin: 20px 0px;
  }

  .about>p {
    text-align: justify;
    font-size: 22px;
    margin: 20px 40px;
  }

  .about>ul {
    margin: 20px 40px;
    justify-content: end;
    align-self: center;
    display: grid;
    grid-auto-flow: column;
    gap: 20px;

  }

  .top picture {
    float: left;
    position: relative;
    top: -30px;
    left: -30px; 
  }

  .top img {
    width: clamp(200px, 40vw, 400px);  
  }

  footer {
    grid-template-columns: clamp(250px, 35vw, 400px) clamp(300px, 50vw, 600px);
  }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Bitter&family=Work+Sans&display=swap');\n\n* {\n  font-family: 'Bitter', serif;\n  --background-color: #ffffff;\n  --detail-color: #923A56;\n  --text-color-dark: #000000;\n  --text-color-light: #ffffff;\n  --shadow-color: #9b8989;\n}\n\nbody {\n  color: var(--text-color-dark);\n}\n\na {\n  text-decoration: none;\n  color: var(--text-color-dark);\n}\n\na:hover, a:active {\n  color: var(--detail-color);\n}\n\n/* ==========\n    RESET \n========== */\n\ndiv, span, h1, h2, h3, p, ul, li, img, a, i {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\nul {\n  list-style: none;\n}\n\n/* ==========\n    BODY\n========== */\n\nbody {\n  background-color: var(--background-color);\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: column;\n}\n\n.bg-decor {\n  position: absolute;\n  width: 100%;\n  max-width: 1920px;\n  height: clamp(650px, 50vh, 750px);\n  background-color: var(--detail-color);\n  transform: skewY(-12deg);\n  top: -250px;\n  box-shadow: -3px 1px 4px var(--shadow-color);\n  z-index: -1;\n}\n\n/* ==========\n    ABOUT\n========== */\n\n.top {\n  display: inline-block;\n  margin: 40px 10vw;\n}\n\nh1 {\n  position: relative;\n  bottom: -540px;\n  z-index: 1;\n\n  font-family: 'Work Sans', sans-serif;\n  font-size: 50px;\n  color: var(--text-color-light);\n  text-shadow: 1px 1px 3px var(--shadow-color);\n}\n\n.about {\n  display: inline-block;\n  max-height: 540px;\n  background-color: var(--background-color);\n  box-shadow: 1px 1px 8px var(--shadow-color);\n}\n\n.about>h2 {\n  font-family: 'Work Sans', sans-serif;\n  font-size: 32px;\n  margin: 60px 40px 20px 40px;\n}\n\n.about>p {\n  text-align: justify;\n  font-size: 20px;\n  margin: 60px 40px;\n  line-height: 1.5em;\n}\n\n.about>ul {\n  margin: 20px 40px;\n  justify-content: end;\n  align-self: center;\n  display: grid;\n  grid-auto-flow: column;\n  gap: 20px;\n}\n\n.about i {\n  font-size: 32px;\n}\n\n.top picture {\n  float: left;\n  position: relative;\n  top: -30px;\n  left: -30px;\n}\n\n.top img {\n  width: clamp(200px, 40vw, 400px);\n  object-fit: cover;\n  height: auto;\n}\n\n/* ==========\n  PROJECTS\n========== */\n\n.projects {\n  margin: 80px 5vw;\n}\n\n.projects>h2 {\n  font-family: 'Work Sans', sans-serif;\n  font-size: 32px;\n  margin: 10px 0px;\n}\n\n.card-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 50px;\n}\n\n.card {\n  display: grid;\n  grid-template-rows: min-content min-content auto;\n  grid-template-columns: auto min-content;\n  grid-template-areas:\n  \"image image\"\n  \"title links\"\n  \"description description\";\n  row-gap: 15px;\n  box-shadow: 1px 1px 4px var(--shadow-color);\n}\n\n.card>img {\n  grid-area: image;\n  width: 100%;\n  height: auto;\n  max-height: 350px;\n  object-fit: cover;\n}\n\n.card>h3 {\n  grid-area: title;\n  font-family: 'Work Sans', sans-serif;\n  font-size: 24px;\n  margin-left: 15px;\n}\n\n.card>ul {\n  grid-area: links;\n  align-self: end;\n  display: grid;\n  grid-auto-flow: column;\n  gap: 5px;\n  margin-right: 15px;\n}\n\n.card>ul i {\n  font-size: 28px;\n}\n\n.card>ul svg {\n  width: 30px;\n  height: auto;\n}\n\n.card>p {\n  grid-area: description;\n  margin: 15px;\n}\n\n/* ==========\n   FOOTER\n========== */\n\nfooter {\n  background-color: var(--detail-color);\n  width: 100%;\n  display: grid;\n  grid-auto-flow: column;\n  grid-template-columns: clamp(250px, 35vw, 400px) clamp(300px, 40vw, 500px);  \n  align-items: center;\n  justify-content: space-around;\n  padding: 60px 0px;\n}\n\n.contact {\n  color: var(--text-color-light);\n  display: grid;\n  row-gap: 15px;\n}\n\n.contact>h2 {\n  font-family: 'Work Sans', sans-serif;\n  font-size: 32px;\n}\n\n.contact>ul.contact-info {\n  display: grid;\n  row-gap: 5px;\n}\n\n.contact>ul.contact-info li {\n  display: grid;\n  grid-auto-flow: column;\n  column-gap: 5px;\n  grid-template-columns: min-content auto;\n  align-items: center;\n}\n\n.contact>ul.contact-info svg {\n  width: 30px;\n  height: auto;\n}\n\n.contact>ul.links {\n  display: grid;\n  grid-auto-flow: column;\n  justify-content: start;\n  gap: 20px;\n}\n\n.contact>ul.links i {\n  font-size: 30px;\n  color: var(--text-color-light);\n}\n\n.contact>ul.links i:hover, .contact>ul.links i:active {\n  color: var(--text-color-dark);\n}\n\nfooter>img {\n  \n  width: 100%;\n  height: auto;\n}\n\n/* ==========\n    MEDIA\n========== */\n\n@media screen and (max-width: 599px) {\n  .top {\n    margin: 40px 5vw;\n  }\n\n  .about {\n    border: none;\n    box-shadow: none;\n    display: grid;\n    grid-template-columns: auto;\n    max-height: none;\n  }\n\n  h1 {\n    bottom: 0px;\n  }\n\n  .about>h2 {\n    margin: 40px 5vw;  \n  }\n\n  .about>p {\n    margin: 20px 5vw;\n  }\n\n  .about>ul {\n    margin: 20px 5vw;\n  }\n\n  .top picture {\n    top: 0;\n    left: 0;\n    float: none;\n    position: static;\n  }\n\n  .top img {\n    width: 100%;\n  }\n\n  footer {\n    grid-auto-flow: row;\n    grid-template-columns: auto;\n    padding: 0;\n  }\n\n  .contact {\n    margin: 60px 20px;\n  }\n}\n\n@media screen and (min-width: 600px) and (max-width: 1199px) {\n  .top {\n    display: inline-block;\n  }\n\n  h1 {\n    position: relative;\n    text-align: end;\n    margin-right: 40px;\n    z-index: 1;\n    bottom: 0;\n  }\n\n  .about {\n    display: inline-block;\n  }\n\n  .about>h2 {\n    font-family: 'Work Sans', sans-serif;\n    font-size: 32px;\n    margin: 20px 0px;\n  }\n\n  .about>p {\n    text-align: justify;\n    font-size: 22px;\n    margin: 20px 40px;\n  }\n\n  .about>ul {\n    margin: 20px 40px;\n    justify-content: end;\n    align-self: center;\n    display: grid;\n    grid-auto-flow: column;\n    gap: 20px;\n\n  }\n\n  .top picture {\n    float: left;\n    position: relative;\n    top: -30px;\n    left: -30px; \n  }\n\n  .top img {\n    width: clamp(200px, 40vw, 400px);  \n  }\n\n  footer {\n    grid-template-columns: clamp(250px, 35vw, 400px) clamp(300px, 50vw, 600px);\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/template.html":
/*!***************************!*\
  !*** ./src/template.html ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/portrait-480.jpg */ "./src/images/portrait-480.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/square-480.jpg */ "./src/images/square-480.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/portrait-800.jpg */ "./src/images/portrait-800.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/project01.jpg */ "./src/images/project01.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./images/project02.jpg */ "./src/images/project02.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./images/project03.jpg */ "./src/images/project03.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./images/project04.jpg */ "./src/images/project04.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./images/project05.jpg */ "./src/images/project05.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./images/project06.jpg */ "./src/images/project06.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./images/landscape-480.jpg */ "./src/images/landscape-480.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./images/landscape-800.jpg */ "./src/images/landscape-800.jpg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);
var code = "<div class=\"bg-decor\"></div>\n<main>\n  <div class=\"top\">\n    <h1>Kim Jiwoo</h1>\n    <div class=\"about\">\n      <picture>\n        <source media=\"(max-width: 599px)\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"/>\n        <source media=\"(min-width: 600px) and (max-width: 1199px)\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" />\n        <source media=\"(min-width: 1200px)\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\"/>\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"Kim Jiwoo\" />\n      </picture> \n      <h2>About me</h2>\n      <p>Making sure that fluff gets into the owner's eyes thinking longingly about tuna brine. A nice warm laptop for me to sit on shake treat bag lick butt and make a weird face cats woo. Cough furball human clearly uses close to one life a night no one naps that long so i revive by standing on chest</p>\n      <ul class=\"links\">\n        <li>\n          <a href=\"\"><i class=\"devicon-github-original\"></i></a>\n        </li>\n        <li>\n          <a href=\"\"><i class=\"devicon-linkedin-plain\"></i></a>\n        </li>\n        <li>\n          <a href=\"\"><i class=\"devicon-twitter-original\"></i></a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"projects\">\n    <h2>My work</h2>\n    <div class=\"card-container\">\n      <div class=\"card\">\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"Heart Attack screenshot\">\n        <h3>Heart Attack</h3>\n        <ul>\n          <li><a href=\"\"><i class=\"devicon-github-original\"></i></a></li>\n          <li><a href=\"\"><span class=\"iconify\" data-icon=\"mdi-open-in-new\"></span></a></li>\n        </ul>\n        <p>Sit by the fire inspect anything brought into the house</p>\n      </div>\n      <div class=\"card\">\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"love4eva screenshot\">\n        <h3>love4eva</h3>\n        <ul>\n          <li><a href=\"\"><i class=\"devicon-github-original\"></i></a></li>\n          <li><a href=\"\"><span class=\"iconify\" data-icon=\"mdi-open-in-new\"></span></a></li>\n        </ul>\n        <p>Disappear for four days and return home with an expensive injury</p>\n      </div>\n      <div class=\"card\">\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"Hi High screenshot\">\n        <h3>Hi High</h3>\n        <ul>\n          <li><a href=\"\"><i class=\"devicon-github-original\"></i></a></li>\n          <li><a href=\"\"><span class=\"iconify\" data-icon=\"mdi-open-in-new\"></span></a></li>\n        </ul>\n        <p>Open the door, let me out, let me out, let me-out, let me-aow, let meaow, meaow!</p>\n      </div>\n      <div class=\"card\">\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"Underwater screenshot\">\n        <h3>Underwater</h3>\n        <ul>\n          <li><a href=\"\"><i class=\"devicon-github-original\"></i></a></li>\n          <li><a href=\"\"><span class=\"iconify\" data-icon=\"mdi-open-in-new\"></span></a></li>\n        </ul>\n        <p>Walk on a keyboard bite off human's toes snuggles up to shoulders or knees and purrs </p>\n      </div>\n      <div class=\"card\">\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"Howl screenshot\">\n        <h3>Howl</h3>\n        <ul>\n          <li><a href=\"\"><i class=\"devicon-github-original\"></i></a></li>\n          <li><a href=\"\"><span class=\"iconify\" data-icon=\"mdi-open-in-new\"></span></a></li>\n        </ul>\n        <p> Bird bird bird bird bird bird human why take bird out i could have eaten that</p>\n      </div>\n      <div class=\"card\">\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"Hitchhiker screenshot\">\n        <h3>Hitchhiker</h3>\n        <ul>\n          <li><a href=\"\"><i class=\"devicon-github-original\"></i></a></li>\n          <li><a href=\"\"><span class=\"iconify\" data-icon=\"mdi-open-in-new\"></span></a></li>\n        </ul>\n        <p>Humans, oh how much they love us felines we are the center of attention they feed, they clean</p>\n      </div>\n    </div>\n  </div>\n</main>\n<footer>\n  <div class=\"contact\">\n    <h2>Contact me</h2>\n    <p class=\"call\">Please get in touch if you think that our work could be mutually beneficial!</p>\n    <p class=\"address\">1234 Chuu Road<br>Loona Island, Luna 12345</p>\n    <ul class=\"contact-info\">\n      <li>\n        <span class=\"iconify\" data-icon=\"mdi-phone\"></span>\n        <p>555-555-5555</p>\n      </li>\n      <li>\n        <span class=\"iconify\" data-icon=\"mdi-email-outline\"></span>\n        <p>chuu@loona.org</p>\n      </li>\n    </ul>\n    <ul class=\"links\">\n      <li>\n        <a href=\"\"><i class=\"devicon-github-original\"></i></a>\n      </li>\n      <li>\n        <a href=\"\"><i class=\"devicon-linkedin-plain\"></i></a>\n      </li>\n      <li>\n        <a href=\"\"><i class=\"devicon-twitter-original\"></i></a>\n      </li>\n    </ul>\n  </div>\n  <img \n    srcset=\"" + ___HTML_LOADER_REPLACEMENT_9___ + " 480w, " + ___HTML_LOADER_REPLACEMENT_10___ + " 800w\" \n    sizes=\"(max-width: 599px) 480px, 800px\" \n    src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" \n    alt=\"Kim Jiwoo\" />\n</footer>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.html */ "./src/template.html");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



window.onload = () => {
  const meta = document.createElement('meta');
  meta.setAttribute('name', 'viewport');
  meta.setAttribute('content', 'width=device-width, initial-scale=1.0');
  document.head.appendChild(meta);

  const devicon = document.createElement("link");
  devicon.setAttribute("rel", "stylesheet");
  devicon.setAttribute("href", "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css");
  document.head.appendChild(devicon);

  const iconify = document.createElement("script");
  iconify.setAttribute("src", "//code.iconify.design/1/1.0.6/iconify.min.js");
  document.head.appendChild(iconify);

  document.body.innerHTML = _template_html__WEBPACK_IMPORTED_MODULE_0__["default"];
}

/***/ }),

/***/ "./src/images/landscape-480.jpg":
/*!**************************************!*\
  !*** ./src/images/landscape-480.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b8bd4adf16550fc4caf9.jpg";

/***/ }),

/***/ "./src/images/landscape-800.jpg":
/*!**************************************!*\
  !*** ./src/images/landscape-800.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e0c452d73b17f5c0bad9.jpg";

/***/ }),

/***/ "./src/images/portrait-480.jpg":
/*!*************************************!*\
  !*** ./src/images/portrait-480.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3c499824f16bc35909e9.jpg";

/***/ }),

/***/ "./src/images/portrait-800.jpg":
/*!*************************************!*\
  !*** ./src/images/portrait-800.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c21ebfafb586c14dd5cc.jpg";

/***/ }),

/***/ "./src/images/project01.jpg":
/*!**********************************!*\
  !*** ./src/images/project01.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "00b6c28f6745211f1720.jpg";

/***/ }),

/***/ "./src/images/project02.jpg":
/*!**********************************!*\
  !*** ./src/images/project02.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ce1da7c6362bc1e973dd.jpg";

/***/ }),

/***/ "./src/images/project03.jpg":
/*!**********************************!*\
  !*** ./src/images/project03.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cb692a17221037497959.jpg";

/***/ }),

/***/ "./src/images/project04.jpg":
/*!**********************************!*\
  !*** ./src/images/project04.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1f781d9c7cfb394e41b6.jpg";

/***/ }),

/***/ "./src/images/project05.jpg":
/*!**********************************!*\
  !*** ./src/images/project05.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5f6a4f3f32ca193bcad0.jpg";

/***/ }),

/***/ "./src/images/project06.jpg":
/*!**********************************!*\
  !*** ./src/images/project06.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "80d4d8c3e7e899e32886.jpg";

/***/ }),

/***/ "./src/images/square-480.jpg":
/*!***********************************!*\
  !*** ./src/images/square-480.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1b93d81371096d01e465.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRixxSUFBcUk7QUFDckk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxRQUFRLE9BQU8sV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxzSEFBc0gsT0FBTyxpQ0FBaUMsZ0NBQWdDLDRCQUE0QiwrQkFBK0IsZ0NBQWdDLDRCQUE0QixHQUFHLFVBQVUsa0NBQWtDLEdBQUcsT0FBTywwQkFBMEIsa0NBQWtDLEdBQUcsdUJBQXVCLCtCQUErQixHQUFHLDZGQUE2RixjQUFjLGVBQWUsY0FBYyxvQkFBb0Isa0JBQWtCLDZCQUE2QixHQUFHLFFBQVEscUJBQXFCLEdBQUcsb0RBQW9ELDhDQUE4QyxzQkFBc0IsdUJBQXVCLGtCQUFrQixtQ0FBbUMsd0JBQXdCLDJCQUEyQixHQUFHLGVBQWUsdUJBQXVCLGdCQUFnQixzQkFBc0Isc0NBQXNDLDBDQUEwQyw2QkFBNkIsZ0JBQWdCLGlEQUFpRCxnQkFBZ0IsR0FBRyxxREFBcUQsMEJBQTBCLHNCQUFzQixHQUFHLFFBQVEsdUJBQXVCLG1CQUFtQixlQUFlLDJDQUEyQyxvQkFBb0IsbUNBQW1DLGlEQUFpRCxHQUFHLFlBQVksMEJBQTBCLHNCQUFzQiw4Q0FBOEMsZ0RBQWdELEdBQUcsZUFBZSx5Q0FBeUMsb0JBQW9CLGdDQUFnQyxHQUFHLGNBQWMsd0JBQXdCLG9CQUFvQixzQkFBc0IsdUJBQXVCLEdBQUcsZUFBZSxzQkFBc0IseUJBQXlCLHVCQUF1QixrQkFBa0IsMkJBQTJCLGNBQWMsR0FBRyxjQUFjLG9CQUFvQixHQUFHLGtCQUFrQixnQkFBZ0IsdUJBQXVCLGVBQWUsZ0JBQWdCLEdBQUcsY0FBYyxxQ0FBcUMsc0JBQXNCLGlCQUFpQixHQUFHLDJEQUEyRCxxQkFBcUIsR0FBRyxrQkFBa0IseUNBQXlDLG9CQUFvQixxQkFBcUIsR0FBRyxxQkFBcUIsa0JBQWtCLGdFQUFnRSxjQUFjLEdBQUcsV0FBVyxrQkFBa0IscURBQXFELDRDQUE0Qyw4RkFBOEYsa0JBQWtCLGdEQUFnRCxHQUFHLGVBQWUscUJBQXFCLGdCQUFnQixpQkFBaUIsc0JBQXNCLHNCQUFzQixHQUFHLGNBQWMscUJBQXFCLHlDQUF5QyxvQkFBb0Isc0JBQXNCLEdBQUcsY0FBYyxxQkFBcUIsb0JBQW9CLGtCQUFrQiwyQkFBMkIsYUFBYSx1QkFBdUIsR0FBRyxnQkFBZ0Isb0JBQW9CLEdBQUcsa0JBQWtCLGdCQUFnQixpQkFBaUIsR0FBRyxhQUFhLDJCQUEyQixpQkFBaUIsR0FBRyx1REFBdUQsMENBQTBDLGdCQUFnQixrQkFBa0IsMkJBQTJCLGlGQUFpRix3QkFBd0Isa0NBQWtDLHNCQUFzQixHQUFHLGNBQWMsbUNBQW1DLGtCQUFrQixrQkFBa0IsR0FBRyxpQkFBaUIseUNBQXlDLG9CQUFvQixHQUFHLDhCQUE4QixrQkFBa0IsaUJBQWlCLEdBQUcsaUNBQWlDLGtCQUFrQiwyQkFBMkIsb0JBQW9CLDRDQUE0Qyx3QkFBd0IsR0FBRyxrQ0FBa0MsZ0JBQWdCLGlCQUFpQixHQUFHLHVCQUF1QixrQkFBa0IsMkJBQTJCLDJCQUEyQixjQUFjLEdBQUcseUJBQXlCLG9CQUFvQixtQ0FBbUMsR0FBRywyREFBMkQsa0NBQWtDLEdBQUcsZ0JBQWdCLG9CQUFvQixpQkFBaUIsR0FBRyxxRkFBcUYsVUFBVSx1QkFBdUIsS0FBSyxjQUFjLG1CQUFtQix1QkFBdUIsb0JBQW9CLGtDQUFrQyx1QkFBdUIsS0FBSyxVQUFVLGtCQUFrQixLQUFLLGlCQUFpQix5QkFBeUIsS0FBSyxnQkFBZ0IsdUJBQXVCLEtBQUssaUJBQWlCLHVCQUF1QixLQUFLLG9CQUFvQixhQUFhLGNBQWMsa0JBQWtCLHVCQUF1QixLQUFLLGdCQUFnQixrQkFBa0IsS0FBSyxjQUFjLDBCQUEwQixrQ0FBa0MsaUJBQWlCLEtBQUssZ0JBQWdCLHdCQUF3QixLQUFLLEdBQUcsa0VBQWtFLFVBQVUsNEJBQTRCLEtBQUssVUFBVSx5QkFBeUIsc0JBQXNCLHlCQUF5QixpQkFBaUIsZ0JBQWdCLEtBQUssY0FBYyw0QkFBNEIsS0FBSyxpQkFBaUIsMkNBQTJDLHNCQUFzQix1QkFBdUIsS0FBSyxnQkFBZ0IsMEJBQTBCLHNCQUFzQix3QkFBd0IsS0FBSyxpQkFBaUIsd0JBQXdCLDJCQUEyQix5QkFBeUIsb0JBQW9CLDZCQUE2QixnQkFBZ0IsT0FBTyxvQkFBb0Isa0JBQWtCLHlCQUF5QixpQkFBaUIsbUJBQW1CLEtBQUssZ0JBQWdCLHlDQUF5QyxLQUFLLGNBQWMsaUZBQWlGLEtBQUssR0FBRyxtQkFBbUI7QUFDNzJSO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDL1gxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDMEc7QUFDMUcseUNBQXlDLCtIQUE0QztBQUNyRix5Q0FBeUMsMkhBQTBDO0FBQ25GLHlDQUF5QywrSEFBNEM7QUFDckYseUNBQXlDLHlIQUF5QztBQUNsRix5Q0FBeUMseUhBQXlDO0FBQ2xGLHlDQUF5Qyx5SEFBeUM7QUFDbEYseUNBQXlDLHlIQUF5QztBQUNsRix5Q0FBeUMseUhBQXlDO0FBQ2xGLHlDQUF5Qyx5SEFBeUM7QUFDbEYseUNBQXlDLGlJQUE2QztBQUN0RiwwQ0FBMEMsaUlBQTZDO0FBQ3ZGO0FBQ0Esc0NBQXNDLHVGQUF3QztBQUM5RSxzQ0FBc0MsdUZBQXdDO0FBQzlFLHNDQUFzQyx1RkFBd0M7QUFDOUUsc0NBQXNDLHVGQUF3QztBQUM5RSxzQ0FBc0MsdUZBQXdDO0FBQzlFLHNDQUFzQyx1RkFBd0M7QUFDOUUsc0NBQXNDLHVGQUF3QztBQUM5RSxzQ0FBc0MsdUZBQXdDO0FBQzlFLHNDQUFzQyx1RkFBd0M7QUFDOUUsc0NBQXNDLHVGQUF3QztBQUM5RSx1Q0FBdUMsdUZBQXdDO0FBQy9FO0FBQ0E7QUFDQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7O0FDM0JOOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7OztBQUdKOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNidUM7QUFDbEI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDRCQUE0QixzREFBUTtBQUNwQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy90ZW1wbGF0ZS5odG1sIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJpdHRlciZmYW1pbHk9V29yaytTYW5zJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIGZvbnQtZmFtaWx5OiAnQml0dGVyJywgc2VyaWY7XG4gIC0tYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgLS1kZXRhaWwtY29sb3I6ICM5MjNBNTY7XG4gIC0tdGV4dC1jb2xvci1kYXJrOiAjMDAwMDAwO1xuICAtLXRleHQtY29sb3ItbGlnaHQ6ICNmZmZmZmY7XG4gIC0tc2hhZG93LWNvbG9yOiAjOWI4OTg5O1xufVxuXG5ib2R5IHtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItZGFyayk7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWRhcmspO1xufVxuXG5hOmhvdmVyLCBhOmFjdGl2ZSB7XG4gIGNvbG9yOiB2YXIoLS1kZXRhaWwtY29sb3IpO1xufVxuXG4vKiA9PT09PT09PT09XG4gICAgUkVTRVQgXG49PT09PT09PT09ICovXG5cbmRpdiwgc3BhbiwgaDEsIGgyLCBoMywgcCwgdWwsIGxpLCBpbWcsIGEsIGkge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBmb250OiBpbmhlcml0O1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLyogPT09PT09PT09PVxuICAgIEJPRFlcbj09PT09PT09PT0gKi9cblxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5iZy1kZWNvciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTkyMHB4O1xuICBoZWlnaHQ6IGNsYW1wKDY1MHB4LCA1MHZoLCA3NTBweCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRldGFpbC1jb2xvcik7XG4gIHRyYW5zZm9ybTogc2tld1koLTEyZGVnKTtcbiAgdG9wOiAtMjUwcHg7XG4gIGJveC1zaGFkb3c6IC0zcHggMXB4IDRweCB2YXIoLS1zaGFkb3ctY29sb3IpO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLyogPT09PT09PT09PVxuICAgIEFCT1VUXG49PT09PT09PT09ICovXG5cbi50b3Age1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogNDBweCAxMHZ3O1xufVxuXG5oMSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAtNTQwcHg7XG4gIHotaW5kZXg6IDE7XG5cbiAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDUwcHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWxpZ2h0KTtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggM3B4IHZhcigtLXNoYWRvdy1jb2xvcik7XG59XG5cbi5hYm91dCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWF4LWhlaWdodDogNTQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDhweCB2YXIoLS1zaGFkb3ctY29sb3IpO1xufVxuXG4uYWJvdXQ+aDIge1xuICBmb250LWZhbWlseTogJ1dvcmsgU2FucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgbWFyZ2luOiA2MHB4IDQwcHggMjBweCA0MHB4O1xufVxuXG4uYWJvdXQ+cCB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luOiA2MHB4IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbn1cblxuLmFib3V0PnVsIHtcbiAgbWFyZ2luOiAyMHB4IDQwcHg7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gIGdhcDogMjBweDtcbn1cblxuLmFib3V0IGkge1xuICBmb250LXNpemU6IDMycHg7XG59XG5cbi50b3AgcGljdHVyZSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTMwcHg7XG4gIGxlZnQ6IC0zMHB4O1xufVxuXG4udG9wIGltZyB7XG4gIHdpZHRoOiBjbGFtcCgyMDBweCwgNDB2dywgNDAwcHgpO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vKiA9PT09PT09PT09XG4gIFBST0pFQ1RTXG49PT09PT09PT09ICovXG5cbi5wcm9qZWN0cyB7XG4gIG1hcmdpbjogODBweCA1dnc7XG59XG5cbi5wcm9qZWN0cz5oMiB7XG4gIGZvbnQtZmFtaWx5OiAnV29yayBTYW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBtYXJnaW46IDEwcHggMHB4O1xufVxuXG4uY2FyZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcbiAgZ2FwOiA1MHB4O1xufVxuXG4uY2FyZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQgYXV0bztcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIG1pbi1jb250ZW50O1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICBcImltYWdlIGltYWdlXCJcbiAgXCJ0aXRsZSBsaW5rc1wiXG4gIFwiZGVzY3JpcHRpb24gZGVzY3JpcHRpb25cIjtcbiAgcm93LWdhcDogMTVweDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggdmFyKC0tc2hhZG93LWNvbG9yKTtcbn1cblxuLmNhcmQ+aW1nIHtcbiAgZ3JpZC1hcmVhOiBpbWFnZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWF4LWhlaWdodDogMzUwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uY2FyZD5oMyB7XG4gIGdyaWQtYXJlYTogdGl0bGU7XG4gIGZvbnQtZmFtaWx5OiAnV29yayBTYW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuLmNhcmQ+dWwge1xuICBncmlkLWFyZWE6IGxpbmtzO1xuICBhbGlnbi1zZWxmOiBlbmQ7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gIGdhcDogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5jYXJkPnVsIGkge1xuICBmb250LXNpemU6IDI4cHg7XG59XG5cbi5jYXJkPnVsIHN2ZyB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5jYXJkPnAge1xuICBncmlkLWFyZWE6IGRlc2NyaXB0aW9uO1xuICBtYXJnaW46IDE1cHg7XG59XG5cbi8qID09PT09PT09PT1cbiAgIEZPT1RFUlxuPT09PT09PT09PSAqL1xuXG5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZXRhaWwtY29sb3IpO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBjbGFtcCgyNTBweCwgMzV2dywgNDAwcHgpIGNsYW1wKDMwMHB4LCA0MHZ3LCA1MDBweCk7ICBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHBhZGRpbmc6IDYwcHggMHB4O1xufVxuXG4uY29udGFjdCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWxpZ2h0KTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcm93LWdhcDogMTVweDtcbn1cblxuLmNvbnRhY3Q+aDIge1xuICBmb250LWZhbWlseTogJ1dvcmsgU2FucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMzJweDtcbn1cblxuLmNvbnRhY3Q+dWwuY29udGFjdC1pbmZvIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcm93LWdhcDogNXB4O1xufVxuXG4uY29udGFjdD51bC5jb250YWN0LWluZm8gbGkge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICBjb2x1bW4tZ2FwOiA1cHg7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgYXV0bztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvbnRhY3Q+dWwuY29udGFjdC1pbmZvIHN2ZyB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5jb250YWN0PnVsLmxpbmtzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgZ2FwOiAyMHB4O1xufVxuXG4uY29udGFjdD51bC5saW5rcyBpIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1saWdodCk7XG59XG5cbi5jb250YWN0PnVsLmxpbmtzIGk6aG92ZXIsIC5jb250YWN0PnVsLmxpbmtzIGk6YWN0aXZlIHtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItZGFyayk7XG59XG5cbmZvb3Rlcj5pbWcge1xuICBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLyogPT09PT09PT09PVxuICAgIE1FRElBXG49PT09PT09PT09ICovXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gIC50b3Age1xuICAgIG1hcmdpbjogNDBweCA1dnc7XG4gIH1cblxuICAuYWJvdXQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IG5vbmU7XG4gIH1cblxuICBoMSB7XG4gICAgYm90dG9tOiAwcHg7XG4gIH1cblxuICAuYWJvdXQ+aDIge1xuICAgIG1hcmdpbjogNDBweCA1dnc7ICBcbiAgfVxuXG4gIC5hYm91dD5wIHtcbiAgICBtYXJnaW46IDIwcHggNXZ3O1xuICB9XG5cbiAgLmFib3V0PnVsIHtcbiAgICBtYXJnaW46IDIwcHggNXZ3O1xuICB9XG5cbiAgLnRvcCBwaWN0dXJlIHtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBmbG9hdDogbm9uZTtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICB9XG5cbiAgLnRvcCBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgZm9vdGVyIHtcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgLmNvbnRhY3Qge1xuICAgIG1hcmdpbjogNjBweCAyMHB4O1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gIC50b3Age1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuXG4gIGgxIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1hbGlnbjogZW5kO1xuICAgIG1hcmdpbi1yaWdodDogNDBweDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGJvdHRvbTogMDtcbiAgfVxuXG4gIC5hYm91dCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG5cbiAgLmFib3V0PmgyIHtcbiAgICBmb250LWZhbWlseTogJ1dvcmsgU2FucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIG1hcmdpbjogMjBweCAwcHg7XG4gIH1cblxuICAuYWJvdXQ+cCB7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgbWFyZ2luOiAyMHB4IDQwcHg7XG4gIH1cblxuICAuYWJvdXQ+dWwge1xuICAgIG1hcmdpbjogMjBweCA0MHB4O1xuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gICAgZ2FwOiAyMHB4O1xuXG4gIH1cblxuICAudG9wIHBpY3R1cmUge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0zMHB4O1xuICAgIGxlZnQ6IC0zMHB4OyBcbiAgfVxuXG4gIC50b3AgaW1nIHtcbiAgICB3aWR0aDogY2xhbXAoMjAwcHgsIDQwdncsIDQwMHB4KTsgIFxuICB9XG5cbiAgZm9vdGVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGNsYW1wKDI1MHB4LCAzNXZ3LCA0MDBweCkgY2xhbXAoMzAwcHgsIDUwdncsIDYwMHB4KTtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtFQUMxQiwyQkFBMkI7RUFDM0IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTs7WUFFWTs7QUFFWjtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsU0FBUztFQUNULGVBQWU7RUFDZixhQUFhO0VBQ2Isd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBOztZQUVZOztBQUVaO0VBQ0UseUNBQXlDO0VBQ3pDLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsaUNBQWlDO0VBQ2pD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UCxXQUFXO0lBQ1gsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7RUFDWDs7RUFFQTtJQUNFLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLG9DQUFvQztJQUNwQyxlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7O0VBRVg7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxnQ0FBZ0M7RUFDbEM7O0VBRUE7SUFDRSwwRUFBMEU7RUFDNUU7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CaXR0ZXImZmFtaWx5PVdvcmsrU2FucyZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qIHtcXG4gIGZvbnQtZmFtaWx5OiAnQml0dGVyJywgc2VyaWY7XFxuICAtLWJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAtLWRldGFpbC1jb2xvcjogIzkyM0E1NjtcXG4gIC0tdGV4dC1jb2xvci1kYXJrOiAjMDAwMDAwO1xcbiAgLS10ZXh0LWNvbG9yLWxpZ2h0OiAjZmZmZmZmO1xcbiAgLS1zaGFkb3ctY29sb3I6ICM5Yjg5ODk7XFxufVxcblxcbmJvZHkge1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItZGFyayk7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItZGFyayk7XFxufVxcblxcbmE6aG92ZXIsIGE6YWN0aXZlIHtcXG4gIGNvbG9yOiB2YXIoLS1kZXRhaWwtY29sb3IpO1xcbn1cXG5cXG4vKiA9PT09PT09PT09XFxuICAgIFJFU0VUIFxcbj09PT09PT09PT0gKi9cXG5cXG5kaXYsIHNwYW4sIGgxLCBoMiwgaDMsIHAsIHVsLCBsaSwgaW1nLCBhLCBpIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiA9PT09PT09PT09XFxuICAgIEJPRFlcXG49PT09PT09PT09ICovXFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uYmctZGVjb3Ige1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDE5MjBweDtcXG4gIGhlaWdodDogY2xhbXAoNjUwcHgsIDUwdmgsIDc1MHB4KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRldGFpbC1jb2xvcik7XFxuICB0cmFuc2Zvcm06IHNrZXdZKC0xMmRlZyk7XFxuICB0b3A6IC0yNTBweDtcXG4gIGJveC1zaGFkb3c6IC0zcHggMXB4IDRweCB2YXIoLS1zaGFkb3ctY29sb3IpO1xcbiAgei1pbmRleDogLTE7XFxufVxcblxcbi8qID09PT09PT09PT1cXG4gICAgQUJPVVRcXG49PT09PT09PT09ICovXFxuXFxuLnRvcCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW46IDQwcHggMTB2dztcXG59XFxuXFxuaDEge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm90dG9tOiAtNTQwcHg7XFxuICB6LWluZGV4OiAxO1xcblxcbiAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA1MHB4O1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItbGlnaHQpO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggM3B4IHZhcigtLXNoYWRvdy1jb2xvcik7XFxufVxcblxcbi5hYm91dCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXgtaGVpZ2h0OiA1NDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCA4cHggdmFyKC0tc2hhZG93LWNvbG9yKTtcXG59XFxuXFxuLmFib3V0PmgyIHtcXG4gIGZvbnQtZmFtaWx5OiAnV29yayBTYW5zJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG4gIG1hcmdpbjogNjBweCA0MHB4IDIwcHggNDBweDtcXG59XFxuXFxuLmFib3V0PnAge1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIG1hcmdpbjogNjBweCA0MHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xcbn1cXG5cXG4uYWJvdXQ+dWwge1xcbiAgbWFyZ2luOiAyMHB4IDQwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uYWJvdXQgaSB7XFxuICBmb250LXNpemU6IDMycHg7XFxufVxcblxcbi50b3AgcGljdHVyZSB7XFxuICBmbG9hdDogbGVmdDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogLTMwcHg7XFxuICBsZWZ0OiAtMzBweDtcXG59XFxuXFxuLnRvcCBpbWcge1xcbiAgd2lkdGg6IGNsYW1wKDIwMHB4LCA0MHZ3LCA0MDBweCk7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyogPT09PT09PT09PVxcbiAgUFJPSkVDVFNcXG49PT09PT09PT09ICovXFxuXFxuLnByb2plY3RzIHtcXG4gIG1hcmdpbjogODBweCA1dnc7XFxufVxcblxcbi5wcm9qZWN0cz5oMiB7XFxuICBmb250LWZhbWlseTogJ1dvcmsgU2FucycsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDMycHg7XFxuICBtYXJnaW46IDEwcHggMHB4O1xcbn1cXG5cXG4uY2FyZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xcbiAgZ2FwOiA1MHB4O1xcbn1cXG5cXG4uY2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCBtaW4tY29udGVudCBhdXRvO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIG1pbi1jb250ZW50O1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gIFxcXCJpbWFnZSBpbWFnZVxcXCJcXG4gIFxcXCJ0aXRsZSBsaW5rc1xcXCJcXG4gIFxcXCJkZXNjcmlwdGlvbiBkZXNjcmlwdGlvblxcXCI7XFxuICByb3ctZ2FwOiAxNXB4O1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggdmFyKC0tc2hhZG93LWNvbG9yKTtcXG59XFxuXFxuLmNhcmQ+aW1nIHtcXG4gIGdyaWQtYXJlYTogaW1hZ2U7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1heC1oZWlnaHQ6IDM1MHB4O1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi5jYXJkPmgzIHtcXG4gIGdyaWQtYXJlYTogdGl0bGU7XFxuICBmb250LWZhbWlseTogJ1dvcmsgU2FucycsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBtYXJnaW4tbGVmdDogMTVweDtcXG59XFxuXFxuLmNhcmQ+dWwge1xcbiAgZ3JpZC1hcmVhOiBsaW5rcztcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgZ2FwOiA1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxufVxcblxcbi5jYXJkPnVsIGkge1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbn1cXG5cXG4uY2FyZD51bCBzdmcge1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5jYXJkPnAge1xcbiAgZ3JpZC1hcmVhOiBkZXNjcmlwdGlvbjtcXG4gIG1hcmdpbjogMTVweDtcXG59XFxuXFxuLyogPT09PT09PT09PVxcbiAgIEZPT1RFUlxcbj09PT09PT09PT0gKi9cXG5cXG5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGV0YWlsLWNvbG9yKTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGNsYW1wKDI1MHB4LCAzNXZ3LCA0MDBweCkgY2xhbXAoMzAwcHgsIDQwdncsIDUwMHB4KTsgIFxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgcGFkZGluZzogNjBweCAwcHg7XFxufVxcblxcbi5jb250YWN0IHtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWxpZ2h0KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICByb3ctZ2FwOiAxNXB4O1xcbn1cXG5cXG4uY29udGFjdD5oMiB7XFxuICBmb250LWZhbWlseTogJ1dvcmsgU2FucycsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDMycHg7XFxufVxcblxcbi5jb250YWN0PnVsLmNvbnRhY3QtaW5mbyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcm93LWdhcDogNXB4O1xcbn1cXG5cXG4uY29udGFjdD51bC5jb250YWN0LWluZm8gbGkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBjb2x1bW4tZ2FwOiA1cHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IGF1dG87XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29udGFjdD51bC5jb250YWN0LWluZm8gc3ZnIHtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uY29udGFjdD51bC5saW5rcyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5jb250YWN0PnVsLmxpbmtzIGkge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItbGlnaHQpO1xcbn1cXG5cXG4uY29udGFjdD51bC5saW5rcyBpOmhvdmVyLCAuY29udGFjdD51bC5saW5rcyBpOmFjdGl2ZSB7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1kYXJrKTtcXG59XFxuXFxuZm9vdGVyPmltZyB7XFxuICBcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKiA9PT09PT09PT09XFxuICAgIE1FRElBXFxuPT09PT09PT09PSAqL1xcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XFxuICAudG9wIHtcXG4gICAgbWFyZ2luOiA0MHB4IDV2dztcXG4gIH1cXG5cXG4gIC5hYm91dCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xcbiAgICBtYXgtaGVpZ2h0OiBub25lO1xcbiAgfVxcblxcbiAgaDEge1xcbiAgICBib3R0b206IDBweDtcXG4gIH1cXG5cXG4gIC5hYm91dD5oMiB7XFxuICAgIG1hcmdpbjogNDBweCA1dnc7ICBcXG4gIH1cXG5cXG4gIC5hYm91dD5wIHtcXG4gICAgbWFyZ2luOiAyMHB4IDV2dztcXG4gIH1cXG5cXG4gIC5hYm91dD51bCB7XFxuICAgIG1hcmdpbjogMjBweCA1dnc7XFxuICB9XFxuXFxuICAudG9wIHBpY3R1cmUge1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGZsb2F0OiBub25lO1xcbiAgICBwb3NpdGlvbjogc3RhdGljO1xcbiAgfVxcblxcbiAgLnRvcCBpbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIGZvb3RlciB7XFxuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG5cXG4gIC5jb250YWN0IHtcXG4gICAgbWFyZ2luOiA2MHB4IDIwcHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XFxuICAudG9wIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgfVxcblxcbiAgaDEge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRleHQtYWxpZ246IGVuZDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBib3R0b206IDA7XFxuICB9XFxuXFxuICAuYWJvdXQge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB9XFxuXFxuICAuYWJvdXQ+aDIge1xcbiAgICBmb250LWZhbWlseTogJ1dvcmsgU2FucycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgbWFyZ2luOiAyMHB4IDBweDtcXG4gIH1cXG5cXG4gIC5hYm91dD5wIHtcXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBtYXJnaW46IDIwcHggNDBweDtcXG4gIH1cXG5cXG4gIC5hYm91dD51bCB7XFxuICAgIG1hcmdpbjogMjBweCA0MHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxuXFxuICB9XFxuXFxuICAudG9wIHBpY3R1cmUge1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IC0zMHB4O1xcbiAgICBsZWZ0OiAtMzBweDsgXFxuICB9XFxuXFxuICAudG9wIGltZyB7XFxuICAgIHdpZHRoOiBjbGFtcCgyMDBweCwgNDB2dywgNDAwcHgpOyAgXFxuICB9XFxuXFxuICBmb290ZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGNsYW1wKDI1MHB4LCAzNXZ3LCA0MDBweCkgY2xhbXAoMzAwcHgsIDUwdncsIDYwMHB4KTtcXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9wb3J0cmFpdC00ODAuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvc3F1YXJlLTQ4MC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9wb3J0cmFpdC04MDAuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvcHJvamVjdDAxLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL3Byb2plY3QwMi5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfNV9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9wcm9qZWN0MDMuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzZfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvcHJvamVjdDA0LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF83X19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL3Byb2plY3QwNS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfOF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9wcm9qZWN0MDYuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzlfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvbGFuZHNjYXBlLTQ4MC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMTBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvbGFuZHNjYXBlLTgwMC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbi8vIE1vZHVsZVxudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMV9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzJfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzNfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8zX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF80X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNF9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzVfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzZfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF82X19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF83X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfN19fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfOF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzhfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzlfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF85X19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xMF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzEwX19fKTtcbnZhciBjb2RlID0gXCI8ZGl2IGNsYXNzPVxcXCJiZy1kZWNvclxcXCI+PC9kaXY+XFxuPG1haW4+XFxuICA8ZGl2IGNsYXNzPVxcXCJ0b3BcXFwiPlxcbiAgICA8aDE+S2ltIEppd29vPC9oMT5cXG4gICAgPGRpdiBjbGFzcz1cXFwiYWJvdXRcXFwiPlxcbiAgICAgIDxwaWN0dXJlPlxcbiAgICAgICAgPHNvdXJjZSBtZWRpYT1cXFwiKG1heC13aWR0aDogNTk5cHgpXFxcIiBzcmNzZXQ9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxcIi8+XFxuICAgICAgICA8c291cmNlIG1lZGlhPVxcXCIobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDExOTlweClcXFwiIHNyY3NldD1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xX19fICsgXCJcXFwiIC8+XFxuICAgICAgICA8c291cmNlIG1lZGlhPVxcXCIobWluLXdpZHRoOiAxMjAwcHgpXFxcIiBzcmNzZXQ9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMl9fXyArIFwiXFxcIi8+XFxuICAgICAgICA8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8yX19fICsgXCJcXFwiIGFsdD1cXFwiS2ltIEppd29vXFxcIiAvPlxcbiAgICAgIDwvcGljdHVyZT4gXFxuICAgICAgPGgyPkFib3V0IG1lPC9oMj5cXG4gICAgICA8cD5NYWtpbmcgc3VyZSB0aGF0IGZsdWZmIGdldHMgaW50byB0aGUgb3duZXIncyBleWVzIHRoaW5raW5nIGxvbmdpbmdseSBhYm91dCB0dW5hIGJyaW5lLiBBIG5pY2Ugd2FybSBsYXB0b3AgZm9yIG1lIHRvIHNpdCBvbiBzaGFrZSB0cmVhdCBiYWcgbGljayBidXR0IGFuZCBtYWtlIGEgd2VpcmQgZmFjZSBjYXRzIHdvby4gQ291Z2ggZnVyYmFsbCBodW1hbiBjbGVhcmx5IHVzZXMgY2xvc2UgdG8gb25lIGxpZmUgYSBuaWdodCBubyBvbmUgbmFwcyB0aGF0IGxvbmcgc28gaSByZXZpdmUgYnkgc3RhbmRpbmcgb24gY2hlc3Q8L3A+XFxuICAgICAgPHVsIGNsYXNzPVxcXCJsaW5rc1xcXCI+XFxuICAgICAgICA8bGk+XFxuICAgICAgICAgIDxhIGhyZWY9XFxcIlxcXCI+PGkgY2xhc3M9XFxcImRldmljb24tZ2l0aHViLW9yaWdpbmFsXFxcIj48L2k+PC9hPlxcbiAgICAgICAgPC9saT5cXG4gICAgICAgIDxsaT5cXG4gICAgICAgICAgPGEgaHJlZj1cXFwiXFxcIj48aSBjbGFzcz1cXFwiZGV2aWNvbi1saW5rZWRpbi1wbGFpblxcXCI+PC9pPjwvYT5cXG4gICAgICAgIDwvbGk+XFxuICAgICAgICA8bGk+XFxuICAgICAgICAgIDxhIGhyZWY9XFxcIlxcXCI+PGkgY2xhc3M9XFxcImRldmljb24tdHdpdHRlci1vcmlnaW5hbFxcXCI+PC9pPjwvYT5cXG4gICAgICAgIDwvbGk+XFxuICAgICAgPC91bD5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcInByb2plY3RzXFxcIj5cXG4gICAgPGgyPk15IHdvcms8L2gyPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWNvbnRhaW5lclxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZFxcXCI+XFxuICAgICAgICA8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8zX19fICsgXCJcXFwiIGFsdD1cXFwiSGVhcnQgQXR0YWNrIHNjcmVlbnNob3RcXFwiPlxcbiAgICAgICAgPGgzPkhlYXJ0IEF0dGFjazwvaDM+XFxuICAgICAgICA8dWw+XFxuICAgICAgICAgIDxsaT48YSBocmVmPVxcXCJcXFwiPjxpIGNsYXNzPVxcXCJkZXZpY29uLWdpdGh1Yi1vcmlnaW5hbFxcXCI+PC9pPjwvYT48L2xpPlxcbiAgICAgICAgICA8bGk+PGEgaHJlZj1cXFwiXFxcIj48c3BhbiBjbGFzcz1cXFwiaWNvbmlmeVxcXCIgZGF0YS1pY29uPVxcXCJtZGktb3Blbi1pbi1uZXdcXFwiPjwvc3Bhbj48L2E+PC9saT5cXG4gICAgICAgIDwvdWw+XFxuICAgICAgICA8cD5TaXQgYnkgdGhlIGZpcmUgaW5zcGVjdCBhbnl0aGluZyBicm91Z2h0IGludG8gdGhlIGhvdXNlPC9wPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiPlxcbiAgICAgICAgPGltZyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNF9fXyArIFwiXFxcIiBhbHQ9XFxcImxvdmU0ZXZhIHNjcmVlbnNob3RcXFwiPlxcbiAgICAgICAgPGgzPmxvdmU0ZXZhPC9oMz5cXG4gICAgICAgIDx1bD5cXG4gICAgICAgICAgPGxpPjxhIGhyZWY9XFxcIlxcXCI+PGkgY2xhc3M9XFxcImRldmljb24tZ2l0aHViLW9yaWdpbmFsXFxcIj48L2k+PC9hPjwvbGk+XFxuICAgICAgICAgIDxsaT48YSBocmVmPVxcXCJcXFwiPjxzcGFuIGNsYXNzPVxcXCJpY29uaWZ5XFxcIiBkYXRhLWljb249XFxcIm1kaS1vcGVuLWluLW5ld1xcXCI+PC9zcGFuPjwvYT48L2xpPlxcbiAgICAgICAgPC91bD5cXG4gICAgICAgIDxwPkRpc2FwcGVhciBmb3IgZm91ciBkYXlzIGFuZCByZXR1cm4gaG9tZSB3aXRoIGFuIGV4cGVuc2l2ZSBpbmp1cnk8L3A+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZFxcXCI+XFxuICAgICAgICA8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF81X19fICsgXCJcXFwiIGFsdD1cXFwiSGkgSGlnaCBzY3JlZW5zaG90XFxcIj5cXG4gICAgICAgIDxoMz5IaSBIaWdoPC9oMz5cXG4gICAgICAgIDx1bD5cXG4gICAgICAgICAgPGxpPjxhIGhyZWY9XFxcIlxcXCI+PGkgY2xhc3M9XFxcImRldmljb24tZ2l0aHViLW9yaWdpbmFsXFxcIj48L2k+PC9hPjwvbGk+XFxuICAgICAgICAgIDxsaT48YSBocmVmPVxcXCJcXFwiPjxzcGFuIGNsYXNzPVxcXCJpY29uaWZ5XFxcIiBkYXRhLWljb249XFxcIm1kaS1vcGVuLWluLW5ld1xcXCI+PC9zcGFuPjwvYT48L2xpPlxcbiAgICAgICAgPC91bD5cXG4gICAgICAgIDxwPk9wZW4gdGhlIGRvb3IsIGxldCBtZSBvdXQsIGxldCBtZSBvdXQsIGxldCBtZS1vdXQsIGxldCBtZS1hb3csIGxldCBtZWFvdywgbWVhb3chPC9wPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiPlxcbiAgICAgICAgPGltZyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNl9fXyArIFwiXFxcIiBhbHQ9XFxcIlVuZGVyd2F0ZXIgc2NyZWVuc2hvdFxcXCI+XFxuICAgICAgICA8aDM+VW5kZXJ3YXRlcjwvaDM+XFxuICAgICAgICA8dWw+XFxuICAgICAgICAgIDxsaT48YSBocmVmPVxcXCJcXFwiPjxpIGNsYXNzPVxcXCJkZXZpY29uLWdpdGh1Yi1vcmlnaW5hbFxcXCI+PC9pPjwvYT48L2xpPlxcbiAgICAgICAgICA8bGk+PGEgaHJlZj1cXFwiXFxcIj48c3BhbiBjbGFzcz1cXFwiaWNvbmlmeVxcXCIgZGF0YS1pY29uPVxcXCJtZGktb3Blbi1pbi1uZXdcXFwiPjwvc3Bhbj48L2E+PC9saT5cXG4gICAgICAgIDwvdWw+XFxuICAgICAgICA8cD5XYWxrIG9uIGEga2V5Ym9hcmQgYml0ZSBvZmYgaHVtYW4ncyB0b2VzIHNudWdnbGVzIHVwIHRvIHNob3VsZGVycyBvciBrbmVlcyBhbmQgcHVycnMgPC9wPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiPlxcbiAgICAgICAgPGltZyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfN19fXyArIFwiXFxcIiBhbHQ9XFxcIkhvd2wgc2NyZWVuc2hvdFxcXCI+XFxuICAgICAgICA8aDM+SG93bDwvaDM+XFxuICAgICAgICA8dWw+XFxuICAgICAgICAgIDxsaT48YSBocmVmPVxcXCJcXFwiPjxpIGNsYXNzPVxcXCJkZXZpY29uLWdpdGh1Yi1vcmlnaW5hbFxcXCI+PC9pPjwvYT48L2xpPlxcbiAgICAgICAgICA8bGk+PGEgaHJlZj1cXFwiXFxcIj48c3BhbiBjbGFzcz1cXFwiaWNvbmlmeVxcXCIgZGF0YS1pY29uPVxcXCJtZGktb3Blbi1pbi1uZXdcXFwiPjwvc3Bhbj48L2E+PC9saT5cXG4gICAgICAgIDwvdWw+XFxuICAgICAgICA8cD4gQmlyZCBiaXJkIGJpcmQgYmlyZCBiaXJkIGJpcmQgaHVtYW4gd2h5IHRha2UgYmlyZCBvdXQgaSBjb3VsZCBoYXZlIGVhdGVuIHRoYXQ8L3A+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZFxcXCI+XFxuICAgICAgICA8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF84X19fICsgXCJcXFwiIGFsdD1cXFwiSGl0Y2hoaWtlciBzY3JlZW5zaG90XFxcIj5cXG4gICAgICAgIDxoMz5IaXRjaGhpa2VyPC9oMz5cXG4gICAgICAgIDx1bD5cXG4gICAgICAgICAgPGxpPjxhIGhyZWY9XFxcIlxcXCI+PGkgY2xhc3M9XFxcImRldmljb24tZ2l0aHViLW9yaWdpbmFsXFxcIj48L2k+PC9hPjwvbGk+XFxuICAgICAgICAgIDxsaT48YSBocmVmPVxcXCJcXFwiPjxzcGFuIGNsYXNzPVxcXCJpY29uaWZ5XFxcIiBkYXRhLWljb249XFxcIm1kaS1vcGVuLWluLW5ld1xcXCI+PC9zcGFuPjwvYT48L2xpPlxcbiAgICAgICAgPC91bD5cXG4gICAgICAgIDxwPkh1bWFucywgb2ggaG93IG11Y2ggdGhleSBsb3ZlIHVzIGZlbGluZXMgd2UgYXJlIHRoZSBjZW50ZXIgb2YgYXR0ZW50aW9uIHRoZXkgZmVlZCwgdGhleSBjbGVhbjwvcD5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L21haW4+XFxuPGZvb3Rlcj5cXG4gIDxkaXYgY2xhc3M9XFxcImNvbnRhY3RcXFwiPlxcbiAgICA8aDI+Q29udGFjdCBtZTwvaDI+XFxuICAgIDxwIGNsYXNzPVxcXCJjYWxsXFxcIj5QbGVhc2UgZ2V0IGluIHRvdWNoIGlmIHlvdSB0aGluayB0aGF0IG91ciB3b3JrIGNvdWxkIGJlIG11dHVhbGx5IGJlbmVmaWNpYWwhPC9wPlxcbiAgICA8cCBjbGFzcz1cXFwiYWRkcmVzc1xcXCI+MTIzNCBDaHV1IFJvYWQ8YnI+TG9vbmEgSXNsYW5kLCBMdW5hIDEyMzQ1PC9wPlxcbiAgICA8dWwgY2xhc3M9XFxcImNvbnRhY3QtaW5mb1xcXCI+XFxuICAgICAgPGxpPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImljb25pZnlcXFwiIGRhdGEtaWNvbj1cXFwibWRpLXBob25lXFxcIj48L3NwYW4+XFxuICAgICAgICA8cD41NTUtNTU1LTU1NTU8L3A+XFxuICAgICAgPC9saT5cXG4gICAgICA8bGk+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbmlmeVxcXCIgZGF0YS1pY29uPVxcXCJtZGktZW1haWwtb3V0bGluZVxcXCI+PC9zcGFuPlxcbiAgICAgICAgPHA+Y2h1dUBsb29uYS5vcmc8L3A+XFxuICAgICAgPC9saT5cXG4gICAgPC91bD5cXG4gICAgPHVsIGNsYXNzPVxcXCJsaW5rc1xcXCI+XFxuICAgICAgPGxpPlxcbiAgICAgICAgPGEgaHJlZj1cXFwiXFxcIj48aSBjbGFzcz1cXFwiZGV2aWNvbi1naXRodWItb3JpZ2luYWxcXFwiPjwvaT48L2E+XFxuICAgICAgPC9saT5cXG4gICAgICA8bGk+XFxuICAgICAgICA8YSBocmVmPVxcXCJcXFwiPjxpIGNsYXNzPVxcXCJkZXZpY29uLWxpbmtlZGluLXBsYWluXFxcIj48L2k+PC9hPlxcbiAgICAgIDwvbGk+XFxuICAgICAgPGxpPlxcbiAgICAgICAgPGEgaHJlZj1cXFwiXFxcIj48aSBjbGFzcz1cXFwiZGV2aWNvbi10d2l0dGVyLW9yaWdpbmFsXFxcIj48L2k+PC9hPlxcbiAgICAgIDwvbGk+XFxuICAgIDwvdWw+XFxuICA8L2Rpdj5cXG4gIDxpbWcgXFxuICAgIHNyY3NldD1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF85X19fICsgXCIgNDgwdywgXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xMF9fXyArIFwiIDgwMHdcXFwiIFxcbiAgICBzaXplcz1cXFwiKG1heC13aWR0aDogNTk5cHgpIDQ4MHB4LCA4MDBweFxcXCIgXFxuICAgIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xMF9fXyArIFwiXFxcIiBcXG4gICAgYWx0PVxcXCJLaW0gSml3b29cXFwiIC8+XFxuPC9mb290ZXI+XCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIGlmIChvcHRpb25zLm1heWJlTmVlZFF1b3RlcyAmJiAvW1xcdFxcblxcZlxcciBcIic9PD5gXS8udGVzdCh1cmwpKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwsIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHRlbXBsYXRlIGZyb20gXCIuL3RlbXBsYXRlLmh0bWxcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gIGNvbnN0IG1ldGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtZXRhJyk7XG4gIG1ldGEuc2V0QXR0cmlidXRlKCduYW1lJywgJ3ZpZXdwb3J0Jyk7XG4gIG1ldGEuc2V0QXR0cmlidXRlKCdjb250ZW50JywgJ3dpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAnKTtcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChtZXRhKTtcblxuICBjb25zdCBkZXZpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG4gIGRldmljb24uc2V0QXR0cmlidXRlKFwicmVsXCIsIFwic3R5bGVzaGVldFwiKTtcbiAgZGV2aWNvbi5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AdjIuMTUuMS9kZXZpY29uLm1pbi5jc3NcIik7XG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZGV2aWNvbik7XG5cbiAgY29uc3QgaWNvbmlmeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gIGljb25pZnkuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLy9jb2RlLmljb25pZnkuZGVzaWduLzEvMS4wLjYvaWNvbmlmeS5taW4uanNcIik7XG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoaWNvbmlmeSk7XG5cbiAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSB0ZW1wbGF0ZTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=