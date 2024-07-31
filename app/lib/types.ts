export interface Option {
  text: string;
  correct: boolean;
}

export interface Content {
  text?: string;
  options?: Option[];
  language?: string;
  code?: string;
  output?: string;
  image?: File;
}

export interface Part {
  content: Content;
}

export interface LessonPartProps {
  part: Part;
  index: number;
  updateLessonPart: (index: number, content: Content) => void;
}
