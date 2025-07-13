import axios from "axios"
import { useEffect } from "react";
import { useState } from "react"
import { IoIosAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";

export default function AdminProductsPage(){

    const [products, setProducts] = useState([]);

    useEffect(
    () => {
        // Runs once when the component mounts (empty dependency array [])
        axios.get(import.meta.env.VITE_BACKEND_URL + "/api/product")
            .then((Response) => {
                // Logs the data returned by the server to the console
                console.log(Response.data);
                setProducts(Response.data)
            })
            .catch((err) => {
                // Optional: log errors if the request fails
                console.error("Failed to fetch products", err);
            });
    }, 
    []
);


    return(
        <div className="w-full h-full rounded-lg text-center p-4 relative">

            <div className="mb-4 flex ">
                <Link to="/admin/addProduct" className="text-5xl cursor-pointer hover:text-blue-500 absolute bottom-5 right-5"><IoIosAddCircle /></Link>
            </div>

            <table className="w-full">
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Name</th>
                        <th>Stock</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index} className="border-b-1 cursor-pointer hover:bg-gray-800 hover:text-white">
                            <td>{product.productId}</td>
                            <td>{product.name}</td>
                            <td>{product.stock}</td>
                            <td>${product.price}</td>
                            <td>
                                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
           {/* {
            products.map(
                (product, index) => {
                    console.log("Mapping " + product.productId)
                    
                    return(
                        <div key={index} className="w-full h-[100px] bg-white m-2 rounded-lg flex items-center justify-between p-2">
                            <div className="flex items-center">
                                <img src={product.imageUrl} alt={product.name} className="w-[80px] h-[80px] object-cover rounded-lg" />
                                <div className="ml-2">
                                    <h3 className="text-lg font-semibold">{product.name}</h3>
                                    <p className="text-sm text-gray-600">{product.description}</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <span className="text-lg font-semibold">${product.price}</span>
                                <button className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-lg">Edit</button>
                            </div>
                        </div>
                    )

                }
            )
           } */}

        </div>
    )
}