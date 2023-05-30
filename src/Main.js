import React, { useEffect, useState } from "react";
import { data } from "./data";

const Main = () => {
  const [num, setNum] = useState(1);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    setInfo([]);
  }, []);

  const handleChange = (e) => {
    let value = parseInt(e.target.value);
    if (value < 1) {
      value = 1;
    } else if (value > 8) {
      value = 8;
    }
    setNum(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredData = data.slice(0, num); //startindex 0 ensures ur first item is never cut off,since its index 0 and num as endindex also means selected number will just be d last item b4 odas are cut off
    setInfo(filteredData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>TIRED OF BORING LOREM IPSUM?</h2>
        <label htmlFor="amount" className="para">Paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          min="1"
          step="1"
          max="8"
          value={num}
          onChange={handleChange}
        />

        <button className="btn" type="submit">
          Generate
        </button>
      </form>
      <div>
        {info.map(({ id, content }) => (
          <div key={id} className="content">
            {content}
          </div>
        ))}
      </div>
    </>
  );
};

export default Main;
