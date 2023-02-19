import React, { useState, useEffect } from 'react';
import swal from 'sweetalert';
import axios from 'axios';
import "../css/Update.css";
function Update(props) {
    const URL = "/";
    const API1 = URL + "api/puppie/about/" + props.name;
    const API2 = URL + "api/puppie/" + props.name;

    const [puppieName, setPuppieName] = useState(props.name);
    const [birthday, setBirthday] = useState(props.birthday);
    const [color, setColor] = useState(props.color);
    const [weight, setWeight] = useState(props.weight);
    const [gender, setGender] = useState(props.gender);
    const [breed, setBreed] = useState(props.breed);
    const [about, setAbout] = useState(props.about);
    const [amount, setAmount] = useState(props.amount);
    const [status, setStatus] = useState(props.status);
    const [url1, setUrl1] = useState(props.url1);
    const [url2, setUrl2] = useState(props.url2);
    const [image1, setImage1] = useState(props.image1);
    const [image2, setImage2] = useState(props.image2);
    const [image3, setImage3] = useState(props.image3);
    const [image4, setImage4] = useState(props.image4);
    const [image5, setImage5] = useState(props.image5);

    useEffect(() => {

        if (props.name) {
            fetch(API1, {
                method: 'GET',
            })
                .then((response) => response.json())
                .then((data) => {
                    setPuppieName(data[0].name);
                    setBirthday(data[0].birthday);
                    setColor(data[0].color);
                    setWeight(data[0].weight);
                    setGender(data[0].gender);
                    setBreed(data[0].breed);
                    setAbout(data[0].about);
                    setAmount(data[0].amount);
                    setStatus(data[0].status);
                    setUrl1(data[0].video1);
                    setUrl2(data[0].video2);
                    setImage1(data[0].image1);
                    setImage2(data[0].image2);
                    setImage3(data[0].image3);
                    setImage4(data[0].image4);
                    setImage5(data[0].image5);
                })
                .catch((error) => {
                    console.error(error);
                });
        };
    }, [props.name]);


    const handleOnSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("model", JSON.stringify({
            name: puppieName,
            color: color,
            birthday: birthday,
            weight: weight,
            breed: breed,
            gender: gender,
            about: about,
            amount: amount,
            status: status,
            video1: url1,
            video2: url2
        }));
        formData.append('files1', image1);
        formData.append("files2", image2);
        formData.append("files3", image3);
        formData.append("files4", image4);
        formData.append("files5", image5);

        axios.put(API2, formData, {
            headers: {
              "auth-token": localStorage.getItem('auth-token')
            }
          })
            .then((response) => {
                console.log(response);
                if (response.status === 200) {
                    swal("Good job!", response.data, "success");
                } else {
                    swal("Unfortunatilly!", response.data.error, "error");
                }
            })
            .catch((error) => {
                swal("Unfortunatilly!", error.response.data.error, "error");
            });
    }




    window.onclick = function (event) {
        var modals = document.getElementById("mymodals");
        if (event.target == modals) {
            modals.style.display = "none";
        }
        var span = document.getElementsByClassName("close")[0];
        if (event.target == span) {
            modals.style.display = "none";
        }
    }
    function close() {
        var modals = document.getElementById("mymodals");
        modals.style.display = "none";
    }
    var check = 0;
    function showImg() {
        check++;
        if (document.getElementById("ImgDiv").style.display == "none" | check == 1) {
            document.getElementById("ImgDiv").style.display = "contents";

        } else {
            document.getElementById("ImgDiv").style.display = "none";

        }
    }



    return (<div>
        <div id="mymodals" className="modals">
            <div className="modals-contents">
                <button className="close" onClick={(e) => { close() }}>&times;</button>
                <div className="modals-dialo modals-confirm">
                    <div className="modals-body">
                        <section className="updatingPuppy">
                            <form onSubmit={handleOnSubmit} method="put" encType="multipart/form-data">
                                <div className="container">
                                    <div className="col-lg-12">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <div className="row gutters">
                                                    <div className="col-lg-12">
                                                        <h6 className="mb-2 text-primary">Update Puppy</h6>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <label htmlFor="PuppyName">Puppy Name</label>
                                                            <input type="text" defaultValue={puppieName} onChange={e => setPuppieName(e.target.value)} className="form-control" readOnly
                                                                placeholder=" Enter The Puppy Name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <label htmlFor="dob">Date Of Birth</label>
                                                            <input type="text" defaultValue={birthday} onChange={e => setBirthday(e.target.value)} className="form-control" placeholder="DD.MM.YYYY" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <label htmlFor="color">Color</label>
                                                            <input type="text" defaultValue={color} onChange={e => setColor(e.target.value)} className="form-control"
                                                                placeholder=" Enter color of puppy like Black/Brown" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <label htmlFor="weight">Weight</label>
                                                            <input type="text" defaultValue={weight} onChange={e => setWeight(e.target.value)} className="form-control"
                                                                placeholder=" Enter the Weight of Puppy" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <label htmlFor="gender">Gender</label>
                                                            <select style={{ color: "black" }} type="type" defaultValue={gender} onChange={e => setGender(e.target.value)} className="form-control">
                                                                <option defaultValue={"Boy"}>Boy</option>
                                                                <option defaultValue={"Girl"}>Girl</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <label htmlFor="breed">Breed</label>
                                                            <select style={{ color: "black" }} type="type" defaultValue={breed} onChange={e => setBreed(e.target.value)} className="form-control">
                                                                <option defaultValue={"French"}>French</option>
                                                                <option defaultValue={"English"}>English</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <label htmlFor="moreDetail">More About Puppy</label>
                                                            <textarea style={{ height: "35px", resize: "vertical" }} defaultValue={about} onChange={e => setAbout(e.target.value)}
                                                                className="form-control"
                                                                placeholder="More details about Puppy"></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <label htmlFor="availability">Puppy Status on Website</label>
                                                            <select style={{ color: "black" }} type="type" defaultValue={status} onChange={e => setStatus(e.target.value)} className="form-control">
                                                                <option defaultValue={"Available"}>Available</option>
                                                                <option defaultValue={"UnAvailable"}>Unavailable</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <label htmlFor="amount">Amount</label>
                                                            <input type="text" defaultValue={amount} onChange={e => setAmount(e.target.value)} className="form-control"
                                                                placeholder=" Enter the Amount of Puppy" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <label htmlFor="url1">YouTube URL #1</label>
                                                            <input type="text" defaultValue={url1} onChange={e => setUrl1(e.target.value)} className="form-control"
                                                                placeholder=" Enter the YouTube URL of Puppy" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <label htmlFor="url2">YouTube URL #2</label>
                                                            <input type="text" defaultValue={url2} onChange={e => setUrl2(e.target.value)} className="form-control"
                                                                placeholder=" Enter the TouTube URL of Puppy" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <label><input type="checkbox" onChange={(e) => { showImg() }} /> Do you want to
                                                            update images of
                                                            the puppy?</label>
                                                    </div>
                                                    <div className="row gutters" id="ImgDiv">
                                                        <div className="col-lg-6">
                                                            <div className="form-group">
                                                                <label>Upload puppy image #1</label>
                                                                <input type="file" defaultValue={image1} onChange={e => setImage1(e.target.files[0])} className="form-control file-select chooseFile" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="form-group">
                                                                <label>Upload puppy image #2</label>
                                                                <input type="file" defaultValue={image2} onChange={e => setImage2(e.target.files[0])} className="form-control file-select chooseFile" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="form-group">
                                                                <label>Upload puppy image #3</label>
                                                                <input type="file" defaultValue={image3} onChange={e => setImage3(e.target.files[0])} className="form-control file-select chooseFile" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="form-group">
                                                                <label>Upload puppy image #4</label>
                                                                <input type="file" defaultValue={image4} onChange={e => setImage4(e.target.files[0])} className="form-control file-select chooseFile"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="form-group">
                                                                <label>Upload puppy image #5</label>
                                                                <input type="file" defaultValue={image5} onChange={e => setImage5(e.target.files[0])} className="form-control file-select chooseFile" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row gutters">
                                                    <div className="col-lg-12">
                                                        <div className="text-right">
                                                            <button data-dismiss="model" className="btn"
                                                                style={{ backgroundColor: "rgb(55, 52, 51)" }}>Cancel</button>&nbsp;&nbsp;&nbsp;
                                                            <button type="submit" id="addPuppy" name="submit" className="btn">Update Puppy</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <br /><br /><br />
                        </section>
                    </div>
                </div>
            </div>
        </div>

    </div>
    );
}

export default Update;
