import React from 'react';
import { Globe, FileText, CheckCircle, Users, Zap } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, bullets }) => (
  <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
    <div className="h-10 w-10 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
      <Icon size={18} />
    </div>
    <h3 className="mt-4 font-semibold text-lg">{title}</h3>
    <p className="mt-1 text-slate-600 text-sm">{description}</p>
    {bullets && (
      <ul className="mt-4 space-y-2 text-sm text-slate-700">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2">
            <CheckCircle size={16} className="text-emerald-600 mt-0.5" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    )}
  </div>
);

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight">Automate compliance. Prove compliance.</h2>
          <p className="mt-3 text-slate-600">PrivMate covers the essentials for GDPR, CCPA, and India DPDP with guided workflows anyone can follow.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={Globe}
            title="Website Data Scanner"
            description="Discover data-collecting scripts and map personal data flows across your stack."
            bullets={[
              'Detect GA, Meta Pixel, and custom scripts',
              'Visual data flow map',
              'Auto-updates on rescans'
            ]}
          />
          <FeatureCard
            icon={Zap}
            title="Consent Management"
            description="Region-aware banners that block trackers until consent is given—fully logged."
            bullets={[
              'GDPR/CCPA/DPDP modes',
              'Auto-block until consent',
              'Exportable consent logs'
            ]}
          />
          <FeatureCard
            icon={Users}
            title="DSAR Workflows"
            description="Intake, review, fulfill, and document DSARs in one place with evidence trails."
            bullets={[
              'Access/Delete/Rectify',
              'Guided source discovery',
              'Timestamped audit trail'
            ]}
          />
          <FeatureCard
            icon={FileText}
            title="Docs & Reporting"
            description="Generate policies, notices, and audit-ready reports that stay in sync."
            bullets={[
              'Privacy policy templates',
              'Internal data maps',
              'PDF/CSV exports'
            ]}
          />
        </div>
        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          <div className="rounded-xl border border-slate-200 p-6">
            <h4 className="font-semibold">Who it’s for</h4>
            <ul className="mt-3 text-sm text-slate-700 space-y-2">
              <li className="flex items-start gap-2"><CheckCircle size={16} className="text-emerald-600 mt-0.5" /> SMBs in e‑commerce, D2C, SaaS, and services</li>
              <li className="flex items-start gap-2"><CheckCircle size={16} className="text-emerald-600 mt-0.5" /> Agencies managing multiple sites</li>
              <li className="flex items-start gap-2"><CheckCircle size={16} className="text-emerald-600 mt-0.5" /> Privacy consultants running client programs</li>
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 p-6">
            <h4 className="font-semibold">Why now</h4>
            <ul className="mt-3 text-sm text-slate-700 space-y-2">
              <li className="flex items-start gap-2"><CheckCircle size={16} className="text-emerald-600 mt-0.5" /> Expanding global privacy laws and AI transparency</li>
              <li className="flex items-start gap-2"><CheckCircle size={16} className="text-emerald-600 mt-0.5" /> Enterprise tools are too complex and costly</li>
              <li className="flex items-start gap-2"><CheckCircle size={16} className="text-emerald-600 mt-0.5" /> Trust is a customer differentiator</li>
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 p-6">
            <h4 className="font-semibold">Design principles</h4>
            <ul className="mt-3 text-sm text-slate-700 space-y-2">
              <li className="flex items-start gap-2"><CheckCircle size={16} className="text-emerald-600 mt-0.5" /> Transparency over complexity</li>
              <li className="flex items-start gap-2"><CheckCircle size={16} className="text-emerald-600 mt-0.5" /> Automation with control</li>
              <li className="flex items-start gap-2"><CheckCircle size={16} className="text-emerald-600 mt-0.5" /> Evidence-first auditability</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
