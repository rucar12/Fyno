/// <reference types="vite-plugin-svgr/client" />

import './CarouselCard.less'
import {FC, useState} from "react";
import {Button, Card} from "antd";
import SaveSVG from '/public/icons/save.svg?react'
import {Rate} from "../rate/Rate.tsx";

interface Props {
    name: string,
    location?: string,
    time?: string,
    img: string,
    price?: number,
    rate?: number,
    isCuratorsPick?: boolean
}

export const CarouselCard:FC<Props> = ({name, time, img, price, rate, location, isCuratorsPick}) => {

    const [isSaved, setIsSaved] = useState<boolean>(false)

    return <Card
        hoverable
        style={{ width: 216 }}
        cover={<img height={292} width={216 } alt="carousel" src={img} />}
        className={'carousel-card'}
    >
        {!!rate && <Card.Meta title={name}/>}
        <Card.Meta
            className={'card-body'}
            title={!!rate ? <Rate max={10} current={rate}/> : name}
            description={`${!!time ? time : `$${price}+`} · ${location}`}
        />
        {isCuratorsPick && <Button className={'picked'} type={"text"}>
            Curator's pick
        </Button>}
        <SaveSVG
            className={isSaved ? 'saved-item' : 'save-item'}
            onClick={() => setIsSaved(prevState => !prevState)}
        />
    </Card>
}