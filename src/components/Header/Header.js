import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../Login/firebase.config';

const Header = () => {
    const [loggedInUser , setloggedInUser] = useContext(UserContext);
    var user = firebase.auth().currentUser;
    if(!firebase.app.length){
        firebase.initializeApp(firebaseConfig)
    }

    const handleSignOut = () =>{
        firebase.auth().signOut().then(() => {
        }).catch((error) => {
        });
      }

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                    <a class="navbar-brand" href="/home">The Big Bazar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to="/home"><a class="nav-link active" aria-current="page" href="#">Home</a></Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/order"><a class="nav-link active" href="#">Orders</a></Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/admin"><a class="nav-link active" href="#">Admin</a></Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/home"><a class="nav-link active" href="#">Deals</a></Link>
                            </li>
                        </ul>
                        <form class="d-flex">
                            {
                                user ? <span className="mt-2 me-3 ms-3" style={{color: "green"}}>{user.displayName}</span> : 
                                <Link to="/login"><button class="btn btn-outline-success" type="submit">Login</button></Link>
                            }
                            {
                                user ? <Link to="/"><button className="btn btn-danger" onClick={handleSignOut}>Sign Out</button></Link> :
                                <button style={{display : "none"}}>Sign Out</button>
                            }
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;