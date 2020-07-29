import express from 'express';

const router = express.Router();

router.get('/version', (req, res) => {
  res.json({
    version: process.env.VERSION || 'no version available',
  });
});

export default router;
