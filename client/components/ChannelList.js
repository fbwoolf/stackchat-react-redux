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
        <li>
          <NavLink to={"URL_GOES_HERE"} activeClassName="active">
            <span># really_random</span>
            <span className="badge"></span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/new-channel">Create a channel...</NavLink>
        </li>
      </ul>
    )
}

const mapStateToProps = function(state) {
  return {};
}

const ChannelListContainer = connect(mapStateToProps)(ChannelList)
export default ChannelListContainer