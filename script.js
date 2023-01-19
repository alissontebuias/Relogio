function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var seconds = data.getSeconds()
    msg.innerHTML = `A hora certa é ${hora}:${minutos}:${seconds}.`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'manha.jpg'
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = 'tarde.jpg'
    } else {
        //boa noite
        img.src = 'noite.jpg'
    
    
    }
    setTimeout(carregar, 1000)
}
