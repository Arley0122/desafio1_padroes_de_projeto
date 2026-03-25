
class Player{
    static #instance;
     #dano;
    constructor(){
        if(Player.#instance) return Player.#instance;
        this.vida = 90;
        this.#dano = 20;
        this.vivo = true;
        Player.#instance = this;
    }

    static instance(){
        if(!Player.#instance) Player.#instance = new Player();
        return Player.#instance
    }
    atacar(){
        return this.#dano;
    }
    levarDano(dano){
        this.vida -= dano
        if(this.vida <= 0) this.vivo = false;
        ;
    }
}