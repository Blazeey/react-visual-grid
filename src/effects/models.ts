import { CSSProperties } from "react";
import { GalleryProps, ZoomLevel } from "../components/gallery/gallery.model";

export type Options = Pick<
  GalleryProps,
  | "mode"
  | "gridDimensions"
  | "width"
  | "height"
  | "scrollDir"
  | "gap"
  | "totalImages"
  | "imageSizes"
>;

export type Region = { upperBound: number; lowerBound: number };

export type ScrollPositions = {
  scrollLeft: number;
  scrollTop: number;
};

export type useSetupFunctionType = (
  options: Options
) => {
  style: CSSProperties;
  wrapperStyle: CSSProperties;
  onRef: (node: HTMLDivElement) => void;
  windowRegion: Region;
  columns: number;
  rows: number;
  containerStyle: CSSProperties;
  fullScreen: () => void;
  resizeImages: (i: ZoomLevel) => void;
  hideImages: boolean | null;
  activeZoomLevel: ZoomLevel;
  scrollPositions: ScrollPositions;
  isScrolled: boolean;
};
