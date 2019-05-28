import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import routes from "../routes";
// import StyledComponent from "./StyledComponent";
import "./Layout.css"

class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "Ackodrive",
        };
    }

    render() {
        return (
            <>
                <Helmet
                    title={data.site.siteMetadata.title}
                    link={[
                        { rel: 'shortcut icon', type: 'image/png', href: `${icon32}` }
                    ]}
                >
                    <html lang="en" />
                </Helmet>

                <div>
                    <Switch>
                        {routes.map(route => <Route key={route.path} {...route} />)}
                    </Switch>
                </div>
            </>
        );
    }
}

export default Layout;
