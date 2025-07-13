import { Routes, Route, Link } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import AdminProductsPage from "./admin/products";
import AddProductForm from "./admin/addProduct";

export default function AdminPage(){

    return (
        
        <div className="flex w-full h-screen bg-gray-200 p-2">
                <div className="h-full w-[300px] ">
                    <Link to="/admin/users" className="block p-2 text-blue-800 flex items-center mt-2"><FaUsers className="mr-2"/>Users</Link>
                    <Link to="/admin/products" className="block p-2 text-blue-800 flex items-center mt-2"><AiFillProduct className="mr-2" />Products</Link>
                    <Link to="/admin/orders" className="block p-2 text-blue-800 flex items-center mt-2"><FaShoppingCart className="mr-2"/>Orders</Link>
                </div>
                <div className="rounded-lg w-[calc(100vw-50px)] h-full bg-white">
                    <Routes path="/*">
                        <Route path="/users" element={<h4 >Users Page</h4>} />
                        <Route path="/products" element={<AdminProductsPage/>} />
                        <Route path="/orders" element={<h4 >Orders Page</h4>} />
                        <Route path="/addProduct" element={<AddProductForm />} />
                    </Routes>
                </div>
                
        </div>
    
    )

}