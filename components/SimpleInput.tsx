import React from 'react';
import { styled } from '../stitches.config';
import { useForm, SubmitHandler } from 'react-hook-form';
import { H4 } from './heading';

// interface FormValue {
// 	name: string
//     id: string
//   	email: string
//   	password: string
//   	password_confirm: string
// };
const InputContainer = styled('div', {
    padding: '2rem',
});
const Input = styled('input', {
    boxSizing: 'border-box',
    alignItems: 'center',
    display: 'flex',
    padding: '1rem',
    gap: '0.5rem',
    width: '20rem',
    height: '4rem',
    border: '2px solid #F8F8F8',
});

const Label = styled('label', {
    padding: '1rem',
});
const SimpleInput = () => {
	const { register, handleSubmit, watch, formState: { errors, isDirty, isSubmitting } } = useForm<FormValue>()
    
    const onSubmitHandler: SubmitHandler<FormValue> = async(data) => {
        await new Promise((r) => setTimeout(r, 1000));
    	console.log(data);
    }
    return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
        <InputContainer>
            <Label htmlFor="email">
                <H4>이메일</H4>
            </Label>
            <Input
                id="email"
                type="text"
                placeholder="이메일을 입력해주세요."
                aria-invalid={!isDirty ? undefined : errors.email ? "true" : "false"}
                {...register("email", {
                required: "이메일은 필수 입력입니다.",
                pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "이메일 형식에 맞지 않습니다."
                }
                })}
            />
            {errors.email && <small role="alert">{errors.email.message}</small>}
        </InputContainer>

        <Label htmlFor="password">
            <H4>비밀번호</H4>
        </Label>
        <Input
            id="password"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            aria-invalid={!isDirty ? undefined : errors.password ? "true" : "false"}
            {...register("password", {
            required: "비밀번호는 필수 입력입니다.",
            minLength: {
                value: 8,
                message: "8자리 이상 비밀번호를 사용하세요."
            }
            })}
        />
        {errors.password && <small role="alert">{errors.password.message}</small>}
        <button type="submit" disabled={isSubmitting}>
            로그인
        </button>
    </form>
   )
};

export default SimpleInput;
