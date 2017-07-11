import React, { Component } from 'react';
import { connect } from 'react-redux';
import { writeChannel, postChannel } from '../store';

function NewChannelEntry (props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Create a Channel</label>
        <input
        onChange={props.handleChange}
        value={props.newChannelEntry}
        className="form-control"
        type="text"
        name="channelName"
        placeholder="Enter channel name" />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-default">Create Channel</button>
      </div>
    </form>
  );
}

const mapStateToProps = function(state) {
  return {
    newChannelEntry: state.newChannelEntry
  };
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    handleChange(event) {
      dispatch(writeChannel(event.target.value))
    },
    handleSubmit(event) {
      event.preventDefault();
      const channelName = event.target.channelName.value;
      dispatch(postChannel({ name: channelName}));
    }
  }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(NewChannelEntry)
export default Container;
