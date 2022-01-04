import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Dashboard() {

    const [ProjectName, SetProjectName] = useState(null);
    const [ImageSrc, SetImageSrc] = useState(null);

    //Basically just checks cookies to display project information for demenstration
    useEffect(() => {
        let cookies = document.cookie.split("; ");
        let projName = "";
        let imgSrc = "";
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].split("=");
            if (cookie[0] === "projectName")
                projName = cookie[1]
            else if (cookie[0] === "imgSrc")
                imgSrc = cookie[1]
        }
        SetProjectName(projName);
        SetImageSrc(imgSrc);
    })

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ backgroundColor: "lightgreen", minHeight: "100vh", minWidth: "100vh" }}>
            <div className="container" style={{ margin: 0, minWidth: "80vh" }}>
                <div className="row">
                    <div style={{ backgroundColor: "white", margin: "3px", minHeight: "40vh", minWidth: "20vh" }} className="col border rounded">
                        <h3 style={{ color: "green" }}>Projects</h3>
                        <div className="border rounded" style={{ height: "88%" }}>
                            <div className="container rounded" style={{ height: "90%",paddingLeft:10,paddingRight:10 }}>
                                <div className="row">
                                    <div className="col tab">
                                        My Projects
                                    </div>
                                    <div className="col tab">
                                        Need to Assess
                                    </div>
                                    <div className="col tab">
                                        Invited
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        {
                                            
                                            ProjectName!=="" ? 
                                            <div>
                                                <h4>{ProjectName}</h4>
                                                <br/>
                                                <img src={ImageSrc} alt="..." style={{maxWidth:"100px",maxHeight:"100px"}}/>
                                                <hr />
                                            </div> : 
                                            <div></div>
                                            
                                        }
                                    </div>
                                </div>
                            </div>
                            <NavLink to="/project"><button type="button" className="btn btn-success">Create</button></NavLink>
                        </div>
                    </div>
                    <div style={{ backgroundColor: "white", margin: "3px", minHeight: "40vh", minWidth: "20vh" }} className="col border rounded">
                        <h3 style={{ color: "green" }}>Challenges</h3>
                        <div className="container border rounded" style={{ height: "88%",paddingLeft:10,paddingRight:10 }}>
                            <div className="row">
                                <div className="col tab">
                                    My
                                    <br />
                                    Challenges
                                </div>
                                <div className="col tab">
                                    Invited
                                </div>
                                <div className="col tab">
                                    Following
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundColor: "white", margin: "3px", minHeight: "40vh", minWidth: "20vh" }} className="col border rounded">
                        <h3 style={{ color: "green" }}>Labs</h3>
                        <div className="container border rounded" style={{ height: "88%",paddingLeft:10,paddingRight:10 }}>
                            <div className="row">
                                <div className="col tab">
                                    My Labs
                                </div>
                                <div className="col tab">
                                    Invited
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundColor: "white", margin: "3px", minHeight: "40vh", minWidth: "20vh" }} className="col border rounded">
                        <h3 style={{ color: "green" }}>My Inbox</h3>
                        <div className="container border rounded" style={{ height: "88%",paddingLeft:10,paddingRight:10 }}>
                            <div className="row">
                                <div className="col tab">
                                    My Chats
                                </div>
                                <div className="col tab">
                                    Friend Requests
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div style={{ backgroundColor: "white", margin: "3px", minHeight: "40vh", minWidth: "60vh" }} className="col border rounded">
                        <h3 style={{ color: "green" }}>Discussions</h3>
                        <div className="container border rounded" style={{ height: "88%",paddingLeft:10,paddingRight:10 }}>
                            <div className="row">
                                <div className="col tab">
                                    Projects
                                </div>
                                <div className="col tab">
                                    Challenges
                                </div>
                                <div className="col tab">
                                    Labs
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundColor: "white", margin: "3px", minHeight: "40vh", minWidth: "20vh" }} className="col col-lg-4 border rounded">
                        <h3 style={{ color: "green" }}>Recommendations</h3>
                        <div className="container border rounded" style={{ height: "88%",paddingLeft:10,paddingRight:10 }}>
                            <div className="row">
                                <div className="col tab">
                                    Labs
                                </div>
                                <div className="col tab">
                                    Challenges
                                </div>
                                <div className="col tab">
                                    Resources
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;