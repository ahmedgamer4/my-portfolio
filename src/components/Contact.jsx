import React from "react";

const Contact = () => {
  return (
    <section className="py-16 w-full">
      <h1 id="contact" className="text-3xl sm:text-4xl text-white font-bold mb-20">
        Contact
      </h1>
      <div className="flex flex-col sm:flex-row justify-end gap-8">
        <div className="flex flex-col gap-2 text-3xl">
          <a href="https://github.com/ahmedgamer4" target="_blank">
            <i className="fa-brands fa-github hover:text-cyan-600 transition-colors"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ahmed-alseidy-89558420a/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin hover:text-cyan-600 transition-colors"></i>
          </a>
        </div>
        <form
          action="https://formsubmit.co/ahmedalseidy66@gmail.com"
          method="POST"
          className="text-gray-300 flex flex-col gap-3  sm:w-1/2"
        >
          <input
            className="py-2 bg-transparent outline outline-[1px] outline-gray-300 pl-3 text-xs sm:text-sm"
            type="text"
            placeholder="Name"
            required
            minLength={2}
          />
          <input
            className="py-2 bg-transparent outline outline-[1px] outline-gray-300 pl-3 text-xs sm:text-sm"
            type="email"
            placeholder="Email"
            required
            minLength={8}
          />
          <input
            type="hidden"
            name="_next"
            value="http://localhost:5173/thank-you"
          />
          <textarea
            className="bg-transparent outline outline-[1px] outline-gray-300 p-3 text-sm sm:text-base"
            name="message"
            id="message"
            rows="5"
            placeholder="Message"
            required
          ></textarea>
          <button
            className="bg-white py-2 text-sm text-black hover:bg-slate-800 hover:text-white transition-colors duration-300"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
