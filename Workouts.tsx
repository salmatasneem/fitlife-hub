import { motion } from "framer-motion";
import { Clock, Flame, Calendar, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const categories = ["All", "Beginner", "Intermediate", "Advanced", "Weight Loss", "Muscle Gain", "Home Workouts"];

const workouts = [
  {
    title: "Full Body Burn",
    category: "Beginner",
    duration: "30 min",
    difficulty: "Beginner",
    schedule: "3 days/week",
    description: "A total body workout designed to build a solid foundation. Perfect for those just starting their fitness journey.",
  },
  {
    title: "HIIT Cardio Blaster",
    category: "Weight Loss",
    duration: "25 min",
    difficulty: "Intermediate",
    schedule: "4 days/week",
    description: "High-intensity intervals that torch calories and boost metabolism for hours after your workout.",
  },
  {
    title: "Strength Builder Pro",
    category: "Muscle Gain",
    duration: "45 min",
    difficulty: "Advanced",
    schedule: "5 days/week",
    description: "Progressive overload program focused on compound movements for maximum muscle hypertrophy.",
  },
  {
    title: "Living Room Fitness",
    category: "Home Workouts",
    duration: "20 min",
    difficulty: "Beginner",
    schedule: "5 days/week",
    description: "No equipment needed! Bodyweight exercises you can do in your living room for a full-body workout.",
  },
  {
    title: "Core Crusher",
    category: "Intermediate",
    duration: "20 min",
    difficulty: "Intermediate",
    schedule: "3 days/week",
    description: "Targeted core exercises to build a strong midsection and improve posture and stability.",
  },
  {
    title: "Athletic Performance",
    category: "Advanced",
    duration: "60 min",
    difficulty: "Advanced",
    schedule: "6 days/week",
    description: "Elite-level training combining strength, power, and conditioning for peak athletic performance.",
  },
  {
    title: "Lean & Tone",
    category: "Weight Loss",
    duration: "35 min",
    difficulty: "Beginner",
    schedule: "4 days/week",
    description: "A mix of resistance and cardio designed to help you shed fat while building lean, toned muscle.",
  },
  {
    title: "Powerlifting Basics",
    category: "Muscle Gain",
    duration: "50 min",
    difficulty: "Intermediate",
    schedule: "4 days/week",
    description: "Learn the big three lifts — squat, bench, deadlift — with proper form and progressive programming.",
  },
  {
    title: "Yoga Flow",
    category: "Home Workouts",
    duration: "40 min",
    difficulty: "Beginner",
    schedule: "Daily",
    description: "Improve flexibility, balance, and mindfulness with flowing yoga sequences you can do anywhere.",
  },
];

const difficultyColor: Record<string, string> = {
  Beginner: "text-primary",
  Intermediate: "text-yellow-400",
  Advanced: "text-destructive",
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.5, ease: "easeOut" as const },
  }),
};

const Workouts = () => {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? workouts : workouts.filter((w) => w.category === active);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-black mb-4">
              Workout <span className="text-primary">Routines</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Find the perfect workout plan tailored to your fitness level and goals.
            </p>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold uppercase tracking-wider transition-all ${
                  active === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((workout, i) => (
              <motion.div
                key={workout.title}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="p-6 rounded-xl bg-card border border-border hover:neon-border transition-shadow group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider px-2 py-1 rounded bg-primary/10 text-primary">
                    {workout.category}
                  </span>
                  <span className={`text-xs font-bold ${difficultyColor[workout.difficulty]}`}>
                    {workout.difficulty}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{workout.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{workout.description}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {workout.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {workout.schedule}
                  </span>
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <button className="flex items-center gap-1 text-sm text-primary font-semibold hover:gap-2 transition-all">
                    View Details <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <h2 className="text-3xl font-black mb-4">
              Watch a <span className="text-primary">Demo</span>
            </h2>
            <p className="text-muted-foreground mb-8">See how our workout plans are structured</p>
            <div className="max-w-3xl mx-auto rounded-xl overflow-hidden border border-border bg-card aspect-video flex items-center justify-center">
              <div className="text-center p-8">
                <Flame className="h-16 w-16 text-primary/30 mx-auto mb-4" />
                <p className="text-muted-foreground">Demo videos coming soon</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Workouts;
