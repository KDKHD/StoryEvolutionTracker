module.exports =
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/database/connection.ts":
/*!************************************!*\
  !*** ./src/database/connection.ts ***!
  \************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 11:19-23 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var mongoose_1 = __webpack_require__(/*! mongoose */ "mongoose");
var Database = /** @class */ (function () {
    function Database() {
        this._connect();
    }
    Database.prototype._connect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, mongoose_1.connect("mongodb+srv://dev:j16c8SXcLTlIty1R@cluster0.uwf3u.mongodb.net/articles?authSource=admin&replicaSet=atlas-tcrrsf-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true", { useNewUrlParser: true, useUnifiedTopology: true })];
                    case 1:
                        _a.sent();
                        __webpack_require__(/*! ./models/search */ "./src/database/models/search.ts");
                        console.log("Database connection successful");
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.error(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return Database;
}());
exports.default = new Database();


/***/ }),

/***/ "./src/database/models/article.ts":
/*!****************************************!*\
  !*** ./src/database/models/article.ts ***!
  \****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ "mongoose"));
var schema = new mongoose_1.default.Schema({
    articles: {
        _id: {
            primaryKey: true,
            type: "Object",
            required: true,
        },
        additional_data: {
            type: "Object",
            structure: {},
            required: true,
        },
        authors: {
            type: "Array",
            required: true,
        },
        canonical_link: {
            type: "string",
            required: true,
        },
        images: {
            type: "Array",
            required: true,
        },
        keywords: {
            type: "Array",
            required: true,
        },
        link_hash: {
            type: "string",
            required: true,
        },
        meta_data: {
            type: "Object",
            structure: {
                viewport: {
                    type: "string",
                    required: true,
                },
                section: {
                    type: "string",
                    required: true,
                },
                referrer: {
                    type: "string",
                    required: true,
                },
                og: {
                    type: "Object",
                    structure: {
                        pubdate: {
                            type: "string",
                            required: true,
                        },
                        url: {
                            type: "string",
                            required: true,
                        },
                        title: {
                            type: "string",
                            required: true,
                        },
                        description: {
                            type: "string",
                            required: true,
                        },
                        site_name: {
                            type: "string",
                            required: true,
                        },
                        type: {
                            type: "string",
                            required: true,
                        },
                        image: {
                            type: "Object",
                            structure: {
                                identifier: {
                                    type: "string",
                                    required: true,
                                },
                                width: {
                                    type: "number",
                                    required: true,
                                },
                                height: {
                                    type: "number",
                                    required: true,
                                },
                                alt: {
                                    type: "string",
                                    required: true,
                                },
                            },
                            required: true,
                        },
                        locale: {
                            type: "string",
                            required: true,
                        },
                    },
                    required: true,
                },
                description: {
                    type: "string",
                    required: true,
                },
                "theme-color": {
                    type: "string",
                    required: true,
                },
                article: {
                    type: "Object",
                    structure: {
                        author: {
                            type: "string",
                            required: true,
                        },
                        section: {
                            type: "string",
                            required: true,
                        },
                        opinion: {
                            type: "string",
                            required: true,
                        },
                        "content-tier": {
                            type: "string",
                            required: true,
                        },
                    },
                    required: true,
                },
                fb: {
                    type: "Object",
                    structure: {
                        admins: {
                            type: "number",
                            required: true,
                        },
                        app_id: {
                            type: "number",
                            required: true,
                        },
                        pages: {
                            type: "string",
                            required: true,
                        },
                    },
                    required: true,
                },
                pubdate: {
                    type: "string",
                    required: true,
                },
                lastmod: {
                    type: "string",
                    required: true,
                },
                author: {
                    type: "string",
                    required: true,
                },
                twitter: {
                    type: "Object",
                    structure: {
                        title: {
                            type: "string",
                            required: true,
                        },
                        description: {
                            type: "string",
                            required: true,
                        },
                        card: {
                            type: "string",
                            required: true,
                        },
                        image: {
                            type: "string",
                            required: true,
                        },
                        creator: {
                            type: "string",
                            required: true,
                        },
                        domain: {
                            type: "string",
                            required: true,
                        },
                        site: {
                            type: "string",
                            required: true,
                        },
                    },
                    required: true,
                },
                keywords: {
                    type: "string",
                    required: true,
                },
                thumbnail: {
                    type: "string",
                    required: true,
                },
                vr: {
                    type: "Object",
                    structure: {
                        canonical: {
                            type: "string",
                            required: true,
                        },
                    },
                    required: true,
                },
                "template-top": {
                    type: "string",
                    required: true,
                },
                "application-name": {
                    type: "string",
                    required: true,
                },
                "mobile-web-app-capable": {
                    type: "string",
                    required: true,
                },
                "msapplication-TileImage": {
                    type: "string",
                    required: true,
                },
                "msapplication-TileColor": {
                    type: "string",
                    required: true,
                },
                cleartype: {
                    type: "string",
                    required: true,
                },
            },
            required: true,
        },
        meta_description: {
            type: "string",
            required: true,
        },
        meta_favicon: {
            type: "string",
            required: true,
        },
        meta_img: {
            type: "string",
            required: true,
        },
        meta_keywords: {
            type: "Array",
            required: true,
        },
        meta_lang: {
            type: "string",
            required: true,
        },
        movies: {
            type: "Array",
            required: true,
        },
        publish_date: {
            type: "Date",
            required: false,
        },
        source_url: {
            type: "string",
            required: true,
        },
        summary: {
            type: "string",
            required: true,
        },
        text: {
            type: "string",
            required: true,
        },
        title: {
            type: "string",
            required: true,
        },
        top_image: {
            type: "string",
            required: true,
        },
        url: {
            type: "string",
            required: true,
        },
    },
});
exports.default = mongoose_1.default.model("Article", schema);


/***/ }),

/***/ "./src/database/models/search.ts":
/*!***************************************!*\
  !*** ./src/database/models/search.ts ***!
  \***************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:23-27 */
/*! CommonJS bailout: this is used directly at 9:26-30 */
/*! CommonJS bailout: this is used directly at 14:20-24 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var mongoose_1 = __importStar(__webpack_require__(/*! mongoose */ "mongoose"));
var SearchSchema = new mongoose_1.default.Schema({
    url: {
        type: "string",
        required: true,
    },
    title: {
        type: "string",
        required: true,
    },
    publish_date: {
        type: "string",
        required: true,
    },
    text: {
        type: "string",
        required: true,
    },
    similar: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Search" }],
});
exports.default = mongoose_1.default.model("Search", SearchSchema, "search");


/***/ }),

/***/ "./src/database/models/user.ts":
/*!*************************************!*\
  !*** ./src/database/models/user.ts ***!
  \*************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:23-27 */
/*! CommonJS bailout: this is used directly at 9:26-30 */
/*! CommonJS bailout: this is used directly at 14:20-24 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var mongoose_1 = __importStar(__webpack_require__(/*! mongoose */ "mongoose"));
__webpack_require__(/*! ./search */ "./src/database/models/search.ts");
var UserSchema = new mongoose_1.default.Schema({
    email: {
        type: "string",
        required: true,
    },
    passwordh: {
        type: "string",
        required: true,
    },
    name: {
        type: "string",
        required: true,
    },
    bookmarks: {
        type: Object
    },
    history: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Search" }],
});
exports.default = mongoose_1.default.model("User", UserSchema, "users");


/***/ }),

/***/ "./src/functions/search.ts":
/*!*********************************!*\
  !*** ./src/functions/search.ts ***!
  \*********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.handler = void 0;
var search_service_1 = __importDefault(__webpack_require__(/*! ../services/graphql/search-service */ "./src/services/graphql/search-service.ts"));
exports.handler = search_service_1.default.createHandler({
    cors: { origin: '*' },
});


/***/ }),

/***/ "./src/services/graphql/modules/article/index.ts":
/*!*******************************************************!*\
  !*** ./src/services/graphql/modules/article/index.ts ***!
  \*******************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var type_defs_1 = __importDefault(__webpack_require__(/*! ./type-defs */ "./src/services/graphql/modules/article/type-defs.ts"));
var resolvers_1 = __webpack_require__(/*! ./resolvers */ "./src/services/graphql/modules/article/resolvers.ts");
exports.default = {
    typeDefs: [type_defs_1.default],
    resolvers: resolvers_1.resolvers,
};


/***/ }),

/***/ "./src/services/graphql/modules/article/provider.ts":
/*!**********************************************************!*\
  !*** ./src/services/graphql/modules/article/provider.ts ***!
  \**********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 11:19-23 */
/*! CommonJS bailout: this is used directly at 38:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ArticleProvider = void 0;
var aws_sdk_1 = __importDefault(__webpack_require__(/*! aws-sdk */ "aws-sdk"));
var dataloader_1 = __importDefault(__webpack_require__(/*! dataloader */ "dataloader"));
var js_sha3_1 = __webpack_require__(/*! js-sha3 */ "js-sha3");
var article_1 = __importDefault(__webpack_require__(/*! ../../../../database/models/article */ "./src/database/models/article.ts"));
var dataloaderHelpers_1 = __webpack_require__(/*! ../../utils/dataloaderHelpers */ "./src/services/graphql/utils/dataloaderHelpers.ts");
aws_sdk_1.default.config.region = "us-east-1";
var lambda = new aws_sdk_1.default.Lambda();
var ArticleProvider = /** @class */ (function () {
    function ArticleProvider() {
    }
    ArticleProvider.getOrIngestArticles = new dataloader_1.default(function (urls) { return __awaiter(void 0, void 0, void 0, function () {
        var hashed, articles, mapped, newLinks;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    hashed = urls.map(function (url) { return js_sha3_1.shake128(url, 96); });
                    return [4 /*yield*/, article_1.default.find({
                            _id: {
                                $in: hashed,
                            },
                        }).lean()];
                case 1:
                    articles = _a.sent();
                    mapped = dataloaderHelpers_1.mapReduce(articles, hashed, "_id");
                    newLinks = mapped
                        .map(function (data, i) { return ({ data: data, url: urls[i] }); })
                        .filter(function (x) { return x.data == null; })
                        .map(function (x) { return x.url; });
                    ArticleProvider.ingestArticleByUrl(newLinks);
                    return [2 /*return*/, mapped.map(function (article, i) { return ({
                            status: article ? 200 : 400,
                            message: article
                                ? "Success."
                                : "Article " + hashed[i] + " being processed.",
                            article: article,
                        }); })];
            }
        });
    }); });
    ArticleProvider.ingestArticleByUrl = function (urls) {
        var payload = { bulkUrls: Array.isArray(urls) ? urls : [urls] };
        var params = {
            FunctionName: "injestservice-dev-hello",
            InvocationType: "RequestResponse",
            LogType: "Tail",
            Payload: JSON.stringify(payload),
        };
        return lambda
            .invoke(params)
            .promise()
            .then(function (result) { return JSON.parse(result.Payload); })
            .then(function (parsed) {
            if ("errorType" in parsed)
                throw Error(parsed.errorMessage);
            parsed["body"] = JSON.parse(parsed["body"]);
            return parsed;
        });
    };
    return ArticleProvider;
}());
exports.ArticleProvider = ArticleProvider;


/***/ }),

/***/ "./src/services/graphql/modules/article/resolvers.ts":
/*!***********************************************************!*\
  !*** ./src/services/graphql/modules/article/resolvers.ts ***!
  \***********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 11:19-23 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resolvers = void 0;
var provider_1 = __webpack_require__(/*! ../dork/provider */ "./src/services/graphql/modules/dork/provider.ts");
var provider_2 = __webpack_require__(/*! ./provider */ "./src/services/graphql/modules/article/provider.ts");
exports.resolvers = {
    Query: {
        article: function (_parent, _a, _b, info) {
            var url = _a.url;
            var userInfo = _b.userInfo;
            return __awaiter(void 0, void 0, void 0, function () {
                var article;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, provider_2.ArticleProvider.getOrIngestArticles.load(url)];
                        case 1:
                            article = _c.sent();
                            return [2 /*return*/, article];
                    }
                });
            });
        },
        articles: function (_parent, _a, _b, info) {
            var urls = _a.urls;
            var userInfo = _b.userInfo;
            return __awaiter(void 0, void 0, void 0, function () {
                var articles;
                return __generator(this, function (_c) {
                    articles = provider_2.ArticleProvider.getOrIngestArticles.loadMany(urls);
                    return [2 /*return*/, articles];
                });
            });
        },
    },
    Article: {
        dork: function (_a, _, _b, info) {
            var meta_keywords = _a.meta_keywords, keywords = _a.meta_data.keywords;
            var userInfo = _b.userInfo;
            return __awaiter(void 0, void 0, void 0, function () {
                var dorkResult;
                return __generator(this, function (_c) {
                    dorkResult = provider_1.DorkProvider.dorkByKeywords(["Subways, Goodson, Malaysia (1996-2019), Transit Systems, Elevators and Escalators, Metropolitan Transportation Authority, New York City, Falls, Accidents and Safety, Deaths (Fatalities), Disabilities"]) //meta_keywords.map(meta_keyword=>meta_keyword.value)
                    ;
                    return [2 /*return*/, dorkResult];
                });
            });
        },
    }
};


/***/ }),

/***/ "./src/services/graphql/modules/article/type-defs.ts":
/*!***********************************************************!*\
  !*** ./src/services/graphql/modules/article/type-defs.ts ***!
  \***********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:28-32 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var apollo_server_lambda_1 = __webpack_require__(/*! apollo-server-lambda */ "apollo-server-lambda");
exports.default = apollo_server_lambda_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\n  type ArticleResponse {\n    status: Int\n    message: String\n    article: Article\n  }\n\n  type Article {\n    _id: String\n    canonical_link: String\n    authors: [String]\n    images: [String]\n    keywords: [ArticleKeywords]\n    link_hash: String\n    meta_data: MetaData\n    meta_img: String\n    meta_keywords: [ArticleKeywords]\n    meta_lang: String\n    movies: [String]\n    publish_date: String\n    source_url: String\n    summary: String\n    text: String\n    title: String\n    top_image: String\n    url: String\n    dork: DorkResponse\n  }\n\n  type ArticleKeywords {\n    name: String\n    value: String\n    rant: Int\n    major: String\n  }\n\n  type MetaData{\n    viewport: String\n    section: String\n    referrer: String\n    og: ArticleOG\n    pubdate: String\n    lastmod: String\n    author: String\n    twitter: Twitter\n    description: String\n    keywords: String\n    thumbnail: String\n    vr: ArticleVr\n    template_top: String\n\n  }\n\n  type ArticleVr {\n    canonical: String\n  }\n\n  type Twitter {\n    title: String\n    card: String\n    image: String\n  }\n\n  type ArticleOG {\n    pubdate: String\n    url: String\n    title: String\n    description: String\n    site_name: String\n    type: String\n    image: ArticleImage\n  }\n\n  type ArticleImage {\n    identifier: String\n    width: Int\n    height: Int\n  }\n\n  extend type Query {\n    article(url: String!): ArticleResponse \n    articles(urls: [String!]): [ArticleResponse]\n  }\n\n"], ["\n\n  type ArticleResponse {\n    status: Int\n    message: String\n    article: Article\n  }\n\n  type Article {\n    _id: String\n    canonical_link: String\n    authors: [String]\n    images: [String]\n    keywords: [ArticleKeywords]\n    link_hash: String\n    meta_data: MetaData\n    meta_img: String\n    meta_keywords: [ArticleKeywords]\n    meta_lang: String\n    movies: [String]\n    publish_date: String\n    source_url: String\n    summary: String\n    text: String\n    title: String\n    top_image: String\n    url: String\n    dork: DorkResponse\n  }\n\n  type ArticleKeywords {\n    name: String\n    value: String\n    rant: Int\n    major: String\n  }\n\n  type MetaData{\n    viewport: String\n    section: String\n    referrer: String\n    og: ArticleOG\n    pubdate: String\n    lastmod: String\n    author: String\n    twitter: Twitter\n    description: String\n    keywords: String\n    thumbnail: String\n    vr: ArticleVr\n    template_top: String\n\n  }\n\n  type ArticleVr {\n    canonical: String\n  }\n\n  type Twitter {\n    title: String\n    card: String\n    image: String\n  }\n\n  type ArticleOG {\n    pubdate: String\n    url: String\n    title: String\n    description: String\n    site_name: String\n    type: String\n    image: ArticleImage\n  }\n\n  type ArticleImage {\n    identifier: String\n    width: Int\n    height: Int\n  }\n\n  extend type Query {\n    article(url: String!): ArticleResponse \n    articles(urls: [String!]): [ArticleResponse]\n  }\n\n"])));
var templateObject_1;


/***/ }),

/***/ "./src/services/graphql/modules/comprehendArticle/index.ts":
/*!*****************************************************************!*\
  !*** ./src/services/graphql/modules/comprehendArticle/index.ts ***!
  \*****************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var type_defs_1 = __importDefault(__webpack_require__(/*! ./type-defs */ "./src/services/graphql/modules/comprehendArticle/type-defs.ts"));
var resolvers_1 = __webpack_require__(/*! ./resolvers */ "./src/services/graphql/modules/comprehendArticle/resolvers.ts");
exports.default = {
    typeDefs: [type_defs_1.default],
    resolvers: resolvers_1.resolvers,
};


/***/ }),

/***/ "./src/services/graphql/modules/comprehendArticle/provider.ts":
/*!********************************************************************!*\
  !*** ./src/services/graphql/modules/comprehendArticle/provider.ts ***!
  \********************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ComprehendProvider = void 0;
var aws_sdk_1 = __importDefault(__webpack_require__(/*! aws-sdk */ "aws-sdk"));
aws_sdk_1.default.config.region = "us-east-1";
var lambda = new aws_sdk_1.default.Lambda();
var ComprehendProvider = /** @class */ (function () {
    function ComprehendProvider() {
    }
    ComprehendProvider.comprehendUrl = function (urls) {
        var payload = { bulkUrls: Array.isArray(urls) ? urls : [urls] };
        var params = {
            FunctionName: "injestservice-dev-awscomprehend",
            InvocationType: "RequestResponse",
            LogType: "Tail",
            Payload: JSON.stringify(payload),
        };
        return lambda
            .invoke(params)
            .promise()
            .then(function (result) { return JSON.parse(result.Payload); })
            .then(function (parsed) {
            console.log(parsed);
            return JSON.parse(parsed);
        });
    };
    return ComprehendProvider;
}());
exports.ComprehendProvider = ComprehendProvider;


/***/ }),

/***/ "./src/services/graphql/modules/comprehendArticle/resolvers.ts":
/*!*********************************************************************!*\
  !*** ./src/services/graphql/modules/comprehendArticle/resolvers.ts ***!
  \*********************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 11:19-23 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resolvers = void 0;
var provider_1 = __webpack_require__(/*! ../search/provider */ "./src/services/graphql/modules/search/provider.ts");
var provider_2 = __webpack_require__(/*! ./provider */ "./src/services/graphql/modules/comprehendArticle/provider.ts");
exports.resolvers = {
    Query: {
        comprehendArticle: function (_parent, _a, _b, info) {
            var url = _a.url;
            var userInfo = _b.userInfo;
            return __awaiter(void 0, void 0, void 0, function () {
                var comprehendArticle;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, provider_2.ComprehendProvider.comprehendUrl(url)];
                        case 1:
                            comprehendArticle = _c.sent();
                            return [2 /*return*/, comprehendArticle];
                    }
                });
            });
        },
    },
    ComprehendResponse: {
        search: function (_a, _b, _c, info) {
            var SearchString = _a.SearchString;
            var num = _b.num, start = _b.start, date_min = _b.date_min, date_max = _b.date_max;
            var userInfo = _c.userInfo;
            return __awaiter(void 0, void 0, void 0, function () {
                var similarResults;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0: return [4 /*yield*/, provider_1.SearchProvider.searchString(SearchString, {
                                num: num,
                                start: start,
                                date_min: date_min,
                                date_max: date_max,
                            })];
                        case 1:
                            similarResults = _d.sent();
                            return [2 /*return*/, similarResults];
                    }
                });
            });
        },
    },
};


/***/ }),

/***/ "./src/services/graphql/modules/comprehendArticle/type-defs.ts":
/*!*********************************************************************!*\
  !*** ./src/services/graphql/modules/comprehendArticle/type-defs.ts ***!
  \*********************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:28-32 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var apollo_server_lambda_1 = __webpack_require__(/*! apollo-server-lambda */ "apollo-server-lambda");
exports.default = apollo_server_lambda_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\n  type KeyPhrase {\n    BeginOffset: Int,\n    EndOffset: Int,\n    Score: Int,\n    Text: String\n  }\n\n  type ComprehendArticle {\n    authors: [String]\n    publish_date: String\n    text: String\n    title: String\n    top_image: String\n    link: String\n  }\n\n  type ComprehendResponse {\n    KeyPhrases: [KeyPhrase]\n    SearchString: String\n    article: ComprehendArticle\n    search(num: Int, start: Int, date_min: String, date_max: String): [SearchBody]\n  }\n  \n  extend type Query {\n    comprehendArticle(url: String!): [ComprehendResponse] \n  }\n\n"], ["\n\n  type KeyPhrase {\n    BeginOffset: Int,\n    EndOffset: Int,\n    Score: Int,\n    Text: String\n  }\n\n  type ComprehendArticle {\n    authors: [String]\n    publish_date: String\n    text: String\n    title: String\n    top_image: String\n    link: String\n  }\n\n  type ComprehendResponse {\n    KeyPhrases: [KeyPhrase]\n    SearchString: String\n    article: ComprehendArticle\n    search(num: Int, start: Int, date_min: String, date_max: String): [SearchBody]\n  }\n  \n  extend type Query {\n    comprehendArticle(url: String!): [ComprehendResponse] \n  }\n\n"])));
var templateObject_1;


/***/ }),

/***/ "./src/services/graphql/modules/dork/index.ts":
/*!****************************************************!*\
  !*** ./src/services/graphql/modules/dork/index.ts ***!
  \****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var type_defs_1 = __importDefault(__webpack_require__(/*! ./type-defs */ "./src/services/graphql/modules/dork/type-defs.ts"));
var resolvers_1 = __webpack_require__(/*! ./resolvers */ "./src/services/graphql/modules/dork/resolvers.ts");
exports.default = {
    typeDefs: [type_defs_1.default],
    resolvers: resolvers_1.resolvers,
};


/***/ }),

/***/ "./src/services/graphql/modules/dork/provider.ts":
/*!*******************************************************!*\
  !*** ./src/services/graphql/modules/dork/provider.ts ***!
  \*******************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DorkProvider = void 0;
var aws_sdk_1 = __importDefault(__webpack_require__(/*! aws-sdk */ "aws-sdk"));
aws_sdk_1.default.config.region = "us-east-1";
var lambda = new aws_sdk_1.default.Lambda();
var DorkProvider = /** @class */ (function () {
    function DorkProvider() {
    }
    DorkProvider.dorkByKeywords = function (keywords) {
        var payload = { keywords: keywords };
        var params = {
            FunctionName: "dorkingservice-dev-hello",
            InvocationType: "RequestResponse",
            LogType: "Tail",
            Payload: JSON.stringify(payload),
        };
        return lambda
            .invoke(params)
            .promise()
            .then(function (result) { return JSON.parse(result.Payload); })
            .then(function (parsed) {
            if ("errorType" in parsed) {
                console.log(parsed);
                throw Error(parsed.errorMessage);
            }
            parsed["body"] = JSON.parse(parsed["body"]);
            return parsed;
        });
    };
    return DorkProvider;
}());
exports.DorkProvider = DorkProvider;


/***/ }),

/***/ "./src/services/graphql/modules/dork/resolvers.ts":
/*!********************************************************!*\
  !*** ./src/services/graphql/modules/dork/resolvers.ts ***!
  \********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 11:19-23 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resolvers = void 0;
var provider_1 = __webpack_require__(/*! ./provider */ "./src/services/graphql/modules/dork/provider.ts");
exports.resolvers = {
    Query: {
        dork: function (_parent, _a, _b, info) {
            var keywords = _a.keywords;
            var userInfo = _b.userInfo;
            return __awaiter(void 0, void 0, void 0, function () {
                var dorkResponse;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, provider_1.DorkProvider.dorkByKeywords(keywords)];
                        case 1:
                            dorkResponse = _c.sent();
                            return [2 /*return*/, dorkResponse];
                    }
                });
            });
        },
    },
};


/***/ }),

/***/ "./src/services/graphql/modules/dork/type-defs.ts":
/*!********************************************************!*\
  !*** ./src/services/graphql/modules/dork/type-defs.ts ***!
  \********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:28-32 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var apollo_server_lambda_1 = __webpack_require__(/*! apollo-server-lambda */ "apollo-server-lambda");
exports.default = apollo_server_lambda_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\n  type DorkThumbnail {\n    src: String\n  }\n\n  type DorkMetatags{\n    template_top:String\n    og_image:String\n    twitter_card:String\n    og_image_width:String\n    theme_color:String\n    og_site_name:String\n    section:String\n    vr_canonical:String\n    article_content_tier:String\n    og_description:String\n    twitter_image:String\n    og_pubdate:String\n    lastmod:String\n    pubdate:String\n    witter_title:String\n    og_type:String\n    thumbnail:String\n    author:String\n    og_title:String\n    og_image_height:String\n    fb_pages:String\n    referrer:String\n    fb_app_id:String\n    viewport:String\n    twitter_description:String\n    og_url:String\n    article_opinion:String\n  }\n\n  type DorkCse_image {\n    src:String\n    width:String\n    type:String\n    height:String\n  }\n\n  type DorkNewsarticle {\n    image:String\n    keywords:String\n    author:String\n    ispartof:String\n    description:String\n    datecreated:String\n    url:String\n    articlebody:String\n    datemodified:String\n    articlesection:String\n    alternativeheadline:String\n    headline:String\n    datepublished:String\n    thumbnailurl:String\n  }\n\n\n  type DorkPagemap{\n    thumbnail:[DorkThumbnail]\n    metatags:[DorkMetatags]\n    cse_image:[DorkCse_image]\n    newsarticle:[DorkNewsarticle]\n  }\n\n  type DorkItem {\n    kind:String\n    title:String\n    htmlTitle:String\n    link:String\n    displayLink:String\n    snippet:String\n    htmlSnippet:String\n    formattedUrl:String\n    htmlFormattedUrl:String\n    pagemap:DorkPagemap\n  }\n\n  type DorkResponse {\n    statusCode: Int\n    body: DorkResponseBody\n  }\n\n  type DorkResponseBody {\n    items: [DorkItem]\n  }\n\n  extend type Query {\n    dork(keywords: [String!]!): DorkResponse \n  }\n\n"], ["\n\n  type DorkThumbnail {\n    src: String\n  }\n\n  type DorkMetatags{\n    template_top:String\n    og_image:String\n    twitter_card:String\n    og_image_width:String\n    theme_color:String\n    og_site_name:String\n    section:String\n    vr_canonical:String\n    article_content_tier:String\n    og_description:String\n    twitter_image:String\n    og_pubdate:String\n    lastmod:String\n    pubdate:String\n    witter_title:String\n    og_type:String\n    thumbnail:String\n    author:String\n    og_title:String\n    og_image_height:String\n    fb_pages:String\n    referrer:String\n    fb_app_id:String\n    viewport:String\n    twitter_description:String\n    og_url:String\n    article_opinion:String\n  }\n\n  type DorkCse_image {\n    src:String\n    width:String\n    type:String\n    height:String\n  }\n\n  type DorkNewsarticle {\n    image:String\n    keywords:String\n    author:String\n    ispartof:String\n    description:String\n    datecreated:String\n    url:String\n    articlebody:String\n    datemodified:String\n    articlesection:String\n    alternativeheadline:String\n    headline:String\n    datepublished:String\n    thumbnailurl:String\n  }\n\n\n  type DorkPagemap{\n    thumbnail:[DorkThumbnail]\n    metatags:[DorkMetatags]\n    cse_image:[DorkCse_image]\n    newsarticle:[DorkNewsarticle]\n  }\n\n  type DorkItem {\n    kind:String\n    title:String\n    htmlTitle:String\n    link:String\n    displayLink:String\n    snippet:String\n    htmlSnippet:String\n    formattedUrl:String\n    htmlFormattedUrl:String\n    pagemap:DorkPagemap\n  }\n\n  type DorkResponse {\n    statusCode: Int\n    body: DorkResponseBody\n  }\n\n  type DorkResponseBody {\n    items: [DorkItem]\n  }\n\n  extend type Query {\n    dork(keywords: [String!]!): DorkResponse \n  }\n\n"])));
var templateObject_1;


/***/ }),

/***/ "./src/services/graphql/modules/example/index.ts":
/*!*******************************************************!*\
  !*** ./src/services/graphql/modules/example/index.ts ***!
  \*******************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var type_defs_1 = __importDefault(__webpack_require__(/*! ./type-defs */ "./src/services/graphql/modules/example/type-defs.ts"));
var resolvers_1 = __webpack_require__(/*! ./resolvers */ "./src/services/graphql/modules/example/resolvers.ts");
exports.default = {
    typeDefs: [type_defs_1.default],
    resolvers: resolvers_1.resolvers,
};


/***/ }),

/***/ "./src/services/graphql/modules/example/resolvers.ts":
/*!***********************************************************!*\
  !*** ./src/services/graphql/modules/example/resolvers.ts ***!
  \***********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 11:19-23 */
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resolvers = void 0;
exports.resolvers = {
    Query: {
        example: function (_parent, args, _a, info) {
            var userInfo = _a.userInfo;
            return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    return [2 /*return*/, { hello: "Hello World" }];
                });
            });
        },
    },
    Mutation: {
        example: function (_parent, args, _a) {
            var userInfo = _a.userInfo;
            return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    return [2 /*return*/, { hello: "Mutation Hello World" }];
                });
            });
        },
    },
};


/***/ }),

/***/ "./src/services/graphql/modules/example/type-defs.ts":
/*!***********************************************************!*\
  !*** ./src/services/graphql/modules/example/type-defs.ts ***!
  \***********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:28-32 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var apollo_server_lambda_1 = __webpack_require__(/*! apollo-server-lambda */ "apollo-server-lambda");
exports.default = apollo_server_lambda_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Example {\n    hello: String\n  }\n\n  extend type Query {\n    example: Example\n  }\n\n  extend type Mutation {\n    example: Example\n  }\n"], ["\n  type Example {\n    hello: String\n  }\n\n  extend type Query {\n    example: Example\n  }\n\n  extend type Mutation {\n    example: Example\n  }\n"])));
var templateObject_1;


/***/ }),

/***/ "./src/services/graphql/modules/index.ts":
/*!***********************************************!*\
  !*** ./src/services/graphql/modules/index.ts ***!
  \***********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var modules_1 = __webpack_require__(/*! ../utils/modules */ "./src/services/graphql/utils/modules.ts");
var example_1 = __importDefault(__webpack_require__(/*! ./example */ "./src/services/graphql/modules/example/index.ts"));
var article_1 = __importDefault(__webpack_require__(/*! ./article */ "./src/services/graphql/modules/article/index.ts"));
var dork_1 = __importDefault(__webpack_require__(/*! ./dork */ "./src/services/graphql/modules/dork/index.ts"));
var comprehendArticle_1 = __importDefault(__webpack_require__(/*! ./comprehendArticle */ "./src/services/graphql/modules/comprehendArticle/index.ts"));
var search_1 = __importDefault(__webpack_require__(/*! ./search */ "./src/services/graphql/modules/search/index.ts"));
var rabbit_1 = __importDefault(__webpack_require__(/*! ./rabbit */ "./src/services/graphql/modules/rabbit/index.ts"));
var user_1 = __importDefault(__webpack_require__(/*! ./user */ "./src/services/graphql/modules/user/index.ts"));
var schema = modules_1.makeExecutableFromModules({
    modules: [example_1.default, article_1.default, dork_1.default, comprehendArticle_1.default, search_1.default, rabbit_1.default, user_1.default],
});
exports.default = schema;


/***/ }),

/***/ "./src/services/graphql/modules/rabbit/index.ts":
/*!******************************************************!*\
  !*** ./src/services/graphql/modules/rabbit/index.ts ***!
  \******************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var type_defs_1 = __importDefault(__webpack_require__(/*! ./type-defs */ "./src/services/graphql/modules/rabbit/type-defs.ts"));
var resolvers_1 = __webpack_require__(/*! ./resolvers */ "./src/services/graphql/modules/rabbit/resolvers.ts");
exports.default = {
    typeDefs: [type_defs_1.default],
    resolvers: resolvers_1.resolvers,
};


/***/ }),

/***/ "./src/services/graphql/modules/rabbit/provider.ts":
/*!*********************************************************!*\
  !*** ./src/services/graphql/modules/rabbit/provider.ts ***!
  \*********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:16-20 */
/*! CommonJS bailout: this is used directly at 13:17-21 */
/*! CommonJS bailout: this is used directly at 22:19-23 */
/*! CommonJS bailout: this is used directly at 49:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RabbitProvider = void 0;
var aws_sdk_1 = __importDefault(__webpack_require__(/*! aws-sdk */ "aws-sdk"));
var callback_api_1 = __importDefault(__webpack_require__(/*! amqplib/callback_api */ "amqplib/callback_api"));
var user_1 = __importDefault(__webpack_require__(/*! ../../../../database/models/user */ "./src/database/models/user.ts"));
var js_sha3_1 = __webpack_require__(/*! js-sha3 */ "js-sha3");
var ObjectId = __webpack_require__(/*! mongodb */ "mongodb").ObjectID;
var uuid = __webpack_require__(/*! uuid */ "uuid");
aws_sdk_1.default.config.region = "us-east-1";
var lambda = new aws_sdk_1.default.Lambda();
var rabbitUri = "amqp://admin:adminpass@ec2-52-207-231-70.compute-1.amazonaws.com:5672";
var RabbitProvider = /** @class */ (function () {
    function RabbitProvider() {
    }
    // static pythonSearch = async (keywords: String[]) => {
    //   let np = new Promise((resolve, reject) => {
    //     //Connect to rabbitMq
    //     const queue = "handleSearchRabbit";
    //     amqp.connect(rabbitUri, function (error0, connection) {
    //       if (error0) {
    //         reject(error0);
    //       }
    //       console.log(" [x] Connection Established");
    //       //Create channel if does not exist
    //       connection.createChannel(function (error1, channel) {
    //         if (error1) {
    //           reject(error1);
    //         }
    //         try {
    //           console.log(" [x] Channel Created");
    //           //Create message
    //           var data = {
    //             handleSearchRabbit: { keywords },
    //             uid: uuid.v4(),
    //             nextQueue: ["replyQueue"],
    //           };
    //           //Init queue
    //           channel.assertQueue(queue, {
    //             durable: true,
    //             arguments: {
    //               "x-dead-letter-exchange": `${queue}-dead-letter`,
    //             },
    //           });
    //           const sendResult = channel.sendToQueue(
    //             queue,
    //             Buffer.from(JSON.stringify(data)),
    //             {
    //               persistent: true,
    //             }
    //           );
    //           // connection.close();
    //           console.log(" [x] Sent %s %s", data, sendResult);
    //           resolve(data);
    //         } catch (error3) {
    //           reject(error3);
    //         }
    //       });
    //     });
    //   });
    //   return np.catch((e) => console.log(e));
    // };
    RabbitProvider.processUrl = function (url, userId) { return __awaiter(void 0, void 0, void 0, function () {
        var np;
        return __generator(this, function (_a) {
            np = new Promise(function (resolve, reject) {
                //Connect to rabbitMq
                var queue = "ingestUrlArticleRabbit";
                callback_api_1.default.connect(rabbitUri, function (error0, connection) {
                    if (error0) {
                        reject(error0);
                    }
                    console.log(" [x] Connection Established");
                    //Create channel if does not exist
                    connection.createChannel(function (error1, channel) {
                        return __awaiter(this, void 0, void 0, function () {
                            var data, articlePath, userOid, user, sendResult, error3_1;
                            var _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        if (error1) {
                                            reject(error1);
                                        }
                                        _b.label = 1;
                                    case 1:
                                        _b.trys.push([1, 3, , 4]);
                                        console.log(" [x] Channel Created");
                                        data = {
                                            ingestUrlArticleRabbit: {
                                                url: url,
                                            },
                                            handleSearchRabbit: {
                                                num: 10
                                            },
                                            uid: userId,
                                            nextQueue: ["comprehendServiceRabbit", "handleSearchRabbit", "userServiceRabbit", "replyQueue"],
                                            userId: userId
                                        };
                                        //Init queue
                                        channel.assertQueue(queue, {
                                            durable: true,
                                            arguments: {
                                                "x-dead-letter-exchange": queue + "-dead-letter",
                                            },
                                        });
                                        articlePath = "bookmarks." + js_sha3_1.shake128(url, 256).slice(0, 24);
                                        userOid = new ObjectId(userId);
                                        return [4 /*yield*/, user_1.default.findOne({ "$and": [{ "_id": userOid }, (_a = {}, _a[articlePath] = { "$exists": true }, _a)] })];
                                    case 2:
                                        user = _b.sent();
                                        sendResult = channel.sendToQueue(queue, Buffer.from(JSON.stringify(data)), {
                                            persistent: true,
                                        });
                                        // connection.close();
                                        console.log(" [x] Sent %s %s", data, sendResult);
                                        resolve(__assign(__assign({}, data), { bookmarked: user != null }));
                                        return [3 /*break*/, 4];
                                    case 3:
                                        error3_1 = _b.sent();
                                        reject(error3_1);
                                        return [3 /*break*/, 4];
                                    case 4: return [2 /*return*/];
                                }
                            });
                        });
                    });
                });
            });
            return [2 /*return*/, np.catch(function (e) { return console.log(e); })];
        });
    }); };
    return RabbitProvider;
}());
exports.RabbitProvider = RabbitProvider;


/***/ }),

/***/ "./src/services/graphql/modules/rabbit/resolvers.ts":
/*!**********************************************************!*\
  !*** ./src/services/graphql/modules/rabbit/resolvers.ts ***!
  \**********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 11:19-23 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resolvers = void 0;
var provider_1 = __webpack_require__(/*! ./provider */ "./src/services/graphql/modules/rabbit/provider.ts");
exports.resolvers = {
    Query: {
        pythonSearch: function (_parent, args, _a, info) {
            var userInfo = _a.userInfo;
            return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    return [2 /*return*/];
                });
            });
        },
        processUrl: function (_parent, args, _a, info) {
            var decodedToken = _a.decodedToken;
            return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    return [2 /*return*/, provider_1.RabbitProvider.processUrl(args.url, decodedToken.data.id)];
                });
            });
        },
    },
};


/***/ }),

/***/ "./src/services/graphql/modules/rabbit/type-defs.ts":
/*!**********************************************************!*\
  !*** ./src/services/graphql/modules/rabbit/type-defs.ts ***!
  \**********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:28-32 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var apollo_server_lambda_1 = __webpack_require__(/*! apollo-server-lambda */ "apollo-server-lambda");
exports.default = apollo_server_lambda_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type MessageSent {\n      keywords: [String]\n      uid: String,\n      nextQueue: [String]\n      bookmarked: Boolean\n  }\n\n  extend type Query {\n    pythonSearch(keywords: [String]): MessageSent\n    processUrl(url: String): MessageSent\n  }\n"], ["\n  type MessageSent {\n      keywords: [String]\n      uid: String,\n      nextQueue: [String]\n      bookmarked: Boolean\n  }\n\n  extend type Query {\n    pythonSearch(keywords: [String]): MessageSent\n    processUrl(url: String): MessageSent\n  }\n"])));
var templateObject_1;


/***/ }),

/***/ "./src/services/graphql/modules/search/index.ts":
/*!******************************************************!*\
  !*** ./src/services/graphql/modules/search/index.ts ***!
  \******************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var type_defs_1 = __importDefault(__webpack_require__(/*! ./type-defs */ "./src/services/graphql/modules/search/type-defs.ts"));
var resolvers_1 = __webpack_require__(/*! ./resolvers */ "./src/services/graphql/modules/search/resolvers.ts");
exports.default = {
    typeDefs: [type_defs_1.default],
    resolvers: resolvers_1.resolvers,
};


/***/ }),

/***/ "./src/services/graphql/modules/search/provider.ts":
/*!*********************************************************!*\
  !*** ./src/services/graphql/modules/search/provider.ts ***!
  \*********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:16-20 */
/*! CommonJS bailout: this is used directly at 13:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SearchProvider = void 0;
var aws_sdk_1 = __importDefault(__webpack_require__(/*! aws-sdk */ "aws-sdk"));
aws_sdk_1.default.config.region = "us-east-1";
var lambda = new aws_sdk_1.default.Lambda();
var SearchProvider = /** @class */ (function () {
    function SearchProvider() {
    }
    SearchProvider.searchString = function (keywords, _a) {
        var _b = _a.num, num = _b === void 0 ? 10 : _b, _c = _a.start, start = _c === void 0 ? 0 : _c, date_min = _a.date_min, date_max = _a.date_max;
        var payload = __assign(__assign({ keywords: [keywords], num: num,
            start: start }, (date_min != null && { date_min: date_min })), (date_max != null && { date_max: date_max }));
        var params = {
            FunctionName: "dorkingservice-dev-pythonSearch",
            InvocationType: "RequestResponse",
            LogType: "Tail",
            Payload: JSON.stringify(payload),
        };
        return lambda
            .invoke(params)
            .promise()
            .then(function (result) { return JSON.parse(result.Payload); })
            .then(function (parsed) {
            return JSON.parse(parsed);
        });
    };
    return SearchProvider;
}());
exports.SearchProvider = SearchProvider;


/***/ }),

/***/ "./src/services/graphql/modules/search/resolvers.ts":
/*!**********************************************************!*\
  !*** ./src/services/graphql/modules/search/resolvers.ts ***!
  \**********************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export resolvers [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resolvers = void 0;
exports.resolvers = {};


/***/ }),

/***/ "./src/services/graphql/modules/search/type-defs.ts":
/*!**********************************************************!*\
  !*** ./src/services/graphql/modules/search/type-defs.ts ***!
  \**********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:28-32 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var apollo_server_lambda_1 = __webpack_require__(/*! apollo-server-lambda */ "apollo-server-lambda");
exports.default = apollo_server_lambda_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\n  type SearchBody {\n    description: String\n    link: String\n    title: String\n    publish_date: String\n  }\n  \n"], ["\n\n  type SearchBody {\n    description: String\n    link: String\n    title: String\n    publish_date: String\n  }\n  \n"])));
var templateObject_1;


/***/ }),

/***/ "./src/services/graphql/modules/user/index.ts":
/*!****************************************************!*\
  !*** ./src/services/graphql/modules/user/index.ts ***!
  \****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var type_defs_1 = __importDefault(__webpack_require__(/*! ./type-defs */ "./src/services/graphql/modules/user/type-defs.ts"));
var resolvers_1 = __webpack_require__(/*! ./resolvers */ "./src/services/graphql/modules/user/resolvers.ts");
exports.default = {
    typeDefs: [type_defs_1.default],
    resolvers: resolvers_1.resolvers,
};


/***/ }),

/***/ "./src/services/graphql/modules/user/provider.ts":
/*!*******************************************************!*\
  !*** ./src/services/graphql/modules/user/provider.ts ***!
  \*******************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 11:19-23 */
/*! CommonJS bailout: this is used directly at 38:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserProvider = void 0;
var user_1 = __importDefault(__webpack_require__(/*! ../../../../database/models/user */ "./src/database/models/user.ts"));
var search_1 = __importDefault(__webpack_require__(/*! ../../../../database/models/search */ "./src/database/models/search.ts"));
var dataloader_1 = __importDefault(__webpack_require__(/*! dataloader */ "dataloader"));
var UserProvider = /** @class */ (function () {
    function UserProvider() {
    }
    UserProvider.user = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, user_1.default.findById(id).populate("history")];
        });
    }); };
    UserProvider.search = new dataloader_1.default(function (id) {
        return search_1.default.find({ _id: { $in: id } });
    });
    return UserProvider;
}());
exports.UserProvider = UserProvider;


/***/ }),

/***/ "./src/services/graphql/modules/user/resolvers.ts":
/*!********************************************************!*\
  !*** ./src/services/graphql/modules/user/resolvers.ts ***!
  \********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 11:19-23 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resolvers = void 0;
var provider_1 = __webpack_require__(/*! ./provider */ "./src/services/graphql/modules/user/provider.ts");
exports.resolvers = {
    Query: {
        user: function (_parent, args, _a, info) {
            var decodedToken = _a.decodedToken;
            return __awaiter(void 0, void 0, void 0, function () {
                var x;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, provider_1.UserProvider.user(decodedToken.data.id)];
                        case 1:
                            x = _b.sent();
                            x["bookmarksTemp"] = x["bookmarks"];
                            delete x["bookmarks"];
                            return [2 /*return*/, x];
                    }
                });
            });
        },
    },
    User: {
        bookmarks: function (_a, args, _b, info) {
            var bookmarksTemp = _a.bookmarksTemp;
            var decodedToken = _b.decodedToken;
            return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_c) {
                    return [2 /*return*/, provider_1.UserProvider.search.loadMany(Object.keys(bookmarksTemp))];
                });
            });
        },
        notifications: function (_a, args, _b, info) {
            var bookmarksTemp = _a.bookmarksTemp;
            var decodedToken = _b.decodedToken;
            return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_c) {
                    return [2 /*return*/, provider_1.UserProvider.search.loadMany(Object.keys(bookmarksTemp).filter(function (key) { return bookmarksTemp[key] > 0; }))];
                });
            });
        },
    }
};


/***/ }),

/***/ "./src/services/graphql/modules/user/type-defs.ts":
/*!********************************************************!*\
  !*** ./src/services/graphql/modules/user/type-defs.ts ***!
  \********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:28-32 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var apollo_server_lambda_1 = __webpack_require__(/*! apollo-server-lambda */ "apollo-server-lambda");
exports.default = apollo_server_lambda_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type User {\n    _id: String\n    bookmarks: [Search]\n    history: [Search]\n    notifications: [Search]\n    email: String\n    name: String\n  }\n\n  type Search{\n    url: String\n    title: String\n    date: String\n    text: String\n  }\n\n  extend type Query {\n    user: User\n  }\n"], ["\n  type User {\n    _id: String\n    bookmarks: [Search]\n    history: [Search]\n    notifications: [Search]\n    email: String\n    name: String\n  }\n\n  type Search{\n    url: String\n    title: String\n    date: String\n    text: String\n  }\n\n  extend type Query {\n    user: User\n  }\n"])));
var templateObject_1;


/***/ }),

/***/ "./src/services/graphql/search-service.ts":
/*!************************************************!*\
  !*** ./src/services/graphql/search-service.ts ***!
  \************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 11:19-23 */
/*! CommonJS bailout: this is used directly at 38:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var apollo_server_lambda_1 = __webpack_require__(/*! apollo-server-lambda */ "apollo-server-lambda");
var modules_1 = __importDefault(__webpack_require__(/*! ./modules */ "./src/services/graphql/modules/index.ts"));
var connection_1 = __importDefault(__webpack_require__(/*! ../../database/connection */ "./src/database/connection.ts"));
var jsonwebtoken_1 = __importDefault(__webpack_require__(/*! jsonwebtoken */ "jsonwebtoken"));
__webpack_require__(/*! dotenv */ "dotenv").config();
connection_1.default._connect();
exports.default = new apollo_server_lambda_1.ApolloServer({
    schema: modules_1.default,
    context: function (_a) {
        var event = _a.event, context = _a.context;
        return __awaiter(void 0, void 0, void 0, function () {
            var header, token, decodedToken;
            return __generator(this, function (_b) {
                header = event.headers.authorization || event.headers.Authorization || "";
                token = header.split(" ")[1];
                decodedToken = jsonwebtoken_1.default.verify(token, process.env.TOKEN_SECRET);
                // add the user to the context
                return [2 /*return*/, { decodedToken: decodedToken, token: token }];
            });
        });
    },
});


/***/ }),

/***/ "./src/services/graphql/utils/dataloaderHelpers.ts":
/*!*********************************************************!*\
  !*** ./src/services/graphql/utils/dataloaderHelpers.ts ***!
  \*********************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export mapGroupBy [provided] [no usage info] [missing usage info prevents renaming] */
/*! export mapReduce [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mapReduce = exports.mapGroupBy = void 0;
var ramda_1 = __webpack_require__(/*! ramda */ "ramda");
var mapGroupBy = function (rows, ids, field) {
    var groupedById = ramda_1.groupBy(function (row) { return row[field]; }, rows);
    return ramda_1.map(function (id) { return groupedById[id] || []; }, ids);
};
exports.mapGroupBy = mapGroupBy;
var mapReduce = function (rows, ids, field) {
    if (field === void 0) { field = 'id'; }
    var lookup = rows.reduce(function (acc, row) {
        acc[row[field]] = row;
        return acc;
    }, {});
    return ramda_1.map(function (id) { return lookup[id] || null; }, ids);
};
exports.mapReduce = mapReduce;


/***/ }),

/***/ "./src/services/graphql/utils/modules.ts":
/*!***********************************************!*\
  !*** ./src/services/graphql/utils/modules.ts ***!
  \***********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:28-32 */
/*! CommonJS bailout: this is used directly at 6:14-18 */
/*! CommonJS bailout: this is used directly at 22:16-20 */
/*! CommonJS bailout: this is used directly at 26:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.makeExecutableFromModules = void 0;
var apollo_server_lambda_1 = __webpack_require__(/*! apollo-server-lambda */ "apollo-server-lambda");
var deepmerge_1 = __importDefault(__webpack_require__(/*! deepmerge */ "deepmerge"));
var globalTypeDefs = apollo_server_lambda_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Query\n  type Mutation\n"], ["\n  type Query\n  type Mutation\n"])));
var makeExecutableFromModules = function (_a) {
    var modules = _a.modules;
    var typeDefs = [globalTypeDefs];
    var resolvers = {};
    modules.forEach(function (module) {
        typeDefs = __spread(typeDefs, module.typeDefs);
        resolvers = deepmerge_1.default(resolvers, module.resolvers);
    });
    var schema = apollo_server_lambda_1.makeExecutableSchema({
        typeDefs: typeDefs,
        resolvers: resolvers,
        schemaDirectives: {},
    });
    return schema;
};
exports.makeExecutableFromModules = makeExecutableFromModules;
var templateObject_1;


/***/ }),

/***/ "amqplib/callback_api":
/*!***************************************!*\
  !*** external "amqplib/callback_api" ***!
  \***************************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("amqplib/callback_api");;

/***/ }),

/***/ "apollo-server-lambda":
/*!***************************************!*\
  !*** external "apollo-server-lambda" ***!
  \***************************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("apollo-server-lambda");;

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("aws-sdk");;

/***/ }),

/***/ "dataloader":
/*!*****************************!*\
  !*** external "dataloader" ***!
  \*****************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("dataloader");;

/***/ }),

/***/ "deepmerge":
/*!****************************!*\
  !*** external "deepmerge" ***!
  \****************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("deepmerge");;

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("dotenv");;

/***/ }),

/***/ "js-sha3":
/*!**************************!*\
  !*** external "js-sha3" ***!
  \**************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("js-sha3");;

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("jsonwebtoken");;

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("mongodb");;

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("mongoose");;

/***/ }),

/***/ "ramda":
/*!************************!*\
  !*** external "ramda" ***!
  \************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("ramda");;

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("uuid");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/functions/search.ts");
/******/ })()
;
//# sourceMappingURL=search.js.map