var indiceFoto = 0, Nombre = "", tipoMascota = "", datosRecogidos = false;
window.onload = function () {
    var selMascota = document.createElement("select");
    selMascota.id = "selMascota";
    document.getElementById("contenedor").appendChild(selMascota);

    var option0 = document.createElement("option");
    option0.value = "";
    option0.text = "Seleccione una mascota";
    selMascota.appendChild(option0);

    var option1 = document.createElement("option");
    option1.value = "perro";
    option1.text = "Perro";
    selMascota.appendChild(option1);

    var option2 = document.createElement("option");
    option2.value = "gato";
    option2.text = "Gato";
    selMascota.appendChild(option2);

    var option3 = document.createElement("option");
    option3.value = "conejo";
    option3.text = "Conejo";
    selMascota.appendChild(option3);


    var NombreTB = document.createElement("input");
    NombreTB.type = "text";
    NombreTB.id = "NombreTB";
    NombreTB.placeholder = "Nombre de la mascota";
    document.getElementById("contenedor").appendChild(NombreTB);

    var btnAceptar = document.createElement("input");
    btnAceptar.id = "btnAceptar";
    btnAceptar.type = "button";
    btnAceptar.value = "Aceptar";
    document.getElementById("contenedor").appendChild(btnAceptar);


    // setInterval(ponerMascota, 500);
    document.getElementById("btnAceptar").addEventListener("click", ponerMascota);
    document.getElementById("btnAceptar").addEventListener("click", function(){setInterval(ponerMascota, 500)});
    document.getElementById("btnAceptar").addEventListener("click", PonerBotones);
    

}

function ponerMascota() {

    if(Nombre == ""){
        Nombre = document.getElementById("NombreTB").value;
    }

    if(tipoMascota == ""){
        tipoMascota = document.getElementById("selMascota").value;
    }

    if (tipoMascota == "perro") {


        const Bartolo = new Perro(Nombre);
        document.getElementById("fotoMascota").src = Bartolo.fotosPerro[indiceFoto];
        document.getElementById("fotoMascota").style = "width: 230px; height: 300px; top: 50px; left: 50px;";

        indiceFoto = (indiceFoto + 1) % Bartolo.fotosPerro.length;

    } else if (tipoMascota == "gato") {

        const Michi = new Gato(Nombre);
        document.getElementById("fotoMascota").src = Michi.fotosGato[indiceFoto];
        document.getElementById("fotoMascota").style = "width: 300px; height: 300px; top: 50px; left: 50px;";

        indiceFoto = (indiceFoto + 1) % Michi.fotosGato.length;

    } else if (tipoMascota == "conejo") {

        const Bolita = new Conejo(Nombre);
        document.getElementById("fotoMascota").src = Bolita.fotosConejo[indiceFoto];
        document.getElementById("fotoMascota").style = "width: 220px; height: 300px; top: 50px; left: 50px;";

        indiceFoto = (indiceFoto + 1) % Bolita.fotosConejo.length;

    }

    if(datosRecogidos == false){
        document.getElementById("nombreMascota").innerText = Nombre;
    
        document.getElementById("contenedor").removeChild(document.getElementById("selMascota"));
        document.getElementById("contenedor").removeChild(document.getElementById("NombreTB"));
        document.getElementById("contenedor").removeChild(document.getElementById("btnAceptar"));
        datosRecogidos = true;
    }

        document.getElementById("contenedorBotones").style.display = "flex";

}


// function PonerBotones(){
    
//     var btnComer = document.createElement("button");
//     btnComer.id = "btnComer";
//     btnComer.innerHTML = "<img src='FotosAnimales/Comida.webp' style='width: 50px; height: 50px;'>";
//     btnComer.value = "Comer";
//     document.body.appendChild(btnComer);

//     var btnDormir = document.createElement("button");
//     btnDormir.id = "btnDormir";
//     btnDormir.innerHTML = "<img src='FotosAnimales/Dormir.jpeg' style='width: 50px; height: 50px;'>";
//     btnDormir.value = "Dormir";
//     document.body.appendChild(btnDormir);

//     var btnJugar = document.createElement("button");
//     btnJugar.id = "btnJugar";
//     btnJugar.innerHTML = "<img src='FotosAnimales/Jugar.jpeg' style='width: 50px; height: 50px;'>";
//     btnJugar.value = "Jugar";
//     document.getElementById("contenedor").appendChild(btnJugar);

//     document.getElementById("btnComer").addEventListener("click", Comer);
//     document.getElementById("btnDormir").addEventListener("click", Dormir);
//     document.getElementById("btnJugar").addEventListener("click", Jugar);
// }
