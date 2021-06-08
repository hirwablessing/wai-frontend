import HomeDashboard from "../../components/dashboard/HomeDashboard"
import Dashboard from "../../layouts/Dashboard"

export default function dashboard(){
return(
<Dashboard>
    <div className="main--body p-10 my-5 bg-white">
        <HomeDashboard />
    </div>
</Dashboard>

)
}