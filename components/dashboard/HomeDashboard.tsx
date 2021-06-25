import DailyVisits from "./charts/DailyVisits";

export default function HomeDashboard(){
    const data = [

        {
            firstName:"Ish",
            lastName:"Gervais",
            message:"Problems will you start to solve after this registration",
            date:"04/20/2021"
        },
        {
            firstName:"Ish",
            lastName:"Gervais",
            message:"Problems will you start to solve after this registration",
            date:"04/20/2021"
        },
        {
            firstName:"Ish",
            lastName:"Gervais",
            message:"Problems will you start to solve after this registration",
            date:"04/20/2021"
        },
        {
            firstName:"Ish",
            lastName:"Gervais",
            message:"Problems will you start to solve after this registration",
            date:"04/20/2021"
        }
    ];
return(
<div className="h-1/2">
    <h1 className="font-bold text-dark-500">Dashboard </h1>
    <h1 className="font-bold text-md my-5 text-gray-500 ">Count </h1>
    <div className="lg:flex gap-10 my-5">
        <div className="lg:w-2/3 h-1/2">
            <div className="cards lg:flex gap-10">
                <div className="bg-blue-50 p-10 rounded-lg hover:bg-blue-600 hover:text-white cursor-pointer my-2">
                    posts
                </div>
                <div className="bg-green-50 p-10 rounded-lg hover:bg-green-500 hover:text-white cursor-pointer my-2">
                    posts</div>
                <div className="bg-yellow-50 p-10 rounded-lg hover:bg-yellow-500 hover:text-white cursor-pointer my-2">posts
                </div>
                <div className="bg-red-50 p-10 rounded-lg hover:bg-red-500 hover:text-white cursor-pointer my-2">posts
                </div>

            </div>
            {/* readers chart */}
            <div className="block relative mt-5">
                <h1 className="font-bold text-md text-gray-500">Daily visitors </h1>
                <div className="my-10">
                    <DailyVisits/>
                </div>

            </div>


        </div>
        <div className="lg:w-1/3" style={{height:'500px'}}>
            <h1 className="font-bold my-4 ml-5">Messages </h1>
            <hr />

            {/* message card */}
            <div className="messages--cards overflow-y-auto px-5">
             
             {data?.map((item:any)=>{
                 return(
                    <div className="card rounded p-3 bg-white my-5 border flex gap-3">
                    <div
                        className="rounded-lg p-5 h-1/2 text-center bg-blue-100 text-dark flex items-center font-bold justify-center">
                        GA</div>
                    <div className="content text-sm">
                        <h1 className="text-gray-400 mb-2">{item.firstName} {item.lastName}</h1>
                        <p>{item.message}</p>
                        <h1
                            className="text-gray-400 text-xs mt-4 block float-right">{item.date}</h1>
                    </div>
                </div>
                 )
             })}

               


            </div>
        </div>

    </div>

</div>
)
}