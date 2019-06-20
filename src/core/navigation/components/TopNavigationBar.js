import React from 'react';
import { withStyles, TopNavigation, TopNavigationAction } from 'react-native-ui-kitten';

import { SafeAreaView } from './SafeAreaView';

class TopNavigationBarComponent extends React.Component {
	onBackButtonPress = () => {
		if (this.props.onBackPress) {
			this.props.onBackPress();
		}
	};

	renderBackButton = source => {
		return <TopNavigationAction icon={source} onPress={this.onBackButtonPress} />;
	};

	render() {
		const { themedStyle, title, backIcon, alignment="center" } = this.props;
		const leftControlElement = backIcon ? this.renderBackButton((style)=>{return backIcon(style)}) : null;

		return (
			<SafeAreaView style={themedStyle.safeArea}>
				<TopNavigation alignment={alignment} title={title} leftControl={leftControlElement} />
			</SafeAreaView>
		);
	}
}

export const TopNavigationBar = withStyles(TopNavigationBarComponent, theme => ({
	safeArea: {
		backgroundColor: theme['background-basic-color-1']
	}
}));
