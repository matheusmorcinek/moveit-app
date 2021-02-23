import styles from '../styles/components/Profile.module.css';

export function Profile() {

    return (
        <div className={styles.profileContainer}>
            <img src='https://github.com/matheusmorcinek.png' alt='Profile photo' />
            <div>
                <strong>Matheus Morcinek</strong>
                <p>
                    <img src='icons/level.svg' alt='Level icon'/>
                    Level 1
                    </p>
            </div>
        </div>
    );
}