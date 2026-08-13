"use client";

import { memo } from "react";

const summaryCards = [
    {
        title: "Risiko Tinggi",
        value: "3",
        note: "dari 12 node",
        bg: "bg-red-50 border-red-200",
        titleColor: "text-red-700",
        valueColor: "text-black",
        noteColor: "text-gray-700",
    },
    {
        title: "Waspada",
        value: "5",
        note: "dari 12 node",
        bg: "bg-yellow-50 border-yellow-200",
        titleColor: "text-yellow-800",
        valueColor: "text-black",
        noteColor: "text-gray-700",
    },
    {
        title: "Laporan Belum Ditangani",
        value: "3",
        note: "2 berisiko tinggi",
        bg: "bg-red-50 border-red-200",
        titleColor: "text-red-700",
        valueColor: "text-black",
        noteColor: "text-gray-700",
    },
    {
        title: "Node Offline",
        value: "1",
        note: "dari 12 node",
        bg: "bg-gray-50 border-gray-400",
        titleColor: "text-gray-700",
        valueColor: "text-black",
        noteColor: "text-gray-700",
    },
];

type SummaryCardProps = {
    title: string;
    value: string;
    note: string;
    bg: string;
    titleColor: string;
    valueColor: string;
    noteColor: string;
};

const SummaryCard = memo(function SummaryCard({
    title,
    value,
    note,
    bg,
    titleColor,
    valueColor,
    noteColor,
}: SummaryCardProps) {
    return (
        <article className={`border p-4 ${bg}`}>
            <h3 className={`text-xs font-bold uppercase tracking-wider ${titleColor}`}>
                {title}
            </h3>
            <div className={`mt-2 text-2xl font-bold ${valueColor}`}>
                {value}
            </div>
            <p className={`mt-1 text-xs ${noteColor}`}>
                {note}
            </p>
        </article>
    );
});

export default function CountRisk() {
    return (
        <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {summaryCards.map((card) => (
                <SummaryCard key={card.title} {...card} />
            ))}
        </section>
    );
}