import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import Loading from "components/Loading";
import Ionicon from "react-ionicons";
import UserDisplay from "components/UserDisplay";

const UserList = props => (
    <div className="overlay">
        <div className="box">
            <header className="header">
                <h4 className="title">
                    {props.title}
                </h4>
                <span onClick={props.closeLikes}>
                    <Ionicon icon="md-close" fontSize="20px" color="black" />
                </span>
            </header>
            <div className="content">
                {props.loading ? <Loading /> : <RenderUsers list={props.userList}/>}
            </div>
        </div>
    </div>
);

const RenderUsers = props =>
  props.list.map(user => <UserDisplay horizontal={true} user={user} key={user.id} />);

UserList.propTypes = {
    title: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    userList: PropTypes.array,
    closeLikes: PropTypes.func.isRequired
};

export default UserList;
