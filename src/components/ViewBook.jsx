import React, { useState } from 'react'
import NavBar from './NavBar'

const ViewBook = () => {

    const [data,changeData] = useState(
        [
            {
                "name":"And the Mountains Echoed",
                "avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJuIopukL-U4QIx8TOhSgOw1PvhWIeEYi6bW5NKXFuXw&s=10",
                "Author":"Khaled Hosseini",
                "price":209

            },
            {
                "name":"And the Mountains Echoed",
                "avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJuIopukL-U4QIx8TOhSgOw1PvhWIeEYi6bW5NKXFuXw&s=10",
                "Author":"Khaled Hosseini",
                "price":209

            },
            {
                "name":"And the Mountains Echoed",
                "avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJuIopukL-U4QIx8TOhSgOw1PvhWIeEYi6bW5NKXFuXw&s=10",
                "Author":"Khaled Hosseini",
                "price":209

            },
            {
                "name":"And the Mountains Echoed",
                "avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJuIopukL-U4QIx8TOhSgOw1PvhWIeEYi6bW5NKXFuXw&s=10",
                "Author":"Khaled Hosseini",
                "price":209

            },
            {
                "name":"And the Mountains Echoed",
                "avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJuIopukL-U4QIx8TOhSgOw1PvhWIeEYi6bW5NKXFuXw&s=10",
                "Author":"Khaled Hosseini",
                "price":209

            },
            {
                "name":"And the Mountains Echoed",
                "avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJuIopukL-U4QIx8TOhSgOw1PvhWIeEYi6bW5NKXFuXw&s=10",
                "Author":"Khaled Hosseini",
                "price":209

            },
            {
                "name":"And the Mountains Echoed",
                "avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJuIopukL-U4QIx8TOhSgOw1PvhWIeEYi6bW5NKXFuXw&s=10",
                "Author":"Khaled Hosseini",
                "price":209

            },
            {
                "name":"And the Mountains Echoed",
                "avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJuIopukL-U4QIx8TOhSgOw1PvhWIeEYi6bW5NKXFuXw&s=10",
                "Author":"Khaled Hosseini",
                "price":209

            }
        ]
    )

  return (
    <div>
        <NavBar/>
      <div className="container" style={{padding:10,margin:50}}>
        <h1 style={{marginBottom:50}}> View Book</h1>
        <div className="row g-3">

            {data.map((value, index) => {
    return (
        <div
            
            className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3"
        >
            <div className="card">
                <img
                    src={value.avatar}
                    className="card-img-top"
                    alt={value.name}
                    style={{ height: 300 }}
                />

                <div className="card-body">
                    <h5 className="card-title">{value.name}</h5>
                    <h6 className="card-title">{value.Author}</h6>
                    <p className="card-text">₹ {value.price}</p>
                    <a href="#" className="btn btn-primary">
                        Add to Cart
                    </a>
                </div>
            </div>
        </div>
    );
})}
           
            


            
        </div>
      </div>
    </div>
  )
}

export default ViewBook
