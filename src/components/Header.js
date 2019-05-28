import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Header = ({ loggedIn }) => (
    <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Link style={styles.link} to="/">Home</Link>
        <Link style={styles.link} to="/about">About</Link>
    </div>
);

const styles = {
    link: {
        margin: '0 30px',
        textDecoration: 'none',
        color: '#fff',
        backgroundColor: 'rgb(118, 113, 255)',
        borderRadius: '5px',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        padding: '8px 10px',
        width: '120px',
        textAlign: 'center' 
    }
}

const mapStateToProps = (state) => ({
    loggedIn: state.loggedIn,
});

export default connect(mapStateToProps)(Header);
