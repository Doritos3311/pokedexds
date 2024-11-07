export class Pokemon { /* Representacion de un Objeto existente */
    //Nom movimientos ni habs

    /* Atributos */
    id: number;
    nombre: number;
    vida : number;
    ataque: number;
    defensa: number;
    tipo: string;

    /* Constructor */
    constructor(id_recibido:number, nombre_recibido:number, vida_recibido:number, ataque_recibido:number, defensa_recibido:number, tipo_recibido:string){
        this.id = id_recibido;
        this.nombre = nombre_recibido;
        this.vida = vida_recibido;
        this.ataque = ataque_recibido;
        this.defensa = defensa_recibido;
        this.tipo = tipo_recibido;
    }
    /* Metodos */
    public atacar(){
        console.log("Estoy atacando ⚔️")
    }
    public defender(){
        console.log("Estoy defendiendo 🛡️")
    }
    public quitarVida(cantidad_quitar:number){
        this.vida = this.vida - cantidad_quitar;
        console.log("Estoy quitando vida 💔")
    }
    public agregarVida(cantidad_agregar:number){
        this.vida = this.vida + cantidad_agregar;
        console.log("Estoy agregando vida ❤️")
    }


    /* Metodo Prueba */
    
    __str(){
        console.log(`ID: ${this.id}, Nombre: ${this.nombre}, Vida: ${this.vida}, Ataque: ${this.ataque}, Defensa: ${this.defensa}, Tipo: ${this.tipo}`);
    }
}

