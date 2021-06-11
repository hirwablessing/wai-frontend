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
       category_id = "60c27e725f21cd00157ce34b"
       title="News / Create article" 
       btnLoadingTitle="Publishing"
       btnTitle="Publish"
       />
       </div>
</Dashboard>
)
}