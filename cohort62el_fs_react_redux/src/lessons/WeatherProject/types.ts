import { type ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export interface WeatherData {
  id: string;
  city: string;
  temp: number;
  weather: {
    icon: string
  }[];
  icon: string;
}