"use strict";
(() => {
var exports = {};
exports.id = 48;
exports.ids = [48];
exports.modules = {

/***/ 5152:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _data_cities_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2946);

function handler(req, res) {
    let { city  } = req.query;
    city = city.toLowerCase();
    const cityData = _data_cities_json__WEBPACK_IMPORTED_MODULE_0__[city];
    if (!cityData) {
        res.status(404).send({
            error: "City cannot be found."
        });
        return;
    }
    res.status(200).send({
        city: cityData
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [946], () => (__webpack_exec__(5152)));
module.exports = __webpack_exports__;

})();