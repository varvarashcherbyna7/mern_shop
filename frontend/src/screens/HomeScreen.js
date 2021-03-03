import React from 'react';
// { useState, useEffect }
import Product from "../components/Product";
import { data } from "../data";
//import axios from "axios";

export default function HomeScreen() {

    // const [ products, setProducts ] = useState([]);
    //
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const { data } = await axios.get('/api/products');
    //         setProducts(data);
    //     }
    //     fetchData();
    // }, [])

    return(
        <div>
            <div className="row center">
                {
                    data.products
                        .map(product => (
                            <Product product={product} key={product._id}/>
                        ))
                }
            </div>
        </div>
    )
}
