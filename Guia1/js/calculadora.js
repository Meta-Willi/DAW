//Función que funciona como manejador de evento
//al producirse el evento load (carga de la página)
function init(){
    //Ingresar los datos de los números a operar
    var op1 = prompt('Introduzca el primer numero:','');
    var op2 = prompt('Introduzca el segundo numero:','');
    //Elemento div donde se mostrará el menú de las operaciones
    var operaciones = document.getElementById('operaciones');
    //Elemento div donde se mostrarán los resultados
    var resultado = document.getElementById('resultado');
    //Creando el contenido de la página
    var contenido = "<header>\n";
    contenido += "\t<h1></h1>\n";
    contenido += "</header>\n";
    contenido += "<nav class='menu'>\n";
    contenido += "<ul>\n";
    contenido += "\t<li>\n";
    contenido += "\t\t<a href=\"javascript:void(0)\"><span>Sumar</span></a>\n";
    contenido += "</li>\n";
    contenido += "\t<li>\n";
    contenido += "\t\t<a href=\"javascript:void(0)\"><span>Restar</span></a>\n";
    contenido += "</li>\n";
    contenido += "\t<li>\n";
    contenido += "\t\t<a href=\"javascript:void(0)\"><span>Multiplicar</span></a>\n";
    contenido += "</li>\n";
    contenido += "\t<li>\n";
    contenido += "\t\t<a href=\"javascript:void(0)\"><span>Dividir</span></a>\n";
    contenido += "</li>\n";
    contenido += "\t<li>\n";
    contenido += "\t\t<a href=\"javascript:void(0)\"><span>Residuo</span></a>\n";
    contenido += "</li>\n";
    contenido += "</ul>\n";
    contenido += "</nav>\n";
}

window.onload = init;