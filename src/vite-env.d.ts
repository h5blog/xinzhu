/// <reference types="vite/client" />

/** 百度地图脚本注入后的全局（HomePage 动态加载脚本使用） */
declare const BMap: {
  Map: new (id: string) => {
    centerAndZoom: (point: unknown, zoom: number) => void;
    enableScrollWheelZoom: () => void;
  };
  Point: new (lng: number, lat: number) => unknown;
};
