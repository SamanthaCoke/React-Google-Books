import React from 'react';
let arr =[1, 2, 3, 4];
function Save() {


    return (
        <div classNameName="App">
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
     {arr.map((el, index) => {
       return (
         <div className="container" key={index}>
         <div className="row">
           <div className="col-12" style={{border: '1px solid black', 'textAlign': 'left'}}>
       <h2>Book title - {el}</h2>
             <hr/>
             <h3>Book Author</h3>
             <p>book description</p>

             <div className="text-right p-2">
               <button id="view" className="btn btn-primary m-2">View</button>
               <button id="delete" className="btn btn-primary">Delete</button>
             </div>
           </div>
         </div>
       </div>
       )
     })}
     
     </div>
    )
}

export default Save;