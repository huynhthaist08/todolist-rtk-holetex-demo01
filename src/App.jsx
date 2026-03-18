import { Typography } from "antd";
import Filters from "./components/Filters";
import TodoList from "./components/TodoList/todoList";

export default function App() {
    return (
        <div className="h-screen bg-gray-100 flex items-center justify-center">
            <div className="w-[500px] h-[650px] bg-white p-5 rounded-md shadow-lg flex flex-col">
                <Typography.Title level={2} className="text-center">
                    TODO APP with REDUX
                </Typography.Title>

                <div className="flex flex-col h-full">
                    <Filters />

                    <div className="flex-1 flex flex-col mt-5">
                        <TodoList />
                    </div>
                </div>
            </div>
        </div>
    );
}
