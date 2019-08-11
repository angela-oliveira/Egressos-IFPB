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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.mjs");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.mjs":
/*!*********************!*\
  !*** ./js/main.mjs ***!
  \*********************/
/*! no exports provided */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ \"./js/utils.mjs\");\n\n\nconst campus = document.querySelector('.campus')\nconst curso = document.querySelector('.curso')\nconst turma = document.querySelector('.turma')\n\nlet filter_campus = new Array()\nlet filter_curso = new Array()\nlet filter_turma = new Array()\nlet egressosJson;\n\n//Criar um array com os dados expecificos para cada filtro\n\nconst exibir_filtros_campus = i => `<a class=\"dropdown-item cidade\" href=\"#\">${_utils_mjs__WEBPACK_IMPORTED_MODULE_0__[\"CAMPUS\"][i]}</a>`\nconst exibir_filtros_cursos = i => `<a class=\"dropdown-item cursos\" href=\"#\">${_utils_mjs__WEBPACK_IMPORTED_MODULE_0__[\"CURSOS\"][i]}</a>`\nconst exibir_filtros_turmas = i => `<a class=\"dropdown-item turmas\" href=\"#\">${i}</a>`\n\n//campus\nconst criar_filtro_campus = () => {\n  for (f of filter_campus) {\n    campus.insertAdjacentHTML('beforeend', exibir_filtros_campus(f))\n  }\n}\nconst getEgressosByCampus = campus => egressosJson.filter(egresso => _utils_mjs__WEBPACK_IMPORTED_MODULE_0__[\"CAMPUS\"][egresso.campus] == campus)\n\n//curso\nconst criar_filtro_curso = () => {\n  for(e of filter_curso){\n    curso.insertAdjacentHTML('beforeend',exibir_filtros_cursos(e))\n  }\n}\nconst getEgressosByCurso = curso => egressosJson.filter(egresso => _utils_mjs__WEBPACK_IMPORTED_MODULE_0__[\"CURSOS\"][egresso.curso] == curso)\n\n//turma\nlet mat\nlet new_mat\nconst criar_filtro_turma = () => {\n\n  for(g of new_mat){\n    if (g[0]==2){\n      turma.insertAdjacentHTML('beforeend', exibir_filtros_turmas(g))\n    }\n  }\n  turma.insertAdjacentHTML('beforeend', `<a class=\"dropdown-item turmas_indefinido\" href=\"#\">Indefinido</a>`)\n\n}\nconst getEgressosByTurma = id => egressosJson.filter(egresso => `${egresso.id.substring(0,4)}.${egresso.id.substring(4,5)}` == id)\nconst getEgressosByTurmas_indefinido = indefinidos => egressosJson.filter(egresso => egresso.id[0]!= 2)\n\n//Exibir filtro expecificado\n\nconst texto_filtro = document.querySelector('.texto_filtro')\nconst exibir_texto_filtro = (el, t) => `<div>${el} ${t}</div>`\nconst criar_texto_filtro = (el, texto) => {\n  texto_filtro.innerHTML= ''\n  texto_filtro.insertAdjacentHTML('beforeend', exibir_texto_filtro(el, texto))\n}\n\nfetch('data/egressos.json')\n  .then(res => res.json())\n  .then(json => {\n    egressosJson = json\n    exibeEgressos(json)\n\n    //filtros\n    //filtro campus\n    filter_campus = [...new Set(json.map(x => x.campus))]\n    criar_filtro_campus()\n    const cidades = document.querySelectorAll('.cidade')   \n    cidades.forEach(cidade => {\n      cidade.addEventListener('click', (event) => {\n        exibeEgressos(getEgressosByCampus(cidade.textContent))\n        criar_texto_filtro('Campus: ',cidade.textContent)\n      })\n    })\n    // filtro curso\n    filter_curso = [...new Set(json.map(x => x.curso))]\n    criar_filtro_curso() \n    const cursos = document.querySelectorAll('.cursos')\n    cursos.forEach(bycurso => {\n      bycurso.addEventListener('click', (event) => {\n        exibeEgressos(getEgressosByCurso(bycurso.textContent))\n        criar_texto_filtro('Curso: ',bycurso.textContent)\n      })\n    })\n    // filtro turma\n    filter_turma = json.map(x => x.id)\n    mat = filter_turma.map((v)=>`${v.substring(0,4)}.${v.substring(4,5)}`)\n    new_mat = [...new Set(mat)]\n    new_mat.sort((a,b)=>a-b)\n    criar_filtro_turma()\n    const turmas = document.querySelectorAll('.turmas')\n    const turmas_indefinido = document.querySelectorAll('.turmas_indefinido')\n    turmas.forEach(byturma => {\n      byturma.addEventListener('click', (event) => {\n        exibeEgressos(getEgressosByTurma(byturma.textContent))\n        criar_texto_filtro('Turma: ',byturma.textContent)\n      })\n    })\n    turmas_indefinido.forEach(byturmas_indefinido => {\n      byturmas_indefinido.addEventListener('click', (event)=>{\n        exibeEgressos(getEgressosByTurmas_indefinido(byturmas_indefinido.textContent))\n      })\n    })\n\n  })\n\n\n// essa função irá escolher quais card serão exibidos (apenas aqueles que tem linkedin), ordenar, e chamar a função mountCard para exibir\n\nconst egressosContainer = document.querySelector(\".egressos\")\nfunction exibeEgressos(egressos) {\n  egressosContainer.innerHTML = ''\n  const view = egressos\n    .filter(e => e.hasOwnProperty(\"linkedin\") && e.hasOwnProperty(\"egresso\"))\n    .sort((a, b) => a.nomeCompactado.localeCompare(b.nomeCompactado))\n    .map(e => mountCard(e))\n    .join('')\n\n  egressosContainer.innerHTML = view\n}\n// Montar o card no html\nlet turma_card;\nfunction mountCard(person) {\n\n  let github = ``\n  let linkedin = ``\n  let facebook = ``\n  let instagram = ``\n  let twitter = ``\n\n  if (person.hasOwnProperty(\"linkedin\")) {\n    linkedin = `<a target=\"_blank\" href=\"${person.linkedin}\"><i class=\"fab fa-linkedin-in\"></i></a>`\n  }\n\n  if (person.hasOwnProperty(\"github\")) {\n    github = `<a target=\"_blank\" href=\"${person.github}\"><i class=\"fab fa-github\"></i></a>`\n  }\n\n  if (person.hasOwnProperty(\"facebook\")) {\n    facebook = `<a target=\"_blank\" href=\"${person.facebook}\"><i class=\"fab fa-facebook\"></i></a>`\n  }\n\n  if (person.hasOwnProperty(\"instagram\")) {\n    instagram = `<a target=\"_blank\" href=\"${person.instagram}\"><i class=\"fab fa-instagram\"></i></a>`\n  }\n\n  if (person.hasOwnProperty(\"twitter\")) {\n    twitter = `<a target=\"_blank\" href=\"${person.twitter}\"><i class=\"fab fa-twitter\"></i></a>`\n  }\n\n  turma_card = `${person.id.substring(0, 4)}.${person.id.substring(4, 5)}`\n  let matricula = turma_card[0] == 2? turma_card : 'Indefinido'\n\n  const card = `<div class=\"egresso\">\n  <figure style=\"background-image: url(img/egressos/${person.hasOwnProperty(\"avatar\") ? person.avatar : 'placeholder.jpg'});\">\n    <div class=\"info\">\n      <p>${person.nomeCompactado}</p>\n      </div>\n  </figure>\n  <div class=\"icons card-hover\">\n        ${linkedin + github + facebook + instagram + twitter}\n  </div>\n\n  <div class=\"name card-hover\">\n    <h2>${person.nomeCompactado}</h2>\n      <p>Curso: ${_utils_mjs__WEBPACK_IMPORTED_MODULE_0__[\"CURSOS\"][person.curso]} <br>Campus: ${_utils_mjs__WEBPACK_IMPORTED_MODULE_0__[\"CAMPUS\"][person.campus]}<br>Turma: ${matricula}</p>\n  </div>\n</div>`\n\n  return card\n}\n\n//Menu Letter\n\nconst ma_abc = document.querySelector('.ma_abc')\nlet array_ma_abc = [\"#\", \"A\", \"B\", \"C\", \"D\", \"E\", \"F\", \"G\", \"H\", \"I\", \"J\", \"K\", \"L\", \"M\", \"N\", \"O\", \"P\", \"Q\", \"R\", \"S\", \"U\", \"V\", \"W\", \"X\", \"Y\", \"Z\"]\ncriar_ma_abc()\n\n  //função pesquisar\nconst compareString = (name, search) => name.search(search) == -1 ? false : true\nconst getByParcialName = search => egressosJson.filter(egresso => compareString(egresso.nomeCompactado, new RegExp(`^${search}`, 'gi')))\n\n\nfunction criar_ma_abc() {\n  ma_abc.innerHTML = ''\n  array_ma_abc.map(v => ma_abc.insertAdjacentHTML('beforeend', exibir_ma_abc(v)))\n\n  // EventListener Letter\n  const letters = document.querySelectorAll('.letter')\n  letters.forEach(letter => {\n\n    letter.addEventListener('click', (event) => {\n      texto_filtro.innerHTML= ''\n      let search = letter.textContent\n      if (search == '#')\n        exibeEgressos(egressosJson)\n      else\n        exibeEgressos(getByParcialName(search))\n      \n    })\n  })\n}\nfunction exibir_ma_abc(inf) {\n  return `<a href=\"#${inf}\" data-letter=\"${inf}\" class=\"letter\">${inf}</a>`\n}\n \n\n// EventListener Search\nconst searchInput = document.querySelector('.search-input')\nsearchInput.addEventListener('keyup', (event) => {\n  texto_filtro.innerHTML= ''\n  let search = searchInput.value\n  if (search == '')\n    exibeEgressos(egressosJson)\n  else\n    exibeEgressos(getByParcialName(search))\n\n})\n\n\n\n\n\n\n//# sourceURL=webpack:///./js/main.mjs?");

/***/ }),

/***/ "./js/utils.mjs":
/*!**********************!*\
  !*** ./js/utils.mjs ***!
  \**********************/
/*! exports provided: CAMPUS, CURSOS */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CAMPUS\", function() { return CAMPUS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CURSOS\", function() { return CURSOS; });\nconst CAMPUS = {\n    'ifpb-jp': 'João Pessoa',\n    'ifpb-cz': 'Cajazeiras',\n    'ifpb-cg': 'Campina Grande',\n    'ifpb-cb': 'Cabedelo'\n}\n\nconst CURSOS = {\n    'cstsi': 'Sistemas para Internet',\n    'cstrc': 'Redes de Computadores',\n    'Engenharia Eletrica': 'Engenharia Eletrica',\n    'CST EM TELECOMUNICAÇÕES': 'Telecomunicações',\n    'ads': 'Análize e Desenhvolvimento de Sistemas',\n    'cstt': 'Telecomunicações'\n}\n\n//# sourceURL=webpack:///./js/utils.mjs?");

/***/ })

/******/ });