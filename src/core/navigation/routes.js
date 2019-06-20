import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { TopNavigationParams } from './routeParams';
import { getCurrentRouteState } from './routeUtils';

import {HomeScreen, SecondScreen} from '@src/components';

const HeadingNavigationOptions = ({ navigation }) => {
	const header = headerProps => {
		const { params } = getCurrentRouteState(navigation);
		return params && params.topNavigation && params.topNavigation(headerProps);
	};

	return { ...navigation, header };
};

const HomeNavigator = createStackNavigator(
	{
		['Home']: {
			screen: HomeScreen,
			params: { root: true, ...TopNavigationParams }
        },
        ['Second']: {
            screen: SecondScreen,
            params: { ...TopNavigationParams }
        }
	},
	{
		headerMode: 'none'
	}
);

const AppNavigator = createStackNavigator({
	['HomeStack']: {
		screen: HomeNavigator,
		navigationOptions: HeadingNavigationOptions
	}
});

export const Routes = createAppContainer(AppNavigator);
