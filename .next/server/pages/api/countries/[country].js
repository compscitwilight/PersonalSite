"use strict";
(() => {
var exports = {};
exports.id = 610;
exports.ids = [610];
exports.modules = {

/***/ 6827:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _data_countries_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2721);

function handler(req, res) {
    let { country  } = req.query;
    country = country.toLowerCase();
    const countryName = _data_countries_json__WEBPACK_IMPORTED_MODULE_0__[country];
    if (!countryName) {
        res.status(404).json({
            error: "Country not found"
        });
        return;
    }
    res.status(200).json({
        country: countryName
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [721], () => (__webpack_exec__(6827)));
module.exports = __webpack_exports__;

})();