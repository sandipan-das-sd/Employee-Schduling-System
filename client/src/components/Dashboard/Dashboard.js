
// import React, { useState } from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';

// // Set up the localizer for react-big-calendar
// const localizer = momentLocalizer(moment);

// // Card component (unchanged from previous version)
// const Card = ({ cardbgcolor, number, category, pageLink, icon }) => {
//   return (
//     <div className="col-sm-6 col-md-6 col-lg-3 mb-4">
//       <div className="card card-responsive rounded-4 shadow" style={{ background: cardbgcolor }}>
//         <div className="card-body text-white">
//           <div className="d-flex justify-content-between align-items-center mb-3">
//             <h2 className="card-title mb-0" style={{ fontSize: '2.5rem', fontWeight: '800' }}>{number}</h2>
//             <i className={`fas ${icon} fa-2x`}></i>
//           </div>
//           <p className="card-text" style={{ fontSize: '1.1rem' }}>{category}</p>
//           <a href={pageLink} className="card-link d-block text-white text-decoration-none p-2 mt-3 rounded" style={{ background: 'rgba(255, 255, 255, 0.2)', transition: 'background 0.3s' }}>
//             More Info <i className="fas fa-arrow-circle-right ml-1"></i>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// // New AddTaskModal component
// const AddTaskModal = ({ isOpen, onClose, selectedDate }) => {
//   const [task, setTask] = useState('');
//   const [person, setPerson] = useState('');
//   const [time, setTime] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you would typically save the task to your backend or state management
//     console.log('New task:', { task, person, date: selectedDate, time });
//     onClose();
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="modal-overlay">
//       <div className="modal-content">
//         <h2>Add New Task</h2>
//         <button onClick={onClose} className="close-button">&times;</button>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="task">Task:</label>
//             <input
//               type="text"
//               id="task"
//               value={task}
//               onChange={(e) => setTask(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="person">Person:</label>
//             <input
//               type="text"
//               id="person"
//               value={person}
//               onChange={(e) => setPerson(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="date">Date:</label>
//             <input
//               type="date"
//               id="date"
//               value={moment(selectedDate).format('YYYY-MM-DD')}
//               readOnly
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="time">Time:</label>
//             <input
//               type="time"
//               id="time"
//               value={time}
//               onChange={(e) => setTime(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-actions">
//             <button type="submit" className="btn-primary">Add Task</button>
//             <button type="button" onClick={onClose} className="btn-secondary">Cancel</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// // Dashboard component
// const Dashboard = () => {
//   const [events, setEvents] = useState([
//     {
//       start: moment().toDate(),
//       end: moment().add(1, 'days').toDate(),
//       title: 'Sample Event',
//     },
//   ]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(null);

//   const handleDateClick = (date) => {
//     setSelectedDate(date);
//     setIsModalOpen(true);
//   };

//   return (
//     <div className="dashboard-container bg-light min-vh-100 py-5">
//       <div className="container">
//         <h1 className="mb-4 text-primary" style={{ fontSize: '2.5rem', fontWeight: '600' }}>
//           Dashboard <small className="text-muted" style={{ fontSize: '1.5rem' }}>Control Panel</small>
//         </h1>
//         <div className="row mb-5">
//           <Card
//             number="10"
//             category="Departments"
//             cardbgcolor="linear-gradient(45deg, #4158D0, #C850C0)"
//             pageLink="/manageDepartment"
//             icon="fa-building"
//           />
//           <Card
//             number="24"
//             category="Staff Members"
//             cardbgcolor="linear-gradient(45deg, #FF8008, #FFC837)"
//             pageLink="/manageStaff"
//             icon="fa-users"
//           />
//           <Card
//             number="5"
//             category="Leave Requests"
//             cardbgcolor="linear-gradient(45deg, #11998e, #38ef7d)"
//             pageLink="/leaveHistory"
//             icon="fa-calendar-alt"
//           />
//           <Card
//             number="$39,640"
//             category="Salary Paid"
//             cardbgcolor="linear-gradient(45deg, #536976, #292E49)"
//             pageLink="/manageSalary"
//             icon="fa-dollar-sign"
//           />
//         </div>
        
//         {/* Calendar component */}
//         <div className="calendar-container bg-white rounded-4 shadow p-4">
//           <h2 className="mb-4 text-primary">Event Calendar</h2>
//           <div style={{ height: '600px' }}>
//             <Calendar
//               localizer={localizer}
//               events={events}
//               startAccessor="start"
//               endAccessor="end"
//               style={{ height: '100%' }}
//               onSelectSlot={(slotInfo) => handleDateClick(slotInfo.start)}
//               selectable={true}
//             />
//           </div>
//         </div>
//       </div>
      
//       <AddTaskModal 
//         isOpen={isModalOpen} 
//         onClose={() => setIsModalOpen(false)} 
//         selectedDate={selectedDate}
//       />
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Dashboard.css';  // Make sure to create this CSS file

// Set up the localizer for react-big-calendar
const localizer = momentLocalizer(moment);

// Card component
const Card = ({ cardbgcolor, number, category, pageLink, icon }) => {
  return (
    <div className="col-sm-6 col-md-6 col-lg-3 mb-4">
      <div className="card card-responsive rounded-4 shadow" style={{ background: cardbgcolor }}>
        <div className="card-body text-white">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className="card-title mb-0" style={{ fontSize: '2.5rem', fontWeight: '800' }}>{number}</h2>
            <i className={`fas ${icon} fa-2x`}></i>
          </div>
          <p className="card-text" style={{ fontSize: '1.1rem' }}>{category}</p>
          <a href={pageLink} className="card-link d-block text-white text-decoration-none p-2 mt-3 rounded" style={{ background: 'rgba(255, 255, 255, 0.2)', transition: 'background 0.3s' }}>
            More Info <i className="fas fa-arrow-circle-right ml-1"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

// AddTaskModal component
const AddTaskModal = ({ isOpen, onClose, selectedDate }) => {
  const [task, setTask] = useState('');
  const [person, setPerson] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New task:', { task, person, date: selectedDate, time });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add New Task</h2>
        <button onClick={onClose} className="close-button">&times;</button>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="task">Task:</label>
            <input
              type="text"
              id="task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="person">Person:</label>
            <input
              type="text"
              id="person"
              value={person}
              onChange={(e) => setPerson(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              value={moment(selectedDate).format('YYYY-MM-DD')}
              readOnly
            />
          </div>
          <div className="form-group">
            <label htmlFor="time">Time:</label>
            <input
              type="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="btn-primary">Add Task</button>
            <button type="button" onClick={onClose} className="btn-secondary">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Dashboard component
const Dashboard = () => {
  const [events, setEvents] = useState([
    {
      start: moment().toDate(),
      end: moment().add(1, 'days').toDate(),
      title: 'Sample Event',
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (slotInfo) => {
    setSelectedDate(slotInfo.start);
    setIsModalOpen(true);
  };

  return (
    <div className="dashboard-container bg-light min-vh-100 py-5">
      <div className="container">
        <h1 className="mb-4 text-primary" style={{ fontSize: '2.5rem', fontWeight: '600' }}>
          Dashboard <small className="text-muted" style={{ fontSize: '1.5rem' }}>Control Panel</small>
        </h1>
        <div className="row mb-5">
          <Card
            number="10"
            category="Departments"
            cardbgcolor="linear-gradient(45deg, #4158D0, #C850C0)"
            pageLink="/manageDepartment"
            icon="fa-building"
          />
          <Card
            number="24"
            category="Staff Members"
            cardbgcolor="linear-gradient(45deg, #FF8008, #FFC837)"
            pageLink="/manageStaff"
            icon="fa-users"
          />
          <Card
            number="5"
            category="Leave Requests"
            cardbgcolor="linear-gradient(45deg, #11998e, #38ef7d)"
            pageLink="/leaveHistory"
            icon="fa-calendar-alt"
          />
          <Card
            number="$39,640"
            category="Salary Paid"
            cardbgcolor="linear-gradient(45deg, #536976, #292E49)"
            pageLink="/manageSalary"
            icon="fa-dollar-sign"
          />
        </div>
        
        {/* Calendar component */}
        <div className="calendar-container bg-white rounded-4 shadow p-4">
          <h2 className="mb-4 text-primary">Event Calendar</h2>
          <div style={{ height: '600px' }}>
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              style={{ height: '100%' }}
              onSelectSlot={handleDateClick}
              selectable={true}
              views={['month', 'week', 'day']}
            />
          </div>
        </div>
      </div>
      
      <AddTaskModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        selectedDate={selectedDate}
      />
    </div>
  );
};

export default Dashboard;