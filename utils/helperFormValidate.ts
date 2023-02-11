import { FieldErrors } from 'react-hook-form';

const validateRule = {
  email: {
    required: '이메일은 필수 입력입니다.',
    pattern: {
      value: /\S+@\S+\.\S+/,
      message: '이메일 형식에 맞지 않습니다.',
    },
  },
  password: {
    required: '비밀번호는 필수 입력입니다.',
    minLength: {
      value: 8,
      message: '8자리 이상 비밀번호를 사용하세요.',
    },
  },
  phone: {
    pattern: {
      value: /^[0-9]*$/,
      message: '숫자만 입력이 가능합니다.',
    },
  },
  default: {},
} as const;

// input validation function
export const validateChecker = (type: string) => {
  if (type in validateRule) {
    return validateRule[type as keyof typeof validateRule];
  }
  return validateRule.default;
};

export const isCurrentTypeValid = (
  isDirty: boolean | undefined,
  type: keyof FieldErrors,
  errors: FieldErrors
) => {
  if (typeof isDirty === 'undefined') {
    return undefined;
  }
  return !isDirty
    ? undefined
    : typeof errors[type]?.message === 'undefined'
    ? true
    : false;
};
