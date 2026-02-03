import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, Send, Instagram, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (data: any) => {
        setIsLoading(true);
        try {
            // Retrieve keys from environment variables
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !templateId || !publicKey || serviceId === "your_service_id_here") {
                throw new Error("EmailJS credentials are missing. Please check your .env.local file.");
            }

            await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: data.name,
                    from_email: data.email,
                    message: data.message,
                },
                publicKey
            );

            toast({
                title: "Message Sent!",
                description: "Thanks for reaching out. I'll get back to you ASAP.",
            });
            reset();
        } catch (error: any) {
            console.error("EmailJS Error:", error);
            toast({
                title: "Error",
                description: error.message || "Failed to send message. Please try again later.",
                variant: "destructive",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="contact" className="py-20 relative overflow-hidden bg-white">
            {/* Background Elements */}
            <div className="absolute -left-20 top-20 w-80 h-80 bg-neon-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute -right-20 bottom-20 w-80 h-80 bg-neon-pink/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-pink-50">
                            <Mail className="text-pink-600" size={32} />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-900">
                            Get In Touch
                        </h2>
                    </div>
                    <p className="text-gray-600 max-w-2xl mx-auto font-inter">
                        Interested in working together? Let's discuss how we can collaborate on your next project.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.01 }}
                        className="space-y-8"
                    >
                        <div className="bg-white border border-gray-100 border-l-4 border-l-pink-600 p-8 rounded-2xl rounded-l-none shadow-sm hover:shadow-xl transition-all duration-300">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-poppins">Contact Information</h3>

                            <div className="space-y-6">
                                <a
                                    href="mailto:atmananditi50@gmail.com"
                                    className="flex items-center gap-4 text-gray-600 hover:text-pink-600 transition-colors group"
                                >
                                    <div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center group-hover:bg-pink-100 transition-colors">
                                        <Mail className="text-pink-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400 font-inter">Email Me</p>
                                        <p className="font-medium font-inter">atmananditi50@gmail.com</p>
                                    </div>
                                </a>

                                <div className="flex items-center gap-4 text-gray-600">
                                    <div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center">
                                        <MapPin className="text-pink-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400 font-inter">Location</p>
                                        <p className="font-medium font-inter">Dharwad, India</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-gray-100">
                                <h4 className="text-lg font-semibold text-gray-900 mb-4 font-poppins">Connect on Socials</h4>
                                <div className="flex gap-4">
                                    <a
                                        href="https://www.linkedin.com/in/puneet-atmanand-iti-a99846328/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-[#0077b5] hover:text-white transition-all duration-300"
                                    >
                                        <Linkedin size={20} />
                                    </a>
                                    <a
                                        href="https://github.com/puneet-atmanand"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-black hover:text-white transition-all duration-300"
                                    >
                                        <Github size={20} />
                                    </a>
                                    <a
                                        href="https://www.instagram.com/puneeth_atmanand"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-pink-600 hover:text-white transition-all duration-300"
                                    >
                                        <Instagram size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.01 }}
                    >
                        <form onSubmit={handleSubmit(onSubmit)} className="bg-white border border-gray-100 border-l-4 border-l-pink-600 p-8 rounded-2xl rounded-l-none shadow-sm hover:shadow-xl transition-all duration-300 space-y-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-poppins">Send Me a Message</h3>

                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-gray-700 font-inter">Your Name</label>
                                <Input
                                    id="name"
                                    {...register("name", { required: true })}
                                    placeholder="John Doe"
                                    className="bg-gray-50 border-gray-200 text-gray-900 focus:border-pink-500 focus:ring-pink-500"
                                />
                                {errors.name && <span className="text-red-500 text-xs">Name is required</span>}
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-700 font-inter">Your Email</label>
                                <Input
                                    id="email"
                                    type="email"
                                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                                    placeholder="john@example.com"
                                    className="bg-gray-50 border-gray-200 text-gray-900 focus:border-pink-500 focus:ring-pink-500"
                                />
                                {errors.email && <span className="text-red-500 text-xs">Valid email is required</span>}
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-700 font-inter">Message</label>
                                <Textarea
                                    id="message"
                                    {...register("message", { required: true })}
                                    placeholder="Tell me about your project..."
                                    className="bg-gray-50 border-gray-200 text-gray-900 focus:border-pink-500 focus:ring-pink-500 min-h-[150px]"
                                />
                                {errors.message && <span className="text-red-500 text-xs">Message is required</span>}
                            </div>

                            <Button type="submit" disabled={isLoading} className="w-full bg-[#C2167E] hover:bg-[#A01268] text-white font-bold font-poppins transition-all shadow-lg hover:shadow-xl">
                                {isLoading ? (
                                    <>
                                        Sending... <Loader2 className="ml-2 animate-spin" size={18} />
                                    </>
                                ) : (
                                    <>
                                        Send Message <Send size={18} className="ml-2" />
                                    </>
                                )}
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
