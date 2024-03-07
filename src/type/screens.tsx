import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs'
import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import React from 'react'

export interface ITabScreen {
	name: string,
	component: any,
	options?: BottomTabNavigationOptions,
	Icon?: {
		Provider: any,
		name: string
	}
}

export interface IStackScreen {
	name: string,
	component: any,
	options?: NativeStackNavigationOptions,
}