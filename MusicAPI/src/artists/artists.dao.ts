import { execute } from '../services/mysql.connector';
import { Artist } from './artists.model';
import { queries } from './artists.queries';

// DAO to fetch artists
export const readArtists = async (): Promise<Artist[]> => {
  return execute<Artist[]>(queries.readArtists);
};