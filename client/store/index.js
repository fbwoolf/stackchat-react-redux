import messages from './messages';
import channels from './channels';
import name from './name';
import newChannelEntry from './newChannelEntry';
import newMessageEntry from './newMessageEntry';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export default combineReducers({
	messages,
	channels,
	name,
	newChannelEntry,
	newMessageEntry
})

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(
    thunkMiddleware,
    createLogger()
  ))
);

export default store;