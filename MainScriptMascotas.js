var indiceFoto = 0, Nombre = "", tipoMascota = "", datosRecogidos = false, mascotaCreada = null, intervalHambre, intervalSuenio, intervalFelicidad, intervalPonerMascota;
window.onload = function () {

    // creamos el select de las opciones de mascota a elegir
    var selMascota = document.createElement("select");
    selMascota.id = "selMascota";
    selMascota.style.scale = 2;
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





    document.getElementById("contenedor").innerHTML += "<br>";
    document.getElementById("contenedor").innerHTML += "<br>";



    // creamos el input para el nombre de la mascota
    var NombreTB = document.createElement("input");
    NombreTB.type = "text";
    NombreTB.id = "NombreTB";
    NombreTB.placeholder = "Nombre de la mascota";
    NombreTB.style.scale = 2;
    document.getElementById("contenedor").appendChild(NombreTB);


    document.getElementById("contenedor").innerHTML += "<br>";
    document.getElementById("contenedor").innerHTML += "<br>";



    // creamos el boton de aceptar
    var btnAceptar = document.createElement("input");
    btnAceptar.id = "btnAceptar";
    btnAceptar.type = "button";
    btnAceptar.value = "Aceptar";
    btnAceptar.style.scale = 2;
    document.getElementById("contenedor").appendChild(btnAceptar);



    // ponemos en marcha todos los eventos para que vayan bajando solas las necesidades y se vaya moviendo la imagen de la mascota y parezca que se mueva
    document.getElementById("btnAceptar").addEventListener("click", ponerMascota);
    document.getElementById("btnAceptar").addEventListener("click", function () { intervalPonerMascota = setInterval(ponerMascota, 500) });
    document.getElementById("btnAceptar").addEventListener("click", function () {
        // esto ajusta el tiempo de bajada de las necesidades dependiendo del tipo de mascota
            intervalHambre = setInterval(quitarHambre, 1500);
            // ! tengo que cambiar los metodos
            intervalSuenio = setInterval(quitarSuenio, 1501);
            intervalFelicidad = setInterval(quitarFelicidad, 1502);
            
    });






    // creamos los botones de las acciones
    var btnJugar = document.getElementById("botonJugar");
    var btnDormir = document.getElementById("botonDormir");
    var btnComer = document.getElementById("botonComer");

    btnDormir.addEventListener("click", ponerSuenio);
    btnComer.addEventListener("click", ponerHambre);

    btnJugar.addEventListener("click", ponerFelicidad);
    btnJugar.addEventListener("click", quitarHambre);
    btnJugar.addEventListener("click", quitarSuenio);

}

// quita hambre
function quitarHambre() {
    if (mascotaCreada != null) {
        mascotaCreada.descenderHambre();
        ponerRangos();
    }
}

// pone hambre
function ponerHambre() {
    if (mascotaCreada != null) {
        mascotaCreada.subirHambre();
        ponerRangos();
    }
}



// quita sueño
function quitarSuenio() {
    if (mascotaCreada != null) {
        mascotaCreada.descenderSuenio();
        ponerRangos();
    }
}

// pone sueño
function ponerSuenio() {
    if (mascotaCreada != null) {
        mascotaCreada.subirSuenio();
        ponerRangos();
    }
}




// quitamos felicidad
function quitarFelicidad() {
    if (mascotaCreada != null) {
        mascotaCreada.descenderFelicidad();
        ponerRangos();
    }
}

// ponemos felicidad
function ponerFelicidad() {
    if (mascotaCreada != null) {
        mascotaCreada.subirFelicidad();
        ponerRangos();
    }
}





// funcion que crea la mascota
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
            document.getElementById("fotoMascota").src = mascotaCreada.fotosConejo[indiceFoto];
            indiceFoto = (indiceFoto + 1) % mascotaCreada.fotosConejo.length;
        }




    } else {

        // guardamos los datos en vairables porque como se ejecuta la función cada x tiempo para ir moviendo
        // la imagen de la mascota, si no guardamos los datos en variables, da error porque de don de se recoje
        // fue creado en timpo de ejecución
        Nombre = document.getElementById("NombreTB").value;
        tipoMascota = document.getElementById("selMascota").value;
        // creamos la mascota
        if (tipoMascota == "perro") {


            const Bartolo = new Perro(Nombre);
            document.getElementById("fotoMascota").src = Bartolo.fotosPerro[indiceFoto];
            document.getElementById("fotoMascota").style = "width: 230px; height: 300px; top: 50px; left: 50px;";

            indiceFoto = (indiceFoto + 1) % Bartolo.fotosPerro.length;

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

    // llamamos al método para poner las cosas en pantalla
    ponerCosas();


}

function ponerCosas() {
    if (mascotaCreada != null) {
        if (datosRecogidos == false) {
            // borramos los elementos que ya no necesitamos
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

    if (mascotaCreada.hambre == 0) {
        document.getElementById("fotoMascota").src = "FotosAnimales/FotoMuerto.png";
        document.getElementById("fotoMascota").style.width = "200px";
        empezarDeNuevo();
    } else if (mascotaCreada.hambre <= 25) {
        document.getElementById("fotoMascota").style.width = "150px";
    } else if (mascotaCreada.hambre <= 50) {
        document.getElementById("fotoMascota").style.width = "190px";
    } else if (mascotaCreada.hambre < 75) {
        document.getElementById("fotoMascota").style.width = "230px";
    } else {
        document.getElementById("fotoMascota").style.width = "300px";
    }
}

function empezarDeNuevo(){

    // paramos todos los intervalitos para que no se ralle
    clearInterval(intervalPonerMascota);
    clearInterval(intervalHambre);
    clearInterval(intervalSuenio);
    clearInterval(intervalFelicidad);

    var startAgain = document.createElement("input");
    startAgain.type = "button";
    startAgain.id = "starAgain";
    startAgain.value = "Empezar de nuevo";
    startAgain.onclick = function(){
        location.reload();
    }

    var info = document.createElement("label");
    info.innerHTML = "Has perdido, se te ha muerto " + Nombre + ". <br> Haz click en el botón para empezar de nuevo <br> <br>";

    document.getElementById("contenedorBotones").innerHTML = "";
    document.getElementById("contenedorBotones").appendChild(info);
    document.getElementById("contenedorBotones").innerHTML += "<br>";
    document.getElementById("contenedorBotones").appendChild(startAgain);

    document.body.style.background = "grey";

}
