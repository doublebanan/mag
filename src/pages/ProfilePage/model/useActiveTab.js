import { useState } from "react";

export const useActiveTab = () => {
    const [activeTab, setActiveTab] = useState("favorites");
    console.log("Active Tab:", activeTab);
    return { activeTab, setActiveTab };
};
