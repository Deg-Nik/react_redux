import { type ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export interface WeatherData {
  // cityName: ReactNode;
  // temperature: ReactNode;
  id: string;
  city: string;
  temp: string;
  weather: string[];
}