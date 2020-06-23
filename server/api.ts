import express from 'express';
const router: express.Router = express.Router();

router.get('/test', (req: express.Request, res: express.Response) => {
  res.json({
    message:"testing..."
  });
});

export default router;