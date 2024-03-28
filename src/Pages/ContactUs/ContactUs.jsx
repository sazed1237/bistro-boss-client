import React from 'react';
import CoverBanner from '../Shared/CoverBanner/CoverBanner';
import contactBanner from '../../assets/contact/banner.jpg';
import { Helmet } from 'react-helmet-async';
import ContactCart from '../../components/ContactCart/ContactCart';
import ContactForm from '../../components/ContactForm/ContactForm';
const ContactUs = () => {
    return (
        <section>
            <Helmet>
                <title>Bistro Boss | Contact Us</title>
            </Helmet>

            <CoverBanner coverImage={contactBanner} title={"contact us"} text={'Feel free to ask anything'} ></CoverBanner>
            <ContactCart></ContactCart>
            <ContactForm></ContactForm>
        </section>
    );
};

export default ContactUs;