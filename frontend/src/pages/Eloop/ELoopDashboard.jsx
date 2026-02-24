// DashboardEloop.jsx
// React + shadcn/ui + lucide-react (UI only)

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  LayoutDashboard,
  CheckSquare,
  ShoppingCart,
  MessageSquare,
  Settings,
  LogOut,
  Search,
  Bell,
  ListTodo,
  Truck,
  Mail,
} from "lucide-react";

function StatCard({ icon: Icon, title, value, pill }) {
  return (
    <Card className="border-slate-200/70 bg-white/80 shadow-sm backdrop-blur">
      <CardContent className="flex items-center justify-between p-5">
        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50 text-slate-700">
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <div className="text-sm font-medium text-slate-600">{title}</div>
            <div className="text-xl font-semibold text-slate-900">{value}</div>
          </div>
        </div>
        {pill ? (
          <Badge variant="secondary" className="rounded-full">
            {pill}
          </Badge>
        ) : null}
      </CardContent>
    </Card>
  );
}

function StatusPill({ status }) {
  const map = {
    Open: "bg-blue-50 text-blue-700 border-blue-100",
    Completed: "bg-emerald-50 text-emerald-700 border-emerald-100",
    Overdue: "bg-rose-50 text-rose-700 border-rose-100",
    Pending: "bg-amber-50 text-amber-700 border-amber-100",
    Shipped: "bg-sky-50 text-sky-700 border-sky-100",
    Delivered: "bg-emerald-50 text-emerald-700 border-emerald-100",
    New: "bg-indigo-50 text-indigo-700 border-indigo-100",
  };

  return (
    <span
      className={[
        "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold",
        map[status] || "bg-slate-50 text-slate-700 border-slate-200",
      ].join(" ")}
    >
      {status}
    </span>
  );
}

export default function DashboardEloop() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="grid gap-6 md:grid-cols-[260px_1fr]">
          {/* Sidebar */}
          <aside className="rounded-2xl border border-slate-200/70 bg-white/80 p-4 shadow-sm backdrop-blur">
            {/* Brand */}
            <div className="mb-6 flex items-center gap-3 px-2 pt-1">
              <div className="relative h-8 w-12">
                <span className="absolute left-0 top-1/2 h-7 w-7 -translate-y-1/2 rounded-full border-[5px] border-blue-600" />
                <span className="absolute right-0 top-1/2 h-7 w-7 -translate-y-1/2 rounded-full border-[5px] border-blue-400" />
              </div>
              <div className="text-2xl font-semibold tracking-tight text-slate-800">
                eloop
              </div>
            </div>

            {/* Nav */}
            <nav className="space-y-1">
              <button className="flex w-full items-center gap-3 rounded-xl bg-blue-50 px-3 py-2.5 text-sm font-semibold text-blue-700">
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </button>

              <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50">
                <CheckSquare className="h-4 w-4" />
                Tasks
              </button>

              <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50">
                <ShoppingCart className="h-4 w-4" />
                Orders
              </button>

              <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50">
                <MessageSquare className="h-4 w-4" />
                Messages
              </button>

              <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50">
                <Settings className="h-4 w-4" />
                Settings
              </button>
            </nav>

            {/* Footer profile */}
            <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-3">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage
                    src="https://i.pravatar.cc/100?img=12"
                    alt="JD"
                  />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="min-w-0">
                  <div className="truncate text-sm font-semibold text-slate-900">
                    John Doe
                  </div>
                  <div className="truncate text-xs text-slate-500">
                    john.doe@example.com
                  </div>
                </div>
              </div>

              <Button
                variant="ghost"
                className="mt-3 w-full justify-start gap-2 rounded-xl text-slate-700 hover:bg-white"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </div>
          </aside>

          {/* Main */}
          <main className="space-y-6">
            {/* Top bar */}
            <div className="flex flex-col gap-4 rounded-2xl border border-slate-200/70 bg-white/80 p-4 shadow-sm backdrop-blur md:flex-row md:items-center md:justify-between">
              <div className="text-lg font-semibold text-slate-900">
                Dashboard
              </div>

              <div className="flex flex-1 items-center gap-3 md:justify-end">
                <div className="relative w-full max-w-md">
                  <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <Input
                    placeholder="Search..."
                    className="h-10 rounded-xl pl-9"
                  />
                </div>

                <Button variant="ghost" className="rounded-xl">
                  <Bell className="h-5 w-5" />
                </Button>

                <div className="flex items-center gap-2">
                  <Avatar className="h-9 w-9">
                    <AvatarImage
                      src="https://i.pravatar.cc/100?img=12"
                      alt="John Doe"
                    />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="hidden text-sm font-medium text-slate-700 md:block">
                    John Doe
                  </div>
                </div>
              </div>
            </div>

            {/* Welcome */}
            <div className="rounded-2xl border border-slate-200/70 bg-white/80 p-6 shadow-sm backdrop-blur">
              <div className="text-3xl font-semibold tracking-tight text-slate-900">
                Welcome back, John Doe <span className="align-middle">👋</span>
              </div>
              <div className="mt-2 text-sm text-slate-600">
                Here's what's happening with your managed content today:
              </div>

              {/* Stats */}
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <StatCard
                  icon={ListTodo}
                  title="Tasks"
                  value="12 Open tasks"
                  pill="+1"
                />
                <StatCard
                  icon={Truck}
                  title="Orders"
                  value="5 New orders"
                  pill="+1"
                />
                <StatCard
                  icon={Mail}
                  title="Messages"
                  value="8 New messages"
                  pill="+2"
                />
              </div>
            </div>

            {/* Lower grid */}
            <div className="grid gap-6 lg:grid-cols-2">
              {/* My Tasks */}
              <Card className="border-slate-200/70 bg-white/80 shadow-sm backdrop-blur">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-xl">My Tasks</CardTitle>
                  <div className="relative w-56">
                    <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <Input
                      placeholder="Search tasks..."
                      className="h-9 rounded-xl pl-9"
                    />
                  </div>
                </CardHeader>

                <CardContent className="pt-2">
                  <div className="grid grid-cols-[1.5fr_.7fr_1fr] gap-3 border-b pb-2 text-xs font-semibold text-slate-500">
                    <div>Task</div>
                    <div>Status</div>
                    <div>Extracted Page</div>
                  </div>

                  <div className="divide-y">
                    {[
                      ["Review new orders", "Open", "Orders Dashboard"],
                      ["Respond to client messages", "Open", "Messages Inbox"],
                      [
                        "Update product inventory",
                        "Completed",
                        "Orders Dashboard",
                      ],
                      ["Analyze weekly report", "Completed", "Reports Page"],
                    ].map(([task, status, page]) => (
                      <div
                        key={task}
                        className="grid grid-cols-[1.5fr_.7fr_1fr] gap-3 py-3"
                      >
                        <div className="text-sm font-medium text-slate-900">
                          {task}
                        </div>
                        <div>
                          <StatusPill status={status} />
                        </div>
                        <div className="text-sm text-slate-600">{page}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Orders */}
              <Card className="border-slate-200/70 bg-white/80 shadow-sm backdrop-blur">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-xl">Recent Orders</CardTitle>
                  <div className="relative w-56">
                    <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <Input
                      placeholder="Search orders..."
                      className="h-9 rounded-xl pl-9"
                    />
                  </div>
                </CardHeader>

                <CardContent className="pt-2">
                  <div className="divide-y">
                    {[
                      [
                        "Jane Smith",
                        "1 × Wireless Mouse",
                        "Processing",
                        "jane.smith@example.com",
                      ],
                      [
                        "Michael Brown",
                        "3 × Office Chair",
                        "Shipped",
                        "michael.brown@example.com",
                      ],
                      [
                        "Emily Johnson",
                        "2 × Desk Lamp",
                        "Pending",
                        "emily.johnson@example.com",
                      ],
                      [
                        "David Lee",
                        "1 × Monitor Stand",
                        "Delivered",
                        "david.lee@example.com",
                      ],
                    ].map(([name, items, status, email]) => (
                      <div
                        key={name}
                        className="flex items-center justify-between py-3"
                      >
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarImage
                              src={`https://i.pravatar.cc/100?u=${email}`}
                              alt={name}
                            />
                            <AvatarFallback>
                              {name
                                .split(" ")
                                .slice(0, 2)
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="text-sm font-semibold text-slate-900">
                              {name}
                            </div>
                            <div className="text-xs text-slate-500">
                              {email}
                            </div>
                          </div>
                        </div>

                        <div className="text-right">
                          <div className="text-sm font-medium text-slate-800">
                            {items}
                          </div>
                          <div className="mt-1">
                            <StatusPill status={status} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Latest Messages (left) */}
              <Card className="border-slate-200/70 bg-white/80 shadow-sm backdrop-blur">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-xl">Latest Messages</CardTitle>
                  <div className="relative w-56">
                    <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <Input
                      placeholder="Search messages..."
                      className="h-9 rounded-xl pl-9"
                    />
                  </div>
                </CardHeader>

                <CardContent className="pt-2">
                  <div className="divide-y">
                    {[
                      [
                        "Jane Smith",
                        "Need ETA for shipment",
                        "1 hour ago",
                        "jane.smith@example.com",
                      ],
                      [
                        "Michael Brown",
                        "Can we adjust the order?",
                        "3 hours ago",
                        "michael.brown@example.com",
                      ],
                      [
                        "Emily Johnson",
                        "Thanks! Looks great.",
                        "5 hours ago",
                        "emily.johnson@example.com",
                      ],
                    ].map(([name, preview, time, email]) => (
                      <div
                        key={name}
                        className="flex items-center justify-between py-3"
                      >
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarImage
                              src={`https://i.pravatar.cc/100?u=${email}`}
                              alt={name}
                            />
                            <AvatarFallback>
                              {name
                                .split(" ")
                                .slice(0, 2)
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="min-w-0">
                            <div className="text-sm font-semibold text-slate-900">
                              {name}
                            </div>
                            <div className="truncate text-xs text-slate-500">
                              {preview}
                            </div>
                          </div>
                        </div>
                        <div className="text-xs text-slate-500">{time}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Latest Messages (right, optional second panel like the mock) */}
              <Card className="border-slate-200/70 bg-white/80 shadow-sm backdrop-blur">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-xl">Latest Messages</CardTitle>
                  <div className="relative w-56">
                    <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <Input
                      placeholder="Search messages..."
                      className="h-9 rounded-xl pl-9"
                    />
                  </div>
                </CardHeader>

                <CardContent className="pt-2">
                  <div className="divide-y">
                    {[
                      [
                        "Jane Smith",
                        "Following up on confirmation",
                        "1 hour ago",
                        "jane.smith@example.com",
                      ],
                      [
                        "Michael Brown",
                        "We need a phone update",
                        "3 hours ago",
                        "michael.brown@example.com",
                      ],
                      [
                        "Emily Johnson",
                        "Perfect?",
                        "12 hours ago",
                        "emily.johnson@example.com",
                      ],
                    ].map(([name, preview, time, email]) => (
                      <div
                        key={name}
                        className="flex items-center justify-between py-3"
                      >
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarImage
                              src={`https://i.pravatar.cc/100?u=${email}`}
                              alt={name}
                            />
                            <AvatarFallback>
                              {name
                                .split(" ")
                                .slice(0, 2)
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="min-w-0">
                            <div className="text-sm font-semibold text-slate-900">
                              {name}
                            </div>
                            <div className="truncate text-xs text-slate-500">
                              {preview}
                            </div>
                          </div>
                        </div>
                        <div className="text-xs text-slate-500">{time}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
