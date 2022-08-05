import { useEffect, useState } from "react";

interface ICity {
  nome: string;
  codigo_ibge: string;
}

export const useCities = ({ uf }: { uf: string }) => {
  const [cities, setCities] = useState<ICity[]>([]);
  const [loadingCities, setLoadingCities] = useState<boolean>(false);

  useEffect(() => {
    if (!uf) return;

    setLoadingCities(true);

    fetch(`https://brasilapi.com.br/api/ibge/municipios/v1/${uf}`)
      .then((res) => res.json())
      .then((data) => setCities(data))
      .catch((error) => console.log(error))
      .finally(() => setLoadingCities(false));
  }, [uf]);

  return {
    cities,
    loadingCities,
  };
};
