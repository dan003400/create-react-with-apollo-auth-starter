import React from 'react'
import { Route, withRouter, Redirect } from 'react-router-dom'
import { AUTH_TOKEN } from 'config/Constants'

const AuthenticationRoute = ({ location, component: Component, ...rest }) => {
	console.log('auth route')
	return (
		<Route
			{...rest}
			render={props =>
				!localStorage.getItem(AUTH_TOKEN) ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{
							pathname: '/dashboard',
							state: { from: props.location },
						}}
					/>
				)
			}
		/>
	)
}

export default withRouter(AuthenticationRoute)
