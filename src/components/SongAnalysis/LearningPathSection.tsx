import React from 'react';

interface LearningLevel {
  title: string;
  skills: string[];
  timeEstimate: string;
}

interface LearningPath {
  beginner: LearningLevel;
  intermediate: LearningLevel;
  advanced: LearningLevel;
}

interface LearningPathProps {
  learningPath: LearningPath;
}

export default function LearningPathSection({ learningPath }: LearningPathProps) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Learning Path</h2>
      <div className="grid md:grid-cols-3 gap-6">
        
        {/* Beginner Level */}
        <div className="bg-green-50 rounded-xl p-6 border border-green-200">
          <h3 className="text-xl font-semibold text-green-900 mb-4">
            🟢 {learningPath.beginner.title}
          </h3>
          <div className="space-y-3 text-sm">
            <p className="text-green-800 font-medium">Start Here:</p>
            <ul className="text-green-700 space-y-1">
              {learningPath.beginner.skills.map((skill, i) => (
                <li key={i}>• {skill}</li>
              ))}
            </ul>
            <div className="mt-4 pt-3 border-t border-green-200">
              <p className="text-green-600 text-xs">
                <strong>Time Estimate:</strong> {learningPath.beginner.timeEstimate}
              </p>
            </div>
          </div>
        </div>

        {/* Intermediate Level */}
        <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
          <h3 className="text-xl font-semibold text-orange-900 mb-4">
            🟡 {learningPath.intermediate.title}
          </h3>
          <div className="space-y-3 text-sm">
            <p className="text-orange-800 font-medium">Building Skills:</p>
            <ul className="text-orange-700 space-y-1">
              {learningPath.intermediate.skills.map((skill, i) => (
                <li key={i}>• {skill}</li>
              ))}
            </ul>
            <div className="mt-4 pt-3 border-t border-orange-200">
              <p className="text-orange-600 text-xs">
                <strong>Time Estimate:</strong> {learningPath.intermediate.timeEstimate}
              </p>
            </div>
          </div>
        </div>

        {/* Advanced Level */}
        <div className="bg-red-50 rounded-xl p-6 border border-red-200">
          <h3 className="text-xl font-semibold text-red-900 mb-4">
            🔴 {learningPath.advanced.title}
          </h3>
          <div className="space-y-3 text-sm">
            <p className="text-red-800 font-medium">Mastery Goals:</p>
            <ul className="text-red-700 space-y-1">
              {learningPath.advanced.skills.map((skill, i) => (
                <li key={i}>• {skill}</li>
              ))}
            </ul>
            <div className="mt-4 pt-3 border-t border-red-200">
              <p className="text-red-600 text-xs">
                <strong>Time Estimate:</strong> {learningPath.advanced.timeEstimate}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
