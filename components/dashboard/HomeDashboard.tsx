export default function HomeDashboard(){
return(
<div className="h-1/2">
    <h1 className="font-bold text-xl text-gray-500">Dashboard </h1>
    <h1 className="font-bold text-md my-5 text-gray-500 ">Count </h1>
    <div className="lg:flex gap-10 my-5">
        <div className="lg:w-2/3 h-1/2">
            <div className="cards lg:flex gap-10">
                <div className="bg-yellow-50 p-10 rounded-lg hover:bg-yellow-500 hover:text-white cursor-pointer my-2">
                    posts
                </div>
                <div className="bg-green-50 p-10 rounded-lg hover:bg-green-500 hover:text-white cursor-pointer my-2">
                    posts</div>
                <div className="bg-blue-50 p-10 rounded-lg hover:bg-blue-500 hover:text-white cursor-pointer my-2">posts
                </div>
                <div className="bg-red-50 p-10 rounded-lg hover:bg-red-500 hover:text-white cursor-pointer my-2">posts
                </div>

            </div>
            {/* readers chart */}
            <div className="block relative mt-5">
                <h1 className="font-bold text-md text-gray-500">Daily visitors </h1>

            </div>


        </div>
        <div className="lg:w-1/3" style={{height:'500px'}}>
            <h1 className="font-bold text-xl my-4 ml-5">Messages </h1>
            <hr />
            <div className="messages--cards overflow-y-auto px-5">
                <div className="card rounded p-5 bg-white my-5 border flex gap-5">
                    <div
                        className="rounded-lg p-5 h-1/2 text-center bg-yellow-100 text-dark flex items-center font-bold justify-center">
                        GA</div>
                    <div className="content text-sm">problems will you start to solve after this registration <h1
                            className="text-gray-400 text-sm mt-4 block float-right">04/20/2021</h1>
                    </div>
                </div>
                <div className="card rounded p-5 bg-white my-5 border flex gap-5">
                    <div
                        className="rounded-lg p-5 h-1/2 text-center bg-yellow-100 text-dark flex items-center font-bold justify-center">
                        GA</div>
                    <div className="content text-sm">problems will you start to solve after this registration <h1
                            className="text-gray-400 text-sm mt-4 block float-right">04/20/2021</h1>
                    </div>
                </div>
                <div className="card rounded p-5 bg-white my-5 border flex gap-5">
                    <div
                        className="rounded-lg p-5 h-1/2 text-center bg-yellow-100 text-dark flex items-center font-bold justify-center">
                        GA</div>
                    <div className="content text-sm">problems will you start to solve after this registration <h1
                            className="text-gray-400 text-sm mt-4 block float-right">04/20/2021</h1>
                    </div>
                </div>
                <div className="card rounded p-5 bg-white my-5 border flex gap-5">
                    <div
                        className="rounded-lg p-5 h-1/2 text-center bg-yellow-100 text-dark flex items-center font-bold justify-center">
                        GA</div>
                    <div className="content text-sm">problems will you start to solve after this registration <h1
                            className="text-gray-400 text-sm mt-4 block float-right">04/20/2021</h1>
                    </div>
                </div>
                <div className="card rounded p-5 bg-white my-5 border flex gap-5">
                    <div
                        className="rounded-lg p-5 h-1/2 text-center bg-yellow-100 text-dark flex items-center font-bold justify-center">
                        GA</div>
                    <div className="content text-sm">problems will you start to solve after this registration <h1
                            className="text-gray-400 text-sm mt-4 block float-right">04/20/2021</h1>
                    </div>
                </div>
                <div className="card rounded p-5 bg-white my-5 border flex gap-5">
                    <div
                        className="rounded-lg p-5 h-1/2 text-center bg-yellow-100 text-dark flex items-center font-bold justify-center">
                        GA</div>
                    <div className="content text-sm">problems will you start to solve after this registration <h1
                            className="text-gray-400 text-sm mt-4 block float-right">04/20/2021</h1>
                    </div>
                </div>
                <div className="card rounded p-5 bg-white my-5 border flex gap-5">
                    <div
                        className="rounded-lg p-5 h-1/2 text-center bg-yellow-100 text-dark flex items-center font-bold justify-center">
                        GA</div>
                    <div className="content text-sm">problems will you start to solve after this registration <h1
                            className="text-gray-400 text-sm mt-4 block float-right">04/20/2021</h1>
                    </div>
                </div>
                <div className="card rounded p-5 bg-white my-5 border flex gap-5">
                    <div
                        className="rounded-lg p-5 h-1/2 text-center bg-yellow-100 text-dark flex items-center font-bold justify-center">
                        GA</div>
                    <div className="content text-sm">problems will you start to solve after this registration <h1
                            className="text-gray-400 text-sm mt-4 block float-right">04/20/2021</h1>
                    </div>
                </div>
                <div className="card rounded p-5 bg-white my-5 border flex gap-5">
                    <div
                        className="rounded-lg p-5 h-1/2 text-center bg-yellow-100 text-dark flex items-center font-bold justify-center">
                        GA</div>
                    <div className="content text-sm">problems will you start to solve after this registration <h1
                            className="text-gray-400 text-sm mt-4 block float-right">04/20/2021</h1>
                    </div>
                </div>
                <div className="card rounded p-5 bg-white my-5 border flex gap-5">
                    <div
                        className="rounded-lg p-5 h-1/2 text-center bg-yellow-100 text-dark flex items-center font-bold justify-center">
                        GA</div>
                    <div className="content text-sm">problems will you start to solve after this registration <h1
                            className="text-gray-400 text-sm mt-4 block float-right">04/20/2021</h1>
                    </div>
                </div>
            </div>
        </div>

    </div>

</div>
)
}