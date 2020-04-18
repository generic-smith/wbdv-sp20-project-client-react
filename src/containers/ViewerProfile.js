import React from "react";
import ViewerProfileMainComponent
  from "../components/ViewerProfile/ViewerProfileMainComponent";
import {BrowserRouter as Router, Link, Redirect, Route} from "react-router-dom";
import RegisterPageComponent
  from "../components/RegisterLogin/RegisterPageComponent";
import LoginPageComponent from "../components/RegisterLogin/LoginPageComponent";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import userReducer from "../reducers/userReducer";
import mediaReducer from "../reducers/mediaReducer";
import DetailsPageComponent from "../components/DetailsPage/DetailsPageComponent";
import GeneralDetailsPageComponent from "../components/DetailsPage/GeneralDetailsPageComponent";

const rootReducer = combineReducers({
  user: userReducer,
  media: mediaReducer
});

const store = createStore(rootReducer);

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
                <Redirect to={"/login"}/>
              </Route>
              <Route path="/home/details/:mediaId" exact={true}
                     render={(props) =>
                         <DetailsPageComponent
                             {...props}
                             history={props.history}
                             mediaId={props.match.params.mediaId}

                         />
                     }
              />
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
            </Router>
          </Provider>
        </div>
    )
  }

}

export default ViewerProfile
