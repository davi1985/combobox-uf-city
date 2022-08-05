import { useState } from "react";
import Select from "react-select";
import { useStates } from "../hooks/useStates";

type StatesProps = {
  onChange: (args: string) => void;
};

export const States = ({ onChange }: StatesProps) => {
  const { states } = useStates();
  const [selectedState, setSelectedState] = useState<number | null>(null);

  const statesOptions = states.map((state) => ({
    value: state.id,
    label: state.nome,
  }));

  const selectedOptionState = statesOptions.find(
    (e) => e.value === selectedState
  );

  const handleStatesUpdate = (event: any) => {
    setSelectedState(event.value);

    const selectedUf = states.find((e) => e.id === event.value)?.sigla!;

    onChange(selectedUf);
  };

  return (
    <div style={{ width: "300px" }}>
      <Select
        menuPosition="absolute"
        menuPlacement="auto"
        options={statesOptions.sort((a, b) => a.label.localeCompare(b.label))}
        value={selectedOptionState}
        onChange={handleStatesUpdate}
        placeholder="Selecione um Estado"
      />
    </div>
  );
};
