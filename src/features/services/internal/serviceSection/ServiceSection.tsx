import type { ServiceCategory } from "@/types/service";
import { ServiceCard } from "../serviceCard/ServiceCard";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  containerVariants,
  leftVariants,
  rightVariants,
} from "@/constants/animation";

interface ServiceSectionProps {
  category: ServiceCategory;
  index: number;
}

export function ServiceSection({ category, index }: ServiceSectionProps) {
  const isReverse = index % 2 !== 0;
  const { ref, isInView } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 lg:gap-x-16 mb-32"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {!isReverse && (
        <motion.div
          variants={leftVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: index * 0.1 + 0.2 }}
        >
          <img
            src={category.image}
            alt={category.name}
            className="h-full object-cover"
          />
        </motion.div>
      )}

      <motion.div variants={leftVariants}>
        <motion.h2
          className="font-normal text-[64px] text-[#E1C084] mb-10"
          initial={{ opacity: 0, x: isReverse ? -50 : 50 }}
          animate={
            isInView
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: isReverse ? -50 : 50 }
          }
          transition={{ delay: index * 0.1 + 0.1, duration: 0.5 }}
        >
          {category.name}
        </motion.h2>

        <div className="space-y-6">
          {category.services.map((service, serviceIndex) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                delay: index * 0.1 + serviceIndex * 0.05 + 0.3,
                duration: 0.4,
              }}
            >
              <ServiceCard
                title={service.title}
                price={service.price.toString()}
                description={service.description}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {isReverse && (
        <motion.div
          variants={rightVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: index * 0.1 + 0.2 }}
        >
          <img
            src={category.image}
            alt={category.name}
            className="h-full object-cover"
          />
        </motion.div>
      )}
    </motion.div>
  );
}
