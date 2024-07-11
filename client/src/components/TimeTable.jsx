
import Navbar from './Navbar';
import SidePanel from './SidePanel';
import React from 'react';
import './TimeTable.css';

function Timetable() {
  const timetable = [
    { day: 'Monday', classes: [{ time: '9:00 AM', name: 'CSE Open_ELective1' }, { time: '11:00 AM', name: 'CSE Open_ELective1' }] },
    { day: 'Tuesday', classes: [{ time: '10:00 AM', name: 'CSE Open_ELective1' }, { time: '1:00 PM', name: 'CSE Open_ELective1' }] },
    { day: 'Wednesday', classes: [{ time: '9:30 AM', name: 'CSE Open_ELective1' }, { time: '11:30 AM', name: 'CSE Open_ELective1' }] },
    { day: 'Thursday', classes: [{ time: '9:00 AM', name: 'CSE Open_ELective1' }, { time: '11:00 AM', name: 'CSE Open_ELective1' }] },
    { day: 'Friday', classes: [{ time: '10:30 AM', name: 'CSE Open_ELective1' }, { time: '12:30 PM', name: 'CSE Open_ELective1' }] }
  ];

  return (
    <>
    <Navbar />
    <SidePanel/>
    <div className="timetable">
      <h2>Timetable for 15 Days</h2>
      <div className="days">
        {timetable.map(({ day, classes }) => (
          <div className="day" key={day}>
            <h3>{day}</h3>
            <ul>
              {classes.map(({ time, name }, index) => (
                <li key={index}>
                  <span className="time">{time}</span>
                  <span className="class">{name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Timetable;
