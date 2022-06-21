function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if(fsex[0].checked){
            gênero = 'homem'
        }else{
            gênero = 'mulher'
        }

        if(idade <= 10){
            img.setAttribute('src', `${gênero}/bebe.png`)
        }else if(idade <= 21){
            img.setAttribute('src', `${gênero}/jovem.png`)
        }else if(idade <= 50){
            img.setAttribute('src', `${gênero}/adulto.png`)
        }else{
            img.setAttribute('src', `${gênero}/idoso.png`)
        }
        
        // if(fsex[0].checked){
        //     gênero = 'Homem'
        //     if(idade >= 0 && idade < 10){
        //         //Criança
        //         img.setAttribute('src', 'bebe-homem.jpg')
        //     }else if(idade < 21){
        //         //Jovem
        //         img.setAttribute('src', 'jovem-homem.jpg')
        //     }else if (idade < 50){
        //         //adulto
        //         img.setAttribute('src', 'adulto-homem.jpg')
        //     }else{
        //         //idoso
        //         img.setAttribute('src', 'idoso-homem.jpg')
        //     }
        // }else if(fsex[1].checked){
        //     gênero = 'Mulher'
        //     if(idade >= 0 && idade < 10){
        //         //Criança
        //         img.setAttribute('src', 'bebe-mulher.jpg')
        //     }else if(idade < 21){
        //         //Jovem
        //         img.setAttribute('src', 'jovem-mulher.jpg')
        //     }else if (idade < 50){
        //         //adulto
        //         img.setAttribute('src', 'adulto-mulher.jpg')
        //     }else{
        //         //idoso
        //         img.setAttribute('src', 'idoso-mulher.jpg')
        //     }
        // }
        
        res.innerHTML = `<p>Detectamos <strong>${gênero}</strong> com <strong>${idade}</strong> anos.</p>`
        res.appendChild(img)
    }
}