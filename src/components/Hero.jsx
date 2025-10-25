import React from 'react';
import { CheckCircle, Globe, BarChart3, Lock, ArrowRight } from 'lucide-react';

const Stat = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-3">
    <div className="h-10 w-10 rounded-lg bg-white shadow ring-1 ring-slate-200 flex items-center justify-center text-slate-900">
      <Icon size={18} />
    </div>
    <div>
      <div className="text-xs uppercase tracking-wider text-slate-500">{label}</div>
      <div className="font-semibold">{value}</div>
    </div>
  </div>
);

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50/60 via-white to-white" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 ring-1 ring-indigo-200 text-xs font-medium mb-4">
              Built for SMBs • GDPR • CCPA • DPDP
            </div>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
              Privacy compliance made simple for SMBs
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl">
              PrivMate automates consent collection, DSAR workflows, and privacy documentation so your team can stay compliant without a lawyer or IT department.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a id="get-started" href="#pricing" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-slate-900 text-white hover:bg-slate-800">
                Start free
                <ArrowRight size={18} />
              </a>
              <a href="#" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md border border-slate-300 text-slate-800 bg-white hover:bg-slate-50">
                Book a demo
              </a>
            </div>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <Stat icon={Globe} label="Regions supported" value="EU • US • India" />
              <Stat icon={BarChart3} label="Consent logs" value="> 10,000 / 3 mo" />
              <Stat icon={CheckCircle} label="Avg. DSAR time saved" value="50%" />
              <Stat icon={Lock} label="Security" value="AES-256 + RBAC" />
            </div>
          </div>
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-xl ring-1 ring-slate-200 p-6">
              <div className="text-sm text-slate-500 mb-3">Live preview</div>
              <div className="rounded-lg border border-slate-200 overflow-hidden">
                <div className="bg-slate-50 px-4 py-3 flex items-center gap-2 text-xs text-slate-600">
                  <div className="h-2 w-2 rounded-full bg-red-400" />
                  <div className="h-2 w-2 rounded-full bg-yellow-400" />
                  <div className="h-2 w-2 rounded-full bg-green-400" />
                  <span className="ml-2">yourstore.com</span>
                </div>
                <div className="p-6">
                  <div className="rounded-md border border-slate-200 p-4 flex items-start gap-4">
                    <div className="h-9 w-9 flex items-center justify-center rounded-md bg-slate-900 text-white">
                      <Lock size={18} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">We value your privacy</h3>
                      <p className="text-sm text-slate-600 mt-1">We use cookies to enhance your experience, analyze traffic, and for security. Choose your preferences.</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <button className="px-3 py-1.5 text-sm rounded-md border border-slate-300 bg-white hover:bg-slate-50">Reject all</button>
                        <button className="px-3 py-1.5 text-sm rounded-md bg-slate-900 text-white hover:bg-slate-800">Accept all</button>
                        <button className="px-3 py-1.5 text-sm rounded-md border border-slate-300 bg-white hover:bg-slate-50">Customize</button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 grid sm:grid-cols-2 gap-4">
                    <div className="rounded-md border border-slate-200 p-4">
                      <div className="text-xs uppercase tracking-wider text-slate-500">Data mapping</div>
                      <div className="mt-2 h-24 rounded bg-slate-100" />
                    </div>
                    <div className="rounded-md border border-slate-200 p-4">
                      <div className="text-xs uppercase tracking-wider text-slate-500">DSAR queue</div>
                      <ul className="mt-2 space-y-2 text-sm">
                        <li className="flex items-center justify-between"><span>#4573 Export data</span><span className="inline-flex text-xs px-2 py-0.5 rounded bg-emerald-50 text-emerald-700">Completed</span></li>
                        <li className="flex items-center justify-between"><span>#4574 Delete data</span><span className="inline-flex text-xs px-2 py-0.5 rounded bg-amber-50 text-amber-700">Pending</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 -top-8 -right-8 h-48 w-48 rounded-full bg-indigo-200/40 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
