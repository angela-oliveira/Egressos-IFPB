import {utils, utils_curso} from './utils.mjs'

const campus = document.querySelector('.campus')
const curso = document.querySelector('.curso')
const turma = document.querySelector('.turma')

let filter_campus = new Array()
let filter_curso = new Array()
let filter_turma = new Array()
let egressosJson;

//Criar um array com os dados expecificos para cada filtro

const exibir_filtros_campus = i => `<a class="dropdown-item cidade" href="#">${CAMPUS[i]}</a>`
const exibir_filtros_cursos = i => `<a class="dropdown-item cursos" href="#">${CURSOS[i]}</a>`
const exibir_filtros_turmas = i => `<a class="dropdown-item turmas" href="#">${i}</a>`

//campus
const criar_filtro_campus = () => {
  filter_campus.forEach(element => {
    campus.insertAdjacentHTML('beforeend', exibir_filtros_campus(element))
  })
}
const getEgressosByCampus = campus => egressosJson.filter(egresso => CAMPUS[egresso.campus] == campus)

//curso
const criar_filtro_curso = () => {
  filter_curso.forEach(element => {
    curso.insertAdjacentHTML('beforeend',exibir_filtros_cursos(element))
  })
}

const getEgressosByCurso = curso => egressosJson.filter(egresso => utils_curso[egresso.curso] == curso)

//turma
let mat
let new_mat
const criar_filtro_turma = () => {
  new_mat.forEach(element => {
    if (element[0]==2){
      turma.insertAdjacentHTML('beforeend', exibir_filtros_turmas(element))
    }
  })
  turma.insertAdjacentHTML('beforeend', `<a class="dropdown-item turmas_indefinido" href="#">Indefinido</a>`)

}
const getEgressosByTurma = id => egressosJson.filter(egresso => `${egresso.id.substring(0,4)}.${egresso.id.substring(4,5)}` == id)
const getEgressosByTurmas_indefinido = indefinidos => egressosJson.filter(egresso => egresso.id[0]!= 2)

//Exibir filtro expecificado

const texto_filtro = document.querySelector('.texto_filtro')
const exibir_texto_filtro = (el, t) => `<div>${el} ${t}</div>`
const criar_texto_filtro = (el, texto) => {
  texto_filtro.innerHTML= ''
  texto_filtro.insertAdjacentHTML('beforeend', exibir_texto_filtro(el, texto))
}

fetch('data/egressos.json')
  .then(res => res.json())
  .then(json => {
    egressosJson = json
    exibeEgressos(json)

    //filtros
    //filtro campus
    filter_campus = [...new Set(json.map(x => x.campus))]
    criar_filtro_campus()
    const cidades = document.querySelectorAll('.cidade')   
    cidades.forEach(cidade => {
      cidade.addEventListener('click', (event) => {
        exibeEgressos(getEgressosByCampus(cidade.textContent))
        criar_texto_filtro('Campus: ',cidade.textContent)
      })
    })
    // filtro curso
    filter_curso = [...new Set(json.map(x => x.curso))]
    criar_filtro_curso() 
    const cursos = document.querySelectorAll('.cursos')
    cursos.forEach(bycurso => {
      bycurso.addEventListener('click', (event) => {
        exibeEgressos(getEgressosByCurso(bycurso.textContent))
        criar_texto_filtro('Curso: ',bycurso.textContent)
      })
    })
    // filtro turma
    filter_turma = json.map(x => x.id)
    mat = filter_turma.map((v)=>`${v.substring(0,4)}.${v.substring(4,5)}`)
    new_mat = [...new Set(mat)]
    new_mat.sort((a,b)=>a-b)
    criar_filtro_turma()
    const turmas = document.querySelectorAll('.turmas')
    const turmas_indefinido = document.querySelectorAll('.turmas_indefinido')
    turmas.forEach(byturma => {
      byturma.addEventListener('click', (event) => {
        exibeEgressos(getEgressosByTurma(byturma.textContent))
        criar_texto_filtro('Turma: ',byturma.textContent)
      })
    })
    turmas_indefinido.forEach(byturmas_indefinido => {
      byturmas_indefinido.addEventListener('click', (event)=>{
        exibeEgressos(getEgressosByTurmas_indefinido(byturmas_indefinido.textContent))
      })
    })

  })


// essa função irá escolher quais card serão exibidos (apenas aqueles que tem linkedin), ordenar, e chamar a função mountCard para exibir

const egressosContainer = document.querySelector(".egressos")
function exibeEgressos(egressos) {
  egressosContainer.innerHTML = ''
  const view = egressos
    .filter(e => e.hasOwnProperty("linkedin") && e.hasOwnProperty("egresso"))
    .sort((a, b) => a.nomeCompactado.localeCompare(b.nomeCompactado))
    .map(e => mountCard(e))
    .join('')

  egressosContainer.innerHTML = view

  //Event onclcik cards
  const egressocards = document.querySelectorAll('.egresso')
  const card_completo = document.querySelector('#card-completo')
  egressocards.forEach(card => {
    card.addEventListener('click', (event) => {
      card_completo.removeAttribute('class')
    })
  })
}
// Montar o card no html
let turma_card;
function mountCard(person) {

  let github = ``
  let linkedin = ``
  let facebook = ``
  let instagram = ``
  let twitter = ``

  if (person.hasOwnProperty("linkedin")) {
    linkedin = `<a target="_blank" href="${person.linkedin}"><i class="fab fa-linkedin-in"></i></a>`
  }

  if (person.hasOwnProperty("github")) {
    github = `<a target="_blank" href="${person.github}"><i class="fab fa-github"></i></a>`
  }

  if (person.hasOwnProperty("facebook")) {
    facebook = `<a target="_blank" href="${person.facebook}"><i class="fab fa-facebook"></i></a>`
  }

  if (person.hasOwnProperty("instagram")) {
    instagram = `<a target="_blank" href="${person.instagram}"><i class="fab fa-instagram"></i></a>`
  }

  if (person.hasOwnProperty("twitter")) {
    twitter = `<a target="_blank" href="${person.twitter}"><i class="fab fa-twitter"></i></a>`
  }

  turma_card = `${person.id.substring(0, 4)}.${person.id.substring(4, 5)}`
  let matricula = turma_card[0] == 2? turma_card : 'Indefinido'

  const card = `<div class="egresso">
  <figure style="background-image: url(img/egressos/${person.hasOwnProperty("avatar") ? person.avatar : 'placeholder.jpg'});">
    <div class="info">
      <p>${person.nomeCompactado}</p>
      </div>
  </figure>
  <div class="icons card-hover">
        ${linkedin + github + facebook + instagram + twitter}
  </div>

  <div class="name card-hover">
    <h2>${person.nomeCompactado}</h2>
      <p>Curso: ${CURSOS[person.curso]} <br>Campus: ${CAMPUS[person.campus]}<br>Turma: ${matricula}</p>
  </div>
</div>`

  return card
}

//Menu Letter

const ma_abc = document.querySelector('.ma_abc')
let array_ma_abc = ["#", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "U", "V", "W", "X", "Y", "Z"]
criar_ma_abc()

  //função pesquisar
const compareString = (name, search) => name.search(search) == -1 ? false : true
const getByParcialName = search => egressosJson.filter(egresso => compareString(egresso.nomeCompactado, new RegExp(`^${search}`, 'gi')))


function criar_ma_abc() {
  ma_abc.innerHTML = ''
  array_ma_abc.map(v => ma_abc.insertAdjacentHTML('beforeend', exibir_ma_abc(v)))

  // EventListener Letter
  const letters = document.querySelectorAll('.letter')
  letters.forEach(letter => {

    letter.addEventListener('click', (event) => {
      texto_filtro.innerHTML= ''
      let search = letter.textContent
      if (search == '#')
        exibeEgressos(egressosJson)
      else
        exibeEgressos(getByParcialName(search))
      
    })
  })
}
function exibir_ma_abc(inf) {
  return `<a href="#${inf}" data-letter="${inf}" class="letter">${inf}</a>`
}
 

// EventListener Search
const searchInput = document.querySelector('.search-input')
searchInput.addEventListener('keyup', (event) => {
  texto_filtro.innerHTML= ''
  let search = searchInput.value
  if (search == '')
    exibeEgressos(egressosJson)
  else
    exibeEgressos(getByParcialName(search))

})
