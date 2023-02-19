import React from 'react';

const Timeline = props => {
  return (
    <div
      className="relative border-b border-light-black
      mt-8 mb-5"
    >
      <span
        className="absolute top-[50%] translate-y-[-50%]
        left-[20px] bg-light-gray px-2 text-[14px]
        text-light-black"
      >
        {props.date}
      </span>
      <span
        className="absolute top-[50%] translate-y-[-50%]
        right-[20px] bg-light-gray px-2 text-[14px]
        text-light-black
        hover:border
        hover:border-light-black
        hover:text-light-black
        hover:rounded-md
        hover:cursor-pointer"
        onClick={props.onCopy}
      >
        Copy
      </span>
    </div>
  )
}

export default Timeline;