import React from 'react';
import { styled } from 'stitches.config';
import { useForm, SubmitHandler } from 'react-hook-form';
import { H4 } from './heading';
import ClearInput from '../public/icons/Clear.svg';
import CheckInput from '../public/icons/Check.svg';

const Label = styled('label', {
    padding: '.5rem',
});

const IconBox = styled('span', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  
    '& svg': {
      width: '0.8rem', 
      marginTop: '-3.7rem', 
      marginRight: '1.4rem', 
    },
});

const LongIconBox = styled('span', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  
    '& svg': {
      width: '1.5rem',
      marginTop: '-3.7rem', 
      marginRight: '-34.6rem',
    }
});

const StyledInput = styled('input', {
    boxSizing: 'border-box',
    alignItems: 'center',
    display: 'flex',
    padding: '1rem',
    gap: '0.5rem',
    width: '20rem',
    height: '4rem',
    fontSize: '1.25rem',
    '&:focus':{
        border: '2px solid $textPrimary',
        color: '$textPrimary',
    },
    variants: {
        length: {
            short: {
                width: '20rem',
            },
            long: {
                width: '36.375rem',
            },
        },
        isvalid: {
            success: {
                border: '2px solid $functionalGreen',
            },
            fail: {
                border: '2px solid $functionalRed',
                color: '$functionalRed',
            },
            editing: {
                border: '2px solid $textPrimary',
            }
        }
    },
    defaultVariants: {
        length: "short",
        isvalid: 'editing',
    }
});
// 
const validate = (type: string, onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void) => {
    if(type === 'email') {
        return {
            required: "이메일은 필수 입력입니다.",
            pattern: {
                value: /\S+@\S+\.\S+/,
                message: "이메일 형식에 맞지 않습니다."
            },
            onChange: onChange,
        }
    } else if(type==='password') {
        return {
            required: "비밀번호는 필수 입력입니다.",
            minLength: {
                value: 8,
                message: "8자리 이상 비밀번호를 사용하세요."
            },
            onChange: onChange,
        }
    } else {
        return {
            required: "이 항목은 필수 입력입니다.",
            onChange: onChange,
        }
    }
};

// define types for hook form
type FormValues = {
    email: string;
    password: string;
    text: string;
};
// interface with all input props
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type?: 'text' | 'email' | 'password';
    length?: 'short' | 'long'; 
    label?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const SimpleInput = ({
    type = 'text',
    length = 'short',
    label,
    placeholder,
    disabled = false,
    onChange,
    ...props
}: InputProps) => {
    const { register, handleSubmit, watch, reset, setFocus, formState: { errors, isDirty } } = useForm<FormValues>({
        mode: "onBlur"
    });
    
    return (
        <>
            {
                label===undefined ? null : 
                <Label htmlFor={type}>
                    <H4>{label}</H4>
                </Label>
            }
            <StyledInput
                id={type}
                type={type}
                length={length}
                placeholder={placeholder}
                aria-invalid={!isDirty ? undefined : errors[type] ? true : false}
                isvalid={!isDirty ? 'editing' : errors[type] === undefined ? 'success' : 'fail'}
                {...register(type, validate(type, onChange))}
                {...props}
            />
            {!isDirty? 
                null 
                : 
                errors[type] === undefined ? 
                    length==='short' ? (
                        <IconBox>
                            <CheckInput/>
                        </IconBox>
                    ) : (
                        <LongIconBox>
                            <CheckInput/>
                        </LongIconBox>
                    )
                    : 
                    length==='short' ? (
                        <IconBox>
                            <ClearInput onClick={()=>{
                                reset(this);
                            }}/>
                        </IconBox>
                    ) : (
                        <LongIconBox>
                            <ClearInput onClick={()=>{
                                reset(this);
                            }}/>
                        </LongIconBox>
                    )
            }
        </>
    );

}

export default SimpleInput;