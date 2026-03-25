const containerTodosMonstros = document.querySelector(".container_todos_monstros")
const player = document.querySelector(".container_player")
const botaoAtacar = document.querySelector(".causar_dano") 
const botaoReceberDano = document.querySelector(".receber_dano")
const audioMonstroDano = new Audio("audio_monstros/audio_dano.mp3")
const audioMonstroMorte = new Audio("audio_monstros/audio_morte.mp3")
const audioPlayerDano = new Audio("audio_player/player_dano.mp3")
const audioPlayerMorte = new Audio("audio_player/audio_morte.mp3")
let fabrica = new FabricaMonstros()

let monstro1 = fabrica.criarMonstro(60, 10)
let monstro2 = fabrica.criarMonstro(50, 20)
let monstro3 = fabrica.criarMonstro(90, 30)
let monstro4 = fabrica.criarMonstro(70, 15)

document.querySelector(".life_monstro1").style.width = `${monstro1.life}%`
document.querySelector(".life_monstro2").style.width = `${monstro2.life}%`
document.querySelector(".life_monstro3").style.width = `${monstro3.life}%`
document.querySelector(".life_monstro4").style.width = `${monstro4.life}%`

containerTodosMonstros.addEventListener("click", (e)=>{

    if(e.target.textContent == "Receber Ataque"){
        const monstroContainer = e.target.closest(".container_monster")
        const id = monstroContainer.dataset.id
        const monstros = { "1": monstro1, "2": monstro2, "3": monstro3, "4": monstro4 }
        const monstroAtacante = monstros[id]
        if(!monstroAtacante.vivo) return
        const heroi = Player.instance()
        if(!heroi.vivo) return

        const imgPlayer = document.querySelector(".img_player")

        heroi.levarDano(monstroAtacante.atacar())
        audioPlayerDano.play()
        imgPlayer.src = "imagens/player/player_triste.png"
        setTimeout(()=>{ 
            if(heroi.vida > 0) imgPlayer.src = "imagens/player/player.png" 
        }, 1200)

        document.querySelector(".life_player").style.width = `${heroi.vida}%`

        if(heroi.vida <= 0){
            document.querySelector(".life_player").style.width = `${0}%`
            imgPlayer.src = "imagens/player/player_morto.png"
            audioPlayerMorte.play()
            setTimeout(()=>{
                heroi.vida = 90
                heroi.vivo = true
                imgPlayer.src = "imagens/player/player.png"
                document.querySelector(".life_player").style.width = `${heroi.vida}%`
            }, 4000)
        }
    }

    if(e.target.textContent === "Atacar"){
        const monstro = e.target.closest(".container_monster")
        const id = monstro.dataset.id
        const img = monstro.querySelector("img")
        switch(id){
            case "1":
                if(!monstro1.vivo | !Player.instance().vivo) break
                monstro1.levarDano(Player.instance().atacar())
                audioMonstroDano.play()
                img.src = "imagens/monstro1/monstro1_triste.png"
                setTimeout(()=> { if(monstro1.life > 0) img.src = "imagens/monstro1/monstro1.png" }, 1200)
                if(monstro1.life <= 0){
                    img.src = "imagens/monstro1/monstro1_morto.png"
                    audioMonstroMorte.play()
                    document.querySelector(".life_monstro1").style.width = `${monstro1.life}%`
                    setTimeout(()=> {
                        monstro1.life = 60;
                        document.querySelector(".life_monstro1").style.width = `${monstro1.life}%`
                        img.src = "imagens/monstro1/monstro1.png";
                        monstro1.vivo = true;
                    }, 4000)
                }
                document.querySelector(".life_monstro1").style.width = `${monstro1.life}%`
                break;

            case "2":
                if(!monstro2.vivo | !Player.instance().vivo) break;
                monstro2.levarDano(Player.instance().atacar())
                audioMonstroDano.play()
                img.src = "imagens/monstro2/monstro2_triste.png"
                setTimeout(()=> { if(monstro2.life > 0) img.src = "imagens/monstro2/monstro2.avif" }, 1200)
                if(monstro2.life <= 0){
                    document.querySelector(".life_monstro2").style.width = `${0}%`
                    img.src = "imagens/monstro2/monstro2_morto.png"
                    audioMonstroMorte.play();
                    setTimeout(()=>{
                        monstro2.life = 50;
                        img.src = "imagens/monstro2/monstro2.avif"
                        document.querySelector(".life_monstro2").style.width = `${monstro2.life}%`
                        monstro2.vivo = true;
                    }, 4000)
                }
                document.querySelector(".life_monstro2").style.width = `${monstro2.life}%`
                break;

            case "3":
                if(!monstro3.vivo | !Player.instance().vivo) break;
                monstro3.levarDano(Player.instance().atacar())
                audioMonstroDano.play()
                img.src = "imagens/monstro3/monstro3_triste.png"
                setTimeout(()=> { if(monstro3.life > 0) img.src = "imagens/monstro3/mostro3.jpg" }, 1200)
                if(monstro3.life <= 0){
                    document.querySelector(".life_monstro3").style.width = `${0}%`
                    img.src = "imagens/monstro3/monstro3_morto.png"
                    audioMonstroMorte.play();
                    setTimeout(()=>{
                        monstro3.life = 90;
                        img.src = "imagens/monstro3/mostro3.jpg"
                        document.querySelector(".life_monstro3").style.width = `${monstro3.life}%`
                        monstro3.vivo = true;
                    }, 4000)
                }
                document.querySelector(".life_monstro3").style.width = `${monstro3.life}%`
                break;

            case "4":
                if(!monstro4.vivo | !Player.instance().vivo) break;
                monstro4.levarDano(Player.instance().atacar())
                audioMonstroDano.play()
                img.src = "imagens/monstro4/monstro4_triste.png"
                setTimeout(()=> { if(monstro4.life > 0) img.src = "imagens/monstro4/monstro4.avif" }, 1200)
                if(monstro4.life <= 0){
                    document.querySelector(".life_monstro4").style.width = `${0}%`
                    img.src = "imagens/monstro4/monstro4_morto.png"
                    audioMonstroMorte.play();
                    setTimeout(()=>{
                        monstro4.life = 70;
                        img.src = "imagens/monstro4/monstro4.avif"
                        document.querySelector(".life_monstro4").style.width = `${monstro4.life}%`
                        monstro4.vivo = true;
                    }, 4000)
                }
                document.querySelector(".life_monstro4").style.width = `${monstro4.life}%`
                break;
        }
    }
})
