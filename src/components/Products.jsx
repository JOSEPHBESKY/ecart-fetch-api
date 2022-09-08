import React, { useState, useEffect } from 'react';
import skeleton from'react-loading-skeleton'
function Products() {
    const [data, setdata] = useState([])
    const [filter, setfilter] = useState(data)
    const [loading, setloading] = useState(false)
    const componentmound = true;
    useEffect(() => {
        const getproducts = async () => {
            setloading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentmound) {
                setdata(await response.clone().json())
                setfilter(await response.json())
                setloading(false)
            }
            return () => {
                componentmound = false
            }
        }
        getproducts();
    }, []);
    const Loading = () => {
        return (
            <>
           <div className='col-md-3'>
           <skeleton height={350} />
           </div>
           <div className='col-md-3'>
           <skeleton height={350} />
           </div>
           <div className='col-md-3'>
           <skeleton height={350} />
           </div>
           <div className='col-md-3'>
           <skeleton height={350} />
           </div>
            </>
        )
    } 
    const filterproducts=(e)=>{
        const updatelist=data.filter((x)=>x.category===e)
        setfilter(updatelist)
    }
    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2" onClick={()=>setfilter(data)}>All</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=>filterproducts("men's clothing")}>Men's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=>filterproducts("women's clothing")}>Women's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=>filterproducts("electronics")}>Electronics</button>
                </div>
                {
                    filter.map((Products) => {
                        return (
                            <>
                                <div className="col-md-3">
                                    <div class="card h-100 text-center p-4 key={Products.id}">
                                        <img src={Products.image} class="card-img-top" alt="Products.title" />
                                        <div class="card-body">
                                            <h5 class="card-title mb-0">{Products.title.substring(0,12)}</h5>
                                            <p class="card-text lead fw-bold">${Products.price}</p>
                                            <a href="#" class="btn btn-primary">buy now</a>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </>
        )
    }
    return (
        <div>
            <div className='container my-5 py-5'>
                <div className='row'>
                    <div className='col-12 mb-5'>
                        <h1 className='display-6 fw-bolder text-center'>LATEST PRODUCTS</h1><hr />
                    </div>
                </div>
                <div className='row justify-content-center'>{
                    loading ? <Loading /> : <ShowProducts />
                }
                </div>
            </div>
        </div>
    )
}

export default Products