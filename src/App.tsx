import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import { Card } from "./Card";
import { Form } from "./Form";
import { AuthType, CardData } from "./interfaces";

const Container = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
`;

const defaultValues: CardData = {
  title: "Guest WiFi",
  ssid: "Lord of the Rings",
  password: "#0ne7oRule7hem4ll#",
  authType: AuthType[0],
};

const STORAGE_KEY = '@@wifi-card/form-values';

const getInitialValues = (): CardData => {
  const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  return { ...defaultValues, ...stored };
}

function App() {
  const [cardData, setCardData] = useState<CardData>(getInitialValues());

  const handleGenerate = (data: CardData) => {
    setCardData(data);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  return (
    <Container>
      <Form data={cardData} onChange={handleGenerate} />
      <Card {...cardData} />
    </Container>
  );
}

export default App;
