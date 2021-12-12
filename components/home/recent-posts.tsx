import { Container, Stack, Typography, Link as MuiLink } from '@mui/material'
import { Box } from '@mui/system'
import Link from 'next/link'
import { PostCard } from './post-card'

export function RecentPosts() {
	return (
		<Box component="section" sx={{ bgcolor: 'secondary.light', pb: 4, pt: 1 }}>
			<Container>
				<Stack
					direction="row"
					justifyContent={{ xs: 'center', md: 'space-between' }}
					alignItems="center"
				>
					<Typography sx={{ py: 2.5 }} variant="h6" fontWeight="400">
						Recent posts
					</Typography>

					<Link passHref href="/blog">
						<MuiLink sx={{ display: { xs: 'none', md: 'inline-block' }, color: 'secondary.main' }}>
							View all
						</MuiLink>
					</Link>
				</Stack>

				<Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
					<Box>
						<PostCard />
					</Box>

					<Box>
						<PostCard />
					</Box>
				</Stack>
			</Container>
		</Box>
	)
}
