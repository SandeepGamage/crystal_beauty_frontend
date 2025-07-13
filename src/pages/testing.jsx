import { useState } from "react";

export default function Testing(){

    const [number, setNumber] = useState(0); //useState returs a array with 2 things :- number-variable, setNumber-function, 0-initial value of number

    function increament(){
        setNumber(number+1) //setNumber do 2 things. re-render the component and update the value
    }

    function decreament(){
        setNumber(number-1)
    }

    return (
        <div className="w-full h-screen bg-gray-500 flex flex-col justify-center items-center">
            <span className="text-4xl font-bold">{number}</span>
            <div className="w-full mt-10 justify-center flex">
                <button onClick={increament} className="bg-green-500 w-[60px] text-white p-2 rounded-lg mr-3">+</button>
                <button onClick={decreament} className="bg-green-500 w-[60px] text-white p-2 rounded-lg ml-3">-</button>
            </div>
        </div>
    );
}