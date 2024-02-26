import { TeslaColor } from './tesla-color.type';

export type TeslaModel = {
  code: string;
  description: string;
  colors: TeslaColor[];
};
