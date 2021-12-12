import MenuIcon from '@mui/icons-material/Menu'
import { Link as MuiLink, Stack } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import * as React from 'react'
import { ROUTE_LIST } from './routes'
import Icon from '@mui/material/Icon'

type Anchor = 'top' | 'left' | 'bottom' | 'right'

export function HeaderMobile() {
	const router = useRouter()

	const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	})

	const toggleDrawer =
		(anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
			if (
				event.type === 'keydown' &&
				((event as React.KeyboardEvent).key === 'Tab' ||
					(event as React.KeyboardEvent).key === 'Shift')
			) {
				return
			}

			setState({ ...state, [anchor]: open })
		}

	const list = (anchor: Anchor) => (
		<Box
			sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List>
				{ROUTE_LIST.map((route, index) => {
					return (
						<ListItem button key={index}>
							<ListItemIcon>
								<Icon color={router.pathname === route.path ? 'primary' : 'inherit'}>
									{route.icon}
								</Icon>
							</ListItemIcon>
							<Link key={route.path} passHref href={route.path}>
								<MuiLink
									sx={{ ml: 2, fontWeight: 'medium' }}
									className={clsx({ active: router.pathname === route.path })}
								>
									{route.label}
								</MuiLink>
							</Link>
						</ListItem>
					)
				})}
			</List>
		</Box>
	)

	return (
		<Box display={{ xs: 'block', md: 'none' }}>
			<Stack direction="row" justifyContent="flex-end">
				<Button onClick={toggleDrawer('right', true)}>
					<MenuIcon fontSize="large" />
				</Button>
				<Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
					{list('right')}
				</Drawer>
			</Stack>
		</Box>
	)
}
