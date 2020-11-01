import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Axios from "axios";
import { Link } from "react-router-dom";
function Brand({ history }) {
       const [Test, setTest] = useState(false)
       const [Items, setItems] = useState([]);
       const splittedBrandname = history.location.search.split("=")[1]
       console.log(splittedBrandname);
       useEffect(() => {
              Axios.get(`/product?bname=${splittedBrandname}`)
                     .then(res => {
                            console.log(res.data);
                            setItems(res.data);

                            console.log(res.data.sort())
                     }).catch(err => { console.log(err) })
       }, [splittedBrandname]);

       const sortByPriceLtoH = (items) => {
              const sortedArray = items.sort((a, b) => {
                     let price1 = Number(a.price)
                     let price2 = Number(b.price)
                     let comparison = 0;
                     if (price1 > price2) {
                            comparison = 1
                     }
                     else if (price2 > price1) {
                            comparison = -1
                     }
                     return comparison
              });
              console.log(sortedArray);
              setItems(sortedArray)
              setTest(true)
       }
       const sortByPriceHtoL = (items) => {
              const sortedArray = items.sort((a, b) => {
                     let price1 = Number(a.price)
                     let price2 = Number(b.price)
                     let comparison = 0;
                     if (price1 > price2) {
                            comparison = -1
                     }
                     else if (price2 > price1) {
                            comparison = 1
                     }
                     return comparison
              });
              console.log(sortedArray);
              setItems(sortedArray)
              setTest(false)
       }
       return (
              <div className="container-fluid" >
                     <Navbar />
                     <div className="container">
                            <div className="row d-flex d-flex align-items-center justify-content-center" style={{ marginTop: "20vh" }}>
                                   {splittedBrandname.toLowerCase() === 'all' ? <div style={{ color: "white", padding: "10px 30px", borderRadius: "9px" }} className="d-flex d-flex align-items-center justify-content-center bg-dark mb-5 "><h1 >Make your move memorable.</h1>  </div> :




                                          <div>
                                                 <div className="col-12 d-flex align-items-center justify-content-center ">
                                                        <img src={splittedBrandname.toLowerCase() === "nike" ? "https://seeklogo.com/images/A/air-jordan-logo-66B3A1FAAF-seeklogo.com.png" : splittedBrandname.toLowerCase() === "adidas" ? "https://cdn.psdrepo.com/images/2x/adidas-yeezy-vector-free-psd-t3.jpg" : splittedBrandname.toLowerCase() === "converse" ? "https://hyperpix.net/wp-content/uploads/2020/05/converse-logo-font-free-download.jpg" : null} alt="..." className="img-fluid" />
                                                 </div>
                                                 <div className="col-12 p-5 text-center">

                                                        {splittedBrandname.toLowerCase() === "nike" ? <p>Air Jordan (sometimes abbreviated AJ) is a brand of basketball shoes, athletic, casual, and style clothing produced by Nike. It was created for former NBA player and six-time NBA Finals MVP Michael Jordan. The original Air Jordan sneakers were produced exclusively for Michael Jordan in early 1984, and released to the public in late 1984. The shoes were designed for Nike by Peter Moore, Tinker Hatfield, and Bruce Kilgore. </p>
                                                               : splittedBrandname.toLowerCase() === "converse" ? <p>Converse /ˈkɒnvərs/ is an American shoe company that designs, distributes, and licenses sneakers, skating shoes, lifestyle brand footwear, apparel, and accessories. Founded in 1908, it has been a subsidiary of Nike, Inc. since 2003.

                                                               During World War II, Converse shifted its manufacturing to make footwear for the military. It was one of the few producers of athletic shoes and for over a half century the company dominated the American court shoe market. From the 1970s, the company lost its dominant position as competitors presented their own styles.

                                                               Today the company's portfolio include products under the Converse, Cons, Chuck Taylor All-Star, Jack Purcell, One Star, and Star Chevron trademarks. Converse also frequently collaborates on special edition product releases with other brands such as John Varvatos. Converse shoes are distinguished by a number of features, including the company's star insignia, the All Star's rubber sole, smooth rounded toe, and wrap-around strip.

As of 2019, Converse sold products through 109 company-owned retail stores in the United States and 63 stores in international markets. Converse employees are counted among the 76,700 employees of Nike Inc. worldwide.</p> : splittedBrandname.toLowerCase() === "adidas" ? <p>Adidas AG  stylized as ɑdidɑs since 1949 is a German multinational corporation, founded and headquartered in Herzogenaurach, Germany, that designs and manufactures shoes, clothing and accessories. It is the largest sportswear manufacturer in Europe, and the second largest in the world, after Nike. It is the holding company for the Adidas Group, which consists of the Reebok sportswear company, 8.33% of the German football club Bayern München, and Runtastic, an Austrian fitness technology company. Adidas' revenue for 2018 was listed at €21.915 billion.

                                                                      The company was started by Adolf Dassler in his mother's house; he was joined by his elder brother Rudolf in 1924 under the name Dassler Brothers Shoe Factory. Dassler assisted in the development of spiked running shoes  for multiple athletic events. To enhance the quality of spiked athletic footwear, he transitioned from a previous model of heavy metal spikes to utilising canvas and rubber. Dassler persuaded U.S. sprinter Jesse Owens to use his handmade spikes at the 1936 Summer Olympics. In 1949, following a breakdown in the relationship between the brothers, Adolf created Adidas, and Rudolf established Puma, which became Adidas' business rival.

Adidas' logo is three stripes, which is used on the company's clothing and shoe designs as a marketing aid. The branding, which Adidas bought in 1952 from Finnish sports company Karhu Sports for the equivalent of 1600 euros and two bottles of whiskey, became so successful that Dassler described Adidas as "The three stripes company". </p> : null
                                                        }

                                                 </div>

                                          </div>



                                   }

                            </div>
                            <div className="row" >
                                   <div className="col-12 d-flex flex-row justify-content-between align-items-center">
                                          <div></div>
                                          <div> {Test ? null : null} </div>
                                          <div className="btn-group my-5">
                                                 <button className="btn btn-outline-info px-5">Sort</button>
                                                 <button className="btn btn-outline-info dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
                                                        <span className="sr-only">Toggle Dropdown</span>
                                                 </button>
                                                 <div className="btn group-vertical dropdown-menu">
                                                        <button className="btn btn-outline-dark dropdown-item" onClick={() => sortByPriceLtoH(Items)}>Price low to high</button>
                                                        <button className="btn btn-outline-dark dropdown-item" onClick={() => sortByPriceHtoL(Items)}>Price high to low</button>
                                                 </div>
                                          </div>
                                   </div>
                                   {Items.map((product) => (<div className="brand-card card col-lg-3 col-md-4 col-sm-6" key={product._id}>
                                          <img className="card-img-top" alt="..." src={product.imageURL[0].IMG_URL} />
                                          <div className="card-body">
                                                 <strong><p className="card-text"> {product.name} </p></strong>
                                                 <p className="mt-3">Price</p>
                                                 <p className="font-weight-lighter mt-0">$ {product.price} </p>
                                                 <Link to={`/product?id=${product._id}`} ><button className="btn btn-outline-dark">Buy</button></Link>
                                          </div>
                                   </div>))}
                            </div>
                     </div>
              </div>
       )
}

export default Brand
