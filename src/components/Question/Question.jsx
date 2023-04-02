import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='question'>
            <h2>Question & Answer</h2>
            <h3>1. Props Vs State</h3>

            <p>In React, props and state are both used to manage data in a component, but they serve slightly different purposes.

                props (short for "properties") are passed down to a component from its parent component. They are read-only and cannot be modified by the component itself. Instead, they are used to configure the component and provide data for it to render. props are usually used for data that is expected to be consistent throughout the lifetime of the component. <br /> <br />


                state, on the other hand, is used to manage data that can change over time. It's similar to props, but it's managed internally by the component rather than being passed down from a parent. state is mutable, meaning it can be updated using the setState method. When state changes, React re-renders the component to reflect the new state.

            </p>

            <h3>2. How does useState work?</h3>

            <p>useState is a hook provided by React that allows functional components to manage state.

                When we use the useState hook, you call it with an initial value, and it returns an array with two values: the current state value, and a function to update that value. React will automatically re-render the component when the state value changes, so we can use the current state value to render different content depending on its value.
            </p>

            <h3>3. Purpose of useEffect other than fetching data</h3>
            <p>The useEffect hook in React has several use cases beyond just fetching data. Some examples include: <br /> <br />

                <b>#Updating the document title:</b> We can use useEffect to update the title of the page dynamically based on the state of your component. For example, we might want to update the title to display the name of the currently selected item in a list.</p>

            <p><b>#Subscribing to events:</b> We can use useEffect to subscribe to browser events, such as window resize or keyboard events.</p>

            <p><b>#Animating elements:</b> We can use useEffect to create animations by updating the state of component over time.</p>

            <h3>4. How Does React work?</h3>
            <p>React is a JavaScript library for building user interfaces. It works by creating a virtual representation of your UI in memory, called the "virtual DOM". The virtual DOM is a lightweight copy of the actual DOM, with all the same properties and methods. <br /><br />

                When we update our component's state or props, React uses a diffing algorithm to compare the new virtual DOM with the previous one, and determines the minimum number of changes needed to update the actual DOM to match the new state. This process is called "reconciliation".

                React then applies these changes to the actual DOM, updating only the parts that need to be updated. This is more efficient than updating the entire DOM tree every time there's a change, as it minimizes the amount of work the browser has to do. <br /> <br />

                One of the key benefits of React is its component-based architecture. Components are reusable building blocks that encapsulate both the UI and the logic that goes with it. This makes it easy to create complex UIs by composing smaller, simpler components.

                React also provides a set of lifecycle methods that let us hook into different stages of a component's life. These methods allow us to initialize state, update the UI when props or state change, and perform cleanup when a component is removed from the DOM. <br /> <br />

                React works seamlessly with other libraries and frameworks, making it easy to integrate with existing code bases. It also has a large and active community, which means there are plenty of resources and tools available to help us learn and use React effectively.</p>

                <h6>Al rights reserved by @Alamgir</h6>
        </div>
    );
};

export default Question;