"use client";

import { useEffect, useRef } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const CHART_SIZE = 540;
const OUTER_RADIUS = 150;
const INNER_RADIUS = 85;
const CENTER_X = 270;
const CENTER_Y = 270;

const ROTATION_OFFSET = -20 * Math.PI / 180;

const TOKENOMICS_MOCK_DATA = [
  { id: "team", label: "Team & Advisors", value: 20, color: "#475569" },
  { id: "partners", label: "Partnerships", value: 10, color: "#334155" },
  { id: "reserve", label: "Reserve", value: 5, color: "#1e293b" },
  { id: "community", label: "Community Rewards", value: 40, color: "#94a3b8" },
  { id: "ecosystem", label: "Ecosystem Development", value: 25, color: "#64748b" },
];

type CalloutLine = {
  id: string;
  label: string;
  textX: number;
  textY: number;
  cornerX: number; // The right-angle pivot point coordinate
  anchor: "start" | "middle" | "end";
};

// Configured with neat horizontal side-aligned columns to optimize scannability
const structuralLines: CalloutLine[] = [
  {
    id: "team",
    label: "Team & Advisors",
    textX: 270,
    textY: 70,
    cornerX: 270, 
    anchor: "middle",
  },
  {
    id: "partners",
    label: "Partnerships",
    textX: 440,
    textY: 175,
    cornerX: 430,
    anchor: "start",
  },
  {
    id: "reserve",
    label: "Reserve",
    textX: 440,
    textY: 245,
    cornerX: 430,
    anchor: "start",
  },
  {
    id: "community",
    label: "Community Rewards",
    textX: 270,
    textY: 475,
    cornerX: 270,
    anchor: "middle",
  },
  {
    id: "ecosystem",
    label: "Ecosystem Development",
    textX: 100,
    textY: 260,
    cornerX: 110,
    anchor: "end",
  },
];

function DonutChart() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pinPoints: Record<string, { x: number; y: number }> = {};

  let runningAngle = -Math.PI * 0.5 + ROTATION_OFFSET;
  TOKENOMICS_MOCK_DATA.forEach((slice) => {
    const sliceAngle = (slice.value / 100) * Math.PI * 2;
    const centerArcAngle = runningAngle + sliceAngle / 2;
    
    pinPoints[slice.id] = {
      x: CENTER_X + Math.cos(centerArcAngle) * OUTER_RADIUS,
      y: CENTER_Y + Math.sin(centerArcAngle) * OUTER_RADIUS,
    };
    runningAngle += sliceAngle;
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const devicePixelRatio = window.devicePixelRatio || 1;
    canvas.width = CHART_SIZE * devicePixelRatio;
    canvas.height = CHART_SIZE * devicePixelRatio;
    canvas.style.width = `${CHART_SIZE}px`;
    canvas.style.height = `${CHART_SIZE}px`;
    context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);

    context.clearRect(0, 0, CHART_SIZE, CHART_SIZE);
    context.fillStyle = "#EAEAEA";
    context.fillRect(0, 0, CHART_SIZE, CHART_SIZE);

    context.save();
    context.translate(CENTER_X, CENTER_Y);
    context.rotate(ROTATION_OFFSET);

    let startAngle = -Math.PI * 0.5;

    TOKENOMICS_MOCK_DATA.forEach((slice) => {
      const endAngle = startAngle + (slice.value / 100) * Math.PI * 2;

      context.beginPath();
      context.moveTo(0, 0);
      context.arc(0, 0, OUTER_RADIUS, startAngle, endAngle);
      context.closePath();
      context.fillStyle = slice.color;
      context.fill();

      const midAngle = (startAngle + endAngle) / 2;
      const labelRadius = (OUTER_RADIUS + INNER_RADIUS) / 2;
      const labelX = Math.cos(midAngle) * labelRadius;
      const labelY = Math.sin(midAngle) * labelRadius;

      context.save();
      context.fillStyle = "#ffffff";
      context.font = "normal 14px sans-serif";
      context.textAlign = "center";
      context.textBaseline = "middle";
      
      context.translate(labelX, labelY);
      context.rotate(-ROTATION_OFFSET);
      context.fillText(`${slice.value}%`, 0, 0);
      context.restore();

      startAngle = endAngle;
    });

    context.beginPath();
    context.arc(0, 0, INNER_RADIUS, 0, Math.PI * 2);
    context.fillStyle = "#ffffff";
    context.fill();

    startAngle = -Math.PI * 0.5;
    TOKENOMICS_MOCK_DATA.forEach((slice) => {
      context.beginPath();
      context.moveTo(
        INNER_RADIUS * Math.cos(startAngle),
        INNER_RADIUS * Math.sin(startAngle)
      );
      context.lineTo(
        OUTER_RADIUS * Math.cos(startAngle),
        OUTER_RADIUS * Math.sin(startAngle)
      );
      context.strokeStyle = "#EAEAEA";
      context.lineWidth = 2.5;
      context.stroke();

      startAngle += (slice.value / 100) * Math.PI * 2;
    });

    context.restore();

    context.save();
    context.fillStyle = "#121824";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.font = "normal 16px sans-serif";
    context.fillText("Total Supply:", CENTER_X, CENTER_Y - 10);
    context.font = "normal 16px sans-serif";
    context.fillText("1,000,000,000", CENTER_X, CENTER_Y + 12);
    context.restore();
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-[720px] h-[540px] overflow-visible select-none">
      <canvas
        ref={canvasRef}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        aria-label="Lyra tokenomics donut chart"
      />

      <svg
        viewBox="0 0 540 540"
        className="absolute inset-0 h-full w-full overflow-visible pointer-events-none"
        aria-hidden="true"
      >
        {structuralLines.map((callout) => {
          const targetDot = pinPoints[callout.id] || { x: CENTER_X, y: CENTER_Y };
          
          // Generates a right-angle path leading to the label columns smoothly
          const pathDefinition = 
            callout.anchor === "middle"
              ? `M ${targetDot.x} ${targetDot.y} L ${callout.cornerX} ${callout.textY + 12}`
              : `M ${targetDot.x} ${targetDot.y} L ${callout.cornerX} ${targetDot.y} L ${callout.cornerX} ${callout.textY - 4}`;

          return (
            <g key={callout.id}>
              {/* Clean Orthogonal Shelf Path */}
              <path
                d={pathDefinition}
                fill="none"
                stroke="rgba(18,24,36,0.25)"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              
              {/* Soft circle node on the segment edge */}
              <circle cx={targetDot.x} cy={targetDot.y} r="3" fill="#121824" />
              
              {/* Clean side-aligned text value label */}
              <text
                x={callout.textX}
                y={callout.textY}
                textAnchor={callout.anchor}
                fill="#121824"
                fontSize="14"
                fontWeight="500"
                fontFamily="sans-serif"
                className="tracking-tight"
              >
                {callout.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export function TokenomicsSection() {
  return (
    <section id="tokenomics" className="py-20 bg-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <AnimatedSection className="text-center mb-6">
          <div className="inline-block border border-black/30 rounded-full px-4 py-0.5 bg-transparent mb-3">
            <span className="text-xs text-black/70 font-medium">
              Tokenomics
            </span>
          </div>
          <h2 className="font-display font-medium text-4xl sm:text-5xl text-[#121824] tracking-tight">
            Lyra by the Numbers
          </h2>
        </AnimatedSection>

        <AnimatedSection animation="scaleUp" className="w-full flex justify-center">
          <DonutChart />
        </AnimatedSection>
        
      </div>
    </section>
  );
}