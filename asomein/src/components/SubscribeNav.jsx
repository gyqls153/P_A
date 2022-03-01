import { Link } from 'react-router-dom';
import React, { useRef } from 'react';
import '../assets/css/subscribeNav.css';
import { useDetectOutsideClick } from "../services/useDetectOutsideClick";

function SubscribeNav() {

    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setIsActive(!isActive);

    return(
        <>
            <div className="title__sec__color">
                <div className="subscribe-title-box">
                    <button onClick={onClick} className="menu-trigger">
                        <span className='type-text'>금융 ONLY</span>
                        <i className="select-arrow"></i>
                    </button>
                   
                    <nav ref={dropdownRef}
                         className={`dropmenu ${isActive ? "active" : "inactive"}`}
                    >
                        <ul className="drop-menu-list">
                            <li><Link to="/">금융 ONLY</Link></li>
                            <li><Link to="/">부동산 ONLY</Link></li>
                            <li><Link to="/">금융 ONLY</Link></li>
                            <li><Link to="/">금융 ONLY</Link></li>
                        </ul>
                    </nav>
                    <Link to="" />
                </div>
            </div>
        </>
    )
}
export default SubscribeNav;