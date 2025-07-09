import { useActiveTab } from "./model/useActiveTab";
import { ProfileHeader } from "./ui/Header";
import { ProfileNav } from "./ui/Navigation";
import { ProfileContent } from "./ui/Content";

import styles from "./ProfilePage.module.css";

export const ProfilePage = () => {
    const { activeTab, setActiveTab } = useActiveTab();
    return (
        <div className={styles.container}>
            <ProfileHeader />
            <ProfileNav activeTab={activeTab} setActiveTab={setActiveTab} />
            <ProfileContent activeTab={activeTab} />
        </div>
    );
};
