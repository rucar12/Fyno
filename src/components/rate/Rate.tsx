/// <reference types="vite-plugin-svgr/client" />

import RateSVG from '/public/icons/rate.svg?react'
import {FC} from "react";
import {Space} from "antd";
import './Rate.less'

interface Props {
    current: number,
    max: number
}
export const Rate:FC<Props> = ({current, max}) => {

    return <Space size={5} className={'rate'}>
        <RateSVG />
        <p>{current}/{max}</p>
    </Space>
}