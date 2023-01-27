import { ReactElement } from 'react';


export interface IRoutes {
  href: string,
  label: string,
  icon: ReactElement
}

export type TSteps ={
  label: string,
  stepNum: number
}