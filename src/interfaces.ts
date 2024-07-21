export const AuthType = ["WPA", "WEP", "WPA2-EAP", "nopass"] as const;
export type AuthType = (typeof AuthType)[number];

export interface CardData {
  title: string;
  ssid: string;
  password: string;
  authType: AuthType;
}
