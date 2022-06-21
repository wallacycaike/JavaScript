function carregar(){
    var msg = document.getElementById('msg')
    var saldei = document.getElementById('saldacao')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`

    if(hora >= 0 && hora < 12){
        //Bom dia!
        img.src = 'manha.png'
        document.body.style.backgroundColor = '#e3cfa5'
        saldacao.innerHTML = '<p>Tenha uma Bom Dia!</p>' 
    }else if(hora >= 12 && hora <18){
        //Boa Tarde!
        document.body.style.backgroundColor = '#c88377'
        img.src = 'tarde.png'
        saldacao.innerHTML = '<p>Tenha uma Boa Tarde!</p>'
    }else{
        //Boa noite!
        img.src = 'noite.png'
        document.body.style.backgroundColor = '#3a2f4f'
        saldacao.innerHTML = '<p>Tenha uma Boa Noite!</p>'
    }
}
