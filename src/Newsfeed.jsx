import React from 'react'
import LineGraph from './LineGraph'

const Newsfeed = () => {
  return (
    <div className='newsfeed border-2 text-white border-red-600 flex-[0.7]'>
        <div className='newsfeed__container'>
            <div className="newsfeed__chartSection">
                <div className="newsfeed__portfolio">
                    <h2>$114,656</h2>
                    <p>+$44.63 (+0.04%) Today</p>
                </div>
                <div className="newsfeed__chart">
                    <LineGraph />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsfeed