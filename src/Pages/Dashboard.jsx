import SideBar from "../Pages/Layouts/SideBar"
import { useState } from "react";
export default function Dashboard() {
    const [activeTab, setActiveTab] = useState("dashboard");

    const tabs = [
        { id: "dashboard", title: "Dashboard", icon: "ti ti-home" },
        { id: "settings", title: "Settings", icon: "ti ti-settings" },
        { id: "user", title: "Admin Profil", icon: "ti ti-user" },
    ];
    return (
        <>
            <div className="flex">
                <SideBar tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
            <div className="ml-72 p-9">
                {activeTab == "dashboard" &&(
                    <>
                    <p className="bg-red-500 size-10/12">dashboard</p>
                    </>
                )}
            </div>

        </>

    )
}