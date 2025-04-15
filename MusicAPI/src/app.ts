import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import { router as albumsRouter } from './albums/albums.routes';
import { router as artistsRouter } from './artists/artists.routes';
import logger from './middleware/logger.middleware';