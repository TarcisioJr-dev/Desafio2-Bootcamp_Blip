let vitorias = 90
let derrotas = 55

let saldoVitorias = calcularVitorias(vitorias, derrotas)
let nivel = conferirNivel(saldoVitorias)

console.log(`O Heroi tem saldo de ${saldoVitorias} Vitórias e está no nível de ${nivel}`)

function calcularVitorias(vitorias, derrotas){
    let calculo = vitorias - derrotas
    return calculo
}

function conferirNivel(saldoVitorias){
    let nivelAtual = " "
    if (!(saldoVitorias > 0 || saldoVitorias < 0)){
        console.log("[ERRO] Informe valores corretos")
    }else {
        if (saldoVitorias < 10){
            nivelAtual = "Ferro"
        }else if (saldoVitorias < 20){
            nivelAtual = "Bronze"
        }else if (saldoVitorias < 50){
            nivelAtual = "Prata"
        }else if (saldoVitorias < 80){
            nivelAtual = "Ouro"
        }else if (saldoVitorias < 90){
            nivelAtual = "Diamante"
        }else if (saldoVitorias < 100){
            nivelAtual = "Lendário"
        }else {
            nivelAtual = "Imortal"
        }
    }
    return nivelAtual
}