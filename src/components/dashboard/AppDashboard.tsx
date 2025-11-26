import { ArrowDownWideNarrow, FolderInput, PlusIcon } from "lucide-react"
import ProjectCard from "../Project/ProjectCard"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

export default function AppDashboard() {
    const collections = Array.from({ length: 4 })
    return (
        <div className="bg-red min-w-full flex-1 p-4">
            <div className="flex gap-3 mb-5">
                <Input
                    type="search"
                    className="min-w-60"
                    placeholder="filter"
                />
                <Button variant="secondary">

                    <ArrowDownWideNarrow />
                </Button>
                <Button variant="secondary">
                    <PlusIcon /> Create
                </Button>
                <Button variant="secondary">
                    <FolderInput />  Import
                </Button>
            </div>
            <div className="flex flex-wrap gap-3">
                {/* project colections */}
                {collections.map((_, i) => (
                    <ProjectCard key={i} />
                ))}
            </div>
        </div>
    )
}
