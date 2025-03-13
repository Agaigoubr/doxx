'use client';
import styles from './page.module.css'
import { useRef } from 'react';
import TextDisperse from '@/components/TextDisperse';

export default function Contact() {

  const background = useRef(null);

  const setBackground = (isActive) => {
    background.current.style.opacity = isActive ? 0.8 : 0
  }

  return (
    <main className={styles.main}>
      <div className={styles.body}>

        <div className='introLine'>
          <p>Developer</p>
          <p>SiteWeb</p>
        </div>

        <div className='introLine'>
          <p>Design</p>
          <p>& Frontend</p>
        </div>

        <div className='introLine'>
          <p>Ibrahim</p>
          <p>AGAIGOU</p>
        </div>

        <TextDisperse setBackground={setBackground}>
          <p>+212778845459</p>
        </TextDisperse>

        <TextDisperse setBackground={setBackground}>
          <p>→Email : agaigoubrahm@gmail.com</p>
        </TextDisperse>

        <TextDisperse setBackground={setBackground}>
          <p>→Insta</p>
        </TextDisperse>

      </div>
      <div ref={background} className={styles.background}></div>
    </main>
  )
}