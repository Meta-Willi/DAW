function init() {
    var presupuesto = prompt('Ingrese el presupuesto anual','');
    var derma, trai, pedi, i;
    var div = document.getElementById('distribucion');

    derma = presupuesto*0.40;
    trauma = presupuesto*0.35;
    pedia = presupuesto*0.25;

    var html = "<ul>\n\t<li>\n";
    html += "\t\t<a href='#' class='move-right'>\n";
    html += "\t\t\tEl presupuesto asignado para Ginecología es: $ " + derma + "\n";
    html += "\t\t</a>\n"
    html += "\t</li>\n";

    html += "\t<li>\n";
    html += "\t\t<a href='#' class='move-right'>\n";
    html += "\t\t\tEl presupuesto asignado para Traumatología es: $ " + trauma + "\n";
    html += "\t\t</a>\n";
    html += "\t</li>\n";

    html += "\t<li>\n";
    html += "\t\t<a href='#' class='move-right'>\n";
    html += "\tEl presupuesto asignado para Pediatría es: $ " + pedia + "\n";
    html += "\t\t</a>\n";
    html += "\t</li>\n";

    html += "</ul>\n";

    div.innerHTML = html;

    var links = document.getElementsByTagName('a');
    
    for(i=0; i<links.length; i++){
        links[i].onmouseover = function(){
            this.className = 'move-right-hover';
        };
        links[i].onmouseout = function(){
            this.className = 'move-right';
        };
    }
}

window.onload = init;
