import { motion } from 'framer-motion';
export default function AnimatedBlobs() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none">
      {/* Blob 1 */}
      <motion.div
        initial={{ x: -200, y: -200 }}
        animate={{ x: 0, y: 0 }}
        transition={{ duration: 3 }}
        className="absolute -top-40 -left-40 w-96 h-96 bg-pastelPurple rounded-full opacity-20 blur-3xl animate-blob1"
      ></motion.div>

      {/* Blob 2 */}
      <motion.div
        initial={{ x: 200, y: 100 }}
        animate={{ x: 0, y: 0 }}
        transition={{ duration: 3, delay: 0.2 }}
        className="absolute top-1/3 right-0 w-80 h-80 bg-pastelPink rounded-full opacity-20 blur-3xl animate-blob2"
      ></motion.div>

      {/* Blob 3 */}
      <motion.div
        initial={{ x: 100, y: 200 }}
        animate={{ x: 0, y: 0 }}
        transition={{ duration: 3, delay: 0.4 }}
        className="absolute bottom-0 left-1/2 w-96 h-96 bg-pastelLavender rounded-full opacity-30 blur-3xl animate-blob3"
      ></motion.div>
    </div>
  );
}