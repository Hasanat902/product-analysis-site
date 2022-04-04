import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='mx-16 my-9'>
            <h2 className='text-xl font-bold mb-2'>Q1: What is Context API?</h2>
            <p>Answer: The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.  The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application.The Context API can be used to share data with multiple components, without having to pass data through props manually. For example, some use cases the Context API is ideal for: theming, user language, authentication, etc.</p>

            <h2 className='text-xl font-bold my-3'>Q2: What is semantic tag?</h2>
            <p>Answer: </p>
        </div>
    );
};

export default Blogs;