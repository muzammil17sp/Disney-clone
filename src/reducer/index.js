import { combineReducers } from "redux";
import movie from "./movieReducer";

import { userReducer } from "./userReducer";

export const allReducer = combineReducers({ user: userReducer, movie: movie });
