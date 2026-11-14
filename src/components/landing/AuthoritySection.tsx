import { FlaskConical, Fingerprint, MonitorCheck, FileBarChart } from "lucide-react";

const pillars = [
  { icon: FlaskConical, title: "Base científica", desc: "Cada protocolo é fundamentado em evidências médicas atualizadas." },
  { icon: Fingerprint, title: "Individualização", desc: "Nenhum paciente é igual — seu tratamento também não deve ser." },
  { icon: MonitorCheck, title: "Monitoramento constante", desc: "Acompanhamento próximo em cada etapa do processo." },
  { icon: FileBarChart, title: "Dados e exames", desc: "Cada decisão é baseada em dados, exames e acompanhamento próximo." },
];

const AuthoritySection = () => (
  <section className="section-padding">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16 animate-on-scroll">
        <span className="text-sm font-body tracking-[0.2em] uppercase text-gold mb-4 block">
          Segurança e confiança
        </span>
        <h2 className="text-3xl md:text-4xl font-heading mb-4 text-foreground">
          Sua saúde em boas mãos
        </h2>
        <div className="w-16 h-[2px] bg-gold mx-auto" />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map(({ icon: Icon, title, desc }, i) => (
          <div key={title} className="animate-on-scroll text-center" style={{ transitionDelay: `${i * 80}ms` }}>
            <div className="w-14 h-14 rounded-2xl bg-primary/8 flex items-center justify-center mx-auto mb-4">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-lg mb-2 text-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground font-body leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AuthoritySection;
