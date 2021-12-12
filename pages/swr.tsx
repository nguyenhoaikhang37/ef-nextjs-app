import StudentDetail from '@/components/swr/student-detail'
import * as React from 'react'

export default function SWRPage() {
	return (
		<div>
			<h1>Stale-while-revalidate</h1>
			<ul>
				<li>
					<StudentDetail studentId="sktwi1cgkkuif36f3" />
				</li>
				<li>
					<StudentDetail studentId="sktwi1cgkkuif36f4" />
				</li>
				<li>
					<StudentDetail studentId="sktwi1cgkkuif36f3" />
				</li>
			</ul>
		</div>
	)
}
