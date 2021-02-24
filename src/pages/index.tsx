import React from "react";
import { CompletedChallenges } from "../components/CompletedChallanges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import styles from '../styles/pages/Home.module.css';

import Head from 'next/head';
import { ChallangeBox } from "../components/ChallangeBox";

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Início | Move.it</title>
      </Head>

      <ExperienceBar></ExperienceBar>

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>
          <ChallangeBox />
        </div>
      </section>
    </div>
  )
}
