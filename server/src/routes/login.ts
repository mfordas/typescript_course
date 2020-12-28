import { Router, Request, Response } from 'express';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

export const router = Router();

router.get('/login', (req: RequestWithBody, res: Response) => {
  res.send(`
  <form method="POST">
  <div>
  <label>Email</label>
  <input name="email" />
  </div>
  <div>
  <label>Password</label>
  <input name="password" />
  </div>
  <button>Submit</button>
  </form>
  `);
});

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;

  if (email && password) {
    res.send(email + password);
  } else {
    res.send('Enter email');
  }
});
