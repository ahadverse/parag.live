import Link from "next/link";
import React from "react";
import data from "../../public/usa.json";

const Usa = () => {
  return (
    <div style={{ color: "var(--text)" }}>
      {data.map((country) => (
        <div
          id='United%20States'
          key={country._id}
          style={{ maxWidth: "1200px", margin: "0 auto" }}
        >
          <h1
            style={{
              fontSize: "1.75rem",
              fontWeight: 800,
              marginBottom: "20px",
              paddingBottom: "16px",
              borderBottom: "2px solid var(--border)",
              color: "var(--text)",
              letterSpacing: "-0.02em",
            }}
          >
            {country.name}
          </h1>

          <div className='columns-2 md:columns-2 lg:columns-4 gap-3 space-y-3'>
            {country?.children?.map((state) => (
              <div
                key={state._id}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  padding: "20px",
                  marginBottom: "12px",
                  breakInside: "avoid",
                  transition: "all 0.2s ease",
                  boxShadow: "var(--card-glow)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.boxShadow = "var(--shadow)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.boxShadow = "var(--card-glow)";
                }}
              >
                <h2
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    marginBottom: "12px",
                    paddingLeft: "12px",
                    borderLeft: "3px solid var(--accent)",
                    color: "var(--text)",
                    lineHeight: 1.2,
                  }}
                >
                  {state.name}
                </h2>

                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  {state?.children?.map((city) => (
                    <Link
                      key={city._id}
                      href={`/${city?.name}?state=${state.name}`}
                      style={{
                        color: "var(--text-secondary)",
                        textDecoration: "none",
                        padding: "4px 10px",
                        borderRadius: "6px",
                        fontSize: "0.85rem",
                        fontWeight: 500,
                        transition: "all 0.15s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = "var(--accent)";
                        e.target.style.background = "var(--accent-dim)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = "var(--text-secondary)";
                        e.target.style.background = "transparent";
                      }}
                    >
                      {city.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Usa;
