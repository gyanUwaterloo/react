docs = {
 "Accessibility":{
     "What is accesibility?":"Web accessibility (also referred to as a11y) is the design and creation of websites that can be used by everyone.",
     "Why Accessibility?":"Accessibility support is necessary to allow assistive technology to interpret web pages.",
     "How react does it?":"React fully supports building accessible websites, often by using standard HTML techniques."
 },
 "Standards and Guidelines":[
     {
         "WCAG :  Web Content Accessibility Guidelines ":[
            "https://www.wuhcag.com/wcag-checklist/",
            "https://www.a11yproject.com/checklist/",
            "Semantic HTML is the foundation of accessibility in a web application. "
         ] 
    }
 ],
 "Semantic HTML":[
     "Using the various HTML elements to reinforce the meaning of information in our websites will often give us accessibility for free.",
     "Sometimes we break HTML semantics when we add <div> elements to our JSX to make our React code work",
     " especially when working with lists (<ol>, <ul> and <dl>) and the HTML <table>",
     "In these cases we should rather use React Fragments to group together multiple elements.",
     "<React.Fragment> or use import React, { Fragment } from 'react';",
 ]  ,
 "Accessible Forms":[
     "Every HTML form control, such as <input> and <textarea>, needs to be labeled accessibly. ",
     "https://www.w3.org/WAI/tutorials/forms/labels/",
     "https://webaim.org/techniques/forms/controls",
     "https://www.paciellogroup.com/blog/2017/04/what-is-an-accessible-name/",
     "Although these standard HTML practices can be directly used in React, note that the for attribute is written as htmlFor in JSX",
     "<label htmlFor=namedInput>Name:</label>",
     "Notifying the user of errors: https://webaim.org/techniques/formvalidation/",
     "Ensure that your web application can be fully operated with the keyboard only",
     "https://webaim.org/techniques/keyboard/",
 ],
 "Mechanisms to skip to desired content":[
     "Provide a mechanism to allow users to skip past navigation sections in your application as this assists and speeds up keyboard navigation.",
     "Skiplinks or Skip Navigation Links are hidden navigation links that only become visible when keyboard users interact with the page. ",
     "https://webaim.org/techniques/skipnav/",
     "Also use landmark elements and roles, such as <main> and <aside>, to demarcate page regions as assistive technology allow the user to quickly navigate to these sections.",
     "https://www.scottohara.me/blog/2018/03/03/landmarks.html",
 ] ,
 "Programmatically managing focus":[
     "Our React applications continuously modify the HTML DOM during runtime, sometimes leading to keyboard focus being lost or set to an unexpected element.",
     "In order to repair this, we need to programmatically nudge the keyboard focus in the right direction.",
     "Ex:  resetting keyboard focus to a button that opened a modal window after that modal window is closed.",
     "https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets",
     "https://reactjs.org/docs/refs-and-the-dom.html",
     "Using this, we first create a ref to an element in the JSX of a component class:",
     "When using a Higher order component - HOC to extend components, it is recommended to forward the ref to the wrapped component using the forwardRef function of React. ",
    "Focus Examples: https://github.com/davidtheclark/react-aria-modal",
    "Use it to repair the keyboard focus flow when it is disturbed, not to try and anticipate how users want to use applications"
 ],
 "Mouse and pointer events":[
     "Ensure that all functionality exposed through a mouse or pointer event can also be accessed using the keyboard alone. ",
     
 ]
}