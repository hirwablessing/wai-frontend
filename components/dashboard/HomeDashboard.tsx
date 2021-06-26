import Link from "next/link";
import { useEffect, useState } from "react";
import { Messages } from "../../pages/api/services/Messages";
import DailyVisits from "./charts/DailyVisits";
// skeleton loader
import Skeleton from "react-loading-skeleton";

export default function HomeDashboard() {
    const [messages, setMessages] = useState([])
    const [skelLoading, setSkelLoading] = useState(true);


    // format date

    function formatDate(date: string) {
        let newDate = date.split('T');
        return newDate[0] + ' ' + (newDate[1].split('.'))[0]
    }

    // instanste of messages class
    const messagesApi = new Messages();
    useEffect(() => {
        const response_messages = async () => {
            let messages_data = await messagesApi.getMessages();
            setMessages(messages_data.data);
            setSkelLoading(false)
            // console.log(messages)
        }
        response_messages();
    }, [messages])



    return (
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
                            <DailyVisits />
                        </div>

                    </div>


                </div>
                <div className="lg:w-1/3" style={{ height: '500px' }}>
                    <h1 className="font-bold my-4 ml-5">Messages </h1>
                    <hr />

                    {/* message card */}
                    <div className="messages--cards overflow-y-auto">


                        {skelLoading ?
                        <>
                        <div className="my-4">
                        <Skeleton height={20} width={'50%'} />
                        
                        <Skeleton height={30} width={'100%'} />
                        <Skeleton height={20} width={'20%'} />

                        </div>
                        <div className="my-4">
                        <Skeleton height={20} width={'50%'} />
                        
                        <Skeleton height={30} width={'100%'} />
                        <Skeleton height={20} width={'20%'} />

                        </div>
                        <div className="my-4">
                        <Skeleton height={20} width={'50%'} />
                        
                        <Skeleton height={30} width={'100%'} />
                        <Skeleton height={20} width={'20%'} />

                        </div>
                        <div className="my-4">
                        <Skeleton height={20} width={'50%'} />
                        
                        <Skeleton height={30} width={'100%'} />
                        <Skeleton height={20} width={'20%'} />

                        </div>
                        </>
                        :
                        <>
                        {messages?.map((item: any) => {
                            return (
                                <div className="card rounded p-3 bg-white my-5 border flex gap-3">
                                    {/* {skelLoading
                                        ? <div
                                        className="rounded-lg p-4 h-1/2">
                                            <Skeleton height={40} width={'100%'} />
                                            </div>
                                       

                                        : <div
                                            className="rounded-lg p-4 h-1/2 text-center bg-blue-100 text-dark flex items-center font-bold justify-center">
                                            {(item.names)[0]}{(item.names)[1]}</div>
                                    } */}
                                    <div className="content text-sm">
                                        <div className="block w-full">
                                            <h1 className="text-gray-400 mb-2">{item.names}</h1>
                                            <p>{item.cn_message}</p>
                                        </div>
                                        <div className="block w-full mt-2">
                                            <h1
                                                className="text-gray-400 text-xs">{formatDate(item?.createdAt)}</h1>
                                        </div>

                                    </div>
                                </div>
                            )
                        })}

                        </>


                    }
                    </div>
                    <div className="w-full flex justify-center">
                        <Link href="/panel/inbox">
                            <a className="text-blue-500 text-center w-full hover:underline">View more</a>
                        </Link></div>

                </div>

            </div>

        </div>
    )
}