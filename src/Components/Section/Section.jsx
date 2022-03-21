import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import styled from "styled-components";


export const Section = () => {
 const section = useParams(); 

 const [data, setData] = useState([])

 useEffect(() => {
   getdata()
 }, [section])

 const getdata = () => {
   fetch(`http://localhost:8080/books?section=${section.section}`).then((response) => (response.json())).then((data) => {
     console.log("Section Data", data)
     setData(data)
   })
 }

  const Main = styled.div`
    /* Same as Homepage */
  `;

  return (
    <>
      <h2 style={{ textAlign: "center" }}>
        { section.section
          //   Show section name here
        }
      </h2>
      <SortAndFilterButtons handleSort={"give sorting function to component"} />

      <Main className="sectionContainer">
      { data.map((e,i)=> (
          <BookCard id={e.id} title={e.title} imageUrl={e.imageUrl} section={e.section}/>
        ))}
      </Main>
    </>
  );
};
