import dynamic from "next/dynamic";
import React, { useState } from "react";
import Dashboard from "./Dashboard";
const PostEditor = dynamic(()=> import("../components/dashboard/editors/PostEditor"),{
    ssr:false
    })

export default function Home(props:any){
    const [expandSectionOne, setExpandSectionOne] = useState(false)
    const [expandSectionTwo, setExpandSectionTwo] = useState(false)
    const [expandSectionThree, setExpandSectionThree] = useState(false)
    const [expandSectionFour, setExpandSectionFour] = useState(false)

    const category_id:string = "60c313a96ed3c10015459e8b"
    return(
        <Dashboard>
            <div className="my-5 lg:mr-5 px-5 lg:px-0">
            {/* section 1 */}
            <section>
                <div className={expandSectionOne?"w-full p-5 rounded cursor-pointer my-3 bg-blue-600 text-white":"w-full bg-white p-5 rounded cursor-pointer my-3 hover:bg-blue-600 hover:text-white"}
                onClick={()=>setExpandSectionOne(!expandSectionOne)}
                >
                    [Section 1] Click to expand
                </div>
                {expandSectionOne && 
              <div className="main--body p-5 lg:p-10 my-5 bg-white">
              <PostEditor 
              section = "1"
          category_id = {category_id}
          title="Home / add content" 
          btnLoadingTitle="Publishing"
          btnTitle="Publish"
          />     </div> 
            
            }
            </section>

            {/* section 2 */}
            <section>
            <div className={expandSectionTwo?"w-full p-5 rounded cursor-pointer my-3 bg-blue-600 text-white":"w-full bg-white p-5 rounded cursor-pointer my-3 hover:bg-blue-600 hover:text-white"}
            onClick={()=>setExpandSectionTwo(!expandSectionTwo)}
            >
                    [Section 2] Click to expand
                </div>
                {expandSectionTwo &&
              <div className="main--body p-5 lg:p-10 my-5 bg-white">
              <PostEditor 
              section = "2"
          category_id = {category_id}
          title="Home / add content" 
          btnLoadingTitle="Publishing"
          btnTitle="Publish"
          />               </div>}
            </section>

               {/* section 3 */}
               <section>
            <div className={expandSectionThree?"w-full p-5 rounded cursor-pointer my-3 bg-blue-600 text-white":"w-full bg-white p-5 rounded cursor-pointer my-3 hover:bg-blue-600 hover:text-white"}
            onClick={()=>setExpandSectionThree(!expandSectionThree)}
            >
                    [Section 3] Click to expand
                </div>
                {expandSectionThree &&
              <div className="main--body p-5 lg:p-10 my-5 bg-white">
              <PostEditor 
              section = "3"
          category_id = {category_id}
          title="Home / add content" 
          btnLoadingTitle="Publishing"
          btnTitle="Publish"
          />               </div>}
            </section>

               {/* section 4 */}
               <section>
            <div className={expandSectionFour?"w-full p-5 rounded cursor-pointer my-3 bg-blue-600 text-white":"w-full bg-white p-5 rounded cursor-pointer my-3 hover:bg-blue-600 hover:text-white"}
            onClick={()=>setExpandSectionFour(!expandSectionFour)}
            >
                    [Section 4] Click to expand
                </div>
                {expandSectionFour &&
              <div className="main--body p-5 lg:p-10 my-5 bg-white">
              <PostEditor 
              
              section = "4"
          category_id = {category_id}
          title="Home / add content" 
          btnLoadingTitle="Publishing"
          btnTitle="Publish"
          />               </div>}
            </section>
            </div>
        </Dashboard>
        
    )
}