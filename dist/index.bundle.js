"use strict";
(self["webpackChunkkanban_group"] = self["webpackChunkkanban_group"] || []).push([["index"],{

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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/bg-img.jpeg */ "./images/bg-img.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Playfair Display', sans-serif;\r\n  background-color: rgb(0, 0, 0, 0.7);\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n  height: 80px;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  opacity: 0.8;\r\n  padding-bottom: 0;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n#head-img {\r\n  width: 200px;\r\n  height: 200px;\r\n  margin-top: -40px;\r\n  transition: 4s ease-out;\r\n}\r\n\r\n.nav-menu {\r\n  background-color: black;\r\n  height: 100vh;\r\n  width: 0;\r\n}\r\n\r\n.nav-items {\r\n  display: flex;\r\n  flex-direction: column;\r\n  position: fixed;\r\n  width: 100%;\r\n  text-align: start;\r\n  transition: 3s ease-out;\r\n  margin-left: 40%;\r\n  padding-top: 100px;\r\n  background-color: #000;\r\n  height: 100vh;\r\n}\r\n\r\n.nav-items.active {\r\n  left: 0;\r\n}\r\n\r\n.nav-link {\r\n  margin: 16px 30px;\r\n}\r\n\r\n.nav-items .nav-link {\r\n  list-style: none;\r\n  margin: 12px;\r\n}\r\n\r\n.nav-items .nav-link a {\r\n  text-decoration: none;\r\n  margin: 0 12px;\r\n  padding: 5px 15px;\r\n  font-size: 18px;\r\n  font-weight: 700;\r\n  color: rgba(225, 170, 6, 0.9);\r\n  transition: 1s all ease-in-out;\r\n}\r\n\r\n.nav-items .nav-link a:hover {\r\n  transition: 1s ease-in-out;\r\n  margin: 3px;\r\n  border-bottom: 2px solid #f1f18a;\r\n}\r\n\r\n.hamburger {\r\n  display: block;\r\n  cursor: pointer;\r\n  color: rgba(225, 170, 6, 0.9);\r\n  margin: 25px 40px;\r\n  z-index: 1;\r\n}\r\n\r\n.bar {\r\n  display: block;\r\n  width: 25px;\r\n  height: 3px;\r\n  margin: 5px auto;\r\n  -webkit-transition: all 1s ease-in-out;\r\n  transition: all 1s ease-in-out;\r\n  background-color: rgba(225, 170, 6, 0.9);\r\n}\r\n\r\n.hamburger.active .bar:nth-child(2) {\r\n  opacity: 0;\r\n  background-color: rgba(225, 170, 6, 0.9);\r\n}\r\n\r\n.hamburger.active .bar:nth-child(1) {\r\n  transform: translateY(8px) rotate(45deg);\r\n  background-color: rgba(225, 170, 6, 0.9);\r\n}\r\n\r\n.hamburger.active .bar:nth-child(3) {\r\n  transform: translateY(-8px) rotate(-45deg);\r\n  background-color: rgba(225, 170, 6, 0.9);\r\n}\r\n\r\n.show-count {\r\n  color: rgba(225, 170, 6, 0.9);\r\n  margin-left: 10%;\r\n  font-size: 18px;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.work-box {\r\n  border: 3px solid rgba(225, 170, 6, 0.9);\r\n  width: 80%;\r\n  margin: 20px 10%;\r\n  border-bottom-left-radius: 15px;\r\n  border-bottom-right-radius: 15px;\r\n  background-color: #fff;\r\n  padding-bottom: 15px;\r\n}\r\n\r\n.work-img {\r\n  width: 94%;\r\n  height: auto;\r\n  margin: 15px 3%;\r\n}\r\n\r\n.work-title p {\r\n  text-align: center;\r\n  font-weight: 700;\r\n  font-size: 20px;\r\n  margin-top: -15px;\r\n}\r\n\r\n.work-rating {\r\n  display: flex;\r\n  padding: 10px 40px;\r\n  justify-content: space-between;\r\n}\r\n\r\n.rate {\r\n  display: flex;\r\n  padding: 0 10px;\r\n  text-align: center;\r\n}\r\n\r\n.rate1 {\r\n  display: flex;\r\n  padding: 5px 10px;\r\n  text-align: center;\r\n}\r\n\r\n.like_title {\r\n  text-align: center;\r\n  margin-left: 20px;\r\n  margin-top: -5px;\r\n  padding-top: 0;\r\n}\r\n\r\n.star_title {\r\n  text-align: center;\r\n  margin-left: 20px;\r\n  margin-top: -4px;\r\n  padding-top: 0;\r\n}\r\n\r\n.likebutton {\r\n  width: 25px;\r\n  height: 25px;\r\n  margin-right: 8px;\r\n  cursor: pointer;\r\n}\r\n\r\n.likebutton:hover {\r\n  color: red;\r\n}\r\n\r\n.button {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin: 10px 3%;\r\n}\r\n\r\n.btn {\r\n  font-weight: 500;\r\n  font-style: italic;\r\n  border: 2px solid rgba(225, 170, 6, 0.9);\r\n  border-radius: 20px;\r\n  color: #fff;\r\n  background-color: rgb(0, 0, 0, 0.7);\r\n  margin: 0 5px;\r\n  padding: 8px 10px;\r\n  -webkit-box-reflect: below 0 linear-gradient(transparent, #0003);\r\n  transition: 3s;\r\n  font-size: 13px;\r\n  text-transform: uppercase;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn:hover {\r\n  color: #1d2b3a;\r\n  transition: 1s;\r\n  font-size: 15px;\r\n  font-weight: 700;\r\n  font-style: normal;\r\n  box-shadow: 0 0 10px rgba(225, 170, 6, 0.9);\r\n  background: rgba(225, 170, 6, 0.9);\r\n  border: 2px solid rgb(0, 0, 0, 0.7);\r\n  cursor: pointer;\r\n}\r\n\r\n.footer {\r\n  margin-top: 5%;\r\n  border-top: 2px solid rgba(225, 170, 6, 0.9);\r\n  width: 100%;\r\n}\r\n\r\n.footer p {\r\n  width: 94%;\r\n  margin: 0 3%;\r\n  padding: 15px 5px;\r\n  text-align: center;\r\n  color: #fff;\r\n  background-color: rgb(0, 0, 0, 0.7);\r\n  -webkit-box-reflect: below 0 linear-gradient(transparent, #0003);\r\n  transition: 3s;\r\n  font-size: 13px;\r\n  text-transform: uppercase;\r\n  cursor: pointer;\r\n}\r\n\r\n/* modal css */\r\n.backshadow {\r\n  width: 100%;\r\n  height: 100vh;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  background: rgba(0, 0, 0, 50%);\r\n  z-index: 2000;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.modal {\r\n  display: none;\r\n  position: fixed;\r\n  z-index: 1;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.9);\r\n}\r\n\r\n.backshadow .modal {\r\n  width: 70%;\r\n  height: 90vh;\r\n  background-color: #fff;\r\n  position: relative;\r\n  padding: 16px;\r\n  border: 1px solid #dfe1e6;\r\n  box-shadow: 0 48px 48px rgba(37, 47, 137, 8%);\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n\r\n.backshadow .modal .img-div {\r\n  width: 100%;\r\n  height: auto;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-top: 10px;\r\n}\r\n\r\n.backshadow .modal .img-div .img {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n#show-image {\r\n  width: 100%;\r\n  height: 200px;\r\n}\r\n\r\n#title {\r\n  margin-top: 2px;\r\n  text-align: center;\r\n}\r\n\r\n#movie-summary {\r\n  width: 100%;\r\n  font-size: 14px;\r\n  text-align: start;\r\n}\r\n\r\n.comments h3 {\r\n  width: 100%;\r\n  text-align: center;\r\n  margin-top: 10px;\r\n}\r\n\r\n#comment-list {\r\n  width: 100%;\r\n  list-style: none;\r\n}\r\n\r\n#comment-list li {\r\n  display: flex;\r\n  width: 100%;\r\n  font-size: 14px;\r\n}\r\n\r\n#comment-list li:nth-child(even) {\r\n  background-color: rgba(154, 154, 154, 0.82);\r\n  color: #fff;\r\n}\r\n\r\n.comment-form {\r\n  width: 100%;\r\n}\r\n\r\n.comment-form .custom-inputs {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.comments-container {\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n  width: 60%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n}\r\n\r\n.comments-container .comment {\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.modal-content {\r\n  background-color: #fefefe;\r\n  padding: 0 20px 10px 20px;\r\n  margin: 10px 10%;\r\n  text-align: center;\r\n  border: 2px solid rgba(225, 170, 6, 0.9);\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n  max-height: 100vh;\r\n  border-bottom-left-radius: 20px;\r\n  border-bottom-right-radius: 20px;\r\n  box-shadow:\r\n    0 5px 12px rgba(225, 170, 6, 0.9),\r\n    0 5px 12px rgba(225, 170, 6, 0.9);\r\n}\r\n\r\n.my-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.my-form input {\r\n  width: 90%;\r\n  margin: 0 5% 10px 5%;\r\n  border: 2px solid rgba(225, 170, 6, 0.9);\r\n  height: 25px;\r\n}\r\n\r\n.my-form textarea {\r\n  width: 90%;\r\n  margin: 0 5% 5px 5%;\r\n  border: 2px solid rgba(225, 170, 6, 0.9);\r\n  height: 100px;\r\n}\r\n\r\n.my-form button {\r\n  margin-top: 10px;\r\n  width: 30%;\r\n  align-self: center;\r\n}\r\n\r\n/* The Close Button */\r\n.close {\r\n  position: relative;\r\n  left: 45%;\r\n  color: #aaa;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n}\r\n\r\n.close:hover,\r\n.close:focus {\r\n  color: black;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  .nav-menu {\r\n    position: static;\r\n    display: flex;\r\n    flex-direction: row;\r\n    margin-top: -70px;\r\n  }\r\n\r\n  .nav-items {\r\n    display: flex;\r\n    flex-direction: row;\r\n    margin-left: -50%;\r\n    background: none;\r\n    height: 0;\r\n  }\r\n\r\n  .nav-items .nav-link {\r\n    list-style: none;\r\n    margin: 0 12px;\r\n    height: 0;\r\n  }\r\n\r\n  .nav-items .nav-link a {\r\n    text-decoration: none;\r\n    margin: 0 12px;\r\n    padding: 5px 15px;\r\n    font-size: 18px;\r\n    font-weight: 700;\r\n    color: rgba(225, 170, 6, 0.9);\r\n    transition: 1s all ease-in-out;\r\n  }\r\n\r\n  .nav-items .nav-link a:hover {\r\n    transition: 1s all ease-in-out;\r\n    border-bottom: 2px solid #f1f18a;\r\n  }\r\n\r\n  .hamburger {\r\n    display: none;\r\n  }\r\n\r\n  .show-count {\r\n    color: rgba(225, 170, 6, 0.9);\r\n    margin-left: 30px;\r\n    font-size: 18px;\r\n    text-transform: uppercase;\r\n  }\r\n\r\n  .work-section {\r\n    margin-top: 10px;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n  }\r\n\r\n  .work-cards {\r\n    width: 20%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n  }\r\n\r\n  .work-box {\r\n    border: 3px solid rgba(225, 170, 6, 0.9);\r\n    width: 80%;\r\n    margin: 20px 10%;\r\n    border-bottom-left-radius: 15px;\r\n    border-bottom-right-radius: 15px;\r\n    background-color: #fff;\r\n    padding-bottom: 15px;\r\n    transition: all 1s ease-out;\r\n  }\r\n\r\n  .work-box:hover {\r\n    box-shadow:\r\n      0 5px 12px rgba(225, 170, 6, 0.9),\r\n      0 5px 12px rgba(225, 170, 6, 0.9);\r\n    transition: all 2s ease-out;\r\n    cursor: pointer;\r\n    font-style: italic;\r\n    color: #fff;\r\n    background-color: rgb(0, 0, 0, 0.7);\r\n    margin: 0 5px;\r\n    -webkit-box-reflect: below 0 linear-gradient(transparent, #0003);\r\n  }\r\n\r\n  .work-rating {\r\n    padding: 0 10px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n  }\r\n\r\n  .rate {\r\n    width: 50%;\r\n    height: 25px;\r\n    margin: 3px 10px;\r\n    padding: 0;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n  }\r\n\r\n  .rate1 {\r\n    width: 50%;\r\n    height: 25px;\r\n    margin: 7px 10px;\r\n    padding: 0;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n  }\r\n\r\n  .likebutton {\r\n    width: 22px;\r\n    margin-top: 0;\r\n  }\r\n\r\n  .likebutton:hover {\r\n    color: #fff;\r\n  }\r\n\r\n  .fa-star {\r\n    display: flex;\r\n    color: #000;\r\n  }\r\n\r\n  /* comment modal popup desktop */\r\n  .modal-content {\r\n    width: 50%;\r\n    margin: 12px 25% 6% 25%;\r\n    z-index: 1;\r\n  }\r\n\r\n  .close {\r\n    margin-right: -60px;\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  #show-image {\r\n    height: 300px;\r\n  }\r\n\r\n  .movie-summary {\r\n    font-size: 8px;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Playfair Display', sans-serif;\r\n  background-color: rgb(0, 0, 0, 0.7);\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n  height: 80px;\r\n  background-image: url(../images/bg-img.jpeg);\r\n  opacity: 0.8;\r\n  padding-bottom: 0;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n#head-img {\r\n  width: 200px;\r\n  height: 200px;\r\n  margin-top: -40px;\r\n  transition: 4s ease-out;\r\n}\r\n\r\n.nav-menu {\r\n  background-color: black;\r\n  height: 100vh;\r\n  width: 0;\r\n}\r\n\r\n.nav-items {\r\n  display: flex;\r\n  flex-direction: column;\r\n  position: fixed;\r\n  width: 100%;\r\n  text-align: start;\r\n  transition: 3s ease-out;\r\n  margin-left: 40%;\r\n  padding-top: 100px;\r\n  background-color: #000;\r\n  height: 100vh;\r\n}\r\n\r\n.nav-items.active {\r\n  left: 0;\r\n}\r\n\r\n.nav-link {\r\n  margin: 16px 30px;\r\n}\r\n\r\n.nav-items .nav-link {\r\n  list-style: none;\r\n  margin: 12px;\r\n}\r\n\r\n.nav-items .nav-link a {\r\n  text-decoration: none;\r\n  margin: 0 12px;\r\n  padding: 5px 15px;\r\n  font-size: 18px;\r\n  font-weight: 700;\r\n  color: rgba(225, 170, 6, 0.9);\r\n  transition: 1s all ease-in-out;\r\n}\r\n\r\n.nav-items .nav-link a:hover {\r\n  transition: 1s ease-in-out;\r\n  margin: 3px;\r\n  border-bottom: 2px solid #f1f18a;\r\n}\r\n\r\n.hamburger {\r\n  display: block;\r\n  cursor: pointer;\r\n  color: rgba(225, 170, 6, 0.9);\r\n  margin: 25px 40px;\r\n  z-index: 1;\r\n}\r\n\r\n.bar {\r\n  display: block;\r\n  width: 25px;\r\n  height: 3px;\r\n  margin: 5px auto;\r\n  -webkit-transition: all 1s ease-in-out;\r\n  transition: all 1s ease-in-out;\r\n  background-color: rgba(225, 170, 6, 0.9);\r\n}\r\n\r\n.hamburger.active .bar:nth-child(2) {\r\n  opacity: 0;\r\n  background-color: rgba(225, 170, 6, 0.9);\r\n}\r\n\r\n.hamburger.active .bar:nth-child(1) {\r\n  transform: translateY(8px) rotate(45deg);\r\n  background-color: rgba(225, 170, 6, 0.9);\r\n}\r\n\r\n.hamburger.active .bar:nth-child(3) {\r\n  transform: translateY(-8px) rotate(-45deg);\r\n  background-color: rgba(225, 170, 6, 0.9);\r\n}\r\n\r\n.show-count {\r\n  color: rgba(225, 170, 6, 0.9);\r\n  margin-left: 10%;\r\n  font-size: 18px;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.work-box {\r\n  border: 3px solid rgba(225, 170, 6, 0.9);\r\n  width: 80%;\r\n  margin: 20px 10%;\r\n  border-bottom-left-radius: 15px;\r\n  border-bottom-right-radius: 15px;\r\n  background-color: #fff;\r\n  padding-bottom: 15px;\r\n}\r\n\r\n.work-img {\r\n  width: 94%;\r\n  height: auto;\r\n  margin: 15px 3%;\r\n}\r\n\r\n.work-title p {\r\n  text-align: center;\r\n  font-weight: 700;\r\n  font-size: 20px;\r\n  margin-top: -15px;\r\n}\r\n\r\n.work-rating {\r\n  display: flex;\r\n  padding: 10px 40px;\r\n  justify-content: space-between;\r\n}\r\n\r\n.rate {\r\n  display: flex;\r\n  padding: 0 10px;\r\n  text-align: center;\r\n}\r\n\r\n.rate1 {\r\n  display: flex;\r\n  padding: 5px 10px;\r\n  text-align: center;\r\n}\r\n\r\n.like_title {\r\n  text-align: center;\r\n  margin-left: 20px;\r\n  margin-top: -5px;\r\n  padding-top: 0;\r\n}\r\n\r\n.star_title {\r\n  text-align: center;\r\n  margin-left: 20px;\r\n  margin-top: -4px;\r\n  padding-top: 0;\r\n}\r\n\r\n.likebutton {\r\n  width: 25px;\r\n  height: 25px;\r\n  margin-right: 8px;\r\n  cursor: pointer;\r\n}\r\n\r\n.likebutton:hover {\r\n  color: red;\r\n}\r\n\r\n.button {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin: 10px 3%;\r\n}\r\n\r\n.btn {\r\n  font-weight: 500;\r\n  font-style: italic;\r\n  border: 2px solid rgba(225, 170, 6, 0.9);\r\n  border-radius: 20px;\r\n  color: #fff;\r\n  background-color: rgb(0, 0, 0, 0.7);\r\n  margin: 0 5px;\r\n  padding: 8px 10px;\r\n  -webkit-box-reflect: below 0 linear-gradient(transparent, #0003);\r\n  transition: 3s;\r\n  font-size: 13px;\r\n  text-transform: uppercase;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn:hover {\r\n  color: #1d2b3a;\r\n  transition: 1s;\r\n  font-size: 15px;\r\n  font-weight: 700;\r\n  font-style: normal;\r\n  box-shadow: 0 0 10px rgba(225, 170, 6, 0.9);\r\n  background: rgba(225, 170, 6, 0.9);\r\n  border: 2px solid rgb(0, 0, 0, 0.7);\r\n  cursor: pointer;\r\n}\r\n\r\n.footer {\r\n  margin-top: 5%;\r\n  border-top: 2px solid rgba(225, 170, 6, 0.9);\r\n  width: 100%;\r\n}\r\n\r\n.footer p {\r\n  width: 94%;\r\n  margin: 0 3%;\r\n  padding: 15px 5px;\r\n  text-align: center;\r\n  color: #fff;\r\n  background-color: rgb(0, 0, 0, 0.7);\r\n  -webkit-box-reflect: below 0 linear-gradient(transparent, #0003);\r\n  transition: 3s;\r\n  font-size: 13px;\r\n  text-transform: uppercase;\r\n  cursor: pointer;\r\n}\r\n\r\n/* modal css */\r\n.backshadow {\r\n  width: 100%;\r\n  height: 100vh;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  background: rgba(0, 0, 0, 50%);\r\n  z-index: 2000;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.modal {\r\n  display: none;\r\n  position: fixed;\r\n  z-index: 1;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.9);\r\n}\r\n\r\n.backshadow .modal {\r\n  width: 70%;\r\n  height: 90vh;\r\n  background-color: #fff;\r\n  position: relative;\r\n  padding: 16px;\r\n  border: 1px solid #dfe1e6;\r\n  box-shadow: 0 48px 48px rgba(37, 47, 137, 8%);\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n\r\n.backshadow .modal .img-div {\r\n  width: 100%;\r\n  height: auto;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-top: 10px;\r\n}\r\n\r\n.backshadow .modal .img-div .img {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n#show-image {\r\n  width: 100%;\r\n  height: 200px;\r\n}\r\n\r\n#title {\r\n  margin-top: 2px;\r\n  text-align: center;\r\n}\r\n\r\n#movie-summary {\r\n  width: 100%;\r\n  font-size: 14px;\r\n  text-align: start;\r\n}\r\n\r\n.comments h3 {\r\n  width: 100%;\r\n  text-align: center;\r\n  margin-top: 10px;\r\n}\r\n\r\n#comment-list {\r\n  width: 100%;\r\n  list-style: none;\r\n}\r\n\r\n#comment-list li {\r\n  display: flex;\r\n  width: 100%;\r\n  font-size: 14px;\r\n}\r\n\r\n#comment-list li:nth-child(even) {\r\n  background-color: rgba(154, 154, 154, 0.82);\r\n  color: #fff;\r\n}\r\n\r\n.comment-form {\r\n  width: 100%;\r\n}\r\n\r\n.comment-form .custom-inputs {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.comments-container {\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n  width: 60%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n}\r\n\r\n.comments-container .comment {\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.modal-content {\r\n  background-color: #fefefe;\r\n  padding: 0 20px 10px 20px;\r\n  margin: 10px 10%;\r\n  text-align: center;\r\n  border: 2px solid rgba(225, 170, 6, 0.9);\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n  max-height: 100vh;\r\n  border-bottom-left-radius: 20px;\r\n  border-bottom-right-radius: 20px;\r\n  box-shadow:\r\n    0 5px 12px rgba(225, 170, 6, 0.9),\r\n    0 5px 12px rgba(225, 170, 6, 0.9);\r\n}\r\n\r\n.my-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.my-form input {\r\n  width: 90%;\r\n  margin: 0 5% 10px 5%;\r\n  border: 2px solid rgba(225, 170, 6, 0.9);\r\n  height: 25px;\r\n}\r\n\r\n.my-form textarea {\r\n  width: 90%;\r\n  margin: 0 5% 5px 5%;\r\n  border: 2px solid rgba(225, 170, 6, 0.9);\r\n  height: 100px;\r\n}\r\n\r\n.my-form button {\r\n  margin-top: 10px;\r\n  width: 30%;\r\n  align-self: center;\r\n}\r\n\r\n/* The Close Button */\r\n.close {\r\n  position: relative;\r\n  left: 45%;\r\n  color: #aaa;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n}\r\n\r\n.close:hover,\r\n.close:focus {\r\n  color: black;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  .nav-menu {\r\n    position: static;\r\n    display: flex;\r\n    flex-direction: row;\r\n    margin-top: -70px;\r\n  }\r\n\r\n  .nav-items {\r\n    display: flex;\r\n    flex-direction: row;\r\n    margin-left: -50%;\r\n    background: none;\r\n    height: 0;\r\n  }\r\n\r\n  .nav-items .nav-link {\r\n    list-style: none;\r\n    margin: 0 12px;\r\n    height: 0;\r\n  }\r\n\r\n  .nav-items .nav-link a {\r\n    text-decoration: none;\r\n    margin: 0 12px;\r\n    padding: 5px 15px;\r\n    font-size: 18px;\r\n    font-weight: 700;\r\n    color: rgba(225, 170, 6, 0.9);\r\n    transition: 1s all ease-in-out;\r\n  }\r\n\r\n  .nav-items .nav-link a:hover {\r\n    transition: 1s all ease-in-out;\r\n    border-bottom: 2px solid #f1f18a;\r\n  }\r\n\r\n  .hamburger {\r\n    display: none;\r\n  }\r\n\r\n  .show-count {\r\n    color: rgba(225, 170, 6, 0.9);\r\n    margin-left: 30px;\r\n    font-size: 18px;\r\n    text-transform: uppercase;\r\n  }\r\n\r\n  .work-section {\r\n    margin-top: 10px;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n  }\r\n\r\n  .work-cards {\r\n    width: 20%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n  }\r\n\r\n  .work-box {\r\n    border: 3px solid rgba(225, 170, 6, 0.9);\r\n    width: 80%;\r\n    margin: 20px 10%;\r\n    border-bottom-left-radius: 15px;\r\n    border-bottom-right-radius: 15px;\r\n    background-color: #fff;\r\n    padding-bottom: 15px;\r\n    transition: all 1s ease-out;\r\n  }\r\n\r\n  .work-box:hover {\r\n    box-shadow:\r\n      0 5px 12px rgba(225, 170, 6, 0.9),\r\n      0 5px 12px rgba(225, 170, 6, 0.9);\r\n    transition: all 2s ease-out;\r\n    cursor: pointer;\r\n    font-style: italic;\r\n    color: #fff;\r\n    background-color: rgb(0, 0, 0, 0.7);\r\n    margin: 0 5px;\r\n    -webkit-box-reflect: below 0 linear-gradient(transparent, #0003);\r\n  }\r\n\r\n  .work-rating {\r\n    padding: 0 10px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n  }\r\n\r\n  .rate {\r\n    width: 50%;\r\n    height: 25px;\r\n    margin: 3px 10px;\r\n    padding: 0;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n  }\r\n\r\n  .rate1 {\r\n    width: 50%;\r\n    height: 25px;\r\n    margin: 7px 10px;\r\n    padding: 0;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n  }\r\n\r\n  .likebutton {\r\n    width: 22px;\r\n    margin-top: 0;\r\n  }\r\n\r\n  .likebutton:hover {\r\n    color: #fff;\r\n  }\r\n\r\n  .fa-star {\r\n    display: flex;\r\n    color: #000;\r\n  }\r\n\r\n  /* comment modal popup desktop */\r\n  .modal-content {\r\n    width: 50%;\r\n    margin: 12px 25% 6% 25%;\r\n    z-index: 1;\r\n  }\r\n\r\n  .close {\r\n    margin-right: -60px;\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  #show-image {\r\n    height: 300px;\r\n  }\r\n\r\n  .movie-summary {\r\n    font-size: 8px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/app.js */ "./src/modules/app.js");
/* harmony import */ var _back_img_removebg_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./back-img-removebg.png */ "./src/back-img-removebg.png");




window.addEventListener('DOMContentLoaded', () => {
  _modules_app_js__WEBPACK_IMPORTED_MODULE_1__["default"].initialize();
});

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-items');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

const backImg = document.getElementById('head-img');
backImg.src = _back_img_removebg_png__WEBPACK_IMPORTED_MODULE_2__;
// document.body.appendChild(backImg);


/***/ }),

/***/ "./src/modules/app.js":
/*!****************************!*\
  !*** ./src/modules/app.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DisplayMovies)
/* harmony export */ });
/* harmony import */ var _appUtility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appUtility.js */ "./src/modules/appUtility.js");
/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display.js */ "./src/modules/display.js");
/* harmony import */ var _show_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./show.js */ "./src/modules/show.js");
/* eslint-disable import/no-cycle */
/* eslint-disable comma-dangle */




class DisplayMovies {
  onLineTvAPI = null;

  static involveId = 'MVuGnV1UCcQw08IPSFxh';

  static allLikes = [];

  static async initialize() {
    this.onLineTvAPI = new _appUtility_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    let shows = await this.onLineTvAPI.getMovies(1);
    this.allLikes = await DisplayMovies.getAllLikes(this.invovleId);

    shows = shows.map((show) => {
      const showlikes = this.allLikes.find(
        (like) => like.item_id === show.id
      ) || { likes: 0, item_id: show.id };
      const myShow = new _show_js__WEBPACK_IMPORTED_MODULE_2__["default"](
        show.id,
        show.name,
        show.image.medium,
        show.summary,
        show.genres,
        show.language,
        showlikes.likes
      );
      return myShow;
    });

    shows = shows.filter((_, i) => i < 25);
    _display_js__WEBPACK_IMPORTED_MODULE_1__["default"].displayShows(shows);
  }

  static async getAllLikes(appId) {
    return this.onLineTvAPI.getAllLikes(appId);
  }

  static async like(showId) {
    const currentLikes = await this.onLineTvAPI.postLike(
      this.involveId,
      showId
    );

    _display_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateLike(showId, currentLikes);
  }

  static async getComments(showId) {
    const comments = await this.onLineTvAPI.getComments(this.involveId, showId);
    return comments;
  }

  static getCommentCount(comments) {
    return comments.length;
  }

  static getShowsCounter(shows) {
    return shows.length;
  }

  static async postComment(showId, username, comment) {
    const response = await this.onLineTvAPI.postComments(
      this.involveId,
      showId,
      username,
      comment
    );
    return response;
  }
}


/***/ }),

/***/ "./src/modules/appUtility.js":
/*!***********************************!*\
  !*** ./src/modules/appUtility.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OnLineTvAPI)
/* harmony export */ });
/* eslint-disable comma-dangle */
class OnLineTvAPI {
  constructor() {
    this.urlApi1 = 'https://api.tvmaze.com';
    // eslint-disable-next-line operator-linebreak
    this.involvementUrlApi2 =
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
  }

  async getMovies(page = 1) {
    const response = await fetch(`${this.urlApi1}/shows?page=${page}`, {
      method: 'GET',
    });

    const result = await response.json();
    return result;
  }

  async getAllLikes(appId) {
    try {
      const response = await fetch(
        `${this.involvementUrlApi2}/apps/${appId}/likes`,
        {
          method: 'GET',
        }
      );

      if (response.ok) {
        const result = await response.json();
        return result;
      }
      throw new Error('no likes');
    } catch (e) {
      return [];
    }
  }

  async getLikes(appId, showId) {
    const response = await fetch(
      `${this.involvementUrlApi2}/apps/${appId}/likes`,
      {
        method: 'GET',
      }
    );

    const result = await response.json();
    const myResult = result.find((like) => like.item_id === showId) || {
      likes: 0,
      item_id: showId,
    };

    return myResult.likes;
  }

  async postLike(appId, showId) {
    await fetch(`${this.involvementUrlApi2}/apps/${appId}/likes`, {
      method: 'POST',
      body: JSON.stringify({
        item_id: showId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const mylikes = await this.getLikes(appId, showId);

    return mylikes;
  }

  async getComments(appId, showId) {
    try {
      const commentsResponse = await fetch(
        `${this.involvementUrlApi2}/apps/${appId}/comments?item_id=${showId}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const comments = await commentsResponse.json();
      return comments;
    } catch (e) {
      return [];
    }
  }

  async postComments(appId, showId, username, comment) {
    const commentsResponse = await fetch(
      `${this.involvementUrlApi2}/apps/${appId}/comments`,
      {
        method: 'POST',
        body: JSON.stringify({
          item_id: showId,
          username,
          comment,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return commentsResponse;
  }
}


/***/ }),

/***/ "./src/modules/commentModal.js":
/*!*************************************!*\
  !*** ./src/modules/commentModal.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ "./src/modules/app.js");
/* eslint-disable comma-dangle */
/* eslint import/no-cycle: [2, { maxDepth: 1 }] */


const commentModal = async (showId, shows) => {
  const show = shows.find((t) => t.id === parseInt(showId, 10));

  const commentModalView = document.getElementById('comment-modal');
  commentModalView.style.display = 'block';

  const imgEl = commentModalView.querySelector('#show-image');
  const showTitleEl = commentModalView.querySelector('.movie-info #title');
  const showSummaryEl = commentModalView.querySelector(
    '.movie-info #movie-summary'
  );
  const commentCounter = commentModalView.querySelector(
    '.comments #comment-counter'
  );
  const commentList = commentModalView.querySelector('.comments #comment-list');
  const closeEl = commentModalView.querySelector('.close');
  const showIdEl = commentModalView.querySelector('form #show_id');
  showIdEl.value = showId;

  closeEl.addEventListener('click', () => {
    commentModalView.style.display = 'none';
  });

  imgEl.src = show.image;
  showTitleEl.textContent = show.title;
  showSummaryEl.innerHTML = show.summary;

  const response = await _app_js__WEBPACK_IMPORTED_MODULE_0__["default"].getComments(showId);
  commentCounter.textContent = `(${
    typeof response.length === 'undefined' ? 0 : response.length
  })`;

  if (response.length > 0) {
    commentList.innerHTML = '';
    response.forEach((comment) => {
      commentList.innerHTML += `<li>Date: ${comment.creation_date}:<p> ${comment.comment}</p> - By: ${comment.username}</li>`;
    });
  } else {
    commentList.innerHTML = 'There are no Comments for this show!';
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentModal);


/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Display)
/* harmony export */ });
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ "./src/modules/app.js");
/* harmony import */ var _commentModal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentModal.js */ "./src/modules/commentModal.js");
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable import/no-cycle */
/* eslint-disable indent */
/* eslint-disable comma-dangle */



class Display {
  static displayShows(shows) {
    const movieSection = document.querySelector('.work-section');

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < shows.length; i++) {
      const movieList = document.createElement('li');
      movieList.classList.add('work-cards');
      movieList.innerHTML += `<div class="work-box">
          <img
            class="work-img"
            src="${shows[i].image}"
            alt="movie image"
          />
          <div class="card-body">
            <div class="work-title">
              <p class="work-para">${shows[i].title}</p>
            </div>
            <div class="work-rating">
              <div class="rate">
              <img class='likebutton' src='https://img.icons8.com/ios-filled/50/000000/hearts.png'>
              <span id='likes_${shows[i].id}'>${shows[i].likes} ${
        shows[i].likes <= 1 ? 'Like' : 'Likes'
      }</span>
              </div>
              <div class="rate1">
                <i class="fa-regular fa-star likebutto"></i>
                <div class="star_title"><span>Stars</span></div>
              </div>
            </div>
            <div class="button">
            <button id='comment_${
              shows[i].id
            }' class='btn btn-primary btn-md card-comment-btn comments'>Comments</button>
              
            </div>
          </div>
        </div>`;
      movieSection.append(movieList);
    }

    document.querySelector(
      '.show-count'
    ).innerHTML = `Number of Shows: ${shows.length}`;

    document.querySelectorAll('.comments').forEach((commentBtn) =>
      commentBtn.addEventListener('click', (ev) => {
        (0,_commentModal_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ev.target.id.split('_')[1], shows);
      })
    );

    document.querySelectorAll('.likebutton').forEach((likeBtn, i) =>
      likeBtn.addEventListener('click', () => {
        _app_js__WEBPACK_IMPORTED_MODULE_0__["default"].like(shows[i].id);
      })
    );

    document
      .querySelector('#post-comment-form')
      .addEventListener('submit', async (ev) => {
        ev.preventDefault();

        const username = ev.target.elements.username.value.trim();
        const comment = ev.target.elements.comment.value.trim();
        const showID = ev.target.elements.show_id.value.trim();

        if (username === '' || comment === '') return;

        await _app_js__WEBPACK_IMPORTED_MODULE_0__["default"].postComment(
          parseInt(showID, 10),
          username,
          comment
        );

        ev.target.elements.username.value = '';
        ev.target.elements.comment.value = '';

        const comments = await _app_js__WEBPACK_IMPORTED_MODULE_0__["default"].getComments(parseInt(showID, 10));
        Display.updateCommentList(comments);
      });
  }

  static updateLike(showId, currentLikes) {
    const likeSpan = document.querySelector(`#likes_${showId}`);
    likeSpan.textContent = `${currentLikes} ${
      currentLikes <= 1 ? 'Like' : 'Likes'
    }`;
  }

  static updateCommentList(comments) {
    const commentsListEl = document.querySelector('#comment-list');

    commentsListEl.innerHTML = '';
    comments.forEach((comment) => {
      commentsListEl.innerHTML += `<li>${comment.creation_date}:<p> ${comment.comment}</p> - By: ${comment.username}</li>`;
    });

    const commentModalView = document.getElementById('comment-modal');
    const commentCounter = commentModalView.querySelector(
      '.comments #comment-counter'
    );
    commentCounter.textContent = comments.length;
  }
}


/***/ }),

/***/ "./src/modules/show.js":
/*!*****************************!*\
  !*** ./src/modules/show.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Show)
/* harmony export */ });
/* eslint-disable comma-dangle */
class Show {
  constructor(
    showId,
    showTitle,
    image,
    summary,
    genres,
    language,
    likes = 0,
    comments = []
  ) {
    this.id = showId;
    this.title = showTitle;
    this.image = image;
    this.summary = summary;
    this.genres = genres;
    this.language = language;
    this.likes = likes;
    this.comments = comments;
  }

  //   getLikes() {}
}


/***/ }),

/***/ "./images/bg-img.jpeg":
/*!****************************!*\
  !*** ./images/bg-img.jpeg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "02145405106a63a8e0f6.jpeg";

/***/ }),

/***/ "./src/back-img-removebg.png":
/*!***********************************!*\
  !*** ./src/back-img-removebg.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dfc786866f5e1ef369d2.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxVQUFVLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sT0FBTyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFL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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDJEQUF5QjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDJEQUF5QjtBQUN4RDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsT0FBTztBQUM3RCw4QkFBOEIsY0FBYztBQUM1QztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxzQkFBc0IsT0FBTyxnQkFBZ0IsYUFBYSxpQkFBaUI7QUFDcEgsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQy9HQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rYW5iYW4tZ3JvdXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2thbmJhbi1ncm91cC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8va2FuYmFuLWdyb3VwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9rYW5iYW4tZ3JvdXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9rYW5iYW4tZ3JvdXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8va2FuYmFuLWdyb3VwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2thbmJhbi1ncm91cC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8va2FuYmFuLWdyb3VwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2thbmJhbi1ncm91cC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9rYW5iYW4tZ3JvdXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9rYW5iYW4tZ3JvdXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9rYW5iYW4tZ3JvdXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8va2FuYmFuLWdyb3VwLy4vc3JjL21vZHVsZXMvYXBwLmpzIiwid2VicGFjazovL2thbmJhbi1ncm91cC8uL3NyYy9tb2R1bGVzL2FwcFV0aWxpdHkuanMiLCJ3ZWJwYWNrOi8va2FuYmFuLWdyb3VwLy4vc3JjL21vZHVsZXMvY29tbWVudE1vZGFsLmpzIiwid2VicGFjazovL2thbmJhbi1ncm91cC8uL3NyYy9tb2R1bGVzL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8va2FuYmFuLWdyb3VwLy4vc3JjL21vZHVsZXMvc2hvdy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2JnLWltZy5qcGVnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5Jywgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjcpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogODBweDtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICBvcGFjaXR5OiAwLjg7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxufVxcclxcblxcclxcbiNoZWFkLWltZyB7XFxyXFxuICB3aWR0aDogMjAwcHg7XFxyXFxuICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgbWFyZ2luLXRvcDogLTQwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiA0cyBlYXNlLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1tZW51IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHdpZHRoOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWl0ZW1zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG4gIHRyYW5zaXRpb246IDNzIGVhc2Utb3V0O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDQwJTtcXHJcXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWl0ZW1zLmFjdGl2ZSB7XFxyXFxuICBsZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbmsge1xcclxcbiAgbWFyZ2luOiAxNnB4IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5uYXYtaXRlbXMgLm5hdi1saW5rIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBtYXJnaW46IDEycHg7XFxyXFxufVxcclxcblxcclxcbi5uYXYtaXRlbXMgLm5hdi1saW5rIGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgbWFyZ2luOiAwIDEycHg7XFxyXFxuICBwYWRkaW5nOiA1cHggMTVweDtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBjb2xvcjogcmdiYSgyMjUsIDE3MCwgNiwgMC45KTtcXHJcXG4gIHRyYW5zaXRpb246IDFzIGFsbCBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1pdGVtcyAubmF2LWxpbmsgYTpob3ZlciB7XFxyXFxuICB0cmFuc2l0aW9uOiAxcyBlYXNlLWluLW91dDtcXHJcXG4gIG1hcmdpbjogM3B4O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmMWYxOGE7XFxyXFxufVxcclxcblxcclxcbi5oYW1idXJnZXIge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBjb2xvcjogcmdiYSgyMjUsIDE3MCwgNiwgMC45KTtcXHJcXG4gIG1hcmdpbjogMjVweCA0MHB4O1xcclxcbiAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmJhciB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHdpZHRoOiAyNXB4O1xcclxcbiAgaGVpZ2h0OiAzcHg7XFxyXFxuICBtYXJnaW46IDVweCBhdXRvO1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbi1vdXQ7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbi1vdXQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNSwgMTcwLCA2LCAwLjkpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGFtYnVyZ2VyLmFjdGl2ZSAuYmFyOm50aC1jaGlsZCgyKSB7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjUsIDE3MCwgNiwgMC45KTtcXHJcXG59XFxyXFxuXFxyXFxuLmhhbWJ1cmdlci5hY3RpdmUgLmJhcjpudGgtY2hpbGQoMSkge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDhweCkgcm90YXRlKDQ1ZGVnKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI1LCAxNzAsIDYsIDAuOSk7XFxyXFxufVxcclxcblxcclxcbi5oYW1idXJnZXIuYWN0aXZlIC5iYXI6bnRoLWNoaWxkKDMpIHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOHB4KSByb3RhdGUoLTQ1ZGVnKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI1LCAxNzAsIDYsIDAuOSk7XFxyXFxufVxcclxcblxcclxcbi5zaG93LWNvdW50IHtcXHJcXG4gIGNvbG9yOiByZ2JhKDIyNSwgMTcwLCA2LCAwLjkpO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxufVxcclxcblxcclxcbi53b3JrLWJveCB7XFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCByZ2JhKDIyNSwgMTcwLCA2LCAwLjkpO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIG1hcmdpbjogMjBweCAxMCU7XFxyXFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi53b3JrLWltZyB7XFxyXFxuICB3aWR0aDogOTQlO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgbWFyZ2luOiAxNXB4IDMlO1xcclxcbn1cXHJcXG5cXHJcXG4ud29yay10aXRsZSBwIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBtYXJnaW4tdG9wOiAtMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLndvcmstcmF0aW5nIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDQwcHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5yYXRlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwYWRkaW5nOiAwIDEwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5yYXRlMSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5saWtlX3RpdGxlIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcbiAgbWFyZ2luLXRvcDogLTVweDtcXHJcXG4gIHBhZGRpbmctdG9wOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc3Rhcl90aXRsZSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG4gIG1hcmdpbi10b3A6IC00cHg7XFxyXFxuICBwYWRkaW5nLXRvcDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VidXR0b24ge1xcclxcbiAgd2lkdGg6IDI1cHg7XFxyXFxuICBoZWlnaHQ6IDI1cHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDhweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VidXR0b246aG92ZXIge1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDEwcHggMyU7XFxyXFxufVxcclxcblxcclxcbi5idG4ge1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjI1LCAxNzAsIDYsIDAuOSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC43KTtcXHJcXG4gIG1hcmdpbjogMCA1cHg7XFxyXFxuICBwYWRkaW5nOiA4cHggMTBweDtcXHJcXG4gIC13ZWJraXQtYm94LXJlZmxlY3Q6IGJlbG93IDAgbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50LCAjMDAwMyk7XFxyXFxuICB0cmFuc2l0aW9uOiAzcztcXHJcXG4gIGZvbnQtc2l6ZTogMTNweDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5idG46aG92ZXIge1xcclxcbiAgY29sb3I6ICMxZDJiM2E7XFxyXFxuICB0cmFuc2l0aW9uOiAxcztcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDIyNSwgMTcwLCA2LCAwLjkpO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgyMjUsIDE3MCwgNiwgMC45KTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigwLCAwLCAwLCAwLjcpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIHtcXHJcXG4gIG1hcmdpbi10b3A6IDUlO1xcclxcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYmEoMjI1LCAxNzAsIDYsIDAuOSk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciBwIHtcXHJcXG4gIHdpZHRoOiA5NCU7XFxyXFxuICBtYXJnaW46IDAgMyU7XFxyXFxuICBwYWRkaW5nOiAxNXB4IDVweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNyk7XFxyXFxuICAtd2Via2l0LWJveC1yZWZsZWN0OiBiZWxvdyAwIGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCwgIzAwMDMpO1xcclxcbiAgdHJhbnNpdGlvbjogM3M7XFxyXFxuICBmb250LXNpemU6IDEzcHg7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBtb2RhbCBjc3MgKi9cXHJcXG4uYmFja3NoYWRvdyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCA1MCUpO1xcclxcbiAgei1pbmRleDogMjAwMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB0b3A6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcXHJcXG59XFxyXFxuXFxyXFxuLmJhY2tzaGFkb3cgLm1vZGFsIHtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxuICBoZWlnaHQ6IDkwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgcGFkZGluZzogMTZweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZmUxZTY7XFxyXFxuICBib3gtc2hhZG93OiAwIDQ4cHggNDhweCByZ2JhKDM3LCA0NywgMTM3LCA4JSk7XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFja3NoYWRvdyAubW9kYWwgLmltZy1kaXYge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJhY2tzaGFkb3cgLm1vZGFsIC5pbWctZGl2IC5pbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbiNzaG93LWltYWdlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAyMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3RpdGxlIHtcXHJcXG4gIG1hcmdpbi10b3A6IDJweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI21vdmllLXN1bW1hcnkge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzIGgzIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnQtbGlzdCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNjb21tZW50LWxpc3QgbGkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY29tbWVudC1saXN0IGxpOm50aC1jaGlsZChldmVuKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NCwgMTU0LCAxNTQsIDAuODIpO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWZvcm0ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWZvcm0gLmN1c3RvbS1pbnB1dHMge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzLWNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIHdpZHRoOiA2MCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cy1jb250YWluZXIgLmNvbW1lbnQge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtY29udGVudCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcclxcbiAgcGFkZGluZzogMCAyMHB4IDEwcHggMjBweDtcXHJcXG4gIG1hcmdpbjogMTBweCAxMCU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDIyNSwgMTcwLCA2LCAwLjkpO1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcXHJcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xcclxcbiAgYm94LXNoYWRvdzpcXHJcXG4gICAgMCA1cHggMTJweCByZ2JhKDIyNSwgMTcwLCA2LCAwLjkpLFxcclxcbiAgICAwIDVweCAxMnB4IHJnYmEoMjI1LCAxNzAsIDYsIDAuOSk7XFxyXFxufVxcclxcblxcclxcbi5teS1mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4ubXktZm9ybSBpbnB1dCB7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgbWFyZ2luOiAwIDUlIDEwcHggNSU7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDIyNSwgMTcwLCA2LCAwLjkpO1xcclxcbiAgaGVpZ2h0OiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubXktZm9ybSB0ZXh0YXJlYSB7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgbWFyZ2luOiAwIDUlIDVweCA1JTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjI1LCAxNzAsIDYsIDAuOSk7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubXktZm9ybSBidXR0b24ge1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gIHdpZHRoOiAzMCU7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIFRoZSBDbG9zZSBCdXR0b24gKi9cXHJcXG4uY2xvc2Uge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbGVmdDogNDUlO1xcclxcbiAgY29sb3I6ICNhYWE7XFxyXFxuICBmb250LXNpemU6IDI4cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlOmhvdmVyLFxcclxcbi5jbG9zZTpmb2N1cyB7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICAubmF2LW1lbnUge1xcclxcbiAgICBwb3NpdGlvbjogc3RhdGljO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBtYXJnaW4tdG9wOiAtNzBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXYtaXRlbXMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTUwJTtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgaGVpZ2h0OiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdi1pdGVtcyAubmF2LWxpbmsge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBtYXJnaW46IDAgMTJweDtcXHJcXG4gICAgaGVpZ2h0OiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdi1pdGVtcyAubmF2LWxpbmsgYSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgbWFyZ2luOiAwIDEycHg7XFxyXFxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGNvbG9yOiByZ2JhKDIyNSwgMTcwLCA2LCAwLjkpO1xcclxcbiAgICB0cmFuc2l0aW9uOiAxcyBhbGwgZWFzZS1pbi1vdXQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2LWl0ZW1zIC5uYXYtbGluayBhOmhvdmVyIHtcXHJcXG4gICAgdHJhbnNpdGlvbjogMXMgYWxsIGVhc2UtaW4tb3V0O1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2YxZjE4YTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oYW1idXJnZXIge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNob3ctY291bnQge1xcclxcbiAgICBjb2xvcjogcmdiYSgyMjUsIDE3MCwgNiwgMC45KTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC53b3JrLXNlY3Rpb24ge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLndvcmstY2FyZHMge1xcclxcbiAgICB3aWR0aDogMjAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAud29yay1ib3gge1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCByZ2JhKDIyNSwgMTcwLCA2LCAwLjkpO1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBtYXJnaW46IDIwcHggMTAlO1xcclxcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xcclxcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLW91dDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC53b3JrLWJveDpob3ZlciB7XFxyXFxuICAgIGJveC1zaGFkb3c6XFxyXFxuICAgICAgMCA1cHggMTJweCByZ2JhKDIyNSwgMTcwLCA2LCAwLjkpLFxcclxcbiAgICAgIDAgNXB4IDEycHggcmdiYSgyMjUsIDE3MCwgNiwgMC45KTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDJzIGVhc2Utb3V0O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjcpO1xcclxcbiAgICBtYXJnaW46IDAgNXB4O1xcclxcbiAgICAtd2Via2l0LWJveC1yZWZsZWN0OiBiZWxvdyAwIGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCwgIzAwMDMpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLndvcmstcmF0aW5nIHtcXHJcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucmF0ZSB7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIGhlaWdodDogMjVweDtcXHJcXG4gICAgbWFyZ2luOiAzcHggMTBweDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnJhdGUxIHtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgICBtYXJnaW46IDdweCAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubGlrZWJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiAyMnB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxpa2VidXR0b246aG92ZXIge1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mYS1zdGFyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgY29sb3I6ICMwMDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvKiBjb21tZW50IG1vZGFsIHBvcHVwIGRlc2t0b3AgKi9cXHJcXG4gIC5tb2RhbC1jb250ZW50IHtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgbWFyZ2luOiAxMnB4IDI1JSA2JSAyNSU7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2xvc2Uge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IC02MHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgI3Nob3ctaW1hZ2Uge1xcclxcbiAgICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1vdmllLXN1bW1hcnkge1xcclxcbiAgICBmb250LXNpemU6IDhweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QiwyQ0FBMkM7RUFDM0MsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixXQUFXO0VBQ1gsWUFBWTtFQUNaLHlEQUE0QztFQUM1QyxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsUUFBUTtBQUNWOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsV0FBVztFQUNYLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsNkJBQTZCO0VBQzdCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixXQUFXO0VBQ1gsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsaUJBQWlCO0VBQ2pCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixzQ0FBc0M7RUFDdEMsOEJBQThCO0VBQzlCLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLFVBQVU7RUFDVix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsMENBQTBDO0VBQzFDLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHdDQUF3QztFQUN4QyxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLCtCQUErQjtFQUMvQixnQ0FBZ0M7RUFDaEMsc0JBQXNCO0VBQ3RCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsd0NBQXdDO0VBQ3hDLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsbUNBQW1DO0VBQ25DLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsZ0VBQWdFO0VBQ2hFLGNBQWM7RUFDZCxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDJDQUEyQztFQUMzQyxrQ0FBa0M7RUFDbEMsbUNBQW1DO0VBQ25DLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsNENBQTRDO0VBQzVDLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsbUNBQW1DO0VBQ25DLGdFQUFnRTtFQUNoRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBLGNBQWM7QUFDZDtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsOEJBQThCO0VBQzlCLGFBQWE7RUFDYixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsVUFBVTtFQUNWLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVztFQUNYLFlBQVk7RUFDWixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHlCQUF5QjtFQUN6Qiw2Q0FBNkM7RUFDN0MsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwyQ0FBMkM7RUFDM0MsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHdDQUF3QztFQUN4QyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiwrQkFBK0I7RUFDL0IsZ0NBQWdDO0VBQ2hDOztxQ0FFbUM7QUFDckM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLG9CQUFvQjtFQUNwQix3Q0FBd0M7RUFDeEMsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQix3Q0FBd0M7RUFDeEMsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBRUEscUJBQXFCO0FBQ3JCO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFNBQVM7RUFDWDs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLDhCQUE4QjtFQUNoQzs7RUFFQTtJQUNFLDhCQUE4QjtJQUM5QixnQ0FBZ0M7RUFDbEM7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZix5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7RUFDakI7O0VBRUE7SUFDRSx3Q0FBd0M7SUFDeEMsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQiwrQkFBK0I7SUFDL0IsZ0NBQWdDO0lBQ2hDLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsMkJBQTJCO0VBQzdCOztFQUVBO0lBQ0U7O3VDQUVtQztJQUNuQywyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsbUNBQW1DO0lBQ25DLGFBQWE7SUFDYixnRUFBZ0U7RUFDbEU7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsYUFBYTtJQUNiLDhCQUE4QjtFQUNoQzs7RUFFQTtJQUNFLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixhQUFhO0lBQ2IsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixhQUFhO0lBQ2IsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsV0FBVztFQUNiOztFQUVBLGdDQUFnQztFQUNoQztJQUNFLFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsVUFBVTtFQUNaOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknLCBzYW5zLXNlcmlmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNyk7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA4MHB4O1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltYWdlcy9iZy1pbWcuanBlZyk7XFxyXFxuICBvcGFjaXR5OiAwLjg7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxufVxcclxcblxcclxcbiNoZWFkLWltZyB7XFxyXFxuICB3aWR0aDogMjAwcHg7XFxyXFxuICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgbWFyZ2luLXRvcDogLTQwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiA0cyBlYXNlLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1tZW51IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHdpZHRoOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWl0ZW1zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG4gIHRyYW5zaXRpb246IDNzIGVhc2Utb3V0O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDQwJTtcXHJcXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWl0ZW1zLmFjdGl2ZSB7XFxyXFxuICBsZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbmsge1xcclxcbiAgbWFyZ2luOiAxNnB4IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5uYXYtaXRlbXMgLm5hdi1saW5rIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBtYXJnaW46IDEycHg7XFxyXFxufVxcclxcblxcclxcbi5uYXYtaXRlbXMgLm5hdi1saW5rIGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgbWFyZ2luOiAwIDEycHg7XFxyXFxuICBwYWRkaW5nOiA1cHggMTVweDtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBjb2xvcjogcmdiYSgyMjUsIDE3MCwgNiwgMC45KTtcXHJcXG4gIHRyYW5zaXRpb246IDFzIGFsbCBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1pdGVtcyAubmF2LWxpbmsgYTpob3ZlciB7XFxyXFxuICB0cmFuc2l0aW9uOiAxcyBlYXNlLWluLW91dDtcXHJcXG4gIG1hcmdpbjogM3B4O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmMWYxOGE7XFxyXFxufVxcclxcblxcclxcbi5oYW1idXJnZXIge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBjb2xvcjogcmdiYSgyMjUsIDE3MCwgNiwgMC45KTtcXHJcXG4gIG1hcmdpbjogMjVweCA0MHB4O1xcclxcbiAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmJhciB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHdpZHRoOiAyNXB4O1xcclxcbiAgaGVpZ2h0OiAzcHg7XFxyXFxuICBtYXJnaW46IDVweCBhdXRvO1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbi1vdXQ7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbi1vdXQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNSwgMTcwLCA2LCAwLjkpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGFtYnVyZ2VyLmFjdGl2ZSAuYmFyOm50aC1jaGlsZCgyKSB7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjUsIDE3MCwgNiwgMC45KTtcXHJcXG59XFxyXFxuXFxyXFxuLmhhbWJ1cmdlci5hY3RpdmUgLmJhcjpudGgtY2hpbGQoMSkge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDhweCkgcm90YXRlKDQ1ZGVnKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI1LCAxNzAsIDYsIDAuOSk7XFxyXFxufVxcclxcblxcclxcbi5oYW1idXJnZXIuYWN0aXZlIC5iYXI6bnRoLWNoaWxkKDMpIHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOHB4KSByb3RhdGUoLTQ1ZGVnKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI1LCAxNzAsIDYsIDAuOSk7XFxyXFxufVxcclxcblxcclxcbi5zaG93LWNvdW50IHtcXHJcXG4gIGNvbG9yOiByZ2JhKDIyNSwgMTcwLCA2LCAwLjkpO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxufVxcclxcblxcclxcbi53b3JrLWJveCB7XFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCByZ2JhKDIyNSwgMTcwLCA2LCAwLjkpO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIG1hcmdpbjogMjBweCAxMCU7XFxyXFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi53b3JrLWltZyB7XFxyXFxuICB3aWR0aDogOTQlO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgbWFyZ2luOiAxNXB4IDMlO1xcclxcbn1cXHJcXG5cXHJcXG4ud29yay10aXRsZSBwIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBtYXJnaW4tdG9wOiAtMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLndvcmstcmF0aW5nIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDQwcHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5yYXRlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwYWRkaW5nOiAwIDEwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5yYXRlMSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5saWtlX3RpdGxlIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcbiAgbWFyZ2luLXRvcDogLTVweDtcXHJcXG4gIHBhZGRpbmctdG9wOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc3Rhcl90aXRsZSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG4gIG1hcmdpbi10b3A6IC00cHg7XFxyXFxuICBwYWRkaW5nLXRvcDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VidXR0b24ge1xcclxcbiAgd2lkdGg6IDI1cHg7XFxyXFxuICBoZWlnaHQ6IDI1cHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDhweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VidXR0b246aG92ZXIge1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDEwcHggMyU7XFxyXFxufVxcclxcblxcclxcbi5idG4ge1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjI1LCAxNzAsIDYsIDAuOSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC43KTtcXHJcXG4gIG1hcmdpbjogMCA1cHg7XFxyXFxuICBwYWRkaW5nOiA4cHggMTBweDtcXHJcXG4gIC13ZWJraXQtYm94LXJlZmxlY3Q6IGJlbG93IDAgbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50LCAjMDAwMyk7XFxyXFxuICB0cmFuc2l0aW9uOiAzcztcXHJcXG4gIGZvbnQtc2l6ZTogMTNweDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5idG46aG92ZXIge1xcclxcbiAgY29sb3I6ICMxZDJiM2E7XFxyXFxuICB0cmFuc2l0aW9uOiAxcztcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDIyNSwgMTcwLCA2LCAwLjkpO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgyMjUsIDE3MCwgNiwgMC45KTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigwLCAwLCAwLCAwLjcpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIHtcXHJcXG4gIG1hcmdpbi10b3A6IDUlO1xcclxcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYmEoMjI1LCAxNzAsIDYsIDAuOSk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciBwIHtcXHJcXG4gIHdpZHRoOiA5NCU7XFxyXFxuICBtYXJnaW46IDAgMyU7XFxyXFxuICBwYWRkaW5nOiAxNXB4IDVweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNyk7XFxyXFxuICAtd2Via2l0LWJveC1yZWZsZWN0OiBiZWxvdyAwIGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCwgIzAwMDMpO1xcclxcbiAgdHJhbnNpdGlvbjogM3M7XFxyXFxuICBmb250LXNpemU6IDEzcHg7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBtb2RhbCBjc3MgKi9cXHJcXG4uYmFja3NoYWRvdyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCA1MCUpO1xcclxcbiAgei1pbmRleDogMjAwMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB0b3A6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcXHJcXG59XFxyXFxuXFxyXFxuLmJhY2tzaGFkb3cgLm1vZGFsIHtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxuICBoZWlnaHQ6IDkwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgcGFkZGluZzogMTZweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZmUxZTY7XFxyXFxuICBib3gtc2hhZG93OiAwIDQ4cHggNDhweCByZ2JhKDM3LCA0NywgMTM3LCA4JSk7XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFja3NoYWRvdyAubW9kYWwgLmltZy1kaXYge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJhY2tzaGFkb3cgLm1vZGFsIC5pbWctZGl2IC5pbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbiNzaG93LWltYWdlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAyMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3RpdGxlIHtcXHJcXG4gIG1hcmdpbi10b3A6IDJweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI21vdmllLXN1bW1hcnkge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzIGgzIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnQtbGlzdCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNjb21tZW50LWxpc3QgbGkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY29tbWVudC1saXN0IGxpOm50aC1jaGlsZChldmVuKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NCwgMTU0LCAxNTQsIDAuODIpO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWZvcm0ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWZvcm0gLmN1c3RvbS1pbnB1dHMge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzLWNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIHdpZHRoOiA2MCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cy1jb250YWluZXIgLmNvbW1lbnQge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtY29udGVudCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcclxcbiAgcGFkZGluZzogMCAyMHB4IDEwcHggMjBweDtcXHJcXG4gIG1hcmdpbjogMTBweCAxMCU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDIyNSwgMTcwLCA2LCAwLjkpO1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcXHJcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xcclxcbiAgYm94LXNoYWRvdzpcXHJcXG4gICAgMCA1cHggMTJweCByZ2JhKDIyNSwgMTcwLCA2LCAwLjkpLFxcclxcbiAgICAwIDVweCAxMnB4IHJnYmEoMjI1LCAxNzAsIDYsIDAuOSk7XFxyXFxufVxcclxcblxcclxcbi5teS1mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4ubXktZm9ybSBpbnB1dCB7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgbWFyZ2luOiAwIDUlIDEwcHggNSU7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDIyNSwgMTcwLCA2LCAwLjkpO1xcclxcbiAgaGVpZ2h0OiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubXktZm9ybSB0ZXh0YXJlYSB7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgbWFyZ2luOiAwIDUlIDVweCA1JTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjI1LCAxNzAsIDYsIDAuOSk7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubXktZm9ybSBidXR0b24ge1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gIHdpZHRoOiAzMCU7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIFRoZSBDbG9zZSBCdXR0b24gKi9cXHJcXG4uY2xvc2Uge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbGVmdDogNDUlO1xcclxcbiAgY29sb3I6ICNhYWE7XFxyXFxuICBmb250LXNpemU6IDI4cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlOmhvdmVyLFxcclxcbi5jbG9zZTpmb2N1cyB7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICAubmF2LW1lbnUge1xcclxcbiAgICBwb3NpdGlvbjogc3RhdGljO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBtYXJnaW4tdG9wOiAtNzBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXYtaXRlbXMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTUwJTtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgaGVpZ2h0OiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdi1pdGVtcyAubmF2LWxpbmsge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBtYXJnaW46IDAgMTJweDtcXHJcXG4gICAgaGVpZ2h0OiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdi1pdGVtcyAubmF2LWxpbmsgYSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgbWFyZ2luOiAwIDEycHg7XFxyXFxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGNvbG9yOiByZ2JhKDIyNSwgMTcwLCA2LCAwLjkpO1xcclxcbiAgICB0cmFuc2l0aW9uOiAxcyBhbGwgZWFzZS1pbi1vdXQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2LWl0ZW1zIC5uYXYtbGluayBhOmhvdmVyIHtcXHJcXG4gICAgdHJhbnNpdGlvbjogMXMgYWxsIGVhc2UtaW4tb3V0O1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2YxZjE4YTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oYW1idXJnZXIge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNob3ctY291bnQge1xcclxcbiAgICBjb2xvcjogcmdiYSgyMjUsIDE3MCwgNiwgMC45KTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC53b3JrLXNlY3Rpb24ge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLndvcmstY2FyZHMge1xcclxcbiAgICB3aWR0aDogMjAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAud29yay1ib3gge1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCByZ2JhKDIyNSwgMTcwLCA2LCAwLjkpO1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBtYXJnaW46IDIwcHggMTAlO1xcclxcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xcclxcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLW91dDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC53b3JrLWJveDpob3ZlciB7XFxyXFxuICAgIGJveC1zaGFkb3c6XFxyXFxuICAgICAgMCA1cHggMTJweCByZ2JhKDIyNSwgMTcwLCA2LCAwLjkpLFxcclxcbiAgICAgIDAgNXB4IDEycHggcmdiYSgyMjUsIDE3MCwgNiwgMC45KTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDJzIGVhc2Utb3V0O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjcpO1xcclxcbiAgICBtYXJnaW46IDAgNXB4O1xcclxcbiAgICAtd2Via2l0LWJveC1yZWZsZWN0OiBiZWxvdyAwIGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCwgIzAwMDMpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLndvcmstcmF0aW5nIHtcXHJcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucmF0ZSB7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIGhlaWdodDogMjVweDtcXHJcXG4gICAgbWFyZ2luOiAzcHggMTBweDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnJhdGUxIHtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgICBtYXJnaW46IDdweCAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubGlrZWJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiAyMnB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxpa2VidXR0b246aG92ZXIge1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mYS1zdGFyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgY29sb3I6ICMwMDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvKiBjb21tZW50IG1vZGFsIHBvcHVwIGRlc2t0b3AgKi9cXHJcXG4gIC5tb2RhbC1jb250ZW50IHtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgbWFyZ2luOiAxMnB4IDI1JSA2JSAyNSU7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2xvc2Uge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IC02MHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgI3Nob3ctaW1hZ2Uge1xcclxcbiAgICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1vdmllLXN1bW1hcnkge1xcclxcbiAgICBmb250LXNpemU6IDhweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgRGlzcGxheU1vdmllcyBmcm9tICcuL21vZHVsZXMvYXBwLmpzJztcclxuaW1wb3J0IGxvZ28gZnJvbSAnLi9iYWNrLWltZy1yZW1vdmViZy5wbmcnO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgRGlzcGxheU1vdmllcy5pbml0aWFsaXplKCk7XHJcbn0pO1xyXG5cclxuY29uc3QgaGFtYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhhbWJ1cmdlcicpO1xyXG5jb25zdCBuYXZNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1pdGVtcycpO1xyXG5cclxuaGFtYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGhhbWJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICBuYXZNZW51LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG59KTtcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saW5rJykuZm9yRWFjaCgobikgPT4gbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBoYW1idXJnZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgbmF2TWVudS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxufSkpO1xyXG5cclxuY29uc3QgYmFja0ltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkLWltZycpO1xyXG5iYWNrSW1nLnNyYyA9IGxvZ287XHJcbi8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYmFja0ltZyk7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBjb21tYS1kYW5nbGUgKi9cclxuaW1wb3J0IE9uTGluZVR2QVBJIGZyb20gJy4vYXBwVXRpbGl0eS5qcyc7XHJcbmltcG9ydCBEaXNwbGF5IGZyb20gJy4vZGlzcGxheS5qcyc7XHJcbmltcG9ydCBTaG93IGZyb20gJy4vc2hvdy5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNwbGF5TW92aWVzIHtcclxuICBvbkxpbmVUdkFQSSA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBpbnZvbHZlSWQgPSAnTVZ1R25WMVVDY1F3MDhJUFNGeGgnO1xyXG5cclxuICBzdGF0aWMgYWxsTGlrZXMgPSBbXTtcclxuXHJcbiAgc3RhdGljIGFzeW5jIGluaXRpYWxpemUoKSB7XHJcbiAgICB0aGlzLm9uTGluZVR2QVBJID0gbmV3IE9uTGluZVR2QVBJKCk7XHJcbiAgICBsZXQgc2hvd3MgPSBhd2FpdCB0aGlzLm9uTGluZVR2QVBJLmdldE1vdmllcygxKTtcclxuICAgIHRoaXMuYWxsTGlrZXMgPSBhd2FpdCBEaXNwbGF5TW92aWVzLmdldEFsbExpa2VzKHRoaXMuaW52b3ZsZUlkKTtcclxuXHJcbiAgICBzaG93cyA9IHNob3dzLm1hcCgoc2hvdykgPT4ge1xyXG4gICAgICBjb25zdCBzaG93bGlrZXMgPSB0aGlzLmFsbExpa2VzLmZpbmQoXHJcbiAgICAgICAgKGxpa2UpID0+IGxpa2UuaXRlbV9pZCA9PT0gc2hvdy5pZFxyXG4gICAgICApIHx8IHsgbGlrZXM6IDAsIGl0ZW1faWQ6IHNob3cuaWQgfTtcclxuICAgICAgY29uc3QgbXlTaG93ID0gbmV3IFNob3coXHJcbiAgICAgICAgc2hvdy5pZCxcclxuICAgICAgICBzaG93Lm5hbWUsXHJcbiAgICAgICAgc2hvdy5pbWFnZS5tZWRpdW0sXHJcbiAgICAgICAgc2hvdy5zdW1tYXJ5LFxyXG4gICAgICAgIHNob3cuZ2VucmVzLFxyXG4gICAgICAgIHNob3cubGFuZ3VhZ2UsXHJcbiAgICAgICAgc2hvd2xpa2VzLmxpa2VzXHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybiBteVNob3c7XHJcbiAgICB9KTtcclxuXHJcbiAgICBzaG93cyA9IHNob3dzLmZpbHRlcigoXywgaSkgPT4gaSA8IDI1KTtcclxuICAgIERpc3BsYXkuZGlzcGxheVNob3dzKHNob3dzKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBnZXRBbGxMaWtlcyhhcHBJZCkge1xyXG4gICAgcmV0dXJuIHRoaXMub25MaW5lVHZBUEkuZ2V0QWxsTGlrZXMoYXBwSWQpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGxpa2Uoc2hvd0lkKSB7XHJcbiAgICBjb25zdCBjdXJyZW50TGlrZXMgPSBhd2FpdCB0aGlzLm9uTGluZVR2QVBJLnBvc3RMaWtlKFxyXG4gICAgICB0aGlzLmludm9sdmVJZCxcclxuICAgICAgc2hvd0lkXHJcbiAgICApO1xyXG5cclxuICAgIERpc3BsYXkudXBkYXRlTGlrZShzaG93SWQsIGN1cnJlbnRMaWtlcyk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgZ2V0Q29tbWVudHMoc2hvd0lkKSB7XHJcbiAgICBjb25zdCBjb21tZW50cyA9IGF3YWl0IHRoaXMub25MaW5lVHZBUEkuZ2V0Q29tbWVudHModGhpcy5pbnZvbHZlSWQsIHNob3dJZCk7XHJcbiAgICByZXR1cm4gY29tbWVudHM7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0Q29tbWVudENvdW50KGNvbW1lbnRzKSB7XHJcbiAgICByZXR1cm4gY29tbWVudHMubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldFNob3dzQ291bnRlcihzaG93cykge1xyXG4gICAgcmV0dXJuIHNob3dzLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBwb3N0Q29tbWVudChzaG93SWQsIHVzZXJuYW1lLCBjb21tZW50KSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMub25MaW5lVHZBUEkucG9zdENvbW1lbnRzKFxyXG4gICAgICB0aGlzLmludm9sdmVJZCxcclxuICAgICAgc2hvd0lkLFxyXG4gICAgICB1c2VybmFtZSxcclxuICAgICAgY29tbWVudFxyXG4gICAgKTtcclxuICAgIHJldHVybiByZXNwb25zZTtcclxuICB9XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgY29tbWEtZGFuZ2xlICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9uTGluZVR2QVBJIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMudXJsQXBpMSA9ICdodHRwczovL2FwaS50dm1hemUuY29tJztcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBvcGVyYXRvci1saW5lYnJlYWtcclxuICAgIHRoaXMuaW52b2x2ZW1lbnRVcmxBcGkyID1cclxuICAgICAgJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaSc7XHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXRNb3ZpZXMocGFnZSA9IDEpIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dGhpcy51cmxBcGkxfS9zaG93cz9wYWdlPSR7cGFnZX1gLCB7XHJcbiAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0QWxsTGlrZXMoYXBwSWQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgYCR7dGhpcy5pbnZvbHZlbWVudFVybEFwaTJ9L2FwcHMvJHthcHBJZH0vbGlrZXNgLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG5cclxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgIH1cclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyBsaWtlcycpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXRMaWtlcyhhcHBJZCwgc2hvd0lkKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBgJHt0aGlzLmludm9sdmVtZW50VXJsQXBpMn0vYXBwcy8ke2FwcElkfS9saWtlc2AsXHJcbiAgICAgIHtcclxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGNvbnN0IG15UmVzdWx0ID0gcmVzdWx0LmZpbmQoKGxpa2UpID0+IGxpa2UuaXRlbV9pZCA9PT0gc2hvd0lkKSB8fCB7XHJcbiAgICAgIGxpa2VzOiAwLFxyXG4gICAgICBpdGVtX2lkOiBzaG93SWQsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBteVJlc3VsdC5saWtlcztcclxuICB9XHJcblxyXG4gIGFzeW5jIHBvc3RMaWtlKGFwcElkLCBzaG93SWQpIHtcclxuICAgIGF3YWl0IGZldGNoKGAke3RoaXMuaW52b2x2ZW1lbnRVcmxBcGkyfS9hcHBzLyR7YXBwSWR9L2xpa2VzYCwge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGl0ZW1faWQ6IHNob3dJZCxcclxuICAgICAgfSksXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgbXlsaWtlcyA9IGF3YWl0IHRoaXMuZ2V0TGlrZXMoYXBwSWQsIHNob3dJZCk7XHJcblxyXG4gICAgcmV0dXJuIG15bGlrZXM7XHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXRDb21tZW50cyhhcHBJZCwgc2hvd0lkKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBjb21tZW50c1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgYCR7dGhpcy5pbnZvbHZlbWVudFVybEFwaTJ9L2FwcHMvJHthcHBJZH0vY29tbWVudHM/aXRlbV9pZD0ke3Nob3dJZH1gLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgICAgY29uc3QgY29tbWVudHMgPSBhd2FpdCBjb21tZW50c1Jlc3BvbnNlLmpzb24oKTtcclxuICAgICAgcmV0dXJuIGNvbW1lbnRzO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBwb3N0Q29tbWVudHMoYXBwSWQsIHNob3dJZCwgdXNlcm5hbWUsIGNvbW1lbnQpIHtcclxuICAgIGNvbnN0IGNvbW1lbnRzUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgYCR7dGhpcy5pbnZvbHZlbWVudFVybEFwaTJ9L2FwcHMvJHthcHBJZH0vY29tbWVudHNgLFxyXG4gICAgICB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgaXRlbV9pZDogc2hvd0lkLFxyXG4gICAgICAgICAgdXNlcm5hbWUsXHJcbiAgICAgICAgICBjb21tZW50LFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gY29tbWVudHNSZXNwb25zZTtcclxuICB9XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgY29tbWEtZGFuZ2xlICovXHJcbi8qIGVzbGludCBpbXBvcnQvbm8tY3ljbGU6IFsyLCB7IG1heERlcHRoOiAxIH1dICovXHJcbmltcG9ydCBEaXNwbGF5TW92aWVzIGZyb20gJy4vYXBwLmpzJztcclxuXHJcbmNvbnN0IGNvbW1lbnRNb2RhbCA9IGFzeW5jIChzaG93SWQsIHNob3dzKSA9PiB7XHJcbiAgY29uc3Qgc2hvdyA9IHNob3dzLmZpbmQoKHQpID0+IHQuaWQgPT09IHBhcnNlSW50KHNob3dJZCwgMTApKTtcclxuXHJcbiAgY29uc3QgY29tbWVudE1vZGFsVmlldyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50LW1vZGFsJyk7XHJcbiAgY29tbWVudE1vZGFsVmlldy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcbiAgY29uc3QgaW1nRWwgPSBjb21tZW50TW9kYWxWaWV3LnF1ZXJ5U2VsZWN0b3IoJyNzaG93LWltYWdlJyk7XHJcbiAgY29uc3Qgc2hvd1RpdGxlRWwgPSBjb21tZW50TW9kYWxWaWV3LnF1ZXJ5U2VsZWN0b3IoJy5tb3ZpZS1pbmZvICN0aXRsZScpO1xyXG4gIGNvbnN0IHNob3dTdW1tYXJ5RWwgPSBjb21tZW50TW9kYWxWaWV3LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAnLm1vdmllLWluZm8gI21vdmllLXN1bW1hcnknXHJcbiAgKTtcclxuICBjb25zdCBjb21tZW50Q291bnRlciA9IGNvbW1lbnRNb2RhbFZpZXcucXVlcnlTZWxlY3RvcihcclxuICAgICcuY29tbWVudHMgI2NvbW1lbnQtY291bnRlcidcclxuICApO1xyXG4gIGNvbnN0IGNvbW1lbnRMaXN0ID0gY29tbWVudE1vZGFsVmlldy5xdWVyeVNlbGVjdG9yKCcuY29tbWVudHMgI2NvbW1lbnQtbGlzdCcpO1xyXG4gIGNvbnN0IGNsb3NlRWwgPSBjb21tZW50TW9kYWxWaWV3LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZScpO1xyXG4gIGNvbnN0IHNob3dJZEVsID0gY29tbWVudE1vZGFsVmlldy5xdWVyeVNlbGVjdG9yKCdmb3JtICNzaG93X2lkJyk7XHJcbiAgc2hvd0lkRWwudmFsdWUgPSBzaG93SWQ7XHJcblxyXG4gIGNsb3NlRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjb21tZW50TW9kYWxWaWV3LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgfSk7XHJcblxyXG4gIGltZ0VsLnNyYyA9IHNob3cuaW1hZ2U7XHJcbiAgc2hvd1RpdGxlRWwudGV4dENvbnRlbnQgPSBzaG93LnRpdGxlO1xyXG4gIHNob3dTdW1tYXJ5RWwuaW5uZXJIVE1MID0gc2hvdy5zdW1tYXJ5O1xyXG5cclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IERpc3BsYXlNb3ZpZXMuZ2V0Q29tbWVudHMoc2hvd0lkKTtcclxuICBjb21tZW50Q291bnRlci50ZXh0Q29udGVudCA9IGAoJHtcclxuICAgIHR5cGVvZiByZXNwb25zZS5sZW5ndGggPT09ICd1bmRlZmluZWQnID8gMCA6IHJlc3BvbnNlLmxlbmd0aFxyXG4gIH0pYDtcclxuXHJcbiAgaWYgKHJlc3BvbnNlLmxlbmd0aCA+IDApIHtcclxuICAgIGNvbW1lbnRMaXN0LmlubmVySFRNTCA9ICcnO1xyXG4gICAgcmVzcG9uc2UuZm9yRWFjaCgoY29tbWVudCkgPT4ge1xyXG4gICAgICBjb21tZW50TGlzdC5pbm5lckhUTUwgKz0gYDxsaT5EYXRlOiAke2NvbW1lbnQuY3JlYXRpb25fZGF0ZX06PHA+ICR7Y29tbWVudC5jb21tZW50fTwvcD4gLSBCeTogJHtjb21tZW50LnVzZXJuYW1lfTwvbGk+YDtcclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb21tZW50TGlzdC5pbm5lckhUTUwgPSAnVGhlcmUgYXJlIG5vIENvbW1lbnRzIGZvciB0aGlzIHNob3chJztcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21tZW50TW9kYWw7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGZ1bmN0aW9uLXBhcmVuLW5ld2xpbmUgKi9cclxuLyogZXNsaW50LWRpc2FibGUgaW1wbGljaXQtYXJyb3ctbGluZWJyZWFrICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBpbmRlbnQgKi9cclxuLyogZXNsaW50LWRpc2FibGUgY29tbWEtZGFuZ2xlICovXHJcbmltcG9ydCBEaXNwbGF5TW92aWVzIGZyb20gJy4vYXBwLmpzJztcclxuaW1wb3J0IGNvbW1lbnRNb2RhbCBmcm9tICcuL2NvbW1lbnRNb2RhbC5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNwbGF5IHtcclxuICBzdGF0aWMgZGlzcGxheVNob3dzKHNob3dzKSB7XHJcbiAgICBjb25zdCBtb3ZpZVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud29yay1zZWN0aW9uJyk7XHJcblxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBsdXNwbHVzXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNob3dzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IG1vdmllTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgIG1vdmllTGlzdC5jbGFzc0xpc3QuYWRkKCd3b3JrLWNhcmRzJyk7XHJcbiAgICAgIG1vdmllTGlzdC5pbm5lckhUTUwgKz0gYDxkaXYgY2xhc3M9XCJ3b3JrLWJveFwiPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBjbGFzcz1cIndvcmstaW1nXCJcclxuICAgICAgICAgICAgc3JjPVwiJHtzaG93c1tpXS5pbWFnZX1cIlxyXG4gICAgICAgICAgICBhbHQ9XCJtb3ZpZSBpbWFnZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwid29yay10aXRsZVwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwid29yay1wYXJhXCI+JHtzaG93c1tpXS50aXRsZX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwid29yay1yYXRpbmdcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmF0ZVwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgY2xhc3M9J2xpa2VidXR0b24nIHNyYz0naHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9pb3MtZmlsbGVkLzUwLzAwMDAwMC9oZWFydHMucG5nJz5cclxuICAgICAgICAgICAgICA8c3BhbiBpZD0nbGlrZXNfJHtzaG93c1tpXS5pZH0nPiR7c2hvd3NbaV0ubGlrZXN9ICR7XHJcbiAgICAgICAgc2hvd3NbaV0ubGlrZXMgPD0gMSA/ICdMaWtlJyA6ICdMaWtlcydcclxuICAgICAgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmF0ZTFcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS1zdGFyIGxpa2VidXR0b1wiPjwvaT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGFyX3RpdGxlXCI+PHNwYW4+U3RhcnM8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gaWQ9J2NvbW1lbnRfJHtcclxuICAgICAgICAgICAgICBzaG93c1tpXS5pZFxyXG4gICAgICAgICAgICB9JyBjbGFzcz0nYnRuIGJ0bi1wcmltYXJ5IGJ0bi1tZCBjYXJkLWNvbW1lbnQtYnRuIGNvbW1lbnRzJz5Db21tZW50czwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PmA7XHJcbiAgICAgIG1vdmllU2VjdGlvbi5hcHBlbmQobW92aWVMaXN0KTtcclxuICAgIH1cclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAnLnNob3ctY291bnQnXHJcbiAgICApLmlubmVySFRNTCA9IGBOdW1iZXIgb2YgU2hvd3M6ICR7c2hvd3MubGVuZ3RofWA7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbW1lbnRzJykuZm9yRWFjaCgoY29tbWVudEJ0bikgPT5cclxuICAgICAgY29tbWVudEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldikgPT4ge1xyXG4gICAgICAgIGNvbW1lbnRNb2RhbChldi50YXJnZXQuaWQuc3BsaXQoJ18nKVsxXSwgc2hvd3MpO1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlrZWJ1dHRvbicpLmZvckVhY2goKGxpa2VCdG4sIGkpID0+XHJcbiAgICAgIGxpa2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgRGlzcGxheU1vdmllcy5saWtlKHNob3dzW2ldLmlkKTtcclxuICAgICAgfSlcclxuICAgICk7XHJcblxyXG4gICAgZG9jdW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJyNwb3N0LWNvbW1lbnQtZm9ybScpXHJcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhc3luYyAoZXYpID0+IHtcclxuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBjb25zdCB1c2VybmFtZSA9IGV2LnRhcmdldC5lbGVtZW50cy51c2VybmFtZS52YWx1ZS50cmltKCk7XHJcbiAgICAgICAgY29uc3QgY29tbWVudCA9IGV2LnRhcmdldC5lbGVtZW50cy5jb21tZW50LnZhbHVlLnRyaW0oKTtcclxuICAgICAgICBjb25zdCBzaG93SUQgPSBldi50YXJnZXQuZWxlbWVudHMuc2hvd19pZC52YWx1ZS50cmltKCk7XHJcblxyXG4gICAgICAgIGlmICh1c2VybmFtZSA9PT0gJycgfHwgY29tbWVudCA9PT0gJycpIHJldHVybjtcclxuXHJcbiAgICAgICAgYXdhaXQgRGlzcGxheU1vdmllcy5wb3N0Q29tbWVudChcclxuICAgICAgICAgIHBhcnNlSW50KHNob3dJRCwgMTApLFxyXG4gICAgICAgICAgdXNlcm5hbWUsXHJcbiAgICAgICAgICBjb21tZW50XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgZXYudGFyZ2V0LmVsZW1lbnRzLnVzZXJuYW1lLnZhbHVlID0gJyc7XHJcbiAgICAgICAgZXYudGFyZ2V0LmVsZW1lbnRzLmNvbW1lbnQudmFsdWUgPSAnJztcclxuXHJcbiAgICAgICAgY29uc3QgY29tbWVudHMgPSBhd2FpdCBEaXNwbGF5TW92aWVzLmdldENvbW1lbnRzKHBhcnNlSW50KHNob3dJRCwgMTApKTtcclxuICAgICAgICBEaXNwbGF5LnVwZGF0ZUNvbW1lbnRMaXN0KGNvbW1lbnRzKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgdXBkYXRlTGlrZShzaG93SWQsIGN1cnJlbnRMaWtlcykge1xyXG4gICAgY29uc3QgbGlrZVNwYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbGlrZXNfJHtzaG93SWR9YCk7XHJcbiAgICBsaWtlU3Bhbi50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRMaWtlc30gJHtcclxuICAgICAgY3VycmVudExpa2VzIDw9IDEgPyAnTGlrZScgOiAnTGlrZXMnXHJcbiAgICB9YDtcclxuICB9XHJcblxyXG4gIHN0YXRpYyB1cGRhdGVDb21tZW50TGlzdChjb21tZW50cykge1xyXG4gICAgY29uc3QgY29tbWVudHNMaXN0RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tbWVudC1saXN0Jyk7XHJcblxyXG4gICAgY29tbWVudHNMaXN0RWwuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBjb21tZW50cy5mb3JFYWNoKChjb21tZW50KSA9PiB7XHJcbiAgICAgIGNvbW1lbnRzTGlzdEVsLmlubmVySFRNTCArPSBgPGxpPiR7Y29tbWVudC5jcmVhdGlvbl9kYXRlfTo8cD4gJHtjb21tZW50LmNvbW1lbnR9PC9wPiAtIEJ5OiAke2NvbW1lbnQudXNlcm5hbWV9PC9saT5gO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgY29tbWVudE1vZGFsVmlldyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50LW1vZGFsJyk7XHJcbiAgICBjb25zdCBjb21tZW50Q291bnRlciA9IGNvbW1lbnRNb2RhbFZpZXcucXVlcnlTZWxlY3RvcihcclxuICAgICAgJy5jb21tZW50cyAjY29tbWVudC1jb3VudGVyJ1xyXG4gICAgKTtcclxuICAgIGNvbW1lbnRDb3VudGVyLnRleHRDb250ZW50ID0gY29tbWVudHMubGVuZ3RoO1xyXG4gIH1cclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBjb21tYS1kYW5nbGUgKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvdyB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBzaG93SWQsXHJcbiAgICBzaG93VGl0bGUsXHJcbiAgICBpbWFnZSxcclxuICAgIHN1bW1hcnksXHJcbiAgICBnZW5yZXMsXHJcbiAgICBsYW5ndWFnZSxcclxuICAgIGxpa2VzID0gMCxcclxuICAgIGNvbW1lbnRzID0gW11cclxuICApIHtcclxuICAgIHRoaXMuaWQgPSBzaG93SWQ7XHJcbiAgICB0aGlzLnRpdGxlID0gc2hvd1RpdGxlO1xyXG4gICAgdGhpcy5pbWFnZSA9IGltYWdlO1xyXG4gICAgdGhpcy5zdW1tYXJ5ID0gc3VtbWFyeTtcclxuICAgIHRoaXMuZ2VucmVzID0gZ2VucmVzO1xyXG4gICAgdGhpcy5sYW5ndWFnZSA9IGxhbmd1YWdlO1xyXG4gICAgdGhpcy5saWtlcyA9IGxpa2VzO1xyXG4gICAgdGhpcy5jb21tZW50cyA9IGNvbW1lbnRzO1xyXG4gIH1cclxuXHJcbiAgLy8gICBnZXRMaWtlcygpIHt9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9