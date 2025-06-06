import {CurrenciesTable, CurrenciesInputBlock} from "@/entities/Currencies/ui";
import {FlexContainer} from "@/components/layouts";

const HomePage = () => {

  return (
    <FlexContainer
      mainComponent={<CurrenciesTable/>}
      sideComponent={<CurrenciesInputBlock/>}
    />
  );
};

export default HomePage;