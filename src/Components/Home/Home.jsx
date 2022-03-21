import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import styled from "styled-components";
import { useEffect, useState } from "react";



export const Home = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    getdata()
  }, [])

  const getdata = () => {
    fetch("http://localhost:8080/books").then((response) => (response.json())).then((data) => {
      console.log("All Data", data)
      setData(data)
    })
  }


  const Main = styled.div`
    /* Apply some responsive styling to children */
  `;

  return (
    <div className="homeContainer">
      <h2 style={{ textAlign: "center" }}>Home</h2>
      <SortAndFilterButtons
        handleSort={
          "give handleSort function to this component, that sorts books"
        }
      />

      <Main className="mainContainer">
        { data.map((e,i)=> (
          <BookCard id={e.id} title={e.title} imageUrl={e.imageUrl} section={e.section}/>
        ))}
      </Main>
    </div>
  );
};
