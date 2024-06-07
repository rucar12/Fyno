import './WhereStay.less'
import {FC} from "react";
import {Row, Space} from "antd";
import Carousel from "react-multi-carousel";
import {CarouselCard} from "../../components/carouselCard/CarouselCard.tsx";
import Hotel2 from "../../assets/images/hotel2.png";
import Hotel1 from "../../assets/images/hotel1.png";
import Hotel3 from "../../assets/images/hotel3.png";
import {carouselResponsive} from "../../constants";
import ArrowSVG from '../../assets/icons/arrow.svg?react';
import "react-multi-carousel/lib/styles.css";

export const WhereStay:FC = () => {

    return <Space size={24} direction={"vertical"} className={'region-highlights'}>
        <Row justify={"space-between"}>
            <h2>Where to stay</h2>
        </Row>
        <Carousel
            responsive={carouselResponsive}
            autoPlay={false}
            swipeable={true}
            draggable={true}
            showDots={false}
            infinite={true}
            partialVisible={false}
            customLeftArrow={<div className={'arrow-container left'}><ArrowSVG /></div>}
            customRightArrow={<div className={'arrow-container right'}><ArrowSVG /></div>}
        >
            <CarouselCard name={'Frost and Fire Hotel'} rate={9.1} img={Hotel1} price={180} location={'Boutique hotel'}
                          isCuratorsPick={true}/>
            <CarouselCard name={'The Greenhouse Hotel'} rate={9.1} img={Hotel2} price={230} location={'Luxury hotel'}
                          isCuratorsPick={true}/>
            <CarouselCard name={'INNI'} img={Hotel3} rate={9.1} price={130} location={'Apart hotel'}
                          isCuratorsPick={false}/>
        </Carousel>
    </Space>
}