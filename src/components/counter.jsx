import React, { Component } from 'react';

class Counter extends Component {   // or use export defult in the beginning
    state = {
        count: 0
        //imageUrl: 'https:picsum.photos/200'     IN render() return    <img src={this.state.imageUrl} alt="" />  
    };

    render() {  // render dynamically with {}
        return (
            <div>
                <span>{this.formatCount()}</span>
                <button>Increment</button>
            </div>
        );
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
} 
 
export default Counter;

// jsx expressions are like normal js objects
// const x = <h1>Zero</h1>