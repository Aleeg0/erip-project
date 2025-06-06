import {CurrencyDynamicChart, CurrencyDynamicInputBlock} from "@/entities/CurrencyDynamic/ui";
import {FlexContainer} from "@/components/layouts";

const CurrencyDynamicPage = () => {
  return (
    <FlexContainer
      mainComponent={<CurrencyDynamicChart/>}
      sideComponent={<CurrencyDynamicInputBlock/>}
    />
  );
};

export default CurrencyDynamicPage;