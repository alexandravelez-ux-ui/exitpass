import React, { useState, useEffect } from "react";
import "./style.css";
import Main from "./Main";
import Sidebar from "./Sidebar";

const imageURLs = {
  banking: "https://i.imgur.com/Z9WdYH0.jpg",
  cloud: "https://i.imgur.com/LpafKuh.jpg",
  devices: "https://i.imgur.com/bZp64n6.jpg",
  shopping: "https://i.imgur.com/Tpg2M92.jpg",
  socialmedia: "https://i.imgur.com/ageV8oP.png",
  subscriptions: "https://i.imgur.com/TJDmVFL.jpg"
};

const sidebarIconURLs = {
  banking: "https://i.imgur.com/z2vp4v4.png",
  cloud: "https://i.imgur.com/ij71cPE.png",
  devices: "https://i.imgur.com/6mIvgHE.png",
  shopping: "https://i.imgur.com/2GW5hZy.png",
  socialmedia: "https://i.imgur.com/qp5XavN.png",
  subscriptions: "https://i.imgur.com/xpyZ1L2.png"
};

const airTableAPIURLs = {
  banking:
    "https://api.airtable.com/v0/apptFVczcyYCsW2kM/Banking?maxRecords=3&view=Social%20Media&api_key=keysPLgxJFxnSlXkv",
  cloud:
    "https://api.airtable.com/v0/apptFVczcyYCsW2kM/Cloud%20Storage?maxRecords=3&api_key=keysPLgxJFxnSlXkv",
  devices:
    "https://api.airtable.com/v0/apptFVczcyYCsW2kM/Electronics?maxRecords=3&api_key=keysPLgxJFxnSlXkv",
  shopping:
    "https://api.airtable.com/v0/apptFVczcyYCsW2kM/Online%20Shopping?maxRecords=3&api_key=keysPLgxJFxnSlXkv",
  socialmedia:
    "https://api.airtable.com/v0/apptFVczcyYCsW2kM/Social%20Media?maxRecords=3&api_key=keysPLgxJFxnSlXkv",
  subscriptions:
    "https://api.airtable.com/v0/apptFVczcyYCsW2kM/Monthly%20Subscriptions?maxRecords=3&api_key=keysPLgxJFxnSlXkv"
};

const columns = {
  banking: [
    "User Name",
    "Password",
    "Security Question",
    "How to Handle",
    "Access Link"
  ],
  socialmedia: [
    "User Name",
    "Password",
    "Security Question",
    "How to Handle",
    "Access Link"
  ],
  shopping: [
    "User Name",
    "Password",
    "Security Question",
    "How to Handle",
    "Access Link"
  ],
  subscriptions: [
    "User Name",
    "Password",
    "Security Question",
    "How to Handle",
    "Access Link"
  ],
  devices: [
    "User Name",
    "Password",
    "Security Question",
    "How to Handle",
    "Access Link"
  ],
  cloud: [
    "User Name",
    "Password",
    "Security Question",
    "How to Handle",
    "Access Link"
  ]
};

const titleColumns = {
  banking: "Financial Institution",
  socialmedia: "Network Name",
  shopping: "Online Store",
  subscriptions: "Company Name",
  cloud: "Provider",
  devices: "Device"
};

const categories = {
  banking: "Banking",
  socialmedia: "Social Media",
  shopping: "Shopping",
  subscriptions: "Subscriptions",
  devices: "Devices",
  cloud: "Cloud"
};

export default function Recipient() {
  const [data, setData] = useState({
    banking: [],
    cloud: [],
    devices: [],
    shopping: [],
    socialmedia: [],
    subscriptions: []
  });

  const [currentTable, setCurrentTable] = useState("banking");

  useEffect(() => {
    Promise.all(
      Object.entries(airTableAPIURLs).map(([table, URL]) =>
        fetch(URL)
          .then(res => res.json())
          .then(res => {
            console.log(res.records);
            return { [table]: res.records };
          })
          .catch(error => console.log(error))
      )
    )
      .then(r => Object.assign({}, ...r))
      .then(setData);
  }, []);

  return (
    <div className="recipientContainer">
      <Sidebar
        categories={categories}
        currentTable={currentTable}
        setCurrentTable={setCurrentTable}
        sidebarIconURLs={sidebarIconURLs}
      />

      <Main
        imgURL={imageURLs[currentTable]}
        fields={columns[currentTable]}
        data={data[currentTable]}
        titleColumn={titleColumns[currentTable]}
      />
    </div>
  );
}
