import { Outlet } from "react-router-dom";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "../ui/resizable";
import AppHeader from "../AppDashboard/AppHeader";

export default function AppLayout() {
  return (
    <div className="text-foreground">
      {/* side bar for all projects with fildter an create icon*/}
      <AppHeader />
      <ResizablePanelGroup direction="horizontal" className="flex mt-16">
        {/* side bar */}
        <ResizablePanel maxSize={300} className="overflow-hidden">
          <div className="fixed h-full overflow-hidden">
            lorem200
          </div>
        </ResizablePanel>

        <ResizableHandle />
        {/* page / dashboard */}
        <ResizablePanel>
          <Outlet />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}
