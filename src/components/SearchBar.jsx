function SearchBar({
  username,
  setUsername,
  fetchGitHubData,
  handleKeyPress,
}) {

  return (
    <div className="search-box">

      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}

        onChange={(e) =>
          setUsername(e.target.value)
        }

        onKeyDown={handleKeyPress}
      />

      <button onClick={fetchGitHubData}>
        Search
      </button>

    </div>
  );
}

export default SearchBar;