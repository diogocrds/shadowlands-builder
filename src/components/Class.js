import React, { useState, useEffect } from 'react'
import leggosData from './data/legendaries.json'

function Class(props) {
  const leggos = leggosData.filter((c) => c.class === props.class)

  function handleInputChange(event) {
    props.onChange(JSON.parse(event.target.value))
  }

  return (
    <div className='single-class'>
      <h2>
        {props.class} - {props.spec}
      </h2>
      {leggos[0].specs
        .filter((c) => c.name === 'General' || c.name === props.spec)
        .map((c) => (
          <div key={props.class + c.name} className='single-spec'>
            <h4>{c.name}</h4>
            {c.items.map((i) => (
              <div key={i.id} className='single-spec__leggo'>
                <div className='single-spec__content'>
                  <div className='name'>{i.name}</div>
                  <div className='desc'>{i.desc}</div>
                  <div className='slots'>
                    <span>Slots:</span>
                    {i.slots.map((s) => (
                      <div className='slot__name' key={i.id + s}>
                        {s}
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  className='single-spec__btn'
                  value={JSON.stringify({
                    name: i.name,
                    class: props.class,
                    slots: i.slots,
                  })}
                  onClick={handleInputChange}
                >
                  Add to list
                </button>
              </div>
            ))}
          </div>
        ))}
    </div>
  )
}

export default Class
