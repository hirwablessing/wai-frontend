import dynamic from "next/dynamic"
import Dashboard from "../../../layouts/Dashboard";

const PostEditor = dynamic(()=> import("../../../components/dashboard/editors/PostEditor"),{
ssr:false
})

export default function create(){
return(

<Dashboard>
    
<div className="main--body p-10 my-5 bg-white">
       <PostEditor 
       title="News / Create article" 
       btnLoadingTitle="Publishing"
       btnTitle="Publish"
       />
       </div>
</Dashboard>
)
}