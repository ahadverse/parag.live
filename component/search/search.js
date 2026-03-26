import Link from "next/link";
import React, { useState } from "react";
import usa from "../../public/countries.json";

const Search = () => {
  const [keyword, setKeyword] = useState([]);

  const onSearch = (e) => {
    e.preventDefault();

    const data = usa.filter(
      (a) =>
        a.name.toLowerCase().startsWith(e.target.value.toLowerCase()) &&
        e.target.value.length >= 4,
    );

    function removeDuplicateCities(array) {
      const uniqueCities = [];
      const cityNames = new Set();
      for (const city of array) {
        const cityName = city.name.toLowerCase();
        if (!cityNames.has(cityName)) {
          uniqueCities.push(city);
          cityNames.add(cityName);
        }
      }
      return uniqueCities;
    }

    const uniqueCities = removeDuplicateCities(data);
    setKeyword(uniqueCities);
  };

  return (
    <div style={{ margin: "24px auto", maxWidth: "600px" }}>
      <div style={{ position: "relative" }}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='18'
          height='18'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth='2'
          style={{
            position: "absolute",
            left: "14px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "var(--text-muted)",
          }}
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
        </svg>
        <input
          placeholder='Search city name...'
          className='themed-input'
          style={{ paddingLeft: "42px", fontSize: "0.95rem", padding: "12px 16px 12px 42px" }}
          name='keyword'
          onChange={(e) => onSearch(e)}
        />
      </div>

      {keyword?.length !== 0 && (
        <div
          style={{
            marginTop: "8px",
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "10px",
            padding: "8px",
            maxHeight: "240px",
            overflowY: "auto",
          }}
        >
          {keyword?.map((a) => (
            <Link
              key={a._id}
              href={`/${a?.name}`}
              style={{
                display: "block",
                padding: "8px 12px",
                color: "var(--accent)",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: 500,
                borderRadius: "6px",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) => (e.target.style.background = "var(--accent-dim)")}
              onMouseLeave={(e) => (e.target.style.background = "transparent")}
            >
              {a?.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
