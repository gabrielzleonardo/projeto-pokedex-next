import Head from "next/head";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import { COOKIE_NAME_PRERENDER_DATA } from "next/dist/server/api-utils";

const Home = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [dataCard, setDataCard] = useState(null);
  useEffect(() => {
    setLoading(true);
    fetch("/api/list")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
        setDataCard(data[0]);
      });
  }, []);
  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;
  return (
    <div className="flex items-center min-h-screen">
      <div className="container">
        <div className="flex justify-center gap-4 flex-col m-[40px] sm:flex-row">
          <Card key={dataCard.id} item={dataCard} />
          <div className="grid grid-cols-2 sm:flex sm:max-w-[200px] sm:flex-col gap-2">
            {data.map((item) => (
              <Button
                key={item.name}
                item={item}
                handleClick={(dataPokemon) => setDataCard(dataPokemon)}
                cardActiveId={dataCard.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
