class Gato extends Mascota{

    #sonido;
    #fotosGato;

    constructor(Nombre){
        super(Nombre);
        this.#sonido = "Miau!";
        this.#fotosGato = ["FotosAnimales/FotoGato1.png", "FotosAnimales/FotoGato2.png", "FotosAnimales/FotoGato1.png", "FotosAnimales/FotoGato3.png"];
    }

    get fotosGato(){
        return this.#fotosGato;
    }

    get sonido(){
        return this.#sonido;
    }

    descenderHambre(){
        if(super.hambre > 0){
             super.hambre -= 1;
        }
    }

    subirHambre(){
        if(super.hambre < 100 ){
            if((super.hambre) + 10 > 100){
                super.hambre = 100;
            }else{
                super.hambre += 10;
            }
        }
    }

    descenderSuenio(){
        if(super.suenio > 0){
             super.suenio -= 1;
        }
    }

    descenderFelicidad(){
        if(super.felicidad > 0){
             super.felicidad -= 1;
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


}