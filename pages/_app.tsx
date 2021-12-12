import '../styles/globals.css'
import { EmptyLayout } from '@/components/layout'
import { AppPropsWithLayout } from 'models/common'
import { SWRConfig } from 'swr'
import axiosClient from 'api-client/axios-client'

import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider } from '@emotion/react'
import { theme, createEmotionCache } from 'utils'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const Layout = Component.Layout ?? EmptyLayout

	// Khi app render chỉ có thẻ Component bị thay đổi
	return (
		<CacheProvider value={clientSideEmotionCache}>
			<ThemeProvider theme={theme}>
				<CssBaseline />

				<SWRConfig value={{ fetcher: (url) => axiosClient.get(url), shouldRetryOnError: false }}>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</SWRConfig>
			</ThemeProvider>
		</CacheProvider>
	)
}

export default MyApp
