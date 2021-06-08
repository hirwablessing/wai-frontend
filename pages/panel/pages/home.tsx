import React, { useState } from "react";
import PageFormatting from "../../../components/dashboard/PageFormatting";
import Dashboard from "../../../layouts/Dashboard";

export default function home(){
    const [expandSectionOne, setExpandSectionOne] = useState(false)
    const [expandSectionTwo, setExpandSectionTwo] = useState(false)
    const [expandSectionThree, setExpandSectionThree] = useState(false)
    const [expandSectionFour, setExpandSectionFour] = useState(false)
    return(
        <Dashboard>
            <div className="my-5 lg:mr-5">
            {/* section 1 */}
            <section>
                <div className={expandSectionOne?"w-full p-5 rounded cursor-pointer my-3 bg-blue-600 text-white":"w-full bg-white p-5 rounded cursor-pointer my-3 hover:bg-blue-600 hover:text-white"}
                onClick={()=>setExpandSectionOne(!expandSectionOne)}
                >
                    [Section 1] Click to expand
                </div>
                {expandSectionOne &&
            <PageFormatting/>                }
            </section>

            {/* section 2 */}
            <section>
            <div className={expandSectionTwo?"w-full p-5 rounded cursor-pointer my-3 bg-blue-600 text-white":"w-full bg-white p-5 rounded cursor-pointer my-3 hover:bg-blue-600 hover:text-white"}
            onClick={()=>setExpandSectionTwo(!expandSectionTwo)}
            >
                    [Section 2] Click to expand
                </div>
                {expandSectionTwo &&
            <PageFormatting/>                }
            </section>

               {/* section 3 */}
               <section>
            <div className={expandSectionThree?"w-full p-5 rounded cursor-pointer my-3 bg-blue-600 text-white":"w-full bg-white p-5 rounded cursor-pointer my-3 hover:bg-blue-600 hover:text-white"}
            onClick={()=>setExpandSectionThree(!expandSectionThree)}
            >
                    [Section 3] Click to expand
                </div>
                {expandSectionThree &&
            <PageFormatting/>                }
            </section>

               {/* section 4 */}
               <section>
            <div className={expandSectionFour?"w-full p-5 rounded cursor-pointer my-3 bg-blue-600 text-white":"w-full bg-white p-5 rounded cursor-pointer my-3 hover:bg-blue-600 hover:text-white"}
            onClick={()=>setExpandSectionFour(!expandSectionFour)}
            >
                    [Section 4] Click to expand
                </div>
                {expandSectionFour &&
            <PageFormatting/>                }
            </section>
            </div>
        </Dashboard>
        
    )
}