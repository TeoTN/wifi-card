import { ChangeEvent, useState } from "react";
import { AuthType, CardData } from "../interfaces";
import styled from "styled-components";
import { Button } from "./Button";
import { Label } from "./Label";
import { Select } from "./Select";
import { Input } from "./Input";

interface Props {
  data: CardData;
  onChange: (updated: CardData) => void;
}

const FormContainer = styled.form`
  min-width: 250px;
  display: flex;
  border: 1px solid #eee;
  border-radius: 1rem;
  padding: 1rem;
  flex-direction: column;
  gap: 0.5rem;
  
  @media print {
    display: none !important;
  }
`;

export const Form = ({ data, onChange }: Props) => {
  const [updated, setUpdated] = useState<CardData>(data);

  const handleChange = (
    evt: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value } = evt.target;
    setUpdated((cd: CardData) => ({ ...cd, [name]: value }));
  };

  return (
    <FormContainer>
      <Label htmlFor="title">Title</Label>
      <Input
        id="title"
        name="title"
        value={updated.title}
        onChange={handleChange}
      />

      <Label htmlFor="ssid">SSID</Label>
      <Input
        id="ssid"
        name="ssid"
        value={updated.ssid}
        onChange={handleChange}
      />

      <Label htmlFor="password">Password</Label>
      <Input
        id="password"
        name="password"
        value={updated.password}
        onChange={handleChange}
      />

      <Label htmlFor="authType">Authentication</Label>
      <Select
        id="authType"
        name="authType"
        value={updated.authType}
        onChange={handleChange}
      >
        {AuthType.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </Select>
      <Button className="cta" onClick={() => onChange(updated)}>
        Generate Card!
      </Button>
    </FormContainer>
  );
};
