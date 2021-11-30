// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxy from 'http-proxy'

type Data = {
	message: string
}

export const config = {
	api: {
		bodyParser: false,
	},
}

const proxy = httpProxy.createProxyServer()

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	if (req.method !== 'POST') {
		return res.status(404).json({ message: 'method not supported' })
	}

	return new Promise((resolve) => {
		// dont send cookies to API server
		req.headers.cookie = ''

		proxy.once('proxyRes', () => {
			resolve(true)
		})

		proxy.web(req, res, {
			target: process.env.API_URL,
			changeOrigin: true,
			selfHandleResponse: true,
		})
	})
}
