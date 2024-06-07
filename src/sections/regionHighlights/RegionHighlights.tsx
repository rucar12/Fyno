/// <reference types="vite-plugin-svgr/client" />
import './RegionHighlights.less'
import {FC} from "react";
import {CarouselCard} from "../../components/carouselCard/CarouselCard.tsx";
import Nature1 from '../../../public/images/nature1.png';
import Nature2 from '../../../public/images/nature2.png';
import Nature3 from '../../../public/images/nature3.png';
import ShowDailySVG from '../../../public/icons/show-daily.svg?react';
import StarsSVG from '../../../public/icons/stars.svg?react';
import ArrowSVG from '../../../public/icons/arrow.svg?react';
import RoadSVG from '../../../public/icons/road.svg?react';
import MoreSVG from '../../../public/icons/more.svg?react'
import {Button, Row, Space} from "antd";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {carouselResponsive} from "../../constants";
import {DaysPlanCard} from "../../components/daysPlanCard/DaysPlanCard.tsx";

interface Props {
    onChangeView: () => void,
    isDailyPlan: boolean
}

export const RegionHighlights: FC<Props> = ({onChangeView, isDailyPlan}) => {

    return <Space size={16} direction={"vertical"} className={'region-highlights'}>
        <Row justify={"space-between"}>
            <h2>{isDailyPlan ? '2 days plan' : 'Region highlights'}</h2>
            <Button onClick={onChangeView} className={'plan-btn'}>
                {isDailyPlan ? <StarsSVG className={'stars'} /> : <ShowDailySVG/>}
                {isDailyPlan ? '2 days plan' : 'Show daily plan'}
            </Button>
        </Row>
        {isDailyPlan ? <Space size={16} direction={"vertical"} className={'daily-plan-container'}>
            <Space direction={"vertical"} style={{width: '100%'}}>
                <Row align={"middle"} justify={"space-between"} className={'day-plan-row'} wrap={false}>
                    <p className={'day-number'}>Day 1</p>
                    <Space size={8} >
                        <p className={'trip-time'}><RoadSVG/> 40m</p>
                        <Button className={'action-btn'}><MoreSVG/></Button>
                    </Space>
                </Row>
                <DaysPlanCard
                    name={'Gullfoss Waterfall'}
                    img={Nature2}
                    time={'1h'}
                    location={'Waterfall'}
                    isCuratorsPick={true}
                />
                <DaysPlanCard
                    name={'Reykjadalur Valley'}
                    img={Nature1}
                    time={'1h'}
                    location={'Iconic hike, hot springs'}
                    isCuratorsPick={true}
                />
            </Space>
            <Space direction={"vertical"} style={{width: '100%'}}>
                <Row align={"middle"} justify={"space-between"} className={'day-plan-row'} wrap={false}>
                    <p className={'day-number'}>Day 2</p>
                    <Space size={8} >
                        <p className={'trip-time'}><RoadSVG/>1h 40m</p>
                        <Button className={'action-btn'}><MoreSVG/></Button>
                    </Space>
                </Row>
                <DaysPlanCard
                    name={'Gullfoss Waterfall'}
                    img={Nature3}
                    time={'1h'}
                    location={'Waterfall'}
                    isCuratorsPick={true}
                />
                <DaysPlanCard
                    name={'Reykjadalur Valley'}
                    img={Nature1}
                    time={'1h'}
                    location={'Iconic hike, hot springs'}
                    isCuratorsPick={true}
                />
            </Space>
        </Space>: <Carousel
            responsive={carouselResponsive}
            autoPlay={false}
            swipeable={true}
            draggable={true}
            showDots={false}
            infinite={true}
            partialVisible={false}
            customLeftArrow={<div className={'arrow-container left'}><ArrowSVG/></div>}
            customRightArrow={<div className={'arrow-container right'}><ArrowSVG/></div>}
        >
            <CarouselCard name={'Gullfoss Waterfall'} img={Nature2} time={'1h'} location={'Waterfall'}
                          isCuratorsPick={true}/>
            <CarouselCard name={'Reykjadalur Valley'} img={Nature1} time={'1h'} location={'Iconic hike, hot springs'}
                          isCuratorsPick={true}/>
            <CarouselCard name={'Geysir Thermal Field'} img={Nature3} time={'1h'} location={'Geysers'}
                          isCuratorsPick={false}/>
        </Carousel>}
    </Space>
}