var indiceFoto = 0, Nombre = "", tipoMascota = "", datosRecogidos = false, mascotaCreada = null;
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
    document.getElementById("btnAceptar").addEventListener("click", function () { setInterval(ponerMascota, 500) });
    document.getElementById("btnAceptar").addEventListener("click", function(){ setInterval(quitarHambre, 2000) });
    // document.getElementById("btnAceptar").addEventListener("click", PonerBotones);







    var btnJugar = document.getElementById("botonJugar");
    btnJugar.addEventListener("click", quitarHambre);

}


function quitarHambre() {
    if (mascotaCreada != null) {
        mascotaCreada.descenderHambre();
        ponerRangos();
    }
}

function ponerMascota() {
    
    if (mascotaCreada != null) { // Si ya se ha creado una mascota, no se puede crear otra
        // ya hay mascota creada
        
        // hacemos que se vaya moviendo la foto
        if (tipoMascota == "perro") {
            document.getElementById("fotoMascota").src = mascotaCreada.fotosPerro[indiceFoto];
            indiceFoto = (indiceFoto + 1) % mascotaCreada.fotosPerro.length;
        } else if (tipoMascota == "gato") {
            document.getElementById("fotoMascota").src = mascotaCreada.fotosGato[indiceFoto];
            indiceFoto = (indiceFoto + 1) % mascotaCreada.fotosGato.length;
        } else if (tipoMascota == "conejo") {
            document.getElementById("fotoMascota").src = Bolita.fotosConejo[indiceFoto];
            indiceFoto = (indiceFoto + 1) % mascotaCreada.fotosConejo.length;
        }
        
        
        
        
    } else {


        Nombre = document.getElementById("NombreTB").value;
        tipoMascota = document.getElementById("selMascota").value;
        // creamos la mascota
        if (tipoMascota == "perro") {


            const Bartolo = new Perro(Nombre);
            document.getElementById("fotoMascota").src = Bartolo.fotosPerro[indiceFoto];
            document.getElementById("fotoMascota").style = "width: 230px; height: 300px; top: 50px; left: 50px;";

            // indiceFoto = (indiceFoto + 1) % Bartolo.fotosPerro.length;

            mascotaCreada = Bartolo;

        } else if (tipoMascota == "gato") {

            const Michi = new Gato(Nombre);
            document.getElementById("fotoMascota").src = Michi.fotosGato[indiceFoto];
            document.getElementById("fotoMascota").style = "width: 300px; height: 300px; top: 50px; left: 50px;";

            indiceFoto = (indiceFoto + 1) % Michi.fotosGato.length;

            mascotaCreada = Michi;

        } else if (tipoMascota == "conejo") {

            const Bolita = new Conejo(Nombre);
            document.getElementById("fotoMascota").src = Bolita.fotosConejo[indiceFoto];
            document.getElementById("fotoMascota").style = "width: 220px; height: 300px; top: 50px; left: 50px;";

            indiceFoto = (indiceFoto + 1) % Bolita.fotosConejo.length;

            mascotaCreada = Bolita;

        }

    }

    // if (Nombre == "") {
    // }

    // if (tipoMascota == "") {
    // }



    ponerCosas();


}

function ponerCosas() {
    if (mascotaCreada != null) {
        if (datosRecogidos == false) {
            document.getElementById("nombreMascota").innerText = Nombre;

            document.getElementById("contenedor").removeChild(document.getElementById("selMascota"));
            document.getElementById("contenedor").removeChild(document.getElementById("NombreTB"));
            document.getElementById("contenedor").removeChild(document.getElementById("btnAceptar"));
            datosRecogidos = true;
        }

        document.getElementById("contenedorBotones").style.display = "flex";
        for (let index = 0; index < document.getElementsByClassName("rangos").length; index++) {
            document.getElementsByClassName("rangos")[index].style.display = "flex";
        }

        ponerRangos();

    }
}

function ponerRangos() {
    document.getElementById("rangoHambre").value = mascotaCreada.hambre;
    document.getElementById("rangoSuenio").value = mascotaCreada.suenio;
    document.getElementById("rangoFelicidad").value = mascotaCreada.felicidad;

    document.getElementById("lblRangoHambre").innerText = mascotaCreada.hambre + "%";
    document.getElementById("lblRangoSuenio").innerText = mascotaCreada.suenio + "%";
    document.getElementById("lblRangoFelicidad").innerText = mascotaCreada.felicidad + "%";
}
