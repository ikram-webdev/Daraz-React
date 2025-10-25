import ProfileHeader from "./ProfileHeader";
import ProfileStats from "./ProfileStats";

function ProfileContainer() {
  const userData = {
    name: "Ikram Kamboh",
    image: "./public/20250506_233436.jpg",
    followers: 1200,
    posts: 85,
    likes: 5400,
  };

  return (
    <div className="profile-container">
      <ProfileHeader name={userData.name} image={userData.image} />
      <ProfileStats
        followers={userData.followers}
        posts={userData.posts}
        likes={userData.likes}
      />
    </div>
  );
}

export default ProfileContainer;