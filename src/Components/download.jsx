import React, { Component } from 'react';
class Download extends Component {
    state = {  } 
    render() { 
        return (
            <div className='card'>
                <h1>System Requirement</h1>
                <div className="kartu">
                    <div className="total-kartu">
                        <div className="detail">
                        <h2 style={{display: 'block'}}>Minimum Requirements</h2>
                        <ul>
                            <li>Intel Core i3</li>
                            <li>4GB RAM DDR4</li>
                            <li>Nvidia GTX 960 2GB</li>
                            <li>30GB Drive Space</li>
                        </ul>
                        </div>
                        <div className="detail">
                        <h2>Recommended Requirements</h2>
                        <ul>
                            <li>Intel Core i5 or Higher</li>
                            <li>8GB RAM DDR4</li>
                            <li>Nvidia GTX 1650Ti or Higher</li>
                            <li>60GB Drive Space </li>
                        </ul>
                        </div>
                    </div>
                    <div className="tombol">
                        <button>Download</button>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Download;