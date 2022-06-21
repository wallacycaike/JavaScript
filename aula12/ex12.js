var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()

console.log(`Agora são exatamente ${hora} horas e ${minutos} minutos.`)


if (hora <= 5){
    console.log('Boa Madrugada!')
}else if((hora <= 5) || (hora <= 11)){
    console.log('Bom Dia!')
}else if (hora < 18){
    console.log('Boa Tarde!')
}else if(hora <= 23){
    console.log('Boa noite!')
}else{
    console.log('Horário Inválido.')
}