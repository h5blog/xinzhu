/// <reference types="vite/client" />

/** 百度地图 JavaScript API GL（动态加载后挂在 window 上） */
interface Window {
  BMapGL?: {
    Map: new (id: string) => {
      centerAndZoom: (point: unknown, zoom: number) => void;
      enableScrollWheelZoom: (enable?: boolean) => void;
    };
    Point: new (lng: number, lat: number) => unknown;
  };
}
