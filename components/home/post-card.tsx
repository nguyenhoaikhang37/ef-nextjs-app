import { Card, CardContent, Container, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'

export interface IPostCardProps {}

export function PostCard(props: IPostCardProps) {
	return (
		<Card sx={{ bgcolor: '#fff' }}>
			<CardContent>
				<Typography variant="h6" fontWeight="bold">
					Making a design system from scratch
				</Typography>
				<Stack direction="row" py={2}>
					<Typography pr={{ xs: 1.5, md: 3 }} sx={{ borderRight: '1px solid black' }}>
						12 Feb 2020
					</Typography>
					<Typography pl={{ xs: 1.5, md: 3 }}>Design, Pattern</Typography>
				</Stack>
				<Typography>
					Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
					consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
				</Typography>
			</CardContent>
		</Card>
	)
}
