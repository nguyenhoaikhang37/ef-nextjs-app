import { authApi } from 'api-client/auth-api'
import useSWR from 'swr'
import { PublicConfiguration } from 'swr/dist/types'

export function useAuth(options?: Partial<PublicConfiguration>) {
	const {
		data: profile,
		error,
		mutate,
	} = useSWR('/profile', {
		dedupingInterval: 60 * 60 * 1000,
		revalidateOnFocus: false,
		...options,
	})

	const firstLoading = profile === undefined && error === undefined

	async function login() {
		// ko sử dụng try catch vì chỗ nào gọi chỗ đó mới cần try catch để handle lỗi (chỗ gọi là trang login.tsx)
		await authApi.login({
			username: 'easy',
			password: '123qwe',
		})

		await mutate() // trigger lại request gọi API /profile để update lại
	}

	async function logout() {
		await authApi.logout()

		await mutate({}, false) // shouldRevalidate = false: ko gọi lại API (vì logout thì không cần gọi lại)
	}

	return { profile, error, login, logout, firstLoading }
}
