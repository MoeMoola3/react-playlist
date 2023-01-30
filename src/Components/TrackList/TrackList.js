import React from 'react';
import './TrackList.css';

class TrackList extends React.Component{
    render(){
        return(
            <div className="TrackList">
                {/* <!-- You will add a map method that renders a set of Track components  --> */}
                <ul>Track 1</ul>
                <ul>Track 2</ul>
                <ul>Track 3</ul>
            </div>
        );
    }
}

export default TrackList;