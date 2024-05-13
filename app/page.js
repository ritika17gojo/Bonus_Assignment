"use client"

import React, { useEffect, useState} from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [dogImage, setDogImage] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://api.thedogapi.com/v1/images/search', {
          headers: {
            'x-api-key': process.env.NEXT_PUBLIC_API_KEY
          }
        });
        const data = await response.json();
        setDogImage(data[0].url);
      } catch (error) {
        console.error('Error fetching data:',error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>My Pet</div>
        <nav className= {styles.navbar}>
          <a href="#">Home</a>
          <a href="#">Cats</a>
          <a href="#">Dogs</a>
          <a href="#">Birds</a>
        </nav>
        <div className={styles.socialMedia}>
          <a href="#">FB</a>
          <a href="#">TW</a>
          <a href="#">IG</a>
        </div>
      </header>
      <main className={styles.main}>
        <h1 className={styles.title}>My Pet</h1>
        <h2>Online Pet Shop</h2>
        {dogImage ? <img src={dogImage} alt="A random dog" className={styles.featuredImage} /> : <p>Loading...</p>}
      </main>
    </div>
  );
}