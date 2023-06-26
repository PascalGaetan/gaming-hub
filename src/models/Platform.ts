export interface Platform {
  id: number;
  slug: string;
  name: string;
}

export interface PlatformList {
  count: number;
  results: Platform[]
}