import { ReactNode } from "react";

export interface LinkProps {
  children: ReactNode;
  ruta: string;
}

export interface Personaje {
    id: number,
    age: number,
    birthdate: string,
    gender: string,
    name: string,
    occupation: string,
    portrait_path: string,
    phrases: string[],
    status: string
}