import styles from "./Quiz.module.css";
import { AudioPlayer } from "@songbird/components/AudioPlayer";
import { memo, useEffect, useState } from "react";
import { BirdI } from "@songbird/constants/BirdQuiz";

interface Props {
  birds: BirdI[];
}

export const Quiz = memo(({ birds }: Props) => {
  const [shuffleBirds, setShuffleBirds] = useState<BirdI[]>();

  useEffect(() => {
    const shuffleArray = birds.sort(() => Math.random() - 0.5);

    setShuffleBirds(shuffleArray);
  }, [birds]);

  return (
    <div>
      <div className={styles.question}>
        <div>
          <img src={"./plug.jpg"} alt={"bird photo"} />
        </div>
        <div className={styles.nameAndAudioPlayer}>
          <div>1</div>
          <div>
            <AudioPlayer scr={""} />
          </div>
        </div>
      </div>

      <div className={styles.birdsAndDescription}>
        <div className={styles.birds}>
          {birds.map((bird) => (
            <div className={styles.bird}>{bird.name}</div>
          ))}
        </div>
        <div className={styles.description}>описание птицы</div>
      </div>

      <button>следующий уровень</button>
    </div>
  );
});

Quiz.displayName = "Quiz";
