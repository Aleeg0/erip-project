import {useCallback, useEffect, useMemo, useState} from "react";
import type {CurrencyByDate} from "@/entities/Currencies/model";
import {transformToMap} from "@/components/features/Converter/lib/transformToMap.ts";
import {useNavigate, useSearchParams} from "react-router";

export type ConvertForm = {
  idA: number,
  sumA: string,
  idB: number,
  sumB: string,
};

const defaultState: ConvertForm = {
  idA: 933,
  sumA: (0).toFixed(4),
  idB: 431,
  sumB: (0).toFixed(4),
};

export const useConvertForm = (data: CurrencyByDate[]) => {
  // utils
  const map = useMemo(() => transformToMap(data),[data]);
  const convert = useCallback((value: number, idA: number, idB: number): number => {
    if (map[idA] && map[idB]){
      const {rate: rateA, scale: scaleA} = map[idA];
      const {rate: rateB, scale: scaleB} = map[idB];
      return Number(value) * rateA * scaleB / (scaleA * rateB);
    }
    return 0;
  },[map]);
  
  
  // url
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState<ConvertForm>();

  useEffect(() => {
    const idA = Number(searchParams.get("idA"));
    const idB = Number(searchParams.get("idB"));
    const sumA = Number(searchParams.get("sumA"));

    if (idA && idB && sumA && map[idA] && map[idB]) {
      const sumB = convert(Number(sumA), idA, idB);
      
      setSearchValue({
        idA,
        idB,
        sumA: sumA.toFixed(4),
        sumB: sumB.toFixed(4)
      });
      navigate('/converter', {replace: true});
    }
  }, [convert, map, navigate, searchParams]);

  const [userForm, setUserForm] = useState<ConvertForm>();
  const formData = {
    ...defaultState,
    ...searchValue,
    ...userForm
  };

  // sums
  const onChangeSumA = (value: string) => {
    const sumA = numericValidator(value);
    const sumB = convert(Number(sumA), formData.idA, formData.idB).toFixed(4);

    setUserForm({
      ...formData,
      sumA,
      sumB
    });
  };

  const onChangeSumB = (value: string) => {
    const sumB = numericValidator(value);
    const sumA = convert(Number(sumB), formData.idB, formData.idA).toFixed(4);

    setUserForm({
      ...formData,
      sumA,
      sumB
    });
  };

  // ids
  const onChangeId = (key: 'idA' | 'idB') => (value: number)=> {
    setUserForm(() => {
      const newState: ConvertForm = {
        ...formData,
        [key]: value,
      };

      const sumA = newState.sumA;
      newState.sumB = convert(Number(sumA), newState.idA, newState.idB).toFixed(4);

      return newState;
    });
  };

  const onSwapIds = () => {
    setUserForm(() => {
      const newState: ConvertForm = {
        ...formData,
        idA: formData.idB,
        idB: formData.idA
      };

      const sumA = newState.sumA;
      newState.sumB = convert(Number(sumA), newState.idA, newState.idB).toFixed(4);

      return newState;
    });
  };

  return {
    form: formData,
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