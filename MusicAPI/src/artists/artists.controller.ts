import { Request, Response } from 'express';
import * as ArtistDao from './artists.dao';

// Controller to handle GET /artists
export const readArtists = async (req: Request, res: Response) => {
  const artists = await ArtistDao.readArtists();
  res.json(artists);
};
