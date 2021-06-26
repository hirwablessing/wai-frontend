import { useEffect, useState } from "react"
import { icons } from "../../../utils/icons"
import parse from 'html-react-parser'
import { Messages } from "../../../pages/api/services/Messages"

export default function Message() {



    const [search, setSearch] = useState('')
    const [responseData, setResponseData] = useState([])
    const [respData, setRespData] = useState([])

    // deleting modal
    const [deleteOpenModal, setdeleteOpenModal] = useState(false);


    // searching module
    const services = new Messages();
    useEffect(() => {

        const response_messages = async() => {
            let messages_data = await services.getMessages();
            setRespData(messages_data.data); 
            console.log(messages_data)
        }

        response_messages()

        const filter = new RegExp(search, 'i')

        let filteredData: any = respData?.filter((item: any) => {
            return item?.names.match(filter)
        })
        
        setResponseData(filteredData)
        
    }, [respData,search])




    return (
        <div className="main--body p-5 lg:p-10 my-5 bg-white">
            <h1 className="font-bold">Inbox / View messages</h1>




        {/* deleting the category modal here */}
        <div className={deleteOpenModal?"block modal":"hidden modal"}>
        <div className="modal-content my-5 bg-white m-auto w-full lg:w-1/3 p-5 shadow rounded">
      
            <>
            <h1 className="text-dark text-center">
                Do you want to delete this category?
                <br />
                <span className="font-bold text-sm">

                </span>
            </h1>
      
            </>

             </div>
    </div>

            <div className="">

                <div className="bg-white w-full text-sm rounded">
                    <div>
                        <div className="bg-white rounded-lg mt-3 p-5">
                            <div className="w-full">
                                <div className="form-group flex gap-5 items-center">
                                    <div className="w-1/2">
                                        Showing
                                        <select name="" id="" className="mx-3 focus:outline-none">
                                            <option value="">5</option>
                                            <option value="">10</option>
                                            <option value="">20</option>
                                        </select>
                                    </div>
                                    <div className="lg:w-1/2 lg:flex justify-end gap-5">
                                        <input type="text" onChange={(e) => { setSearch(e.target.value) }} name=""
                                            id="" className="my-5 lg:my-0 border px-3 py-2 focus:outline-none
                                    focus:ring-1 focus:border-none focus:ring-blue-500" placeholder="Search ..."
                                        />
                                        {/*
                                    <Link to="/payment/add-names"
                                        className="btn bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600">
                                    Add payment names</Link> */}

                                    </div>
                                </div>
                            </div>
                            <div className="overflow-x-auto">
                                <div className="table responsive--box md:responsive--box lg:w-full my-3 ">
                                    <table className="table w-full table--recent-activities">
                                        <thead className="text-darkdarkBlue font-bold">
                                            <tr>
                                                <td><input type="checkbox" name="" id="" /></td>
                                                <td className="px-5">#</td>
                                                <td>Names</td>
                                                <td>Email</td>
                                                <td>Message</td>
                                                <td>Date</td>
                                                <td>Action</td>
                                            </tr>
                                        </thead>
                                        <tbody className="my-3">
                                            {responseData?.map((item: any, i: number) => {
                                                return (<tr key={i}>
                                                    <td><input type="checkbox" name="" id="" /></td>
                                                    <td className="px-5">{i + 1}</td>
                                                    <td>{item.names}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.cn_message}</td>
                                                    <td>{item.createdAt}</td>
                                                    <td>
                                                        <div className="flex gap-5">
                                                            {parse('' + icons.editPayroll + '')}

                                                            <span onClick={()=>setdeleteOpenModal(true)}>
                                                            {parse('' + icons.outlineTrash + '')}
                                                            </span>
                                                        </div>
                                                    </td>
                                                </tr>)
                                            })}

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}


