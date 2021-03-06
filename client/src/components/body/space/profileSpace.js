import React, { Component } from "react";
import background from "./images/space.jpg";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../actions/actionAuth";
import Write from "../../categories/pages/write/write";

class ProfileSpace extends Component {
  state = {
    username: "",
  };
  render() {
    const { user } = this.props.auth;

    return (
      <div
        className="background dash-bg"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div className="homespace-blog">
          <Write user={user} />
        </div>
      </div>
    );
  }
}

ProfileSpace.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(ProfileSpace);
