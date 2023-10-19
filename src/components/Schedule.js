import React from 'react'
import './Schedule.css';

const Schedule = () => {
  const scheduleData = [
    { date: '31/10/2023', speaker: 'Prof. G Raghavan', workplace: 'DIAT, Pune' },
    { date: '01/11/2023', speaker: 'Mr. Atul Gupta', workplace: 'CDoT, Delhi' },
    { date: '02/11/2023', speaker: 'Prof. Anirban Pathak', workplace: 'JIIT, Noida' },
    { date: '07/11/2023', speaker: 'Prof. R.P. Singh', workplace: 'PRL, Ahmedabad' },
    { date: '08/11/2023', speaker: 'Dr. Anindita Banerjee', workplace: 'CDAC, Pune' },
    { date: '09/11/2023', speaker: 'Dr. Amit Srivastava', workplace: 'DRDO Hyderabad' },
  ];
  return (
    <div id='schedule'>
      <div className="container mb-5" style={{ backgroundColor: '#aad6ec' }}>
        <div className="container d-flex flex-row" style={{ backgroundColor: '#aad6ec' }}>
          <h1>Schedule</h1>
        </div>
        <div className='pb-2'>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Speaker</th>
                <th>Workplace</th>
              </tr>
            </thead>
            <tbody>
              {scheduleData.map((item, index) => (
                <tr key={index}>
                  <td>{item.date}</td>
                  <td>{item.speaker}</td>
                  <td>{item.workplace}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Schedule
