import React, { ChangeEvent } from 'react';
import { LessonPartProps } from '../../lib/types';

const ProgrammingPart: React.FC<LessonPartProps> = ({ part, index, updateLessonPart }) => {
  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    updateLessonPart(index, { ...part.content, text: e.target.value });
  };

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    updateLessonPart(index, { ...part.content, language: e.target.value });
  };

  const handleCodeChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    updateLessonPart(index, { ...part.content, code: e.target.value });
  };

  const handleOutputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    updateLessonPart(index, { ...part.content, output: e.target.value });
  };

  return (
    <div className="p-4 bg-gray-100 rounded-md">
      <textarea
        value={part.content.text || ""}
        onChange={handleTextChange}
        placeholder="Zadání úlohy"
        className="mt-2 w-full p-2 border border-gray-300 rounded-md"
      />
      <select
        value={part.content.language || ""}
        onChange={handleLanguageChange}
        className="mt-2 w-full p-2 border border-gray-300 rounded-md"
      >
        <option value="">Vyberte programovací jazyk</option>
        <option value="python">Python</option>
        <option value="javascript">JavaScript</option>
      </select>
      <textarea
        value={part.content.code || ""}
        onChange={handleCodeChange}
        placeholder="Kód"
        className="mt-2 w-full p-2 border border-gray-300 rounded-md"
      />
      <textarea
        value={part.content.output || ""}
        onChange={handleOutputChange}
        placeholder="Očekávaný výstup"
        className="mt-2 w-full p-2 border border-gray-300 rounded-md"
      />
      <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md">Spustit test</button>
    </div>
  );
};

export default ProgrammingPart;
