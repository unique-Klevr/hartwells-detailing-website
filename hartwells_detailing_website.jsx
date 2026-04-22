export default function HartwellsDetailingWebsite() {
  const services = [
    {
      title: "Exterior Detail",
      desc: "Hand wash, wheel cleaning, tire shine, glass cleaning, and finishing touches for a fresh curb appeal.",
      icon: "🚘",
    },
    {
      title: "Interior Detail",
      desc: "Vacuuming, wipe-downs, interior refresh, and attention to the spots that collect everyday mess.",
      icon: "✨",
    },
    {
      title: "Full Detail",
      desc: "A complete inside-and-out detail package for drivers who want the full clean-up treatment.",
      icon: "🫧",
    },
    {
      title: "Maintenance Wash",
      desc: "Simple upkeep washes to keep your vehicle looking good between full detail appointments.",
      icon: "🧼",
    },
  ];

  const perks = [
    "Best touch in town",
    "Locally owned by Terrence & Gloria Hartwell",
    "Professional, clean, polished service",
    "Easy phone, email, and web contact options",
  ];

  const pricing = [
    {
      name: "Quick Clean",
      price: "Call for pricing",
      features: ["Exterior wash", "Glass touch-up", "Tire finish", "Fast refresh"],
      featured: false,
    },
    {
      name: "Signature Detail",
      price: "Most Popular",
      features: ["Interior + exterior detail", "Vacuum and wipe-down", "Shine finish", "Great for weekly upkeep"],
      featured: true,
    },
    {
      name: "Full Service",
      price: "Custom quote",
      features: ["Deep clean package", "Interior attention", "Exterior finish", "Ideal for full reset"],
      featured: false,
    },
  ];

  const testimonials = [
    {
      name: "Happy Customer",
      role: "Alexandria, LA",
      quote: "Professional, friendly, and my vehicle looked way better when they were done. Real good work.",
    },
    {
      name: "Local Driver",
      role: "Repeat Client",
      quote: "Easy to reach, easy to book, and they really care about doing the job right.",
    },
    {
      name: "Community Supporter",
      role: "Satisfied Customer",
      quote: "You can tell they take pride in what they do. Clean, polished, and dependable service.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#cfe0ea] text-[#102019]">
      <div className="mx-auto max-w-[1400px] px-4 py-6 md:px-8 md:py-10">
        <div className="overflow-hidden rounded-[2rem] bg-[#0a1714] shadow-2xl ring-1 ring-black/10">
          <header className="border-b border-white/10 bg-[#0a1714]/95 text-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
              <div>
                <div className="text-xs uppercase tracking-[0.35em] text-[#b9c9a4]">Hartwell's</div>
                <div className="text-2xl font-semibold tracking-wide">Detailing</div>
              </div>

              <nav className="hidden gap-8 text-sm md:flex">
                <a href="#services" className="transition hover:text-[#d4e87c]">Services</a>
                <a href="#about" className="transition hover:text-[#d4e87c]">About</a>
                <a href="#pricing" className="transition hover:text-[#d4e87c]">Pricing</a>
                <a href="#contact" className="transition hover:text-[#d4e87c]">Contact</a>
              </nav>

              <a
                href="tel:3374240701"
                className="rounded-full border border-[#d4e87c]/40 bg-[#7f8f61]/30 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-[#7f8f61]/45"
              >
                📞 337-424-0701
              </a>
            </div>
          </header>

          <section className="relative overflow-hidden bg-[#091411] text-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(180,206,129,0.18),transparent_30%),linear-gradient(to_right,rgba(0,0,0,0.8),rgba(0,0,0,0.28))]" />
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />

            <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:px-10 md:py-24">
              <div className="max-w-xl">
                <div className="mb-4 text-sm uppercase tracking-[0.35em] text-[#b9c9a4]">Best touch in town</div>
                <h1 className="text-5xl font-semibold leading-none tracking-tight sm:text-6xl md:text-7xl">
                  Wipe It <span className="text-[#d4e87c]">Good</span>!!
                </h1>
                <p className="mt-5 text-lg text-white/80 md:text-xl">
                  Premium car detailing with a polished local feel. Clean rides, sharp finish, and real attention to detail.
                </p>

                <div className="mt-8 grid gap-3 text-sm text-white/90 sm:grid-cols-2">
                  <div>📞 337-424-0701</div>
                  <div>✉️ ghartwell263@gmail.com</div>
                  <div>🌐 HartwellsDetailing.com</div>
                  <div>📍 2204 Lee St Ext, Alexandria, LA 71302</div>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#contact"
                    className="rounded-full bg-[#7f8f61] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#92a470]"
                  >
                    Book Your Detail
                  </a>
                  <a
                    href="#services"
                    className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    View Services
                  </a>
                </div>
              </div>

              <div className="flex items-end justify-center md:justify-end">
                <div className="w-full max-w-md rounded-[2rem] border border-white/10 bg-white/8 p-6 backdrop-blur-md">
                  <div className="text-sm uppercase tracking-[0.25em] text-[#d4e87c]">Owners</div>
                  <h2 className="mt-2 text-2xl font-semibold">Terrence & Gloria Hartwell</h2>
                  <p className="mt-3 text-sm leading-6 text-white/75">
                    Hartwell's Detailing brings a clean, professional finish to vehicles in Alexandria with service built around pride, presentation, and customer care.
                  </p>
                  <div className="mt-6 grid gap-3 text-sm text-white/85">
                    {perks.map((perk) => (
                      <div key={perk} className="flex items-center gap-3">
                        <span className="text-[#d4e87c]">✓</span>
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="services" className="bg-[#eef3f4] px-6 py-16 md:px-10 md:py-20">
            <div className="mx-auto max-w-7xl">
              <div className="mb-10 grid gap-6 md:grid-cols-[1.2fr,0.8fr] md:items-end">
                <div>
                  <div className="text-sm uppercase tracking-[0.35em] text-[#73845b]">Our washes & details</div>
                  <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">Have a look at our services</h2>
                </div>
                <p className="max-w-xl text-base leading-7 text-[#425249]">
                  Built to feel premium, local, and trustworthy. This layout follows the look you liked while being tailored to Hartwell's Detailing.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {services.map((service) => (
                  <div key={service.title} className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl">
                    <div className="mb-4 text-4xl">{service.icon}</div>
                    <h3 className="text-2xl font-semibold">{service.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#58675f]">{service.desc}</p>
                    <button className="mt-6 rounded-full bg-[#0d1b18] px-4 py-2 text-sm font-medium text-white">
                      Learn More
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="about" className="bg-[#0c1715] px-6 py-16 text-white md:px-10 md:py-20">
            <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr,1.05fr]">
              <div className="rounded-[2rem] bg-[linear-gradient(135deg,#121f1c,#1f2f2a)] p-8 shadow-xl">
                <div className="text-sm uppercase tracking-[0.35em] text-[#b9c9a4]">Why choose us</div>
                <h2 className="mt-3 text-4xl font-semibold">Why Hartwell's Detailing?</h2>
                <div className="mt-6 grid gap-4 text-sm text-white/80">
                  <div>✅ Local business with a polished brand feel</div>
                  <div>✅ Service-first approach and clean presentation</div>
                  <div>✅ Easy to call, email, and book</div>
                  <div>✅ Strong fit for a premium detailing website</div>
                </div>
              </div>

              <div className="rounded-[2rem] bg-[#eef3f4] p-8 text-[#13211a] shadow-xl">
                <div className="text-sm uppercase tracking-[0.35em] text-[#73845b]">About us</div>
                <h2 className="mt-3 text-4xl font-semibold">Best touch in town, with a local name behind it</h2>
                <p className="mt-5 text-base leading-8 text-[#516158]">
                  Hartwell's Detailing is positioned as a clean, modern detailing brand serving Alexandria, Louisiana. This site gives them a stronger digital presence with a premium look, while keeping the local contact info and owner-led trust front and center.
                </p>
                <div className="mt-6 rounded-2xl border border-[#d6e0da] bg-white p-5 text-sm text-[#425249]">
                  Ideal next move: plug in real service packages, before/after photos, and a simple booking form or call-to-action funnel.
                </div>
              </div>
            </div>
          </section>

          <section id="pricing" className="bg-[#eef3f4] px-6 py-16 md:px-10 md:py-20">
            <div className="mx-auto max-w-7xl">
              <div className="mb-10 text-center">
                <div className="text-sm uppercase tracking-[0.35em] text-[#73845b]">Pricing section</div>
                <h2 className="mt-3 text-4xl font-semibold md:text-5xl">Carwash pricing</h2>
                <p className="mx-auto mt-4 max-w-2xl text-[#56655d]">
                  I kept this in the same visual rhythm as the inspiration. We can swap these placeholders for real package names and exact prices.
                </p>
              </div>

              <div className="grid gap-6 lg:grid-cols-3">
                {pricing.map((tier) => (
                  <div
                    key={tier.name}
                    className={`rounded-[2rem] p-8 shadow-sm ring-1 ring-black/5 ${
                      tier.featured ? 'bg-[#0c1715] text-white' : 'bg-white text-[#13211a]'
                    }`}
                  >
                    <div className={`text-sm uppercase tracking-[0.35em] ${tier.featured ? 'text-[#d4e87c]' : 'text-[#73845b]'}`}>
                      {tier.featured ? 'Featured' : 'Package'}
                    </div>
                    <h3 className="mt-4 text-3xl font-semibold">{tier.name}</h3>
                    <div className={`mt-3 text-lg ${tier.featured ? 'text-white/80' : 'text-[#5b6a62]'}`}>{tier.price}</div>
                    <div className={`my-6 h-px ${tier.featured ? 'bg-white/15' : 'bg-black/10'}`} />
                    <div className="grid gap-3 text-sm">
                      {tier.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <span className={tier.featured ? 'text-[#d4e87c]' : 'text-[#73845b]'}>✓</span>
                          <span className={tier.featured ? 'text-white/85' : 'text-[#4d5d54]'}>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <button
                      className={`mt-8 rounded-full px-5 py-3 text-sm font-semibold ${
                        tier.featured ? 'bg-[#7f8f61] text-white' : 'bg-[#0d1b18] text-white'
                      }`}
                    >
                      View Package
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-[#0b1613] px-6 py-16 text-white md:px-10 md:py-20">
            <div className="mx-auto max-w-7xl">
              <div className="mb-10 text-center">
                <div className="text-sm uppercase tracking-[0.35em] text-[#b9c9a4]">Our happy clients</div>
                <h2 className="mt-3 text-4xl font-semibold md:text-5xl">Reviews that build trust</h2>
              </div>

              <div className="grid gap-6 lg:grid-cols-3">
                {testimonials.map((item) => (
                  <div key={item.name + item.role} className="rounded-[2rem] bg-[#eef3f4] p-8 text-[#13211a] shadow-xl">
                    <div className="mb-4 text-xl text-[#e1ab29]">★★★★★</div>
                    <p className="text-base leading-8 text-[#44554c]">“{item.quote}”</p>
                    <div className="mt-6">
                      <div className="font-semibold">{item.name}</div>
                      <div className="text-sm text-[#67776e]">{item.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <footer id="contact" className="bg-[#091411] px-6 py-14 text-white md:px-10">
            <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
              <div>
                <div className="text-xs uppercase tracking-[0.35em] text-[#b9c9a4]">Hartwell's</div>
                <div className="mt-2 text-2xl font-semibold">Detailing</div>
                <p className="mt-4 max-w-sm text-sm leading-7 text-white/70">
                  Clean design, local trust, and a stronger online presence for a business that deserves to look premium.
                </p>
              </div>

              <div>
                <div className="text-sm uppercase tracking-[0.3em] text-[#b9c9a4]">Contact Info</div>
                <div className="mt-4 grid gap-3 text-sm text-white/85">
                  <a href="tel:3374240701" className="hover:text-[#d4e87c]">337-424-0701</a>
                  <a href="mailto:ghartwell263@gmail.com" className="hover:text-[#d4e87c]">ghartwell263@gmail.com</a>
                  <a href="https://www.HartwellsDetailing.com" className="hover:text-[#d4e87c]">www.HartwellsDetailing.com</a>
                  <div>2204 Lee St Ext, Alexandria, LA 71302</div>
                </div>
              </div>

              <div>
                <div className="text-sm uppercase tracking-[0.3em] text-[#b9c9a4]">Quick CTA</div>
                <p className="mt-4 text-sm leading-7 text-white/70">
                  Ready to turn this into the full site? Next step is plugging in real photos, service pricing, booking flow, and domain launch details.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="tel:3374240701" className="rounded-full bg-[#d4e87c] px-5 py-3 text-sm font-semibold text-[#112117]">
                    Call Now
                  </a>
                  <a href="mailto:ghartwell263@gmail.com" className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white">
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
