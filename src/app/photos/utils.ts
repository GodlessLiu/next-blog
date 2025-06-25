import fs from 'fs';
import path from 'path';

function getPhotoFiles(dir: string): string[] {
  return fs.readdirSync(dir).filter((file) => ['.jpg', '.jpeg', '.png', '.webp'].includes(path.extname(file)));
}

export function listPhotos(): string[] {
  return getPhotoFiles(path.join(process.cwd(), 'public', 'resources', 'photos'));
}
