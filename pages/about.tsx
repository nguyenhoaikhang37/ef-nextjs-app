import { AdminLayout } from '@/components/layout'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useAuth } from 'hooks/use-auth'
import { useRouter } from 'next/router'

const AboutPage = () => {
	const router = useRouter()
	const { profile, logout } = useAuth()

	const handleLogoutClick = async () => {
		try {
			await logout()

			router.push('/login')
		} catch (error) {
			console.log('Failed to logout ', error)
		}
	}

	if (!(profile as any)?.username) return <div>Loading...</div>

	return (
		<Box>
			<Typography component="h1" variant="h3" color="primary.main">
				About page
			</Typography>
			<p>{JSON.stringify(profile)}</p>
			<div>
				<button onClick={handleLogoutClick}>log out</button>
			</div>
		</Box>
	)
}

AboutPage.Layout = AdminLayout

export default AboutPage
