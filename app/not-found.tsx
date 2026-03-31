"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="dark:bg-zinc-900 bg-white min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          duration: 0.6,
        }}
        className="max-w-xl mx-auto text-center"
      >
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">
          404
        </h1>
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Página não encontrada
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          A página que você procura não existe ou foi removida. 🤝
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
        >
          <ArrowLeft className="mr-2" size={20} /> Voltar para a página inicial
        </Link>
      </motion.div>
    </div>
  );
}