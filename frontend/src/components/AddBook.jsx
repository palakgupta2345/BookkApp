import React from 'react'
import axios from 'axios'
const AddBook = () => {
    const handlebook=async (e)=>{
        e.preventDefault();
        const title=e.target.title.value;
        const author=e.target.author.value;
        const date=e.target.date.value;
        const image=e.target.image.value;
        const books={title,author,date,image}
        await axios.post('http://localhost:9000/books',books);
        alert('Book Added Successfully')
    }
    return (
      <div className="add-container">
        <h2>Add Book</h2>
        <form onSubmit={handlebook}>
          <label>
            Title: <input type="text" name="title" required />
          </label>
          <label>
            Author: <input type="text" name="author" required />
          </label>
          <label>
            Date: <input type="date" name="date" required />
          </label>
          <label>
            Image: <input type="text" name="image" required />
          </label>
          <button id="btn" type="submit">Add Book</button>
        </form>
      </div>
    );
    
}

export default AddBook