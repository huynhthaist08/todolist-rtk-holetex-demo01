import { Tag, Checkbox } from "antd";
import { useState } from "react";

const priorityColorMapping = {
    High: "red",
    Medium: "blue",
    Low: "gray",
};

export default function Todo({ name, priority }) {
    const [checked, setChecked] = useState(false);

    return (
        <div
            className={`flex justify-between items-center mb-2 ${
                checked ? "opacity-50 line-through" : ""
            }`}
        >
            <Checkbox checked={checked} onChange={() => setChecked(!checked)}>
                {name}
            </Checkbox>

            <Tag color={priorityColorMapping[priority]}>{priority}</Tag>
        </div>
    );
}
