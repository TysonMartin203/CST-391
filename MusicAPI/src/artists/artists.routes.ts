import { Router } from 'express';
import * as ArtistsController from './artists.controller';

// Router setup for artist endpoints
export const router = Router();

router.get('/artists', ArtistsController.readArtists);