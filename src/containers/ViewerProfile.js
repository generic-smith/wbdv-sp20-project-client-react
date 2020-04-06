import React from "react";
import ViewerProfileMainComponent from "../components/ViewerProfile/ViewerProfileMainComponent";
import {BrowserRouter as Router, Link, Redirect, Route} from "react-router-dom";
import RegisterPageComponent from "../components/RegisterLogin/RegisterPageComponent";
import LoginPageComponent from "../components/RegisterLogin/LoginPageComponent";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import userReducer from "../reducers/userReducer";
import mediaReducer from "../reducers/mediaReducer";

const rootReducer = combineReducers({
    user: userReducer,
    media: mediaReducer
});

const store = createStore(rootReducer);

class ViewerProfile extends React.Component {


    render() {
        return(
            <div>
                <Provider store={store}>
                <Router>

                    <Route path="/register"
                           exact={true}
                           render={(props) =>
                               <RegisterPageComponent
                                   {...props}/>}/>
                    <Route path="/:userId/home"
                           exact={true}
                           render={(props) =>
                            <ViewerProfileMainComponent
                                {...props}
                                userId={props.match.params.userId}/>}/>
                    <Route path="/login"
                           render={(props) =>
                               <LoginPageComponent
                                   {...props}/>}/>
                    <Route path="/" exact={true}>
                        <Redirect to={"/login"}/>
                    </Route>

                </Router>
                </Provider>
            </div>
        )
    }

}

export default ViewerProfile
