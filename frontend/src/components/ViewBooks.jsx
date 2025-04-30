import React, { useEffect, useState } from 'react'
import axios from 'axios'
const ViewBook = () => {
  const [books, setBooks] = useState([]);
  useEffect(()=>{
    handleview();
  },[])
  const handleview = async () => {
    try {
      const res = await axios.get('http://localhost:9000/books');
      setBooks(res.data);
    }
    catch (err) {
      console.log(err)
    }
  }
  
  return (
    <div className="view-container">
      <h2>View Book Details</h2>
      <div style={{display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center'}}>
        {books.map((book) => (
          <div className="book-card" key={book._id}>
            <img src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
            <h2>{book.author}</h2>
            <h2>{book.date}</h2>
          </div>
        ))}
      </div>
    </div>
  );
  
     
}

export default ViewBook