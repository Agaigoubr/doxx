import React from 'react'
import Image from 'next/image'
import Page from "@/components/Page/page"
import './globals.css'
import dynamic from 'next/dynamic';
import SmoothScroll from '@/components/smoothScroll';
import Projects from '@/components/projects';
import styles from './page.module.scss'
import Earth from "@/components/Earth";


export default function Home() {
  return (

       <SmoothScroll>

<Page />
    <main className={styles.main}>
      <Earth />
      <Projects />
    </main>
  </SmoothScroll>
  )
}
