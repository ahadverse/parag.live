import User from "@/component/user";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Swal from "sweetalert2";
import style from "../../styles/moduleCss/blog.module.css";
import Head from "next/head";
import Footer from "@/component/footer/footer";
import Header from "@/component/header/header";
import { useSession } from "next-auth/react";

const Dashboards = () => {
  const { users } = User();
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [rechargeHistory, setRechargeHistory] = useState([]);

  async function transactions() {
    //if (session?.user?.id) {
    try {
      const response = await axios.get(
        `https://paraglive-backend.vercel.app/api/deposit/get/${session?.user?.id}`,
        {
          method: "GET",
        },
      );
      if (response?.code == 404) {
        setRechargeHistory([]);
      } else {
        const trans = response.data?.deposits;
        setRechargeHistory(trans);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
    //}
  }

  useEffect(() => {
    setLoading(true);
    if (session) {
      transactions();
    } else {
      return;
    }
  }, [session?.user?.email]);

  return (
    <div className='page-bg' style={{ minHeight: "100vh" }}>
      <Head>
        <title>My Recharge</title>
      </Head>
      <Header />
      <div
        style={{ maxWidth: "900px", margin: "24px auto", padding: "0 16px" }}
      >
        <div
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "var(--shadow)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
              paddingBottom: "16px",
              borderBottom: "1px solid var(--border)",
            }}
          >
            <div>
              <span
                className='btn-accent'
                style={{
                  display: "inline-block",
                  padding: "6px 16px",
                  borderRadius: "8px",
                  fontSize: "0.85rem",
                }}
              >
                Credits : {session?.user?.credit?.toFixed(2)}
              </span>
            </div>
            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
              {session?.user?.email}
            </p>
          </div>

          <div
            style={{
              background: "var(--surface-2)",
              border: "1px solid var(--border)",
              borderRadius: "10px",
              padding: "12px 20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "12px",
              marginBottom: "24px",
            }}
          >
            <span style={{ display: "flex", gap: "24px" }}>
              <Link
                href={"/dashboard/profile"}
                style={{
                  color: "var(--text-secondary)",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.target.style.color = "var(--accent)")}
                onMouseLeave={(e) =>
                  (e.target.style.color = "var(--text-secondary)")
                }
              >
                My Profile
              </Link>
              <span
                style={{
                  color: "var(--accent)",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                }}
              >
                My Recharge
              </span>
            </span>
            <Link
              className='btn-accent'
              style={{
                padding: "6px 16px",
                borderRadius: "6px",
                fontSize: "0.8rem",
                fontWeight: 700,
              }}
              href={`/recharge-credits/`}
            >
              Buy Credit
            </Link>
          </div>

          {loading ? (
            <div className='themed-loader' style={{ minHeight: "200px" }}>
              <img
                width={60}
                src='/loader.gif'
                alt='loading'
                style={{ opacity: 0.7 }}
              />
            </div>
          ) : (
            <>
              {rechargeHistory?.length == 0 ? (
                <p
                  style={{
                    fontSize: "1.2rem",
                    textAlign: "center",
                    color: "var(--text-muted)",
                    padding: "40px 0",
                  }}
                >
                  No Data Found
                </p>
              ) : (
                <div style={{ overflowX: "auto" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                      <tr>
                        {[
                          "#",
                          "Date",
                          "Provider",
                          "Status",
                          "Amount",
                          "TRX",
                        ].map((h) => (
                          <th
                            key={h}
                            style={{
                              background: "var(--surface-2)",
                              color: "var(--text)",
                              padding: "10px 12px",
                              fontSize: "0.8rem",
                              fontWeight: 600,
                              textAlign: "left",
                              borderBottom: "1px solid var(--border)",
                            }}
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {rechargeHistory?.map((a, index) => (
                        <tr
                          key={index}
                          style={{ borderBottom: "1px solid var(--border)" }}
                        >
                          <td
                            style={{
                              padding: "10px 12px",
                              color: "var(--text)",
                              fontSize: "0.85rem",
                            }}
                          >
                            {index + 1}
                          </td>
                          <td
                            style={{
                              padding: "10px 12px",
                              color: "var(--text)",
                              fontSize: "0.85rem",
                            }}
                          >
                            {new Date(a?.createdAt).toDateString()}
                          </td>
                          <td
                            style={{
                              padding: "10px 12px",
                              color: "var(--text)",
                              fontSize: "0.85rem",
                            }}
                          >
                            {a?.provider}
                          </td>
                          <td style={{ padding: "10px 12px" }}>
                            <span
                              style={{
                                background:
                                  a?.status == "pending"
                                    ? "var(--warning)"
                                    : "var(--success)",
                                color: "#fff",
                                padding: "2px 10px",
                                borderRadius: "4px",
                                fontSize: "0.75rem",
                                fontWeight: 600,
                              }}
                            >
                              {a?.status == "pending" ? "Pending" : "Success"}
                            </span>
                          </td>
                          <td
                            style={{
                              padding: "10px 12px",
                              color: "var(--accent)",
                              fontWeight: 700,
                              fontSize: "0.85rem",
                            }}
                          >
                            ${a?.amount}
                          </td>
                          <td
                            style={{
                              padding: "10px 12px",
                              color: "var(--text-secondary)",
                              fontSize: "0.85rem",
                            }}
                          >
                            {a?.trxid}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboards;
