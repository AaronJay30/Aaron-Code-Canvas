"use client";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogClose,
} from "@/components/ui/dialog";
import { Github, Facebook, Mail, Phone, ExternalLink, X } from "lucide-react";
import { motion } from "framer-motion";

const GITHUB_URL = "https://github.com/AaronJay30";
const FACEBOOK_URL = "https://www.facebook.com/gabato.aaron30";
const EMAIL_ADDRESS = "aaronjaygabato30@gmail.com";
const PHONE_NUMBER = "09451571295";

export function CommissionButton() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Need a commission?</Button>
            </DialogTrigger>
            <DialogContent
                className="[&>button]:hidden bg-gray-900/95 backdrop-blur-xl rounded-3xl shadow-2xl sm:max-w-lg w-full max-h-[90vh] overflow-hidden border border-gray-700/50 p-0"
                // onClick={(e) => e.stopPropagation()} // Usually not needed if DialogPrimitive handles it
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    // exit animation for DialogContent controlled by Dialog itself or AnimatePresence if Dialog supports it.
                    transition={{ type: "spring", damping: 20, stiffness: 200 }}
                    className="flex flex-col h-full" // Ensure motion div takes full height of content area
                >
                    {/* Modal Header */}
                    <div className="relative py-3 sm:py-4 px-4 sm:px-6 border-b border-gray-700/50 bg-gradient-to-r from-blue-500/10 to-purple-500/10 flex items-center justify-between">
                        {/* macOS-style dots */}
                        <div className="flex gap-1.5 sm:gap-2">
                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-400 rounded-full"></div>
                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-400 rounded-full"></div>
                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 rounded-full"></div>
                        </div>
                        {/* DialogClose button remains on the right */}
                        <DialogClose asChild>
                            <motion.button
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-xl transition-all duration-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                            >
                                <X size={20} />
                            </motion.button>
                        </DialogClose>
                    </div>

                    {/* Modal Content Area */}
                    <div className="p-6 sm:p-8 overflow-y-auto flex-grow space-y-4">
                        {/* Moved DialogTitle and DialogDescription here */}
                        <div className="mb-6 sm:mb-8">
                            <DialogTitle className="text-2xl sm:text-3xl font-bold text-white mb-2 text-center sm:text-left">
                                Contact Me
                            </DialogTitle>
                            <DialogDescription className="text-gray-400 text-sm sm:text-base leading-relaxed text-center sm:text-left">
                                Feel free to reach out for commissions or
                                inquiries through any of the following
                                platforms.
                            </DialogDescription>
                        </div>

                        {/* GitHub */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            <Button
                                asChild
                                variant="outline"
                                className="w-full justify-start bg-gray-800/30 hover:bg-gray-700/50 border-gray-700/80 hover:border-blue-500/50 text-gray-300 hover:text-white transition-all duration-300 p-4 sm:p-5 rounded-xl"
                            >
                                <a
                                    href={GITHUB_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-sm sm:text-base"
                                >
                                    <Github className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400" />
                                    <span className="flex-grow">GitHub</span>
                                    <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500" />
                                </a>
                            </Button>
                        </motion.div>

                        {/* Facebook */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <Button
                                asChild
                                variant="outline"
                                className="w-full justify-start bg-gray-800/30 hover:bg-gray-700/50 border-gray-700/80 hover:border-blue-500/50 text-gray-300 hover:text-white transition-all duration-300 p-4 sm:p-5 rounded-xl"
                            >
                                <a
                                    href={FACEBOOK_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-sm sm:text-base"
                                >
                                    <Facebook className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400" />
                                    <span className="flex-grow">Facebook</span>
                                    <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500" />
                                </a>
                            </Button>
                        </motion.div>

                        {/* Email */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <Button
                                asChild
                                variant="outline"
                                className="w-full justify-start bg-gray-800/30 hover:bg-gray-700/50 border-gray-700/80 hover:border-blue-500/50 text-gray-300 hover:text-white transition-all duration-300 p-4 sm:p-5 rounded-xl"
                            >
                                <a
                                    href={`mailto:${EMAIL_ADDRESS}`}
                                    className="flex items-center gap-3 text-sm sm:text-base"
                                >
                                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400" />
                                    <span className="flex-grow truncate">
                                        {EMAIL_ADDRESS}
                                    </span>
                                    <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500" />
                                </a>
                            </Button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <Button
                                asChild
                                variant="outline"
                                className="w-full justify-start bg-gray-800/30 hover:bg-gray-700/50 border-gray-700/80 hover:border-blue-500/50 text-gray-300 hover:text-white transition-all duration-300 p-4 sm:p-5 rounded-xl"
                            >
                                <a
                                    href={`tel:${PHONE_NUMBER}`}
                                    className="flex items-center gap-3 text-sm sm:text-base"
                                >
                                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400" />
                                    <span className="flex-grow truncate">
                                        {PHONE_NUMBER}
                                    </span>
                                    <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500" />
                                </a>
                            </Button>
                        </motion.div>
                    </div>
                </motion.div>
            </DialogContent>
        </Dialog>
    );
}
