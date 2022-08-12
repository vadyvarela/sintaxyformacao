import React from 'react'
import styles from './styles.module.scss'

export default function Accordion({ title, desc, index }) {
  return (
    <div className="relative mb-2 border dark:border-gray-700 border-gray-200">
      <input type="checkbox" id={`toggle${index}`} className={`${styles.toggle} hidden`} />
      <label className={`${styles.title} block bg-white dark:bg-slate-700 p-3 md:p-4 font-semibold cursor-pointer text-[#C21B78] dark:text-gray-50 text-base md:text-lg`} htmlFor={`toggle${index}`}>
        { title }
      </label>
      <div className={`${styles.content} bg-white dark:bg-slate-700 overflow-hidden`}>
        <p className="p-4 dark:text-gray-100"> { desc } </p>
      </div>
    </div>
  )
}
