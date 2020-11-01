import Axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function Search() {
       const [SearchQuery, setSearchQuery] = useState("");
       const [SearchResultArray, setSearchResultArray] = useState([]);
       const handleFetching = e => {
              setSearchQuery(e.target.value);
              SearchQuery !== "" ? Axios.get(`/search?name=${SearchQuery}`).then(res => { setSearchResultArray(res.data) }).catch(err => { console.log(err) }) : setSearchResultArray([])

       }
       const handleGoingtoProductProfile = (id) => {
              //console.log(id);
       }

       return (
              <div className="container" style={{ minHeight: "100vh" }}>
                     <Navbar />
                     <div className="row mt-5">
                            <div className="col-12 mt-5"><input value={SearchQuery} onChange={handleFetching} className="form-control rounded-pill" type="text" placeholder="Search for the sneakers that you are looking for.."></input></div>
                            {SearchResultArray.map(product => (<Link to={`/product?id=${product._id}`}><div onClick={handleGoingtoProductProfile(product._id)} className="col-12 d-flex flex-row justify-content-between align-items-center mt-5 " key={product._id}>
                                   <img style={{ maxHeight: "100%", maxWidth: "21%" }} src={product.imageURL[0].IMG_URL} />

                                   <p>{product.name}</p>



                            </div></Link>))}
                     </div>

              </div>
       )
}

export default Search
