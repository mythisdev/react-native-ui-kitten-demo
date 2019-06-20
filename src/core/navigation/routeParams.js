import React from 'react';
import { Icon } from 'react-native-eva-icons';
import { TopNavigationBar } from './components/TopNavigationBar';
import { getCurrentRouteState } from './routeUtils';

const renderBackIcon = (isRoot) => (style) =>{
	if(isRoot) return null;
	return <Icon name="arrow-ios-back-outline" width={style.width} height={style.height} fill={style.tintColor} />
}

export const TopNavigationParams = {
	topNavigation: props => {
		const state = getCurrentRouteState(props.navigation);
		return (
			<TopNavigationBar
				{...props}
				title={state.routeName}
				backIcon={renderBackIcon(state.params.root)}
				onBackPress={() => {
					props.navigation.goBack(null);
				}}
			/>
		);
	}
};
