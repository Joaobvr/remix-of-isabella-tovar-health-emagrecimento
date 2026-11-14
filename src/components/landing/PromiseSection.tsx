import { ShieldCheck, Heart, Zap } from "lucide-react";

const reinforcements = [
  { icon: Heart, text: "Sem sofrimento extremo" },
  { icon: ShieldCheck, text: "Sem métodos radicais" },
  { icon: Zap, text: "Sem comprometer a saúde" },
];

const PromiseSection = () => (
  <section className="section-padding">
    <div className="max-w-4xl mx-auto text-center">
      <div className="animate-on-scroll">
        <span className="text-sm font-body tracking-[0.2em] uppercase text-gold mb-4 block">
          Nossa proposta
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading leading-tight mb-8 text-foreground">
          Um emagrecimento <span className="italic text-primary">saudável, consistente e duradouro</span> — com preservação da sua massa muscular, da sua disposição e da sua autoestima.
        </h2>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
        {reinforcements.map(({ icon: Icon, text }) => (
          <div key={text} className="animate-on-scroll flex items-center gap-3 bg-card rounded-full px-6 py-3 border border-border/60">
            <Icon className="w-5 h-5 text-primary shrink-0" />
            <span className="font-body text-sm text-foreground">{text}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PromiseSection;
