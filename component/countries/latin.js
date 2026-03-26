import Link from "next/link";
import React from "react";
import data from "../../public/latin.json";

const Latin = () => {
  return (
    <div>
      {data.map((a) => (
        <div id="United%20States" key={a._id}>
          <h1
            className={`text-lg uppercase font-bold text-white ${a.name}`}
            style={{ borderRadius: "8px", padding: "8px 12px", marginBottom: "12px" }}
          >
            {a.name}
          </h1>
          <div className='columns-2 md:columns-3 lg:columns-4 gap-4' style={{ background: "var(--surface)", padding: "16px", borderRadius: "10px", border: "1px solid var(--border)" }}>
            {a?.children?.map((b) => (
              <div key={b._id} style={{ breakInside: "avoid", marginBottom: "16px" }}>
                <h1 style={{ fontWeight: 700, color: "var(--text)", fontSize: "0.95rem", marginBottom: "6px" }}>{b.name}</h1>
                {b?.children?.map((c) => (
                  <ul key={c._id}>
                    <li style={{ listStyle: "none" }}>
                      <Link
                        href={`/${c?.name}`}
                        style={{ color: "var(--accent)", textDecoration: "none", fontSize: "0.85rem", padding: "2px 0", display: "block", transition: "opacity 0.2s" }}
                      >
                        {c.name}
                      </Link>
                    </li>
                  </ul>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Latin;
