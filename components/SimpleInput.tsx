import React from 'react';
import { styled } from 'stitches.config';
import { useForm, SubmitHandler } from 'react-hook-form';
import { H4 } from './heading';
import ClearInput from '../public/icons/Clear.svg';
import CheckInput from '../public/icons/Check.svg';

const StyledInputArea = styled('form', {
    padding: '1rem',
});

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
        border: '2px solid #F8F8F8',
        color: '#F8F8F8',
    },
    variants: {
        size: {
            small: {
                width: '20rem',
            },
            big: {
                width: '38rem',
            },
        },
        validation: {
            success: {
                border: '2px solid #45B26B',
            },
            fail: {
                border: '2px solid #BE3455',
                color: '#BE3455',
            },
            editing: {
                border: '2px solid #F8F8F8',
            }
        }
    },
    defaultVariants: {
        size: "small",
        validation: 'editing',
    }
});

const actionList = {
    email: {
        required: "이메일은 필수 입력입니다.",
        pattern: {
            value: /\S+@\S+\.\S+/,
            message: "이메일 형식에 맞지 않습니다."
        }
    },
    password: {
        required: "비밀번호는 필수 입력입니다.",
        minLength: {
            value: 8,
            message: "8자리 이상 비밀번호를 사용하세요."
        }
    },
    text: {
        required: "이 항목은 필수 입력입니다.",
    }
};

// define types for hook form
type FormValues = {
    email: string;
    password: string;
    text: string;
};
// interface with all input props
interface InputProps {
    type?: 'text' | 'email' | 'password';
    size?: 'small' | 'big';
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const SimpleInput = ({
    type = 'text',
    size = 'small',
    label,
    placeholder,
    disabled = false,
    onChange,
    ...props
}: InputProps) => {
    const { register, handleSubmit, watch, reset, setFocus, formState: { errors, isDirty } } = useForm<FormValues>({
        mode: "onBlur"
    });
    const onSubmitHandler: SubmitHandler<FormValues> = async (data) => {
        await new Promise((r) => setTimeout(r, 1000));
    };

    return (
        <StyledInputArea onSubmit={handleSubmit(onSubmitHandler)}>
            <Label htmlFor={type}>
                <H4>{label}</H4>
            </Label>
            <StyledInput
                id={type}
                type={type}
                size={size}
                placeholder={placeholder}
                aria-invalid={!isDirty ? undefined : errors[type] ? 'true' : 'false'}
                validation={!isDirty ? 'editing' : errors[type] === undefined ? 'success' : 'fail'}
                {...register(type, actionList[type])}
                {...props}
            />
            {!isDirty? 
                null 
                : 
                errors[type] === undefined ? 
                    size==='small' ? (
                        <IconBox>
                            <CheckInput/>
                        </IconBox>
                    ) : (
                        <LongIconBox>
                            <CheckInput/>
                        </LongIconBox>
                    )
                    : 
                    size==='small' ? (
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
        </StyledInputArea>
    );

}

export default SimpleInput;