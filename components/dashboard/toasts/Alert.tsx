import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Alert(props:any){
    const type = props.type;
    const notify = ()=>{
        if(type==='success'){
            toast.success(props.message)
        } else{
            toast.error(props.message)
        }
        
    }
    useEffect(() =>{
        notify();
    },[])
    return(
        <div className="">
            {/* <button className="bg-blue-500 text-white p-5 rounded" onClick={notify}>Notify !</button> */}
            <ToastContainer position="top-right" 
autoClose= {props.autoClose} />
        </div>
    )
}