// Dashboard page UI will be implemented here


import { useState } from 'react';

function Dashboard() {
  // Example static courses for UI demo
  const [courses] = useState([
    { id: 1, name: 'Course 1', description: 'Desc 1' },
    { id: 2, name: 'Course 2', description: 'Desc 2' },
    { id: 3, name: 'React Basics', description: 'Desc 3' },
  ]);
  const [search, setSearch] = useState('');

  const filteredCourses = courses.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ maxWidth: 600, margin: '40px auto', padding: 20 }}>
      <h2>Dashboard</h2>
      <div style={{ marginBottom: 24 }}>
        <h3>Courses</h3>
        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ marginBottom: 12, padding: 6, width: '100%' }}
        />
        <ul style={{ background: '#f9f9f9', padding: 16, borderRadius: 8 }}>
          {filteredCourses.length === 0 && <li>No courses found.</li>}
          {filteredCourses.map(c => (
            <li key={c.id}>
              {c.name} <button style={{ marginLeft: 8 }}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      <div style={{ marginBottom: 24 }}>
        <h3>Add New Course</h3>
        <form>
          <input type="text" placeholder="Course Name" style={{ marginRight: 8, padding: 6 }} />
          <input type="text" placeholder="Course Description" style={{ marginRight: 8, padding: 6 }} />
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
}

export default Dashboard;
