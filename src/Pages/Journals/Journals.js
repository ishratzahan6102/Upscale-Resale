import React from 'react';

const Journals = () => {
    return (
        <div className='text-black font-semibold text-base mt-20 mb-96 max-w-[1100px] p-6 mx-auto my-20 '>
            <h1 className='text-4xl text-black mb-10'>Gather some knowledge from our blog!</h1>
            <p>Question : What are the different ways to manage a state in a React application?</p>
            <p>Answer 1 : As your application grows, it helps to be more intentional about how your state is organized and how the data flows between your components. Redundant or duplicate state is a common source of bugs. In this chapter, you’ll learn how to structure your state well, how to keep your state update logic maintainable, and how to share state between distant components.</p> <br></br>
            <p>Question : How does prototypical inheritance work?</p>
            <p>Answer 2 : The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p> <br></br>
            <p>Question : What is a unit test? Why should we write unit tests?</p>
            <p>Answer 3 : What is meant by unit testing?
            A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important.</p> <br></br>
            <p>Question : React vs. Angular vs. Vue?</p>
            <p>Answer 4 : Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option</p>
        </div>
    );
};

export default Journals;