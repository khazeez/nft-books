import React from 'react';
import Link from 'next/link';
import { FaHome, FaPlus, FaShoppingCart, FaInfoCircle, FaDollarSign, FaTimes, FaExchangeAlt, FaHeart, FaClipboardList, FaCog, FaUser } from 'react-icons/fa'; // Ikon-ikon dari react-icons
import Style from './styles.module.css';

const Index = () => {
  const sidebar = [
    { name: 'Home', link: '/', icon: <FaHome /> },
    { name: 'Add book', link: 'add-book', icon: <FaPlus /> },
    { name: 'Buy book', link: 'buy-book', icon: <FaShoppingCart /> },
    { name: 'NFT Details', link: 'NFT-details', icon: <FaInfoCircle /> },
    { name: 'Set Resale Price', link: 'set-resale-price', icon: <FaDollarSign /> },
    { name: 'Cancel resale price', link: 'cancel-resale-price', icon: <FaTimes /> },
    { name: 'Get resale price', link: 'get-resale-price', icon: <FaExchangeAlt /> },
    { name: 'Buy resale price', link: 'buy-resale-price', icon: <FaShoppingCart /> },
    { name: 'Donate my NFT', link: 'donate-my-nft', icon: <FaHeart /> },
    { name: 'Transaction count', link: 'transaction-count', icon: <FaClipboardList /> },
  ];

  return (
    <>
      <div className={Style.sidebar_parent}>
        <div className={Style.sidebar_child}>
          {sidebar.map((el, i) => (
            <div key={i} className={Style.sidebar}>
              <Link href={{ pathname: `${el.link}` }} className={Style.link}>
                {el.icon} {/* Menampilkan ikon */}
                {el.name}
              </Link>
            </div>
          ))}
        </div>
        <div className={Style.sidebar_child}>
          <div className={Style.sidebar}>
            <Link href="/account" className={Style.link}>
              <FaUser /> Account
            </Link>
          </div>
          <div className={Style.sidebar}>
            <Link href="/settings" className={Style.link}>
              <FaCog /> Settings
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
