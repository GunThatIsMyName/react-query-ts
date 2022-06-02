import React, { useEffect, useState } from 'react'
import axios, { AxiosResponse } from"axios";

interface HeroesType {
  id: number
  name: string
  alterEgo: string
}


const SuperHeroesPage = () => {
  const [isLoading,setIsLoading]=useState(true);
  const [data,setData]=useState<HeroesType[] | []>([]);
  const [error,setError] = useState<string>("")

  useEffect(()=>{
    axios.get('http://localhost:4000/superheroes').then((res:AxiosResponse)=>{
      setData(res.data);
    }).catch(error=>{
      setError(error.message)
    }).finally(()=>{
      setIsLoading(false)
    })
  },[])

  if(isLoading){
    return <h2>Loading ...</h2>
  }

  if(error){
    return <h2>{error}</h2>
  }

  return (
    <div>
      <h2>Super Heroes Pages</h2>
      {data.map(item=>{
        return <div key={item.name} >{item.name}</div>
      })}
    </div>
  )
}

export default SuperHeroesPage