import { useParams } from "react-router";
import { useState, useEffect } from "react";

export const BookDetailsPage = () => {
  
  const id = useParams(); 

  const [data, setData] = useState([])
 
  useEffect(() => {
    getdata()
  }, [id])
 
  const getdata = () => {
    fetch(`http://localhost:8080/books?id=${id.id}`).then((response) => (response.json())).then((data) => {
      console.log("Single Data", data[0])
      setData(data[0])
    })
  }
 
  return (
   
      <div className="bookContainer">
        <h2 className="title"><b>Title: </b> {data.title}</h2>
        <img className="image" src= {data.imageUrl} alt="#" />
        <div className="author"> <b>Author: </b>{"Unknown"}</div>
        <div className="description"><b>Description: </b> {data.description}</div>
        <div className="price"><b>Price: </b>Rs {data.reviews}</div>
        <div className="section"><b>Section: </b> {data.section}</div>
        <div className="isbnNumber"><b>ISBN: </b> {data.reviews}2313TTSKCN34</div>
        <ul className="reviews">
        <b>Reviews count:</b> {data.reviews}
        </ul>
      </div>
    
  )
};
