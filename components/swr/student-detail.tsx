import * as React from 'react'
import useSWR from 'swr'

export interface StudentDetailProps {
	studentId: string
}

export default function StudentDetail({ studentId }: StudentDetailProps) {
	const { data, mutate, error, isValidating } = useSWR(`students/${studentId}`, {
		// revalidateOnFocus: false,
		// dedupingInterval: 10000,
	})

	return (
		<div>
			Name:
			{data?.name || '--'}
		</div>
	)
}
