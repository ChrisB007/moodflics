import React from "react";
import index from '../pages/index';
import Link from 'next/link'

export default function Modal(props) {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="bg-gray-700 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        More Details
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-6xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none bg-gradient-to-r from-gray-700 via-gray-800 to-black">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold text-white">
                    {props.title}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto grid grid-cols-2 gap-3">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed text-white">
                  {props.overview}
                  </p>
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                  <img src={`https://image.tmdb.org/t/p/w1280/${props.poster_path}`} alt={props.title} className="group-hover:opacity-75 object-cover pointer-events-none mov-image h-full w-full" />
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <Link href="/api/auth/login"className="flex">
                    <a className="text-white h-10 bg-gray-800 w-32 flex justify-center items-center">Refine result</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
