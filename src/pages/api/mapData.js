import axios from 'axios';

export const mapData = async () => {
  const data = await axios('https://pokeapi.co/api/v2/pokemon?limit=20');
  return data.data.results;
};
