import { useState, useEffect, Fragment, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';



export function Countdown() {

    const { minutes, seconds, hasFinished, isActive, startCountdown, resetCountdown } = useContext(CountdownContext);

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    return (
        <div>

            <div className={styles.countdownContainer}>

                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>


            {/* {
                hasFinished && (
                    <button disabled
                        type='button'
                        className={styles.countdownButton}>
                        Ciclo encerrado
                    </button>
                )
            } */}



            {
                hasFinished ? (
                    <button disabled
                        type='button'
                        className={styles.countDownButton}>
                        Ciclo encerrado
                    </button>
                ) : (
                    <Fragment>
                        {
                            isActive ? (

                                <button type='button' onClick={resetCountdown} className={`${styles.countDownButton} ${styles.countdownButtonActive}`}>
                                    Abandonar ciclo
                                </button>
                            ) : (

                                <button type='button' onClick={startCountdown} className={styles.countDownButton}>
                                    Iniciar um ciclo
                                </button>
                            )
                        }
                    </Fragment>
                )
            }


        </div>
    );
}