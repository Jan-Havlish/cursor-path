import React, { ChangeEvent } from 'react';
import { LessonPartProps } from '../../lib/types';

const CodeSamplePart: React.FC<LessonPartProps> = ({ part, index, updateLessonPart }) => {
  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    updateLessonPart(index, { ...part.content, text: e.target.value });
  };

  const handleCodeChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    updateLessonPart(index, { ...part.content, code: e.target.value });
  };

  return (
    <div className="p-4 bg-gray-100 rounded-md">
      <textarea
        value={part.content.text || ""}
        onChange={handleTextChange}
        placeholder="Popis kódu"
        className="mt-2 w-full p-2 border border-gray-300 rounded-md"
      />
      <textarea
        value={part.content.code || ""}
        onChange={handleCodeChange}
        placeholder="Ukázkový kód"
        className="mt-2 w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
  );
};

export default CodeSamplePart;
