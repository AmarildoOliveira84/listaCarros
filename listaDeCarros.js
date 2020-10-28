class Carros {
    constructor() {
        this.id = 0
        this.contador = 0
        this.ano = 0
        this.somaCarro = 0
        this.mediaCarro = 0
        this.maior = 0
        this.menor = 400000000
    }

    adicionar() {
        this.contador = this.contador + 1
        let marca = document.getElementById("marca").value
        let modelo = document.getElementById("modelo").value
        this.ano = parseInt(document.getElementById("ano").value)


if(marca==""||modelo==""||document.getElementById("ano").value==""){
alert("Necessáio informar os dados do veiculos")
}else{


        let div = document.createElement("div")
        div.id = "id" + this.id
        div.classList.add("img")
        let span = document.createElement("span")
        span.innerText = marca + "/" + modelo + "/" + this.ano
        let img = document.createElement("img")
        img.src = "img/delete.svg"
        img.setAttribute("onclick", "carros.excluir('" + div.id + "')")

        div.appendChild(span)
        div.appendChild(img)

        let lista = document.getElementById("lista")
        lista.appendChild(div)

        this.somaCarro = this.somaCarro + this.ano
        this.mediaCarro = this.somaCarro / this.contador

        if (this.ano > this.maior) {
            this.maior = this.ano
        }
        if (this.ano < this.menor) {
            this.menor = this.ano
        }

        this.limpar()
    }
        this.apagarRelatorio()
    }
    excluir(id) {

        let carro = document.getElementById(id)
        let lista = document.getElementById("lista")
        lista.removeChild(carro)
        this.contador = this.contador - 1
        this.apagarRelatorio()



    }
    apagarRelatorio(){
     let relatorio= document.getElementById("relatorio")
     relatorio.innerText=""
      
    }
    limparRelatorio(){

        let lista = document.getElementById("lista")
        lista.innerText = ""

        let relatorio= document.getElementById("relatorio")
     relatorio.innerText=""

    }
    relatorio() {

        let fieldeset = document.createElement("fieldset")
        let legend = document.createElement("legend")
        legend.innerText = "Resultado"
        let div = document.createElement("div")
        div.innerText = "Carro Mais Novo: " + this.maior
        let div1 = document.createElement("div")
        div1.innerText = "Carro Mais Velho: " + this.menor
        let div2 = document.createElement("div")
        div2.innerText = "Media dos Anos: " + this.mediaCarro
        fieldeset.appendChild(legend)
        fieldeset.appendChild(div)
        fieldeset.appendChild(div1)
        fieldeset.appendChild(div2)

        let relatorio = document.getElementById("relatorio")
        relatorio.appendChild(fieldeset)

    }
    limpar(){
         document.getElementById("marca").value=""
         document.getElementById("modelo").value=""
         document.getElementById("ano").value=""
    }
}

var carros = new Carros()