'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, Users, BookOpen, AlertCircle } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  percentage: number;
  icon: React.ReactNode;
  color: string;
}

const StatCard = ({ title, value, percentage, icon, color }: StatCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`bg-white rounded-xl shadow-lg p-6 border-l-4 ${color}`}
  >
    <div className="flex items-start justify-between mb-4">
      <div className={`p-3 rounded-lg ${color.replace('border-', 'bg-').replace('-500', '-100')}`}>
        {icon}
      </div>
      <div className="text-right">
        <div className="text-3xl font-bold text-gray-900">{value}</div>
        <div className="text-sm text-gray-500">{title}</div>
      </div>
    </div>
    <div className="flex items-center gap-2">
      <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className={`h-full ${color.replace('border-', 'bg-')}`}
        />
      </div>
      <span className="text-sm font-semibold text-gray-700">{percentage}%</span>
    </div>
  </motion.div>
);

// Pie Chart Component
const PieChart = ({ cannotRead, level1Ready, total }: { cannotRead: number; level1Ready: number; total: number }) => {
  const cannotReadPercentage = (cannotRead / total) * 100;
  const level1Percentage = (level1Ready / total) * 100;
  
  // Calculate stroke-dasharray for pie chart
  const circumference = 2 * Math.PI * 80;
  const cannotReadStroke = (cannotReadPercentage / 100) * circumference;
  const level1Stroke = (level1Percentage / 100) * circumference;
  
  return (
    <div className="relative w-64 h-64 mx-auto">
      <svg className="transform -rotate-90" width="256" height="256" viewBox="0 0 256 256">
        {/* Background circle */}
        <circle
          cx="128"
          cy="128"
          r="80"
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="60"
        />
        
        {/* Cannot Read segment (Red) */}
        <motion.circle
          cx="128"
          cy="128"
          r="80"
          fill="none"
          stroke="#ef4444"
          strokeWidth="60"
          strokeDasharray={`${cannotReadStroke} ${circumference}`}
          initial={{ strokeDasharray: `0 ${circumference}` }}
          whileInView={{ strokeDasharray: `${cannotReadStroke} ${circumference}` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        />
        
        {/* Level 1 Ready segment (Green) */}
        <motion.circle
          cx="128"
          cy="128"
          r="80"
          fill="none"
          stroke="#22c55e"
          strokeWidth="60"
          strokeDasharray={`${level1Stroke} ${circumference}`}
          strokeDashoffset={-cannotReadStroke}
          initial={{ strokeDasharray: `0 ${circumference}` }}
          whileInView={{ strokeDasharray: `${level1Stroke} ${circumference}` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </svg>
      
      {/* Center text */}
      <div className="absolute inset-0 flex items-center justify-center flex-col">
        <div className="text-4xl font-bold text-gray-900">{total}</div>
        <div className="text-sm text-gray-600">Students</div>
      </div>
    </div>
  );
};

// Bar Chart Component
const BarChart = ({ title, cannotRead, level1Ready, total, testDate }: { 
  title: string; 
  cannotRead: number; 
  level1Ready: number; 
  total: number;
  testDate: string;
}) => {
  const cannotReadPercentage = (cannotRead / total) * 100;
  const level1Percentage = (level1Ready / total) * 100;
  
  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <div className="text-center mb-6">
        <h5 className="font-bold text-lg text-gray-900">{title}</h5>
        <p className="text-sm text-gray-500">{testDate}</p>
      </div>
      
      <div className="space-y-6">
        {/* Cannot Read Bar */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Cannot Read/Write English</span>
            <span className="text-sm font-bold text-red-600">{cannotRead}/{total}</span>
          </div>
          <div className="relative h-12 bg-gray-200 rounded-lg overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${cannotReadPercentage}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute h-full bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-end pr-3"
            >
              <span className="text-white font-bold text-sm">{Math.round(cannotReadPercentage)}%</span>
            </motion.div>
          </div>
        </div>
        
        {/* Level 1 Ready Bar */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Ready for Level 1</span>
            <span className="text-sm font-bold text-green-600">{level1Ready}/{total}</span>
          </div>
          <div className="relative h-12 bg-gray-200 rounded-lg overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${level1Percentage}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="absolute h-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center"
            >
              {level1Percentage >= 15 && (
                <span className="text-white font-bold text-sm">{Math.round(level1Percentage)}%</span>
              )}
            </motion.div>
            {level1Percentage < 15 && (
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-700 font-bold text-sm">
                {Math.round(level1Percentage)}%
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function PlacementTestAnalytics() {
  // Data from placement test results (ACTUAL DATA FROM EXCEL FILES)
  // Threshold: 35/50 marks for Level 1 readiness
  const bgti1Stats = {
    totalStudents: 151,
    cannotRead: 104,  // Students scoring < 35 out of 50
    level1Ready: 47, // Students scoring >= 35 out of 50
    testDate: "September 5, 2024"
  };

  const bgti2Stats = {
    totalStudents: 30,
    cannotRead: 24,  // Students scoring < 35 out of 50
    level1Ready: 6,  // Students scoring >= 35 out of 50
    testDate: "October 5, 2024"
  };

  const combinedStats = {
    totalStudents: bgti1Stats.totalStudents + bgti2Stats.totalStudents,
    cannotRead: bgti1Stats.cannotRead + bgti2Stats.cannotRead,
    level1Ready: bgti1Stats.level1Ready + bgti2Stats.level1Ready
  };

  const cannotReadPercentage = Math.round((combinedStats.cannotRead / combinedStats.totalStudents) * 100);
  const level1Percentage = Math.round((combinedStats.level1Ready / combinedStats.totalStudents) * 100);

  return (
    <div className="my-12 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Placement Test Results Analysis</h3>
        <p className="text-gray-600">Data-driven insights from BGTI 1st & 2nd student assessments</p>
      </motion.div>

      {/* Key Statistics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Total Students Tested"
          value={combinedStats.totalStudents.toString()}
          percentage={100}
          icon={<Users className="w-6 h-6 text-blue-600" />}
          color="border-blue-500"
        />
        <StatCard
          title="Cannot Read/Write English"
          value={combinedStats.cannotRead.toString()}
          percentage={cannotReadPercentage}
          icon={<AlertCircle className="w-6 h-6 text-red-600" />}
          color="border-red-500"
        />
        <StatCard
          title="Ready for Level 1"
          value={combinedStats.level1Ready.toString()}
          percentage={level1Percentage}
          icon={<BookOpen className="w-6 h-6 text-green-600" />}
          color="border-green-500"
        />
      </div>

      {/* Pie Chart Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-xl p-8"
      >
        <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">Overall Distribution</h4>
        
        <div className="flex flex-col items-center gap-6">
          <PieChart 
            cannotRead={combinedStats.cannotRead}
            level1Ready={combinedStats.level1Ready}
            total={combinedStats.totalStudents}
          />
          
          {/* Legend */}
          <div className="flex gap-6 justify-center">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-500 rounded"></div>
              <span className="text-sm text-gray-700">Cannot Read/Write ({cannotReadPercentage}%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded"></div>
              <span className="text-sm text-gray-700">Ready for Level 1 ({level1Percentage}%)</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bar Charts Comparison */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-xl p-8"
      >
        <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">Institute Comparison</h4>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <BarChart
            title="BGTI 1st"
            cannotRead={bgti1Stats.cannotRead}
            level1Ready={bgti1Stats.level1Ready}
            total={bgti1Stats.totalStudents}
            testDate={bgti1Stats.testDate}
          />
          
          <BarChart
            title="BGTI 2nd"
            cannotRead={bgti2Stats.cannotRead}
            level1Ready={bgti2Stats.level1Ready}
            total={bgti2Stats.totalStudents}
            testDate={bgti2Stats.testDate}
          />
        </div>
      </motion.div>

      {/* Key Insight */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-r-lg shadow-md"
      >
        <div className="flex items-start gap-3">
          <TrendingDown className="w-6 h-6 text-amber-700 flex-shrink-0 mt-0.5" />
          <div>
            <h5 className="font-bold text-gray-900 mb-2 text-lg">Key Finding</h5>
            <p className="text-gray-800 leading-relaxed font-medium">
              <strong className="text-gray-900">{cannotReadPercentage}%</strong> of students lack basic English literacy skills, requiring foundational phonics 
              instruction before beginning Level 1 curriculum. Only <strong className="text-gray-900">{level1Percentage}%</strong> demonstrated readiness 
              for beginner-level textbooks like New Headway or Evolve.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Download Link */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center space-y-4"
      >
        <p className="text-gray-900 font-semibold text-lg mb-4">Download Detailed Excel Reports:</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/assets/excel/Placement Test for Black Gold Institute.xlsx"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition-colors no-underline"
            style={{ color: 'white' }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            BGTI Branch 1 (151 Students)
          </a>
          
          <a
            href="/assets/excel/Placement Test for Black Gold Institute Branch 2.xlsx"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-colors no-underline"
            style={{ color: 'white' }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            BGTI Branch 2 (30 Students)
          </a>
        </div>
      </motion.div>
    </div>
  );
}
