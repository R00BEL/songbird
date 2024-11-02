import { useCallback, useState } from "react";
import cx from "classnames";
import styles from "./Game.module.css";
import TypesOfLevels from "@songbird/constants/TypesOfLevels";

interface LevelsI {
  type: TypesOfLevels;
  label: string;
}

const Levels: LevelsI[] = [
  { type: TypesOfLevels.WARM_UP, label: "Разминка" },
  { type: TypesOfLevels.SPARROWS, label: "Воробьиные" },
  { type: TypesOfLevels.FOREST, label: "Лесные" },
  { type: TypesOfLevels.SINGING, label: "Певчие" },
  { type: TypesOfLevels.PREDATORS, label: "Хищные" },
  { type: TypesOfLevels.SEA, label: "Морские" },
];

export const Game = () => {
  const [selectedType, setSelectedType] = useState<TypesOfLevels>(
    TypesOfLevels.WARM_UP,
  );

  const handleSelectedType = useCallback(
    (newType: TypesOfLevels) => () => {
      setSelectedType(newType);
    },
    [],
  );

  return (
    <div className={styles.game}>
      <div className={styles.checkAndButton}>
        <div className={styles.check}>Счёт: </div>
        <button className={styles.button}>Новая игра</button>
      </div>

      <div className={styles.levels}>
        {Levels.map((level) => (
          <div
            className={cx(styles.level, {
              [styles.selectedLevel]: level.type === selectedType,
            })}
            onClick={handleSelectedType(level.type)}
          >
            {level.label}
          </div>
        ))}
      </div>
    </div>
  );
};

Game.displayName = "Game";
