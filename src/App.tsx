import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  TrendingUp, 
  Zap, 
  ShieldAlert, 
  Users, 
  MapPin, 
  MessageSquare, 
  Calendar, 
  ChevronDown,
  PlayCircle,
  Clock,
  Target,
  BarChart3,
  Smartphone,
  Search,
  Lock,
  ArrowUpRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-apple-gray-100 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-orange rounded-lg flex items-center justify-center">
            <Target className="text-white w-5 h-5" />
          </div>
          <span className="font-bold text-xl tracking-tighter">MoreGuests.in</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-apple-gray-400">
          <a href="#reality" className="hover:text-black transition-colors">The Reality</a>
          <a href="#protocol" className="hover:text-black transition-colors">The Protocol</a>
          <a href="#proof" className="hover:text-black transition-colors">Live Proof</a>
          <a href="#faq" className="hover:text-black transition-colors">FAQ</a>
        </div>
        <a 
          href="https://wa.me/918870092253?text=growguests"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brand-orange text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-all active:scale-95"
        >
          Free Audit
        </a>
      </div>
    </nav>
  );
};

const Section = ({ children, className = "", id = "" }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`py-24 px-6 ${className}`}>
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </section>
);

const Badge = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-apple-gray-100 text-apple-gray-400 mb-6 ${className}`}>
    {children}
  </span>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <Section className="pt-40 pb-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge className="bg-red-50 text-red-600">For Independent Resort & Hotel Owners in India</Badge>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-[1.1] tracking-tight">
            Stop Bleeding Money <br />
            <span className="text-apple-gray-300">on Empty Weekdays.</span>
          </h1>
          <p className="text-xl md:text-2xl text-apple-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            We Engineer Your Local Search Grid to Capture Competitor Traffic and Fill Your Rooms on Autopilot. 
            <span className="text-black font-semibold"> Stop surrendering 20% to MakeMyTrip</span> and watching inferior properties steal your mid-week bookings.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://wa.me/918870092253?text=growguests"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-brand-orange text-white px-8 py-5 rounded-2xl text-lg font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 group shadow-2xl shadow-brand-orange/20"
            >
              Claim Your Free Geo-Grid Audit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-sm text-apple-gray-300 font-medium">
              <span className="text-red-500">⚠ Only 3 Slots Per Region</span>
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-24 max-w-4xl mx-auto p-12 rounded-[40px] bg-apple-gray-50 border border-apple-gray-100 relative"
        >
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full border border-apple-gray-100 flex items-center justify-center shadow-sm">
            <MessageSquare className="w-6 h-6 text-brand-orange" />
          </div>
          <p className="text-2xl md:text-3xl font-medium text-apple-gray-400 leading-relaxed italic">
            "I know that look on a Tuesday morning. The rooms are clean, the garden is manicured, and the staff is on the clock—but the ledger is bone-dry. You’ve built a premium property with 200+ five-star ratings, yet you are currently trapped in a cycle of <span className="text-black font-bold">"Hope Marketing."</span> Seeing that mediocre competitor's hotel are being fully booked just because Google has put them on the 3 spots of the GMB real Estate"
          </p>
        </motion.div>
      </Section>

      {/* The Brutal Reality */}
      <Section id="reality" className="bg-black text-white overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <Badge className="bg-white/10 text-white/60">The Brutal Reality</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            The Weekend Illusion: <br />
            <span className="text-white/40">Are You Running a Charity from Monday to Thursday?</span>
          </h2>
          <p className="text-lg text-white/60 mb-12 leading-relaxed">
            If your weekends are fully booked, but your digital ledger is completely empty by Tuesday morning, you are in the "Hospitality Trap." You’ve built a premium property, yet you are currently trapped in a cycle of "Hope Marketing."
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { 
                title: "FINANCIAL HEMORRHAGE", 
                desc: "The Payroll Bleed: Paying full-time staff to sit in an empty lobby for four days a week. Your fixed costs run regardless of occupancy.",
                icon: ShieldAlert
              },
              { 
                title: "20% PERMANENT TAX", 
                desc: "The OTA Extortion: Paying MakeMyTrip or Agoda a 20% tax on guests who already searched for your exact location. You are paying for customers you already earned.",
                icon: BarChart3
              },
              { 
                title: "ALGORITHMIC INVISIBILITY", 
                desc: "The Competitor Injustice: A competitor with smaller rooms, an older property, and worse service ranks #1 on Google Maps — purely because their digital backend is optimized.",
                icon: Search
              },
              {
                title: "10% AVERAGE MID-WEEK OCCUPANCY",
                desc: "The 'Ghost Town' effect: While your weekends are full, your Monday-Thursday ROI is being slaughtered by empty rooms.",
                icon: TrendingUp
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-sm tracking-widest uppercase mb-2 text-white/80">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Why Past Attempts Failed */}
      <Section className="bg-apple-gray-50">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Badge>Why Past Attempts Failed</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Your Current Marketing is Just a Bucket with a Hole in It</h2>
          <p className="text-xl text-apple-gray-400">You know you need weekday bookings, so you probably tried the standard "industry advice." Here is why it completely failed you.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              title: "Influencer Reels", 
              desc: "Got 100,000 views. But when those viewers searched your name, MMT intercepted them. You paid for their marketing.",
              icon: PlayCircle,
              tag: "Paid for their marketing"
            },
            { 
              title: "Meta / Google Ads", 
              desc: "You got into a bidding war against billion-dollar OTAs. The second you turned the ads off, bookings dropped to zero.",
              icon: TrendingUp,
              tag: "Rented Traffic"
            },
            { 
              title: "B2B Travel Agents", 
              desc: "You surrendered your profit margins just to get them to push your rooms. You traded one dependency for another.",
              icon: Users,
              tag: "Margin Suicide"
            },
            { 
              title: "WhatsApp Discounts", 
              desc: "You devalued your brand trying to squeeze returning guests. You trained them to wait for a discount.",
              icon: Smartphone,
              tag: "Brand Devaluation"
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-apple-gray-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-apple-gray-50 flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-4 line-through decoration-red-500/50 decoration-2">{item.title}</h3>
              <p className="text-apple-gray-400 text-sm leading-relaxed mb-6">{item.desc}</p>
              <div className="text-[10px] font-black uppercase tracking-widest text-red-500 bg-red-50 px-3 py-1 rounded-full inline-block">
                // {item.tag}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 rounded-[40px] bg-black text-white text-center relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">The Brutal Truth</h3>
            <p className="text-xl text-white/60">You cannot fix an algorithmic mapping problem with a pretty Instagram Reel.</p>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        </div>
      </Section>

      {/* The Proprietary System */}
      <Section id="protocol">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-brand-orange text-white">The Proprietary System</Badge>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight tracking-tighter">
              The Fix: The Geo-Grid <br />
              <span className="text-apple-gray-300">Occupancy Protocol</span>
            </h2>
            <p className="text-xl text-apple-gray-400 mb-12 leading-relaxed">
              We don't sell "SEO checklists" or run expensive Facebook ads. We deploy a <span className="text-black font-semibold">Continuous Algorithmic Defense System</span> around your digital real estate.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "FOUNDATION LAYER",
                subtitle: "Algorithmic Schema Injection",
                desc: "We restructure how Google reads your property data, forcing it to rank you for high-intent weekday searches. EXIF data injection, LSI schema seeding.",
                icon: Lock
              },
              {
                title: "ATTACK LAYER",
                subtitle: "Competitor Interception Protocol",
                desc: "We analyze the exact LSI keywords the #1 competitor is using to divert your bookings, then algorithmically seed them into profile to improve topical relevance.",
                icon: Zap
              },
              {
                title: "REVENUE CAPTURE",
                subtitle: "The Direct WhatsApp Funnel",
                desc: "We bypass the OTAs entirely — capturing the top 3 Organic Map Pack spots and funneling travelers directly to your front desk.",
                icon: MessageSquare
              }
            ].map((layer, i) => (
              <div key={i} className="relative pt-12 text-center">
                <div className="absolute left-1/2 -translate-x-1/2 top-0 w-8 h-8 rounded-full bg-apple-gray-50 border border-apple-gray-100 flex items-center justify-center text-xs font-bold">
                  0{i+1}
                </div>
                <div className="mb-2 text-[10px] font-black tracking-[0.2em] text-apple-gray-300 uppercase">{layer.title}</div>
                <h3 className="text-xl font-bold mb-3">{layer.subtitle}</h3>
                <p className="text-apple-gray-400 text-sm leading-relaxed">{layer.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Transformation Table */}
      <Section className="bg-black text-white">
        <div className="text-center mb-20">
          <Badge className="bg-white/10 text-white/60">The Transformation</Badge>
          <h2 className="text-4xl md:text-5xl font-bold">The Geo-Grid Shift</h2>
        </div>
        
        <div className="max-w-4xl mx-auto overflow-hidden rounded-[40px] border border-white/10 bg-white/5">
          <div className="grid grid-cols-2 border-b border-white/10">
            <div className="p-8 border-r border-white/10 bg-red-500/5">
              <h3 className="text-xl font-bold text-red-400 uppercase tracking-widest text-center">Before Protocol</h3>
            </div>
            <div className="p-8 bg-emerald-500/5">
              <h3 className="text-xl font-bold text-emerald-400 uppercase tracking-widest text-center">After Protocol</h3>
            </div>
          </div>
          {[
            ["10% Weekday Occupancy", "30% Increase in Weekday Occupancy"],
            ["20% Commission loss on every booking", "0% Commission on Direct-to-WhatsApp leads"],
            ["Hidden on Page 2 of Google Maps", "Permanent Top 3 \"Map Pack\" Authority"],
            ["Held hostage by OTA algorithm changes", "Owning a permanent digital \"Moat\""],
            ["Paying for \"Likes\" and \"Vibes\"", "Investing in a High-Yield Digital Asset"],
            ["Stressing about payroll on Tuesdays", "Confidence in your automated booking funnel"]
          ].map((row, i) => (
            <div key={i} className="grid grid-cols-2 border-b border-white/10 last:border-0">
              <div className="p-6 border-r border-white/10 text-center text-white/40 text-sm italic">{row[0]}</div>
              <div className="p-6 text-center text-white text-sm font-medium">{row[1]}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Stats Section */}
      <div className="py-12 bg-white border-y border-apple-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-12 md:gap-24">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-extrabold text-black mb-1">14+</span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-apple-gray-300">Years Experience</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-extrabold text-black mb-1">#1</span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-apple-gray-300">In Kodaikanal</span>
          </div>
        </div>
      </div>

      {/* Founder Story */}
      <Section id="proof" className="bg-apple-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge>The Founder's Story</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">The Engineer Who Hacked Hospitality</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6 text-apple-gray-400 leading-relaxed">
              <p>My journey didn't start in a hotel lobby; it started behind a computer screen. In my final year of studying <span className="text-black font-semibold">Computer Science Engineering</span>, I cracked the Google search algorithm.</p>
              <p>I spent the next few years mastering the digital battlefield, teaching entrepreneurs how to build actual wealth. But in 2016, I fell in love with the hospitality world. I wanted to build my own property, but I had zero background in hospitality.</p>
              <p>But I had one unfair advantage: <span className="text-black font-semibold">I knew exactly how to make Google send me paying customers.</span></p>
              <p>I built Starry Nights Glamping from scratch. I learned guest handling the hard way. And my digital strategy worked. Today, we are the #1 ranked glamping experience in Kodaikanal, bypassing OTA commissions entirely.</p>
              <p className="text-black font-bold">I am an engineer by trade, but I am a resort owner by execution. I built this exact system to save my own business. Now, I am deploying it for yours.</p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="group">
                <h4 className="font-bold text-[10px] uppercase tracking-widest mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                  Industry Educator
                </h4>
                <div className="aspect-[3/4] rounded-3xl bg-apple-gray-100 overflow-hidden border border-apple-gray-100 shadow-lg">
                  <img 
                    src="/api/files/file-1" 
                    alt="Industry Educator"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="mt-3 text-[10px] text-apple-gray-300 leading-tight">Trusted digital growth mentor across hospitality institutions.</p>
              </div>
              <div className="group">
                <h4 className="font-bold text-[10px] uppercase tracking-widest mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                  Live Proof
                </h4>
                <div className="aspect-[3/4] rounded-3xl bg-apple-gray-100 overflow-hidden border border-apple-gray-100 shadow-lg">
                  <img 
                    src="/api/files/file-0" 
                    alt="Live Proof Search Results"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="mt-3 text-[10px] text-apple-gray-300 leading-tight">Starry Nights Glamping ranks #1 for "kodaikanal resorts".</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Scarcity Section */}
      <Section className="text-center">
        <div className="max-w-4xl mx-auto p-16 rounded-[60px] bg-apple-gray-50 border border-apple-gray-100 relative overflow-hidden">
          <Badge className="bg-black text-white">Exclusive Partnerships Only</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">We Do Not Work With Everyone.</h2>
          <p className="text-xl text-apple-gray-400 mb-12">Because we manually monitor and defend our clients' search grids, we strictly limit our active partnerships. <span className="text-black font-bold">Only 3 positions available per market — ever.</span></p>
          
          <div className="grid md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-12">
            {[
              "Resorts / Hotels with 10+ rooms",
              "Properties with 150+ Google Reviews",
              "Owners tired of OTA hostage situations",
              "Owners ready to hand over technical reins"
            ].map((check, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-apple-gray-100">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="text-sm font-medium">{check}</span>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-3xl bg-red-50 border border-red-100 inline-block">
            <div className="flex items-center gap-3 text-red-600 font-bold mb-2">
              <ShieldAlert className="w-5 h-5" />
              Capacity Warning
            </div>
            <p className="text-sm text-red-500">There are only 3 Map Pack positions per search intent. Once filled, we cannot take more clients in your market.</p>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section id="faq" className="bg-apple-gray-50">
        <div className="text-center mb-20">
          <Badge>Every Doubt Answered</Badge>
          <h2 className="text-4xl md:text-5xl font-bold">Frequently Asked Questions</h2>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            { q: "How is this different from a regular SEO agency?", a: "Most agencies focus on 'rankings' and 'impressions'. We focus on the Geo-Grid infrastructure and direct-to-WhatsApp conversion. We are hospitality owners ourselves, so we optimize for occupancy, not just clicks." },
            { q: "Will I lose my OTA rankings if I do this?", a: "No. In fact, Google rewards properties with strong direct signals. By fixing your schema and metadata, you often see an lift across all platforms, but your direct bookings will grow much faster." },
            { q: "How long does it take to see results?", a: "Our protocol is a 45-day sprint. Most clients see significant movement in their Geo-Grid within the first 3 weeks, with direct booking volume stabilizing by week 6." },
            { q: "Do I need to give you my Google password?", a: "No. You simply add our professional account as a 'Manager' to your Google Business Profile. You maintain full ownership at all times." }
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-3xl border border-apple-gray-100 overflow-hidden">
              <button className="w-full p-8 text-left flex justify-between items-center group">
                <span className="text-lg font-bold group-hover:text-apple-gray-300 transition-colors">{item.q}</span>
                <ChevronDown className="w-5 h-5 text-apple-gray-200" />
              </button>
              <div className="px-8 pb-8 text-apple-gray-400 leading-relaxed">
                {item.a}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="pb-40">
        <div className="max-w-5xl mx-auto text-center">
          <Badge className="bg-emerald-50 text-emerald-600">Free 15-Minute Screen-Share</Badge>
          <h2 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tighter">
            Let's Look at Your <br />
            <span className="text-apple-gray-300">Live Algorithmic Leaks.</span>
          </h2>
          <p className="text-xl text-apple-gray-400 mb-16 max-w-2xl mx-auto">
            Book a 15-minute screen-share audit. I will pull up your exact market, show you which competitor is stealing your Tuesday bookings, and show you exactly how much money you are losing.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: MapPin, text: "Live Geo-Grid Map of your exact market" },
              { icon: TrendingUp, text: "Competitor stealing your Tuesday bookings" },
              { icon: BarChart3, text: "Exact revenue you are losing monthly" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-apple-gray-50 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-black" />
                </div>
                <p className="text-sm font-bold">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="inline-block p-1 rounded-[32px] bg-apple-gray-100">
            <a 
              href="https://wa.me/918870092253?text=growguests"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-orange text-white px-12 py-6 rounded-[28px] text-xl font-bold hover:opacity-90 transition-all flex items-center gap-3 group shadow-2xl shadow-brand-orange/20"
            >
              Book Your Free Screen-Share Audit Now
              <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
          
          <div className="mt-8 flex flex-col items-center gap-2">
            <p className="text-sm text-apple-gray-300 font-medium">No Obligation · 15 Minutes · Free Market Analysis</p>
            <div className="flex items-center gap-2 text-xs font-bold text-red-500 uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full">
              <Clock className="w-3 h-3" />
              Only 3 audit slots available per month
            </div>
          </div>
        </div>
      </Section>

      <footer className="py-12 border-t border-apple-gray-100 text-center">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-brand-orange rounded flex items-center justify-center">
              <Target className="text-white w-4 h-4" />
            </div>
            <span className="font-bold text-sm tracking-tighter">MoreGuests.in</span>
          </div>
          <p className="text-xs text-apple-gray-300">© 2026 MoreGuests.in. All rights reserved. Built for Independent Resort Owners.</p>
          <div className="flex gap-6 text-xs font-medium text-apple-gray-400">
            <a href="#" className="hover:text-black">Privacy Policy</a>
            <a href="#" className="hover:text-black">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
