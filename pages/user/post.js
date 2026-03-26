import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
const Footer = dynamic(() => import("@/component/footer/footer2"));
const Header = dynamic(() => import("@/component/header/header"));

const Post = () => {
  return (
    <div className='page-bg'>
      <Head>
        <link rel='icon' href='/logo.png' />
        <title>Select Location</title>
      </Head>
      <Header></Header>
      <div className='max-w-md mx-auto mt-10 rounded-xl p-8' style={{background: "var(--surface)", border: "1px solid var(--border)", boxShadow: "var(--shadow)"}}>
        <h2 className='text-sm font-semibold uppercase tracking-widest mb-6' style={{color: "var(--text-muted)"}}>
          Choose Posting Type
        </h2>

        <Link
          href='/user/local-ads/'
          className='flex items-center justify-between p-4 rounded-lg transition-all group mb-3' style={{border: "1px solid var(--border)", background: "var(--surface-2)"}}
        >
          <div>
            <span className='text-base font-semibold' style={{color: "var(--text)"}}>
              Post Ad in a City
            </span>
            <span className='ml-2 text-xs font-bold rounded-full px-2 py-0.5' style={{color: "var(--success)", background: "rgba(34,197,94,0.1)", border: "1px solid var(--success)"}}>
              FREE
            </span>
          </div>
          <span className='text-xl' style={{color: "var(--text-muted)"}}>
            ›
          </span>
        </Link>

        <Link
          href='/user/multiple-city-ads/'
          className='flex items-center justify-between p-4 rounded-lg transition-all group' style={{border: "1px solid var(--border)", background: "var(--surface-2)"}}
        >
          <span className='text-base font-semibold' style={{color: "var(--text)"}}>
            Post Ad in Multiple Cities
          </span>
          <span className='text-xl' style={{color: "var(--text-muted)"}}>
            ›
          </span>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Post;
