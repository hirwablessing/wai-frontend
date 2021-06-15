import { useEffect, useState } from "react"
import { icons } from "../../../utils/icons"
import parse from 'html-react-parser'
import { UserServices } from "../../../pages/api/services/UserServices"

export default function Members() {



    const [search, setSearch] = useState('')
    const [responseData, setResponseData] = useState([])
    const [usersData, setusersData] = useState([])


    // searching module
    const services = new UserServices();
    useEffect(() => {

        const fetchUsers = async () => {
            const data = await services.getUsers()
            // console.log('users',data)
            setusersData(data.data.docs)
            return data
        }


        const filter = new RegExp(search, 'i')

        let filteredData: any = usersData?.filter((item: any) => {
            return item?.first_name.match(filter)
        })
        setResponseData(filteredData)
        
        fetchUsers()
    }, [usersData,search])




    return (
        <div className="main--body p-5 lg:p-10 my-5 bg-white">
            <h1 className="font-bold">Team / View members</h1>
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
                                                <td>Role</td>
                                                <td>Action</td>
                                            </tr>
                                        </thead>
                                        <tbody className="my-3">
                                            {responseData?.map((item: any, i: number) => {
                                                return (<tr key={i}>
                                                    <td><input type="checkbox" name="" id="" /></td>
                                                    <td className="px-5">{i + 1}</td>
                                                    <td>{item.first_name + " " + item.second_name}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.role}</td>
                                                    <td>
                                                        <div className="flex gap-5">
                                                            {parse('' + icons.editPayroll + '')}
                                                            {parse('' + icons.outlineTrash + '')}
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


