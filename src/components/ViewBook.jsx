import React, { useState } from 'react'
import NavBar from './NavBar'

const ViewBook = () => {

    const [data,changeData] = useState(
        [
            {
                "name":"A Thousand Splendid Sons",
                "avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFj-y0ETnuJR4UZW0C1HKLI5vczwB_BDaMtMl4lBItGQ&s=10",
                "Author":"Khaled Hosseini",
                "price":209

            },
            {
                "name":"Alchemist",
                "avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIV0OsaOwVELOKK4V2xHAzRULJrCRnRPW8Y6Dhyetzyw&s=10",
                "Author":"Paulo Coelho",
                "price":209

            },
            {
                "name":"Harry Porter",
                "avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1DR7P8Icxu5aNfeiXApBekzCY2YjgE-sdjE1T4KIR8Q&s=10",
                "Author":"J K Rowling",
                "price":209

            },
            {
                "name":"A Man Called Ove",
                "avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJuIopukL-U4QIx8TOhSgOw1PvhWIeEYi6bW5NKXFuXw&s=10",
                "Author":"Fredrick Backman",
                "price":209

            },
            {
                "name":"And the Mountains Echoed",
                "avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJuIopukL-U4QIx8TOhSgOw1PvhWIeEYi6bW5NKXFuXw&s=10",
                "Author":"Khaled Hosseini",
                "price":209

            },
            {
                "name":"You are all I need",
                "avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzcFaGdCQnWtDWVO0hyLM17W2oAu6D_f1xt0I0iO2GUA&s=10",
                "Author":"Ravinder Singh",
                "price":209

            },
            {
                "name":"The Silent Widow",
                "avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy7bz9Y8U0FQShShM1vA8pPPq8yt9Z4nXe9iSmBqO99A&s=10",
                "Author":"Sidney Sheldon",
                "price":209

            },
            {
                "name":"Horrors of the Night",
                "avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs5Bc6vrfEP94tUMjx3dTonqTFfhZw5rNQFoWVLMYG9Q&s=10",
                "Author":"Tom Coleman",
                "price":209

            }
        ]
    )

  return (
    <div>
        <NavBar/>
      <div className="container" style={{paddingTop:10,marginTop:30}}><br></br>
        <h1 align="center" style={{marginBottom:50}}> View Book</h1>
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
                    style={{ height: 400 }}
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
