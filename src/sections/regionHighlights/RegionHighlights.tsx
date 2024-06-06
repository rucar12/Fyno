/// <reference types="vite-plugin-svgr/client" />
import './RegionHighlights.less'
import {FC} from "react";
import {CarouselCard} from "../../components/carouselCard/CarouselCard.tsx";
import Nature1 from '../../assets/images/nature1.png';
import Nature2 from '../../assets/images/nature2.png';
import Nature3 from '../../assets/images/nature3.png';
import ShowDailySVG from '../../assets/icons/show-daily.svg?react';
import {Button, Row, Space} from "antd";


export const RegionHighlights:FC = () => {

    return <Space size={24}>
        <Row justify={"space-between"}>
            <h2>Region highlights</h2>
            <Button>
                <ShowDailySVG/>
                Show daily plan
            </Button>
        </Row>
        <CarouselCard name={'Gullfoss Waterfall'} img={Nature2} time={'1h'} location={'Waterfall'} isCuratorsPick={true}/>
    </Space>
}