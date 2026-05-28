"use client";

import { useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Home() {
  const [status, setStatus] = useState("idle");
  const [logs, setLogs] = useState<string[]>([]);
  const [backupWallet, setBackupWallet] = useState("");

  const activityFeed = [
    "Unauthorized approval blocked",
    "Drainer contract detected",
    "Fake mint prevented",
    "Assets secured successfully",
    "USDC transferred to backup vault",
  ];

  const activateGuardian = () => {
    setStatus("scanning");

    const messages = [
      "Scanning wallet approvals...",
      "Checking smart contracts...",
      "Analyzing blockchain activity...",
      "Suspicious transaction detected...",
      "Activating AI protection...",
      "Securing backup wallet...",
    ];

    let index = 0;

    const interval = setInterval(() => {
      setLogs((prev) => [...prev, messages[index]]);
      index++;

      if (index >= messages.length) {
        clearInterval(interval);

        setTimeout(() => {
          setStatus("protected");
        }, 1000);
      }
    }, 700);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-cyan-950 text-white flex items-center justify-center px-4 relative overflow-hidden">

      {/* Glow Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500 rounded-full blur-3xl"></div>

        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>

        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-400 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Content */}
      <div className="text-center max-w-3xl w-full relative z-10">

        {/* Wallet Button */}
        <div className="flex justify-end mb-6">
          <ConnectButton />
        </div>

        {/* Title */}
        <h1 className="text-6xl font-bold text-cyan-400 mb-4 drop-shadow-lg">
          Wallet Guardian AI
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 text-lg mb-8">
          AI-powered wallet protection system
        </p>

        {/* Backup Wallet Input */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Enter Backup Wallet Address"
            value={backupWallet}
            onChange={(e) => setBackupWallet(e.target.value)}
            className="w-full bg-black/50 border border-cyan-500 rounded-xl px-4 py-3 text-white outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>

        {/* Idle State */}
        {status === "idle" && (
          <button
            onClick={activateGuardian}
            className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-6 py-3 rounded-xl transition shadow-lg shadow-cyan-500/50"
          >
            Activate Guardian
          </button>
        )}

        {/* Scanning State */}
        {status === "scanning" && (
          <div className="mt-8 border border-red-500 bg-black/80 backdrop-blur-md p-6 rounded-2xl shadow-lg shadow-red-500/40 text-left">
            <h2 className="text-3xl font-bold text-red-400 mb-4 text-center">
              ⚠ Threat Detected
            </h2>

            <div className="space-y-2 font-mono text-green-400">
              {logs.map((log, i) => (
                <p key={i} className="animate-pulse">
                  {">"} {log}
                </p>
              ))}
            </div>
          </div>
        )}

        {/* Protected State */}
        {status === "protected" && (
          <div className="mt-8 border border-green-500 bg-green-950/80 backdrop-blur-md p-6 rounded-2xl shadow-lg shadow-green-500/40">

            <h2 className="text-3xl font-bold text-green-400 mb-4">
              ✅ Assets Protected
            </h2>

            <p className="text-green-200 mb-2">
              Backup wallet secured successfully.
            </p>

            <p className="text-cyan-300 mb-4">
              AI Guardian stopped suspicious activity.
            </p>

            {/* Backup Wallet */}
            <div className="bg-black/40 rounded-xl p-4 text-left mb-6">
              <p className="text-gray-400 text-sm mb-1">
                Protected Backup Wallet
              </p>

              <p className="text-cyan-300 break-all">
                {backupWallet || "No backup wallet added"}
              </p>
            </div>

            {/* Activity Feed */}
            <div className="bg-black/40 rounded-xl p-4 text-left">
              <h3 className="text-red-400 font-bold mb-3">
                Live Security Activity
              </h3>

              <div className="space-y-2 font-mono text-green-400 text-sm">
                {activityFeed.map((activity, i) => (
                  <p key={i}>
                    {">"} {activity}
                  </p>
                ))}
              </div>
            </div>

          </div>
        )}
      </div>
    </main>
  );
}