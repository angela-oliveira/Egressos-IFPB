const turma = document.querySelector('.turma')
const curso = document.querySelector('.curso')
const campus = document.querySelector('.campus')

const filter_turma = new Set()
const filter_curso = new Set()
const filter_campus = new Set()

criar_filtro_campus()



fetch('data/egressos.json')
  .then(res => res.json())
  .then(json => exibeEgressos(json))
  .then(json => array_filtro(json))

// essa função irá escolher quais card serão exibidos (apenas aqueles que tem linkedin), ordenar, e chamar a função mountCard para exibir
function exibeEgressos(egressos) {
  const egressosContainer = document.querySelector(".egressos")
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
  let truma_card = person.id //Precisa selecionar os quatro primeiros numeros para exibir a turma
  

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
    <p>Curso: ${person.curso} <br>Campus: ${person.campus}<br>Turma: ${truma_card}</p>
  </div>
</div>`

  return card
}
//Criar um array com os dados expecificos para cada filtro
function array_filtro(dados){
  filter_campus.add(dados.filter(x => x.campus))

}
function exibir_filtros(i){
  return `<a class="dropdown-item" href="#">${i}</a>`
}
function criar_filtro_campus(){
  campus.innerHTML = ''
  for(f of filter_campus){
    campus.insertAdjacentHTML('beforeend',exibir_filtros(f))
  }
}

// function array_filter(){
//   for(eg of )
// }

// function filtro_turma (){
//   turma.innerHTML = ''
//   for(f of filter_turma){
//     turma.insertAdjacentHTML('beforeend',exibir_Filtro(f))
//   }
// }

// function exibir_Filtro(dados){
//   return `<option selected>CURSO...</option>`

// }