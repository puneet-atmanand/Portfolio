import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const { register, handleSubmit, reset } = useForm();
  const { toast } = useToast();

  const onSubmit = (data: any) => {
    console.log(data);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you ASAP.",
    });
    reset();
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
            LET'S <span className="text-neon-cyan">CONNECT</span>
          </h2>
          <p className="text-gray-400 font-rajdhani text-xl">
            Have a project in mind? Let's build something extraordinary.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-card/30 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-neon-pink/50 transition-colors">
              <h3 className="text-2xl font-orbitron font-bold text-white mb-6">Contact Info</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 text-gray-300">
                  <div className="w-12 h-12 rounded-full bg-neon-pink/10 flex items-center justify-center text-neon-pink">
                    <Mail />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-mono uppercase">Email</p>
                    <p className="font-rajdhani text-lg font-semibold">hello@rave.dev</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 text-gray-300">
                  <div className="w-12 h-12 rounded-full bg-neon-cyan/10 flex items-center justify-center text-neon-cyan">
                    <Phone />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-mono uppercase">Phone</p>
                    <p className="font-rajdhani text-lg font-semibold">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-gray-300">
                  <div className="w-12 h-12 rounded-full bg-neon-lime/10 flex items-center justify-center text-neon-lime">
                    <MapPin />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-mono uppercase">Location</p>
                    <p className="font-rajdhani text-lg font-semibold">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-card/30 backdrop-blur-md p-8 rounded-2xl border border-white/10">
              <div className="space-y-2">
                <label className="text-sm font-mono text-gray-400">Name</label>
                <Input 
                  {...register("name")} 
                  placeholder="Your Name" 
                  className="bg-black/40 border-white/10 focus:border-neon-cyan text-white h-12 font-rajdhani text-lg" 
                  required 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-mono text-gray-400">Email</label>
                <Input 
                  {...register("email")} 
                  type="email" 
                  placeholder="your@email.com" 
                  className="bg-black/40 border-white/10 focus:border-neon-cyan text-white h-12 font-rajdhani text-lg" 
                  required 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-mono text-gray-400">Message</label>
                <Textarea 
                  {...register("message")} 
                  placeholder="Tell me about your project..." 
                  className="bg-black/40 border-white/10 focus:border-neon-cyan text-white min-h-[150px] font-rajdhani text-lg" 
                  required 
                />
              </div>
              <Button type="submit" className="w-full bg-neon-cyan hover:bg-white text-black font-bold font-orbitron h-12 shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] transition-all">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
