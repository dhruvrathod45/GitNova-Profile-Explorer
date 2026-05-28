function RepoCard({ repo }) {

  return (

    <a
      href={repo.html_url}

      target="_blank"

      className="repo-card"
    >

      <h3>
        {repo.name}
      </h3>

      <p>
        {repo.description || "No description"}
      </p>

      <span>
        ⭐ {repo.stargazers_count}
      </span>

    </a>
  );
}

export default RepoCard;