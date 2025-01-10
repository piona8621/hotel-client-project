import React from 'react';
import Banner from '../../components/Banner';
import HotelMap from '../../components/HotelMap';
import FeaturedRooms from '../../components/FeaturedRooms';

// import SpecialOffers from '../../components/SpecialOffers';
import ReviewsCarousel from '../../components/ReviewsCarousel';
import Amenities from '../../components/Amenities';
import SpecialOffers from '../SpecialOffer';
import WhyChooseUs from '../../components/WhyChooseUs';
import EventsAndConferences from '../../components/EventsAndConferences';
import { Helmet } from 'react-helmet-async';
import HighlightedHotelRooms from '../../components/HighlightedHotelRooms';
import NewsletterSection from '../../components/NewsletterSection';
// import HighlightedProductsPage from '../../components/HighlightedProductsPage';




const Home = () => {
  return (
    <div>


<Helmet>
  <title>Home</title>
</Helmet>

      <Banner></Banner>
      <FeaturedRooms></FeaturedRooms>
      <ReviewsCarousel></ReviewsCarousel>
    <EventsAndConferences></EventsAndConferences>
    <HighlightedHotelRooms></HighlightedHotelRooms>
<SpecialOffers></SpecialOffers>
<HotelMap></HotelMap>
<WhyChooseUs></WhyChooseUs>
<Amenities></Amenities>
<NewsletterSection></NewsletterSection>


    
    </div>
  );
};

export default Home;