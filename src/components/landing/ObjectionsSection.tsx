import { X } from "lucide-react";

const objections = [
  { not: "Não é mais uma dieta restritiva", is: "É um plano alimentar personalizado que respeita seu corpo e sua rotina." },
  { not: "Não é um protocolo genérico", is: "É uma estratégia individualizada, baseada nos seus exames e na sua biologia." },
  { not: "Não é sobre emagrecer rápido", is: "É sobre emagrecer certo — com saúde, consistência e resultados duradouros." },
];

const ObjectionsSection = () => (
  <section className="section-padding bg-card">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16 animate-on-scroll">
        <h2 className="text-3xl md:text-4xl font-heading mb-4 text-foreground">
          O que nos diferencia
        </h2>
        <div className="w-16 h-[2px] bg-gold mx-auto" />
      </div>

      <div className="space-y-6">
        {objections.map(({ not, is }, i) => (
          <div
            key={not}
            className="animate-on-scroll bg-background rounded-2xl p-8 border border-border/60"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                <X className="w-3.5 h-3.5 text-secondary" />
              </div>
              <p className="font-heading text-lg text-foreground">{not}</p>
            </div>
            <p className="text-muted-foreground font-body leading-relaxed ml-9">{is}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ObjectionsSection;
