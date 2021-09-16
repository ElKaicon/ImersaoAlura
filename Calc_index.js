var nome = "Gizele"

function calculaMedia(){
    var notaDoPrimeiroBimestre = document.forms["notaFinal"]["nota1"].value
    var notaDoSegundoBimestre = document.forms["notaFinal"]["nota2"].value
    var notaDoTerceiroBimestre = document.forms["notaFinal"]["nota3"].value
    var notaDoQuartoBimestre = document.forms["notaFinal"]["nota4"].value
    
    var notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4

    var p=document.createElement('p')
    p.textContent= notaFinal

    var cx=document.querySelector('form')
    cx.appendChild(p)
    
}



console.log("Bem vindo" + nome)
console.log(notaFinal)