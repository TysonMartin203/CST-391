// DAO methods for album resource
import { execute } from '../services/mysql.connector';
import { Album } from './albums.model';
import { queries } from './albums.queries';

export const readAlbums = async (): Promise<Album[]> => {
  return execute<Album[]>(queries.readAlbums);
};

export const readAlbumsByAlbumId = async (albumId: number): Promise<Album[]> => {
  return execute<Album[]>(queries.readAlbumsByAlbumId, [albumId]);
};

export const createAlbum = async (album: Album): Promise<any> => {
  const { title, artistId, description } = album;
  return execute(queries.createAlbum, [title, artistId, description]);
};

export const updateAlbum = async (albumId: number, album: Album): Promise<any> => {
  const { title, artistId, description } = album;
  return execute(queries.updateAlbum, [title, artistId, description, albumId]);
};

export const deleteAlbum = async (albumId: number): Promise<any> => {
  return execute(queries.deleteAlbum, [albumId]);
};