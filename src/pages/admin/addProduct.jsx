// productId : {
//         type : String,
//         unique : true,
//         required : true
//     },

import { Link } from "react-router-dom";

//     name : {
//         type : String,
//         required : true,
//     },

//     altNames : {
//         type : [String],
//         default : []
//     },

//     price : {
//         type : Number,
//         required : true
//     },

//     labeledPrice : {
//         type : Number,
//         required : true
//     },

//     description : {
//         type : String,
//         required : true
//     },

//     images : {
//         type : [String],
//         default : ["https://www.mon-site-bug.fr/uploads/products/default-product.png"]
//     },

//     stock : {
//         type : Number,
//         required : true
//     }

export default function AddProductForm(){
    return(
        <div className="w-full h-full rounded-lg text-center p-4 bg-gray-300 rounded-lg flex justify-center items-center">
            <div className="w-[600px] h-[700px] bg-white p-4 rounded-lg shadow-md">
                <input type="text" placeholder="Product ID" className="w-full h-[40px] mb-4 p-2 border border-gray-300 rounded-lg" />
                <input type="text" placeholder="Product Name" className="w-full h-[40px] mb-4 p-2 border border-gray-300 rounded-lg" />
                <input type="text" placeholder="Alt Names (comma separated)" className="w-full h-[40px] mb-4 p-2 border border-gray-300 rounded-lg" />
                <input type="text" placeholder="Price" className="w-full h-[40px] mb-4 p-2 border border-gray-300 rounded-lg" />
                <input type="text" placeholder="Labeled Price" className="w-full h-[40px] mb-4 p-2 border border-gray-300 rounded-lg" />
                <textarea placeholder="Description" className="w-full h-[100px] mb-4 p-2 border border-gray-300 rounded-lg"></textarea>
                <input type="text" placeholder="Image URL" className="w-full h-[40px] mb-4 p-2 border border-gray-300 rounded-lg" />
                <input type="number" placeholder="Stock" className="w-full h-[40px] mb-4 p-2 border border-gray-300 rounded-lg" />

                <div className="flex justify-between mt-4"> 
                <Link to="/admin/products" className="w-[200px] h-[40px] bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center ml-[50px]">
                    Submit
                </Link>
                <Link to="/admin/products" className="w-[200px] ml-[10px] h-[40px] bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center justify-center mr-[50px]">
                    Cancel
                </Link>
                </div>

            </div>
        </div>
    )
}