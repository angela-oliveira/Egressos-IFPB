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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ \"./js/utils.mjs\");\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\n\n\nvar campus = document.querySelector('.campus');\nvar curso = document.querySelector('.curso');\nvar turma = document.querySelector('.turma');\n\nvar filter_campus = new Array();\nvar filter_curso = new Array();\nvar filter_turma = new Array();\nvar egressosJson = void 0;\n\n// const utils = {\n//   'ifpb-jp': 'João Pessoa',\n//   'ifpb-cz': 'Cajazeiras',\n//   'ifpb-cg': 'Campina Grande',\n//   'ifpb-cb': 'Cabedelo'\n// }\n\n// const utils_curso = {\n//   'cstsi':'Sistemas para Internet',\n//   'cstrc': 'Redes de Computadores',\n//   'Engenharia Eletrica': 'Engenharia Eletrica',\n//   'CST EM TELECOMUNICAÇÕES': 'Telecomunicações',\n//   'ads': 'Análize e Desenhvolvimento de Sistemas',\n//   'cstt': 'Telecomunicações'\n// }\n\n//Criar um array com os dados expecificos para cada filtro\n\nvar exibir_filtros_campus = function exibir_filtros_campus(i) {\n  return '<a class=\"dropdown-item cidade\" href=\"#\">' + _utils_mjs__WEBPACK_IMPORTED_MODULE_0__[\"utils\"][i] + '</a>';\n};\nvar exibir_filtros_cursos = function exibir_filtros_cursos(i) {\n  return '<a class=\"dropdown-item cursos\" href=\"#\">' + _utils_mjs__WEBPACK_IMPORTED_MODULE_0__[\"utils_curso\"][i] + '</a>';\n};\nvar exibir_filtros_turmas = function exibir_filtros_turmas(i) {\n  return '<a class=\"dropdown-item turmas\" href=\"#\">' + i + '</a>';\n};\n\n//campus\nvar criar_filtro_campus = function criar_filtro_campus() {\n  filter_campus.forEach(function (element) {\n    campus.insertAdjacentHTML('beforeend', exibir_filtros_campus(element));\n  });\n};\nvar getEgressosByCampus = function getEgressosByCampus(campus) {\n  return egressosJson.filter(function (egresso) {\n    return _utils_mjs__WEBPACK_IMPORTED_MODULE_0__[\"utils\"][egresso.campus] == campus;\n  });\n};\n\n//curso\nvar criar_filtro_curso = function criar_filtro_curso() {\n  filter_curso.forEach(function (element) {\n    curso.insertAdjacentHTML('beforeend', exibir_filtros_cursos(element));\n  });\n};\n\nvar getEgressosByCurso = function getEgressosByCurso(curso) {\n  return egressosJson.filter(function (egresso) {\n    return _utils_mjs__WEBPACK_IMPORTED_MODULE_0__[\"utils_curso\"][egresso.curso] == curso;\n  });\n};\n\n//turma\nvar mat = void 0;\nvar new_mat = void 0;\nvar criar_filtro_turma = function criar_filtro_turma() {\n  new_mat.forEach(function (element) {\n    if (element[0] == 2) {\n      turma.insertAdjacentHTML('beforeend', exibir_filtros_turmas(element));\n    }\n  });\n  turma.insertAdjacentHTML('beforeend', '<a class=\"dropdown-item turmas_indefinido\" href=\"#\">Indefinido</a>');\n};\nvar getEgressosByTurma = function getEgressosByTurma(id) {\n  return egressosJson.filter(function (egresso) {\n    return egresso.id.substring(0, 4) + '.' + egresso.id.substring(4, 5) == id;\n  });\n};\nvar getEgressosByTurmas_indefinido = function getEgressosByTurmas_indefinido(indefinidos) {\n  return egressosJson.filter(function (egresso) {\n    return egresso.id[0] != 2;\n  });\n};\n\n//Exibir filtro expecificado\n\nvar texto_filtro = document.querySelector('.texto_filtro');\nvar exibir_texto_filtro = function exibir_texto_filtro(el, t) {\n  return '<div>' + el + ' ' + t + '</div>';\n};\nvar criar_texto_filtro = function criar_texto_filtro(el, texto) {\n  texto_filtro.innerHTML = '';\n  texto_filtro.insertAdjacentHTML('beforeend', exibir_texto_filtro(el, texto));\n};\n\nfetch('data/egressos.json').then(function (res) {\n  return res.json();\n}).then(function (json) {\n  egressosJson = json;\n  exibeEgressos(json);\n\n  //filtros\n  //filtro campus\n  filter_campus = [].concat(_toConsumableArray(new Set(json.map(function (x) {\n    return x.campus;\n  }))));\n  criar_filtro_campus();\n  var cidades = document.querySelectorAll('.cidade');\n  cidades.forEach(function (cidade) {\n    cidade.addEventListener('click', function (event) {\n      exibeEgressos(getEgressosByCampus(cidade.textContent));\n      criar_texto_filtro('Campus: ', cidade.textContent);\n    });\n  });\n  // filtro curso\n  filter_curso = [].concat(_toConsumableArray(new Set(json.map(function (x) {\n    return x.curso;\n  }))));\n  criar_filtro_curso();\n  var cursos = document.querySelectorAll('.cursos');\n  cursos.forEach(function (bycurso) {\n    bycurso.addEventListener('click', function (event) {\n      exibeEgressos(getEgressosByCurso(bycurso.textContent));\n      criar_texto_filtro('Curso: ', bycurso.textContent);\n    });\n  });\n  // filtro turma\n  filter_turma = json.map(function (x) {\n    return x.id;\n  });\n  mat = filter_turma.map(function (v) {\n    return v.substring(0, 4) + '.' + v.substring(4, 5);\n  });\n  new_mat = [].concat(_toConsumableArray(new Set(mat)));\n  new_mat.sort(function (a, b) {\n    return a - b;\n  });\n  criar_filtro_turma();\n  var turmas = document.querySelectorAll('.turmas');\n  var turmas_indefinido = document.querySelectorAll('.turmas_indefinido');\n  turmas.forEach(function (byturma) {\n    byturma.addEventListener('click', function (event) {\n      exibeEgressos(getEgressosByTurma(byturma.textContent));\n      criar_texto_filtro('Turma: ', byturma.textContent);\n    });\n  });\n  turmas_indefinido.forEach(function (byturmas_indefinido) {\n    byturmas_indefinido.addEventListener('click', function (event) {\n      exibeEgressos(getEgressosByTurmas_indefinido(byturmas_indefinido.textContent));\n    });\n  });\n});\n\n// essa função irá escolher quais card serão exibidos (apenas aqueles que tem linkedin), ordenar, e chamar a função mountCard para exibir\n\nvar egressosContainer = document.querySelector(\".egressos\");\nfunction exibeEgressos(egressos) {\n  egressosContainer.innerHTML = '';\n  var view = egressos.filter(function (e) {\n    return e.hasOwnProperty(\"linkedin\") && e.hasOwnProperty(\"egresso\");\n  }).sort(function (a, b) {\n    return a.nomeCompactado.localeCompare(b.nomeCompactado);\n  }).map(function (e) {\n    return mountCard(e);\n  }).join('');\n\n  egressosContainer.innerHTML = view;\n\n  //Event onclcik cards\n  var egressocards = document.querySelectorAll('.egresso');\n  var card_completo = document.querySelector('#card-completo');\n  egressocards.forEach(function (card) {\n    card.addEventListener('click', function (event) {\n      card_completo.removeAttribute('class');\n    });\n  });\n}\n// Montar o card no html\nvar turma_card = void 0;\nfunction mountCard(person) {\n\n  var github = '';\n  var linkedin = '';\n  var facebook = '';\n  var instagram = '';\n  var twitter = '';\n\n  if (person.hasOwnProperty(\"linkedin\")) {\n    linkedin = '<a target=\"_blank\" href=\"' + person.linkedin + '\"><i class=\"fab fa-linkedin-in\"></i></a>';\n  }\n\n  if (person.hasOwnProperty(\"github\")) {\n    github = '<a target=\"_blank\" href=\"' + person.github + '\"><i class=\"fab fa-github\"></i></a>';\n  }\n\n  if (person.hasOwnProperty(\"facebook\")) {\n    facebook = '<a target=\"_blank\" href=\"' + person.facebook + '\"><i class=\"fab fa-facebook\"></i></a>';\n  }\n\n  if (person.hasOwnProperty(\"instagram\")) {\n    instagram = '<a target=\"_blank\" href=\"' + person.instagram + '\"><i class=\"fab fa-instagram\"></i></a>';\n  }\n\n  if (person.hasOwnProperty(\"twitter\")) {\n    twitter = '<a target=\"_blank\" href=\"' + person.twitter + '\"><i class=\"fab fa-twitter\"></i></a>';\n  }\n\n  turma_card = person.id.substring(0, 4) + '.' + person.id.substring(4, 5);\n  var matricula = turma_card[0] == 2 ? turma_card : 'Indefinido';\n\n  var card = '<div class=\"egresso\">\\n  <figure style=\"background-image: url(img/egressos/' + (person.hasOwnProperty(\"avatar\") ? person.avatar : 'placeholder.jpg') + ');\">\\n    <div class=\"info\">\\n      <p>' + person.nomeCompactado + '</p>\\n      </div>\\n  </figure>\\n  <div class=\"icons card-hover\">\\n        ' + (linkedin + github + facebook + instagram + twitter) + '\\n  </div>\\n\\n  <div class=\"name card-hover\">\\n    <h2>' + person.nomeCompactado + '</h2>\\n      <p>Curso: ' + _utils_mjs__WEBPACK_IMPORTED_MODULE_0__[\"utils_curso\"][person.curso] + ' <br>Campus: ' + _utils_mjs__WEBPACK_IMPORTED_MODULE_0__[\"utils\"][person.campus] + '<br>Turma: ' + matricula + '</p>\\n  </div>\\n</div>';\n\n  return card;\n}\n\n//Menu Letter\n\nvar ma_abc = document.querySelector('.ma_abc');\nvar array_ma_abc = [\"#\", \"A\", \"B\", \"C\", \"D\", \"E\", \"F\", \"G\", \"H\", \"I\", \"J\", \"K\", \"L\", \"M\", \"N\", \"O\", \"P\", \"Q\", \"R\", \"S\", \"U\", \"V\", \"W\", \"X\", \"Y\", \"Z\"];\ncriar_ma_abc();\n\n//função pesquisar\nvar compareString = function compareString(name, search) {\n  return name.search(search) == -1 ? false : true;\n};\nvar getByParcialName = function getByParcialName(search) {\n  return egressosJson.filter(function (egresso) {\n    return compareString(egresso.nomeCompactado, new RegExp('^' + search, 'gi'));\n  });\n};\n\nfunction criar_ma_abc() {\n  ma_abc.innerHTML = '';\n  array_ma_abc.map(function (v) {\n    return ma_abc.insertAdjacentHTML('beforeend', exibir_ma_abc(v));\n  });\n\n  // EventListener Letter\n  var letters = document.querySelectorAll('.letter');\n  letters.forEach(function (letter) {\n\n    letter.addEventListener('click', function (event) {\n      texto_filtro.innerHTML = '';\n      var search = letter.textContent;\n      if (search == '#') exibeEgressos(egressosJson);else exibeEgressos(getByParcialName(search));\n    });\n  });\n}\nfunction exibir_ma_abc(inf) {\n  return '<a href=\"#' + inf + '\" data-letter=\"' + inf + '\" class=\"letter\">' + inf + '</a>';\n}\n\n// EventListener Search\nvar searchInput = document.querySelector('.search-input');\nsearchInput.addEventListener('keyup', function (event) {\n  texto_filtro.innerHTML = '';\n  var search = searchInput.value;\n  if (search == '') exibeEgressos(egressosJson);else exibeEgressos(getByParcialName(search));\n});\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./js/utils.mjs":
/*!**********************!*\
  !*** ./js/utils.mjs ***!
  \**********************/
/*! exports provided: utils, utils_curso */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"utils\", function() { return utils; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"utils_curso\", function() { return utils_curso; });\nconst utils = {\n    'ifpb-jp': 'João Pessoa',\n    'ifpb-cz': 'Cajazeiras',\n    'ifpb-cg': 'Campina Grande',\n    'ifpb-cb': 'Cabedelo'\n}\n\nconst utils_curso = {\n    'cstsi': 'Sistemas para Internet',\n    'cstrc': 'Redes de Computadores',\n    'Engenharia Eletrica': 'Engenharia Eletrica',\n    'CST EM TELECOMUNICAÇÕES': 'Telecomunicações',\n    'ads': 'Análize e Desenhvolvimento de Sistemas',\n    'cstt': 'Telecomunicações'\n}\n\n//# sourceURL=webpack:///./js/utils.mjs?");

/***/ })

/******/ });