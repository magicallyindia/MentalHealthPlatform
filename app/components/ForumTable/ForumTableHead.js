import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router-dom';

const forumTableHeaderStyle = {
    border: "1px solid #ddd",
    padding: "12px 8px",
    backgroundColor: "#4CAF50",
    color: "white"
};

class ForumTableHead extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            headers: this.props.headers
        };
    }

    createHeaders() {
        const headers = [];
        for (let i = 0; i < this.state.headers.length; i++) {
            const textAlign = (i == 0 | i == 1) ? "left" : "center";
            const headerStyle = Object.assign({}, forumTableHeaderStyle, {textAlign: textAlign});
            
            headers.push(
                <th key={"header-" + i} style={headerStyle}>
                    {this.state.headers[i]}
                </th>
            );
        }
        return headers;
    }

    render() {
        return <thead><tr>{this.createHeaders()}</tr></thead>
    }
}

module.exports = ForumTableHead;