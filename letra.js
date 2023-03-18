const inserir = document.querySelector('#inserir');

window.addEventListener('keydown', (e) => {
    inserir.innerHTML = ` 
    
     <div class="letra">
        ${e.key === ' '? 'space' : e.key}
        <span>Tecla</span>
    </div>
    <div class="letra">
        ${e.keyCode}
     <span>Número</span>
    </div>
   
    `
})