import { Frown, TrendingDown, Battery, Dumbbell } from "lucide-react";

const pains = [
  { icon: TrendingDown, title: "Efeito sanfona", text: "Emagrece e engorda de novo — um ciclo exaustivo que parece não ter fim." },
  { icon: Battery, title: "Cansaço constante", text: "Falta de energia e disposição que afeta sua rotina e qualidade de vida." },
  { icon: Dumbbell, title: "Perda de massa muscular", text: "Flacidez e perda de tônus que comprometem sua autoestima e saúde." },
  { icon: Frown, title: "Protocolos genéricos", text: "Dietas e tratamentos que não consideram sua individualidade." },
];

const PainSection = () => (
  <section className="section-padding bg-card">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16 animate-on-scroll">
        <h2 className="text-3xl md:text-4xl font-heading mb-4 text-foreground">
          Você se identifica?
        </h2>
        <div className="w-16 h-[2px] bg-gold mx-auto" />
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-16">
        {pains.map(({ icon: Icon, title, text }) => (
          <div key={title} className="animate-on-scroll bg-background rounded-xl p-5 border border-border/60 hover:border-rose/40 transition-colors duration-300">
            <div className="w-9 h-9 rounded-full bg-rose/15 flex items-center justify-center mb-3">
              <Icon className="w-4 h-4 text-secondary" />
            </div>
            <h3 className="font-heading text-base mb-1 text-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground font-body leading-relaxed">{text}</p>
          </div>
        ))}
      </div>

      <div className="animate-on-scroll max-w-2xl mx-auto text-center">
        <blockquote className="text-xl md:text-2xl font-heading italic text-primary leading-relaxed">
          "Se você já tentou emagrecer e sentiu que seu corpo não responde, o problema não é falta de esforço — é falta de estratégia personalizada."
        </blockquote>
      </div>
    </div>
  </section>
);

export default PainSection;
