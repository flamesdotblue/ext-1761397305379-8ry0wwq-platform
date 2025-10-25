import React from 'react';
import { CheckCircle, Shield } from 'lucide-react';

const Tier = ({ name, price, description, features, highlight }) => (
  <div className={`relative rounded-2xl border ${highlight ? 'border-slate-900' : 'border-slate-200'} bg-white p-6 shadow-sm flex flex-col`}>
    {highlight && (
      <div className="absolute -top-3 left-4 inline-flex items-center gap-2 rounded-full bg-slate-900 text-white text-xs px-3 py-1">
        <Shield size={14} /> Recommended
      </div>
    )}
    <h3 className="text-lg font-semibold">{name}</h3>
    <p className="mt-1 text-sm text-slate-600">{description}</p>
    <div className="mt-4 flex items-baseline gap-1">
      <span className="text-3xl font-semibold">{price}</span>
      {price !== 'Custom' && <span className="text-slate-500">/mo</span>}
    </div>
    <ul className="mt-4 space-y-2 text-sm text-slate-700">
      {features.map((f, i) => (
        <li key={i} className="flex items-start gap-2">
          <CheckCircle size={16} className="text-emerald-600 mt-0.5" />
          <span>{f}</span>
        </li>
      ))}
    </ul>
    <a href="#get-started" className={`mt-6 inline-flex items-center justify-center rounded-md px-4 py-2 ${highlight ? 'bg-slate-900 text-white hover:bg-slate-800' : 'border border-slate-300 text-slate-800 hover:bg-slate-50'}`}>
      {highlight ? 'Start free trial' : 'Get started'}
    </a>
  </div>
);

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold tracking-tight">Simple, scalable pricing</h2>
          <p className="mt-3 text-slate-600">Start free. Upgrade as you grow. All plans include secure audit trails and exportable reports.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Tier
            name="Free"
            price="$0"
            description="For testing and small sites getting started with compliance."
            features={[
              '1 domain',
              'Cookie banner + consent logs',
              'Basic scanner (monthly)'
            ]}
          />
          <Tier
            name="Pro"
            price="$99"
            description="For SMBs needing DSAR workflows and documentation."
            features={[
              'Up to 5 domains',
              'Region-aware consent + auto-blocking',
              'DSAR intake + admin workflow',
              'Policy & notice templates',
              'Email alerts'
            ]}
            highlight
          />
          <Tier
            name="Agency"
            price="$299"
            description="For agencies and consultants managing multiple clients."
            features={[
              'Multi-tenant client management',
              'White labeling',
              'Team roles & permissions',
              'Priority support'
            ]}
          />
        </div>
        <div className="mt-8 text-center text-sm text-slate-600">
          Need custom integrations, AI data discovery, or SLAs? <a href="#" className="text-slate-900 hover:underline">Contact sales</a> for Enterprise.
        </div>
      </div>
    </section>
  );
};

export default Pricing;
