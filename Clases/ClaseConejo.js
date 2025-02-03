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
    
    
    
    
    descenderHambre() {
        if (super.hambre > 0) {
            if (super.hambre - 4 < 0) {
                super.hambre = 0;
            } else {
                super.hambre -= 4;

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





    subirSuenio() {
        if (super.suenio < 100) {
            if ((super.suenio) + 10 > 100) {
                super.suenio = 100;
            } else {
                super.suenio += 10;
            }
        }
    }
    
    descenderSuenio() {
        if (super.suenio > 0) {
            if (super.suenio - 7 < 0) {
                super.suenio = 0;
            } else {
                super.suenio -= 7;

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
            if (super.felicidad - 2 < 0) {
                super.felicidad = 0;
            } else {
                super.felicidad -= 2;

            }
        }
    }

    
}