import { Input, Typography, Radio, Select, Tag } from "antd";

const { Search } = Input;

export default function Filters() {
    return (
        <div>
            {/* Search */}
            <div>
                <Typography.Text strong>Search</Typography.Text>
                <Search placeholder="input search text" />
            </div>

            {/* Status */}
            <div className="mt-3">
                <Typography.Text strong>Filter By Status</Typography.Text>
                <br />

                <Radio.Group className="block mt-1">
                    <Radio value="ALL">All</Radio>
                    <Radio value="completed">Completed</Radio>
                    <Radio value="todo">To do</Radio>
                </Radio.Group>
            </div>

            {/* Priority */}
            <div className="mt-3">
                <Typography.Text strong>Filter By Priority</Typography.Text>

                <Select
                    mode="multiple"
                    allowClear
                    placeholder="Please select"
                    className="w-full mt-1"
                >
                    <Select.Option value="High">
                        <Tag color="red">High</Tag>
                    </Select.Option>

                    <Select.Option value="Medium">
                        <Tag color="blue">Medium</Tag>
                    </Select.Option>

                    <Select.Option value="Low">
                        <Tag color="gray">Low</Tag>
                    </Select.Option>
                </Select>
            </div>
        </div>
    );
}
