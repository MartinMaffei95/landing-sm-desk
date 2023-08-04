'use client'
import CourseDataWindow from '@/app/courses/components/CourseDataWindow'
import React, { useRef, useState } from 'react'

const page = () => {
  return (
    <main className="folder-area flex min-h-screen z-20 p-4 overflow-hidden pointer-events-none">
      <CourseDataWindow />
    </main>
  )
}

export default page
