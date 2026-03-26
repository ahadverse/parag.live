import Footer from "@/component/footer/footer2";
import Header2 from "@/component/header/header";
import User from "@/component/user";
import Link from "next/link";
import React from "react";

const Verify = () => {
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
          <Link href='/support' style={{ color: "var(--text-secondary)", fontWeight: 600, fontSize: "0.85rem", textDecoration: "none" }}
            onMouseEnter={e => e.target.style.color = "var(--accent)"} onMouseLeave={e => e.target.style.color = "var(--text-secondary)"}>
            Support
          </Link>
          <span style={{ color: "var(--accent)", fontWeight: 600, fontSize: "0.85rem" }}>Verify</span>
        </div>

        <div style={{ marginTop: "32px", color: "var(--text)", fontSize: "1.1rem", lineHeight: 2 }}>
          Step 1: take a photo of your government ID on a flat surface.
          <br />
          <img width={200} src='https://ik.imagekit.io/6p4lsoibt/Selfie-removebg-preview__1_.png?updatedAt=1683553064703' style={{ borderRadius: "8px", margin: "12px 0" }} />
          <br />
          Step 2: take a selfie of your government ID close to your face.
          <br /><br />
          Step 3: Submit Your SSN Details.
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Verify;
