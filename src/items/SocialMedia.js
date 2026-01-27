import { FaFacebookF,FaPhoneAlt,FaEnvelope   } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaTiktok } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

export const SocialLinks = [
    {
        link : 'https://www.facebook.com/people/Seven-Entertainment/61582332182525/',
        icon : <FaFacebookF size={25}/>
    },

    {
        link : 'https://www.instagram.com/seven__entertainment/',
        icon : <LuInstagram size={25}/>
    },

    {
        link : 'https://tr.ee/R67XqQGUNs',
        icon : <FaLinkedin size={25}/>
    },

    {
        link : 'https://tr.ee/2jkEUlPCvG',
        icon : <FaTiktok size={25}/>
    },
    
    
]


export const contactus = [
    {
        content : '+64 9 123 4567',
        icon : <FaPhoneAlt size={25}/>
    },

    {
        content : '+64 22 122 1154',
        icon : <IoLogoWhatsapp size={25}/>
    },


    {
        content : 'events@7entertainment.co.nz',
        icon : <FaEnvelope size={25}/>
    },

    {
        content :  <>
            153 Stoddard Road, Wesley,<br />
            Auckland 1041, New Zealand
            </>,
        icon : <FaLocationDot size={25}/>
    },
    
    
]