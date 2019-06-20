import React from 'react';
import { View, StatusBar, Platform } from 'react-native';
import { withStyles } from 'react-native-ui-kitten';
import Constants from 'expo-constants';

class StatusBarComponent extends React.Component {
	getStatusBarContent = () => {
		if (this.props.currentTheme === 'Dark') {
			return 'light-content';
		} else {
			return 'dark-content';
		}
	};

	render() {
		const { themedStyle } = this.props;
		const androidStatusBarBgColor = themedStyle.container.backgroundColor;
		const barStyle = this.getStatusBarContent();

		return (
			<View style={themedStyle.container}>
				<StatusBar backgroundColor={androidStatusBarBgColor} barStyle={barStyle} />
			</View>
		);
	}
}

export const CustomStatusBar = withStyles(StatusBarComponent, theme => ({
	container: {
		backgroundColor: theme['background-basic-color-1'],
		height: Platform.select({
			ios: Constants.statusBarHeight,
			android: 0
		})
	}
}));
