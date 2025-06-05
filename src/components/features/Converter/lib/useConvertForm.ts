import {useCallback, useMemo, useState} from "react";
import type {CurrencyByDate} from "@/entities/Currencies/model";
import {transformToMap} from "@/components/features/Converter/lib/transformToMap.ts";

type ConvertForm = {
  idA: number,
  sumA: string,
  idB: number,
  sumB: string,
};



const initState: ConvertForm = {
  idA: 933,
  sumA: (0).toFixed(4),
  idB: 431,
  sumB: (0).toFixed(4),
};

export const useConvertForm = (data: CurrencyByDate[]) => {
  const [form, setForm] = useState<ConvertForm>({
    ...initState
  });

  // utils
  const map = useMemo(() => transformToMap(data),[data]);
  const convert = useCallback((value: number, idA: number, idB: number): number => {
    const {rate: rateA, scale: scaleA} = map[idA];
    const {rate: rateB, scale: scaleB} = map[idB];
    return Number(value) * rateA * scaleB / (scaleA * rateB);
  },[map]);

  // sums
  const onChangeSumA = (value: string) => {
    const sumA = numericValidator(value);
    const sumB = convert(Number(sumA), form.idA, form.idB).toFixed(4);

    setForm(f => ({
      ...f,
      sumA,
      sumB
    }));
  };

  const onChangeSumB = (value: string) => {
    const sumB = numericValidator(value);
    const sumA = convert(Number(sumB), form.idB, form.idA).toFixed(4);

    setForm(f => ({
      ...f,
      sumA,
      sumB
    }));
  };

  // ids
  const onChangeId = (key: 'idA' | 'idB') => (value: number)=> {
    setForm(f => {
      const newState: ConvertForm = {
        ...f,
        [key]: value,
      };

      const sumA = newState.sumA;
      newState.sumB = convert(Number(sumA), newState.idA, newState.idB).toFixed(4);

      return newState;
    });
  };

  const onSwapIds = () => {
    setForm(f => {
      const newState: ConvertForm = {
        ...f,
        idA: f.idB,
        idB: f.idA
      };

      const sumA = newState.sumA;
      newState.sumB = convert(Number(sumA), newState.idA, newState.idB).toFixed(4);

      return newState;
    });
  };

  return {
    form,
    onChangeIdA: onChangeId('idA'),
    onChangeIdB: onChangeId('idB'),
    onChangeSumA,
    onChangeSumB,
    onSwapIds
  };
};

const numericValidator = (input: string): string => {
  let result = '';
  let hasDot = false;

  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    if (char >= '0' && char <= '9') {
      result += char;
    } else if (char === '.' && !hasDot) {
      result += char;
      hasDot = true;
    }
  }

  return result;
};