import { FeaturedWorks, HeroSection, RecentPosts } from '@/components/home'
import { MainLayout } from '@/components/layout'
import { Box } from '@mui/system'
import { NextPageWithLayout } from 'models/common'

const Home: NextPageWithLayout = () => {
	return (
		<Box>
			<HeroSection />
			<RecentPosts />
			<FeaturedWorks />
		</Box>
	)
}

Home.Layout = MainLayout

export default Home
