import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

	/** user will redirect on specified route if the user is logged in 
 * and trying to access Without Login route*/
const WithoutLogin = ({ component: Component, ...rest }) => {
	const { isAdminLoggedIn } = rest;
	return (
		<Route {...rest} render={props => (

			(isAdminLoggedIn) ? (
				<Redirect to={{
					/**specify the route on which user will redirect if the user is logged in 
					 * and trying to access Without Login route*/
					pathname: '/',
					state: { from: props.location }
				}} />
			) : (
					<Component {...props} />
				)
		)} />
	);
}

function mapStatesToProps(state) {
	return ({
		isAdminLoggedIn : false
		// isAdminLoggedIn: (state.admin.token) ? true : false
	});
}


export default connect(mapStatesToProps)(WithoutLogin);