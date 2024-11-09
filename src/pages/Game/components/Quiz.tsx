import styles from "./Quiz.module.css";
import { AudioPlayer } from "@songbird/components/AudioPlayer";
import { memo, useEffect, useState } from "react";
import { BirdI } from "@songbird/constants/BirdQuiz";

interface Props {
  birds: BirdI[];
}

export const Quiz = memo(({ birds }: Props) => {
  const [csBirds, setCsBirds] = useState<BirdI[]>();

  useEffect(() => {
    const shuffleArray = birds.sort(() => Math.random() - 0.5);

    setCsBirds(oc);
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

      <div>questions</div>

      <button>следующий уровень</button>
    </div>
  );
});

Quiz.displayName = "Quiz";
