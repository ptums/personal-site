"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mbjeklgr");
  if (state.succeeded) {
    return <p>Thank you for your question! I will get back to you shortly.</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <>
        <div className="space-y-6 sm:space-y-5">
          <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
            >
              Full Name
            </label>
            <div className="mt-2 sm:col-span-2 sm:mt-0">
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="given-name"
                className="block w-full max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:max-w-xs sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
            >
              Email
            </label>
            <div className="mt-2 sm:col-span-2 sm:mt-0">
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="given-email"
                className="block w-full max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:max-w-xs sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="question"
              className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
            >
              Question
            </label>
            <div className="mt-2 sm:col-span-2 sm:mt-0">
              <ValidationError
                prefix="Question"
                field="question"
                errors={state.errors}
              />
              <textarea
                name="question"
                id="question"
                autoComplete="given-name"
                style={{ height: 200 }}
                className="block w-full max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:max-w-xs sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:border-t sm:border-gray-200 py-4 sm:py-10">
            <button
              disabled={state.submitting}
              aria-label="submit"
              className="block bg-emerald-500 text-white rounded active:shadow-md active:bg-emerald-400 px-4 py-3"
            >
              Send Away!
            </button>
          </div>
        </div>
      </>
    </form>
  );
};

export default ContactForm;
