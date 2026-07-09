import React from 'react'
import NavBar from './NavBar'

const AddBook = () => {
  return (
    <div>
       <div>
       <div>
        <NavBar/>
      <div classNameName="container" style={{padding:10,margin:50}}>
        <h1 style={{marginBottom:50}}>Add New Book</h1>
        <div className="row g-3 ">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                        <label for="" className="form-label">Book Code</label>
                        <input type="text" className="form-control"></input>

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                        <label for="" className="form-label">Title</label>
                        <input type="text" className="form-control"></input>

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                        <label for="" className="form-label">Author</label>
                        <input type="text" className="form-control"/>

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                        <label for="" className="form-label">Publisher</label>
                        <input type="text" className="form-control"/>

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                        <label for="" className="form-label">Genre</label>
                        <input type="text" className="form-control"/>

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                        <label for="" className="form-label">Edition</label>
                        <input type="number" className="form-control"/>

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                        <label for="" className="form-label">No.of Copies</label>
                        <input type="number" className="form-control"/>

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                        <label for="" className="form-label">Price</label>
                        <input type="number" className="form-control"/>

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                        <label for="" className="form-label">Publication Year</label>
                        <input type="date" className="form-control"/>

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                        <label for="" className="form-label">Shelf Location</label>
                        <input type="text" className="form-control"/>

                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                        <label for="" className="form-label"></label>
                        <button className="btn btn-success">Submit</button>

                    </div>
                </div>
            </div>
    </div>
    </div>
    </div>
  )
}

export default AddBook
