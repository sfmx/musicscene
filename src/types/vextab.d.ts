declare module 'vextab' {
  export class VexTab {
    constructor(artist: Artist);
    parse(vextabString: string): void;
  }

  export class Artist {
    constructor(x: number, y: number, width: number, options?: { scale?: number });
    render(renderer: any): void;
  }
}
