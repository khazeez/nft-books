import React from 'react'
import Link from 'next/link'

const index = () => {
  return (
    <div>
      <h1>NFT BOOKS</h1>
      <ul>
        <li>
        <Link href='/add-book'>add book</Link>
        </li>
        <li>
        <Link href='/buy-book'>Buy book</Link>

        </li>
      </ul>
    </div>
  
    
  )
}

export default index