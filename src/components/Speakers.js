import React from 'react'
import Speaker from './Speaker'
import image1 from '../profImage/Raghavan.jpg'
import image2 from '../profImage/Atul.png'
import image3 from '../profImage/Anirban.jpg'
import image4 from '../profImage/rpsingh.jpg'
import image5 from '../profImage/Anindita.png'
import image6 from '../profImage/Amit.png'
import data from './data'

const Speakers = () => {
  return (
    <div id='speakers'>
      <div className="container d-flex flex-row" style={{ backgroundColor: '#aad6ec' }}>
        <h1>Speakers</h1>
        <h1>{ }</h1>
      </div>
      <div className="container py-3" style={{ backgroundColor: '#aad6ec' }}>
        <Speaker name={data.speaker1.name} work={data.speaker1.work} title={data.speaker1.title} bio={data.speaker1.bio} image={image1} />
        <Speaker name={data.speaker2.name} work={data.speaker2.work} title={data.speaker2.title} bio={data.speaker2.bio} image={image2} />
        <Speaker name={data.speaker3.name} work={data.speaker3.work} title={data.speaker3.title} bio={data.speaker3.bio} image={image3} />
        <Speaker name={data.speaker4.name} work={data.speaker4.work} title={data.speaker4.title} bio={data.speaker4.bio} image={image4} />
        <Speaker name={data.speaker5.name} work={data.speaker5.work} title={data.speaker5.title} bio={data.speaker5.bio} image={image5} />
        <Speaker name={data.speaker6.name} work={data.speaker6.work} title={data.speaker6.title} bio={data.speaker6.bio} image={image6} />
      </div>
    </div>
  )
}

export default Speakers
