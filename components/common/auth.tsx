import { useAuth } from 'hooks/use-auth'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export interface AuthProps {
	children: any
}

export function Auth({ children }: AuthProps) {
	const router = useRouter()
	const { profile, firstLoading } = useAuth()

	useEffect(() => {
		if (!firstLoading && !(profile as any)?.username) router.push('/login')
	}, [profile, firstLoading])

	if (firstLoading) return <div>Loading...</div>

	return <div>{children}</div>
}
