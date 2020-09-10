/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/componetes/listagem/listagemCliente.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/api/cliente.js":
/*!****************************!*\
  !*** ./src/api/cliente.js ***!
  \****************************/
/*! exports provided: listarClientes, deleteClentes, detalheCliente, editCliente, cadastrarClientes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"listarClientes\", function() { return listarClientes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteClentes\", function() { return deleteClentes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"detalheCliente\", function() { return detalheCliente; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"editCliente\", function() { return editCliente; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cadastrarClientes\", function() { return cadastrarClientes; });\nconst listarClientes = () => {\r\n    return fetch('http://localhost:4000/clientes')\r\n        .then(resposta => {\r\n            return resposta.json()\r\n\r\n        })\r\n        .then(json => {\r\n            return json\r\n        })\r\n}\r\n\r\nconst cadastrarClientes = (nome, cpf) => {\r\n    const json = JSON.stringify({\r\n        nome: nome,\r\n        cpf: cpf\r\n    })\r\n    return fetch('http://localhost:4000/clientes/cliente', {\r\n            method: 'POST',\r\n            headers: {\r\n                'content-type': 'application/json'\r\n            },\r\n            body: json\r\n        })\r\n        .then(resp => {\r\n            return resp.body\r\n        })\r\n}\r\n\r\nconst deleteClentes = (id) => {\r\n    return fetch(`http://localhost:4000/clientes/cliente/${id}`, {\r\n        method: 'DELETE'\r\n    })\r\n\r\n}\r\n\r\n\r\n\r\nconst detalheCliente = id => {\r\n    return fetch(`http://localhost:4000/clientes/cliente/${id}`, {\r\n            method: 'GET'\r\n        })\r\n        .then(resposta => {\r\n            return resposta.json()\r\n\r\n        })\r\n\r\n}\r\n\r\n\r\nconst editCliente = (id, cpf, nome) => {\r\n    const json = JSON.stringify({\r\n        nome: nome,\r\n        cpf: cpf\r\n    })\r\n    return fetch(`http://localhost:4000/clientes/cliente/${id}`, {\r\n        method: 'PUT',\r\n        headers: {\r\n            'content-type': 'application/json'\r\n        },\r\n        body: json\r\n    })\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/api/cliente.js?");

/***/ }),

/***/ "./src/componetes/listagem/listagemCliente.js":
/*!****************************************************!*\
  !*** ./src/componetes/listagem/listagemCliente.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_cliente_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/cliente.js */ \"./src/api/cliente.js\");\n\r\n\r\nconst corpoTabela = document.querySelector(\"[data-conteudoTabela]\")\r\nconst removeCliente = (id) => {\r\n    if (confirm(\"Deseja deletar o cliente?\")) {\r\n        Object(_api_cliente_js__WEBPACK_IMPORTED_MODULE_0__[\"deleteClentes\"])(id)\r\n        setTimeout(function() {\r\n            document.location.reload(true);\r\n        }, 3000);\r\n    }\r\n}\r\n\r\nconst Exibecliente = (cpf, nome, id) => {\r\n    const linha = document.createElement('tr')\r\n\r\n    const conteudoLinha = `\r\n    <td>${cpf}</td>\r\n    <td>${nome}</td>\r\n    <button type=\"button\" class=\"btn btn-danger\" onclick=\"removeCliente(${id})\">Excluir</button>\r\n    <a href=\"./src/componetes/editarClientes/edita-clientes.html?id=${id}\"><button type=\"button\" class=\"btn btn-info m-1\">Editar</button></a>`\r\n\r\n    linha.innerHTML = conteudoLinha\r\n\r\n    return linha\r\n}\r\nObject(_api_cliente_js__WEBPACK_IMPORTED_MODULE_0__[\"listarClientes\"])().then(exibe => {\r\n        exibe.forEach(indice => {\r\n            corpoTabela.appendChild(Exibecliente(indice.cpf, indice.nome, indice.id))\r\n        })\r\n\r\n        console.log(corpoTabela)\r\n    }\r\n\r\n)\n\n//# sourceURL=webpack:///./src/componetes/listagem/listagemCliente.js?");

/***/ })

/******/ });