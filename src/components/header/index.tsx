import { ModeToggle } from "../mode-toggle";

export function Header() {
    return (
        <div className="flex items-center h-14 border-b dark:border-slate-800 border-slate-100">
            <div className="flex justify-end w-full max-w-7xl mx-auto">
                <ModeToggle />
            </div>
        </div>
    )
}