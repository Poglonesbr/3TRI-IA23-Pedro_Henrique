var fus = document.getElementById("fus")

var bt2 = document.getElementById("bt2")

var txt1 = ""
var txt2 = ""
var bt = document.getElementById("bt1")
var inp = document.getElementById("inp")
var inp1 = document.getElementById("inp1")
var Fus = document.querySelector("div.texto")

function armazenartexto() {
    txt1 = inp.value
    inp.value = ""
}

function armazenartexto1() {
    txt2 = inp1.value
    inp1.value = " "
}

function somartexto() {
    Fus.innerText = txt1 + " " + txt2
}

  bt.onclick = armazenartexto
  bt2.onclick = armazenartexto1
  fus.onclick = somartexto
  
  
  