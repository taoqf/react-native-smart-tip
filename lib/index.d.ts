import { ReactNode } from 'react';
import { Animated } from 'react-native';

export interface IToastOpts {
	data: string;
	duration?: number;
	position?: number;
	inEasing?: (value: number) => number;
	textColor?: string;
	backgroundColor?: string;
	icon?: ReactNode;
}

export class WToast {
	static show: (option: IToastOpts) => void;
	static hide: () => void;
	static duration: {
		LONG: number
		SHORT: number
	};
	static position: {
		TOP: number;
		CENTER: number;
		BOTTOM: number;
	};
}

export interface ISnackBarOpts {
	data: string;
	statusBarHeight?: number;
    height?: number;
	duration?: number;
	position?: number;
	inEasing?: (value: number) => number;
	textColor?: string;
	backgroundColor?: string;
	actionText?: string;
	actionTextColor?: string;
	actionClick?: () => void;
}

export class WSnackBar {
	static show: (option: ISnackBarOpts) => void;
	static hide: () => void;
	static duration: {
		LONG: number
		SHORT: number
		INDEFINITE: number
	};
	static position: {
		TOP: number;
		BOTTOM: number;
	};
}

export interface IModalOpts {
	data: string;
	position?: number;
	inEasing?: (value: number) => number;
	textColor?: string;
	backgroundColor?: string;
	icon?:ReactNode
	onRequestClose?: () => void;
}

export class WModal {
	static show: (option: IModalOpts) => void;
	static hide: () => void;

	static position: {
		TOP: number;
		CENTER: number;
		BOTTOM: number;
	};
}

