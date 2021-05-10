import { useEffect, useState } from "react";
import { Header } from "../Header";

import styles from "./styles.module.scss";

export function About() {
  const words = ["DEVELOPER", "DESIGNER", "FRONT END DESIGNER."];

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index === words.length) return;

    if (
      subIndex === words[index].length + 1 &&
      index !== words.length - 1 &&
      !reverse
    ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 500 : 150, Math.random() * 100));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <div className={styles.aboutContainer}>
      <Header />
      <div className={styles.textWrapper}>
        <h1>Hi, i'm a</h1>
        <h1 className={styles.green}>
          {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
        </h1>
      </div>
    </div>
  );
}
