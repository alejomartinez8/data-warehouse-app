import { NextApiRequest, NextApiResponse } from 'next';
import getConfig from 'next/config';
import httpProxyMiddleware from 'next-http-proxy-middleware';

// const isDevelopment = process.env.NODE_ENV === 'development';
const { publicRuntimeConfig } = getConfig();

export default (req: NextApiRequest, res: NextApiResponse) =>
  //   isDevelopment ?
  httpProxyMiddleware(req, res, {
    // You can use the `http-proxy` option
    target: publicRuntimeConfig.API_URL,
    // In addition, you can use the `pathRewrite` option provided by `next-http-proxy`
    pathRewrite: {
      '^/api': '',
    },
  });
// : res.status(404).send(null);
