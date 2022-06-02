import axios, { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";

type RQHeroesType={
  id: number;
  name: string;
  alterEgo: string;
}

const fetchRQHeroes = ():AxiosResponse<any, any> => {
  return axios.get("http://localhost:4000/superheroes");
};

const RQSuperHeroes = () => {
  const { data, isLoading, error } = useQuery<
    RQHeroesType[],
    AxiosError
  >("RQ-super-heroes", fetchRQHeroes);
  
  if (isLoading || data===undefined) {
    return <div>Loading ...</div>;
  }

  if (error) {
    return <h2>{error.message}</h2>;
  }
  console.log(data,"data")
  return (
    <div>
      <h2>Super Heroes Pages</h2>
      {data.data.map((item) => {
        return <div key={item.name}>{item.name}</div>;
      })}
    </div>
  );
};

export default RQSuperHeroes;
