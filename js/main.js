const listaSpesa = ["pane" , "pasta" , "acqua" , "eccecc"] ;
const contain = document.getElementById("container");
let i = 0;

while (i < listaSpesa.length) {
    contain.innerHTML += " " + listaSpesa[i];
    i++;
}