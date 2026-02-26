import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const posts = [
  {
    title: "10 Best Exercises for Weight Loss",
    category: "Fitness Tips",
    excerpt: "Discover the most effective exercises that maximize calorie burn and help you shed pounds faster than ever.",
    readTime: "5 min read",
    date: "Feb 20, 2026",
  },
  {
    title: "The Ultimate Guide to Meal Prep",
    category: "Nutrition",
    excerpt: "Save time and stay on track with your nutrition goals. Learn how to meal prep like a pro with these simple strategies.",
    readTime: "7 min read",
    date: "Feb 18, 2026",
  },
  {
    title: "From 220 to 170: Mike's Transformation",
    category: "Transformation",
    excerpt: "Read how Mike lost 50 pounds in 8 months using FitLife Hub's workout plans and nutrition guidance.",
    readTime: "4 min read",
    date: "Feb 15, 2026",
  },
  {
    title: "Why Protein Timing Matters",
    category: "Nutrition",
    excerpt: "Learn the science behind protein timing and how to optimize your intake for maximum muscle growth and recovery.",
    readTime: "6 min read",
    date: "Feb 12, 2026",
  },
  {
    title: "5 Mistakes Beginners Make at the Gym",
    category: "Fitness Tips",
    excerpt: "Avoid these common pitfalls that slow down progress and increase injury risk for new gym-goers.",
    readTime: "4 min read",
    date: "Feb 10, 2026",
  },
  {
    title: "How Sleep Affects Your Gains",
    category: "Fitness Tips",
    excerpt: "Discover the critical connection between quality sleep and muscle recovery, performance, and overall fitness progress.",
    readTime: "5 min read",
    date: "Feb 8, 2026",
  },
];

const categoryColors: Record<string, string> = {
  "Fitness Tips": "bg-primary/10 text-primary",
  Nutrition: "bg-yellow-500/10 text-yellow-400",
  Transformation: "bg-blue-500/10 text-blue-400",
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

const Blog = () => {
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
              Fitness <span className="text-primary">Blog</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Tips, stories, and expert advice to fuel your fitness journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {posts.map((post, i) => (
              <motion.article
                key={i}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="rounded-xl bg-card border border-border p-6 hover:neon-border transition-shadow cursor-pointer group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded ${categoryColors[post.category]}`}>
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" /> {post.readTime}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-primary font-semibold group-hover:gap-2 transition-all">
                    Read More <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
