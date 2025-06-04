import styles from "@/components/layouts/FlexContainer/styles.module.scss";
import {cn} from "@/shared/utils";
import type {FC, ReactNode} from "react";

type Props = {
  mainComponent: ReactNode;
  sideComponent: ReactNode;
};

const FlexContainer: FC<Props> = ({mainComponent, sideComponent}) => {
  return (
    <main className={styles.root}>
      <div className={styles.content}>
        <div className={cn(
          styles.currenciesDateInput,
          "UiContainer",
        )}>
          {sideComponent}
        </div>
        <div className={cn(
          styles.currenciesTable,
          "UiContainer",
        )}>
          {mainComponent}
        </div>
      </div>
    </main>
  );
};

export default FlexContainer;