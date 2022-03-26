import React from 'react';

const Question = () => {
    return (
        <div className='container mt-5'>
            <h1 className='text-info text-center'>Question Answer</h1>
            <h5>How React Work?</h5>
            <p>React is a declarative, component-based, single-page application. React contains a virtual DOM exact copy of real DOM. All works are done by functional-component. Each component returns JSX and one can write HTML and veiled javascript syntax inside the component. When a first-time web page loads on the browser, it loads all data at a time. Users can interact on the website, if users interact it change the state of the site and it is completed using virtual DOM. At this time Virtual DOM compares the changes with real DOM. If any parts of the virtual DOM find any changes, react changes the particular state. All component return its' JSX file to its' root component, called App component.App component show the JSX on UI.</p>

            <h5>How useState Work?</h5>
            <p>Answer: useState() is a dynamic database or storage of a react application. In react it is called a hook. It is nothing but a function. It contains only two elements of an array, called value and setter function. Changeable data of a component stored in useState() through its' value. If user changes any state, react virtual dom re-renders its' particular dom and set its' changed value in useState(). useEffect() hook  is used to mount, update,and unmount its' components.</p>
            <h5>Props vs State</h5>
            <ol>
                <li>Props allow you to pass data from one component to other components as an argument and State holds information about the components.</li>
                <li>Props are immutable but State is mutable.</li>
                <li>Props can be accessed by the child component whers State cannot be accessed by child components.</li>
                <li>Stateless component can have Props but	Stateless components cannot have State.</li>
                <li>Props are read-only. State changes can be asynchronous.</li>
                <li>Props are external and controlled by whatever renders the component on the otherhand	The State is internal and controlled by the React Component itself.</li>
                <li>Props make components reusable wheres State cannot make components reusable.</li>
                <li>Props are used to communicate between components on the other side States can be used for rendering dynamic changes with the component.</li>
            </ol>
        </div>
    );
};

export default Question;