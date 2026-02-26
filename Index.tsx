import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Star, Flame, Trophy, Users, Quote } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const stats = [
  { icon: Users, value: "50K+", label: "Active Members" },
  { icon: Flame, value: "200+", label: "Workout Plans" },
  { icon: Trophy, value: "95%", label: "Success Rate" },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Lost 30 lbs in 4 months",
    text: "FitLife Hub completely changed my approach to fitness. The structured plans and community support kept me motivated every single day.",
    rating: 5,
  },
  {
    name: "Marcus Chen",
    role: "Gained 15 lbs muscle",
    text: "The muscle gain programs are scientifically designed and incredibly effective. I've never seen results like this before.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Home workout enthusiast",
    text: "As a busy mom, the home workout plans are a lifesaver. 30 minutes a day and I feel stronger than ever.",
    rating: 5,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Fitness background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>

        <div className="relative container mx-auto px-4 pt-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wider mb-6 border border-primary/20">
              Your Journey Starts Here
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 max-w-4xl mx-auto">
              Transform Your Body.{" "}
              <span className="text-primary text-glow">Transform Your Life.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Expert-designed workout plans, nutrition guidance, and a community of champions ready to help you achieve your fitness goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/auth"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold uppercase tracking-wider hover:opacity-90 transition-opacity animate-pulse-glow"
              >
                Start Your Fitness Journey
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/workouts"
                className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-8 py-4 rounded-lg font-bold uppercase tracking-wider hover:bg-secondary transition-colors"
              >
                <Play className="h-5 w-5" />
                View Workouts
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center"
              >
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <p className="text-3xl md:text-4xl font-black text-primary">{stat.value}</p>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              Why <span className="text-primary">FitLife Hub</span>?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We believe fitness should be accessible, enjoyable, and effective for everyone. Our platform combines science-backed workout programs with personalized guidance to help you reach your goals — whether you're a complete beginner or a seasoned athlete.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Personalized Plans", desc: "Tailored to your fitness level and goals" },
                { title: "Expert Guidance", desc: "Programs designed by certified trainers" },
                { title: "Track Progress", desc: "Monitor your journey with detailed analytics" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  custom={i + 1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="p-6 rounded-xl bg-card border border-border hover:neon-border transition-shadow"
                >
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-3xl md:text-4xl font-black text-center mb-12"
          >
            What Our Members <span className="text-primary">Say</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="p-6 rounded-xl bg-card border border-border relative"
              >
                <Quote className="h-8 w-8 text-primary/20 absolute top-4 right-4" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">"{t.text}"</p>
                <div>
                  <p className="font-bold text-sm">{t.name}</p>
                  <p className="text-xs text-primary">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Ready to <span className="text-primary text-glow">Get Started</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Join thousands who have already transformed their lives with FitLife Hub.
            </p>
            <Link
              to="/auth"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              Join FitLife Hub Today
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
