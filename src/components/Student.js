import React from 'react';

const Student = () => {
  return (
    <div id='student' className='display-flex py-3'>
      <div className="container d-flex flex-row" style={{ backgroundColor: '#aad6ec' }}>
        <h2>Student Coordinators</h2>
      </div>
      <div className="container" style={{ backgroundColor: '#aad6ec' }}>
        <p align='justify'>
          <ul>
            <li>
              Hardik Patel -{' '}
              <a href="mailto:hardik20507@iiitd.ac.in" style={{ textDecoration: 'none' }}>
                hardik20507@iiitd.ac.in
              </a>
            </li>
            <li>
              Rana Kumar Jana -{' '}
              <a href="mailto:ranaj@iiitd.ac.in" style={{ textDecoration: 'none' }}>
                ranaj@iiitd.ac.in
              </a>
            </li>
          </ul>
          {/* Add more student coordinators if needed */}
        </p>
      </div>
    </div>
  );
};

export default Student;
