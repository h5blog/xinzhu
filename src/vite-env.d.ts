/// <reference types="vite/client" />

/** 百度地图 API 加载完成后挂在 window 上（由 index.html 引入脚本） */
interface Window {
  BMap?: {
    Map: new (id: string) => {
      centerAndZoom: (point: unknown, zoom: number) => void;
      enableScrollWheelZoom: () => void;
    };
    Point: new (lng: number, lat: number) => unknown;
  };
}
