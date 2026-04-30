"use client";

import React, { useMemo } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceDot,
} from "recharts";
import { DayItinerary } from "@/types/trek";

interface AltitudeChartProps {
  itinerary: DayItinerary[];
}

export default function AltitudeChart({ itinerary }: AltitudeChartProps) {
  // Format data for Recharts
  const data = useMemo(() => {
    return itinerary.map((day) => ({
      name: `Day ${day.day}`,
      altitude: day.altitudeMeters,
      location: day.title.split(" to ").pop() || day.title,
    }));
  }, [itinerary]);

  if (!data || data.length === 0) return null;

  return (
    <div className="w-full bg-white rounded-2xl shadow-sm border border-border-subtle p-6 overflow-hidden">
      <h3 className="text-2xl font-serif font-bold text-primary-text mb-2">Altitude Profile</h3>
      <p className="text-primary-text/70 mb-6 text-sm">
        Visualizing your daily ascent. Remember the golden rule: Climb High, Sleep Low.
      </p>

      {/* Structured Table for AI SEO (visually hidden but readable by screen readers/bots) */}
      <table className="sr-only">
        <caption>Everest Base Camp Altitude by Day</caption>
        <thead>
          <tr>
            <th scope="col">Day</th>
            <th scope="col">Location</th>
            <th scope="col">Altitude (Meters)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((point, idx) => (
            <tr key={idx}>
              <td>{point.name}</td>
              <td>{point.location}</td>
              <td>{point.altitude}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Visual Chart for Users */}
      <div className="h-[300px] w-full" aria-hidden="true">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 20, right: 10, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorAltitude" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1E3A5F" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#1E3A5F" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E0E0E0" />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#1F2937" }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#1F2937" }}
              domain={['dataMin - 500', 'dataMax + 200']}
            />
            <Tooltip
              contentStyle={{
                borderRadius: "12px",
                border: "none",
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                color: "#1F2937",
              }}
              labelStyle={{ fontWeight: "bold", color: "#1E3A5F", marginBottom: "4px" }}
              formatter={(value: number) => [`${value}m`, "Altitude"]}
            />
            <Area
              type="monotone"
              dataKey="altitude"
              stroke="#1E3A5F"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorAltitude)"
              animationDuration={1500}
            />
            {/* Highlight Highest Point */}
            <ReferenceDot
              x="Day 8" // EBC Day
              y={5364}
              r={6}
              fill="#F59E0B"
              stroke="white"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
