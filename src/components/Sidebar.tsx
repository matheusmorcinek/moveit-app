import styles from '../styles/components/Sidebar.module.css';

export function Sidebar() {

    return (
        <div className={styles.container}>
            <img src='/logo.svg' alt='Move.it logo'></img>


            <button type='button' >

                <img src='/icons/home.svg' alt='Home icon'></img>
                <div className={styles.selected}></div>
            </button>

            <button type='button'>

                <img src='/icons/leaderboard.svg' alt='Leader board icon'></img>
                <div className={styles.selected}></div>
            </button>


        </div>);
}