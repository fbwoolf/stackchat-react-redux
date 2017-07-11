const WRITE_CHANNEL = 'WRITE_CHANNEL';

export function writeChannel (channelName) {
  const action = { type: WRITE_CHANNEL, channelName };
  return action;
}

export default function newChannelEntry (state = '', action) {
  switch (action.type) {
    case WRITE_CHANNEL:
      return {
        ...state,
        newChannelEntry: action.channelName
    };
    default:
      return state
  }
}