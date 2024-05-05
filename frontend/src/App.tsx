import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";

const baseURL = "http://192.168.0.10:4000/";

function App() {
  const fetchData = async () => {
    try {
      const response = await axios.get(baseURL);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <>Home dashboard</>;
}

export default App;
