import { ICommonProps } from '@redwallsolutions/common-interfaces-ts'

export type ToastType = 'error' | 'info'

export interface IToastProps {
	title: string
	message: string
}

export interface IToast {
    getToastController?:(controller:any) => void

}