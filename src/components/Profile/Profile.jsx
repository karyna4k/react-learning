import styles from "./Profile.module.css";
import MyPost from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
  return (
    <div>
      <ProfileInfo />
      <MyPost posts={props.posts} />
    </div>
  );
}

export default Profile;
