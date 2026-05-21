import { getColor, getPalette } from 'colorthief';

export interface ColorResult {
  dominant: { hex: string; rgb: { r: number; g: number; b: number } };
  palette: { hex: string; rgb: { r: number; g: number; b: number } }[];
}

function rgbToHex(r: number, g: number, b: number): string {
  return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
}

export async function extractColors(imagePath: string): Promise<ColorResult> {
  const dominantRgb = await getColor(imagePath, 10);
  const paletteRgb = await getPalette(imagePath, 5, 10);

  const dominant = {
    rgb: { r: dominantRgb[0], g: dominantRgb[1], b: dominantRgb[2] },
    hex: rgbToHex(dominantRgb[0], dominantRgb[1], dominantRgb[2]),
  };

  const palette = paletteRgb.map(c => ({
    rgb: { r: c[0], g: c[1], b: c[2] },
    hex: rgbToHex(c[0], c[1], c[2]),
  }));

  return { dominant, palette };
}
