const turma = document.querySelector('.turma')
const curso = document.querySelector('.curso')
const campus = document.querySelector('.campus')

const filter_turma = new Set()
const filter_curso = new Set()
let filter_campus = new Array()
let egressosJson;

const utils = {
  'ifpb-jp': 'João Pessoa',
  'ifpb-cz': 'Cajazeiras'
}

//Criar um array com os dados expecificos para cada filtro

const exibir_filtros = i => `<a class="dropdown-item cidade" href="#">${utils[i]}</a>`
const criar_filtro_campus = () => {
  for (f of filter_campus) {
    campus.insertAdjacentHTML('beforeend', exibir_filtros(f))
  }
}

const getEgressosByCampus = campus => egressosJson.filter(egresso => utils[egresso.campus] == campus)

fetch('data/egressos.json')
  .then(res => res.json())
  .then(json => {
    egressosJson = json
    exibeEgressos(json)
    filter_campus = [...new Set(json.map(x => x.campus))]
    criar_filtro_campus()


    const cidades = document.querySelectorAll('.cidade')

    cidades.forEach(cidade => {
      cidade.addEventListener('click', (event) => {
        exibeEgressos(getEgressosByCampus(cidade.textContent))
      })
    })
  })


// essa função irá escolher quais card serão exibidos (apenas aqueles que tem linkedin), ordenar, e chamar a função mountCard para exibir
function exibeEgressos(egressos) {
  const egressosContainer = document.querySelector(".egressos")
  egressosContainer.innerHTML = ''
  const view = egressos
    .filter(e => e.hasOwnProperty("linkedin") && e.hasOwnProperty("egresso"))
    .sort((a, b) => a.nomeCompactado.localeCompare(b.nomeCompactado))
    .map(e => mountCard(e))
    .join('')

  egressosContainer.innerHTML = view
}
// Montar o card no html
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

  let turma_card = `${person.id.substring(0, 4)}.${person.id.substring(4, 5)}`
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
      <p>Curso: ${person.curso} <br>Campus: ${utils[person.campus]}<br>Turma: ${turma_card}</p>
  </div>
</div>`

  return card
}

//Menu alfabético

const ma_abc = document.querySelector('.ma_abc')
let array_ma_abc = ["#", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "U", "V", "W", "X", "Y", "Z"]
criar_ma_abc()

const compareString = (name, search) => name.search(search) == -1 ? false : true
const getByParcialName = search => egressosJson.filter(egresso => compareString(egresso.nomeCompactado, new RegExp(`^${search}`, 'gi')))


function criar_ma_abc() {
  ma_abc.innerHTML = ''
  array_ma_abc.map(v => ma_abc.insertAdjacentHTML('beforeend', exibir_ma_abc(v)))

  // EventListener Letter
  const letters = document.querySelectorAll('.letter')
  letters.forEach(letter => {

    letter.addEventListener('click', (event) => {
      
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
  let search = searchInput.value
  if (search == '')
    exibeEgressos(egressosJson)
  else
    exibeEgressos(getByParcialName(search))

})