
class Monstro{

    constructor(life, dano){
        this.life = life;
        this.dano = dano;
        this.vivo = true
    }

    levarDano(dano){
        this.life -= dano;
        if(this.life <= 0) this.vivo = false
    }

    atacar(){
        return this.dano
    }
}