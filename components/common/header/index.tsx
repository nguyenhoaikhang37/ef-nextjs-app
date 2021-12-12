import { Stack } from '@mui/material'
import { Box } from '@mui/system'
import Link from 'next/link'
import { HeaderDesktop } from './header-desktop'
import { HeaderMobile } from './header-mobile'

export function Header() {
	return (
		<>
			<HeaderDesktop />
			<HeaderMobile />
		</>
	)
}
