import React from "react";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import styles from '../styles/pages/Home.module.css';

import Head from 'next/head';
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from "../contexts/CountdownContext";

import { GetServerSideProps } from 'next';

export default function Home(props) {

  console.log('a partir daqui já vai estar aparecendo no console do browser...');
  console.log(props);

  return (
    <div className={styles.container}>

      <Head>
        <title>Início | Move.it</title>
      </Head>

      <ExperienceBar></ExperienceBar>

      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
  )
}


export const getServerSideProps: GetServerSideProps = async (context) => {

  //por exemplo uma chamada api
  console.log('rodando no Next.js dentro do servidor Node...');

  // const cookies = context.req.cookies;
  const { level, currentExperience, challengesCompleted } = context.req.cookies;

  const user = {
    level: level,
    currentExperience: currentExperience,
    challangesCompleted: challengesCompleted
  };


  return {

    props: user
  }
}