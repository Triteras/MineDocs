import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Múltiplas Plataformas",
    Svg: require("@site/static/img/undraw_ninja_e-52-b.svg").default,
    description: (
      <>
        Jogue onde quiser: Nosso servidor de Minecraft é compatível com PC,
        celular e consoles! (Android, iOS, MAC, Linux, Windows, PS4, Xbox, etc.)
      </>
    ),
  },
  {
    title: "Servidor no HARD",
    Svg: require("@site/static/img/undraw_rising_-8-svm.svg").default,
    description: (
      <>
        Desafie sua sobrevivência: Jogue em nosso servidor com dificuldade no
        modo difícil e plugins para tornar a experiência ainda mais desafiadora!
      </>
    ),
  },
  {
    title: "Sempre Novo",
    Svg: require("@site/static/img/undraw_update_re_swkp.svg").default,
    description: (
      <>
        Sempre há algo novo: Fique por dentro dos eventos e atualizações mais
        recentes em nosso servidor de Minecraft!
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
