export default function ProductCart(props){

    console.log(props.name)

    return (
        <div className='bg-green-500'>
            <h1>{props.name}</h1>
            <h1>{props.price}</h1>
        </div>
    )

}