/// <reference types="vite-plugin-svgr/client" />

import './Overview.less'
import {FC} from "react";
import {Button, Row, Space} from "antd";
import GeneralPNG from '/public/images/general.png'
import Secondary1PNG from '/public/images/secondary1.png'
import Secondary2PNG from '/public/images/secondary2.png'
import Secondary3PNG from '/public/images/secondary3.png'
import Secondary4PNG from '/public/images/secondary4.png'
import AllSVG from '/public/icons/all-icon.svg?react'

const pictures = [Secondary1PNG, Secondary2PNG, Secondary3PNG, Secondary4PNG]

export const Overview: FC = () => {

    return <div className={'overview'}>
        <Space size={4}  align={'center'}>
            <div className={'big-picture'}>
                <img src={GeneralPNG} width={346} height={292} alt="General"/>
            </div>
            <Row className={'row-pictures'} wrap>
                {pictures.map((item, idx) => {
                    return <img width={171} height={144} src={item} alt={`secondary ${idx + 1}`}/>
                })}
            </Row>
        </Space>
        <Button className={'all-photos'} type={"text"}>
            <AllSVG width={32} height={32} />
            All photos
        </Button>
    </div>
}