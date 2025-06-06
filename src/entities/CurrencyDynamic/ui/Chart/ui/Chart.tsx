import {CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {dateTickFormatter, labelFormatter} from "@/entities/CurrencyDynamic/ui/Chart/lib/chartUtils.ts";
import type {FC} from "react";
import type {CurrencyDynamic} from "@/entities/CurrencyDynamic/model";

type Props = {
  data: CurrencyDynamic[];
}

const Chart: FC<Props> = ({data}) => {


  return (
    <ResponsiveContainer
    >
      <LineChart data={data}>
        <CartesianGrid />

        <XAxis
          dataKey="Date"
          type="category"
          interval="preserveStartEnd"
          tickFormatter={(value) => dateTickFormatter(value)}
          tick={{ fontSize: 12 }}
          minTickGap={20}
          domain={['dataMin', 'dataMax']}
        />

        <YAxis
          domain={['auto', 'auto']}
          type="number"
          tick={{ fontSize: 12 }}
          tickFormatter={(value) => value.toFixed(3)}

        />
        <Tooltip
          formatter={(value) => `${Number(value).toFixed(3)} BYN`}
          labelFormatter={labelFormatter}
        />

        <Line
          type="linear"
          dataKey="Cur_OfficialRate"
          name={"Курс"}
          stroke="#1e3e7a"
          dot={false}
          activeDot={{ r: 4 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;