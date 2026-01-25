import { type ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export interface WeatherData {
  id: string;
  city: string;
  temp: number;
  weather: string[];
  icon: string;
}