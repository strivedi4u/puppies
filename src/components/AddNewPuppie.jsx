import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
function AddNewPuppie() {
    const URL = "/";
    const API = URL + 'api/puppie/';

    const [puppieName, setPuppieName] = useState('');
    const [birthday, setBirthday] = useState('');
    const [color, setColor] = useState('');
    const [weight, setWeight] = useState('');
    const [gender, setGender] = useState("Boy");
    const [breed, setBreed] = useState("French");
    const [about, setAbout] = useState('');
    const [amount, setAmount] = useState('');
    const [status, setStatus] = useState("Available");
    const [url1, setUrl1] = useState('');
    const [url2, setUrl2] = useState('');
    const [image1, setImage1] = useState(null);
    const [image2, setImage2] = useState(null);
    const [image3, setImage3] = useState(null);
    const [image4, setImage4] = useState(null);
    const [image5, setImage5] = useState(null);

    const handleCancel = (e) => {
        setPuppieName('');
        setBirthday('');
        setColor('');
        setWeight('');
        setGender('Boy');
        setBreed('French');
        setAbout('');
        setAmount('');
        setStatus('Available');
        setUrl1('');
        setUrl2('');
        setImage1(null);
        setImage2(null);
        setImage3(null);
        setImage4(null);
        setImage5(null);
    }

    const handleSubmit = (e) => {
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

        axios.post(API, formData, {
            headers: {
              "auth-token": localStorage.getItem('auth-token')
            }
          })
            .then((response) => {
                if (response.status === 200) {
                    swal("Good job!", response.data, "success");
                    handleCancel();
                }
                 else {
                    swal("Unfortunatilly!", response.data.error, "error");
                }
            })
            .catch((error) => {
                swal("Unfortunatilly!", "Internal Server Error", "error");
            });
    }

    return (
        <>
            <section className="addingPuppy">
                <br></br>
                <form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
                    <div className="container">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="card h-100">
                                <div className="card-body">
                                    <div className="row gutters">
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <h6 className="mb-2 text-primary">Add New Puppy</h6>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <label htmlFor="PuppyName">Puppy Name*</label>
                                                <input type="text" onChange={e => setPuppieName(e.target.value)} className="form-control" placeholder=" Enter The Puppy Name" required />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <label htmlFor="dob">Date Of Birth*</label>
                                                <input type="text" onChange={e => setBirthday(e.target.value)} className="form-control" placeholder="DD.MM.YYYY" required />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <label htmlFor="color">Color*</label>
                                                <input type="text" onChange={e => setColor(e.target.value)} className="form-control" placeholder=" Enter color of puppy like Black/Brown" required />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <label htmlFor="weight">Weight*</label>
                                                <input type="text" onChange={e => setWeight(e.target.value)} className="form-control" placeholder=" Enter the Weight of Puppy" required />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <label htmlFor="gender">Gender*</label>
                                                <select style={{ color: "black" }} onChange={e => setGender(e.target.value)} type="type" className="form-control" required>
                                                    <option value="Boy">Boy</option>
                                                    <option value="Girl">Girl</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <label htmlFor="status">Status*</label>
                                                <select style={{ color: "black" }} onChange={e => setStatus(e.target.value)} type="type" className="form-control" required>
                                                    <option value="Available">Available</option>
                                                    <option value="Unavailable">Unavailable</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <label htmlFor="breed">Breed*</label>
                                                <select style={{ color: "black" }} onChange={e => setBreed(e.target.value)} type="type" className="form-control" required>
                                                    <option value="French">French</option>
                                                    <option value="English">English</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <label htmlFor="amount">Amount*</label>
                                                <input type="text" onChange={e => setAmount(e.target.value)} className="form-control" placeholder=" Enter the Amount of Puppy. Ex- 600$" required />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <label htmlFor="moreDetail">More About Puppy*</label>
                                                <textarea style={{ height: "35px" }} onChange={e => setAbout(e.target.value)} className="form-control" placeholder="More details about Puppy" required></textarea>
                                            </div>
                                        </div>

                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <label htmlFor="url1">YouTube URL #1</label>
                                                <input type="text" onChange={e => setUrl1(e.target.value)} className="form-control" placeholder=" Enter the YouTube URL of Puppy" />
                                            </div>
                                        </div>

                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <label htmlFor="url2">YouTube URL #2</label>
                                                <input type="text" onChange={e => setUrl2(e.target.value)} className="form-control" placeholder=" Enter the YouTube URL of Puppy" />
                                            </div>
                                        </div>

                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <label>Upload puppy image* #1</label>
                                                <input type="file" onChange={e => setImage1(e.target.files[0])} className="form-control file-select chooseFile" required />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <label>Upload puppy image* #2</label>
                                                <input type="file" onChange={e => setImage2(e.target.files[0])} className="form-control file-select chooseFile" required />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <label>Upload puppy image* #3</label>
                                                <input type="file" onChange={e => setImage3(e.target.files[0])} className="form-control file-select chooseFile" required />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <label>Upload puppy image* #4</label>
                                                <input type="file" onChange={e => setImage4(e.target.files[0])} className="form-control file-select chooseFile" required />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <label>Upload puppy image* #5</label>
                                                <input type="file" onChange={e => setImage5(e.target.files[0])} className="form-control file-select chooseFile" required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row gutters">
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div className="text-right">
                                                <button onClick={(e) => { handleCancel() }} type="button" className="btn btn-secondary">Cancel</button>&nbsp;&nbsp;&nbsp;
                                                <button type="submit" id="addPuppy" className="btn">Add Puppy</button>
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
        </>
    );
}

export default AddNewPuppie;
