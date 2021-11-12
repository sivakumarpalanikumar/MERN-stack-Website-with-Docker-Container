
    import {
        
        Link
    } from "react-router-dom";
import React from 'react'
import  "./main.css"
function Header() {
    const Logout = () => {
        localStorage.clear("auth")
    
    }
    return (
    
        <div>
            <div class="container-fluid details-page-bg">
                <div class="internal-navbar-wrapper">
                    <div class="internal-navbar-wrapper employer-homepage visible-md visible-lg">
                        <div role="navigation" class="nav-common navbar-fixed-top nav row flex-all-center p-y-axis nav-employer-public">
                            <div class="container">
                                <div class="row">
                                    <div class="col-xs-12 flex-center flex-justify-space-between hidden-xs hidden-sm">
                                        <div class="navbar-header">
                                            <button type="button" data-toggle="collapse" data-target="#home-nav" class="navbar-toggle collapsed pull-left hidden-xs"><span class="sr-only">Toggle navigation</span><span class="icon-bar bg-white"></span><span class="icon-bar bg-white"></span><span class="icon-bar bg-white"></span>
                                            </button><Link className="text-decoration-none text-little-gray navbar-brand p-all-0 flex-center" to="/">
                                            <svg width="50" viewBox="0 0 137.99 131.032" preserveAspectRatio="xMidYMid meet" data-bbox="10 16.957 117.759 103.846" xmlns="http://www.w3.org/2000/svg" data-type="ugc" role="img" aria-labelledby="svgcid--zgjxdq-h4xmrp"><title id="svgcid--zgjxdq-h4xmrp">LOGO</title>
                                                <g stroke-miterlimit="10">
                                                    <path d="M112.81 61.366a31.656 31.656 0 0 0-17.236-4.23 31.656 31.656 0 0 0 5.15-17.34c0-8.678-3.43-16.789-9.656-22.839l-5.363 5.52c4.722 4.588 7.323 10.739 7.323 17.318 0 6.14-2.306 11.753-6.095 16.019-4.535-4.798-10.954-7.797-18.061-7.797-7.103 0-13.519 2.995-18.053 7.788a24.047 24.047 0 0 1-6.087-16.01c0-6.58 2.6-12.73 7.322-17.319l-5.362-5.519c-6.227 6.05-9.656 14.161-9.656 22.838a31.654 31.654 0 0 0 5.149 17.341 31.651 31.651 0 0 0-17.235 4.23C17.436 65.704 12.126 72.73 10 81.146l7.46 1.885c1.613-6.383 5.64-11.71 11.338-15a24.043 24.043 0 0 1 16.43-2.828 24.765 24.765 0 0 0-1.214 7.672c0 11.886 8.386 21.848 19.552 24.286a24.039 24.039 0 0 1-10.62 12.695c-5.699 3.29-12.326 4.113-18.66 2.318l-2.098 7.403a32.04 32.04 0 0 0 8.748 1.226c5.508 0 10.945-1.447 15.857-4.283a31.651 31.651 0 0 0 12.087-12.446 31.65 31.65 0 0 0 12.086 12.446c4.912 2.837 10.348 4.283 15.857 4.283a32.04 32.04 0 0 0 8.748-1.226l-2.098-7.403c-6.334 1.795-12.962.972-18.66-2.318a24.038 24.038 0 0 1-10.62-12.698c11.158-2.443 19.536-12.402 19.536-24.283 0-2.675-.426-5.252-1.212-7.669a24.04 24.04 0 0 1 16.444 2.824c5.698 3.29 9.725 8.618 11.337 15.001l7.46-1.884c-2.124-8.418-7.434-15.443-14.948-19.781zM80.956 60.7a24.002 24.002 0 0 1-12.076 3.242 24 24 0 0 1-12.085-3.248 17.106 17.106 0 0 1 12.077-4.983c4.709 0 8.98 1.907 12.084 4.989zM51.71 72.875c0-1.775.27-3.488.773-5.099a24.003 24.003 0 0 1 9.302 9.093 24.004 24.004 0 0 1 3.219 12.723c-7.606-1.76-13.294-8.584-13.294-16.717zm34.325 0c0 8.127-5.681 14.948-13.28 16.714a24.002 24.002 0 0 1 3.22-12.72 23.998 23.998 0 0 1 9.289-9.086c.5 1.61.77 3.32.77 5.092z" fill="#6e6c6c"></path>
                                                    <path d="M56.795 60.695a17.106 17.106 0 0 1 12.077-4.982h.003v-7.696h-.003c-7.103 0-13.519 2.995-18.053 7.788a24.047 24.047 0 0 1-6.087-16.01c0-6.58 2.6-12.73 7.323-17.319l-5.363-5.519c-6.226 6.05-9.656 14.161-9.656 22.838a31.654 31.654 0 0 0 5.15 17.341 31.651 31.651 0 0 0-17.236 4.23C17.436 65.704 12.126 72.73 10 81.146l7.46 1.885c1.614-6.383 5.64-11.71 11.338-15a24.043 24.043 0 0 1 16.43-2.828 24.765 24.765 0 0 0-1.214 7.672c0 11.886 8.386 21.848 19.552 24.286a24.039 24.039 0 0 1-10.62 12.695c-5.699 3.29-12.326 4.113-18.66 2.318l-2.098 7.403a32.04 32.04 0 0 0 8.748 1.226c5.508 0 10.945-1.447 15.857-4.283a31.648 31.648 0 0 0 12.082-12.438V63.943a24.001 24.001 0 0 1-12.08-3.248zm-5.085 12.18c0-1.775.27-3.488.773-5.099a24.003 24.003 0 0 1 9.302 9.093 24.004 24.004 0 0 1 3.219 12.723c-7.606-1.76-13.294-8.584-13.294-16.717z" fill="#6e6c6c"></path>
                                                    <path d="M80.966 116.52c4.913 2.836 10.349 4.282 15.858 4.282 2.918 0 5.856-.405 8.748-1.225l-2.098-7.404c-6.335 1.796-12.962.972-18.66-2.318a24.038 24.038 0 0 1-10.621-12.698C85.35 94.714 93.73 84.755 93.73 72.874c0-2.675-.427-5.252-1.213-7.668a24.04 24.04 0 0 1 16.444 2.824c5.698 3.29 9.725 8.617 11.337 15.001l7.461-1.885c-2.126-8.417-7.436-15.442-14.95-19.78a31.656 31.656 0 0 0-17.235-4.23 31.656 31.656 0 0 0 5.149-17.341c0-8.677-3.43-16.788-9.656-22.838l-5.362 5.519c4.722 4.589 7.322 10.74 7.322 17.319 0 6.14-2.305 11.753-6.095 16.018-4.534-4.797-10.952-7.795-18.058-7.796v7.695A17.109 17.109 0 0 1 80.955 60.7a24.002 24.002 0 0 1-12.076 3.243h-.005v40.139l.005-.009a31.659 31.659 0 0 0 12.087 12.447zm-4.991-39.651a23.998 23.998 0 0 1 9.289-9.086c.5 1.61.77 3.32.77 5.092 0 8.128-5.68 14.949-13.278 16.714a24 24 0 0 1 3.219-12.72z" fill="#fa0536"></path>
                                                </g>
                                            </svg>CYRON SECURITY</Link>
                                        </div>
                                        <div id="home-nav" class="collapse navbar-collapse">
                                            <ul class="nav navbar-nav flex-center">
                                                <li>
                                                    <Link className="text-decoration-none text-little-gray p-all-sm bg-transparent track-clevertap m-left-sm" to="/">Home</Link>
                                                </li>
                                                <li>
                                                    <Link className="text-decoration-none text-little-gray p-all-sm bg-transparent track-clevertap m-left-sm" to="/service">Service</Link>
                                                </li>
                                                <li>
                                                    <Link className="text-decoration-none text-little-gray p-all-sm bg-transparent track-clevertap m-left-sm" to="/career">Career</Link>
                                                </li>
                                                <li>
                                                    <Link className="text-decoration-none text-little-gray p-all-sm bg-transparent track-clevertap m-left-sm" to="/about">About</Link>
                                                </li>
                                                <li>
                                                    <Link className="text-decoration-none text-little-gray p-all-sm bg-transparent track-clevertap m-left-sm" to="/login">Course</Link>
                                                </li>
                                                <li>
                                                    <Link className="text-base btn btn-black btn-invert text-semibold cursor-pointer b-radius-1 p-y-axis auth-click m-left-sm p-x-axis-sm text-uppercase flex-align-start display-flex" to="/login">
                                                    <img src="https://olxstatic.olxpeople.com/src/images/public/common/icon-user.9da7181dc661.svg" alt="User Login" class="img-responsive grayscale icon-70-dims p-left-5"/><span class="m-x-axis-5">Log in</span>
                                                    </Link>
                                                </li>
                                                 {/*<li>
                                               < Link className="text-base btn btn-black btn-invert text-semibold cursor-pointer b-radius-1 p-y-axis auth-click m-left-sm p-x-axis-sm text-uppercase flex-align-start display-flex" >
                                                    <img src="https://olxstatic.olxpeople.com/src/images/public/common/icon-user.9da7181dc661.svg" alt="User Login" class="img-responsive grayscale icon-70-dims p-left-5"/><span class="m-x-axis-5">Log Out</span>
                                                    </Link>
                                                    <button className="btn btn-success" type="button" onClick={Logout}>logout</button>  

                                                </li>   */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="internal-navbar-wrapper visible-xs visible-sm">
                    <div role="navigation" class="nav-common navbar-fixed-top nav nav-employer-public">
                    <nav class="navbar navbar-inverse">
                        <div class="container">
                        <div class="navbar-header">
                            <button type="button" data-toggle="collapse" data-target="#employer-olxpeople" class="navbar-toggle collapsed"><span class="sr-only">Toggle navigation</span><span class="icon-bar bg-white"></span><span class="icon-bar bg-white"></span><span class="icon-bar bg-white"></span>
                            </button>

                            
                            <Link className="navbar-brand collapse navbar-collapse text-white text-semibold " to="/">
                            <svg width="10%" viewBox="0 0 137.99 131.032" preserveAspectRatio="xMidYMid meet" data-bbox="10 16.957 117.759 103.846" xmlns="http://www.w3.org/2000/svg" data-type="ugc" role="img" aria-labelledby="svgcid--zgjxdq-h4xmrp" ><title id="svgcid--zgjxdq-h4xmrp">LOGO</title>
                                <g stroke-miterlimit="10">
                                    <path d="M112.81 61.366a31.656 31.656 0 0 0-17.236-4.23 31.656 31.656 0 0 0 5.15-17.34c0-8.678-3.43-16.789-9.656-22.839l-5.363 5.52c4.722 4.588 7.323 10.739 7.323 17.318 0 6.14-2.306 11.753-6.095 16.019-4.535-4.798-10.954-7.797-18.061-7.797-7.103 0-13.519 2.995-18.053 7.788a24.047 24.047 0 0 1-6.087-16.01c0-6.58 2.6-12.73 7.322-17.319l-5.362-5.519c-6.227 6.05-9.656 14.161-9.656 22.838a31.654 31.654 0 0 0 5.149 17.341 31.651 31.651 0 0 0-17.235 4.23C17.436 65.704 12.126 72.73 10 81.146l7.46 1.885c1.613-6.383 5.64-11.71 11.338-15a24.043 24.043 0 0 1 16.43-2.828 24.765 24.765 0 0 0-1.214 7.672c0 11.886 8.386 21.848 19.552 24.286a24.039 24.039 0 0 1-10.62 12.695c-5.699 3.29-12.326 4.113-18.66 2.318l-2.098 7.403a32.04 32.04 0 0 0 8.748 1.226c5.508 0 10.945-1.447 15.857-4.283a31.651 31.651 0 0 0 12.087-12.446 31.65 31.65 0 0 0 12.086 12.446c4.912 2.837 10.348 4.283 15.857 4.283a32.04 32.04 0 0 0 8.748-1.226l-2.098-7.403c-6.334 1.795-12.962.972-18.66-2.318a24.038 24.038 0 0 1-10.62-12.698c11.158-2.443 19.536-12.402 19.536-24.283 0-2.675-.426-5.252-1.212-7.669a24.04 24.04 0 0 1 16.444 2.824c5.698 3.29 9.725 8.618 11.337 15.001l7.46-1.884c-2.124-8.418-7.434-15.443-14.948-19.781zM80.956 60.7a24.002 24.002 0 0 1-12.076 3.242 24 24 0 0 1-12.085-3.248 17.106 17.106 0 0 1 12.077-4.983c4.709 0 8.98 1.907 12.084 4.989zM51.71 72.875c0-1.775.27-3.488.773-5.099a24.003 24.003 0 0 1 9.302 9.093 24.004 24.004 0 0 1 3.219 12.723c-7.606-1.76-13.294-8.584-13.294-16.717zm34.325 0c0 8.127-5.681 14.948-13.28 16.714a24.002 24.002 0 0 1 3.22-12.72 23.998 23.998 0 0 1 9.289-9.086c.5 1.61.77 3.32.77 5.092z" fill="#6e6c6c"></path>
                                    <path d="M56.795 60.695a17.106 17.106 0 0 1 12.077-4.982h.003v-7.696h-.003c-7.103 0-13.519 2.995-18.053 7.788a24.047 24.047 0 0 1-6.087-16.01c0-6.58 2.6-12.73 7.323-17.319l-5.363-5.519c-6.226 6.05-9.656 14.161-9.656 22.838a31.654 31.654 0 0 0 5.15 17.341 31.651 31.651 0 0 0-17.236 4.23C17.436 65.704 12.126 72.73 10 81.146l7.46 1.885c1.614-6.383 5.64-11.71 11.338-15a24.043 24.043 0 0 1 16.43-2.828 24.765 24.765 0 0 0-1.214 7.672c0 11.886 8.386 21.848 19.552 24.286a24.039 24.039 0 0 1-10.62 12.695c-5.699 3.29-12.326 4.113-18.66 2.318l-2.098 7.403a32.04 32.04 0 0 0 8.748 1.226c5.508 0 10.945-1.447 15.857-4.283a31.648 31.648 0 0 0 12.082-12.438V63.943a24.001 24.001 0 0 1-12.08-3.248zm-5.085 12.18c0-1.775.27-3.488.773-5.099a24.003 24.003 0 0 1 9.302 9.093 24.004 24.004 0 0 1 3.219 12.723c-7.606-1.76-13.294-8.584-13.294-16.717z" fill="#6e6c6c"></path>
                                    <path d="M80.966 116.52c4.913 2.836 10.349 4.282 15.858 4.282 2.918 0 5.856-.405 8.748-1.225l-2.098-7.404c-6.335 1.796-12.962.972-18.66-2.318a24.038 24.038 0 0 1-10.621-12.698C85.35 94.714 93.73 84.755 93.73 72.874c0-2.675-.427-5.252-1.213-7.668a24.04 24.04 0 0 1 16.444 2.824c5.698 3.29 9.725 8.617 11.337 15.001l7.461-1.885c-2.126-8.417-7.436-15.442-14.95-19.78a31.656 31.656 0 0 0-17.235-4.23 31.656 31.656 0 0 0 5.149-17.341c0-8.677-3.43-16.788-9.656-22.838l-5.362 5.519c4.722 4.589 7.322 10.74 7.322 17.319 0 6.14-2.305 11.753-6.095 16.018-4.534-4.797-10.952-7.795-18.058-7.796v7.695A17.109 17.109 0 0 1 80.955 60.7a24.002 24.002 0 0 1-12.076 3.243h-.005v40.139l.005-.009a31.659 31.659 0 0 0 12.087 12.447zm-4.991-39.651a23.998 23.998 0 0 1 9.289-9.086c.5 1.61.77 3.32.77 5.092 0 8.128-5.68 14.949-13.278 16.714a24 24 0 0 1 3.219-12.72z" fill="#fa0536"></path>
                                </g>
                            </svg>
                            </Link>
                        </div>
                        <div id="employer-olxpeople" class="collapse navbar-collapse b-top-gray-lightest">
                            <ul class="nav navbar-nav"> 
                            <li>
                            <Link className="track-clevertap js-track text-little-gray text-semibold bg-transparent auth-click" to="/login">Login</Link>
                            </li>
                            <li>
                            <Link className="track-clevertap js-track text-little-gray text-semibold bg-transparent" to="/">Home</Link>
                            </li>
                            <li>
                            <Link className="track-clevertap js-track text-little-gray text-semibold bg-transparent" to="/service">Service</Link>
                            </li>
                            <li>
                            <Link className="track-clevertap js-track text-little-gray text-semibold bg-transparent" to="/career">Career</Link>
                            </li>
                            <li>
                            <Link className="track-clevertap js-track text-little-gray text-semibold bg-transparent" to="/about">About</Link>
                            </li>
                            </ul>
                        </div>
                        </div>
                        </nav>
                    </div>
                    </div> 
                    
                </div>   
            </div>
       
        </div>
        
    )
}
export default Header
