import React from "react";
import ViewerProfileMainComponent
    from "../components/ViewerProfile/ViewerProfileMainComponent";
import {BrowserRouter as Router, Redirect, Route} from "react-router-dom";
import RegisterPageComponent
    from "../components/RegisterLogin/RegisterPageComponent";
import LoginPageComponent from "../components/RegisterLogin/LoginPageComponent";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import userReducer from "../reducers/userReducer";
import mediaReducer from "../reducers/mediaReducer";
import DetailsPageComponent from "../components/DetailsPage/DetailsPageComponent";
import GeneralDetailsPageComponent from "../components/DetailsPage/GeneralDetailsPageComponent";
import AdminPageComponent from "../components/AdminPage/AdminPageComponent";
import ProfileComponent from "../components/ViewerProfile/ProfileComponent";
import AdvertiserPageComponent
    from "../components/Advertiser/AdvertiserPageComponent";

const rootReducer = combineReducers({
    user: userReducer,
    media: mediaReducer
});

const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class ViewerProfile extends React.Component {

    render() {
        return (
            <div>
                <Provider store={store}>
                    <Router>
                        <Route path="/register"
                               exact={true}
                               render={(props) =>
                                   <RegisterPageComponent
                                       {...props}
                                       history={props.history}/>}/>
                        <Route path="/home"
                               exact={true}
                               render={(props) =>
                                   <ViewerProfileMainComponent
                                       {...props}
                                       uid={-1}
                                       history={props.history}/>}/>
                        <Route path="/user/:id"
                               exact={true}
                               render={(props) =>
                                   <ViewerProfileMainComponent
                                       {...props}
                                       uid={props.match.params.id}
                                       history={props.history}/>}/>
                        <Route path="/login"
                               render={(props) =>
                                   <LoginPageComponent
                                       {...props}
                                       history={props.history}/>}/>
                        <Route path="/" exact={true}>
                            <Redirect to={"/home"}/>
                        </Route>
                        <Route path="/home/details/:mediaId" exact={true}
                               render={(props) =>
                                   <DetailsPageComponent
                                       {...props}
                                       history={props.history}
                                       mediaId={props.match.params.mediaId}
                                       viewOnly={false}/>}/>
                        <Route path="/user/:uid/watchlist/:mediaId" exact={true}
                               render={(props) =>
                                   <DetailsPageComponent
                                       {...props}
                                       history={props.history}
                                       uid={props.match.params.uid}
                                       mediaId={props.match.params.mediaId}
                                       viewOnly={true}/>}/>
                        <Route path="/home/generaldetails/:searchType/:mediaId"
                               exact={true}
                               render={(props) =>
                                   <GeneralDetailsPageComponent
                                       {...props}
                                       history={props.history}
                                       searchType={props.match.params.searchType}
                                       mediaId={props.match.params.mediaId}/>
                               }
                        />
                        <Route path="/admin"
                               exact={true}
                               render={(props) =>
                                   <AdminPageComponent
                                       {...props}
                                       history={props.history}/>
                               }
                        />
                        <Route path="/profile/:username"
                               exact={true}
                               render={(props) =>
                                   <ProfileComponent
                                       {...props}
                                       history={props.history}
                                       username={props.match.params.username}/>
                               }
                        />
                        <Route path="/advertiser"
                               exact={true}
                               render={(props) => <AdvertiserPageComponent/>}/>

                    </Router>
                </Provider>
            </div>
        )
    }

}

export default ViewerProfile
