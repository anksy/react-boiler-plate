import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { connect } from 'react-redux';
/**Use WithoutLogin to define routes  which are accessible by users without login 
 *eg:- /login,/forgot-password,/reset-password*/
import WithoutLogin from './withoutLogin';

/** Use PrivateRoute to define routes  which are accessible only by logged in  users*/
// import PrivateRoute from './private';

import HomePage from '../components/home/index.js';

class AppRouter extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        const { isCMSPage } = this.props;
        
        return (
            <ConnectedRouter history={this.props.history}>      
                <div>
                    {/* <Header /> */}
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                    </Switch>
                    {/* <Footer /> */}
                </div>
            </ConnectedRouter>
        );
    }
}

const mapStatesToProps = (state) => {
    
    let path = (window.location.pathname.split("/")[1]).replace(/-/g,"_");
    
    return ({
        isCMSPage: state.site[path] ? state.site[path] : null
    });
}

export default connect(mapStatesToProps)(AppRouter);