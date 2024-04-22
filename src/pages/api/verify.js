// pages/api/middleware.js

import jwt from 'jsonwebtoken';
import cookies from 'next-cookies';


export default function verify(req, res, next) {
  // Get the token from the request headers, cookies, or wherever it's stored
//   const token = req.headers.authorization?.replace('Bearer ', '');
  const { token } = cookies({ req })

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, 'mySecreyKey');

    // Add the decoded token to the request for use in the route handler
    req.user = decoded;

    // Call next() to pass control to the next middleware or route handler
    next();
  } catch (error) {
    // Token verification failed
    return res.status(401).json({ error: 'Unauthorized' });
  }
}
