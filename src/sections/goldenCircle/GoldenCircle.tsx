import './GoldenCircle.less'
import {FC} from "react";
import {Space} from "antd";

export const GoldenCircle: FC = () => {

    return <Space size={8} direction={"vertical"} className={'golden-circle'}>
        <Space size={4} direction={"vertical"}>
            <h2>Golden Circle Region</h2>
            <Space size={16}>
                <p className={'tag'}>Geysers</p>
                <p className={'tag'}>Waterfalls</p>
                <p className={'tag'}>Crater lakes</p>
            </Space>
        </Space>
        <p className={'description'}>
            The Golden Circle in Iceland is a renowned tourist route that encompasses an array of stunning natural
            landmarks within a relatively short distance from Reykjavík. This scenic loop includes three primary
            attractions: Þingvellir National Park, where you can explore the rift valley created by the diverging North
            American and Eurasian tectonic plates and witness the site of Iceland's ancient parliament.
        </p>
    </Space>
}