import React from "react";
import { useParams } from "react-router-dom";

const data = {
  lacheln: {
    name: "레헬",
    description: "레헬입니다",
  },
  atarayo: {
    name: "아타라요",
    description: "아타라요 입니다",
  },
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.username];
  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필</p>
      )}
    </div>
  );
};

export default Profile;
