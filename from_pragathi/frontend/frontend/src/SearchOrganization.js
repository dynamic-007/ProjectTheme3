import React, { useState } from 'react';
import './SearchOrganization.css';


function SearchOrganization() {
  const [organizationName, setOrganizationName] = useState('');
  const [organizationData, setOrganizationData] = useState(null);

  const handleInputChange = (e) => {
    setOrganizationName(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`/api/searchOrganization?organizationName=${organizationName}`);
      console.log(response);

      if (response.ok) {
        const data = await response.json();
        setOrganizationData(data);
      } else {
        setOrganizationData(null);
      }


    } catch (error) {
      console.error('Error searching for organization:', error);
      setOrganizationData(null);
    }

  };

  return (

    <div>

      <h2>Search for an Organization</h2>

      <div>
        <input
          type="text"
          placeholder="Enter Organization Name"
          value={organizationName}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {organizationData ? (
        <div className="border">
          <div className="profile">
            <p>Profile</p>
          </div>
          <div className="top-right">
            <p>{organizationData.organization.location}</p>
            <p>{organizationData.organization.email}</p>
            <p>{organizationData.organization.contactDetails}</p>


          </div>
          <div className="top-left">
            <p>{organizationData.organization.organizationName}</p>
            <p>{organizationData.organization.departmentName}</p>

          </div>

          {organizationData.requests ? (
            <div className="scrolling-alert-container">
              <div className="scrolling-alert"><h4 style={{color: 'red'}}>There is a request. Sender ID: {organizationData.requests.senderID}. Sender Name: {organizationData.requests.senderName} </h4></div>
            </div>
          ) : null
          }
          <div>

            <ul class="nav">
              <li class="nav-item"><a href="#about">About</a></li>
              <li class="nav-item"><a href="#current-requests">Current Requests</a></li>
              <li class="nav-item"><a href="#history">History</a></li>
            </ul>
            <div id="about">
              <h2>About</h2>
              <p>Organization Name : {organizationData.organization.organizationName}</p>
              <p>Department Name: {organizationData.organization.departmentName}</p>
              <p>Location: {organizationData.organization.location}</p>

              {organizationData.organization.src ? (
                <iframe
                  title="Google Map"
                  src={organizationData.organization.src}
                  width="1000"
                  height="350"
                  style={{ border: '0' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              ) : <div>Map not updated yet</div>}

              <p>Email: {organizationData.organization.email}</p>
              <p>Contact Details: {organizationData.organization.contactDetails}</p>
            </div>

            {organizationData.requests ? (
              <div id="current-requests">
                <h2>Current Requests</h2>
                <p>Sender ID: {organizationData.requests.senderID}</p>
                <p>Sender Name: {organizationData.requests.senderName}</p>
                <p>Display other details from the db</p>
              </div>
            ) : <div id="current-requests">
              <h2>Current Requests</h2>
              <p>No current requests</p>
            </div>
            }

            {organizationData.history ? (
              <div id="history">
                <h2>History</h2>
                <p>Sender ID: {organizationData.history.sender_ID}</p>
                <p>Sender Name: {organizationData.history.sender_Name}</p>
                <p>Year: {organizationData.history.date}</p>
              </div>
            ) : <div id="history">
              <h2>History</h2>
              <p>Nothing to show</p>
            </div>}

          </div>

          {organizationData.requests ? (
            <div id="current-requests">

            </div>
          ) : null}


        </div>
      ) : null}


    </div>
  );
}

export default SearchOrganization;
