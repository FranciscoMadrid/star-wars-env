'use client'
import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-background text-white py-8 px-4">
            <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
                <p className="text-lg font-semibold text-white">Star Wars</p>
                <p className="text-center text-sm">
                    &copy; {new Date().getFullYear()} Star Wars. All rights reserved.
                </p>
                <p className="text-center text-xs text-gray-500">
                    May the Force be with you.
                </p>
            </div>
        </footer>
    )
}