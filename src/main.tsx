// main.tsx
// As we are using typescript so we are using .tsx extention instead of .jsx

// Way 1
//=======================================
import React, { Component } from 'react';
import { render } from 'react-dom';
import Test from './test';

export interface HelloProps { 
    compiler: string;
    framework: string; 
}

class App extends Component<HelloProps, any> {
    constructor(props: HelloProps) {
        super(props);
        
        console.log("PPP :", new Test());
    }
    render() {
        return (
            <div>
                <header>
                    <h1>Welcome to my App!( {this.props.compiler} and {this.props.framework}! )</h1>
                </header>
            </div>
        );
    }
}

render(
    <App compiler="TypeScript" framework="React" />,
    document.getElementById('root');
);

// Way 2
//=======================================
/*
// `The * as ____` here is a way to import ES6 default exports in ES6.
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export interface HelloProps { 
    compiler: string;
    framework: string; 
}

export class App extends React.Component<HelloProps, any> {
    render() {
        return(
            <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
        );
    }
}

ReactDOM.render(
    <App compiler="TypeScript" framework="React" />,
    document.getElementById('root')
)*/