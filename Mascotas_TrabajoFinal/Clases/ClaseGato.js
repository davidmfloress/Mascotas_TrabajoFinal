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


}