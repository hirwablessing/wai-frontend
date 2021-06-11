import { useState } from "react";
import Dashboard from "../../../layouts/Dashboard";
import { LoadingOutlined,CameraOutlined } from "@ant-design/icons";

export default function register(){

const [loading, setLoading] = useState(false);


// upload image here

const [file, setFile] = useState("");
const [img, setImage] = useState("");
let tempFile: any;
const uploadImage = (e: any) => {
tempFile = e.target.files[0];
// console.log("img",tempFile)
const reader: any = new FileReader();
reader.addEventListener(
"load",
function () {
setFile(reader.result);
setImage(tempFile);
},
false
);

if (tempFile) {
reader.readAsDataURL(tempFile);
}
// setFilename(e.target.files.name);
};



return(
<Dashboard>
    <div className="main--body p-10 mt-5 bg-white min-h-full">

        <h1 className="font-bold">Team / Register member</h1>
        <form action="" className="lg:w-2/3 py-5">
            <div className="lg:flex gap-5">
                <div className="form-group lg:w-1/2">
                    <label htmlFor="" className="block my-3">Firstname</label>
                    <input type="text" name="" id="" className="border p-3 w-full" />
                </div>
                <div className="form-group lg:w-1/2">
                    <label htmlFor="" className="block my-3">Lastname</label>
                    <input type="text" name="" id="" className="border p-3 w-full" />
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="" className="block my-3">Email</label>
                <input type="email" name="" id="" className="border p-3 w-full" />
            </div>


            <div className="form-group">
                <label htmlFor="" className="block my-3">Role</label>
                <input type="text" name="" id="" className="border p-3 w-full h-1/2" />
            </div>


            <div className="form-group">
                <label htmlFor="featured_image" className="text-gray-600 block my-3">
                    <span className="block my-3">Image</span>
                    <div
                        className="px-12 border-2 border-dashed border-dark-500 py-20 w-full h-1/2 cursor-pointer flex items-center justify-center hover:border-blue-700">
                        {!file ? (
                        <CameraOutlined style={{ fontSize: "40px" }} />
                        ) : (
                        <img src={file} alt="Featured image" className="create--featured-image" />
                        )}
                    </div>
                </label>

                <input type="file" name="" id="featured_image" className="hidden" onChange={uploadImage} />
            </div>

            {loading ? (
            <button type="submit"
                className="btn bg-blue-400 px-4 py-3 text-white mt-5 focus:outline-none flex gap-2 items-center">
                <LoadingOutlined />
                Registering
            </button>
            ) : (
            <button type="submit" className="btn bg-blue-700 px-4 py-3 text-white mt-5 focus:outline-none">
                Register
            </button>
            )}
        </form>
    </div>
</Dashboard>
)
}