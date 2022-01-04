import React from "react";
import { useNavigate } from "react-router-dom";



function Project() {

    let navigate = useNavigate();

    function changeImage(e){
        e.preventDefault();
        document.getElementById("image").src=URL.createObjectURL(e.target.files[0]);
    }

    //will create a cookie to store some project info in order to display it later

    function createProject(e){
        e.preventDefault();
        console.log(e.target.ProjectName.value)
        document.cookie = "projectName="+e.target.ProjectName.value+";"
        document.cookie = "imgSrc="+e.target.image.src+";"
        navigate('/')
    }

    return (
        <div className="d-flex p-2 justify-content-center align-items-center" style={{minHeight:"100vh", backgroundColor:"lightgreen"}}>
            <form onSubmit={createProject} className="p-2 rounded" style={{backgroundColor:"white"}}>   
                <div className="mb-3 d-flex flex-column justify-content-center">
                    <div className="p-1 ">
                        <img id="image" className="img-thumbnail mx-auto d-block" src="https://d2qgo50yy98y8.cloudfront.net/public/front/img/upload_img.png" alt="..." />
                    </div>
                    <div className="p-1">
                        <input className="form-control" type="file" id="formFile" onChange={changeImage} accept="image/*"/>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="ProjectName" className="form-label">Project Name</label>
                    <input type="text" className="form-control" id="ProjectName" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="ProjectOverview" className="form-label">Project Overview</label>
                    <textarea className="form-control" id="ProjectOverview" rows="3"></textarea>
                </div>
                <div className="input-group mb-3">
                    <label className="input-group-text" htmlFor="Category">Category</label>
                    <select className="form-select" defaultValue="0" id="Category">
                        <option value="0">Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="input-group mb-3">
                    <label className="input-group-text" htmlFor="Industry">Industry</label>
                    <select className="form-select" defaultValue="0" id="Industry">
                        <option value="0">Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="input-group mb-3">
                    <label className="input-group-text" htmlFor="Verticals">Verticals</label>
                    <select className="form-select" defaultValue="0" id="Vericals">
                        <option value="0">Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="input-group mb-3">
                    <label className="input-group-text" htmlFor="Type">Type</label>
                    <select className="form-select" defaultValue="0" id="Type">
                        <option value="0">Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="input-group mb-3">
                    <label className="input-group-text" htmlFor="Stage">Stage</label>
                    <select className="form-select" defaultValue="0" id="Stage">
                        <option value="0">Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="input-group mb-3">
                    <label className="input-group-text" htmlFor="Status">Status</label>
                    <select className="form-select" defaultValue="0" id="Status">
                        <option value="0">Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="input-group mb-3">
                    <label className="input-group-text" htmlFor="CurrentlyRecruiting">Currently Recruiting</label>
                    <select className="form-select" defaultValue="0" id="CurrentlyRecruiting">
                        <option value="0">Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary" >Create</button>
                </div>
            </form>
        </div>
    )
}

export default Project;