// Router definitions for album API endpoints
import { Router } from 'express';
import * as AlbumsController from './albums.controller';

export const router = Router();

router.get('/albums', AlbumsController.readAlbums);
router.post('/albums', AlbumsController.createAlbum);
router.put('/albums/:albumId', AlbumsController.updateAlbum);
router.delete('/albums/:albumId', AlbumsController.deleteAlbum);
