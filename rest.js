const menuhamb = document.querySelector('.menuToggle')
const menu = document.querySelector('.menu')

menuhamb.onclick = () => {
    menu.classList.toggle('ativo')
}

let contar = 1;
document.getElementById("radio1").checked = true

setInterval( function(){
    ProxImagem()
}, 3000)


function ProxImagem(){
    contar++
    if(contar > 4) {
        contar = 1
    }

    document.getElementById("radio"+contar).checked = true
}