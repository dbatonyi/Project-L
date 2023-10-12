import { Injectable, NestMiddleware } from '@nestjs/common';
import { Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { Request } from 'express';

interface CustomRequest extends Request {
  user?: any;
}

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: CustomRequest, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.replace('Bearer ', ''); // Get the token from the Authorization header

    if (token) {
      try {
        const decoded = jwt.verify(token, 'your-secret-key'); // Verify the token
        req.user = decoded; // Attach user data to the request object
        next(); // User is authenticated, proceed to the next middleware or route handler
      } catch (error) {
        res.status(401).json({ message: 'Unauthorized' }); // Invalid token, send 401 Unauthorized response
      }
    } else {
      res.status(401).json({ message: 'Unauthorized' }); // No token provided, send 401 Unauthorized response
    }
  }
}
