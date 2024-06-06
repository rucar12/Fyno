/// <reference types="vite-plugin-svgr/client" />
import {Header} from "./components/header/Header.tsx";
import './App.less'
import {Overview} from "./sections/overview/Overview.tsx";
import {TripInfo} from "./sections/tripInfo/TripInfo.tsx";
import {Highlights} from "./sections/highlights/Highlights.tsx";
import {Itinerary} from "./sections/itinerary/Itinerary.tsx";
import {Timeline} from "antd";
import {GoldenCircle} from "./sections/goldenCircle/GoldenCircle.tsx";
import {RegionHighlights} from "./sections/regionHighlights/RegionHighlights.tsx";
import {WhereStay} from "./sections/whereStay/WhereStay.tsx";

import StarsSVG from './assets/icons/stars.svg?react';
import BedSVG from './assets/icons/bed.svg?react';

const App = () => {
    const infoTrip = [{
        label: 'Trip duration',
        value: '7 days',
    }, {
        label: 'Exploration',
        value: '4 regions',
    }, {
        label: 'Flight',
        value: '7h 20m from SFO',
    },]

    const highlightComments = [{
        author: 'Sandra',
        position: 'Fyno expert',
        description: 'Welcome to Iceland, a land of breathtaking landscapes and unspoiled natural beauty. From its majestic waterfalls and geothermal wonders to the vibrant culture and rich history, Iceland promises an unforgettable adventure for every traveler.'
    }]

    return (
        <div className={'content'}>
            <Header/>
            <Overview/>
            <TripInfo info={infoTrip}/>
            <Highlights name={'Iceland'} comments={highlightComments}/>
            <Itinerary name={'Iceland'}/>
            <Timeline
                style={{margin: '20px 0'}}
                items={[
                    {
                        children: <GoldenCircle/>,
                        dot: <div className={'first-dot'}>A</div>
                    },
                    {
                        children: <RegionHighlights/>,
                        dot: <div className={'stars-dot'}><StarsSVG width={12.5} height={12.5}/></div>
                    },
                    {
                        dot: <div className={'bed-dot'}><BedSVG width={10.5} height={8} /></div>,
                        children: <WhereStay/>,
                    },
                ]}
            />
            <Timeline
                items={[
                    {
                        children: <GoldenCircle/>,
                        dot: <div className={'first-dot'}>B</div>
                    },
                    {
                        children: <RegionHighlights/>,
                        dot: <div className={'stars-dot'}><StarsSVG width={12.5} height={12.5}/></div>
                    },
                    {
                        dot: <div className={'bed-dot'}><BedSVG width={10.5} height={8} /></div>,
                        children: <WhereStay/>,
                    },
                ]}
            />
        </div>
    )
}

export default App
