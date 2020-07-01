const fs = require('fs').promises;
import { DEMANDS_PATH, MAX_PATH } from '../lib/files';

const getDemands = async (req, res) => {
  const demands = (await fs.readFile(DEMANDS_PATH, { encoding: 'utf-8' }))
    .replace(/\r/g, '')
    .split('\n')
    .map((d) => d.split(',').map((dd) => parseInt(dd, 10)));

  const max = (await fs.readFile(MAX_PATH, { encoding: 'utf-8' }))
    .replace(/\r/g, '')
    .split('\n')
    .map((m) => parseInt(m, 10));

  res.json({
    demands,
    max,
  });
};

export { getDemands };