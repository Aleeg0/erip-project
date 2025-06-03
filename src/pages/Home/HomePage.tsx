import {CurrenciesTable, CurrenciesInputBlock} from "@/entities/Currencies/ui";
import styles from './styles.module.scss';
import {cn} from "@/shared/utils";

const HomePage = () => {

  return (
    <main className={styles.root}>
      <div className={styles.content}>
        <div className={cn(
          styles.currenciesDateInput,
          "UiContainer",
        )}>
          <CurrenciesInputBlock/>
        </div>
        <div className={cn(
          styles.currenciesTable,
          "UiContainer",
        )}>
          <CurrenciesTable/>
        </div>
      </div>
    </main>
  );
};

export default HomePage;