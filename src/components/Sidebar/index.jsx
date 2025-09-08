import { NavLink } from "react-router-dom";

export const Sidebar = () => {
    const style = 'flex align-center gap-1 px-2 py-1 rounded-tr-full rounded-br-full'
    const getStyle = ({ isActive }) => {
        return isActive ? `text-slate-50 bg-indigo-800 ${style}`
            : `hover:bg-indigo-800 hover:text-slate-50 ${style}`;
    }
    return (
        <aside className="flex flex-col  gap-5  border-r-2 border-r-gray-200 h-screen w-48 p-3">
            <NavLink className={getStyle} to='/'>
                <span class="material-icons-outlined">
                    home
                </span>
                <span className="">Home</span>
            </NavLink>
            <NavLink className={getStyle} to='/archive'>
                <span class="material-icons-outlined">archive</span>
                <span>Archive</span>
            </NavLink>
            <NavLink className={getStyle} to='important'>
                <span class="material-icons-outlined">label_important</span>
                <span>Important</span>
            </NavLink>
            <NavLink className={getStyle} to='bin'>
                <span class="material-icons-outlined">delete</span>
                <span className="">Bin</span>
            </NavLink>
        </aside>
    );
}