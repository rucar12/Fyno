/// <reference types="vite-plugin-svgr/client" />

import  './Highlights.less'
import {FC} from "react";
import {Button, Row, Space} from "antd";
import ShareSVG from '../../assets/icons/share-small.svg?react';
import WishlistSVG from '../../assets/icons/bookmark-small.svg?react';
import AvaPNG from '../../assets/images/Ava.png';

interface Props {
    name: string,
    comments: {
        author: string,
        position: string,
        description: string
    }[]
}

export const Highlights:FC<Props> = ({ name, comments }) => {

    return <Space size={16} direction={"vertical"} className={'highlights'}>
        <Row justify={"space-between"} align={"middle"}>
            <h1>{name}'s Highlights</h1>
            <Space size={10}>
                <Button className={'add-to-wishlist'}>
                    <WishlistSVG height={16} width={12}/> Add to wishlist
                </Button>
                <Button className={'share'}>
                    <ShareSVG height={18} width={13} /> Share
                </Button>
            </Space>
        </Row>
        {comments?.map(({author, position, description}) => {
            return <Space size={16} direction={"vertical"} className={'comment-item'}>
                <Space size={16} align={"center"}>
                    <img src={AvaPNG} alt="ava" width={32} height={32}/>
                    <Space size={0} direction={"vertical"}>
                        <p className={'author'}>Curated by {author}</p>
                        <p className={'position'}>{position}</p>
                    </Space>
                </Space>
                <p className={'description'}>{description}</p>
            </Space>
        })}
    </Space>
}