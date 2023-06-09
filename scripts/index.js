const contentElement = document.getElementById('content');
const previousBtn = document.getElementById('previousBtn');
const nextBtn = document.getElementById('nextBtn');
const redirect = document.getElementById('redirect-comunidade');

let currentContentIndex = 0;
   const contents = [
      "Somos uma comunidade de pessoas que se preocupam com o futuro do nosso planeta e das futuras gerações",
      "Aqui você encontrará conteúdos que lhe ajudarão a criar hábitos mais sustentáveis no seu dia-a-dia",
      "Visite a página comunidade e veja como os membros da rede têm se tornado mais sustentáveis e ecológicos. Aproveite também para compartilhar como você tem feito sua parte em prol de nosso planeta"
    ];

    function updateContent() {
      contentElement.textContent = contents[currentContentIndex];
      nextBtn.innerHTML = 'Avançar'
      if(currentContentIndex === 2){
        nextBtn.innerHTML = '<a href="/pages/comunidade.html" class="text-decoration-none link-light link-opacity-100-hover link-underline-dark">Acessar comunidade</a> '
      }
    }

    function previousContent() {
      if (currentContentIndex > 0) {
        currentContentIndex--;
        updateContent();
      }

    }

    function nextContent() {
      if (currentContentIndex < contents.length - 1) {
        currentContentIndex++;
        updateContent();
      }
    }

    previousBtn.addEventListener('click', previousContent);
    nextBtn.addEventListener('click', nextContent);

    updateContent();