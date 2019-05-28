import React from "react";
import axios from "axios";

class About extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            loading: true
        }
    }

    componentDidMount() {
        axios
            .get('https://153268aa-9765-4cbd-90d3-14238106d3ec.mock.pstmn.io/car', {
            })
            .then((response) => {
                console.log(response);
                this.setState({ data: response.data, loading: false });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '50px' }}>

                {
                    this.state.loading ?
                        <p>Loading ...</p> :
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridGap: '20px' }}>
                            {
                                this.state.data.map((data, index) =>
                                    <div style={{ borderRadius: '5px', boxShadow: '0px 10px 50px rgb(229, 231, 231)', padding: '20px'}} key={index}><b>{`${data.brand} ${data.model} ${data.variant}`}</b></div>
                                )
                            }
                        </div>
                }
            </div>
        );
    }
}

export default About;
