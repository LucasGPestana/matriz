let txtNum = window.document.getElementById('txtNum')
let lista = window.document.getElementById('lista')
let res = window.document.getElementById('res')
let txtOrdem = window.document.getElementById('txtOrdem')
let valores = []
let contador = 0
let contador2 = 0

function adicionarOrdem() {

  let ordem = txtOrdem.value

  return ordem
}

function validaOrdem(contador) {
  let ordem = adicionarOrdem()

  if (contador < (ordem ** 2)) {
    return true
  } else {
    return false
  }
}

function adicionar() {

  if (validaOrdem(contador)) {
    let item = window.document.createElement('option')

    valores.push(Number(txtNum.value))

    lista.appendChild(item)

    item.innerHTML = `Valor ${txtNum.value} adicionado!`

    contador++

  } else {
    window.document.write(
      'Valor não adicionado! A quantidade de itens chegou ao máximo!'
    )
  }
}

function avancar() {

  let matriz = []
  let ordem = adicionarOrdem()

  if (valores.length == ( ordem ** 2 )) {

    for (let i = 0; i < (valores.length ** (1/2)); i++) {

      linha = []

      for (let j = 0; j < (valores.length ** (1/2)); j++) {
        linha.push(valores[contador2])
        contador2++
      }

      matriz.push(linha)

    }

    for (i = 0; i < (valores.length ** (1/2)); i++) {
      let linha = window.document.createElement('li')
      res.appendChild(linha)
      linha.innerHTML = `${matriz[i]}`

    }
  } else {
    window.document.write("A quantidade de elementos da matriz não foi preenchida corretamente!")
  }
}
