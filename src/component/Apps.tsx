
import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { getStored } from "../localStorage";


const donation=getStored();
const length=donation.length;
const remain=12-length;
const data = [
  { name: "donation", value: length, color: "red" },
  { name: "remaining", value: remain, color: "green" }
];

export default function Apps() {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie dataKey="value" data={data} label>
            {data.map((entry, index) => (
              <Cell />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        {data.map((item) => (
          <p>
            {" "}
            <span
              style={{ padding: "1px 10px ", backgroundColor: item.color }}
            ></span>{" "}
            {item.name}
          </p>
        ))}
      </div>
    </div>
  );}