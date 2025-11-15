import { promises as fs } from 'fs';

export default async function readDatabase(path) {
  try {
    const data = await fs.readFile(path, 'utf-8');

    const lines = data
      .trim()
      .split('\n')
      .filter((line) => line.trim() !== '');

    const students = lines.slice(1);

    const result = {};

    for (const line of students) {
      const parts = line.split(',');

      const firstname = parts[0].trim();
      const field = parts[3].trim();

      if (!result[field]) {
        result[field] = [];
      }

      result[field].push(firstname);
    }

    return result;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}
