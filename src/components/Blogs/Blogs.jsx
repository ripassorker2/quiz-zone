import React from "react";

const Blogs = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="bg-white">
          <div className="w-full container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
            <h2 className="text-2xl font-semibold">
              Some quistion of react !!
            </h2>
            <p className=" mt-4 mb-8 text-gray-600">
              React Interview Questions And Answers
            </p>
            <div className="space-y-4 w-full">
              <details className=" rounded-lg ring-1 ring-purple-600 ">
                <summary className="px-4 py-6">
                  What is the purpose of react router?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                  ReactJS Router is mainly used for developing Single Page Web
                  Applications. React Router is used to define multiple routes
                  in the application. When a user types a specific URL into the
                  browser, and if this URL path matches any 'route' inside the
                  router file, the user will be redirected to that particular
                  route.
                </p>
              </details>
              <details className="w-full rounded-lg ring-1 ring-purple-600">
                <summary className="px-4 py-6">
                  How does contextApi work ?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                  The React Context API is a way for a React app to effectively
                  produce global variables that can be passed around. This is
                  the alternative to "prop drilling" or moving props from
                  grandparent to child to parent, and so on. Context is also
                  touted as an easier, lighter approach to state management
                  using Redux.
                </p>
              </details>
              <details className="w-full rounded-lg ring-1 ring-purple-600">
                <summary className="px-4 py-6">
                  What is useRef in react js ?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                  Essentially, useRef is like a “box” that can hold a mutable
                  value in its .current property. You might be familiar with
                  refs primarily as a way to access the DOM. If you pass a ref
                  object to React with ` ref="{"myRef"}"`, React will set its
                  .current property to the corresponding DOM node whenever that
                  node changes.
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
