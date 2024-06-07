/// <reference types="vite-plugin-svgr/client" />

import {FC} from "react";
import {Button, Row, Space} from "antd";
import {Rate} from "../rate/Rate.tsx";
import MoreSVG from '../../../public/icons/more.svg?react'
import DragSVG from '../../../public/icons/drag.svg?react'
import './DaysPlanCard.less'

interface Props {
    name: string,
    location?: string,
    time?: string,
    img: string,
    price?: number,
    rate?: number,
    isCuratorsPick?: boolean
}

export const DaysPlanCard:FC<Props> = ({ name, img, isCuratorsPick, rate, time, price, location}) => {

    return <Row justify={"space-between"} align={'middle'} className={'days-plan-card'}>
        <Space size={24}>
            <img src={img} alt={name} width={96} height={132}/>
            <Space direction={"vertical"} size={8}>
                <h3 className={'title'}>{name}</h3>
                {isCuratorsPick && <p className={'curator-pick'}>Curator’s pick</p>}
                {(!!time || !!price) && <p className={'time'}>{!!time ? time : `$${price}+`} · ${location}</p>}
                {!!rate && <Rate max={10} current={rate}/>}
            </Space>
        </Space>
        <Space size={8}>
            <Button className={'action-btn'}><DragSVG/></Button>
            <Button className={'action-btn'}><MoreSVG/></Button>
        </Space>
    </Row>
}