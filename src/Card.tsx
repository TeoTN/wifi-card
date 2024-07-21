import QRCodeBody from "react-qr-code";
import styled from "styled-components";
import { CardData } from "./interfaces";
import { Title } from "./Title";

const CardContainer = styled.div`
  position: relative;
  justify-content: space-between;
  text-align: left;
  border: 1px solid #eee;
  display: block;
  width: 85.6mm;
  height: 53.9mm;
  flex: 0 0 auto;
  display: flex;
  padding: 5mm;
  gap: 5mm;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top right, #3be8b0 0, #02ceff 100%);
    width: 100%;
    height: 6px;
    content: " ";
  }
`;

const QRCode = styled(QRCodeBody)`
  margin-top: auto;
  margin-bottom: 0;
  max-width: 35mm;
  max-height: 35mm;
`;

const Label = styled.dt`
  color: #1264a3;
  background: rgba(29, 155, 209, 0.1);
  padding: 0 2px 1px 2px;
  font-size: 0.9rem;
  width: fit-content;
`;

const Value = styled.dd`
  text-align: left;
  width: fit-content;
  margin: 0.2rem 0;
`;

export const Card = ({ title, ssid, password, authType }: CardData) => {
  const fmtPassword = password.replace(/;/g, ";");
  const value = `WIFI:S:${ssid};T:${authType};P:${fmtPassword};;`;
  return (
    <CardContainer>
      <div>
        <Title>{title}</Title>
        <dl>
          <Label>SSID</Label>
          <Value id="ssid">{ssid}</Value>
          <Label>Password</Label>
          <Value id="password">{password}</Value>
        </dl>
      </div>
      <QRCode value={value} />
      {/* <Bar/> */}
    </CardContainer>
  );
};
