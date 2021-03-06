import Head from "next/head";
import Main from "../components/Main/main";
import styles from "../styles/Home.module.css";

const Index = () => {
  return (
    <div>
      <Head>
        <title>My Little Room</title>
        <meta name="description" content="My Little Room" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
    </div>
  );
};

export default Index;
