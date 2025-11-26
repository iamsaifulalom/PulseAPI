import { MenuIcon } from 'lucide-react'

export default function ProjectCard() {
    return (
        <div  className="w-50 p-4 hover:bg-input/30 flex flex-col justify-between border aspect-square rounded-xl border-muted">
            <div>
                <h1 className="flex border rounded-sm w-26 text-sm items-center gap-2">
                    <MenuIcon className="bg-chart-3 rounded-l-sm" />
                    Collection
                </h1>
                <h1 className="text-sm mt-4">Products</h1>
            </div>
            <p className="text-xs">Last open: 20 mins ago</p>
        </div>
    )
}
