import { useState } from "react";
import Select from "react-select";
import { useCities } from "../hooks/useCities";

type CitiesProps = {
  uf: string;
};

export const Cities = ({ uf }: CitiesProps) => {
  const [selectedCity, setSelectedCity] = useState<number | null>(null);

  const { cities, loadingCities } = useCities({
    uf,
  });

  const citiesOptions = cities.map((city) => ({
    value: city.codigo_ibge,
    label: city.nome,
  }));

  return (
    <div style={{ width: "300px" }}>
      <Select
        isLoading={loadingCities}
        isDisabled={loadingCities || citiesOptions.length === 0}
        options={citiesOptions}
        placeholder="Selecione a Cidade"
      />
    </div>
  );
};
