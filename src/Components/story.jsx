import React, { Component } from 'react';
class story extends Component {
    state = {  } 
    render() {
        return (
            <div className='card'>
                <div className='pembungkus'>
                    <img src={require('./Images/3.jpg')} alt="Story" className='container'/>
                    <p>Once every decade, elder dragons trek across the sea to travel to the land known as the New World in a migration 
                        referred to as the Elder Crossing.
                    To get to the bottom of this mysterious phenomenon, the Guild has formed the 
                        Research Commission, dispatching them in large fleets to the New World.</p>
                    <p>As the Commission sends its Fifth Fleet in pursuit of the colossal elder dragon, Zorah Magdaros, 
                        one hunter is about to embark on a journey grander 
                        than anything they could have ever imagined.</p>
                </div>
            </div>
            );
    }
}
 
export default story;