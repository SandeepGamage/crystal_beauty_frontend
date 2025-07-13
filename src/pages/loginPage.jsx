import { useState } from "react"
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

// -    not work for loginPage. its must be LoginPage.
export default function LoginPage(){

    const[email,setEmail] = useState("");
    const[password,setPassWord] = useState("");
    const navigate = useNavigate(); //returns a function

    function handleLogin(){
        console.log(email)
        console.log(password)

        axios.post(import.meta.env.VITE_BACKEND_URL+"/api/user/login", {
            email : email,
            password : password
        }).then(
            (response) => {
                console.log("login Success", response.data);
                toast.success("Login Success!✅");
                localStorage.setItem("token",response.data.token)

                const user = response.data.user;

                if(user.role == "admin"){
                   navigate("/admin");
                }else{
                    navigate("/");
                }
                
            }
        ).catch(
            (error) => {
                console.log("Login failed" , error.response.data);
                toast.error(error.response.data.message || "Login Failed❌");
            }
        )

    }

    return(
        <div className="w-full h-screen bg-[url(/login.jpg)] bg-cover bg-center flex">
            <div className="w-[50%] h-full flex justify-center items-center flex-col">
                
                <p className="text-[40px]">Welcome back to Crystal Beauty.</p> 
                <p>Please use your email and password to login.</p>
            </div>

            <div className="w-[50%] h-full flex justify-center items-center">
                <div className=" h-[600px] w-[450px] backdrop-blur-xl shadow-xl rounded-4xl flex flex-col justify-center items-center">
                    <h4 className="absolute top-[60px] text-[35px] font-bold ">Login</h4>
                    <input onChange={
                        (e) => {
                            setEmail(e.target.value);
                        }
                     } type="email" placeholder="Email" className="w-[300px] h-[30px] text-center border dorder-black rounded-[7px] "/>
                    <input onChange = {
                        (e) => {
                            setPassWord(e.target.value);
                        }
                    }type="password" placeholder="Password" className="w-[300px] m-[40px] h-[30px] text-center border dorder-black rounded-[7px] "/>
                    <button onClick={handleLogin} className="w-[160px] h-[35px] m-[20px] text-center rounded-[7px] bg-green-500 text-white cursor-pointer">Submit</button>
                    <button className="w-[160px] h-[35px] m-[5px] text-center rounded-[7px] bg-blue-500 text-white cursor-pointer">or Register Here</button>
                </div>
            </div>

        </div>
    )

}