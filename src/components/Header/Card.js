import React from 'react'
import userr from '../../../public/images/userr.png'
import time from '../../../public/images/timess.png'
import Image from 'next/image'

export default function Card({ title, desc, teacher, duration,  number }) {
  return (
    <div className="flex grow h-full bg-white dark:bg-slate-700 rounded-lg p-5 shadow-[0px_2px_14px_rgba(23,23,23,1)] dark:shadow-[0px_2px_14px_rgba(0,0,0,0.08)]">
      <div>
        <div className="">
          <div className="rounded-full flex justify-center items-center dark:text-gray-50 text-[#223150] w-11 h-11 border-2 border-[#223150] dark:border-gray-50"> { number } </div>
          <h2 className="text-[#223150] dark:text-gray-50 text-xl font-bold my-4 mx-0"> { title } </h2>
          <p className="text-sm text-[#212529] dark:text-gray-50"> { desc } </p>
          <div className="mt-4">
            <div className="flex items-center mb-2 text-xs">
              <Image 
              height="15px"
              width="15px"
              layout="intrinsic"
              alt="Sintaxy"  
              src={time} 
              />
              <span className="text-[#37517e] dark:text-gray-100 ml-1"> Duração: &nbsp; </span>
              <span className="dark:text-gray-100"> { duration } </span>
            </div>
            <div className="text-xs">
              <Image
                height="15px"
                width="15px"
                layout="intrinsic"
                src={userr}
                alt="Sintaxy"
              />
              <span className="text-[#37517e] dark:text-gray-100"> Formador:  &nbsp; </span>
              <span className="dark:text-gray-100"> { teacher } </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
