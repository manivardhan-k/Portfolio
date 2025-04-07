/*  Variables */
:root {
    /* Main Colors */

    --primary-color: #051633;
    --secondary-color: #3C3C3C;
    --tertiary-color: #B4B4B4;
    --quaternary-color: #E5E5E5;

    --navbar-bg: #12101d;

    --canvas-bg: #051633;

    --theme-base: white;

    --nav-color: #E5E5E5;
    --nav-hover: #E5E5E5;

    --particle-color: #E5E5E5;

}

#particleCanvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -2;
    pointer-events: none;
    background-color: var(--canvas-bg);
    /* filter: invert(1); */
}


/* Global Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Capriola", sans-serif;
    text-decoration: none;
    /* color: white; */
}



body {
    background-color: transparent;
    color: white;
    line-height: 1.6;
    cursor: none;
    overflow: scroll;
    scroll-behavior: smooth;
}

h1,
h2,
h3,
h4 {
    font-family: "Capriola", sans-serif;
}


.theme-change {
    position: fixed;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0px;
    height: 0px;
    clip-path: circle(0%);
    z-index: 998;
    opacity: 1;
    visibility: visible;
    transition: width 1s ease-in-out, height 1s ease-in-out, clip-path 1s ease-in-out, opacity 0.5s ease-in-out 0.5s, visibility 0s ease 1s;
    pointer-events: none;
}

.theme-change.active,
.theme-change.active2 {
    width: 200vw;
    height: 200vw;
    clip-path: circle(100% at 50% 0);
    opacity: 0;
}

.theme-change.active {
    background-color: #ffdf5f;
}

.theme-change.active2 {
    background-color: #12101d;
}


.stage {
    width: 220px;
    height: 160px;
    gap: 25px;
    position: fixed;
    display: flex;
    /* margin: 20px; */
    /* perspective: 1200px; */
    perspective-origin: 50% 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-60px);
    background-color: var(--quaternary-color);
    border-radius: 50px;
    justify-content: center;
    align-items: end;
    border: 5px solid rgb(0, 0, 0);
    z-index: 999;
}

.eye {
    /* display: inline-block; */
    width: 75px;
    height: 75px;
    margin: 0;
    margin-bottom: 10px;
    border-radius: 50%;
    position: relative;
    background: radial-gradient(circle at 50% 40%, #fcfcfc, rgb(255, 228, 228) 66%, rgb(255, 228, 228) 100%);
    border: 3px solid black;
}

.eye:after {
    content: "";
    position: absolute;
    top: 5%;
    left: 10%;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8) 14%, rgba(255, 255, 255, 0) 24%);
    transform: translateX(-17px) translateY(-20px) skewX(-20deg);
}

.brow-one,
.brow-two {
    position: absolute;
    top: -5%;
    left: -10%;
    width: 120%;
    height: 25%;
    background-color: rgb(64, 33, 33);
    z-index: 2;
    border-radius: 10px;
    border: 3px solid black;
    transform-origin: center bottom;
    /* Rotate from the bottom center */
    transition: transform 0.2s ease-out;
    /* Smooth rotation */
}

.iris {
    width: 40%;
    height: 40%;
    margin: 30%;
    border-radius: 50%;
    background: radial-gradient(circle at 50% 50%, rgb(74, 31, 31) 5%, rgb(64, 33, 33) 100%);
    position: absolute;
    transition: transform 0.3s ease-out;
    z-index: 1;
    /* animation: move-eye-skew 5s ease-out infinite; */
}

.iris:before {
    content: "";
    display: block;
    position: absolute;
    width: 37.5%;
    height: 37.5%;
    border-radius: 50%;
    top: 31.25%;
    left: 31.25%;
    background: black;
}

.iris:after {
    content: "";
    display: block;
    position: absolute;
    width: 31.25%;
    height: 31.25%;
    border-radius: 50%;
    top: 18.75%;
    left: 18.75%;
    background: rgba(255, 255, 255, 0.2);
}




.stage-2 {
    width: 110px;
    height: 110px;
    background-color: var(--navbar-bg);
    border-radius: 0px 0px 0px 25px;
    border-left: 3px solid var(--theme-base);
    border-bottom: 3px solid var(--theme-base);
    z-index: 500;

    position: fixed;
    right: 0px;

    animation: fade-slide-left 1s cubic-bezier(0.65, 0, 0.35, 1) forwards;
}


@keyframes fade-slide-left {
    0% {
        opacity: 0;
        transform: translateX(10rem);
        visibility: hidden;
    }

    100% {
        opacity: 1;
        transform: none;
        visibility: visible;
        /* Make it visible once animation completes */
    }
}

.status {
    width: 80px;
    height: 80px;
    margin: 15px;
    background-color: transparent;
    position: absolute;
    left: auto;
    /* right: 50px; */
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
}

.status.active {
    filter: invert(1);
}

.shape {
    width: 45px;
    height: 45px;
    margin: 32.5px;
    background: var(--theme-base);
    /* filter: drop-shadow(0 0 5px rgb(72, 16, 255)); */
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    position: absolute;
    left: auto;
    /* right: 52.5px; */
    animation: change-polygon 5s ease-in-out infinite;
}

@keyframes change-polygon {
    0% {
        /* Initial triangle */
        clip-path: polygon(50% 0%, 50% 0%, 100% 100%, 100% 100%, 0% 100%, 0% 100%);
    }

    33% {
        /* Square */
        clip-path: polygon(100% 100%, 0% 100%, 0% 100%, 0% 0%, 100% 0%, 100% 100%);
    }

    67% {
        /* Pentagon */
        clip-path: polygon(50% 0%, 50% 0%, 100% 40%, 80% 100%, 20% 100%, 0% 40%);
    }

    100% {
        /* Final triangle */
        clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 50% 0%, 50% 0%, 0% 100%);
    }

}


.stage-3 {
    position: fixed;
    z-index: 500;
    width: 130px;
    height: 290px;
    right: 0;
    top: 50%;
    /* Vertically center */
    transform: translateY(-50%);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 25px 0px 0px 25px;
    border-top: 3px solid var(--theme-base);
    border-left: 3px solid var(--theme-base);
    border-bottom: 3px solid var(--theme-base);
    background-color: var(--navbar-bg);

    transition: right 0.5s ease-in-out;

    animation: fade-slide-left-2 1s cubic-bezier(0.65, 0, 0.35, 1) forwards;
}

@keyframes fade-slide-left-2 {
    0% {
        opacity: 0;
        transform: translateX(10rem) translateY(-50%);
        visibility: hidden;
    }

    100% {
        opacity: 1;
        transform: translateY(-50%);
        visibility: visible;
        /* Make it visible once animation completes */
    }
}


.stage-3.active {
    right: -130px;
}



.theme {
    position: relative;
    width: 90px;
    height: 50px;
    margin: 25px 20px 0px 20px;
    border: 2px solid var(--theme-base);
    border-radius: 25px;
    box-shadow: 0px 0px 10px var(--theme-base);
    cursor: none;
    transition: box-shadow 0.2s ease-in-out;
}

.theme:hover {
    box-shadow: 0px 0px 20px var(--theme-base);
}

.theme.no-hover:hover {
    box-shadow: 0px 0px 10px var(--theme-base) !important;
}

.toggle-theme {
    width: 35px;
    height: 35px;
    margin: 5px 5px;
    background-color: var(--quaternary-color);
    border: 2px solid var(--navbar-bg);
    border-radius: 50%;
    position: relative;
    clip-path: circle(50% at 50% 50%) inset(0 0 0 50%);
    transition: transform 0.5s ease-in-out,
        border-color 0.5s ease-in-out,
        background-color 0.5s ease-in-out;
}

.circle {
    position: absolute;
    width: 30px;
    height: 32px;
    background-color: var(--navbar-bg);
    border-radius: 50%;
    clip-path: circle(40% at 80% 50%);
    transform: translateX(4px);
    opacity: 1;
    transition: transform 0.5s ease-in-out,
        opacity 0.5s ease-in-out,
        /* Added opacity transition */
        width 0.5s ease-in-out;
}

.circle.active {
    width: 0px;
    transform: translateX(40px);
}

.toggle-theme.active {
    transform: translateX(40px);
    border: 2px solid var(--theme-base);
    /* Border-color changes here */
    background-color: #ffc830;
}

.date-time {
    position: relative;
    width: 90px;
    height: 150px;
    margin: 0px 20px 25px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    /* font-weight: bold; */

    border-radius: 25px;
    border: 2px solid var(--theme-base);
    box-shadow: 0px 0px 10px var(--theme-base);
}

.time {
    color: var(--theme-base);
    /* Text color */
    font-family: "Tektur", sans-serif;
    font-size: 49.5px;
    line-height: 1.2;
}


/* .user {
    position: relative;
    width: 90px;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;

    margin: 0px 20px 25px 20px;
}

.mouse, .player{
    position: relative;
    width: 50%;
    height: 100%;
    border: 2px solid white;
    border-radius: 25%;
    box-shadow: 0px 0px 10px white;

    display: flex;
    justify-content: center;
    align-items: center;
}

.mouse img{
    width: 90%;
    height: 90%;
}

.player img{
    width: 90%;
    height: 90%;
    filter: invert(1);
    transition: transform 0.2s ease-out;
}

.mouse:hover,
.player:hover {
    box-shadow: 0px 0px 20px white;
} */





/* Nav Bar */
.navbar {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 150px;
    height: 100vh;

    overflow: visible;

    background-color: var(--navbar-bg);
    padding: 15px 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    transition: 0.3s;
    z-index: 500;
    border-right: 3px solid var(--theme-base);

    opacity: 0;
    visibility: hidden;
    animation: fade-slide-right 1s cubic-bezier(0.65, 0, 0.35, 1) forwards;
    transition: left 0.5s ease-in-out;
}

@keyframes fade-slide-right {
    0% {
        opacity: 0;
        transform: translateX(-10rem);
        visibility: hidden;
    }

    100% {
        opacity: 1;
        transform: none;
        visibility: visible;
        /* Make it visible once animation completes */
    }
}

.navbar.active {
    left: -150px;
}

.nav-toggle {
    position: fixed;
    height: 40px;
    width: 40px;
    background-color: var(--navbar-bg);
    left: 147px;
    top: 0px;
    border-radius: 0% 0% 25% 0%;
    border: 3px solid var(--theme-base);
    border-left: none;
    border-top: none;

    padding: 8px;

    /* text-align: center;
    line-height: 2;
    font-size: 20px; */

    cursor: pointer;
    transition: left 1s ease-in-out;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.nav-toggle span {
    width: 100%;
    height: 3px;
    background-color: var(--theme-base);
    transition: transform 0.3s ease-in-out, width 0.3s ease-in-out, left 0.3s ease-in-out;
    position: relative;
    border-radius: 100px;
}

.nav-toggle:hover span {
    box-shadow: 0px 0px 5px var(--theme-base);
}

.nav-toggle span:nth-child(1) {
    left: 7px;
    width: 120%;
    transform: rotate(45deg) translateY(12.5px);
}

.nav-toggle span:nth-child(2) {
    width: 0%;
    transform: translateX(12px);
}

.nav-toggle span:nth-child(3) {
    left: 7px;
    width: 120%;
    transform: rotate(-45deg) translateY(-12.5px);
}


.nav-toggle.active span {
    left: 0px;
    width: 100%;
    transform: rotate(0deg) translateX(0px) translateY(0px);
}


.nav-container {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;

    margin-bottom: 10px;
    margin-top: 10px;
}

.nav-container .logo {
    font-size: 23.5px;
    font-weight: bold;
    color: var(--nav-color);
    text-decoration: overline underline;
    text-underline-offset: 9px;
    padding-bottom: 20px;
}

.nav-links {
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 100%;
}

.nav-links a {
    position: relative;
    text-decoration: none;
    padding-bottom: 5px;
    font-size: 15.5px;
    color: var(--nav-color);
    transition: transform 0.2s ease-in-out .2s;
}

.nav-links a::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background-color: var(--nav-hover);
    transition: width 0.2s ease-in-out;
}

.nav-links a:hover {
    color: var(--nav-hover);
    cursor: none;
}

.nav-links a:hover::after {
    width: 100%;
}

.nav-links a.active {
    color: var(--nav-hover);
    /* Change to highlight active link */
    font-weight: bold;
    transform: translateX(20px);
}

.nav-links .line {
    height: 100%;
    width: 0px;
    border: 2px solid var(--nav-color);
}

.contact-btn {
    cursor: pointer;
    padding-bottom: 5px;
    color: var(--nav-color);
}

.contact-btn::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background-color: var(--nav-hover);
    transition: width 0.2s ease-in-out;
}

.contact-btn.active {
    color: var(--nav-hover);
    cursor: none;
}


.contact-btn.active::after {
    width: 100%;
}

.contact-btn:hover {
    color: var(--nav-hover);
    cursor: none;
}

.contact-btn:hover::after {
    width: 100%;
}

.active-indicator {
    position: absolute;
    left: -20px;
    width: 12px;
    height: 12px;
    background: var(--nav-color);
    border-radius: 50%;
    transition: all 0.3s cubic-bezier(0.68, 0, 0.32, 1) .2s;
    transform: translateX(150%) translateY(-35%);
    opacity: 0;
}

.active-indicator.active {
    opacity: 1;
}


/* Contact Card Styling */
.contact-card {
    position: fixed;
    bottom: 0;
    /* Start hidden below the screen */
    right: -450px;
    width: 100%;
    height: 470px;
    max-width: 400px;
    background: white;
    box-shadow: -4px -4px 10px rgba(0, 0, 0, 0.539);
    padding: 15px 0px;
    transition: right 0.4s ease-in-out;
    z-index: 501;
    border-radius: 20px;
}

/* Show Contact Card */
.contact-card.active {
    right: 0px;
}

.contact-card .contact-title {
    background-color: var(--primary-color);
    width: 100%;
    height: 40px;
    align-items: center;
    padding: 5px;
}


.contact-card h2 {
    font-size: 21.5px;
    color: white;
    justify-self: center;
    margin: 0;
}


/* Styling for form */
.contact-form {
    max-width: 500px;
    height: 90%;
    margin: auto;
    padding: 15px 30px;
    background-color: var(--quaternary-color);
    /* border-radius: 10px; */
}

.form-group {
    margin-bottom: 15px;
    text-align: left;
}

.form-group label {
    font-weight: bold;
    font-size: 15.5px;
    color: var(--primary-color);
}

input,
textarea {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid black;
    border-radius: 5px;
    color: var(--primary-color);
    /* bold? */
}

.contact-card button {
    width: 100%;
    padding: 10px;
    border: none;
    background: var(--primary-color);
    color: white;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;
    transition: 0.3s;
}

.contact-card button:hover {
    cursor: none;
    animation: shake .5s linear;
}

.contact-card button.active{
    opacity: 0.8;
}



/* About Section */
#about {
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 1;

    padding-top: 200px;
    padding-bottom: 100px;
    /* justify-content: flex-end; */

    transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}


#about.animate-in {
    opacity: 1;
    /* Fade in */
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    /* Reset rotation */
}

#about.animate-out {
    opacity: 0;
    /* Fade in */
    transform: rotateX(0deg) rotateY(60deg) rotateZ(0deg);
    /* Reset rotation */
}

.about-content {
    max-width: 1000px;
    text-align: center;
    border-radius: 50px;
    padding: 50px 50px;
    /* margin-left: 120px; */
    gap: 50px;
    display: flex;
    align-items: center;
    /* border: 5px solid var(--primary-color); */
    background-color: var(--quaternary-color);
    box-shadow: 5px 5px 15px var(--navbar-bg);
    opacity: 1;
    animation: fade-in 1s ease-in-out, float 10s ease-in-out infinite;
}

@keyframes fade-in {
    0% {
        opacity: 0;
        transform: rotateX(0deg) rotateY(60deg) rotateZ(0deg);
    }

    100% {
        opacity: 1;
        transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    }
}

@keyframes float {

    0%,
    50%,
    100% {
        transform: translateY(0px);
    }

    25% {
        transform: translateY(10px);
    }

    75% {
        transform: translateY(15px);
    }
}


.about-content h2 {
    font-family: "Capriola", sans-serif;
    font-size: 31.5px;
    color: var(--primary-color);

}

.about-content h3 {
    font-size: 23.5px;
    margin-bottom: 20px;
    color: var(--primary-color);
}

.about-content p {
    font-size: 15.5px;
    line-height: 1.8;
    color: var(--secondary-color);
    position: relative;
    padding: 15px 0px;
    /* text-decoration: underline;
    text-underline-offset: 8px; */
}

.about-content p::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--secondary-color);
}

/*
.about-content p::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--secondary-color);
} */

/* .profile-img {
    width: 25%;
    aspect-ratio: 1/1;
    border-radius: 10px;
    border: 2px solid var(--primary-color);
} */

/* Social Links */
.social-links {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    gap: 20px;
}

.contact-link {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 15px;
    border-radius: 5px;
    text-decoration: none;
    background-color: var(--primary-color);
    border: 2px solid var(--primary-color);
    color: var(--quaternary-color);
    /* transition: 1s; */
}

.contact-link:hover {
    background-color: var(--quaternary-color);
    border: 2px solid var(--primary-color);
    color: var(--primary-color);
    cursor: none;
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    animation: shake .5s linear;
}

@keyframes shake {

    0%,
    100% {
        transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    }

    50% {
        transform: rotateX(0deg) rotateY(25deg) rotateZ(0deg);
    }
}



/* Skills Section */
#skills {
    position: relative;
    text-align: center;
    padding: 150px 50px 100px;
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
}

.skills-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 1;
    transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

.skills-container.animate-in {
    opacity: 1;
    /* Fade in */
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    /* Reset rotation */
}

.skills-container.animate-out {
    opacity: 0;
    /* Fade in */
    transform: rotateX(0deg) rotateY(60deg) rotateZ(0deg);
    /* Reset rotation */
}


.skills-container h2 {
    position: relative;
    font-size: 27.5px;
    color: var(--primary-color);
    margin-bottom: 50px;
    background: var(--quaternary-color);
    padding: 10px 25px;
    width: auto;
    border-radius: 50px;
    animation: float 10s ease-in-out infinite 1s;
    box-shadow: 5px 5px 15px var(--navbar-bg);
}

.skills-grid {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    animation: float 10s ease-in-out infinite 3s;
}

.skill-category {
    background: var(--quaternary-color);
    padding: 30px;
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    /* border: 3px solid var(--navbar-bg); */
    box-shadow: 5px 5px 15px var(--navbar-bg);
    transition: transform 1s ease-out;
}

#frontend.animate-in {
    transform: translateX(-250px);
}

#frontend.animate-out {
    transform: translateX(0px);
}

#tools.animate-in {
    transform: translateX(250px);
}

#tools.animate-out {
    transform: translateX(0px);
}


.skill-category h4 {
    font-size: 21.5px;
    margin-bottom: 10px;
    color: var(--primary-color)
}

.skill-items {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.skill-tag {
    background: var(--primary-color);
    color: var(--quaternary-color);
    padding: 5px 15px;
    border-radius: 5px;
    font-weight: bold;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
}

.skill-tag svg {
    width: 100%;
    fill: var(--quaternary-color);
}


/* Projects Section */
#projects {
    text-align: center;
    margin: 0;
    padding: 150px 50px 100px;
    font-size: 11.5px;

    opacity: 1;
    transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

#projects.animate-in {
    opacity: 1;
    /* Fade in */
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    /* Reset rotation */
}

#projects.animate-out {
    opacity: 0;
    /* Fade in */
    transform: rotateX(0deg) rotateY(60deg) rotateZ(0deg);
    /* Reset rotation */
}

.project-title {
    width: 300px;
    justify-self: center;
}

.project-title h2 {
    position: relative;
    font-size: 27.5px;
    color: var(--primary-color);
    margin-bottom: 50px;
    background: var(--quaternary-color);
    padding: 10px 25px;
    width: auto;
    border-radius: 50px;
    animation: float 10s ease-in-out infinite 1s;
    box-shadow: 5px 5px 15px var(--navbar-bg);

}

.projects-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 30px 10px;
    gap: 50px;
    overflow: hidden;
    animation: fade-in 1s ease-in-out, float 10s ease-in-out infinite 3s;
}

.project-card-1,
.project-card-2 {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--quaternary-color);
    padding: 30px;
    max-width: 800px;
    min-width: 300px;
    height: 300px;
    border-radius: 50px;
    gap: 5%;
    transform-origin: center;
    transition: transform 0.5s ease-in-out;
    box-shadow: 5px 5px 15px var(--navbar-bg);
}

.project-card-1 {
    transform: translateX(171px);
}

.project-card-2 {
    transform: translateX(-171px);
}

.project-card-1:hover,
.project-card-2:hover {
    transform: scale(1.07);
    cursor: none;
}

.profile-img {
    display: flex;
}

.project-image img {
    width: 100%;
    max-width: 300px;
    border-radius: 40px;
    border: 3px solid var(--primary-color);
}

.project-content h3 {
    margin: 15px 0px;
    font-size: 23.5px;
    color: var(--primary-color);
}

.project-content {
    flex: 1;
}

.project-content p {
    font-size: 13px;
    line-height: 1.4;
    text-align: justify;
    color: var(--secondary-color);
}

.project-link svg {
    color: var(--primary-color);
    width: 40px;
    height: 30px;
    padding: 5px;
    margin-top: 10px;
    border-radius: 20px;
}

.project-link {
    margin-bottom: 10px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.5s ease-in-out;
}

.project-card-1:hover .project-link{
    transform: translateX(171px);
}

.project-card-2:hover .project-link{
    transform: translateX(-171px);
}


.project-link svg:hover {
    cursor: none;
    background-color: var(--primary-color);
    /* transform: translateX(171px); */
    animation: shake .5s linear;
    color: var(--quaternary-color);
}


.tech-stack {
    margin-top: 15px;
    display: flex;
    gap: 10px;
    justify-content: center;
}

.tech-stack span {
    background: var(--primary-color);
    color: var(--quaternary-color);
    padding: 5px 10px;
    border-radius: 5px;
    font-weight: bold;
}







.cursor-dot {
    width: 10px;
    height: 10px;
    background-color: white;
    z-index: 1001;
}

.cursor-outline {
    width: 25px;
    height: 25px;
    background-color: white;
    /* border: 2px solid black; */
    z-index: 1000;
}


.cursor-dot,
.cursor-outline {
    position: fixed;
    top: 0;
    left: 0;
    will-change: transform;
    transform-origin: center;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    pointer-events: none;
    mix-blend-mode: difference;
}

@keyframes trace {
    0% {
        opacity: 1;
        transform: scale(1);
    }

    100% {
        opacity: 0;
        transform: scale(0.5);
    }
}





/* Mobile Styling */

@media (max-width: 1250px) {

    .project-card-1 {
        transform: translateX(0);
    }

    .project-card-2 {
        transform: translateX(0);
    }

    #frontend.animate-in {
        transform: translateX(0px);
    }

    #frontend.animate-out {
        transform: translateX(0px);
    }

    #tools.animate-in {
        transform: translateX(0px);
    }

    #tools.animate-out {
        transform: translateX(0px);
    }

    .stage,
    .stage-2 {
        display: none;
    }

    .navbar {
        left: -150px;
    }

    .navbar.active {
        left: 0px;
    }

    .stage-3 {
        right: -130px;
    }

    .stage-3.active {
        right: 0px;
    }

}


@media (max-width: 767px) {

    .navbar {
        align-items: center;
        justify-content: center;
        padding: 25px;
        min-height: 100px;
        display: flex;
    }

    .nav-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .nav-container .logo {
        justify-content: center;
    }



    .about-content {
        flex-direction: column;
        text-align: center;
        padding: 25px 10px;
        gap: 25px;
    }

    #about,
    #skills,
    #projects,
    #contact {
        padding: 150px 25px;
    }

    #about img {
        margin-bottom: 5px;
        min-width: 125px;
    }

    .skills-container,
    .skill-category {
        width: 350px;
    }

    .skill-items {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 40%;
    }

    .projects-container {
        align-items: center;
    }

    .project-card-1,
    .project-card-2{
        flex-direction: column;
        height: auto;
        max-width: 500px;
    }

    .project-card-1 .project-image{
        order: -1;
    }
}
