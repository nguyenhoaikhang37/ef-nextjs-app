import { Chip, Container, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import design from '../../images/design.jpg'

export function FeaturedWorks() {
	return (
		<Box mt={2}>
			<Container>
				<Typography
					sx={{ py: 2.5, textAlign: { xs: 'center', md: 'left' } }}
					variant="h6"
					fontWeight="400"
				>
					Featured works
				</Typography>

				<Stack
					direction={{ xs: 'column', md: 'row' }}
					alignItems="center"
					spacing={2}
					sx={{ py: 2.5, borderBottom: '1px solid #e0e0e0' }}
				>
					<Box sx={{ minWidth: { xs: '100%', md: '240px' }, objectFit: 'cover' }}>
						<Image sx={{ objectFit: 'cover' }} src={design} layout="responsive" alt="design" />
					</Box>
					<Stack justifyContent="space-between">
						<Typography variant="h6" fontWeight="bold">
							Designing Dashboards
						</Typography>
						<Stack direction="row" alignItems="center" spacing={1} py={{ xs: 1.5, md: 2 }}>
							<Chip label="2020" sx={{ bgcolor: 'secondary.dark', color: '#fff' }} />
							<Typography sx={{ color: 'text.secondary' }}>Dashboard</Typography>
						</Stack>
						<Typography>
							Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
							officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
							amet.
						</Typography>
					</Stack>
				</Stack>
			</Container>
		</Box>
	)
}
