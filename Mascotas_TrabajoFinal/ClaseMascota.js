class Mascota {

    #nombre;
    #nivel;
    #suenio;
    #felicidad;
    #hambre;

    constructor(Nombre) {
        this.#set_nombre(Nombre);
        this.#nivel = 1;
        this.#suenio = 100;
        this.#felicidad = 100;
        this.#hambre = 100;
    }

    get nombre() {
        return this.#nombre;
    }

    get nivel() {
        return this.#nivel;
    }

    get suenio() {
        return this.#suenio;
    }

    get felicidad() {
        return this.#felicidad;
    }

    get hambre() {
        return this.#hambre;
    }

    #set_nombre(NuevoNombre) {
        this.#nombre = NuevoNombre;
    }

}
