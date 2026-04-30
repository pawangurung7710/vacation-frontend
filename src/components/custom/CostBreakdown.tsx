import React from "react";
import { CostItemInfo } from "@/types/trek";
import { CheckCircle2, XCircle } from "lucide-react";

interface CostBreakdownProps {
  included: string[];
  excluded: string[];
  estimateBreakdown: CostItemInfo[];
  totalCostUSD: number;
}

export default function CostBreakdown({
  included,
  excluded,
  estimateBreakdown,
  totalCostUSD,
}: CostBreakdownProps) {
  return (
    <div className="w-full space-y-8" id="cost-breakdown">
      <div className="bg-white rounded-2xl shadow-sm border border-border-subtle p-6 lg:p-8">
        <h3 className="text-3xl font-serif font-bold text-primary-text mb-6">
          Transparent Cost Breakdown
        </h3>
        
        {/* SEO Data Table for AI Snippets */}
        <div className="mb-8 overflow-hidden rounded-xl border border-border-subtle">
          <table className="w-full text-left text-sm text-primary-text">
            <caption className="sr-only">Detailed Everest Base Camp Trek Cost Breakdown Table</caption>
            <thead className="bg-[#F8FAFC] border-b border-border-subtle uppercase text-xs tracking-wider">
              <tr>
                <th scope="col" className="px-6 py-4 font-bold text-[#1E3A5F]">Category</th>
                <th scope="col" className="px-6 py-4 font-bold text-[#1E3A5F]">Description</th>
                <th scope="col" className="px-6 py-4 font-bold text-[#1E3A5F] text-right">Estimated USD</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-subtle bg-white">
              {estimateBreakdown.map((item, idx) => (
                <tr key={idx} className="hover:bg-[#F8FAFC]/50 transition-colors">
                  <td className="px-6 py-4 font-semibold">{item.category}</td>
                  <td className="px-6 py-4 text-primary-text/80">{item.description}</td>
                  <td className="px-6 py-4 text-right font-bold text-[#F59E0B]">
                    ${item.amountUSD}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-[#1E3A5F] text-white">
              <tr>
                <th scope="row" colSpan={2} className="px-6 py-4 text-right font-bold">Total Package Price:</th>
                <td className="px-6 py-4 text-right font-bold text-xl">${totalCostUSD}</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {/* Included */}
          <div>
            <h4 className="text-xl font-bold text-[#1E3A5F] mb-4 flex items-center gap-2">
              <CheckCircle2 className="text-[#F59E0B]" size={24} />
              What's Included
            </h4>
            <ul className="space-y-3">
              {included.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-primary-text/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Excluded */}
          <div>
            <h4 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
              <XCircle className="text-red-600" size={24} />
              What's Not Included
            </h4>
            <ul className="space-y-3">
              {excluded.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-primary-text/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
