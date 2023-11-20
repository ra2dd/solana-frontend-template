import { NextPage } from "next";
import styles from "../styles/Home.module.css";
import WalletContextProvider from "../components/WalletContextProvider";
import { AppBar } from "../components/AppBar";
import { BalanceDisplay } from "../components/BalanceDisplay";
import { MintToForm } from "../components/MintToForm";
import { CreateTokenAccountForm } from "../components/CreateTokenAccount";
import { CreateMintForm } from "../components/CreateMint";
import Head from "next/head";

const Home: NextPage = (props) => {
  return (
    <div className={styles.App}>
      <Head>
        <title>Token Program</title>
        <meta name="description" content="Solana template" />
      </Head>
      <WalletContextProvider>
        <AppBar />
        <div className={styles.Main}>
          <BalanceDisplay />
        </div>
      </WalletContextProvider>
    </div>
  );
};

export default Home;
