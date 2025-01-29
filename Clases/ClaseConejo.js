class Conejo extends Mascota {
    #sonido;
    #fotosConejo;

    constructor(Nombre) {
        super(Nombre);
        this.#sonido = "¡Conejito!";
        this.#fotosConejo = ["FotosAnimales/FotoConejo1.png", "FotosAnimales/FotoConejo2.png", "FotosAnimales/FotoConejo1.png", "FotosAnimales/FotoConejo3.png"];
    }

    get fotosConejo() {
        return this.#fotosConejo;
    }

    get sonido() {
        return this.#sonido;
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

    subirSuenio() {
        if (super.suenio < 100) {
            if ((super.suenio) + 10 > 100) {
                super.suenio = 100;
            } else {
                super.suenio += 10;
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




    
    descenderFelicidad() {
        if (super.felicidad > 0) {
            super.felicidad -= 1;
        }
    }
    descenderSuenio() {
        if (super.suenio > 0) {
            super.suenio -= 1;
        }
    }

    descenderHambre() {
        if (super.hambre > 0) {
            super.hambre -= 1;
        }
    }
    
}