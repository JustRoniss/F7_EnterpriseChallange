function processarTag(tag) {
  switch (tag) {
    case "reciclagem":
      return 50;
    case "ambiente":
    case "sustentabilidade":
      return 20;

    default:
      return 10;
  }
}

var displayNomeUsuario = "João Lima"
var displayPontosUsuario = 132
function enviarMensagem() {
  let nome = displayNomeUsuario
  let comentario = document.getElementById("msgInput").value;
  let zerar = document.getElementById("msgInput");
  zerar.value = ''
  if (!comentario) return;

  let points = 51
  let hashTags = []

  show(nome, comentario, points)
  displayPontosUsuario += points
  document.getElementById("qtdPontosUsuario").innerHTML = `${displayPontosUsuario}<i class="fas fa-leaf"></i>`
  return false;
}

function show(name, comment, points, hashTags = "#reciclagem #amogus") {
  let htmlSalvo = document.getElementById("feed").innerHTML
  document.getElementById("feed").innerHTML = `
  <div class="d-flex align-items-center
  bg-light rounded border border-2 border-success
  p-2 m-2 col-6">
    <img src="../images/joaoLima.jpg" height="75" class="rounded-circle align-self-start 
    border border-2 border-success">
    <div class="flex-fill align-self-start mx-2">
      <div class="fw-bold fs-5">${name}</div>
      <div class="fw-light mx-2 text-justify">${comment}</div>
      <b class="text-success">${hashTags}</b>
    </div>
    <div class="text-success text-nowrap align-self-start">
      <h4>+${points}<i class="fas fa-leaf"></i></h4>
    </div>
  </div>`
  document.getElementById("feed").innerHTML += htmlSalvo
}
