import React from "react";
import type { NextPage } from "next";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../components/input";
import useMutation from "../lib/client/useMutation";

interface EnterForm {
  userId: string;
  userName: string;
}


interface MutationResult {
  ok: boolean;
}

const Enter: NextPage = () => {

  const [enter, { loading, data, error }] =
  useMutation<MutationResult>("/api/users/enter");
  const { register, handleSubmit, reset } = useForm<EnterForm>();




  const onValid = (validForm: EnterForm) => {
    if (loading) return;
    enter(validForm);
  };



  return (
<div className="mt-16 px-4">
  <h3 className="text-3xl font-bold text-center">Tweeter</h3>
    <div className="mt-12">
          <form
            onSubmit={handleSubmit(onValid)}
            className="flex flex-col mt-8 space-y-4"
          >
              <Input
                register={register("userId", {
                  required: true,
                })}
                name="userId"
                label="Email address"
                type="email"
                required
              />
              <Input
                register={register("userName", {
                  required: true,
                })}
                name="userName"
                label="userName"
                type="text"
                required
              />
              <button>Login</button>
          </form> 
    </div>
</div>
  );
}
export default Enter;