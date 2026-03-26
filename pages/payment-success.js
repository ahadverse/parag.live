import React from "react";
import Link from "next/link";
import { BsCheck2Circle } from "react-icons/bs";

const PaymentSuccess = () => {
  return (
    <div className='page-bg' style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", padding: "24px" }}>
      <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "16px", padding: "48px 32px", display: "flex", flexDirection: "column", alignItems: "center", boxShadow: "var(--shadow)", maxWidth: "400px", width: "100%" }}>
        <BsCheck2Circle style={{ width: "64px", height: "64px", color: "var(--success)" }} />
        <h1 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text)", marginTop: "16px" }}>
          Payment Successful!
        </h1>
        <p style={{ color: "var(--text-secondary)", marginTop: "8px", textAlign: "center" }}>
          Your payment has been processed successfully.
        </p>
        <Link href='/' className='btn-accent' style={{ marginTop: "24px" }}>
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;
