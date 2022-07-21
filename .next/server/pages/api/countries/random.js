"use strict";
(() => {
var exports = {};
exports.id = 542;
exports.ids = [542];
exports.modules = {

/***/ 1657:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _data_countries_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2721);

function handler(req, res) {
    const keys = Object.values(_data_countries_json__WEBPACK_IMPORTED_MODULE_0__);
    const randomNumber = Math.floor(Math.random() * keys.length);
    const country = keys[randomNumber];
    if (!country) {
        res.status(500).send({
            error: "Error on server side"
        });
        return;
    }
    res.status(200).send({
        country: country
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [721], () => (__webpack_exec__(1657)));
module.exports = __webpack_exports__;

})();