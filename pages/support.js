import Footer from "@/component/footer/footer2";
import Header2 from "@/component/header/header";
import User from "@/component/user";
import Link from "next/link";
import React from "react";

const Support = () => {
  const { users } = User();
  return (
    <div className='page-bg' style={{ minHeight: "100vh" }}>
      <Header2 />
      <div style={{ maxWidth: "800px", margin: "24px auto", padding: "0 16px" }}>
        <div style={{ background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: "10px", padding: "12px 20px", display: "flex", justifyContent: "center", gap: "24px", flexWrap: "wrap" }}>
          <Link href='/recharge-credits/' style={{ color: "var(--text-secondary)", fontWeight: 600, fontSize: "0.85rem", textDecoration: "none" }}
            onMouseEnter={e => e.target.style.color = "var(--accent)"} onMouseLeave={e => e.target.style.color = "var(--text-secondary)"}>
            Buy Credits
          </Link>
          <Link href='/dashboard/profile' style={{ color: "var(--text-secondary)", fontWeight: 600, fontSize: "0.85rem", textDecoration: "none" }}
            onMouseEnter={e => e.target.style.color = "var(--accent)"} onMouseLeave={e => e.target.style.color = "var(--text-secondary)"}>
            My Account
          </Link>
          <span style={{ color: "var(--accent)", fontWeight: 600, fontSize: "0.85rem" }}>Support</span>
          <Link href='/verify' style={{ color: "var(--text-secondary)", fontWeight: 600, fontSize: "0.85rem", textDecoration: "none" }}
            onMouseEnter={e => e.target.style.color = "var(--accent)"} onMouseLeave={e => e.target.style.color = "var(--text-secondary)"}>
            Verify
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Support;
