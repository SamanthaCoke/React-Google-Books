import React, { Component } from 'react';
import axios from 'axios';
let arr =[1, 2, 3, 4];
class Save extends Component {
  state ={
    books:[]

  }

  componentDidMount() {

      this.getBooks();
    
  }
  getBooks = () => {
    console.log("search", this.state.searchInput);
    axios
    .get('/api/books')
    .then((resp) => {
      console.log(resp)
        let books = resp.data; 
      
        this.setState({
            books: books
        })
    })
  }

handleDelete = (id) => {
  axios
    .delete(`/api/books/${id}`)
    .then((resp) => {
      console.log(resp)
        let books = resp.data; 
      this.getBooks();
    })
}

  render() {

  
    return (
        <div className="App">
        <h1>Google React Book Search Page</h1>
        {/** create container for search */}
       <div className="container">
         <div className="row">
           <div className="col-12" style={{border: '1px solid black'}}>
             <h2>These are the saved books</h2>
             
           </div>
         </div>
       </div>
       <br/>
     {/** create container for list of return books from search */}
     {this.state.books.map((book) => {
       return (
         <div className="container" key={book._id}>
         <div className="row">
           <div className="col-12" style={{border: '1px solid black', 'textAlign': 'left'}}>
       <h2>Book title - {book.title}</h2>
             <hr/>
       <h3>{book.authors}</h3>
       <p>{book.description}</p>

             <div className="text-right p-2">
             <a id="view" className="btn btn-primary m-2" href={book.link}>View</a>
               <button id="delete" className="btn btn-primary" onClick={() => this.handleDelete(book._id)}>Delete</button>
             </div>
           </div>
         </div>
       </div>
       )
     })}
     
     </div>
    )

    }

}

export default Save;