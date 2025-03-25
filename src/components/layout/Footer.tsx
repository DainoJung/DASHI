import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-light-gray py-12">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-dark">
            <h3 className="font-bold text-xl mb-2">DASHI</h3>
            <p className="text-mid-gray">디자인으로 브랜드를 완성합니다</p>
          </div>
          <div className="text-mid-gray">
            © 2024 DASHI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
} 