import Image from "next/image";

const Card = ({ item }) => {
  return (
    //cartão pokemon
    <div className="border border-none rounded-md overflow-hidden bg-white shadow-lg pb-12 w-[400px]">
      {/* cartão topo */}
      <div style={{ background: item.bg }} className=" aspect-square w-[400px]">
        <div className="flex gap-4 justify-between items-center px-6 pt-7">
          <h2 className="font-bold text-white text-[24px]">{item.name}</h2>
          <span className="text-white text-[16px]">{item.id}</span>
        </div>
        <parse className="text-[12px] ml-7 mt-2.5  border text-xs rounded-lg opacity-70 bg-white py-[2] px-[10px]">
          {item.type}
        </parse>


      </div>
      {/* cartão de informações */}
      <div className="">
      <div className="-mt-[285PX] flex justify-center">
          <Image className="aspect-square"
            src={item.photo}
            alt={`imagem de um ${item.name}`}
            width={350}
            height={350}
          />
        </div>
        <div className="grid gap-4 grid-cols-2 justify-items-center ">
          <div className="grid gap-3">
            {/* status */}
            <h2 className="text-xl font-bold border-b border-black">Status</h2>
            <ul className="leading-7 text-[15px]">
              <li className="border-b border-neutral-400 ">HP: {item.hp}</li>
              <li className="border-b border-neutral-400">Ataque: {item.ataque}</li>
              <li className="border-b border-neutral-400">Defesa: {item.defesa}</li>
              <li className="border-b border-neutral-400">Velocidade: {item.velocidade}</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold border-b border-black mb-3">Habilidades</h2>
            <ul className="leading-7 text-[15px]">
              {item.habilidades.map((h) => (
                <li key={h} className="border-b border-neutral-400">{h}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
