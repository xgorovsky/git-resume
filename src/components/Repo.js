import React, { useEffect, useState } from "react";
import axios from "axios";

function Repo(item) {
  const [lang, setLang] = useState([]);
  const [totalB, setTotalB] = useState(0);
  let repo = item["name"];

  const getYear = str => str.slice(0, 4);

  useEffect(() => {
    const fetchLang = async () => {
      const result = await axios(
        `https://api.github.com/repos/${item.gitName}/${repo}/languages`
      );
      let langs = Object.entries(result.data);
      let allBytes = 0;
      langs.map((subArr, i) => (allBytes += Number(subArr[1])));
      setTotalB(allBytes);
      setLang(langs);
    };
    fetchLang();
  }, [item.gitName, repo]);

  return (
    <div className="repo">
      <div className="repo__heading">
        <h1>{repo}</h1>
        <p>
          {getYear(item["created_at"])} - {getYear(item["updated_at"])}
        </p>
      </div>
      <div className="repo__lang-license-wrapper">
        <div className="repo__langs">
          {lang.map((item, index) => (
            <p key={item[index]}>
              {item[0]} {Math.round((Number(item[1]) * 100) / totalB)}%
            </p>
          ))}
        </div>
        <div className="repo__license">
          &nbsp;-{" "}
          {item["license"] === null ? " Unlicensed" : item["license"].name}
        </div>
      </div>
      <p className="repo__description">{item["description"]}</p>
      <p className="repo__info-wrapper">
        This repository has {item["stargazers_count"]} stars and {item["forks"]}{" "}
        forks. If you would like more
        <br />
        information about this repository and my contributed code,
        <br />
        please visit{" "}
        <a
          rel="noopener noreferrer"
          target="_blank"
          className="red-text"
          href={`https://github.com/${item.gitName}/${repo}`}
        >
          {repo}
        </a>{" "}
        on GitHub.
      </p>
      <div className="hr" />
    </div>
  );
}

export default Repo;
