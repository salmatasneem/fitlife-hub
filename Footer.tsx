import { Dumbbell, Instagram, Twitter, Youtube, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Dumbbell className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">
                Fit<span className="text-primary">Life</span> Hub
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Transform your body and mind with expert-guided workouts, nutrition tips, and a community that keeps you going.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-primary">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/workouts" className="text-sm text-muted-foreground hover:text-primary transition-colors">Workouts</Link>
              <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blog</Link>
              <Link to="/auth" className="text-sm text-muted-foreground hover:text-primary transition-colors">Sign Up</Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-primary">Categories</h4>
            <div className="flex flex-col gap-2">
              <span className="text-sm text-muted-foreground">Weight Loss</span>
              <span className="text-sm text-muted-foreground">Muscle Gain</span>
              <span className="text-sm text-muted-foreground">Home Workouts</span>
              <span className="text-sm text-muted-foreground">Nutrition</span>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-primary">Follow Us</h4>
            <div className="flex gap-3">
              {[Instagram, Twitter, Youtube, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted/80 transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 FitLife Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
