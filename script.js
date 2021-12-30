function esqueceu(modalID){
    let modal = document.getElementById(modalID)

    modal.classList.add('mostrar')

    modal.addEventListener('click', (e) => {
        if(e.target.id == modalID || e.target.className == 'close') {
            modal.classList.remove('mostrar');
        }else if(e.target.className == 'save'){
            modal.classList.remove('mostrar');
            alert('Senha alterada com sucesso!')
        }
    })
}

let esqueceuSenha = document.querySelector('.esqueceu')
esqueceuSenha.addEventListener('click', () => esqueceu('modal'))






