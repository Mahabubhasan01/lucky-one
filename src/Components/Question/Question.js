import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div>
            <h2>Question And Answer</h2>
            <div className="box">
            <div className='first'>
            <h3>How to React Work</h3>
            <p className='information'>There is not js ui based framework is react.Its work firstly two way react dom and virtual dom.
                This is work many ways category specially work render .
                When we use  app made of multiple components,every responsible for rendering a small, reasonable part of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks. Every component may also maintain an internal state.
            </p>
            </div>
            <div className='second'>
            <h3>What is different <span>Props</span> And <span>State</span></h3>
            <p className="information">
            Props are dynamically you can pass data or parameters.
                Props only we can read.
                We can transfer any data one by one component.
                Its immutable 
                Do not need sychorinous or asychrounours.

                On the other hand
                the state is mutable. Its states any component data. you can not pass freedom way and data or parameter using state.
                little bit way store data using state.
                State following asynchronous.
                Behind the scene, it's controlled by react-dom.
            </p>
            </div>
            <div className='third'>
            <h3>How to <span>useState</span> work</h3>
            <p className='information'>useState is hook in js react.
                Its dynamically update any component where as us asychrounours.
                Behind seen this is controlled by js react dom.
                It is functional component there are use react 
                And also its set value on the function of componants.
            </p>
            </div>
            </div>
            
        </div>
    );
};

export default Question;