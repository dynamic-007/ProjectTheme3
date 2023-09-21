import React from 'react'
import './Template.css'
//import LocationMap from './LocationMap';

export default function Template() {
    //onst location = { lat: 37.7749, lng: -122.4194 };
    return (
        <>
            <div className="border">
                <div className="profile">
                    <p>Profile</p>
                </div>
                <div className="top-right">
                    <p>Location</p>
                    <p>Email Address</p>
                    <p>Contact Details</p>
                </div>
                <div className="top-left">
                    <p>Organization Name</p>
                    <p>Department Name</p>
                </div>
                <div className="hrline">
                    <hr></hr>
                </div>
                <div>
                    <ul class="nav">
                        <li class="nav-item"><a href="#about">About</a></li>
                        <li class="nav-item"><a href="#current-requests">Current Requests</a></li>
                        <li class="nav-item"><a href="#history">History</a></li>
                    </ul>
                    <div id="about">
                        <h2>About</h2>
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.963017679863!2d78.53884697500959!3d17.36551248351799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb98eaf1171c35%3A0xfec885427f26e8b!2s9G8R%2B6H3%2C%20Huda%20Colony%2C%20Saroornagar%2C%20Hyderabad%2C%20Telangana%20500035!5e0!3m2!1sen!2sin!4v1695182433315!5m2!1sen!2sin"
                            width="1000"
                            height="350"
                            style={{ border: '0' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>

                    </div>

                    <div id="current-requests">
                        <h2>Current Requests</h2>
                        <p>Show the request form</p>
                    </div>

                    <div id="history">
                        <h2>History</h2>
                        <p>Display links to prev reports</p>
                    </div>
                </div>







                <div>
                    <p>Scrolling Notification in case of emergencies with color coding</p>
                </div>















            </div>
        </>
    )
}
