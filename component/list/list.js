import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const List = ({ data1, data2, category }) => {
  const router = useRouter();

  const AdCard = ({ b, city }) => (
    <Link
      target='_blank'
      rel='noopener noreferrer'
      href={`/post/details/${b._id}?city=${city}&sub=${category}`}
      key={b._id}
      style={{
        display: "flex",
        gap: "14px",
        border: "1px solid var(--border)",
        borderRadius: "10px",
        marginBottom: "8px",
        textDecoration: "none",
        overflow: "hidden",
        transition: "all 0.2s ease",
        background: "var(--surface)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--accent)";
        e.currentTarget.style.boxShadow = "0 2px 12px var(--accent-dim)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <img
        style={{
          width: "100px",
          height: "100px",
          objectFit: "cover",
          flexShrink: 0,
        }}
        src={b.imgOne}
        alt={b.name}
      />
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "8px 8px 8px 0" }}>
        <span style={{ fontSize: "1rem", fontWeight: 600, color: "var(--accent)", marginBottom: "4px" }}>
          {b.name?.slice(0, 100)}
        </span>
        <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
          {b.age}
        </span>
      </div>
    </Link>
  );

  const SectionHeader = ({ label, premium }) => (
    <div
      style={{
        background: premium
          ? "linear-gradient(90deg, var(--accent), transparent)"
          : "linear-gradient(90deg, var(--text-muted), transparent)",
        padding: "8px 16px",
        borderRadius: "8px",
        marginBottom: "12px",
        width: "fit-content",
        minWidth: "60%",
      }}
    >
      <span style={{ color: "#fff", fontWeight: 700, fontSize: "1rem", letterSpacing: "0.02em" }}>
        {label}
      </span>
    </div>
  );

  return (
    <div>
      {data1?.length > 0 && (
        <div style={{ marginBottom: "24px" }}>
          <SectionHeader label="Premium Ads" premium />
          {data1.map((a, index) => (
            <div key={index}>
              {a.objects.map((b) => (
                <AdCard key={b._id} b={b} city={router.query.post?.[0]} />
              ))}
            </div>
          ))}
        </div>
      )}

      <SectionHeader label="Ads" />
      {data2.map((a, index) => (
        <div key={index}>
          {a.objects.map((b) => (
            <AdCard key={b._id} b={b} city={router.query.post} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default List;
