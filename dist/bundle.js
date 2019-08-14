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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ \"./js/utils.mjs\");\n\r\n\r\nconst campus = document.querySelector('.campus')\r\nconst curso = document.querySelector('.curso')\r\nconst turma = document.querySelector('.turma')\r\n\r\nlet filter_campus = new Array()\r\nlet filter_curso = new Array()\r\nlet filter_turma = new Array()\r\nlet egressosJson;\r\n\r\n//Criar um array com os dados expecificos para cada filtro\r\n\r\nconst exibir_filtros_campus = i => `<a class=\"dropdown-item cidade\" href=\"#\">${_utils_mjs__WEBPACK_IMPORTED_MODULE_0__[\"utils\"][i]}</a>`\r\nconst exibir_filtros_cursos = i => `<a class=\"dropdown-item cursos\" href=\"#\">${_utils_mjs__WEBPACK_IMPORTED_MODULE_0__[\"utils_curso\"][i]}</a>`\r\nconst exibir_filtros_turmas = i => `<a class=\"dropdown-item turmas\" href=\"#\">${i}</a>`\r\n\r\n//campus\r\nconst criar_filtro_campus = () => {\r\n  filter_campus.forEach(element => {\r\n    campus.insertAdjacentHTML('beforeend', exibir_filtros_campus(element))\r\n  })\r\n}\r\nconst getEgressosByCampus = campus => egressosJson.filter(egresso => _utils_mjs__WEBPACK_IMPORTED_MODULE_0__[\"utils\"][egresso.campus] == campus)\r\n\r\n//curso\r\nconst criar_filtro_curso = () => {\r\n  filter_curso.forEach(element => {\r\n    curso.insertAdjacentHTML('beforeend',exibir_filtros_cursos(element))\r\n  })\r\n}\r\n\r\nconst getEgressosByCurso = curso => egressosJson.filter(egresso => _utils_mjs__WEBPACK_IMPORTED_MODULE_0__[\"utils_curso\"][egresso.curso] == curso)\r\n\r\n//turma\r\nlet mat\r\nlet new_mat\r\nconst criar_filtro_turma = () => {\r\n  new_mat.forEach(element => {\r\n    if (element[0]==2){\r\n      turma.insertAdjacentHTML('beforeend', exibir_filtros_turmas(element))\r\n    }\r\n  })\r\n  turma.insertAdjacentHTML('beforeend', `<a class=\"dropdown-item turmas_indefinido\" href=\"#\">Indefinido</a>`)\r\n\r\n}\r\nconst getEgressosByTurma = id => egressosJson.filter(egresso => `${egresso.id.substring(0,4)}.${egresso.id.substring(4,5)}` == id)\r\nconst getEgressosByTurmas_indefinido = indefinidos => egressosJson.filter(egresso => egresso.id[0]!= 2)\r\n\r\n//Exibir filtro expecificado\r\n\r\nconst texto_filtro = document.querySelector('.texto_filtro')\r\nconst exibir_texto_filtro = (el, t) => `<div>${el} ${t}</div>`\r\nconst criar_texto_filtro = (el, texto) => {\r\n  texto_filtro.innerHTML= ''\r\n  texto_filtro.insertAdjacentHTML('beforeend', exibir_texto_filtro(el, texto))\r\n}\r\n\r\nfetch('data/egressos.json')\r\n  .then(res => res.json())\r\n  .then(json => {\r\n    egressosJson = json\r\n    exibeEgressos(json)\r\n\r\n    //filtros\r\n    //filtro campus\r\n    filter_campus = [...new Set(json.map(x => x.campus))]\r\n    criar_filtro_campus()\r\n    const cidades = document.querySelectorAll('.cidade')   \r\n    cidades.forEach(cidade => {\r\n      cidade.addEventListener('click', (event) => {\r\n        exibeEgressos(getEgressosByCampus(cidade.textContent))\r\n        criar_texto_filtro('Campus: ',cidade.textContent)\r\n      })\r\n    })\r\n    // filtro curso\r\n    filter_curso = [...new Set(json.map(x => x.curso))]\r\n    criar_filtro_curso() \r\n    const cursos = document.querySelectorAll('.cursos')\r\n    cursos.forEach(bycurso => {\r\n      bycurso.addEventListener('click', (event) => {\r\n        exibeEgressos(getEgressosByCurso(bycurso.textContent))\r\n        criar_texto_filtro('Curso: ',bycurso.textContent)\r\n      })\r\n    })\r\n    // filtro turma\r\n    filter_turma = json.map(x => x.id)\r\n    mat = filter_turma.map((v)=>`${v.substring(0,4)}.${v.substring(4,5)}`)\r\n    new_mat = [...new Set(mat)]\r\n    new_mat.sort((a,b)=>a-b)\r\n    criar_filtro_turma()\r\n    const turmas = document.querySelectorAll('.turmas')\r\n    const turmas_indefinido = document.querySelectorAll('.turmas_indefinido')\r\n    turmas.forEach(byturma => {\r\n      byturma.addEventListener('click', (event) => {\r\n        exibeEgressos(getEgressosByTurma(byturma.textContent))\r\n        criar_texto_filtro('Turma: ',byturma.textContent)\r\n      })\r\n    })\r\n    turmas_indefinido.forEach(byturmas_indefinido => {\r\n      byturmas_indefinido.addEventListener('click', (event)=>{\r\n        exibeEgressos(getEgressosByTurmas_indefinido(byturmas_indefinido.textContent))\r\n      })\r\n    })\r\n\r\n //Event onclcik cards\r\n const egressocards = document.querySelectorAll('.egresso')\r\n const card_completo = document.querySelector('#card-completo')\r\n\r\n const egressoId = document.getElementById('egressos-card') //teste\r\n egressoId.addEventListener('click', (e) => {\r\n\r\n   // card_completo.removeAttribute('class')\r\n   let targetId = e.target.id\r\n   // console.log(targetId)\r\n\r\n   exibir_card_completo(targetId)\r\n\r\n   function exibir_card_completo(id_1) {\r\n     card_completo.innerHTML = ''\r\n     card_completo.removeAttribute('class')\r\n     const view_2 = egressosJson.filter(i => i.id == id_1)\r\n     console.log(view_2)\r\n     const view_3 = montar_card_completo(view_2)\r\n     card_completo.innerHTML = view_3\r\n   }\r\n   function montar_card_completo(idcard) {\r\n\r\n     // <figure style=\"background-image: url(img/egressos/${idcard.hasOwnProperty(\"avatar\") ? idcard.avatar : 'placeholder.jpg'});\">\r\n     const idcards = `<div class=\"egresso-card-completo\">\r\n   \r\n   <img src=\"img/egressos/${idcard.hasOwnProperty(\"avatar\") ? idcard.avatar : 'placeholder.jpg'}\" alt=\"\" srcset=\"\">\r\n   <div class=\"text-card-completo\">\r\n     <h2>${idcard.nomeCompactado}</h2>\r\n     <p>Curso: ${idcard.curso}<br>Campus: ${idcard.campus}<br>Turma: ${idcard.id}</p>\r\n     <div class=\"rs\">\r\n       lin + git + f + i + tt\r\n     </div>\r\n   </div>\r\n \r\n </div>`\r\n     return idcards\r\n   }\r\n })\r\n\r\n  })\r\n\r\n\r\n// essa função irá escolher quais card serão exibidos (apenas aqueles que tem linkedin), ordenar, e chamar a função mountCard para exibir\r\n\r\nconst egressosContainer = document.querySelector(\".egressos\")\r\nfunction exibeEgressos(egressos) {\r\n  egressosContainer.innerHTML = ''\r\n  const view = egressos\r\n    .filter(e => e.hasOwnProperty(\"linkedin\") && e.hasOwnProperty(\"egresso\"))\r\n    .sort((a, b) => a.nomeCompactado.localeCompare(b.nomeCompactado))\r\n    .map(e => mountCard(e))\r\n    .join('')\r\n\r\n  egressosContainer.innerHTML = view\r\n\r\n  //Event onclcik cards\r\n  const egressocards = document.querySelectorAll('.egresso')\r\n  const card_completo = document.querySelector('#card-completo')\r\n  egressocards.forEach(card => {\r\n    card.addEventListener('click', (event) => {\r\n      card_completo.removeAttribute('class')\r\n    })\r\n  })\r\n}\r\n// Montar o card no html\r\nlet turma_card;\r\nfunction mountCard(person) {\r\n\r\n  let github = ``\r\n  let linkedin = ``\r\n  let facebook = ``\r\n  let instagram = ``\r\n  let twitter = ``\r\n\r\n  if (person.hasOwnProperty(\"linkedin\")) {\r\n    linkedin = `<a target=\"_blank\" href=\"${person.linkedin}\"><i class=\"fab fa-linkedin-in\"></i></a>`\r\n  }\r\n\r\n  if (person.hasOwnProperty(\"github\")) {\r\n    github = `<a target=\"_blank\" href=\"${person.github}\"><i class=\"fab fa-github\"></i></a>`\r\n  }\r\n\r\n  if (person.hasOwnProperty(\"facebook\")) {\r\n    facebook = `<a target=\"_blank\" href=\"${person.facebook}\"><i class=\"fab fa-facebook\"></i></a>`\r\n  }\r\n\r\n  if (person.hasOwnProperty(\"instagram\")) {\r\n    instagram = `<a target=\"_blank\" href=\"${person.instagram}\"><i class=\"fab fa-instagram\"></i></a>`\r\n  }\r\n\r\n  if (person.hasOwnProperty(\"twitter\")) {\r\n    twitter = `<a target=\"_blank\" href=\"${person.twitter}\"><i class=\"fab fa-twitter\"></i></a>`\r\n  }\r\n\r\n  turma_card = `${person.id.substring(0, 4)}.${person.id.substring(4, 5)}`\r\n  let matricula = turma_card[0] == 2? turma_card : 'Indefinido'\r\n\r\n  const card = `<div class=\"egresso\">\r\n  <figure style=\"background-image: url(img/egressos/${person.hasOwnProperty(\"avatar\") ? person.avatar : 'placeholder.jpg'});\">\r\n    <div class=\"info\">\r\n      <p>${person.nomeCompactado}</p>\r\n      </div>\r\n  </figure>\r\n  <div class=\"icons card-hover\">\r\n        ${linkedin + github + facebook + instagram + twitter}\r\n  </div>\r\n\r\n  <div class=\"name card-hover\">\r\n    <h2>${person.nomeCompactado}</h2>\r\n      <p>Curso: ${_utils_mjs__WEBPACK_IMPORTED_MODULE_0__[\"utils_curso\"][person.curso]} <br>Campus: ${_utils_mjs__WEBPACK_IMPORTED_MODULE_0__[\"utils\"][person.campus]}<br>Turma: ${matricula}</p>\r\n  </div>\r\n</div>`\r\n\r\n  return card\r\n}\r\n\r\n//Menu Letter\r\n\r\nconst ma_abc = document.querySelector('.ma_abc')\r\nlet array_ma_abc = [\"#\", \"A\", \"B\", \"C\", \"D\", \"E\", \"F\", \"G\", \"H\", \"I\", \"J\", \"K\", \"L\", \"M\", \"N\", \"O\", \"P\", \"Q\", \"R\", \"S\", \"U\", \"V\", \"W\", \"X\", \"Y\", \"Z\"]\r\ncriar_ma_abc()\r\n\r\n  //função pesquisar\r\nconst compareString = (name, search) => name.search(search) == -1 ? false : true\r\nconst getByParcialName = search => egressosJson.filter(egresso => compareString(egresso.nomeCompactado, new RegExp(`^${search}`, 'gi')))\r\n\r\n\r\nfunction criar_ma_abc() {\r\n  ma_abc.innerHTML = ''\r\n  array_ma_abc.map(v => ma_abc.insertAdjacentHTML('beforeend', exibir_ma_abc(v)))\r\n\r\n  // EventListener Letter\r\n  const letters = document.querySelectorAll('.letter')\r\n  letters.forEach(letter => {\r\n\r\n    letter.addEventListener('click', (event) => {\r\n      texto_filtro.innerHTML= ''\r\n      let search = letter.textContent\r\n      if (search == '#')\r\n        exibeEgressos(egressosJson)\r\n      else\r\n        exibeEgressos(getByParcialName(search))\r\n      \r\n    })\r\n  })\r\n}\r\nfunction exibir_ma_abc(inf) {\r\n  return `<a href=\"#${inf}\" data-letter=\"${inf}\" class=\"letter\">${inf}</a>`\r\n}\r\n \r\n\r\n// EventListener Search\r\nconst searchInput = document.querySelector('.search-input')\r\nsearchInput.addEventListener('keyup', (event) => {\r\n  texto_filtro.innerHTML= ''\r\n  let search = searchInput.value\r\n  if (search == '')\r\n    exibeEgressos(egressosJson)\r\n  else\r\n    exibeEgressos(getByParcialName(search))\r\n\r\n})\r\n\n\n//# sourceURL=webpack:///./js/main.mjs?");

/***/ }),

/***/ "./js/utils.mjs":
/*!**********************!*\
  !*** ./js/utils.mjs ***!
  \**********************/
/*! exports provided: utils, utils_curso */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"utils\", function() { return utils; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"utils_curso\", function() { return utils_curso; });\nconst utils = {\r\n    'ifpb-jp': 'João Pessoa',\r\n    'ifpb-cz': 'Cajazeiras',\r\n    'ifpb-cg': 'Campina Grande',\r\n    'ifpb-cb': 'Cabedelo'\r\n}\r\n\r\nconst utils_curso = {\r\n    'cstsi': 'Sistemas para Internet',\r\n    'cstrc': 'Redes de Computadores',\r\n    'Engenharia Eletrica': 'Engenharia Eletrica',\r\n    'CST EM TELECOMUNICAÇÕES': 'Telecomunicações',\r\n    'ads': 'Análize e Desenhvolvimento de Sistemas',\r\n    'cstt': 'Telecomunicações'\r\n}\n\n//# sourceURL=webpack:///./js/utils.mjs?");

/***/ })

/******/ });