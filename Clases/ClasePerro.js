class Perro extends Mascota {

    #sonido;
    #fotosPerro;

    constructor(Nombre) {
        super(Nombre);
        this.#sonido = "Guau!";
        this.#fotosPerro = ["FotosAnimales/FotoPerro2.png", "FotosAnimales/FotoPerro1.png", "FotosAnimales/FotoPerro2.png", "FotosAnimales/FotoPerro3.png"];
    }

    get fotosPerro() {
        return this.#fotosPerro;
    }

    get sonido() {
        return this.#sonido;
    }

    descenderHambre() {
        if (super.hambre > 0) {
            if (super.hambre - 7 < 0) {
                super.hambre = 0;
            } else {
                super.hambre -= 7;

            }
        }
    }

    subirHambre() {
        if (super.hambre < 100) {
            if ((super.hambre) + 10 > 100) {
                super.hambre = 100;
            } else {
                super.hambre += 10;
            }
        }
    }




    

    descenderSuenio() {
        if (super.suenio > 0) {
            if (super.suenio - 2 < 0) {
                super.suenio = 0;
            } else {
                super.suenio -= 2;

            }
        }

    }

    subirSuenio() {
        if (super.suenio < 100) {
            if ((super.suenio) + 10 > 100) {
                super.suenio = 100;
            } else {
                super.suenio += 10;
            }
        }
    }







    descenderFelicidad() {
        if (super.felicidad > 0) {
            if (super.felicidad - 4 < 0) {
                super.felicidad = 0;
            } else {
                super.felicidad -= 4;

            }
        }
    }


    subirFelicidad() {
        if (super.felicidad < 100) {
            if ((super.felicidad) + 10 > 100) {
                super.felicidad = 100;
            } else {
                super.felicidad += 10;
            }
        }
    }
}