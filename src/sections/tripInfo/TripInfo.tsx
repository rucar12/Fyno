import {FC} from "react";
import {Button, Row, Space} from "antd";
import './TripInfo.less'

interface Props {
    info: {
        label: string,
        value: string,
    }[]
}

export const TripInfo:FC<Props> = ({info}) => {

    return <div className={'tripInfo'}>
        <Row justify={"space-between"} align={"middle"}>
            <Space size={64}>
                {info.map(({label, value}) => {
                    return <Row className={'info-item'}>
                        <p className={'info-label'}>{label}</p>
                        <p className={'info-value'}>{value}</p>
                    </Row>
                })}
            </Space>
            <Button className={'view'} type={"text"}>
                View itinerary
            </Button>
        </Row>
    </div>
}