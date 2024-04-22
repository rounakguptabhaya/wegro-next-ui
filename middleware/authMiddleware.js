import jwt from 'jsonwebtoken';
import cookies from 'next-cookies';

export function authMiddleware(handler) {
  return async (req, res) => {
    try {
      // Extract the JWT token from request cookies
      const { token } = cookies({ req });

      // If token is missing, return unauthorized error
      if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
      }

      // Verify the JWT token
      jwt.verify(token, 'mySecreyKey', (err, decoded) => {
        if (err) {
          // If token is invalid, return forbidden error
          return res.status(403).json({ error: 'Forbidden' });
        }

        // Attach the decoded token to the request object
        req.user = decoded;

        // Call the handler function with the authenticated request
        return handler(req, res);
      });
    } catch (error) {
      // If any other error occurs, return internal server error
      console.error('Auth middleware error:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };
}
