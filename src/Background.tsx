import React from 'react'
import { View, Image } from 'react-native'

const Background = ({children}) => {
	return (
		<View>
			<Image source={require("./assets/Frame-130.png")} style={{height: '100%'}} />
			<View style={{position: "absolute"}}>
				{children}
			</View>
		</View>
	)
};

export default Background;