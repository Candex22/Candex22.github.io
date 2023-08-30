const nombre_pp = document.querySelectorAll('.input-box2')
const Multi = document.querySelectorAll('.Multiplicacion')
const iguales = document.querySelectorAll('.Iguales')
const deshabilitadp = document.querySelectorAll('.disable')




const tbodyAll = document.querySelector("#tbodyAll");
const btnIniciar = document.querySelector("#Inicio");
const Username = document.querySelector("#nameUser");
const ContentUser = document.querySelector("#ContentUser");
const comprobar = document.querySelector("#comprobar");
const enviar = document.querySelector("#enviar");
const TableTODO = document.querySelector("#TableTODO");




const tiempoDisplay = document.querySelector('#tiempo');
const olElement = document.querySelector('#olElement');
const tablapp2 = document.querySelector('#tablapp2');








let intervalo;
let tiempo = 0;
let cronometroActivo = false;




//contador 2




let contador = 0;
let bandera = false;




function refreshN(){
    location.reload();
}








//calgo el valor de los elementos y bloqueo algunos elementos al iniciar la ventana
window.addEventListener('load', ()=> {
    for(let i=0; i<nombre_pp.length;i++){
        let blockinput = nombre_pp[i]
        blockinput.disabled = true;
    }
    for(let ii=0; ii<Multi.length;ii++){
        let multiinput = Multi[ii]
        multiinput.disabled = true;
        multiinput.value = "X"
    }
    for(let ee=0; ee<iguales.length;ee++){
        let todosIguales = iguales[ee]
        todosIguales.disabled = true;
        todosIguales.value = "="
    }
    for(let jj=0; jj<deshabilitadp.length;jj++){
        let onlyreadd = deshabilitadp[jj]
        onlyreadd.disabled = true;
    }




});








//numeros predeterminados
//Resultados
let resultado1 = document.querySelector("#No2Pre")
resultado1.value = parseInt("70") //resultado
let resultado2 = document.querySelector("#No7Pre")
resultado2.value = parseInt("70") //resultado
let resultado3 = document.querySelector("#No8Pre")
resultado3.value = parseInt("28")// resultado
let resultado4 = document.querySelector("#No10Pre")
resultado4.value = parseInt("24")//resultado
//Numeros normales
let no1pre = document.querySelector("#No1Pre")
no1pre.value = parseInt("10")
let no3pre = document.querySelector("#No3Pre")
no3pre.value = parseInt("4")
let no4pre = document.querySelector("#No4Pre")
no4pre.value = parseInt("5")
let no5pre = document.querySelector("#No5Pre")
no5pre.value = parseInt("7")
let no6pre = document.querySelector("#No6Pre")
no6pre.value = parseInt("2")
let no9pre = document.querySelector("#No9Pre")
no9pre.value = parseInt("3")
let no11pre = document.querySelector("#No11Pre")
no11pre.value = parseInt("7")
let NoEX = document.querySelector("#NoEX")
NoEX.value = parseInt("49")
let no12pre = document.querySelector("#No12Pre")
no12pre.value = parseInt("7")
let no13pre = document.querySelector("#No13Pre")
no13pre.value = parseInt("14")
















//Numeros ingresados por Usuario
const NumbersUserBlock = () =>{
    let ArrayCorrectos = [7,7,1,7,35,8,2,6,42,7]
    let arraysElementos = [UserNo1,UserNo2,UserNo3,UserNo4,UserNo5,UserNo6,UserNo7,UserNo8,UserNo9,UserNo10]
    let ArrayNumero = [UserNo1.value,UserNo2.value,UserNo3.value,UserNo4.value,UserNo5.value,UserNo6.value,UserNo7.value,UserNo8.value,UserNo9.value,UserNo10.value]
   
    if (ArrayNumero.length !== ArrayCorrectos.length) {
        console.log('Los arrays no son iguales en longitud.');
      } else {
        // Variable para almacenar los elementos diferentes
        const elementosDiferentes = [];
        const elementosiguales = [];
       
        // Comparar elementos de los arrays
        for (let i = 0; i < ArrayCorrectos.length; i++) {
          if (ArrayCorrectos[i] !== parseInt(ArrayNumero[i])) {
            elementosDiferentes.push(i);
          }else{
            elementosiguales.push(i)
        }
        }
        // Verificar el resultado
        if (elementosDiferentes.length === 0) {
        enviar.style.display = "flex"
        elementosiguales.forEach((index) => {
            arraysElementos[index].style.border = "3px solid #02836e"
        });
        enviar.addEventListener('click',()=>{
            variablesphp(ObtenerNombreUsuario(),guardarTiempo() );
            refreshN()        
            bandera = false;  
            console.log(contador)
        })
    } else {
            enviar.style.display = "none"
            elementosDiferentes.forEach((index) => {
            arraysElementos[index].style.border = "3px solid #a00707"
          });
        }
      }
}




const UserNo1 = document.querySelector("#UserNo1")
const UserNo2 = document.querySelector("#UserNo2")
const UserNo3 = document.querySelector("#UserNo3")
const UserNo4 = document.querySelector("#UserNo4")
const UserNo5 = document.querySelector("#UserNo5")
const UserNo6 = document.querySelector("#UserNo6")
const UserNo7 = document.querySelector("#UserNo7")
const UserNo8 = document.querySelector("#UserNo8")
const UserNo9 = document.querySelector("#UserNo9")
const UserNo10 = document.querySelector("#UserNo10")




comprobar.addEventListener('click',NumbersUserBlock)




function ObtenerNombreUsuario(){
    return Username.textContent
}




//oculto algunos elementos para que no se puedan acceder
tbodyAll.style.display = "none"
ContentUser.style.display = "none"
comprobar.style.display = "none"
enviar.style.display = "none"
tiempoDisplay.style.display = "none"
TableTODO.style.display = "none"




btnIniciar.addEventListener("click",()=>{
    let NombreUsuario = prompt("Ingrese su Nombre")
    if(NombreUsuario.trim() === ""){
        console.log("El campo esta vacio")
        tbodyAll.style.display = "none"
       
    }else{
        tbodyAll.style.display = "flex"
        Username.innerHTML = " "+NombreUsuario
        ContentUser.style.display = "flex"
        comprobar.style.display = "flex"
        btnIniciar.style.display = "none"
        tiempoDisplay.style.display = "flex"
        TableTODO.style.display = "flex"
        tablapp2.style.display = "none"
        iniciarCronometro()
       
        contador = 0;
        bandera = true;
       
        // Iniciar el contador
        const interval = setInterval(() => {
          if (bandera === false) {
            clearInterval(interval);
          } else {
            contador += 1;
          }
        }, 1000);
        return NombreUsuario;








    }
})




//Cronometro------------------------------------------------------------
function actualizarTiempo() {
    tiempo++;
    var minutos = Math.floor((tiempo % 3600) / 60);
    var segundos = tiempo % 60;
    tiempoDisplay.innerHTML = `${formatoDosDigitos(minutos)}:${formatoDosDigitos(segundos)}`;
  }
function iniciarCronometro() {
    if (!cronometroActivo) {
      tiempo = 0;
      intervalo = setInterval(actualizarTiempo, 1000);
      cronometroActivo = true;
    }
  }
function detenerCronometro() {
    clearInterval(intervalo);
    cronometroActivo = false;
}
function guardarTiempo() {
    if (cronometroActivo) {
      detenerCronometro();
      var tiempoGuardado = tiempoDisplay.innerHTML;
      tiempoDisplay.innerHTML = '00:00';
    return tiempoGuardado
    }
  }
function formatoDosDigitos(numero) {
    return numero.toString().padStart(2, '0');
  }
  //Cronometro termian el bloque------------------------------------------------------------


  function variablesphp(NombreUsuario, tiempoGuardado) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "index.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var data = "NombreUsuario=" + encodeURIComponent(NombreUsuario) + "&tiempoGuargado=" + encodeURIComponent(tiempoGuardado);
    xhr.send(data);
}
