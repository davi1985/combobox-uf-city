import { useEffect, useState } from "react";

interface Region {
  id: number;
  sigla: string;
  nome: string;
}

interface IState {
  id: number;
  sigla: string;
  nome: string;
  region: Region;
}

export const useStates = () => {
  const [states, setStates] = useState<IState[]>([]);

  useEffect(() => {
    fetch("https://brasilapi.com.br/api/ibge/uf/v1")
      .then((res) => res.json())
      .then((data) => setStates(data))
      .catch((error) => console.log(error));
  }, []);

  return {
    states,
  };
};
