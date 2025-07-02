// types/Weapon.ts

export interface WeaponChroma {
  uuid: string;
  displayName: string;
  displayIcon: string | null;
  fullRender: string;
  swatch: string | null;
  streamedVideo: string | null;
  assetPath: string;
}

export interface WeaponLevel {
  uuid: string;
  displayName: string;
  levelItem: string | null;
  displayIcon: string;
  streamedVideo: string | null;
  assetPath: string;
}

export interface Weapon {
  uuid: string;
  displayName: string;
  themeUuid: string;
  contentTierUuid: string;
  displayIcon: string;
  wallpaper: string | null;
  assetPath: string;
  chromas: WeaponChroma[];
  levels: WeaponLevel[];
}
