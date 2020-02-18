import React, { useEffect, useState } from "react";

function Languages(props) {
  const [totalLangs, setTotalLangs] = useState(0);
  const [counted, setCounted] = useState([]);
  const { data, langs } = props;

  const countLangs = arr => {
    var count = {};
    arr.forEach(function(a) {
      count[a] = (count[a] || 0) + 1;
    });
    let countedLangs = Object.entries(count);
    setCounted(countedLangs);
    let allLangs = 0;
    countedLangs.map((subArr, i) => (allLangs += Number(subArr[1])));
    setTotalLangs(allLangs);
  };

  useEffect(() => {
    countLangs(langs);
  }, [langs]);

  return (
    <>
      {data !== null ? (
        <div className="lang-container">
          <h2>Languages</h2>
          <div className="lang__grid-wrapper">
            {counted.map((lang, i) => (
              <p key={lang[i]}>
                <span className="red-text">{lang[0]}</span>{" "}
                {Math.round(Number((lang[1] * 100) / totalLangs))}%
                <span
                  style={{
                    width: Math.round(Number((lang[1] * 100) / totalLangs))
                  }}
                  className="percent-bar"
                />
              </p>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Languages;
