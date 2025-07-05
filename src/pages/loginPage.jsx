// -    not work for loginPage. its must be LoginPage.
export default function LoginPage(){

    return(
        <div className="w-full h-screen bg-[url(/login.jpg)] bg-cover bg-center flex">
            
            <div className="w-[50%] h-full border-green-500 border-[2px]"></div>

            <div className="w-[50%] h-full border-[2px] flex justify-center items-center">
                <div className=" h-[600px] w-[450px] backdrop-blur-xl shadow-xl rounded-4xl flex flex-col justify-center items-center">
                    <h4 className="absolute top-[60px] text-[35px] ">Login</h4>
                    <input type="email" placeholder="Email" className="w-[300px] h-[30px] text-center border dorder-black rounded-[7px] "/>
                    <input type="password" placeholder="Password" className="w-[300px] m-[40px] h-[30px] text-center border dorder-black rounded-[7px] "/>
                    <button className="w-[160px] h-[35px] m-[20px] text-center rounded-[7px] bg-green-500 text-white cursor-pointer">Submit</button>
                </div>
            </div>

        </div>
    )

}