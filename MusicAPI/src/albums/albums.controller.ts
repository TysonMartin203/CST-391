import { Request, Response } from 'express';
import * as AlbumDao from './albums.dao';

// Controller for GET /albums
export const readAlbums = async (req: Request, res: Response) => {
  const albumId = parseInt(req.query.albumId as string);
  if (isNaN(albumId)) {
    const albums = await AlbumDao.readAlbums();
    res.json(albums);
  } else {
    const album = await AlbumDao.readAlbumsByAlbumId(albumId);
    res.json(album);
  }
};

// Controller for POST /albums
export const createAlbum = async (req: Request, res: Response) => {
  const result = await AlbumDao.createAlbum(req.body);
  res.status(201).json(result);
};

// Controller for PUT /albums/:albumId
export const updateAlbum = async (req: Request, res: Response) => {
  const albumId = parseInt(req.params.albumId);
  const result = await AlbumDao.updateAlbum(albumId, req.body);
  res.json(result);
};

// Controller for DELETE /albums/:albumId
export const deleteAlbum = async (req: Request, res: Response) => {
  const albumId = parseInt(req.params.albumId);
  const result = await AlbumDao.deleteAlbum(albumId);
  res.json(result);
};
