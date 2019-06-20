import React from 'react';
import { mapping, dark as theme } from '@eva-design/eva';
import { ApplicationProvider } from 'react-native-ui-kitten';
import { Application } from './src/root';
import {CustomStatusBar} from './src/core/components/CustomStatusBar'

export default class App extends React.Component {
	render() {
		return (
			<ApplicationProvider mapping={mapping} theme={theme}>
				<CustomStatusBar currentTheme="Dark"/>
				<Application />
			</ApplicationProvider>
		);
	}
}
