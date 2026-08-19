import React from 'react';
import { 
  ShieldCheck, 
  Bus, Headphones, CreditCard, CheckCircle2
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '../ui/card';
import { Badge } from '../ui/badge';

export default function WhyUs({ t, lang = 'uz' }) {
  const icons = [Bus, ShieldCheck, Headphones, CreditCard];

  return (
    <section id="why-us" className="py-16 sm:py-24 relative overflow-hidden bg-slate-50 border-t border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-700 text-xs font-black uppercase tracking-wider">
            <span>{t.whyUs?.badge || (lang === 'ru' ? 'Наши Преимущества' : lang === 'en' ? 'Our Advantages' : 'Kafolatlangan Sifat')}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            {t.whyUs.title1} <br />
            <span className="text-emerald-600">
              {t.whyUs.title2}
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium max-w-2xl mx-auto leading-relaxed">
            {t.whyUs.desc}
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.whyUs.pillars.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <Card
                key={index}
                className="flex flex-col justify-between group hover:shadow-xl hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-2 cursor-pointer bg-white border border-slate-200"
              >
                <div>
                  <CardHeader className="p-6 pb-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-4 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="mb-2">
                      <Badge className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold uppercase tracking-wider">
                        {item.badge}
                      </Badge>
                    </div>

                    <CardTitle className="text-lg font-bold text-slate-900 leading-snug">
                      {item.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="p-6 pt-0">
                    <CardDescription className="text-xs text-slate-600 leading-relaxed font-medium">
                      {item.desc}
                    </CardDescription>
                  </CardContent>
                </div>

                <CardFooter className="p-6 pt-4 border-t border-slate-100 mt-auto flex items-center gap-1.5 text-xs font-bold text-emerald-600">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{t.whyUs.guaranteeTag || (lang === 'ru' ? '100% Официально' : lang === 'en' ? '100% Official' : '100% Rasmiy')}</span>
                </CardFooter>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}
