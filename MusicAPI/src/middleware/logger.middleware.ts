import { Request, Response, NextFunction } from 'express';

// Logger middleware that tracks request duration and logs method, URL, and status
const logger = (req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`${req.method} ${req.originalUrl} - ${res.statusCode} [${duration}ms]`);
  });
  next();
};

export default logger;