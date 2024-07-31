import React, { ChangeEvent } from 'react';
import { LessonPartProps } from '../../lib/types';

const InfoPart: React.FC<LessonPartProps> = ({ part, index, updateLessonPart }) => {
  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    updateLessonPart(index, { ...part.content, text: e.target.value });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      updateLessonPart(index, { ...part.content, image: e.target.files[0] });
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded-md">
      <textarea
        value={part.content.text || ""}
        onChange={handleTextChange}
        placeholder="Text"
        className="mt-2 w-full p-2 border border-gray-300 rounded-md"
      />
      <input
        type="file"
        onChange={handleFileChange}
        className="mt-2 w-full"
      />
    </div>
  );
};

export default InfoPart;
