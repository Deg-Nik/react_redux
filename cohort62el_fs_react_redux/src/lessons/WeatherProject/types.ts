import { type ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export interface WeatherData {
  id: string;
  city: string;
  temp: string;
  weather: string[];
}