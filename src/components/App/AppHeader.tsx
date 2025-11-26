import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { ThemeModeToggle } from "../ui/theme-mode-toggle";

export default function AppHeader() {
    return (

        <div
            className="bg-background gap-4 border-b border-muted flex fixed top-0 left-0 w-full px-4  py-2 justify-between items-center z-50">

            {/* top bar for icon search bar and optional login icon */}
            <img src="/images/app-icon.png" className="size-8" alt="" />
            <Input
                type="search"
                className="w-md"
                placeholder="Search..."
            />
            <div className="flex items-center gap-3">
                <ThemeModeToggle />
                <Button variant="secondary">
                    Sign in
                </Button>
            </div>
        </div>
    )
}
