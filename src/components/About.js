import React from 'react'
import Speaker from './Speaker'
import image1 from '../profImage/abhijit.jpg'
import image2 from '../profImage/sayakbhatt.jpg'
import image3 from '../profImage/vivek.jpeg'

const About = () => {
  const org1 = "Dr. Abhijit Mitra"
  const org2 = "Dr. Sayak Bhattacharya"
  const org3 = "Dr. Vivek A bohara"

  const org1_bio = "Abhijit Mitra is presently working as a DST Inspire Faculty in Department of Electronics and Communication Engineering, IIIT Delhi. He received his PhD from the Indian Institute of Technology Delhi (2017) and his Master of Science (Engineering) from the University of Leeds, UK(2011). As a PhD student and BT Research Fellow at IIT Delhi, he demonstrated the benefits of operating optical networks with reduced Link Margin. Due to his research contributions and fostering strong research collaboration between India and the UK, he has been awarded the Professional Achievement Award-2019 by the British Council. Considering his research contributions, the United States India Education Foundation awarded him the Nehru-Fulbright Postdoctoral Research Fellowship (2019) at University of California Davis, USA. As a Postdoctoral researcher he evaluated the benefits of operating optical networks over C+L Bands for large geographies like the USA and India. He has published in prestigious venues like Proceedings of IEEE, JLT, JOCN, OFC, and ECOC. His current research focuses on Multi-band Optical Networks, Visible Light Communication and Quantum Key Distribution. He is currently leading funded projects by DST, MIETY and DRDO in the capacity of PI/Co-PI."

  const org2_bio = "Dr. Sayak Bhattacharya obtained his PhD from Dept. of Electrical Engineering, IIT Delhi in 2016. Before joining IIIT Delhi, he was appointed as a Postdoctoral Fellow in Prof. Sajeev John’s group at the University of Toronto since 2016. His current research focus is light-trapping and energy harvesting in ultra-thin, flexible, silicon photonic crystal solar cells. His broad area of interest is designing semiconductor devices that rely on photonic crystal mediated strong light-matter interaction. He is the recipient of SPIE Best Student Paper Award in the 12th International Conference on Fiber Optics and Photonics, 2014. His paper (co-authored with Prof. John), 'Designing High-Efficiency Thin Silicon Solar Cells Using Parabolic-Pore Photonic Crystals' has been featured as Editor’s Suggestion in the April, 2018 issue of Physical Review Applied for illustrating a roadmap towar28−29% conversion efficiency (well beyond the current world-record efficiency of 26.7%) in silicon solar cells. He has served asreviewer for Renewable & Sustainable Energy Reviews."

  const org3_bio = "Dr. Vivek A bohara is currently working as a Professor and Head, Department of Electronics and Communication Engineering in IIIT-Delhi. Before joining IIIT-Delhi I was a post doctoral researcher under Marie-Curie fellowship in ESIEE, Paris , France.  I obtained my PhD while working with Centre for Infocomm Technology within the school of Electrical and electronic engineering in Nanyang technological university, Singapore in December 2011 under the supervision of Dr. See Ho Ting, Vice President, AI & Data Analytics, at Ruckus Networks, Singapore. His research interests are next generation communication technologies such as Visible Light Communication (VLC),  hybrid RF-VLC communication, integration of optical communication with intelligent reflective surfaces (IRS) , UAV and vehicular communication. "

  return (
    <div id='about' className='display-flex' >
      <div className="container d-flex flex-row" style={{ backgroundColor: '#aad6ec' }}>
        <h1>About</h1>
      </div>
      <div className="container " style={{ backgroundColor: '#aad6ec' }}>
        <p align='justify'>
          This event targets one of the key visions of 6G networks is to enhance the security of the network where confidential data faces security threads such as eavesdropping and jamming. In general, the end-to-end security of the network depends on several factors such as physical layer security, network layer security, IP-layer security, etc. Classically, the conventional cryptographic methods are focused on the complex mathematical model in order to ensure end-to-end service security. Recently, quantum key distribution (QKD) has become an efficient choice in order to model secure optical networks where secure keys are distributed at the transmitter and receiver ends. However, the research challenge appears for the integration of this quantum communication with the existing classical optical networks. Therefore, several investigations need to be done in order to solve several open research problems, such as routing and wavelength assignment, trusted repeater node placement, etc., in the QKD-based secure communication system. In this seminar series, speakers across leading research labs in India shall be giving tutorial seminars on various aspects of QKD ecosystem.
        </p>
      </div>
      <div className="container d-flex flex-row" style={{ backgroundColor: '#aad6ec' }}>
        <h1>Organizers</h1>
      </div>
      <div className="container " style={{ backgroundColor: '#aad6ec' }}>
      <div className="container py-3" style={{ backgroundColor: '#aad6ec' }}>
      <Speaker name={org1} bio={org1_bio} image={image1} />
      <Speaker name={org2} bio={org2_bio} image={image2} />
      <Speaker name={org3} bio={org3_bio} image={image3} />
      </div>
      </div>
    </div>
  )
}

export default About
