// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const data = [
    {
      name:"Pikachu",
      type:"Elétrico",
      photo:"/imagens/pikachu.png",
      icon:"/imagens/cabeca-pikachu.png",
      hp:"300",
      ataque:"600",
      defesa:"500",
      velocidade:"300",
      habilidades:["Choque do trovão","Investida"],
      bg:"#fcc719",
      id:"#001"
    },
    {
      name:"Bulbasaur",
      type:"Grama",
      photo:"/imagens/bulbasaur.png",
      icon:"/imagens/cabeca-bulbasaur.png",
      hp:"100",
      ataque:"200",
      defesa:"300",
      velocidade:"400",
      habilidades:["Folha navalha","Raio solar"],
      bg:"#49D0B0",
      id:"#002"
    },
    {
      name:"Charmander",
      type:"Fogo",
      photo:"/imagens/charmander.png",
      icon:"/imagens/cabeca-charmander.png",
      hp:"200",
      ataque:"300",
      defesa:"400",
      velocidade:"320",
      habilidades:["Lança-chamas","Investida"],
      bg:"#ed8a8b",
      id:"#003"
    },
    {
      name:"Gyarados",
      type:"Água",
      photo:"/imagens/gyarados.png",
      icon:"/imagens/cabeca-gyarados.png",
      hp:"300",
      ataque:"600",
      defesa:"500",
      velocidade:"300",
      habilidades:["Jato d'água","Hidro bomba"],
      bg:"#76BEFE",
      id:"#004"
    },
    {
      name:"Gengar",
      type:"fantasma",
      photo:"/imagens/gengar.png",
      icon:"/imagens/cabeca-gengar.png",
      hp:"100",
      ataque:"200",
      defesa:"300",
      velocidade:"400",
      habilidades:["Bola sombria","Lambida"],
      bg:"#ba68c8",
      id:"#005"
    },
    {
      name:"Dragonite",
      type:"Dragão",
      photo:"/imagens/dragonite.png",
      icon:"/imagens/cabeca-dragonite.png",
      hp:"100",
      ataque:"200",
      defesa:"300",
      velocidade:"400",
      habilidades:["Dança do dragão","Velocidade extrema"],
      bg:"#ffbf69",
      id:"#006"
    } 
  ]
  
  res.status(200).json(
    data
  )
}
