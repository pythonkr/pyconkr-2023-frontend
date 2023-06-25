import {
  ProgramDifficulty,
  ProgramDuration,
  ProgramLanguage,
} from '@/@types/program';

export const DIFFICULTY: { [T in ProgramDifficulty]: string } = {
  BEGINNER: '하',
  INTERMEDIATE: '중',
  EXPERIENCED: '상',
};

export const DURATION: { [T in ProgramDuration]: string } = {
  SHORT: '25분',
  LONG: '40분',
};

export const LANGUAGE: { [T in ProgramLanguage]: string } = {
  KOREAN: '한국어',
  ENGLISH: '영어',
};
