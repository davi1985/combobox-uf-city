import { useState } from "react";
import { Container, Header } from "semantic-ui-react";

import { States } from "./components/States";
import { Cities } from "./components/Cities";

export const App = () => {
  const [selectedUf, setSelectedUf] = useState<string>("");

  const customStyle = {
    margin: "1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  return (
    <>
      <Header as={"h2"} textAlign="center">
        Select with React-Select
      </Header>

      <Container style={customStyle}>
        <States onChange={setSelectedUf} />

        <Cities uf={selectedUf} />
      </Container>
    </>
  );
};
