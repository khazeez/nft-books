"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import pinata from '../pages/API/pinata'
import style from './page.module.css'
// import BuyBook from './buy-book/page';
import Link from 'next/link';
import { FaHome, FaPlus, FaShoppingCart, FaInfoCircle, FaDollarSign, FaTimes, FaExchangeAlt, FaHeart, FaClipboardList, FaCog, FaUser } from 'react-icons/fa'; // Ikon-ikon dari react-icons

const Home = () => {

const boook = pinata.getFiles()

  const [bookList, setbookList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    const book = pinata.getFiles()
    setIsLoading(true)
    book.then((results) => {
      setbookList(results); 
      console.log(results) 
      console.log(book);
      setIsLoading(false)
    });
  }, []);

  const detailBook= async ()=> {

  }


  const PopularbookList = () => {
    return bookList.map((book, i) => {
      
      return (
        <div className={style.book_wrapper} key={i}  onClick={() => detailBook(book.id)}>
          <div className={style.book}>
          <div className="book-title">{book.name}</div>
          {/* <img className='poster' src={`https://lavender-electronic-skink-917.mypinata.cloud/ipfs/${book.cid}`} alt={book.title} /> */}
          <div className="book-date">book release: {book.id}</div>
          <div className="book-rate">Rating: {book.size}</div>
          </div>  
          <div className={style.button_action}>
           <Link href='/buy-book' className={style.button_action_buy} > <FaShoppingCart /> Buy Book</Link> 
           <Link href='/buy-book' className={style.button_action_detail} ><FaInfoCircle /> See detail</Link> 
          </div>
        </div>
      );
    });
  };

  if (isLoading) {
    return <p>Loading...</p>
  }
  return (
    <div>
      <h3>List Books</h3>
      
        <div className={style.book_container}>
        <PopularbookList />
        </div> 
    </div>
  )
}

export default Home