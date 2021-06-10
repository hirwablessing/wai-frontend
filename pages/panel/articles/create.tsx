import React, { useState } from "react";
import Navbar from "../../../components/dashboard/navbar";
import Sidebar from "../../../components/dashboard/sidebar";
import { useForm } from 'react-hook-form'
import { LoadingOutlined, CameraOutlined } from '@ant-design/icons';
import Link from "next/link";
// import PostEditor from "../../components/dashboard/PostEditor";
import dynamic from "next/dynamic"
import Alert from "../../../components/dashboard/toasts/Alert";
import Dashboard from "../../../layouts/Dashboard";

const PostEditor = dynamic(()=> import("../../../components/dashboard/editors/PostEditor"),{
ssr:false
})

export default function create(){
const { register, handleSubmit, formState: { errors } } = useForm()
const [loading,setLoading] = useState(false)


// upload image here

const [file, setFile] = useState('');
const [image,setImage] = useState("");
let tempFile:any;
const uploadImage = (e:any) => {
tempFile = e.target.files[0];
// console.log("image",tempFile)
const reader:any = new FileReader();
reader.addEventListener(
"load",
function () {
setFile(reader.result);
setImage(tempFile)
},
false
);

if (tempFile) {
reader.readAsDataURL(tempFile);
}
// setFilename(e.target.files.name);
};



const handleForm = async(data:any)=>{
setTimeout(() => {
setLoading(false)
}, 3000);
setLoading(true)
console.log(data.names,data.email,data.smessage)
}
return(

<Dashboard>
    
<div className="main--body p-10 my-5 bg-white">
       <PostEditor/>
       </div>
</Dashboard>
)
}