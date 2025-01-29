class Conejo extends Mascota{
    #sonido;
    #fotosConejo;

    constructor(Nombre){
        super(Nombre);
        this.#sonido = "¡Conejito!";
        this.#fotosConejo = ["FotosAnimales/FotoConejo1.png", "FotosAnimales/FotoConejo2.png", "FotosAnimales/FotoConejo1.png", "FotosAnimales/FotoConejo3.png"];
    }

    get fotosConejo(){
        return this.#fotosConejo;
    }

    get sonido(){
        return this.#sonido;
    }

    descenderHambre(){
        if(super.hambre > 0){
             super.hambre -= 1;
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
}