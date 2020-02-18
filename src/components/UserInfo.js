import React from "react";

function UserInfo(props) {
  const { user, gitName } = props;

  const getYear = str => str.slice(0, 4);

  return (
    <>
      {user !== null ? (
        <div className="info-wrapper">
          <h1>{gitName}</h1>
          <span>A passionate Github user</span>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={`https://github.com/${gitName}`}
          >
            https://github.com/{gitName}
          </a>
          <p>
            On GitHub since {getYear(user["created_at"])}, {user["name"]} is a
            developer based{" "}
            {user["location"] ? `in ${user["location"]}` : "somewhere"},<br />
            with{" "}
            <span className="red-text">
              {user["public_repos"]} public repositories
            </span>{" "}
            and <span className="red-text">{user["followers"]} followers.</span>
          </p>
        </div>
      ) : null}
    </>
  );
}

export default UserInfo;
