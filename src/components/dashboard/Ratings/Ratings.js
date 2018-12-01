import React from 'react';

import Overrall from './Overrall/Overrall';
import TopRating from './TopRating/TopRating';
import WeeklyRating from './WeeklyRating/WeeklyRating';
import LowRating from './LowRating/LowRating';

const Ratings = () => {
    return (
        <div>
               <section className="overrall-rating">
                    <Overrall />
                    <TopRating />
                    <WeeklyRating />
                    <LowRating />
                </section>
        </div>
    );
}

export default Ratings;