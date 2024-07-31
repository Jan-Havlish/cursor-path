import React, { ChangeEvent } from 'react';
import { LessonPartProps, Option } from '../../lib/types';

const QuestionPart: React.FC<LessonPartProps> = ({ part, index, updateLessonPart }) => {
  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    updateLessonPart(index, { ...part.content, text: e.target.value });
  };

  const handleOptionChange = (optionIndex: number, key: keyof Option, value: string | boolean) => {
    const newOptions = [...(part.content.options || [])];
    newOptions[optionIndex] = {
      ...newOptions[optionIndex],
      [key]: value
    } as Option;
    updateLessonPart(index, { ...part.content, options: newOptions });
  };

  const handleOptionRemove = (optionIndex: number) => {
    const newOptions = (part.content.options || []).filter((_, i) => i !== optionIndex);
    updateLessonPart(index, { ...part.content, options: newOptions });
  };

  const handleAddOption = () => {
    const newOptions = [...(part.content.options || []), { text: "", correct: false }];
    updateLessonPart(index, { ...part.content, options: newOptions });
  };

  return (
    <div className="p-4 bg-gray-100 rounded-md">
      <textarea
        value={part.content.text || ""}
        onChange={handleTextChange}
        placeholder="Text otázky"
        className="mt-2 w-full p-2 border border-gray-300 rounded-md"
      />
      {(part.content.options || []).map((option, optionIndex) => (
        <div key={optionIndex} className="flex items-center mt-2">
          <input
            type="checkbox"
            checked={option.correct}
            onChange={(e) => handleOptionChange(optionIndex, 'correct', e.target.checked)}
            className="mr-2"
          />
          <input
            type="text"
            value={option.text}
            onChange={(e) => handleOptionChange(optionIndex, 'text', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <button
            onClick={() => handleOptionRemove(optionIndex)}
            className="ml-2 px-4 py-2 bg-red-500 text-white rounded-md"
          >
            Odstranit
          </button>
        </div>
      ))}
      <button
        onClick={handleAddOption}
        className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md"
      >
        Přidat možnost
      </button>
    </div>
  );
};

export default QuestionPart;
