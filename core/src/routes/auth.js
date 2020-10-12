import { Router, json } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import ConfigModel from '../models/mongo/config';
import getCurrentConfiguration from '../config';
import { jwtSecret } from '../secrets';

const router = new Router();

async function authenticateUser(request, response) {
  const { email, password } = request.body;

  /* Validate email and password fields */
  if (!email || !password) {
    return response.status(400).json({ error: 'Missing email or password!' });
  }

  /* Verify admin email and password */
  const config = await ConfigModel.findOne();
  if (config.adminUserName !== email || !bcrypt.compareSync(password, config.adminPassword)) {
    return response.status(402).json({ error: 'Incorrect email or password!' });
  }

  /* Get configuration */
  const { auth } = getCurrentConfiguration();

  /* Generate token */
  const token = jwt.sign({
    email,
  },
  jwtSecret, {
    algorithm: auth.jwtAlgorithm,
    expiresIn: auth.jwtExpire,
  });

  return response.status(202).json({ token });
}

// eslint-disable-next-line no-unused-vars
function handleAuthenticationError(error, request, response, next) {
  return response.status(400).json({ error: 'Authentication error!', type: error.type });
}

router.post('/', json(), authenticateUser, handleAuthenticationError);

export default router;
