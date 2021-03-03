import styles from "./Profile.module.css";
import MyPost from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile() {
  return (
    <div>
      <ProfileInfo />
      <MyPost />
    </div>
  );
}

export default Profile;
