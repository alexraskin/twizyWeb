import { Hono, Context } from 'hono'

import indexHtml from './public/index.html'

const app = new Hono()

app.get('/', async (c: Context) => {
  return c.html(indexHtml)
});

export default app
