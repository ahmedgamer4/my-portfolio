import React, { useState } from "react";

const App = () => {
  const [visible, setVisible] = useState(true)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility= () => {
    setVisible(!visible)
  }

  return (
    <div style={showWhenVisible} className="absolute top-0 inset-x-0 px-4 py-8 transition transform origin-top md:hidden">
        <div className="rounded-3xl shadow-md bg-zinc-900/90 ring-1 ring-zinc-800 ring-opacity-100 overflow-hidden">
          <div className="px-8 pt-7 flex items-center justify-between">
            <div className="text-gray-400 text-sm">
              Navigation
            </div>
            <div className="-mr-2">
              <button type="button" className="rounded-md p-2 inline-flex items-center justify-center text-gray-300" onClick={toggleVisibility}>
                <span className="sr-only">Close menu</span>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div className="pt-3 pb-8">
            <div className="px-5 space-y-1 text-sm text-gray-300">
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium border-b border-zinc-800">About</a>

              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium border-b border-zinc-800">Projects</a>

              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium border-b border-zinc-800">Social</a>

              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium ">Contact</a>
            </div>
          </div>
        </div>
      </div>
  )
}

export default App
