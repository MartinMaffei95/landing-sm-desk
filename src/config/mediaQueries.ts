export enum MediaQuerys {
  'PHONE' = 320,
  'BIG_PHONE' = 640,
  'TABLET' = 768,
  'DESKTOP' = 1024,
}

export const mq: MeqiaQuerysConfig = {
  PHONE: { key: 'PHONE', size: 320 },
  BIG_PHONE: { key: 'BIG_PHONE', size: 640 },
  TABLET: { key: 'TABLET', size: 768 },
  DESKTOP: { key: 'DESKTOP', size: 1024 },
};

export interface MeqiaQuerysConfig {
  PHONE: { key: string; size: number };
  BIG_PHONE: { key: string; size: number };
  TABLET: { key: string; size: number };
  DESKTOP: { key: string; size: number };
}
