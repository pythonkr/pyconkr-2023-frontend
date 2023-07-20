import {
  SessionDifficulty,
  SessionDuration,
  SessionLanguage,
} from '@/@types/session';

export const DIFFICULTY: { [T in SessionDifficulty]: string } = {
  BEGINNER: '하',
  INTERMEDIATE: '중',
  EXPERIENCED: '상',
};

export const DURATION: { [T in SessionDuration]: string } = {
  SHORT: '25분',
  LONG: '40분',
};

export const LANGUAGE: { [T in SessionLanguage]: string } = {
  KOREAN: '한국어',
  ENGLISH: '영어',
};
