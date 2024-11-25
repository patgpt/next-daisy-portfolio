"use client"
import { motion } from 'framer-motion'
import React from 'react'

const Title = ({
    children
}: {
    children: React.ReactNode
}) => {
  return (
      <motion.h1
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
      >
          {children}
      </motion.h1>
  )
}

export default Title