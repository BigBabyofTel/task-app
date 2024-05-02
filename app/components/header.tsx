import { ThemeSwitcher } from "./themeswitcher";

export default function Header() {

    return (
        <header className="p-1 border shadow-xl rounded-xl flex justify-between">
            <h1 className="text-2xl">Tasker</h1>
            <ThemeSwitcher/>
        </header>
    )
}