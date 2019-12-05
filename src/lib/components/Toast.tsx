import React, { FC, useEffect, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import izitoast from 'izitoast'
import 'izitoast/dist/css/iziToast.css'
import { ToastStyle } from './Style'
import { IToast, IToastProps } from './interfaces'
import { ICommonProps } from '@redwallsolutions/common-interfaces-ts'
import { createThemeWithAppearance } from '@redwallsolutions/theming-component-module'

const theming = createThemeWithAppearance()

const Toast: FC<IToast & IToastProps & ICommonProps> = ({
	title = 'Ok',
	message = 'I love Redwall',
	getToastController,
	theme = { mode: 'light' },
	appearance = 'default'
}) => {
	const themeToApply = useContext(ThemeContext) || theme

	const open = () => {
		izitoast.show({})
	}

	useEffect(() => {
		izitoast.settings({
			closeOnEscape: true,
			closeOnClick: true,
			displayMode: 2,
			position: 'bottomCenter',
			title,
			message
		})
	}, [title, message])

	useEffect(() => {
		if (getToastController) {
			getToastController({ open })
		}
	}, [])

	return <ToastStyle appearance={appearance} theme={themeToApply} />
}

export default Toast
