import React from "react";
import { connect } from "react-redux";
import { fetchData } from "../store";

class Home extends React.Component {
    componentDidMount() {
        if (this.props.cars.length <= 0) {
            this.props.fetchData();
        }
    }

    render() {
        const { cars } = this.props;
        return (
            <div style={{ margin: '50px' }}>
               home
            </div>
        );
    }
}
Home.serverFetch = fetchData; // static declaration of data requirements

const mapStateToProps = (state) => ({
    cars: state.data,
});

const mapDispatchToProps = {
    fetchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
