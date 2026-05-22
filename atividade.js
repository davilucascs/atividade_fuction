const prompt = require(`prompt-sync`)()

//comentarios


function menu(){
    console.log(`*-------------------------------------*`)
    console.log(`| 0-  Sair                            |`)
    console.log(`| 1-  Somar                           |`)
    console.log(`| 2-  Subtrair                        |`)
    console.log(`| 3-  Multiplicar                     |`)
    console.log(`| 4-  Dividir                         |`)
    console.log(`| 5-  Calcular_IMC                    |`)
    console.log(`| 6-  Converter_Dólar_em Reais        |`)
    console.log(`| 7-  Calcular_Média                  |`)
    console.log(`| 8-  Tabuada                         |`)
    console.log(`| 9-  ConverterM_Para_CM              |`)
    console.log(`| 10- Temperatura                     |`)
    console.log(`*-------------------------------------*`)
}

function somar (){
    console.log(`Somar dois Numero +`)
    let n1 = parseInt(prompt(`Digite o seu primeiro numero: `))
    let n2 = parseInt(prompt(`Digite seu segundo numero: `))
    console.log(n1+n2)
}

function Subtrair(){
    console.log(`Subtrair Dois Numero\n `)
    let n1 = parseInt(prompt(`Digite o seu primeiro numero: `))
    let n2 = parseInt(prompt(`Digite seu segundo numero: `))
    console.log(n1-n2)
}

function Multiplicar(){
    console.log(`Multiplicar Dois Numero X`)
    let n1 = parseInt(prompt(`Digite o seu primeiro numero: `))
    let n2 = parseInt(prompt(`Digite seu segundo numero: `))
    console.log(n1*n2)
}

function Dividir(){
    console.log(`Dividir Dois Numero %`)
    let n1 = parseFloat(prompt(`Digite o seu primeiro numero`))
    let n2 = parseFloat(prompt(`Digite seu segundo numero`))
    console.log(n1/n2)
}

function Calcular_IMC(){
    console.log(`Calcular O Seu IMC`)
    let n1 = parseFloat(prompt(`Digite a sua altura:  `))
    let n2 = parseFloat(prompt(`Digite o seu peso:   `))
    let imc = console.log( n2/(n1*n1 )+ imc.toFixed(2))
}

function Converter_Dólar_em(){
    console.log(`Conventer o Dolar em Real\n `)
    let Dolar = parseFloat(prompt(`Me Fala Quantos Tem Em Dolar: `))
    let soma = Dolar*5.07
    console.log(`Voce tem essa quantidade em Real:  ` + soma.toFixed(2))


}

function Tabuada(){
    console.log(`Tabuada Do 1 ao 10`)
    const tabuada = parseInt(prompt(`Qual tabuada voce quer ? `))

    for( let numero = 0; numero <= 10; numero++ ){
        console.log(`${tabuada} x ${numero} = ${tabuada * numero}`)
    }
}



function Calcular_Media(){
    console.log(`Média Das 4 notas`)
    let nota  =parseFloat(prompt(`Me fala sua primeira nota `))
    let nota2 =parseFloat(prompt(`Me fala sua segunda  nota `))
    let nota3 =parseFloat(prompt(`Me fala sua terceira nota `))
    let nota4 =parseFloat(prompt(`Me fala sua quarta nota   `))
    let media =(nota+nota2+nota3+nota4)/4
    console.log(`Sua Media vai ser ${media}`)
   
    if(media>=50){
        console.log(`Passou de Ano`)
    }else{ 
      console.log(`voce nao passou de ano <3`)
    }

}

function ConverterM_Para_CM(){
       console.log(`Metros para CM`)
       

}



function Temperatura (){
    console.log(`Converter C para F\n `)
    let celsius = parseFloat(prompt(`Qual Temperatura que esta fazendo em C ?`))
    let fahrenheit = (celsius*1.8)+32
    console.log(`A sua temperatura em fahrenheit vai ser ${fahrenheit}`)
}





let opcao = 9
while(opcao != 0){
     menu()
     opcao = parseInt(prompt(`Deseja escolher uma operação ?`))
    if(opcao== 1){
        somar()

    }else if (opcao ==  2){
        Subtrair()

    }else if (opcao ==  3){
        Multiplicar()

    }else if (opcao ==  4){
        Dividir()
    }else if (opcao ==  5){
        Calcular_IMC()
    }else if (opcao ==  6){
        Converter_Dólar_em()
    }else if (opcao ==  7){
        Calcular_Media()
    } else if (opcao == 8){
        Tabuada()
    }else if (opcao == 9){
        
    }    
}
