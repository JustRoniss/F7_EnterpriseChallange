document.getElementById('activityForm').addEventListener('submit', function(event) {
    event.preventDefault(); 


    var name = document.getElementById('nameInput').value;
    var action = document.getElementById('actionInput').value;
    var type = document.getElementById('typeSelect').value;

    
    document.getElementById('nameInput').value = '';
    document.getElementById('actionInput').value = '';
    document.getElementById('typeSelect').value = '';


    updatePoints(name, action, type);
  });

  function updatePoints(name, action,type) {
    if(type == 1){
      var points = 50;
    }
    show(name, action,type, points);
  }

    function show (name, action, type, points){
      var pointsDisplay = document.createElement('div');
      pointsDisplay.innerHTML =  `
        <div class="accordion" id="accordionExample">
            <div class="accordion-item m-2">
                <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        ${name}
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <p>Telefone: ${name}</p>
                        <p>Acão: ${action} </p>
                        <p>AÇÃO: ${type}</p>
                        <p>PONTOS: ${points}</p>
                    </div>
                </div>
          </div>
      </div>
      `
  
    document.getElementById('activityRecords').appendChild(pointsDisplay);

    }
