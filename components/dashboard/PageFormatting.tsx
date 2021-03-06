import React, { useState } from "react";
import { useForm } from 'react-hook-form'
import { LoadingOutlined, CameraOutlined } from '@ant-design/icons';
import dynamic from "next/dynamic"
import Alert from "./toasts/Alert";

const PostEditor = dynamic(()=> import("./editors/PostEditor"),{
ssr:false
})

export default function PageFormatting(){
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
<div className="main--body p-10 my-5 bg-white">
    <h1 className="font-bold">News / Create article</h1>
    <div className="my-10">
        <form onSubmit={ handleSubmit((data)=> { handleForm(data) })}>


            <div className="form-group">
                <label htmlFor="" className="text-gray-600 block my-3">Title </label>
                <input type="text" id="" className="border p-3 w-full" {...register('title', {
                    required: '* This field is required' })} />
                <span className="text-red-600 text-xs">{errors.title && errors.title.message}</span>
            </div>

         

            <div className="form-group">
                <label htmlFor="featured_image" className="text-gray-600 block my-3">
                    <span className="block my-3">Feature image</span>
                    <div
                        className="px-12 border-2 border-dashed border-dark-500 py-20 w-full h-1/2 cursor-pointer flex items-center justify-center hover:border-blue-700">

                        {!file ?
                        <CameraOutlined style={{ fontSize: '40px' }} />:<img src={file} alt="Featured image"
                            className="create--featured-image" />}

                    </div>
                </label>

                <input type="file" name="" id="featured_image" className="hidden" onChange={uploadImage} />
            </div>

            <div className="form-group">
                <label htmlFor="" className="text-gray-600 block my-3">Content </label>

                {/*
                <PostEditor /> */}
                <PostEditor />
                <span className="text-red-600 text-xs">{errors.content && errors.content.message}</span>
            </div>

            <div>
                {loading?
                <button type="submit"
                    className="btn bg-blue-400 px-4 py-3 text-white float-right my-5 focus:outline-none flex gap-2 items-center rounded">
                    <LoadingOutlined />Publishing</button>:
                <button type="submit"
                    className="btn bg-blue-700 px-4 py-3 text-white float-right my-5 focus:outline-none rounded">Publish</button>
                }
                {/* <Alert type="error" message="failed" autoClose={false} /> */}
            </div>
        </form>

    </div>

</div>
)
}