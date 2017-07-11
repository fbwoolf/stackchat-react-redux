import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import store from '../store';
import { connect } from 'react-redux';

// These values are all hardcoded...for now!
// Soon, we'll fetch them from the server!
const RANDOM_CHANNEL = '/channels/1';
const GENERAL_CHANNEL = '/channels/2';
const DOGS_CHANNEL = '/channels/3';
const LUNCH_CHANNEL = '/channels/4';

function ChannelList (props) {

    return (
      <ul>
      {props.channels.map(channel =>
        <li key={channel.id}>
          <NavLink to={`/channels/${channel.id}`} activeClassName="active">
            <span>{channel.name}</span>
            <span className="badge">{props.messages.filter(message => (message.channelId === channel.id)).length}</span>
          </NavLink>
        </li>

      )}

        <li>
          <NavLink to="/new-channel">Create a channel...</NavLink>
        </li>
      </ul>
    )
}

const mapStateToProps = function(state) {
  return {
    channels: state.channels,
    messages: state.messages
  };
}

const ChannelListContainer = connect(mapStateToProps)(ChannelList)
export default ChannelListContainer;
