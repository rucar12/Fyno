import {FC} from "react";
import {Button, Row, Space} from "antd";
import './TripInfo.less'

interface Props {
    info: {
        label: string,
        value: string,
    }[],
    scroll: () => void
}

export const TripInfo:FC<Props> = ({info, scroll}) => {

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
            <Button className={'view'} type={"text"} onClick={scroll}>
                View itinerary
            </Button>
        </Row>
    </div>
}