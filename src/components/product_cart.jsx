export default function ProductCart(props){

    console.log(props.name)

    return (
        <div className="h">
            <h1>{props.name}</h1>
            <h1>{props.price}</h1>
        </div>
    )

}