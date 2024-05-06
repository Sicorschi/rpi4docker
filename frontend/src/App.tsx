import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const baseURL = `${import.meta.env.VITE_API_URL}:${
  import.meta.env.VITE_API_PORT
}`;

interface ICats {
  id: number;
  name: string;
  owner: string;
  birth: string;
}

function App() {
  const [cats, setCats] = useState<ICats[]>([]);
  const fetchDataCats = async () => {
    try {
      const { data } = await axios.get(`${baseURL}/cats`);
      console.log(data);
      setCats(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDataCats();
  }, []);

  return (
    <>
      Home dashboard
      {cats ? (
        <div>
          {cats?.map((c: ICats) => (
            <span>{c.name}</span>
          ))}
        </div>
      ) : (
        <span>No cats data</span>
      )}
    </>
  );
}

export default App;
