const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export interface ColorData {
  dominant: { hex: string; rgb: { r: number; g: number; b: number } };
  palette: { hex: string; rgb: { r: number; g: number; b: number } }[];
}

export async function extractColorsFromImage(file: File): Promise<ColorData> {
  const formData = new FormData();
  formData.append('image', file);

  const res = await fetch(`${API_BASE}/api/colors/extract`, {
    method: 'POST',
    body: formData,
  });

  if (!res.ok) throw new Error('Color extraction failed');

  const data = await res.json();
  return data.colors;
}
