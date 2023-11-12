import React from "react";
import { FieldErrors, useForm} from "react-hook-form";


interface EnrollForm {
  userId : string;
  userName : string;
  errors? : string;
}


export default function Forms(){
  const { register, 
    handleSubmit, 
    formState : {errors},
    setValue,
    setError,
    reset,
    resetField
  } = useForm<EnrollForm>({
  
    mode : "onChange",// onBlur, onChange, onSubmit등의 옵션이 있음

  });


  const onValid = (data:EnrollForm) => {
    console.log("i'm valid ^^");
    //setError("username", {message:"Taken"});
    //setError("errors", {message : "backend is problem"});
    reset();
   
  };

  const onInvalid = (errors:FieldErrors) => {
      console.log(errors);
  };  

  return(
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
        <input
        {...register("userId", {
            required : true,
            validate :{
              notDaum : (value) =>
              !value.includes("@daum.net") ||"Daum is not allowed", // boolean반환
              // 왜 삼항 연산자 쓰니까 안되지?
          },
        })}
        type="email"
        placeholder="userId"
        />
        {errors.userId?.message}
        
     
        
        <input
        {...register("userName", {
            required : true,
            minLength: {
              message : "must loger than 4 chars ",
              value : 4,
          }, // 에러타입도 바로 알 수 있음
        })}
        type="text"
        placeholder="userName"
        />
        {errors.userId?.message}

        <input type="submit" value="Create Account" />
        {errors.errors?.message}
    </form>

    );

}

