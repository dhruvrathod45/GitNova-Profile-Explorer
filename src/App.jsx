import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

import "./styles/App.css";

import SearchBar from "./components/SearchBar";
import ProfileCard from "./components/ProfileCard";
import RepoCard from "./components/RepoCard";

function App() {

  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchGitHubData = async () => {

    if (username.trim() === "") {
      setError("Enter username");
      return;
    }

    try {

      setLoading(true);
      setError("");

      const profileResponse = await axios.get(
        `https://api.github.com/users/${username}`
      );

      const repoResponse = await axios.get(
        `https://api.github.com/users/${username}/repos`
      );

      setProfile(profileResponse.data);

      setRepos(
        repoResponse.data.slice(0, 6)
      );

    } catch (error) {

      setError("User not found");

      setProfile(null);
      setRepos([]);

    } finally {

      setLoading(false);

    }
  };

  const handleKeyPress = (e) => {

    if (e.key === "Enter") {
      fetchGitHubData();
    }

  };

  return (

    <motion.div

      className="container"

      initial={{
        opacity: 0,
      }}

      animate={{
        opacity: 1,
      }}

      transition={{
        duration: 0.7,
      }}
    >

      <nav className="navbar">

        <div className="logo">
          GitNova
        </div>

        <div className="nav-links">

          <a href="#">
            Home
          </a>

          <a href="#">
            Features
          </a>

          <a href="#">
            Explore
          </a>

        </div>

      </nav>

      <h1 className="title">
        GitNova
      </h1>

      <p className="subtitle">
        Explore GitHub profiles and repositories
        with a clean modern interface.
      </p>

      <SearchBar
        username={username}
        setUsername={setUsername}
        fetchGitHubData={fetchGitHubData}
        handleKeyPress={handleKeyPress}
      />

      {loading && (
        <h2 className="loading">
          Loading...
        </h2>
      )}

      {error && (
        <p className="error">
          {error}
        </p>
      )}

      {profile && (
        <>
          <ProfileCard profile={profile} />

          <div className="repo-container">

            {repos.map((repo) => (

              <RepoCard
                key={repo.id}
                repo={repo}
              />

            ))}

          </div>
        </>
      )}

    </motion.div>
  );
}

export default App;