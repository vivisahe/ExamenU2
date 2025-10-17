
const btnGuardar = document.querySelector(".btnGuardar");
const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const edad = document.querySelector("#edad");
const pais = document.querySelector("#pais");
const usuario = document.querySelector(".usuario");
const mensaje = document.querySelector(".mensaje")

const nomguardado = localStorage.getItem("nomguardado");
const emailGuardado = localStorage.getItem("emailguardado");
const edadGuardado = localStorage.getItem("edadguardado");
const paisGuardado = localStorage.getItem("paisguardado");

if(nomguardado!="" && emailGuardado!="" && edadGuardado!="" && paisGuardado!=""){
    usuario.textContent=`Registro anterio: ${nomguardado}`
}
btnGuardar.addEventListener("click",()=>{
    const nomguardado = nombre.value
    const emailguardado = email.value
    const edadguardado = edad.value
    const paisguardado = pais.value

    if(nomguardado!=""&&emailguardado!=""&&edadguardado!=""&&paisguardado!=""){

        localStorage.setItem('nomguardado', nomguardado)
        localStorage.setItem('emailguardado',emailguardado)
        localStorage.setItem('edadguardado',edadguardado)
        localStorage.setItem('paisguardado',paisguardado)

        usuario.textContent=`Usuario: ${nomguardado} ${emailguardado} ${edadguardado} ${paisguardado}`
    }else{
        mensaje.innerHTML=("Falta completar campos")
    }
})
