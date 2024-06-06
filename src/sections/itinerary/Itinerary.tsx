import  './Itinerary.less';
import {FC} from "react";
import {DatePicker, Row, Select, Space} from "antd";
import PlaneSVG from '../../assets/icons/plane.svg?react'
import CalendarSVG from '../../assets/icons/calendar.svg?react'
import ProfileSVG from '../../assets/icons/profile.svg?react'

interface Props {
    name: string
}

export const Itinerary:FC<Props> = ({name}) => {

    const fakeOptions = [{
        value: 'San francisco, SFO',
        label: 'San francisco, SFO',
    },{
        value: 'Colorado, USA',
        label: 'Colorado, USA',
    },{
        value: 'Texas, USA',
        label: 'Texas, USA',
    }]

    return (
        <Space size={24} className={'itinerary'} direction={"vertical"}>
            <h2>{name} itinerary</h2>
            <Row className={'filters'} align={"middle"}>
                <Select
                    showSearch
                    suffixIcon={null}
                    placeholder={'Reykjavík, KEF'}
                    className={'select-city'}
                    options={fakeOptions}
                />
                <PlaneSVG className={'plane'} />
                <Select
                    showSearch
                    suffixIcon={null}
                    placeholder={'San Francisco, SFO'}
                    className={'select-city'}
                    options={fakeOptions}
                />
                <DatePicker.RangePicker
                    suffixIcon={<CalendarSVG/>}
                    className={'date-picker'}
                    format={'MMM DD'}
                    separator={'-'}
                    placeholder={['Jul 05', 'Jul 11']}
                />
                <Select
                    suffixIcon={<ProfileSVG/>}
                    defaultValue={2}
                    className={'select-people'}
                    options={[{value: 1, label: 1}, {value: 2, label: 2}, {value: 3, label: 3}]}
                />
            </Row>
        </Space>
    )
}