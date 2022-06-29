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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/bg-img.jpeg */ "./src/images/bg-img.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Playfair Display', sans-serif;\r\n  background-color: rgb(0, 0, 0, 0.7);\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n  height: 80px;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  opacity: 0.8;\r\n  padding-bottom: 0;\r\n}\r\n\r\n#head-img {\r\n  width: 200px;\r\n  height: 200px;\r\n  margin-top: -40px;\r\n}\r\n\r\n.nav-menu {\r\n  background-color: black;\r\n  height: 100vh;\r\n  width: 0;\r\n}\r\n\r\n.nav-items {\r\n  display: flex;\r\n  flex-direction: column;\r\n  position: fixed;\r\n  width: 100%;\r\n  text-align: start;\r\n  transition: 0.3s;\r\n  margin-left: 40%;\r\n  padding-top: 100px;\r\n  background-color: #000;\r\n  height: 100vh;\r\n}\r\n\r\n.nav-items.active {\r\n  left: 0;\r\n}\r\n\r\n.nav-link {\r\n  margin: 16px 30px;\r\n}\r\n\r\n.nav-items .nav-link {\r\n  list-style: none;\r\n  margin: 12px;\r\n}\r\n\r\n.nav-items .nav-link a {\r\n  text-decoration: none;\r\n  margin: 0 12px;\r\n  padding: 5px 15px;\r\n  font-size: 18px;\r\n  font-weight: 700;\r\n  color: rgba(225, 170, 6, 0.9);\r\n  transition: 1s all ease-in-out;\r\n}\r\n\r\n.nav-items .nav-link a:hover {\r\n  transition: 1s all ease-in-out;\r\n  border-bottom: 2px solid #f1f18a;\r\n}\r\n\r\n.hamburger {\r\n  display: block;\r\n  cursor: pointer;\r\n  color: rgba(225, 170, 6, 0.9);\r\n  margin: 25px 40px;\r\n  z-index: 1;\r\n}\r\n\r\n.bar {\r\n  display: block;\r\n  width: 25px;\r\n  height: 3px;\r\n  margin: 5px auto;\r\n  -webkit-transition: all 1s ease-in-out;\r\n  transition: all 1s ease-in-out;\r\n  background-color: rgba(225, 170, 6, 0.9);\r\n}\r\n\r\n.hamburger.active .bar:nth-child(2) {\r\n  opacity: 0;\r\n  background-color: rgba(225, 170, 6, 0.9);\r\n}\r\n\r\n.hamburger.active .bar:nth-child(1) {\r\n  transform: translateY(8px) rotate(45deg);\r\n  background-color: rgba(225, 170, 6, 0.9);\r\n}\r\n\r\n.hamburger.active .bar:nth-child(3) {\r\n  transform: translateY(-8px) rotate(-45deg);\r\n  background-color: rgba(225, 170, 6, 0.9);\r\n}\r\n\r\n.show-count {\r\n  color: rgba(225, 170, 6, 0.9);\r\n  margin-left: 10%;\r\n  font-size: 18px;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.work-box {\r\n  border: 3px solid rgba(225, 170, 6, 0.9);\r\n  width: 80%;\r\n  margin: 20px 10%;\r\n  border-bottom-left-radius: 15px;\r\n  border-bottom-right-radius: 15px;\r\n  background-color: #fff;\r\n  padding-bottom: 15px;\r\n}\r\n\r\n.work-img {\r\n  width: 94%;\r\n  height: auto;\r\n  margin: 15px 3%;\r\n}\r\n\r\n.work-title p {\r\n  text-align: center;\r\n  font-weight: 700;\r\n  font-size: 20px;\r\n  margin-top: -15px;\r\n}\r\n\r\n.work-rating {\r\n  display: flex;\r\n  padding: 10px 40px;\r\n  justify-content: space-between;\r\n}\r\n\r\n.rate {\r\n  display: flex;\r\n  padding: 0 10px;\r\n  text-align: center;\r\n}\r\n\r\n.rate1 {\r\n  display: flex;\r\n  padding: 5px 10px;\r\n  text-align: center;\r\n}\r\n\r\n.like_title {\r\n  text-align: center;\r\n  margin-left: 20px;\r\n  margin-top: -5px;\r\n  padding-top: 0;\r\n}\r\n\r\n.star_title {\r\n  text-align: center;\r\n  margin-left: 20px;\r\n  margin-top: -4px;\r\n  padding-top: 0;\r\n}\r\n\r\n.likebutton {\r\n  width: 25px;\r\n  height: 25px;\r\n  margin-right: 8px;\r\n  cursor: pointer;\r\n}\r\n\r\n.likebutton:hover {\r\n  color: red;\r\n}\r\n\r\n.button {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin: 10px 3%;\r\n}\r\n\r\n.btn {\r\n  font-weight: 500;\r\n  font-style: italic;\r\n  border: 2px solid rgba(225, 170, 6, 0.9);\r\n  border-radius: 20px;\r\n  color: #fff;\r\n  background-color: rgb(0, 0, 0, 0.7);\r\n  margin: 0 5px;\r\n  padding: 8px 10px;\r\n  -webkit-box-reflect: below 0 linear-gradient(transparent, #0003);\r\n  transition: 3s;\r\n  font-size: 13px;\r\n  text-transform: uppercase;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn:hover {\r\n  color: #1d2b3a;\r\n  transition: 1s;\r\n  font-size: 15px;\r\n  font-weight: 700;\r\n  font-style: normal;\r\n  box-shadow: 0 0 10px rgba(225, 170, 6, 0.9);\r\n  background: rgba(225, 170, 6, 0.9);\r\n  border: 2px solid rgb(0, 0, 0, 0.7);\r\n  cursor: pointer;\r\n}\r\n\r\n.footer {\r\n  margin-top: 5%;\r\n  border-top: 2px solid rgba(225, 170, 6, 0.9);\r\n  width: 100%;\r\n}\r\n\r\n.footer p {\r\n  width: 94%;\r\n  margin: 0 3%;\r\n  padding: 15px 5px;\r\n  text-align: center;\r\n  color: #fff;\r\n  background-color: rgb(0, 0, 0, 0.7);\r\n  -webkit-box-reflect: below 0 linear-gradient(transparent, #0003);\r\n  transition: 3s;\r\n  font-size: 13px;\r\n  text-transform: uppercase;\r\n  cursor: pointer;\r\n}\r\n\r\n/* modal css */\r\n.backshadow {\r\n  width: 100%;\r\n  height: 100vh;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  background: rgba(0, 0, 0, 50%);\r\n  z-index: 2000;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.modal {\r\n  display: none;\r\n  position: fixed;\r\n  z-index: 1;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.9);\r\n}\r\n\r\n.backshadow .modal {\r\n  width: 70%;\r\n  height: 90vh;\r\n  background-color: #fff;\r\n  position: relative;\r\n  padding: 16px;\r\n  border: 1px solid #dfe1e6;\r\n  box-shadow: 0 48px 48px rgba(37, 47, 137, 8%);\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n\r\n.backshadow .modal .img-div {\r\n  width: 100%;\r\n  height: auto;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-top: 10px;\r\n}\r\n\r\n.backshadow .modal .img-div .img {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n#show-image {\r\n  width: 100%;\r\n  height: 200px;\r\n}\r\n\r\n#title {\r\n  margin-top: 2px;\r\n  text-align: center;\r\n}\r\n\r\n#movie-summary {\r\n  width: 100%;\r\n  font-size: 14px;\r\n  text-align: start;\r\n}\r\n\r\n.comments h3 {\r\n  width: 100%;\r\n  text-align: center;\r\n  margin-top: 10px;\r\n}\r\n\r\n#comment-list {\r\n  width: 100%;\r\n  list-style: none;\r\n}\r\n\r\n#comment-list li {\r\n  display: flex;\r\n  width: 100%;\r\n  font-size: 14px;\r\n}\r\n\r\n#comment-list li:nth-child(even) {\r\n  background-color: rgba(154, 154, 154, 0.82);\r\n  color: #fff;\r\n}\r\n\r\n.comment-form {\r\n  width: 100%;\r\n}\r\n\r\n.comment-form .custom-inputs {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.comments-container {\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n  width: 60%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n}\r\n\r\n.comments-container .comment {\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.modal-content {\r\n  background-color: #fefefe;\r\n  padding: 0 20px 10px 20px;\r\n  margin: 10px 10%;\r\n  text-align: center;\r\n  border: 2px solid rgba(225, 170, 6, 0.9);\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n  max-height: 100vh;\r\n  border-bottom-left-radius: 20px;\r\n  border-bottom-right-radius: 20px;\r\n  box-shadow:\r\n    0 5px 12px rgba(225, 170, 6, 0.9),\r\n    0 5px 12px rgba(225, 170, 6, 0.9);\r\n}\r\n\r\n.my-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.my-form input {\r\n  width: 90%;\r\n  margin: 0 5% 10px 5%;\r\n  border: 2px solid rgba(225, 170, 6, 0.9);\r\n  height: 25px;\r\n}\r\n\r\n.my-form textarea {\r\n  width: 90%;\r\n  margin: 0 5% 5px 5%;\r\n  border: 2px solid rgba(225, 170, 6, 0.9);\r\n  height: 100px;\r\n}\r\n\r\n.my-form button {\r\n  margin-top: 10px;\r\n  width: 30%;\r\n  align-self: center;\r\n}\r\n\r\n/* The Close Button */\r\n.close {\r\n  position: relative;\r\n  left: 45%;\r\n  color: #aaa;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n}\r\n\r\n.close:hover,\r\n.close:focus {\r\n  color: black;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  .nav-menu {\r\n    position: static;\r\n    display: flex;\r\n    flex-direction: row;\r\n    margin-top: -70px;\r\n  }\r\n\r\n  .nav-items {\r\n    display: flex;\r\n    flex-direction: row;\r\n    margin-left: -50%;\r\n    background: none;\r\n  }\r\n\r\n  .nav-items .nav-link {\r\n    list-style: none;\r\n    margin: 0 12px;\r\n  }\r\n\r\n  .nav-items .nav-link a {\r\n    text-decoration: none;\r\n    margin: 0 12px;\r\n    padding: 5px 15px;\r\n    font-size: 18px;\r\n    font-weight: 700;\r\n    color: rgba(225, 170, 6, 0.9);\r\n    transition: 1s all ease-in-out;\r\n  }\r\n\r\n  .nav-items .nav-link a:hover {\r\n    transition: 1s all ease-in-out;\r\n    border-bottom: 2px solid #f1f18a;\r\n  }\r\n\r\n  .hamburger {\r\n    display: none;\r\n  }\r\n\r\n  .show-count {\r\n    color: rgba(225, 170, 6, 0.9);\r\n    margin-left: 30px;\r\n    font-size: 18px;\r\n    text-transform: uppercase;\r\n  }\r\n\r\n  .work-section {\r\n    margin-top: 10px;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n  }\r\n\r\n  .work-cards {\r\n    width: 20%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n  }\r\n\r\n  .work-box {\r\n    border: 3px solid rgba(225, 170, 6, 0.9);\r\n    width: 80%;\r\n    margin: 20px 10%;\r\n    border-bottom-left-radius: 15px;\r\n    border-bottom-right-radius: 15px;\r\n    background-color: #fff;\r\n    padding-bottom: 15px;\r\n    transition: all 1s ease-out;\r\n  }\r\n\r\n  .work-box:hover {\r\n    box-shadow:\r\n      0 5px 12px rgba(225, 170, 6, 0.9),\r\n      0 5px 12px rgba(225, 170, 6, 0.9);\r\n    transition: all 2s ease-out;\r\n    cursor: pointer;\r\n    font-style: italic;\r\n    color: #fff;\r\n    background-color: rgb(0, 0, 0, 0.7);\r\n    margin: 0 5px;\r\n    -webkit-box-reflect: below 0 linear-gradient(transparent, #0003);\r\n  }\r\n\r\n  .work-rating {\r\n    padding: 0 10px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n  }\r\n\r\n  .rate {\r\n    width: 50%;\r\n    height: 25px;\r\n    margin: 3px 10px;\r\n    padding: 0;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n  }\r\n\r\n  .rate1 {\r\n    width: 50%;\r\n    height: 25px;\r\n    margin: 7px 10px;\r\n    padding: 0;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n  }\r\n\r\n  .likebutton {\r\n    width: 22px;\r\n    margin-top: 0;\r\n  }\r\n\r\n  .likebutton:hover {\r\n    color: #fff;\r\n  }\r\n\r\n  .fa-star {\r\n    display: flex;\r\n    color: #000;\r\n  }\r\n\r\n  /* comment modal popup desktop */\r\n  .modal-content {\r\n    width: 50%;\r\n    margin: 12px 25% 6% 25%;\r\n    z-index: 1;\r\n  }\r\n\r\n  .close {\r\n    margin-right: -60px;\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  #show-image {\r\n    height: 300px;\r\n  }\r\n\r\n  .movie-summary {\r\n    font-size: 8px;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Playfair Display', sans-serif;\r\n  background-color: rgb(0, 0, 0, 0.7);\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n  height: 80px;\r\n  background-image: url(./images/bg-img.jpeg);\r\n  opacity: 0.8;\r\n  padding-bottom: 0;\r\n}\r\n\r\n#head-img {\r\n  width: 200px;\r\n  height: 200px;\r\n  margin-top: -40px;\r\n}\r\n\r\n.nav-menu {\r\n  background-color: black;\r\n  height: 100vh;\r\n  width: 0;\r\n}\r\n\r\n.nav-items {\r\n  display: flex;\r\n  flex-direction: column;\r\n  position: fixed;\r\n  width: 100%;\r\n  text-align: start;\r\n  transition: 0.3s;\r\n  margin-left: 40%;\r\n  padding-top: 100px;\r\n  background-color: #000;\r\n  height: 100vh;\r\n}\r\n\r\n.nav-items.active {\r\n  left: 0;\r\n}\r\n\r\n.nav-link {\r\n  margin: 16px 30px;\r\n}\r\n\r\n.nav-items .nav-link {\r\n  list-style: none;\r\n  margin: 12px;\r\n}\r\n\r\n.nav-items .nav-link a {\r\n  text-decoration: none;\r\n  margin: 0 12px;\r\n  padding: 5px 15px;\r\n  font-size: 18px;\r\n  font-weight: 700;\r\n  color: rgba(225, 170, 6, 0.9);\r\n  transition: 1s all ease-in-out;\r\n}\r\n\r\n.nav-items .nav-link a:hover {\r\n  transition: 1s all ease-in-out;\r\n  border-bottom: 2px solid #f1f18a;\r\n}\r\n\r\n.hamburger {\r\n  display: block;\r\n  cursor: pointer;\r\n  color: rgba(225, 170, 6, 0.9);\r\n  margin: 25px 40px;\r\n  z-index: 1;\r\n}\r\n\r\n.bar {\r\n  display: block;\r\n  width: 25px;\r\n  height: 3px;\r\n  margin: 5px auto;\r\n  -webkit-transition: all 1s ease-in-out;\r\n  transition: all 1s ease-in-out;\r\n  background-color: rgba(225, 170, 6, 0.9);\r\n}\r\n\r\n.hamburger.active .bar:nth-child(2) {\r\n  opacity: 0;\r\n  background-color: rgba(225, 170, 6, 0.9);\r\n}\r\n\r\n.hamburger.active .bar:nth-child(1) {\r\n  transform: translateY(8px) rotate(45deg);\r\n  background-color: rgba(225, 170, 6, 0.9);\r\n}\r\n\r\n.hamburger.active .bar:nth-child(3) {\r\n  transform: translateY(-8px) rotate(-45deg);\r\n  background-color: rgba(225, 170, 6, 0.9);\r\n}\r\n\r\n.show-count {\r\n  color: rgba(225, 170, 6, 0.9);\r\n  margin-left: 10%;\r\n  font-size: 18px;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.work-box {\r\n  border: 3px solid rgba(225, 170, 6, 0.9);\r\n  width: 80%;\r\n  margin: 20px 10%;\r\n  border-bottom-left-radius: 15px;\r\n  border-bottom-right-radius: 15px;\r\n  background-color: #fff;\r\n  padding-bottom: 15px;\r\n}\r\n\r\n.work-img {\r\n  width: 94%;\r\n  height: auto;\r\n  margin: 15px 3%;\r\n}\r\n\r\n.work-title p {\r\n  text-align: center;\r\n  font-weight: 700;\r\n  font-size: 20px;\r\n  margin-top: -15px;\r\n}\r\n\r\n.work-rating {\r\n  display: flex;\r\n  padding: 10px 40px;\r\n  justify-content: space-between;\r\n}\r\n\r\n.rate {\r\n  display: flex;\r\n  padding: 0 10px;\r\n  text-align: center;\r\n}\r\n\r\n.rate1 {\r\n  display: flex;\r\n  padding: 5px 10px;\r\n  text-align: center;\r\n}\r\n\r\n.like_title {\r\n  text-align: center;\r\n  margin-left: 20px;\r\n  margin-top: -5px;\r\n  padding-top: 0;\r\n}\r\n\r\n.star_title {\r\n  text-align: center;\r\n  margin-left: 20px;\r\n  margin-top: -4px;\r\n  padding-top: 0;\r\n}\r\n\r\n.likebutton {\r\n  width: 25px;\r\n  height: 25px;\r\n  margin-right: 8px;\r\n  cursor: pointer;\r\n}\r\n\r\n.likebutton:hover {\r\n  color: red;\r\n}\r\n\r\n.button {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin: 10px 3%;\r\n}\r\n\r\n.btn {\r\n  font-weight: 500;\r\n  font-style: italic;\r\n  border: 2px solid rgba(225, 170, 6, 0.9);\r\n  border-radius: 20px;\r\n  color: #fff;\r\n  background-color: rgb(0, 0, 0, 0.7);\r\n  margin: 0 5px;\r\n  padding: 8px 10px;\r\n  -webkit-box-reflect: below 0 linear-gradient(transparent, #0003);\r\n  transition: 3s;\r\n  font-size: 13px;\r\n  text-transform: uppercase;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn:hover {\r\n  color: #1d2b3a;\r\n  transition: 1s;\r\n  font-size: 15px;\r\n  font-weight: 700;\r\n  font-style: normal;\r\n  box-shadow: 0 0 10px rgba(225, 170, 6, 0.9);\r\n  background: rgba(225, 170, 6, 0.9);\r\n  border: 2px solid rgb(0, 0, 0, 0.7);\r\n  cursor: pointer;\r\n}\r\n\r\n.footer {\r\n  margin-top: 5%;\r\n  border-top: 2px solid rgba(225, 170, 6, 0.9);\r\n  width: 100%;\r\n}\r\n\r\n.footer p {\r\n  width: 94%;\r\n  margin: 0 3%;\r\n  padding: 15px 5px;\r\n  text-align: center;\r\n  color: #fff;\r\n  background-color: rgb(0, 0, 0, 0.7);\r\n  -webkit-box-reflect: below 0 linear-gradient(transparent, #0003);\r\n  transition: 3s;\r\n  font-size: 13px;\r\n  text-transform: uppercase;\r\n  cursor: pointer;\r\n}\r\n\r\n/* modal css */\r\n.backshadow {\r\n  width: 100%;\r\n  height: 100vh;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  background: rgba(0, 0, 0, 50%);\r\n  z-index: 2000;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.modal {\r\n  display: none;\r\n  position: fixed;\r\n  z-index: 1;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.9);\r\n}\r\n\r\n.backshadow .modal {\r\n  width: 70%;\r\n  height: 90vh;\r\n  background-color: #fff;\r\n  position: relative;\r\n  padding: 16px;\r\n  border: 1px solid #dfe1e6;\r\n  box-shadow: 0 48px 48px rgba(37, 47, 137, 8%);\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n\r\n.backshadow .modal .img-div {\r\n  width: 100%;\r\n  height: auto;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-top: 10px;\r\n}\r\n\r\n.backshadow .modal .img-div .img {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n#show-image {\r\n  width: 100%;\r\n  height: 200px;\r\n}\r\n\r\n#title {\r\n  margin-top: 2px;\r\n  text-align: center;\r\n}\r\n\r\n#movie-summary {\r\n  width: 100%;\r\n  font-size: 14px;\r\n  text-align: start;\r\n}\r\n\r\n.comments h3 {\r\n  width: 100%;\r\n  text-align: center;\r\n  margin-top: 10px;\r\n}\r\n\r\n#comment-list {\r\n  width: 100%;\r\n  list-style: none;\r\n}\r\n\r\n#comment-list li {\r\n  display: flex;\r\n  width: 100%;\r\n  font-size: 14px;\r\n}\r\n\r\n#comment-list li:nth-child(even) {\r\n  background-color: rgba(154, 154, 154, 0.82);\r\n  color: #fff;\r\n}\r\n\r\n.comment-form {\r\n  width: 100%;\r\n}\r\n\r\n.comment-form .custom-inputs {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.comments-container {\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n  width: 60%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n}\r\n\r\n.comments-container .comment {\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.modal-content {\r\n  background-color: #fefefe;\r\n  padding: 0 20px 10px 20px;\r\n  margin: 10px 10%;\r\n  text-align: center;\r\n  border: 2px solid rgba(225, 170, 6, 0.9);\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n  max-height: 100vh;\r\n  border-bottom-left-radius: 20px;\r\n  border-bottom-right-radius: 20px;\r\n  box-shadow:\r\n    0 5px 12px rgba(225, 170, 6, 0.9),\r\n    0 5px 12px rgba(225, 170, 6, 0.9);\r\n}\r\n\r\n.my-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.my-form input {\r\n  width: 90%;\r\n  margin: 0 5% 10px 5%;\r\n  border: 2px solid rgba(225, 170, 6, 0.9);\r\n  height: 25px;\r\n}\r\n\r\n.my-form textarea {\r\n  width: 90%;\r\n  margin: 0 5% 5px 5%;\r\n  border: 2px solid rgba(225, 170, 6, 0.9);\r\n  height: 100px;\r\n}\r\n\r\n.my-form button {\r\n  margin-top: 10px;\r\n  width: 30%;\r\n  align-self: center;\r\n}\r\n\r\n/* The Close Button */\r\n.close {\r\n  position: relative;\r\n  left: 45%;\r\n  color: #aaa;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n}\r\n\r\n.close:hover,\r\n.close:focus {\r\n  color: black;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  .nav-menu {\r\n    position: static;\r\n    display: flex;\r\n    flex-direction: row;\r\n    margin-top: -70px;\r\n  }\r\n\r\n  .nav-items {\r\n    display: flex;\r\n    flex-direction: row;\r\n    margin-left: -50%;\r\n    background: none;\r\n  }\r\n\r\n  .nav-items .nav-link {\r\n    list-style: none;\r\n    margin: 0 12px;\r\n  }\r\n\r\n  .nav-items .nav-link a {\r\n    text-decoration: none;\r\n    margin: 0 12px;\r\n    padding: 5px 15px;\r\n    font-size: 18px;\r\n    font-weight: 700;\r\n    color: rgba(225, 170, 6, 0.9);\r\n    transition: 1s all ease-in-out;\r\n  }\r\n\r\n  .nav-items .nav-link a:hover {\r\n    transition: 1s all ease-in-out;\r\n    border-bottom: 2px solid #f1f18a;\r\n  }\r\n\r\n  .hamburger {\r\n    display: none;\r\n  }\r\n\r\n  .show-count {\r\n    color: rgba(225, 170, 6, 0.9);\r\n    margin-left: 30px;\r\n    font-size: 18px;\r\n    text-transform: uppercase;\r\n  }\r\n\r\n  .work-section {\r\n    margin-top: 10px;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n  }\r\n\r\n  .work-cards {\r\n    width: 20%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n  }\r\n\r\n  .work-box {\r\n    border: 3px solid rgba(225, 170, 6, 0.9);\r\n    width: 80%;\r\n    margin: 20px 10%;\r\n    border-bottom-left-radius: 15px;\r\n    border-bottom-right-radius: 15px;\r\n    background-color: #fff;\r\n    padding-bottom: 15px;\r\n    transition: all 1s ease-out;\r\n  }\r\n\r\n  .work-box:hover {\r\n    box-shadow:\r\n      0 5px 12px rgba(225, 170, 6, 0.9),\r\n      0 5px 12px rgba(225, 170, 6, 0.9);\r\n    transition: all 2s ease-out;\r\n    cursor: pointer;\r\n    font-style: italic;\r\n    color: #fff;\r\n    background-color: rgb(0, 0, 0, 0.7);\r\n    margin: 0 5px;\r\n    -webkit-box-reflect: below 0 linear-gradient(transparent, #0003);\r\n  }\r\n\r\n  .work-rating {\r\n    padding: 0 10px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n  }\r\n\r\n  .rate {\r\n    width: 50%;\r\n    height: 25px;\r\n    margin: 3px 10px;\r\n    padding: 0;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n  }\r\n\r\n  .rate1 {\r\n    width: 50%;\r\n    height: 25px;\r\n    margin: 7px 10px;\r\n    padding: 0;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n  }\r\n\r\n  .likebutton {\r\n    width: 22px;\r\n    margin-top: 0;\r\n  }\r\n\r\n  .likebutton:hover {\r\n    color: #fff;\r\n  }\r\n\r\n  .fa-star {\r\n    display: flex;\r\n    color: #000;\r\n  }\r\n\r\n  /* comment modal popup desktop */\r\n  .modal-content {\r\n    width: 50%;\r\n    margin: 12px 25% 6% 25%;\r\n    z-index: 1;\r\n  }\r\n\r\n  .close {\r\n    margin-right: -60px;\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  #show-image {\r\n    height: 300px;\r\n  }\r\n\r\n  .movie-summary {\r\n    font-size: 8px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/back-img-removebg.png":
/*!***********************************!*\
  !*** ./src/back-img-removebg.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dfc786866f5e1ef369d2.png";

/***/ }),

/***/ "./src/images/bg-img.jpeg":
/*!********************************!*\
  !*** ./src/images/bg-img.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "02145405106a63a8e0f6.jpeg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sVUFBVSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE9BQU8sT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLE1BQU0sT0FBTyxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFV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RUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQy9HQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2thbmJhbi1ncm91cC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8va2FuYmFuLWdyb3VwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9rYW5iYW4tZ3JvdXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2thbmJhbi1ncm91cC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2thbmJhbi1ncm91cC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9rYW5iYW4tZ3JvdXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8va2FuYmFuLWdyb3VwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9rYW5iYW4tZ3JvdXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8va2FuYmFuLWdyb3VwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2thbmJhbi1ncm91cC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2thbmJhbi1ncm91cC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2thbmJhbi1ncm91cC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9rYW5iYW4tZ3JvdXAvLi9zcmMvbW9kdWxlcy9hcHAuanMiLCJ3ZWJwYWNrOi8va2FuYmFuLWdyb3VwLy4vc3JjL21vZHVsZXMvYXBwVXRpbGl0eS5qcyIsIndlYnBhY2s6Ly9rYW5iYW4tZ3JvdXAvLi9zcmMvbW9kdWxlcy9jb21tZW50TW9kYWwuanMiLCJ3ZWJwYWNrOi8va2FuYmFuLWdyb3VwLy4vc3JjL21vZHVsZXMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9rYW5iYW4tZ3JvdXAvLi9zcmMvbW9kdWxlcy9zaG93LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9iZy1pbWcuanBlZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUGxheWZhaXIgRGlzcGxheScsIHNhbnMtc2VyaWY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC43KTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDgwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgb3BhY2l0eTogMC44O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDA7XFxyXFxufVxcclxcblxcclxcbiNoZWFkLWltZyB7XFxyXFxuICB3aWR0aDogMjAwcHg7XFxyXFxuICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgbWFyZ2luLXRvcDogLTQwcHg7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbWVudSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICB3aWR0aDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1pdGVtcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDQwJTtcXHJcXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWl0ZW1zLmFjdGl2ZSB7XFxyXFxuICBsZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbmsge1xcclxcbiAgbWFyZ2luOiAxNnB4IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5uYXYtaXRlbXMgLm5hdi1saW5rIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBtYXJnaW46IDEycHg7XFxyXFxufVxcclxcblxcclxcbi5uYXYtaXRlbXMgLm5hdi1saW5rIGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgbWFyZ2luOiAwIDEycHg7XFxyXFxuICBwYWRkaW5nOiA1cHggMTVweDtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBjb2xvcjogcmdiYSgyMjUsIDE3MCwgNiwgMC45KTtcXHJcXG4gIHRyYW5zaXRpb246IDFzIGFsbCBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1pdGVtcyAubmF2LWxpbmsgYTpob3ZlciB7XFxyXFxuICB0cmFuc2l0aW9uOiAxcyBhbGwgZWFzZS1pbi1vdXQ7XFxyXFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2YxZjE4YTtcXHJcXG59XFxyXFxuXFxyXFxuLmhhbWJ1cmdlciB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGNvbG9yOiByZ2JhKDIyNSwgMTcwLCA2LCAwLjkpO1xcclxcbiAgbWFyZ2luOiAyNXB4IDQwcHg7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFyIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgd2lkdGg6IDI1cHg7XFxyXFxuICBoZWlnaHQ6IDNweDtcXHJcXG4gIG1hcmdpbjogNXB4IGF1dG87XFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluLW91dDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluLW91dDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI1LCAxNzAsIDYsIDAuOSk7XFxyXFxufVxcclxcblxcclxcbi5oYW1idXJnZXIuYWN0aXZlIC5iYXI6bnRoLWNoaWxkKDIpIHtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNSwgMTcwLCA2LCAwLjkpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGFtYnVyZ2VyLmFjdGl2ZSAuYmFyOm50aC1jaGlsZCgxKSB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoOHB4KSByb3RhdGUoNDVkZWcpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjUsIDE3MCwgNiwgMC45KTtcXHJcXG59XFxyXFxuXFxyXFxuLmhhbWJ1cmdlci5hY3RpdmUgLmJhcjpudGgtY2hpbGQoMykge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04cHgpIHJvdGF0ZSgtNDVkZWcpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjUsIDE3MCwgNiwgMC45KTtcXHJcXG59XFxyXFxuXFxyXFxuLnNob3ctY291bnQge1xcclxcbiAgY29sb3I6IHJnYmEoMjI1LCAxNzAsIDYsIDAuOSk7XFxyXFxuICBtYXJnaW4tbGVmdDogMTAlO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG59XFxyXFxuXFxyXFxuLndvcmstYm94IHtcXHJcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHJnYmEoMjI1LCAxNzAsIDYsIDAuOSk7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgbWFyZ2luOiAyMHB4IDEwJTtcXHJcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XFxyXFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLndvcmstaW1nIHtcXHJcXG4gIHdpZHRoOiA5NCU7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBtYXJnaW46IDE1cHggMyU7XFxyXFxufVxcclxcblxcclxcbi53b3JrLXRpdGxlIHAge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIG1hcmdpbi10b3A6IC0xNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ud29yay1yYXRpbmcge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggNDBweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnJhdGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHBhZGRpbmc6IDAgMTBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnJhdGUxIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VfdGl0bGUge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxyXFxuICBtYXJnaW4tdG9wOiAtNXB4O1xcclxcbiAgcGFkZGluZy10b3A6IDA7XFxyXFxufVxcclxcblxcclxcbi5zdGFyX3RpdGxlIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcbiAgbWFyZ2luLXRvcDogLTRweDtcXHJcXG4gIHBhZGRpbmctdG9wOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZWJ1dHRvbiB7XFxyXFxuICB3aWR0aDogMjVweDtcXHJcXG4gIGhlaWdodDogMjVweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogOHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZWJ1dHRvbjpob3ZlciB7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMTBweCAzJTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0biB7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyMjUsIDE3MCwgNiwgMC45KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjcpO1xcclxcbiAgbWFyZ2luOiAwIDVweDtcXHJcXG4gIHBhZGRpbmc6IDhweCAxMHB4O1xcclxcbiAgLXdlYmtpdC1ib3gtcmVmbGVjdDogYmVsb3cgMCBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQsICMwMDAzKTtcXHJcXG4gIHRyYW5zaXRpb246IDNzO1xcclxcbiAgZm9udC1zaXplOiAxM3B4O1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bjpob3ZlciB7XFxyXFxuICBjb2xvcjogIzFkMmIzYTtcXHJcXG4gIHRyYW5zaXRpb246IDFzO1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMjI1LCAxNzAsIDYsIDAuOSk7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDIyNSwgMTcwLCA2LCAwLjkpO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDAsIDAsIDAsIDAuNyk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgbWFyZ2luLXRvcDogNSU7XFxyXFxuICBib3JkZXItdG9wOiAycHggc29saWQgcmdiYSgyMjUsIDE3MCwgNiwgMC45KTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIHAge1xcclxcbiAgd2lkdGg6IDk0JTtcXHJcXG4gIG1hcmdpbjogMCAzJTtcXHJcXG4gIHBhZGRpbmc6IDE1cHggNXB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC43KTtcXHJcXG4gIC13ZWJraXQtYm94LXJlZmxlY3Q6IGJlbG93IDAgbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50LCAjMDAwMyk7XFxyXFxuICB0cmFuc2l0aW9uOiAzcztcXHJcXG4gIGZvbnQtc2l6ZTogMTNweDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIG1vZGFsIGNzcyAqL1xcclxcbi5iYWNrc2hhZG93IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDUwJSk7XFxyXFxuICB6LWluZGV4OiAyMDAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFja3NoYWRvdyAubW9kYWwge1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG4gIGhlaWdodDogOTB2aDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBwYWRkaW5nOiAxNnB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2RmZTFlNjtcXHJcXG4gIGJveC1zaGFkb3c6IDAgNDhweCA0OHB4IHJnYmEoMzcsIDQ3LCAxMzcsIDglKTtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5iYWNrc2hhZG93IC5tb2RhbCAuaW1nLWRpdiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYmFja3NoYWRvdyAubW9kYWwgLmltZy1kaXYgLmltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuI3Nob3ctaW1hZ2Uge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDIwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jdGl0bGUge1xcclxcbiAgbWFyZ2luLXRvcDogMnB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jbW92aWUtc3VtbWFyeSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudHMgaDMge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY29tbWVudC1saXN0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnQtbGlzdCBsaSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxufVxcclxcblxcclxcbiNjb21tZW50LWxpc3QgbGk6bnRoLWNoaWxkKGV2ZW4pIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU0LCAxNTQsIDE1NCwgMC44Mik7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtZm9ybSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtZm9ybSAuY3VzdG9tLWlucHV0cyB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudHMtY29udGFpbmVyIHtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgd2lkdGg6IDYwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzLWNvbnRhaW5lciAuY29tbWVudCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1jb250ZW50IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxyXFxuICBwYWRkaW5nOiAwIDIwcHggMTBweCAyMHB4O1xcclxcbiAgbWFyZ2luOiAxMHB4IDEwJTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjI1LCAxNzAsIDYsIDAuOSk7XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgbWF4LWhlaWdodDogMTAwdmg7XFxyXFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XFxyXFxuICBib3gtc2hhZG93OlxcclxcbiAgICAwIDVweCAxMnB4IHJnYmEoMjI1LCAxNzAsIDYsIDAuOSksXFxyXFxuICAgIDAgNXB4IDEycHggcmdiYSgyMjUsIDE3MCwgNiwgMC45KTtcXHJcXG59XFxyXFxuXFxyXFxuLm15LWZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5teS1mb3JtIGlucHV0IHtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBtYXJnaW46IDAgNSUgMTBweCA1JTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjI1LCAxNzAsIDYsIDAuOSk7XFxyXFxuICBoZWlnaHQ6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5teS1mb3JtIHRleHRhcmVhIHtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBtYXJnaW46IDAgNSUgNXB4IDUlO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyMjUsIDE3MCwgNiwgMC45KTtcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5teS1mb3JtIGJ1dHRvbiB7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgd2lkdGg6IDMwJTtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xcclxcbi5jbG9zZSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBsZWZ0OiA0NSU7XFxyXFxuICBjb2xvcjogI2FhYTtcXHJcXG4gIGZvbnQtc2l6ZTogMjhweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2U6aG92ZXIsXFxyXFxuLmNsb3NlOmZvY3VzIHtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5uYXYtbWVudSB7XFxyXFxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIG1hcmdpbi10b3A6IC03MHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdi1pdGVtcyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAtNTAlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdi1pdGVtcyAubmF2LWxpbmsge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBtYXJnaW46IDAgMTJweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXYtaXRlbXMgLm5hdi1saW5rIGEge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIG1hcmdpbjogMCAxMnB4O1xcclxcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBjb2xvcjogcmdiYSgyMjUsIDE3MCwgNiwgMC45KTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMXMgYWxsIGVhc2UtaW4tb3V0O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdi1pdGVtcyAubmF2LWxpbmsgYTpob3ZlciB7XFxyXFxuICAgIHRyYW5zaXRpb246IDFzIGFsbCBlYXNlLWluLW91dDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmMWYxOGE7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGFtYnVyZ2VyIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zaG93LWNvdW50IHtcXHJcXG4gICAgY29sb3I6IHJnYmEoMjI1LCAxNzAsIDYsIDAuOSk7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAud29yay1zZWN0aW9uIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC53b3JrLWNhcmRzIHtcXHJcXG4gICAgd2lkdGg6IDIwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLndvcmstYm94IHtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiYSgyMjUsIDE3MCwgNiwgMC45KTtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgbWFyZ2luOiAyMHB4IDEwJTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1vdXQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAud29yay1ib3g6aG92ZXIge1xcclxcbiAgICBib3gtc2hhZG93OlxcclxcbiAgICAgIDAgNXB4IDEycHggcmdiYSgyMjUsIDE3MCwgNiwgMC45KSxcXHJcXG4gICAgICAwIDVweCAxMnB4IHJnYmEoMjI1LCAxNzAsIDYsIDAuOSk7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAycyBlYXNlLW91dDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC43KTtcXHJcXG4gICAgbWFyZ2luOiAwIDVweDtcXHJcXG4gICAgLXdlYmtpdC1ib3gtcmVmbGVjdDogYmVsb3cgMCBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQsICMwMDAzKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC53b3JrLXJhdGluZyB7XFxyXFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnJhdGUge1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuICAgIG1hcmdpbjogM3B4IDEwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yYXRlMSB7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIGhlaWdodDogMjVweDtcXHJcXG4gICAgbWFyZ2luOiA3cHggMTBweDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxpa2VidXR0b24ge1xcclxcbiAgICB3aWR0aDogMjJweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5saWtlYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZmEtc3RhciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLyogY29tbWVudCBtb2RhbCBwb3B1cCBkZXNrdG9wICovXFxyXFxuICAubW9kYWwtY29udGVudCB7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIG1hcmdpbjogMTJweCAyNSUgNiUgMjUlO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNsb3NlIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAtNjBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNzaG93LWltYWdlIHtcXHJcXG4gICAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb3ZpZS1zdW1tYXJ5IHtcXHJcXG4gICAgZm9udC1zaXplOiA4cHg7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsMkNBQTJDO0VBQzNDLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLFlBQVk7RUFDWix5REFBMkM7RUFDM0MsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxpQkFBaUI7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QUFrQjtJQUNsQixXQUFXO0lBQ1gsbUNBQW1DO0lBQ25DLGFBQWE7SUFDYixnRUFBZ0U7RUFDbEU7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsYUFBYTtJQUNiLDhCQUE4QjtFQUNoQzs7RUFFQTtJQUNFLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixhQUFhO0lBQ2IsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixhQUFhO0lBQ2IsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsV0FBVztFQUNiOztFQUVBLGdDQUFnQztFQUNoQztJQUNFLFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsVUFBVTtFQUNaOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknLCBzYW5zLXNlcmlmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNyk7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA4MHB4O1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL2JnLWltZy5qcGVnKTtcXHJcXG4gIG9wYWNpdHk6IDAuODtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jaGVhZC1pbWcge1xcclxcbiAgd2lkdGg6IDIwMHB4O1xcclxcbiAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gIG1hcmdpbi10b3A6IC00MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LW1lbnUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgd2lkdGg6IDA7XFxyXFxufVxcclxcblxcclxcbi5uYXYtaXRlbXMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG4gIG1hcmdpbi1sZWZ0OiA0MCU7XFxyXFxuICBwYWRkaW5nLXRvcDogMTAwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1pdGVtcy5hY3RpdmUge1xcclxcbiAgbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rIHtcXHJcXG4gIG1hcmdpbjogMTZweCAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWl0ZW1zIC5uYXYtbGluayB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgbWFyZ2luOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWl0ZW1zIC5uYXYtbGluayBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIG1hcmdpbjogMCAxMnB4O1xcclxcbiAgcGFkZGluZzogNXB4IDE1cHg7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgY29sb3I6IHJnYmEoMjI1LCAxNzAsIDYsIDAuOSk7XFxyXFxuICB0cmFuc2l0aW9uOiAxcyBhbGwgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5uYXYtaXRlbXMgLm5hdi1saW5rIGE6aG92ZXIge1xcclxcbiAgdHJhbnNpdGlvbjogMXMgYWxsIGVhc2UtaW4tb3V0O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmMWYxOGE7XFxyXFxufVxcclxcblxcclxcbi5oYW1idXJnZXIge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBjb2xvcjogcmdiYSgyMjUsIDE3MCwgNiwgMC45KTtcXHJcXG4gIG1hcmdpbjogMjVweCA0MHB4O1xcclxcbiAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmJhciB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHdpZHRoOiAyNXB4O1xcclxcbiAgaGVpZ2h0OiAzcHg7XFxyXFxuICBtYXJnaW46IDVweCBhdXRvO1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbi1vdXQ7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbi1vdXQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNSwgMTcwLCA2LCAwLjkpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGFtYnVyZ2VyLmFjdGl2ZSAuYmFyOm50aC1jaGlsZCgyKSB7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjUsIDE3MCwgNiwgMC45KTtcXHJcXG59XFxyXFxuXFxyXFxuLmhhbWJ1cmdlci5hY3RpdmUgLmJhcjpudGgtY2hpbGQoMSkge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDhweCkgcm90YXRlKDQ1ZGVnKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI1LCAxNzAsIDYsIDAuOSk7XFxyXFxufVxcclxcblxcclxcbi5oYW1idXJnZXIuYWN0aXZlIC5iYXI6bnRoLWNoaWxkKDMpIHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOHB4KSByb3RhdGUoLTQ1ZGVnKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI1LCAxNzAsIDYsIDAuOSk7XFxyXFxufVxcclxcblxcclxcbi5zaG93LWNvdW50IHtcXHJcXG4gIGNvbG9yOiByZ2JhKDIyNSwgMTcwLCA2LCAwLjkpO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxufVxcclxcblxcclxcbi53b3JrLWJveCB7XFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCByZ2JhKDIyNSwgMTcwLCA2LCAwLjkpO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIG1hcmdpbjogMjBweCAxMCU7XFxyXFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi53b3JrLWltZyB7XFxyXFxuICB3aWR0aDogOTQlO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgbWFyZ2luOiAxNXB4IDMlO1xcclxcbn1cXHJcXG5cXHJcXG4ud29yay10aXRsZSBwIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBtYXJnaW4tdG9wOiAtMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLndvcmstcmF0aW5nIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDQwcHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5yYXRlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwYWRkaW5nOiAwIDEwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5yYXRlMSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5saWtlX3RpdGxlIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcbiAgbWFyZ2luLXRvcDogLTVweDtcXHJcXG4gIHBhZGRpbmctdG9wOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc3Rhcl90aXRsZSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG4gIG1hcmdpbi10b3A6IC00cHg7XFxyXFxuICBwYWRkaW5nLXRvcDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VidXR0b24ge1xcclxcbiAgd2lkdGg6IDI1cHg7XFxyXFxuICBoZWlnaHQ6IDI1cHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDhweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VidXR0b246aG92ZXIge1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDEwcHggMyU7XFxyXFxufVxcclxcblxcclxcbi5idG4ge1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjI1LCAxNzAsIDYsIDAuOSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC43KTtcXHJcXG4gIG1hcmdpbjogMCA1cHg7XFxyXFxuICBwYWRkaW5nOiA4cHggMTBweDtcXHJcXG4gIC13ZWJraXQtYm94LXJlZmxlY3Q6IGJlbG93IDAgbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50LCAjMDAwMyk7XFxyXFxuICB0cmFuc2l0aW9uOiAzcztcXHJcXG4gIGZvbnQtc2l6ZTogMTNweDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5idG46aG92ZXIge1xcclxcbiAgY29sb3I6ICMxZDJiM2E7XFxyXFxuICB0cmFuc2l0aW9uOiAxcztcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDIyNSwgMTcwLCA2LCAwLjkpO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgyMjUsIDE3MCwgNiwgMC45KTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigwLCAwLCAwLCAwLjcpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIHtcXHJcXG4gIG1hcmdpbi10b3A6IDUlO1xcclxcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYmEoMjI1LCAxNzAsIDYsIDAuOSk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciBwIHtcXHJcXG4gIHdpZHRoOiA5NCU7XFxyXFxuICBtYXJnaW46IDAgMyU7XFxyXFxuICBwYWRkaW5nOiAxNXB4IDVweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNyk7XFxyXFxuICAtd2Via2l0LWJveC1yZWZsZWN0OiBiZWxvdyAwIGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCwgIzAwMDMpO1xcclxcbiAgdHJhbnNpdGlvbjogM3M7XFxyXFxuICBmb250LXNpemU6IDEzcHg7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBtb2RhbCBjc3MgKi9cXHJcXG4uYmFja3NoYWRvdyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCA1MCUpO1xcclxcbiAgei1pbmRleDogMjAwMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB0b3A6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcXHJcXG59XFxyXFxuXFxyXFxuLmJhY2tzaGFkb3cgLm1vZGFsIHtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxuICBoZWlnaHQ6IDkwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgcGFkZGluZzogMTZweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZmUxZTY7XFxyXFxuICBib3gtc2hhZG93OiAwIDQ4cHggNDhweCByZ2JhKDM3LCA0NywgMTM3LCA4JSk7XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFja3NoYWRvdyAubW9kYWwgLmltZy1kaXYge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJhY2tzaGFkb3cgLm1vZGFsIC5pbWctZGl2IC5pbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbiNzaG93LWltYWdlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAyMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3RpdGxlIHtcXHJcXG4gIG1hcmdpbi10b3A6IDJweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI21vdmllLXN1bW1hcnkge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzIGgzIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnQtbGlzdCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNjb21tZW50LWxpc3QgbGkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY29tbWVudC1saXN0IGxpOm50aC1jaGlsZChldmVuKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NCwgMTU0LCAxNTQsIDAuODIpO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWZvcm0ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWZvcm0gLmN1c3RvbS1pbnB1dHMge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzLWNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIHdpZHRoOiA2MCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cy1jb250YWluZXIgLmNvbW1lbnQge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtY29udGVudCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcclxcbiAgcGFkZGluZzogMCAyMHB4IDEwcHggMjBweDtcXHJcXG4gIG1hcmdpbjogMTBweCAxMCU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDIyNSwgMTcwLCA2LCAwLjkpO1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcXHJcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xcclxcbiAgYm94LXNoYWRvdzpcXHJcXG4gICAgMCA1cHggMTJweCByZ2JhKDIyNSwgMTcwLCA2LCAwLjkpLFxcclxcbiAgICAwIDVweCAxMnB4IHJnYmEoMjI1LCAxNzAsIDYsIDAuOSk7XFxyXFxufVxcclxcblxcclxcbi5teS1mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4ubXktZm9ybSBpbnB1dCB7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgbWFyZ2luOiAwIDUlIDEwcHggNSU7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDIyNSwgMTcwLCA2LCAwLjkpO1xcclxcbiAgaGVpZ2h0OiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubXktZm9ybSB0ZXh0YXJlYSB7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgbWFyZ2luOiAwIDUlIDVweCA1JTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjI1LCAxNzAsIDYsIDAuOSk7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubXktZm9ybSBidXR0b24ge1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gIHdpZHRoOiAzMCU7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIFRoZSBDbG9zZSBCdXR0b24gKi9cXHJcXG4uY2xvc2Uge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbGVmdDogNDUlO1xcclxcbiAgY29sb3I6ICNhYWE7XFxyXFxuICBmb250LXNpemU6IDI4cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlOmhvdmVyLFxcclxcbi5jbG9zZTpmb2N1cyB7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICAubmF2LW1lbnUge1xcclxcbiAgICBwb3NpdGlvbjogc3RhdGljO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBtYXJnaW4tdG9wOiAtNzBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXYtaXRlbXMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTUwJTtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXYtaXRlbXMgLm5hdi1saW5rIHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgbWFyZ2luOiAwIDEycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2LWl0ZW1zIC5uYXYtbGluayBhIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBtYXJnaW46IDAgMTJweDtcXHJcXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgY29sb3I6IHJnYmEoMjI1LCAxNzAsIDYsIDAuOSk7XFxyXFxuICAgIHRyYW5zaXRpb246IDFzIGFsbCBlYXNlLWluLW91dDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXYtaXRlbXMgLm5hdi1saW5rIGE6aG92ZXIge1xcclxcbiAgICB0cmFuc2l0aW9uOiAxcyBhbGwgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZjFmMThhO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhhbWJ1cmdlciB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2hvdy1jb3VudCB7XFxyXFxuICAgIGNvbG9yOiByZ2JhKDIyNSwgMTcwLCA2LCAwLjkpO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLndvcmstc2VjdGlvbiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAud29yay1jYXJkcyB7XFxyXFxuICAgIHdpZHRoOiAyMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC53b3JrLWJveCB7XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYmEoMjI1LCAxNzAsIDYsIDAuOSk7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIG1hcmdpbjogMjBweCAxMCU7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2Utb3V0O1xcclxcbiAgfVxcclxcblxcclxcbiAgLndvcmstYm94OmhvdmVyIHtcXHJcXG4gICAgYm94LXNoYWRvdzpcXHJcXG4gICAgICAwIDVweCAxMnB4IHJnYmEoMjI1LCAxNzAsIDYsIDAuOSksXFxyXFxuICAgICAgMCA1cHggMTJweCByZ2JhKDIyNSwgMTcwLCA2LCAwLjkpO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMnMgZWFzZS1vdXQ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNyk7XFxyXFxuICAgIG1hcmdpbjogMCA1cHg7XFxyXFxuICAgIC13ZWJraXQtYm94LXJlZmxlY3Q6IGJlbG93IDAgbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50LCAjMDAwMyk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAud29yay1yYXRpbmcge1xcclxcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yYXRlIHtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgICBtYXJnaW46IDNweCAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucmF0ZTEge1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuICAgIG1hcmdpbjogN3B4IDEwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5saWtlYnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IDIycHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubGlrZWJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZhLXN0YXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8qIGNvbW1lbnQgbW9kYWwgcG9wdXAgZGVza3RvcCAqL1xcclxcbiAgLm1vZGFsLWNvbnRlbnQge1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBtYXJnaW46IDEycHggMjUlIDYlIDI1JTtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jbG9zZSB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogLTYwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjc2hvdy1pbWFnZSB7XFxyXFxuICAgIGhlaWdodDogMzAwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubW92aWUtc3VtbWFyeSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogOHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgRGlzcGxheU1vdmllcyBmcm9tICcuL21vZHVsZXMvYXBwLmpzJztcbmltcG9ydCBsb2dvIGZyb20gJy4vYmFjay1pbWctcmVtb3ZlYmcucG5nJztcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIERpc3BsYXlNb3ZpZXMuaW5pdGlhbGl6ZSgpO1xufSk7XG5cbmNvbnN0IGhhbWJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oYW1idXJnZXInKTtcbmNvbnN0IG5hdk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LWl0ZW1zJyk7XG5cbmhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgaGFtYnVyZ2VyLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICBuYXZNZW51LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saW5rJykuZm9yRWFjaCgobikgPT4gbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgaGFtYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICBuYXZNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xufSkpO1xuXG5jb25zdCBiYWNrSW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWQtaW1nJyk7XG5iYWNrSW1nLnNyYyA9IGxvZ287XG4vLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJhY2tJbWcpO1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBjb21tYS1kYW5nbGUgKi9cbmltcG9ydCBPbkxpbmVUdkFQSSBmcm9tICcuL2FwcFV0aWxpdHkuanMnO1xuaW1wb3J0IERpc3BsYXkgZnJvbSAnLi9kaXNwbGF5LmpzJztcbmltcG9ydCBTaG93IGZyb20gJy4vc2hvdy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3BsYXlNb3ZpZXMge1xuICBvbkxpbmVUdkFQSSA9IG51bGw7XG5cbiAgc3RhdGljIGludm9sdmVJZCA9ICdNVnVHblYxVUNjUXcwOElQU0Z4aCc7XG5cbiAgc3RhdGljIGFsbExpa2VzID0gW107XG5cbiAgc3RhdGljIGFzeW5jIGluaXRpYWxpemUoKSB7XG4gICAgdGhpcy5vbkxpbmVUdkFQSSA9IG5ldyBPbkxpbmVUdkFQSSgpO1xuICAgIGxldCBzaG93cyA9IGF3YWl0IHRoaXMub25MaW5lVHZBUEkuZ2V0TW92aWVzKDEpO1xuICAgIHRoaXMuYWxsTGlrZXMgPSBhd2FpdCBEaXNwbGF5TW92aWVzLmdldEFsbExpa2VzKHRoaXMuaW52b3ZsZUlkKTtcblxuICAgIHNob3dzID0gc2hvd3MubWFwKChzaG93KSA9PiB7XG4gICAgICBjb25zdCBzaG93bGlrZXMgPSB0aGlzLmFsbExpa2VzLmZpbmQoXG4gICAgICAgIChsaWtlKSA9PiBsaWtlLml0ZW1faWQgPT09IHNob3cuaWRcbiAgICAgICkgfHwgeyBsaWtlczogMCwgaXRlbV9pZDogc2hvdy5pZCB9O1xuICAgICAgY29uc3QgbXlTaG93ID0gbmV3IFNob3coXG4gICAgICAgIHNob3cuaWQsXG4gICAgICAgIHNob3cubmFtZSxcbiAgICAgICAgc2hvdy5pbWFnZS5tZWRpdW0sXG4gICAgICAgIHNob3cuc3VtbWFyeSxcbiAgICAgICAgc2hvdy5nZW5yZXMsXG4gICAgICAgIHNob3cubGFuZ3VhZ2UsXG4gICAgICAgIHNob3dsaWtlcy5saWtlc1xuICAgICAgKTtcbiAgICAgIHJldHVybiBteVNob3c7XG4gICAgfSk7XG5cbiAgICBzaG93cyA9IHNob3dzLmZpbHRlcigoXywgaSkgPT4gaSA8IDI1KTtcbiAgICBEaXNwbGF5LmRpc3BsYXlTaG93cyhzaG93cyk7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgZ2V0QWxsTGlrZXMoYXBwSWQpIHtcbiAgICByZXR1cm4gdGhpcy5vbkxpbmVUdkFQSS5nZXRBbGxMaWtlcyhhcHBJZCk7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgbGlrZShzaG93SWQpIHtcbiAgICBjb25zdCBjdXJyZW50TGlrZXMgPSBhd2FpdCB0aGlzLm9uTGluZVR2QVBJLnBvc3RMaWtlKFxuICAgICAgdGhpcy5pbnZvbHZlSWQsXG4gICAgICBzaG93SWRcbiAgICApO1xuXG4gICAgRGlzcGxheS51cGRhdGVMaWtlKHNob3dJZCwgY3VycmVudExpa2VzKTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBnZXRDb21tZW50cyhzaG93SWQpIHtcbiAgICBjb25zdCBjb21tZW50cyA9IGF3YWl0IHRoaXMub25MaW5lVHZBUEkuZ2V0Q29tbWVudHModGhpcy5pbnZvbHZlSWQsIHNob3dJZCk7XG4gICAgcmV0dXJuIGNvbW1lbnRzO1xuICB9XG5cbiAgc3RhdGljIGdldENvbW1lbnRDb3VudChjb21tZW50cykge1xuICAgIHJldHVybiBjb21tZW50cy5sZW5ndGg7XG4gIH1cblxuICBzdGF0aWMgZ2V0U2hvd3NDb3VudGVyKHNob3dzKSB7XG4gICAgcmV0dXJuIHNob3dzLmxlbmd0aDtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBwb3N0Q29tbWVudChzaG93SWQsIHVzZXJuYW1lLCBjb21tZW50KSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLm9uTGluZVR2QVBJLnBvc3RDb21tZW50cyhcbiAgICAgIHRoaXMuaW52b2x2ZUlkLFxuICAgICAgc2hvd0lkLFxuICAgICAgdXNlcm5hbWUsXG4gICAgICBjb21tZW50XG4gICAgKTtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIGNvbW1hLWRhbmdsZSAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT25MaW5lVHZBUEkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnVybEFwaTEgPSAnaHR0cHM6Ly9hcGkudHZtYXplLmNvbSc7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG9wZXJhdG9yLWxpbmVicmVha1xuICAgIHRoaXMuaW52b2x2ZW1lbnRVcmxBcGkyID1cbiAgICAgICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGknO1xuICB9XG5cbiAgYXN5bmMgZ2V0TW92aWVzKHBhZ2UgPSAxKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt0aGlzLnVybEFwaTF9L3Nob3dzP3BhZ2U9JHtwYWdlfWAsIHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgfSk7XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGFzeW5jIGdldEFsbExpa2VzKGFwcElkKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGAke3RoaXMuaW52b2x2ZW1lbnRVcmxBcGkyfS9hcHBzLyR7YXBwSWR9L2xpa2VzYCxcbiAgICAgICAge1xuICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIGxpa2VzJyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldExpa2VzKGFwcElkLCBzaG93SWQpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYCR7dGhpcy5pbnZvbHZlbWVudFVybEFwaTJ9L2FwcHMvJHthcHBJZH0vbGlrZXNgLFxuICAgICAge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgfVxuICAgICk7XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc3QgbXlSZXN1bHQgPSByZXN1bHQuZmluZCgobGlrZSkgPT4gbGlrZS5pdGVtX2lkID09PSBzaG93SWQpIHx8IHtcbiAgICAgIGxpa2VzOiAwLFxuICAgICAgaXRlbV9pZDogc2hvd0lkLFxuICAgIH07XG5cbiAgICByZXR1cm4gbXlSZXN1bHQubGlrZXM7XG4gIH1cblxuICBhc3luYyBwb3N0TGlrZShhcHBJZCwgc2hvd0lkKSB7XG4gICAgYXdhaXQgZmV0Y2goYCR7dGhpcy5pbnZvbHZlbWVudFVybEFwaTJ9L2FwcHMvJHthcHBJZH0vbGlrZXNgLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgaXRlbV9pZDogc2hvd0lkLFxuICAgICAgfSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgY29uc3QgbXlsaWtlcyA9IGF3YWl0IHRoaXMuZ2V0TGlrZXMoYXBwSWQsIHNob3dJZCk7XG5cbiAgICByZXR1cm4gbXlsaWtlcztcbiAgfVxuXG4gIGFzeW5jIGdldENvbW1lbnRzKGFwcElkLCBzaG93SWQpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY29tbWVudHNSZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgJHt0aGlzLmludm9sdmVtZW50VXJsQXBpMn0vYXBwcy8ke2FwcElkfS9jb21tZW50cz9pdGVtX2lkPSR7c2hvd0lkfWAsXG4gICAgICAgIHtcbiAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIGNvbnN0IGNvbW1lbnRzID0gYXdhaXQgY29tbWVudHNSZXNwb25zZS5qc29uKCk7XG4gICAgICByZXR1cm4gY29tbWVudHM7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHBvc3RDb21tZW50cyhhcHBJZCwgc2hvd0lkLCB1c2VybmFtZSwgY29tbWVudCkge1xuICAgIGNvbnN0IGNvbW1lbnRzUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGAke3RoaXMuaW52b2x2ZW1lbnRVcmxBcGkyfS9hcHBzLyR7YXBwSWR9L2NvbW1lbnRzYCxcbiAgICAgIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpdGVtX2lkOiBzaG93SWQsXG4gICAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgICAgY29tbWVudCxcbiAgICAgICAgfSksXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgfVxuICAgICk7XG5cbiAgICByZXR1cm4gY29tbWVudHNSZXNwb25zZTtcbiAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgY29tbWEtZGFuZ2xlICovXG4vKiBlc2xpbnQgaW1wb3J0L25vLWN5Y2xlOiBbMiwgeyBtYXhEZXB0aDogMSB9XSAqL1xuaW1wb3J0IERpc3BsYXlNb3ZpZXMgZnJvbSAnLi9hcHAuanMnO1xuXG5jb25zdCBjb21tZW50TW9kYWwgPSBhc3luYyAoc2hvd0lkLCBzaG93cykgPT4ge1xuICBjb25zdCBzaG93ID0gc2hvd3MuZmluZCgodCkgPT4gdC5pZCA9PT0gcGFyc2VJbnQoc2hvd0lkLCAxMCkpO1xuXG4gIGNvbnN0IGNvbW1lbnRNb2RhbFZpZXcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudC1tb2RhbCcpO1xuICBjb21tZW50TW9kYWxWaWV3LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gIGNvbnN0IGltZ0VsID0gY29tbWVudE1vZGFsVmlldy5xdWVyeVNlbGVjdG9yKCcjc2hvdy1pbWFnZScpO1xuICBjb25zdCBzaG93VGl0bGVFbCA9IGNvbW1lbnRNb2RhbFZpZXcucXVlcnlTZWxlY3RvcignLm1vdmllLWluZm8gI3RpdGxlJyk7XG4gIGNvbnN0IHNob3dTdW1tYXJ5RWwgPSBjb21tZW50TW9kYWxWaWV3LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJy5tb3ZpZS1pbmZvICNtb3ZpZS1zdW1tYXJ5J1xuICApO1xuICBjb25zdCBjb21tZW50Q291bnRlciA9IGNvbW1lbnRNb2RhbFZpZXcucXVlcnlTZWxlY3RvcihcbiAgICAnLmNvbW1lbnRzICNjb21tZW50LWNvdW50ZXInXG4gICk7XG4gIGNvbnN0IGNvbW1lbnRMaXN0ID0gY29tbWVudE1vZGFsVmlldy5xdWVyeVNlbGVjdG9yKCcuY29tbWVudHMgI2NvbW1lbnQtbGlzdCcpO1xuICBjb25zdCBjbG9zZUVsID0gY29tbWVudE1vZGFsVmlldy5xdWVyeVNlbGVjdG9yKCcuY2xvc2UnKTtcbiAgY29uc3Qgc2hvd0lkRWwgPSBjb21tZW50TW9kYWxWaWV3LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0gI3Nob3dfaWQnKTtcbiAgc2hvd0lkRWwudmFsdWUgPSBzaG93SWQ7XG5cbiAgY2xvc2VFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb21tZW50TW9kYWxWaWV3LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH0pO1xuXG4gIGltZ0VsLnNyYyA9IHNob3cuaW1hZ2U7XG4gIHNob3dUaXRsZUVsLnRleHRDb250ZW50ID0gc2hvdy50aXRsZTtcbiAgc2hvd1N1bW1hcnlFbC5pbm5lckhUTUwgPSBzaG93LnN1bW1hcnk7XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBEaXNwbGF5TW92aWVzLmdldENvbW1lbnRzKHNob3dJZCk7XG4gIGNvbW1lbnRDb3VudGVyLnRleHRDb250ZW50ID0gYCgke1xuICAgIHR5cGVvZiByZXNwb25zZS5sZW5ndGggPT09ICd1bmRlZmluZWQnID8gMCA6IHJlc3BvbnNlLmxlbmd0aFxuICB9KWA7XG5cbiAgaWYgKHJlc3BvbnNlLmxlbmd0aCA+IDApIHtcbiAgICBjb21tZW50TGlzdC5pbm5lckhUTUwgPSAnJztcbiAgICByZXNwb25zZS5mb3JFYWNoKChjb21tZW50KSA9PiB7XG4gICAgICBjb21tZW50TGlzdC5pbm5lckhUTUwgKz0gYDxsaT5EYXRlOiAke2NvbW1lbnQuY3JlYXRpb25fZGF0ZX06PHA+ICR7Y29tbWVudC5jb21tZW50fTwvcD4gLSBCeTogJHtjb21tZW50LnVzZXJuYW1lfTwvbGk+YDtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBjb21tZW50TGlzdC5pbm5lckhUTUwgPSAnVGhlcmUgYXJlIG5vIENvbW1lbnRzIGZvciB0aGlzIHNob3chJztcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tbWVudE1vZGFsO1xuIiwiLyogZXNsaW50LWRpc2FibGUgZnVuY3Rpb24tcGFyZW4tbmV3bGluZSAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wbGljaXQtYXJyb3ctbGluZWJyZWFrICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGluZGVudCAqL1xuLyogZXNsaW50LWRpc2FibGUgY29tbWEtZGFuZ2xlICovXG5pbXBvcnQgRGlzcGxheU1vdmllcyBmcm9tICcuL2FwcC5qcyc7XG5pbXBvcnQgY29tbWVudE1vZGFsIGZyb20gJy4vY29tbWVudE1vZGFsLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzcGxheSB7XG4gIHN0YXRpYyBkaXNwbGF5U2hvd3Moc2hvd3MpIHtcbiAgICBjb25zdCBtb3ZpZVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud29yay1zZWN0aW9uJyk7XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGx1c3BsdXNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNob3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBtb3ZpZUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgbW92aWVMaXN0LmNsYXNzTGlzdC5hZGQoJ3dvcmstY2FyZHMnKTtcbiAgICAgIG1vdmllTGlzdC5pbm5lckhUTUwgKz0gYDxkaXYgY2xhc3M9XCJ3b3JrLWJveFwiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIGNsYXNzPVwid29yay1pbWdcIlxuICAgICAgICAgICAgc3JjPVwiJHtzaG93c1tpXS5pbWFnZX1cIlxuICAgICAgICAgICAgYWx0PVwibW92aWUgaW1hZ2VcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndvcmstdGl0bGVcIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ3b3JrLXBhcmFcIj4ke3Nob3dzW2ldLnRpdGxlfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndvcmstcmF0aW5nXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyYXRlXCI+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3M9J2xpa2VidXR0b24nIHNyYz0naHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9pb3MtZmlsbGVkLzUwLzAwMDAwMC9oZWFydHMucG5nJz5cbiAgICAgICAgICAgICAgPHNwYW4gaWQ9J2xpa2VzXyR7c2hvd3NbaV0uaWR9Jz4ke3Nob3dzW2ldLmxpa2VzfSAke1xuICAgICAgICBzaG93c1tpXS5saWtlcyA8PSAxID8gJ0xpa2UnIDogJ0xpa2VzJ1xuICAgICAgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyYXRlMVwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS1zdGFyIGxpa2VidXR0b1wiPjwvaT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3Rhcl90aXRsZVwiPjxzcGFuPlN0YXJzPC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvblwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBpZD0nY29tbWVudF8ke1xuICAgICAgICAgICAgICBzaG93c1tpXS5pZFxuICAgICAgICAgICAgfScgY2xhc3M9J2J0biBidG4tcHJpbWFyeSBidG4tbWQgY2FyZC1jb21tZW50LWJ0biBjb21tZW50cyc+Q29tbWVudHM8L2J1dHRvbj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+YDtcbiAgICAgIG1vdmllU2VjdGlvbi5hcHBlbmQobW92aWVMaXN0KTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJy5zaG93LWNvdW50J1xuICAgICkuaW5uZXJIVE1MID0gYE51bWJlciBvZiBTaG93czogJHtzaG93cy5sZW5ndGh9YDtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21tZW50cycpLmZvckVhY2goKGNvbW1lbnRCdG4pID0+XG4gICAgICBjb21tZW50QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2KSA9PiB7XG4gICAgICAgIGNvbW1lbnRNb2RhbChldi50YXJnZXQuaWQuc3BsaXQoJ18nKVsxXSwgc2hvd3MpO1xuICAgICAgfSlcbiAgICApO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpa2VidXR0b24nKS5mb3JFYWNoKChsaWtlQnRuLCBpKSA9PlxuICAgICAgbGlrZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgRGlzcGxheU1vdmllcy5saWtlKHNob3dzW2ldLmlkKTtcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcignI3Bvc3QtY29tbWVudC1mb3JtJylcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhc3luYyAoZXYpID0+IHtcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCB1c2VybmFtZSA9IGV2LnRhcmdldC5lbGVtZW50cy51c2VybmFtZS52YWx1ZS50cmltKCk7XG4gICAgICAgIGNvbnN0IGNvbW1lbnQgPSBldi50YXJnZXQuZWxlbWVudHMuY29tbWVudC52YWx1ZS50cmltKCk7XG4gICAgICAgIGNvbnN0IHNob3dJRCA9IGV2LnRhcmdldC5lbGVtZW50cy5zaG93X2lkLnZhbHVlLnRyaW0oKTtcblxuICAgICAgICBpZiAodXNlcm5hbWUgPT09ICcnIHx8IGNvbW1lbnQgPT09ICcnKSByZXR1cm47XG5cbiAgICAgICAgYXdhaXQgRGlzcGxheU1vdmllcy5wb3N0Q29tbWVudChcbiAgICAgICAgICBwYXJzZUludChzaG93SUQsIDEwKSxcbiAgICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgICBjb21tZW50XG4gICAgICAgICk7XG5cbiAgICAgICAgZXYudGFyZ2V0LmVsZW1lbnRzLnVzZXJuYW1lLnZhbHVlID0gJyc7XG4gICAgICAgIGV2LnRhcmdldC5lbGVtZW50cy5jb21tZW50LnZhbHVlID0gJyc7XG5cbiAgICAgICAgY29uc3QgY29tbWVudHMgPSBhd2FpdCBEaXNwbGF5TW92aWVzLmdldENvbW1lbnRzKHBhcnNlSW50KHNob3dJRCwgMTApKTtcbiAgICAgICAgRGlzcGxheS51cGRhdGVDb21tZW50TGlzdChjb21tZW50cyk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyB1cGRhdGVMaWtlKHNob3dJZCwgY3VycmVudExpa2VzKSB7XG4gICAgY29uc3QgbGlrZVNwYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbGlrZXNfJHtzaG93SWR9YCk7XG4gICAgbGlrZVNwYW4udGV4dENvbnRlbnQgPSBgJHtjdXJyZW50TGlrZXN9ICR7XG4gICAgICBjdXJyZW50TGlrZXMgPD0gMSA/ICdMaWtlJyA6ICdMaWtlcydcbiAgICB9YDtcbiAgfVxuXG4gIHN0YXRpYyB1cGRhdGVDb21tZW50TGlzdChjb21tZW50cykge1xuICAgIGNvbnN0IGNvbW1lbnRzTGlzdEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbW1lbnQtbGlzdCcpO1xuXG4gICAgY29tbWVudHNMaXN0RWwuaW5uZXJIVE1MID0gJyc7XG4gICAgY29tbWVudHMuZm9yRWFjaCgoY29tbWVudCkgPT4ge1xuICAgICAgY29tbWVudHNMaXN0RWwuaW5uZXJIVE1MICs9IGA8bGk+JHtjb21tZW50LmNyZWF0aW9uX2RhdGV9OjxwPiAke2NvbW1lbnQuY29tbWVudH08L3A+IC0gQnk6ICR7Y29tbWVudC51c2VybmFtZX08L2xpPmA7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjb21tZW50TW9kYWxWaWV3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnQtbW9kYWwnKTtcbiAgICBjb25zdCBjb21tZW50Q291bnRlciA9IGNvbW1lbnRNb2RhbFZpZXcucXVlcnlTZWxlY3RvcihcbiAgICAgICcuY29tbWVudHMgI2NvbW1lbnQtY291bnRlcidcbiAgICApO1xuICAgIGNvbW1lbnRDb3VudGVyLnRleHRDb250ZW50ID0gY29tbWVudHMubGVuZ3RoO1xuICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBjb21tYS1kYW5nbGUgKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3cge1xuICBjb25zdHJ1Y3RvcihcbiAgICBzaG93SWQsXG4gICAgc2hvd1RpdGxlLFxuICAgIGltYWdlLFxuICAgIHN1bW1hcnksXG4gICAgZ2VucmVzLFxuICAgIGxhbmd1YWdlLFxuICAgIGxpa2VzID0gMCxcbiAgICBjb21tZW50cyA9IFtdXG4gICkge1xuICAgIHRoaXMuaWQgPSBzaG93SWQ7XG4gICAgdGhpcy50aXRsZSA9IHNob3dUaXRsZTtcbiAgICB0aGlzLmltYWdlID0gaW1hZ2U7XG4gICAgdGhpcy5zdW1tYXJ5ID0gc3VtbWFyeTtcbiAgICB0aGlzLmdlbnJlcyA9IGdlbnJlcztcbiAgICB0aGlzLmxhbmd1YWdlID0gbGFuZ3VhZ2U7XG4gICAgdGhpcy5saWtlcyA9IGxpa2VzO1xuICAgIHRoaXMuY29tbWVudHMgPSBjb21tZW50cztcbiAgfVxuXG4gIC8vICAgZ2V0TGlrZXMoKSB7fVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9