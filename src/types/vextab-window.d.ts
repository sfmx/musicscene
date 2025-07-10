// VexTab global types
declare global {
  interface Window {
    VexTabDiv?: {
      autoRender: () => void;
    };
    VEXTAB_USE_SVG?: boolean;
  }
}

export {};
