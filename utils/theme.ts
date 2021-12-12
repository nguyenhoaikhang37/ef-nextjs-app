import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// Create a theme instance.
export let theme = createTheme({
	typography: {
		fontFamily: 'Poppins, sans-serif',
	},
	palette: {
		primary: {
			main: '#FF6464',
		},
		secondary: {
			light: '#EDF7FA',
			dark: '#142850',
			main: '#00A8CC',
		},
		error: {
			main: red.A400,
		},
		text: {
			primary: '#21243D',
			secondary: '#8695A4',
		},
	},
	components: {
		MuiContainer: {
			defaultProps: {
				maxWidth: 'md',
			},
			styleOverrides: {
				maxWidthSm: {
					maxWidth: '680px',

					'@media (min-width: 600px)': {
						maxWidth: '680px',
					},
				},
				maxWidthMd: {
					maxWidth: '910px',

					'@media (min-width: 900px)': {
						maxWidth: '910px',
					},
				},
			},
		},
		MuiLink: {
			defaultProps: {
				underline: 'none',
			},
			styleOverrides: {
				root: {
					color: '#000',
					'&:hover, &.active': {
						color: '#FF6464',
					},
				},
			},
		},
		MuiButton: {
			variants: [
				{
					props: {
						variant: 'contained',
						color: 'primary',
					},
					style: {
						color: 'white',
					},
				},
			],
		},
	},
})
theme = responsiveFontSizes(theme)
