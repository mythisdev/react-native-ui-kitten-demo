import React from 'react';
import { View, Text } from 'react-native';
import {Button, Layout} from 'react-native-ui-kitten';
export const HomeScreen = ({navigation}) => {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Home Screen</Text>
            <Button onPress={()=>{navigation.navigate('Second')}}>Next Page</Button>
		</View>
	);
};

export const SecondScreen = ({navigation}) => {
	return (
		<Layout style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Second Screen</Text>
		</Layout>
	);
};