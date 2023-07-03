import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const router = Router();

router.get('/teste', (req, res) => {
  console.log(req.body);
  return res.status(StatusCodes.UNAUTHORIZED).json(req.body);
});

export { router };