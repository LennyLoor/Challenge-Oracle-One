function Encriptar(){
    //Enviar informacion
    var text_encriotador = document.getElementById("send-info").value;
    document.getElementById("get-info").innerHTML = text_encriotador;
    //Ocultar secciones
    document.getElementById("info").style.display = "block";
    document.getElementById("info-empty").style.display = "none"; 
}
function Desencriptar(){ 
    //Borrar informacion
    document.getElementById("send-info").value = ''; 
    //Ocultar secciones
    document.getElementById("info-empty").style.display = "block";
    document.getElementById("info").style.display = "none"; 
}
function Copiar(){ 
    var textEncriptado = document.getElementById("get-info").innerHTML;  
    document.getElementById("get-info").select();
    navigator.clipboard.writeText(textEncriptado).then();  
}