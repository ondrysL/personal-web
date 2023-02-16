import React from 'react'
import './Work.css'

const Work = (props) => {
    const {title, date, text, img} = props.object

  return (
    <div className='one__work'>
        <h2 className="one__work__title">{title}</h2>
        <p className="one__work__date">{date}</p>
        <p className="one__work__text">{text}</p>
        <img src={img} className="one__work__img" />
    </div>
  )
}

export default Work