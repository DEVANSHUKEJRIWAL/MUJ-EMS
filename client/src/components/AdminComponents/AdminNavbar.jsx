import "../Admin.css"
import {Link} from 'react-router-dom';

function AdminNavbar(){

    return <>
     <nav className="navbar">
                <div className="left">
                    <img src="Manipal University1679046981_upload_logo.jpg" alt="Logo" className="logo" />
                    <ul className="menu">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#student-list">Student List</a></li>
                        <li><a href="#server-status">Server Status</a></li>
                        <Link to="/"><li><a href="#logout">Log Out</a></li></Link>
                    </ul>
                </div>
                <div className="right">
                    <h1>Admin Panel</h1>
                </div>
            </nav></>
}
export default AdminNavbar;