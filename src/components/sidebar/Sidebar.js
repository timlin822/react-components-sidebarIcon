import {useState} from 'react';
import {Link} from 'react-router-dom';
import {FaHome,FaUser,FaBriefcase,FaConciergeBell,FaEnvelope,FaExternalLinkAlt,FaBars} from 'react-icons/fa';

import logo from 'images/logo.png';

import './Sidebar.css';

const Sidebar=()=>{
	const [sidebarIsOpen,setSidebarIsOpen]=useState(false);

	const sidebarToggleHandler=()=>{
		setSidebarIsOpen(!sidebarIsOpen);
	};
    const sidebarCloseHandler=()=>{
		setSidebarIsOpen(false);
	};
    const logoutHandler=()=>{
		console.log("logout");
    };

    return (
        <nav className={sidebarIsOpen?"sidebar sidebar-open":"sidebar"}>
            <div className="logo">{sidebarIsOpen?<Link to="/" className="logo-image"><img src={logo} onClick={sidebarCloseHandler} alt="logo" /></Link>:<FaBars className="btn-toggle" onClick={sidebarToggleHandler} />}</div>
            <div className="main-sidebar">
                <div className="sidebar-top">
                    <Link to="/" className="btn-link" onClick={sidebarCloseHandler}><FaHome className="link-icon" /><div className={sidebarIsOpen?"link-name-show":"link-name-hide"}>首頁</div></Link>
                    <Link to="/about" className="btn-link" onClick={sidebarCloseHandler}><FaUser className="link-icon" /><div className={sidebarIsOpen?"link-name-show":"link-name-hide"}>關於</div></Link>
                    <Link to="/service" className="btn-link" onClick={sidebarCloseHandler}><FaBriefcase className="link-icon" /><div className={sidebarIsOpen?"link-name-show":"link-name-hide"}>服務</div></Link>
                    <Link to="/product" className="btn-link" onClick={sidebarCloseHandler}><FaConciergeBell className="link-icon" /><div className={sidebarIsOpen?"link-name-show":"link-name-hide"}>產品</div></Link>
                    <Link to="/contact" className="btn-link" onClick={sidebarCloseHandler}><FaEnvelope className="link-icon" /><div className={sidebarIsOpen?"link-name-show":"link-name-hide"}>聯絡</div></Link>
                    <Link to="/login" className="btn-link" onClick={sidebarCloseHandler}><FaUser className="link-icon" /><div className={sidebarIsOpen?"link-name-show":"link-name-hide"}>登入</div></Link>
                </div>
                <div className="sidebar-down">
                    <div className="btn-link" onClick={logoutHandler}><FaExternalLinkAlt className="link-icon" /><div className={sidebarIsOpen?"link-name-show":"link-name-hide"}>登出</div></div>
                </div>
            </div>
        </nav>
    );
}

export default Sidebar;