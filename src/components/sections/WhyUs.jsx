import React from 'react';
import { 
  ShieldCheck, 
  Plane, Headphones, CreditCard, CheckCircle2
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '../ui/card';
import { Badge } from '../ui/badge';

export default function WhyUs({ t }) {
  const icons = [Plane, ShieldCheck, Headphones, CreditCard];

  return (
    <section id="why-us" className="py-24 relative overflow-hidden bg-white border-t border-slate-200">
      
      {/* 100% Pure, Crystal-Clear Shahrisabz Oqsaroy Background - ZERO OPACITY & NO BLACK BORDERS */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/images/landmarks/oqsaroy-shahrisabz.png"
          alt="Shahrisabz Oqsaroy Historic Monument"
          className="w-full h-full object-cover object-center scale-125"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header in Glass Card */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-3">
          <div className="inline-block p-4 sm:p-8 rounded-3xl bg-white/95 backdrop-blur-md border border-white/80 shadow-xl space-y-3">
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              {t.whyUs.title1} <br />
              <span className="text-[#10b981]">
                {t.whyUs.title2}
              </span>
            </h2>
            <p className="text-slate-700 text-sm sm:text-base font-medium">
              {t.whyUs.desc}
            </p>
          </div>
        </div>

        {/* Feature Cards Grid with shadcn/ui Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.whyUs.pillars.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <Card
                key={index}
                className="flex flex-col justify-between group hover:shadow-xl hover:border-[#10b981]/50 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                <div>
                  <CardHeader className="p-6 pb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#ecfdf5] border border-[#a7f3d0] flex items-center justify-center text-[#10b981] mb-4 group-hover:scale-110 group-hover:bg-[#10b981] group-hover:text-white transition-all shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="mb-2">
                      <Badge variant="emeraldSubtle" className="text-[10px] font-bold uppercase tracking-wider">
                        {item.badge}
                      </Badge>
                    </div>

                    <CardTitle className="text-lg font-bold text-slate-900 leading-snug">
                      {item.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="p-6 pt-0">
                    <CardDescription className="text-xs text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </CardDescription>
                  </CardContent>
                </div>

                <CardFooter className="p-6 pt-4 border-t border-slate-100 mt-auto flex items-center gap-1.5 text-xs font-bold text-[#10b981]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{t.whyUs.guaranteeTag}</span>
                </CardFooter>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}
