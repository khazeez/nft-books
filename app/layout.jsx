"use client"
import style from "./globals.module.css";
import styles from './page.module.css'
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer";
import image from "./image/image";
import {contract, web3} from '../contract/contract'


import {useState} from 'react'
import Image from "next/image";


export default function RootLayout({ children }) {

  const [account, setAccount] = useState("");
  const [owner, setOwner] = useState("")

 

  const connectWallet = async () => {
    if (web3 && contract) {
      try {
        const accounts = await web3.eth.requestAccounts();
        setAccount(accounts[0]);


        const ownerhere = await contract.methods.owner().call();
        setOwner(ownerhere);

      } catch (error) {
        console.error("Error accessing accounts:", error);
      }
    } else {
      console.error("Web3 or contract is not initialized");
    }
  };
  return (
    <html lang="en">
      <body>
        <div>
        {
     !account? (
        <div className={styles.login_screen}>
          <div className={styles.ilustration_box}>
          <Image src={image.coverImage} 
        alt='NFT MARKET PLACE'
        className={styles.cover_image}
        />
            
          </div>
          <div className={styles.connect_wallet_box}>
            <h1 className={styles.title}>NFT BOOKS</h1>
            <p>Di tengah hutan salju, beruang putih berjalan mencari buku kuno yang dapat mengungkap rahasia alam. Setelah melewati sungai beku dan pohon-pohon tertutup salju, ia menemukan sebuah gua tersembunyi dengan rak buku tua.</p>
            <p>Dengan hati-hati, beruang putih menarik sebuah buku dari rak dan membukanya. Buku itu berisi petunjuk dan kisah inspiratif yang membantunya bertahan hidup di alam beku, memberinya kekuatan untuk melanjutkan perjalanannya.</p>
            <p>Klik tombol ajaib di bawah ini untuk melihat petualngan si beruang salju selanjutnya</p>
            <button className={styles.btn_connect} onClick={connectWallet}> Connect to your wallet</button>
            
          </div>
        </div>
     ) : account && account.toLowerCase === owner.toLowerCase? (
      <div className="Owner">
        <div className={style.container}>
        <div className={style.navbar}>
          <h1>OWNER</h1>
          {account}
          {owner}
        <Navbar />
        </div>
        <div className={style.sidebar}>
        <Sidebar />
        </div>
        <div className={style.main}>
        {children}
        </div>
        <div className={style.footer}>
        <Footer/>

        </div>
        </div>

      </div> 
    ) : (
      <div className="User">
        <div className={style.container}>
        <div className={style.navbar}>
          <h1>USER</h1>
        <Navbar />
        </div>
        <div className={style.sidebar}>
        <Sidebar />
        </div>
        <div className={style.main}>
        {children}

        </div>
        <div className={style.footer}>
        <Footer/>

        </div>
        </div>

      </div>
    )
    }
        </div>         
      </body>
    </html>
  );
}
