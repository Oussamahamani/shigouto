import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div id="container">

    <span> job field</span>
    <span> job level</span>
   {/* entry level, mid level, senior level */}
    <span>how many job you applied for</span>
    <input type="text" name="" id="" />
    <span>how many interviews you got</span>
    <input type="text" name="" id="" />
    <span>how many offers you got</span>
    <input type="text" />

      </div>
    </div>
  )
}
