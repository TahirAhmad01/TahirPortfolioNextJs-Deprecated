/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import PageLayout from "../components/pageLayout";

function PageNotFound() {
  return (
    <>
      <Helmet>
        <title>404 page not found - Tahir Ahmad</title>
      </Helmet>

      <PageLayout>
        <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100 md:h-[calc(100vh-8rem)]">
          <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
            <div className="max-w-lg text-center">
              <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
                <span className="sr-only">Error</span>404
              </h2>
              <p className="text-2xl font-semibold md:text-3xl">
                Sorry, we couldn't find this page.
              </p>
              <p className="mt-4 mb-8 dark:text-gray-400">
                But dont worry, you can find plenty of other things on our
                homepage.
              </p>
              <Link to="/">
                <button
                  type="button"
                  className=" bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 hover:bg-gradient-to-bl font-medium rounded-3xl text-sm px-5 md:px-9 py-3.5 text-center mr-2 mb-2 text-white   "
                >
                  Back to home
                </button>
              </Link>
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
}

export default PageNotFound;
