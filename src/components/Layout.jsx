import { useLocation, Outlet } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./Navbar";

const pageVariants = {
  initial: { opacity: 0, y: 30, filter: "blur(8px)" },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y: -20,
    filter: "blur(8px)",
    transition: { duration: 0.4, ease: [0.7, 0, 0.84, 0] },
  },
};

export default function Layout() {
  const location = useLocation();
  return (
    <div className="bg-background text-foreground font-inter min-h-screen selection:bg-primary/30">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
