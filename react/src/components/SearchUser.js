const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashLink = (id, width, height) =>
    `https://source.unsplash.com/${id}/${width}x${height}`;

    export default Profile;

    import React from 'react'
    import Footer from '../components/Footer'
    import Navbar from '../components/Navbar'
    import pop6 from "../assets/unlock.png";
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
    import {
        faPencil
      }

const photos = unsplashPhotos.map((photo) => ({
    src: unsplashLink(photo.id, photo.width, photo.height),
    width: photo.width,
    height: photo.height,
    images: breakpoints.map((breakpoint) => {
        const height = Math.round((photo.height / photo.width) * breakpoint);
        return {
            src: unsplashLink(photo.id, breakpoint, height),
            width: breakpoint,
            height,
        };
    }),
}));

export default photos;