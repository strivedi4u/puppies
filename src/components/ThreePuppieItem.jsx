import React, { useState, useEffect } from 'react';
import swal from 'sweetalert';
import axios from 'axios';
import Update from './Update';
function ThreePuppieItem(props) {
    const authToken = localStorage.getItem("auth-token");
    const [puppie, setPuppie] = useState([]);
    const [name, setName] = useState();

    useEffect(() => {
        const getPuppies = async () => {
            let response = await axios.get(props.API2);
            setPuppie(response.data);
        };
        getPuppies();
    }, []);

    function redirect() {
        window.location.reload(false);
    }

    const deleteItem = async (name) => {
        swal({
            title: "Are you sure?",
            text: "Do you really want to delete this puppy!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then(async (e) => {
                if (e) {
                    var API1 = props.API1 + name;
                    try {
                        let response = await axios.delete(API1, {
                            headers: {
                                "auth-token": localStorage.getItem('auth-token')
                            }
                        });
                        if (response.status === 200) {
                            console.log(response);
                           setInterval(redirect, 2000);
                        }
                        console.log(response);
                    } catch (error) {
                        console.log(error);
                    }
                    swal("This puppy has been deleted now!", { icon: "success", });
                } else {
                    swal("Couldn't deleted the puppy. Please try again!", { icon: "error" });
                }
            });


    };

    function openform(name) {
        var modals = document.getElementById("mymodals");
        modals.style.display = "block";
        setName(name);
    }




    return (
        <div>
            <Update name={name} />
            {puppie.length != 0 && <>
                <section className="section" id="all-puppies">
                    <div className="container">
                        <div className="row">
                            {puppie.map((item, i) =>
                                <div key={i} className="col-lg-4">
                                    <div className="item">
                                        <div className="thumb">
                                            <div className="hover-content">
                                                <ul>
                                                    <li><a href={`/about/${item.name}`}><i className="fa fa-eye"></i></a></li>
                                                    <li><a href="#mymodals" id='mymodals' onClick={(e) => { openform(item.name) }} data-toggle="modals"><i
                                                        className="fa fa-edit"></i></a></li>
                                                    <li><a onClick={(e) => { deleteItem(item.name) }} ><i className="fa fa-trash"></i></a></li>
                                                </ul>
                                            </div>
                                            <img src={props.URL + "static/" + item.image1} alt="" />
                                        </div>
                                        <center>
                                            <div className="down-content">
                                                <h4>{item.name}</h4>
                                                <span>{item.color}, {item.breed}, {item.gender}, {item.birthday}</span>
                                            </div>
                                        </center>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </>}

        </div>

    );
}

export default ThreePuppieItem;
