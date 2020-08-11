import React, { useState, useEffect } from 'react'

function Watchlist(props) {
  const [watchlist, setWatchlist] = useState(props.list)
  useEffect(() => {
    if (props.list.length > watchlist.length || props.list.length === 0)
      setWatchlist(props.list)
  }, [props.list, watchlist])

  function handleResetWatchlist(event) {
    props.onChange(event)
    setWatchlist([])
  }
  let head = [],
    neck = [],
    shoulder = [],
    chest = [],
    wrist = [],
    hands = [],
    waist = [],
    legs = [],
    foot = [],
    ring = []

  return (
    <div>
      <div className='watchlist'>
        <h3>Watchlist</h3>
        {watchlist.length > 0 ? (
          watchlist.map((item) => (
            <div key={item.id} className='watchlist__item'>
              <div className='name'>{item.name}</div>
              <div className='class'>{item.class}</div>
              <div className='icon'>
                <button>x</button>
              </div>
            </div>
          ))
        ) : (
          <>Empty list</>
        )}
        <div className='watchlist__btn'>
          <button>Generate</button>
          <button value={true} onClick={handleResetWatchlist}>
            Clear
          </button>
        </div>
      </div>
      <div className='slotslist'>
        <h3>Slots</h3>
        <>
          <div className='slotslist__slots'>
            <div className='column'>
              <div className='slot'>
                <h4>Head</h4>
                {watchlist
                  .filter((c) => c.slots.includes('Head'))
                  .map((item) => (
                    <div key={item.name + Math.random()}>{item.name}</div>
                  ))}
              </div>
              <div className='slot'>
                <h4>Neck</h4>
                {watchlist
                  .filter((c) => c.slots.includes('Neck'))
                  .map((item) => (
                    <div key={item.name + Math.random()}>{item.name}</div>
                  ))}
              </div>
              <div className='slot'>
                <h4>Shoulder</h4>
                {watchlist
                  .filter((c) => c.slots.includes('Shoulder'))
                  .map((item) => (
                    <div key={item.name + Math.random()}>{item.name}</div>
                  ))}
              </div>
              <div className='slot'>
                <h4>Chest</h4>
                {watchlist
                  .filter((c) => c.slots.includes('Chest'))
                  .map((item) => (
                    <div key={item.name + Math.random()}>{item.name}</div>
                  ))}
              </div>
              <div className='slot'>
                <h4>Wrist</h4>
                {watchlist
                  .filter((c) => c.slots.includes('Wrist'))
                  .map((item) => (
                    <div key={item.name + Math.random()}>{item.name}</div>
                  ))}
              </div>
            </div>
            <div className='column'>
              <div className='slot'>
                <h4>Hands</h4>
                {watchlist
                  .filter((c) => c.slots.includes('Hands'))
                  .map((item) => (
                    <div key={item.name + Math.random()}>{item.name}</div>
                  ))}
              </div>
              <div className='slot'>
                <h4>Waist</h4>
                {watchlist
                  .filter((c) => c.slots.includes('Waist'))
                  .map((item) => (
                    <div key={item.name + Math.random()}>{item.name}</div>
                  ))}
              </div>
              <div className='slot'>
                <h4>Legs</h4>
                {watchlist
                  .filter((c) => c.slots.includes('Legs'))
                  .map((item) => (
                    <div key={item.name + Math.random()}>{item.name}</div>
                  ))}
              </div>
              <div className='slot'>
                <h4>Feet</h4>
                {watchlist
                  .filter((c) => c.slots.includes('Feet'))
                  .map((item) => (
                    <div key={item.name + Math.random()}>{item.name}</div>
                  ))}
              </div>
              <div className='slot'>
                <h4>Ring</h4>
                {watchlist
                  .filter((c) => c.slots.includes('Ring'))
                  .map((item) => (
                    <div key={item.name + Math.random()}>{item.name}</div>
                  ))}
              </div>
            </div>
          </div>
        </>
      </div>
    </div>
  )
}

export default Watchlist
