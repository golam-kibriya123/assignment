import React from 'react';

const Blog = () => {
    return (
        <div>
            <div>
                <main class="border border-blue-200 p-3 m-3 ">
                    <section id="questions " class="bg-gray-100 p-2 ">
                        <div class="question">
                            <h1 class="text-2xl text-purple-500 font-semibold">1. <span class="text-red-400 font-normal">different  between control component and Uncontrolled component </span></h1>
                            <p class="shadow-lg w-11/12 my-5 p-2"> <span class="font-semibold underline ">    Controlled components : </span>
                                Controlled components, are components that are fully controlled by their parent component. The parent component manages the state and behavior of the child component by passing down its state as props and providing event handlers to update the state. The child component re-renders whenever the props are updated by the parent.
                            </p>
                            <p class="shadow-lg w-11/12 my-5 p-2"> <span class="font-semibold underline "> Uncontrolled components : </span>
                                Uncontrolled components are components that manage their own state internally, without any external control or coordination from a parent component. They typically rely on refs to get the value of the input elements. The value of the input element is determined by the user input or by some other event.
                            </p>
                        </div>

                        <div class="question">
                            <h1 class="text-2xl text-purple-500 font-semibold">2. <span class="text-red-400 font-normal">How to validate React props using PropTypes?</span></h1>
                            <div class="shadow-lg w-11/12 my-5 p-2">
                                <p> <span class="font-semibold underline "> Custom hook :</span>
                                    React PropTypes is a library that provides a way to validate the types of props that are passed to a React component. PropTypes can help ensure that the component receives the correct props, which can prevent runtime errors and make the code more robust.
                                </p>
                            </div>
                        </div>


                        <div class="question">
                            <h1 class="text-2xl text-purple-500 font-semibold">3. <span class="text-red-400 font-normal">Difference between nodejs and express js</span></h1>
                            <div class="shadow-lg w-11/12 my-5 p-2">
                                <p> <span class="font-semibold underline ">Node.js : </span> <br />
                                    Node.js is a JavaScript runtime environment, <br />

                                    Node.js provides a runtime environment for server-side JavaScript code, <br />
                                    Node.js provides low-level APIs for network programming, file system access, and more, <br />

                                    Node.js is a more general-purpose platform,
                                </p>
                                <p> <span class="font-semibold underline "> CExpress.js :
                                </span> <br />
                                    Express.js is a web development framework that runs on top of Node.js.

                                    <br /> Express.js provides a set of utilities and middleware functions for building web applications and APIs.
                                    <br />
                                    Express.js provides higher-level abstractions for handling HTTP requests and responses, routing, and more.
                                    <br />
                                    while Express.js is specifically designed for building web applications and APIs.
                                </p>
                            </div>
                        </div>

                        <div class="question">
                            <h1 class="text-2xl text-purple-500 font-semibold">4. <span class="text-red-400 font-normal">What is custom hook?</span></h1>
                            <div class="shadow-lg w-11/12 my-5 p-2">
                                <p> <span class="font-semibold underline "> Custom hook :</span>
                                    A custom hook is a reusable function in React that encapsulates logic that can be shared between components. Custom hooks are a powerful feature in React because they allow us to extract complex logic from components and reuse it in a simple and efficient way. <br />
                                    By creating custom hooks, we can improve the maintainability, reusability, and testability of our code, and contribute to the broader React community.
                                </p>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Blog;