let btn = document.getElementById('clicker');
let cart = document.getElementById('cart');
const amor=document.querySelector("#amor");
btn.onclick = function(){
    if(btn.value ==='abrir'){
        cart.src = './foto.jpeg';
        btn.value='fechar';
        btn.innerText='fechar';
        amor.classList.remove("hide")
    }else{
        cart.src = './foto2.jpg';
        btn.value='abrir';
        btn.innerText='abrir';
    }
}