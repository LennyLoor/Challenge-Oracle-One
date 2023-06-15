function Encriptar(){
    //Enviar informacion
    var text_encriotador = document.getElementById("send-info").value;
    document.getElementById("get-info").value = text_encriotador;
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
    //alert('Copiar');

    var textEncriptado = document.getElementById("get-info").value; 
    document.getElementById("get-info").select();
    navigator.clipboard.writeText(textEncriptado).then();
    
    
}