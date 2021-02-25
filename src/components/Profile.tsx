import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/31699929?s=460&u=a662956c8d7b6ff94e424b7504e44b7973ac83a7&v=4" alt="Joao Vitor"/>
            <div>
                <strong>João Vitor Mineiro</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p> 
            </div>
        </div>
    );
} 