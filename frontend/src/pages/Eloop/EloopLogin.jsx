// LoginEloop.jsx
// React + shadcn/ui + lucide-react (UI only)

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User, Lock } from "lucide-react";

export default function LoginEloop() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* soft background blobs */}
      <div className="pointer-events-none absolute -left-40 top-24 h-80 w-80 rounded-full bg-blue-200/35 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-indigo-200/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-sky-200/25 blur-3xl" />

      {/* subtle dotted accents */}
      <div className="pointer-events-none absolute right-12 top-12 grid grid-cols-6 gap-2 opacity-30">
        {Array.from({ length: 36 }).map((_, i) => (
          <span key={i} className="h-1 w-1 rounded-full bg-slate-300" />
        ))}
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-5xl items-center justify-center px-4 py-12">
        <div className="w-full max-w-2xl">
          {/* Brand */}
          <div className="mb-10 flex flex-col items-center text-center">
            <div className="mb-4 flex items-center gap-3">
              {/* loop mark (CSS-only) */}
              <div className="relative h-10 w-14">
                <span className="absolute left-0 top-1/2 h-9 w-9 -translate-y-1/2 rounded-full border-[6px] border-blue-600" />
                <span className="absolute right-0 top-1/2 h-9 w-9 -translate-y-1/2 rounded-full border-[6px] border-blue-400" />
              </div>

              <div className="text-5xl font-semibold tracking-tight text-slate-700">
                eloop
              </div>
            </div>

            <p className="text-xl font-medium text-slate-500">
              Manage{" "}
              <span className="font-semibold text-slate-600">content</span> from
              your Chrome extension
            </p>
          </div>

          {/* Card */}
          <Card className="mx-auto w-full max-w-xl border-slate-200/70 bg-white/80 shadow-2xl shadow-slate-200/50 backdrop-blur">
            <CardContent className="p-10">
              <div className="space-y-6">
                {/* Email */}
                <div className="relative">
                  <User className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <Input
                    placeholder="Email"
                    className="h-14 rounded-xl border-slate-200 pl-12 text-base"
                  />
                </div>

                {/* Password + Forgot */}
                <div className="relative">
                  <Lock className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <Input
                    type="password"
                    placeholder="Password"
                    className="h-14 rounded-xl border-slate-200 pl-12 pr-40 text-base"
                  />

                  <button
                    type="button"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-blue-600 hover:text-blue-700"
                  >
                    Forgot password?
                  </button>
                </div>

                {/* Sign in */}
                <Button className="h-14 w-full rounded-xl text-lg font-semibold shadow-sm">
                  Sign in
                </Button>

                {/* Sign up */}
                <div className="pt-2 text-center text-sm text-slate-500">
                  Don&apos;t have an account?{" "}
                  <button
                    type="button"
                    className="font-semibold text-blue-600 hover:text-blue-700"
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
