import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='mx-16 my-9 bg-slate-100 p-10 shadow-xl rounded'>
            <h2 className='text-xl font-bold mb-2'>Q1: What is Context API?</h2>
            <p className='text-lg'>Answer: The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.  The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application.The Context API can be used to share data with multiple components, without having to pass data through props manually. For example, some use cases the Context API is ideal for: theming, user language, authentication, etc.</p>

            <h2 className='text-xl font-bold my-3'>Q2: What is semantic tag?</h2>
            <p className='text-lg'>Answer: The core characteristic of a semantic element is that it clearly communicated its meaning to both the developer and the browser. These elements clearly define its content. The HTML semantics refers to the tags that provide meaning to an HTML page rather than just presentation. It makes HTML more comprehensible by better defining the different sections and layout of web pages.The semantic HTML tags help the search engines and other user devices to determine the importance and context of web pages.The pages made with semantic elements are much easier to read.It has greater accessibility. It offers a better user experience.By adding semantic HTML tags to your pages, you provide additional information that helps Google and Bing understand the roles and relative importance of the different parts of your page.when a page is well designed visually, it is easy to identify the various parts of a web page at a glance. Headers, menus, and (hopefully) the main content are all immediately visually apparent.</p>
        </div>
    );
};

export default Blogs;