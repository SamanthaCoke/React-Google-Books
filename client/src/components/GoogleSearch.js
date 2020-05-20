import React, {Component} from 'react';
import axios from 'axios';
let arr = [1,2,3,4,5];
class GoogleSearch extends Component {
    state = {
        searchInput: "",
        books: []
    }

    handleChange = ({target})=> {
        let {name, value} = target; 
        this.setState({
            [name]: value
        })
    }

    handleSearch = () => {
        console.log("search", this.state.searchInput);
        axios
        .get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchInput}&key=AIzaSyBllQ8FHqf2E5jKSVOcIXMXpIzKqvKMMjk`)
        .then((resp) => {
            let books = resp.data.items; 
            this.setState({
                books: books
            })
        })
    }

    handleSave = (book) => {
        let title = book.title; 
        let description = book.description;
        let image = book.imageLinks.thumbnail;
        let link = book.infoLink;
        let authors = book.authors.join(", ");
        let bookToSave = {
            title, 
            description, 
            image, 
            link, 
            authors
        }
        console.log("saving this book", bookToSave)
        axios.post('/api/books', bookToSave)
        .then(res => {
          console.log("was created", res.data)
        })
        .catch(err => {
          console.log("massive failure", err)
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
             <h2>Google search</h2>
             <input type="text" 
             className="form-control" 
             name="searchInput" 
             value={this.state.searchInput} 
             onChange={this.handleChange}
             />
             <div className="text-right p-2">
               <button id="search" className="btn btn-primary" onClick={this.handleSearch}>search</button>
             </div>
           </div>
         </div>
       </div>
       <br/>
     {/** create container for list of return books from search */}
     {this.state.books.map((book, index) => {
        book = book.volumeInfo;
       return (
         <div className="container" key={index}>
         <div className="row">
           <div className="col-12" style={{border: '1px solid black', 'textAlign': 'left'}}>
       <h2>Book title - {book.title}</h2>
             <hr/>
       <h3>{book.authors}</h3>
       <p>{book.description}</p>

             <div className="text-right p-2">
               <a id="view" className="btn btn-primary m-2" href={book.infoLink}>View</a>
               <button id="save" className="btn btn-primary" onClick={() => this.handleSave(book)}>Save</button>
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

export default GoogleSearch;