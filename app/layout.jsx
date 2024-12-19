"use client"
import style from "./globals.module.css";
import styles from './page.module.css'
import Sidebar from "@/components/sidebar";
import image from "./image/image";
import {contract, web3} from '../contract/contract'
import Alert from '../public/alert'
import { FaBook } from 'react-icons/fa'
import api from '../pages/API/pinata'


import {useState, useEffect} from 'react'
import Image from "next/image";


export default function RootLayout({ children }) {

  const [account, setAccount] = useState("");
  const [owner, setOwner] = useState("");


  useEffect(() => {
    const { ethereum } = window;

    if (ethereum) {
      ethereum.on('accountsChanged', (accounts) => {
        setAccount(accounts[0]);
        Alert.showSwal()
        
        
      });
    } else {
      console.log('MetaMask tidak terdeteksi');
    }

    return () => {
      ethereum?.removeListener('accountsChanged', () => {});
    };
  }, []);

  function formatAddress(address) {
    const start = address.slice(0, 4); // 4 karakter pertama
    const end = address.slice(-3); // 3 karakter terakhir
    return `${start}...${end}`;
}


  const connectWallet = async () => {
    if (web3 && contract) {
      try {
        const accounts = await web3.eth.requestAccounts();
        setAccount(accounts[0]);

        const ownerhere = await contract.methods.owner().call();
        setOwner(ownerhere.toLowerCase());
      } catch (error) {
        Alert.walletNotInstalled()
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
            <h1 className={styles.title}> NFT BOOKS</h1>
            <p>Di tengah hutan salju, beruang putih berjalan mencari buku kuno yang dapat mengungkap rahasia alam. Setelah melewati sungai beku dan pohon-pohon tertutup salju, ia menemukan sebuah gua tersembunyi dengan rak buku tua.</p>
            <p>Dengan hati-hati, beruang putih menarik sebuah buku dari rak dan membukanya. Buku itu berisi petunjuk dan kisah inspiratif yang membantunya bertahan hidup di alam beku, memberinya kekuatan untuk melanjutkan perjalanannya.</p>
            <p>Klik tombol ajaib di bawah ini untuk melihat petualngan si beruang salju selanjutnya</p>
            <button className={styles.btn_connect} onClick={connectWallet}> Connect to your wallet</button>
            
          </div>
        </div>
     ) : account && account === owner? (
      <div className="Owner">
        <div className={style.container}>
        <div className={style.navbar}>
            <div className={style.header}>Dashboard Owner</div>
              <div className={style.account}>
                <div className={style.account_child}>
                  {formatAddress(account)}
                </div>
            </div>
        {/* <Navbar /> */}
        </div>
        <div className={style.sidebar}>
          
          <div className={style.header_sidebar}> 
            <FaBook className={style.icon_book}/>
            <div className={style.nft_books}>
              <div className={style.nft}>NFT</div>
              <div className={style.books}>BOOKS</div>
            </div>
            </div>
    
        <Sidebar />
        </div>
        <div className={style.main}>
        {children}
        </div>
        </div>

      </div> 
    ) : (
      <div className="User">
        <div className={style.container}>
        <div className={style.navbar}>
            <div className={style.header}>Dashboard user</div>
              <div className={style.account}>
                <div className={style.account_child}>
                  {formatAddress(account)}
                </div>
            </div>
        {/* <Navbar /> */}
        </div>
        <div className={style.sidebar}>
          <h1 className={style.header_sidebar}>NFT Books</h1>
        <Sidebar />
        </div>
        <div className={style.main}>
        {children}

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
