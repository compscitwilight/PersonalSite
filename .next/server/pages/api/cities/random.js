"use strict";
(() => {
var exports = {};
exports.id = 445;
exports.ids = [445];
exports.modules = {

/***/ 1983:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _data_cities_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2946);

function handler(req, res) {
    const cityValues = Object.values(_data_cities_json__WEBPACK_IMPORTED_MODULE_0__);
    const randomNumber = Math.floor(Math.random() * cityValues.length);
    const randomCity = cityValues[randomNumber];
    if (!randomCity) {
        res.status(500).send({
            error: "Error on server side"
        });
        return;
    }
    res.status(200).send({
        city: randomCity
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [946], () => (__webpack_exec__(1983)));
module.exports = __webpack_exports__;

})();