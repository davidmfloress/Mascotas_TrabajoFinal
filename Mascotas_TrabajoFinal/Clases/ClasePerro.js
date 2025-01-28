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
}