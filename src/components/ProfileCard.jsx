import { motion } from "framer-motion";

function ProfileCard({ profile }) {

  return (

    <motion.div

      className="profile-card"

      initial={{
        opacity: 0,
        y: 40,
      }}

      animate={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: 0.6,
      }}
    >

      <img
        src={profile.avatar_url}
        alt="avatar"
      />

      <h2>
        {profile.name}
      </h2>

      <p className="username">
        @{profile.login}
      </p>

      <p className="bio">
        {profile.bio}
      </p>

      <div className="stats">

        <div className="stat-box">
          <h3>
            {profile.followers}
          </h3>

          <p>Followers</p>
        </div>

        <div className="stat-box">
          <h3>
            {profile.following}
          </h3>

          <p>Following</p>
        </div>

        <div className="stat-box">
          <h3>
            {profile.public_repos}
          </h3>

          <p>Repos</p>
        </div>

      </div>

    </motion.div>
  );
}

export default ProfileCard;