import {FC, useState} from "react";
import {Button, Row, Select} from "antd";
import './Header.less';
import {PlusOutlined} from "@ant-design/icons";

const selectValues = [5, 6, 7, 8, 9, 10]

export const Header:FC = () => {

    const [ days, setDays ] = useState<string>(`${selectValues[2]} days`)

    const selectOptions = selectValues.map(value => ({ value: `${value} days`, label: `${value} days`}))

    const handleChangeDays = (value: string) => {
      setDays(value)
    }

    return (
        <Row className={'header'} align={"middle"} justify={"space-between"}>
            <Button.Group className={'btn-group'}>
                <Button>Trips</Button>
                <Button>Iceland</Button>
                <Select
                    value={days}
                    style={{ width: 120 }}
                    onChange={handleChangeDays}
                    options={selectOptions}
                />
            </Button.Group>
            <Button className={'create'}><PlusOutlined /> Create</Button>
        </Row>
    )
}