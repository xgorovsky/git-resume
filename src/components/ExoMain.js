import React, { useState, useEffect } from "react";
import Repo from "./Repo";
import axios from "axios";
import Languages from "./Languages";
import UserInfo from "./UserInfo";
import Footer from "./Footer";
import Loader from "./Loader";

function ExoMain(props) {
  const { title } = props;

  const [search, setSearch] = useState("");
  const [gitName, setGitname] = useState("");
  const [data, setData] = useState(null);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLodaing] = useState(false);
  const [error, setError] = useState(false);
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setError(false);
      setIsLodaing(true);
      try {
        const result = await axios(
          `https://api.github.com/users/${gitName}/repos?sort=updated`
        );
        const userData = await axios(`https://api.github.com/users/${gitName}`);
        setUser(userData.data);
        setData(result.data);
        var language = [];
        result.data.map((item, index) =>
          item["language"] !== null ? language.push(item["language"]) : null
        );
        setLanguages(language);
      } catch (error) {
        setError(true);
        console.log(error);
      }
      setIsLodaing(false);
    };
    gitName !== "" ? fetchData() : setData(null);
  }, [gitName]);

  return (
    <>
      <main>
        <div className="container">
          <h1>{title}</h1>
          <div className="form-wrapper">
            <form
              onSubmit={e => {
                e.preventDefault();
                setGitname(search);
                setTimeout(() => setSearch(""), 3000);
                setTimeout(() => setError(false), 3000);
              }}
              className="main__form"
              action="submit"
            >
              <label htmlFor="gitName">Github username</label>
              <div className="input-wrapper">
                <input
                  placeholder="John Doe..."
                  className="main__input"
                  value={search}
                  onChange={e => {
                    setSearch(e.target.value);
                  }}
                  type="text"
                  name="gitName"
                  id="gitname"
                />
                <button className="main__btn" type="submit">
                  Generate
                </button>
              </div>
            </form>
          </div>
          {isLoading ? (
            <Loader />
          ) : error ? (
            <div className="error-loader">
              Oops, something went wrong, try again later...
            </div>
          ) : data ? (
            <section className="resume">
              <UserInfo user={user} gitName={gitName} />
              <Languages data={data} langs={languages} />
              <div className="repos">
                <h2>Popular repositories</h2>
                <div className="repos-wrapper">
                  {data !== null
                    ? data
                        .slice(0, 3)
                        .map((item, index) => (
                          <Repo
                            {...item}
                            key={item[index]}
                            gitName={gitName}
                            data={data}
                          />
                        ))
                    : null}
                </div>
              </div>
            </section>
          ) : null}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ExoMain;
