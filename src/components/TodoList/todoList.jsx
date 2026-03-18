import { Input, Button, Select, Tag } from "antd";
import Todo from "../Todo/todo";

export default function TodoList() {
    return (
        <div className="flex flex-col h-full mt-5">
            {/* LIST */}
            <div className="flex-1 overflow-y-auto mb-4 pr-1">
                <Todo name="Learn React" priority="High" />
                <Todo name="Learn Redux" priority="Medium" />
                <Todo name="Learn JavaScript" priority="Low" />
            </div>

            {/* ADD */}
            <div className="flex items-center">
                <Input placeholder="Enter todo..." />

                {/* ✅ FIX: wrap bằng div */}
                <div className="w-30 mx-2">
                    <Select defaultValue="Medium" className="w-full">
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

                <Button type="primary">Add</Button>
            </div>
        </div>
    );
}
