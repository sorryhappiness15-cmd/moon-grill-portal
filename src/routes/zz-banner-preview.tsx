import { createFileRoute } from "@tanstack/react-router";
import { ProfileBanner } from "@/components/profile/ProfileBanner";
export const Route = createFileRoute("/zz-banner-preview")({ component: P });
function P() {
  return <main className="min-h-screen bg-cream p-4"><ProfileBanner name="Ali Khan" email="ali@example.com" joined="2025-01-01" stats={[{label:"Orders",value:"12"},{label:"Spent",value:"Rs 8,400"},{label:"Saved",value:"3"}]} onSignOut={()=>{}} onPickAvatar={()=>{}} /></main>;
}
