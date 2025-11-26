import { Outlet } from "react-router-dom";
import type { MouseEvent } from 'react'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "../ui/resizable";
import AppHeader from "../App/AppHeader";

export default function AppLayout() {

  function handleContextMenuClick(e: MouseEvent) {
    console.log(e.pageX)
  }

  return (
    <div onContextMenu={handleContextMenuClick} className="flex flex-col h-screen text-foreground">

      <AppHeader />

      <ResizablePanelGroup
        direction="horizontal"
        className="flex-1 mt-14"
      >
        {/* Sidebar */}
        <ResizablePanel maxSize={300} className="overflow-hidden relative">
          <div className="absolute inset-0 flex flex-col overflow-hidden">
            <div>Works space</div>
            <div>Projects</div>
            <div></div>
          </div>
        </ResizablePanel>

        <ResizableHandle />

        {/* Main content */}
        <ResizablePanel className="overflow-hidden relative">
          <div className="absolute inset-0 overflow-auto">
            <Outlet />
          </div>
        </ResizablePanel>

      </ResizablePanelGroup>
    </div>
  );
}
