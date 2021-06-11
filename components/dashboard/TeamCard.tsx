export default function TeamCard(props:any){
    return(
        <div className="card bg-white w-full min-h-60">
                        <img src="/obama.jpg" className="h-60 object-cover" alt="" />
                        <div className="block -center my-5 p-5">
                            <h1 className="text-md">{props.names}</h1>
                            <span className="text-sm text-gray-500">{props.role}</span>
                        </div>
                    </div>
    )
}