import React from 'react'

const About = () => {
  return (
    <div id='about' className='display-flex' >
      <div className="container d-flex flex-row" style={{ backgroundColor: '#aad6ec' }}>
        <h1>About</h1>
      </div>
      <div className="container " style={{ backgroundColor: '#aad6ec' }}>
        <p align='justify'>
          One of the key visions of 6G networks is to enhance the security of the network where confidential data faces security threads such as eavesdropping and jamming. In general, the end-to-end security of the network depends on several factors such as physical layer security, network layer security, IP-layer security, etc. Classically, the conventional cryptographic methods are focused on the complex mathematical model in order to ensure end-to-end service security. Recently, quantum key distribution (QKD) has become an efficient choice in order to model secure optical networks where secure keys are distributed at the transmitter and receiver ends. However, the research challenge appears for the integration of this quantum communication with the existing classical optical networks. Therefore, several investigations need to be done in order to solve several open research problems, such as routing and wavelength assignment, trusted repeater node placement, etc., in the QKD-based secure communication system. In this seminar series, speakers across leading research labs in India shall be giving tutorial seminars on various aspects of QKD ecosystem.
        </p>
      </div>
    </div>
  )
}

export default About
