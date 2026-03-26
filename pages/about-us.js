import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import React from "react";
const Footer = dynamic(() => import("@/component/footer/footer"));
const Header = dynamic(() => import("@/component/header/header"));

const AboutUs = () => {
  const sectionStyle = {
    color: "var(--text-secondary)",
    lineHeight: 1.8,
    marginBottom: "12px",
  };
  const headingStyle = {
    fontWeight: 700,
    color: "var(--text)",
    marginBottom: "8px",
    marginTop: "20px",
  };

  return (
    <div className='page-bg'>
      <Head>
        <title>About Us</title>
        <link rel='icon' href='/logo.png' />
      </Head>
      <Header />
      <div
        style={{ maxWidth: "900px", margin: "0 auto", padding: "32px 16px" }}
      >
        <div
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "12px",
            padding: "32px",
            boxShadow: "var(--shadow)",
          }}
        >
          <h1
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "var(--accent)",
              marginBottom: "16px",
            }}
          >
            About Us
          </h1>
          <p style={{ ...sectionStyle, fontSize: "1.1rem" }}>
            Hello, Dear friends, Welcome to Skipthegames also, we are happy you
            want to know something more about our site
          </p>
          <p style={sectionStyle}>
            So, basically, nowadays people are more dependent on online products
            and services that&apos;s why we also, take forward a step to help
            you.
          </p>
          <p style={sectionStyle}>
            Our first wish is to provide you with a better solution to solve
            your problem. So, kindly if you don&apos;t get any solution then
            mention it in the comment section.
          </p>
          <p style={sectionStyle}>
            Also, we are trying to provide fresh & latest content that provides
            you ideas about all updated information that&apos;s happening in the
            world.
          </p>
          <p style={sectionStyle}>
            In the below section you can get more ideas about our site like our
            website category and content category.
          </p>
          <p style={sectionStyle}>
            If you have additional questions or require more information about
            our About Us Page, do not hesitate to contact us through email at{" "}
            <b style={{ color: "var(--accent)" }}>skipthegames010@gmail.com</b>
          </p>

          <h2 style={headingStyle}>What is Our Goal?</h2>
          <p style={sectionStyle}>
            There are millions of websites created every day, also, there is
            much fake content spread on the internet.
          </p>
          <p style={sectionStyle}>
            So, Our main goal is to provide you with 100% Original and Safe
            content that provides you a great and better experience on the world
            wide web.
          </p>
          <p style={sectionStyle}>
            We mainly focus on our service so and improving it regularly to
            provide a better user experience to all users.
          </p>
          <p style={sectionStyle}>
            Basically, we focus on the Free classified advertisements niche so,
            our main priority is to search for new content and present it in
            front of you to learn something new.
          </p>

          <h2 style={headingStyle}>What is our Service?</h2>
          <p style={sectionStyle}>
            We are mainly focused on the Free classified advertisements category
            so, we provide Free classified advertisements related content if you
            are interested in the Free classified advertisements category then
            you can visit daily to get more latest information.
          </p>
          <p style={sectionStyle}>
            Find the ultimate pleasure without the hassle. Skip the games and
            discover top-notch female escorts in CT, N.C, NJ, and more. Indulge
            in a discreet and unforgettable experience with Escort Dude. Explore
            Tryst San Antonio escorts for an adventure like no other.
            Satisfaction guaranteed!
          </p>
          <p style={sectionStyle}>
            On our website Skipthegames you get can all Free classified
            advertisements related information also, we focus on many other
            categories and we hope you like also, the content of other
            categories that are maintained on our website. So, you can visit our
            website homepage to know all category details here you can visit our
            homepage Click here
          </p>
          <p style={sectionStyle}>
            Also, we provide a Notification update service you can join by email
            and other Social Media Platforms, and all Links you can get on the
            Homepage visit now.{" "}
            <a
              href='https://skipthegames.love/'
              style={{ color: "var(--accent)" }}
            >
              {" "}
              Skipthegames{" "}
            </a>
          </p>

          <h2 style={headingStyle}>About Skipthegames</h2>
          <p style={sectionStyle}>
            As you can see already we mention what is our goal and Service again
            we repeat that we mainly focus on Free classified advertisements
            Category to help people.
          </p>
          <p style={sectionStyle}>
            This Website is Created By Skipthegames to help people because many
            people are still spending hours of time to get exact information so,
            this is the only motive to create{" "}
            <a
              href='https://skipthegames.love/'
              style={{ color: "var(--accent)" }}
            >
              Skipthegames
            </a>{" "}
            to help people and provide them a better web experience.
          </p>

          <h2 style={headingStyle}>Admin&apos;s Statement for Skipthegames</h2>
          <p style={sectionStyle}>
            As per my point of view, there are many people who visit the
            internet to get some information but 90% of the time they get wrong
            information so, the first priority of our website Skipthegames is to
            provide 100% legit and accurate information to our users, Also, I
            hope my dream comes true one day, and our website will provide
            Original Content to provide a better user experience. So, From my
            Side thanks for visiting our website.
          </p>

          <h2 style={headingStyle}>Admin&apos;s Contact Information</h2>
          <p style={sectionStyle}>
            Hi, this PARAG, in the above paragraph you know about the website
            properly and now I am going to provide my contact details.
          </p>
          <p style={sectionStyle}>
            If you have any problem & suggestions for this website then you can
            contact me by using following contact details.
          </p>
          <p style={sectionStyle}>
            These details are my personal Account details if you want to contact
            me then you can contact me by the above platform.
          </p>
          <p style={sectionStyle}>
            Finally, this is our complete about us page about details are
            showing what is the motive to create Skipthegames.
          </p>
          <p style={sectionStyle}>
            If you want to contact us then you can contact us by our contact us
            form. Go to homepage{" "}
            <a
              href='https://skipthegames.love/'
              style={{ color: "var(--accent)" }}
            >
              Skipthegames
            </a>
          </p>
          <p
            style={{
              textAlign: "center",
              color: "var(--text-muted)",
              marginTop: "32px",
              fontStyle: "italic",
            }}
          >
            &ldquo;Thanks for visiting our About Us Page&rdquo;
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
