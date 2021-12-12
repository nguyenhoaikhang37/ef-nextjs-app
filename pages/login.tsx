import { useAuth } from 'hooks'
import { useRouter } from 'next/router'

export default function LoginPage() {
	const router = useRouter()
	const { profile, login, logout } = useAuth({
		revalidateOnMount: false, // khi mới vào component sẽ ko request data
	})

	const handleLoginClick = async () => {
		try {
			login()

			router.push('/about')
		} catch (error) {
			console.log('Failed to login ', error)
		}
	}

	// const handleGetProfileClick = async () => {
	// 	try {
	// 		await authApi.getProfile()
	// 	} catch (error) {
	// 		console.log('Failed to get profile ', error)
	// 	}
	// }

	const handleLogoutClick = async () => {
		try {
			await logout()

			router.push('/login')
		} catch (error) {
			console.log('Failed to logout ', error)
		}
	}

	return (
		<div>
			<h1>Login page</h1>
			<p>Profile: {JSON.stringify(profile || {}, null, 4)}</p>
			<button onClick={handleLoginClick}>Login</button>
			{/* <button onClick={handleGetProfileClick}>Get Profile</button> */}
			<button onClick={handleLogoutClick}>Log out</button>
			<button onClick={() => router.push('/about')}>Go to about page</button>
		</div>
	)
}
