"use client"
import React, { useState } from "react";
import InfoPart from "./InfoPart";
import QuestionPart from "./QuestionPart";
import CodeSamplePart from "./CodeSamplePart";
import ProgrammingPart from "./ProgrammingPart";

const ContentTypes = {
    INFO: "info",
    QUESTION: "otazka",
    CODE_SAMPLE: "codeSample",
    PROGRAMMING: "programovani"
};

const NewCourse = ({ existingCourse, onCourseData }) => {
    const [category, setCategory] = useState(existingCourse?.category || "");
    const [name, setName] = useState(existingCourse?.name || "");
    const [description, setDescription] = useState(existingCourse?.description || "");
    const [lessons, setLessons] = useState(existingCourse?.lessons || [{ parts: [] }]);
    const [activeLesson, setActiveLesson] = useState(0);

    const returnCourse = () => {
        const course = {
            category,
            name,
            description,
            lessons
        };
        return course;
    };

    const addLesson = () => {
        setLessons([...lessons, { parts: [] }]);
        setActiveLesson(lessons.length);
    };

    const navigateLesson = (direction) => {
        const newActiveLesson = activeLesson + direction;
        if (newActiveLesson >= 0 && newActiveLesson < lessons.length) {
            setActiveLesson(newActiveLesson);
        } else if (newActiveLesson === lessons.length) {
            addLesson();
        }
    };

    const addLessonPart = () => {
        const newParts = [...lessons[activeLesson].parts, { type: ContentTypes.INFO, content: {} }];
        const newLessons = [...lessons];
        newLessons[activeLesson].parts = newParts;
        setLessons(newLessons);
    };

    const changeLessonPartType = (index, newType) => {
        const newLessons = [...lessons];
        newLessons[activeLesson].parts[index] = { type: newType, content: {} };
        setLessons(newLessons);
    };

    const updateLessonPart = (index, content) => {
        const newLessons = [...lessons];
        newLessons[activeLesson].parts[index].content = content;
        setLessons(newLessons);
    };

    const removeLessonPart = (index) => {
        const newLessons = [...lessons];
        newLessons[activeLesson].parts.splice(index, 1);
        setLessons(newLessons);
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">{existingCourse ? "Upravit kurz" : "Přidat nový kurz"}</h1>

            <label htmlFor="category" className="block text-sm font-medium text-gray-700">Kategorie</label>
            <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            >
                <option value="">Vyberte kategorii</option>

            </select>

            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mt-4">Název kurzu</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />

            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mt-4">Popis</label>
            <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />

            <div className="flex items-center justify-between mt-6">
                <button
                    onClick={() => navigateLesson(-1)}
                    disabled={activeLesson === 0}
                    className="px-4 py-2 bg-gray-300 rounded-md disabled:opacity-50"
                >
                    Předchozí lekce
                </button>
                <span>Lekce {activeLesson + 1}</span>
                <button
                    onClick={() => navigateLesson(1)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                    Další lekce
                </button>
            </div>

            {lessons[activeLesson].parts.map((part, index) => (
                <div key={index} className="mt-4 p-4 bg-gray-100 rounded-md">
                    <select
                        value={part.type}
                        onChange={(e) => changeLessonPartType(index, e.target.value)}
                        className="block w-full p-2 border border-gray-300 rounded-md mb-2"
                    >
                        <option value={ContentTypes.INFO}>Info</option>
                        <option value={ContentTypes.QUESTION}>Uzavřená otázka</option>
                        <option value={ContentTypes.CODE_SAMPLE}>Ukázka kódu</option>
                        <option value={ContentTypes.PROGRAMMING}>Programování</option>
                    </select>

                    {part.type === ContentTypes.INFO && (
                        <InfoPart part={part} index={index} updateLessonPart={updateLessonPart} />
                    )}

                    {part.type === ContentTypes.QUESTION && (
                        <QuestionPart part={part} index={index} updateLessonPart={updateLessonPart} />
                    )}

                    {part.type === ContentTypes.CODE_SAMPLE && (
                        <CodeSamplePart part={part} index={index} updateLessonPart={updateLessonPart} />
                    )}

                    {part.type === ContentTypes.PROGRAMMING && (
                        <ProgrammingPart part={part} index={index} updateLessonPart={updateLessonPart} />
                    )}

                    <button
                        onClick={() => removeLessonPart(index)}
                        className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md"
                    >
                        Odstranit část
                    </button>
                </div>
            ))}

            <div className="flex items-center justify-between mt-6">
                <button
                    onClick={addLessonPart}
                    className="mt-6 px-4 py-2 bg-green-500 text-white rounded-md"
                >
                    Přidat novou část lekce
                </button>
                <button
                    onClick={() => onCourseData(returnCourse())}
                    className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                    {existingCourse ? "Aktualizovat kurz" : "Uložit kurz"}
                </button>
            </div>
        </div>
    );
};

export default NewCourse;
