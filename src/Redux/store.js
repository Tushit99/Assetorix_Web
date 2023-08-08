import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as adminreducer } from "./Admin/reducer";
import { reducer as userreducer } from "./userauth/reducer";
import { reducer as gloalval} from "./globalval/reducer"; 

const rootReducer = combineReducers({
  adminreducer, 
  gloalval, 
  userreducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
