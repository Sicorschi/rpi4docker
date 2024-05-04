import { useEffect } from "react";
import "./App.css";

function App() {
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:4000/");
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
