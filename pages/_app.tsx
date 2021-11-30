import '../styles/globals.css'
import { EmptyLayout } from '@/components/layout'
import { AppPropsWithLayout } from 'models/common'

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	console.log('App re-render')

	const Layout = Component.Layout ?? EmptyLayout

	// Khi app render chỉ có thẻ Component bị thay đổi
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}

export default MyApp
