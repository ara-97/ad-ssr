import React from "react";

export default function StyledComponent(ComponentClass, style) {
	return class Wrapper extends React.Component {
		componentWillMount() {
			style.use()
		}

		componentWillUnmount() {
			style.unuse()
		}

		render() {
			return React.createElement(ComponentClass, this.props)
		}
	}
}