// Dashboard page UI will be implemented here

function Dashboard() {
  return (
    <div style={{ maxWidth: 600, margin: '40px auto', padding: 20 }}>
      <h2>Dashboard</h2>
      <div style={{ marginBottom: 24 }}>
        <h3>Courses</h3>
        {/* Placeholder for course list */}
        <ul style={{ background: '#f9f9f9', padding: 16, borderRadius: 8 }}>
          <li>Course 1 <button style={{ marginLeft: 8 }}>Delete</button></li>
          <li>Course 2 <button style={{ marginLeft: 8 }}>Delete</button></li>
        </ul>
      </div>
      <div style={{ marginBottom: 24 }}>
        <h3>Add New Course</h3>
        {/* Placeholder for create course form */}
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
