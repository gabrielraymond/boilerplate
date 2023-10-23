"use client";
import Button from "@/components/button/button";
import Input from "@/components/form/input/input";
import InputPassword from "@/components/form/input/inputPassword";
import { useApiLoginStore } from "@/store/login";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";
import { Controller } from "react-hook-form";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
  usernameOrEmail: string;
  password: string;
}

const FormLogin = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
    setValue,
    reset,
  } = useForm<IFormInput>();

  const handleOnSubmit = useApiLoginStore((state) => state.handleOnSubmit);
  const token = useApiLoginStore((state) => state.token);
  const isSuccess = useApiLoginStore((state) => state.isSuccess);

  //   useEffect(() => {
  //     if (token) {
  //       redirect("/private");
  //     }
  //   }, [token]);

  useEffect(() => {
    console.log(isSuccess);
    if (isSuccess) {
      redirect("/private");
    }
  }, [isSuccess]);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const body: IFormInput = {
      usernameOrEmail: data.usernameOrEmail,
      password: data.password,
    };

    console.log(body);
    handleOnSubmit(body);
  };

  return (
    <div className="bg-lightColor w-[447px] h-[405px] rounded-lg p-[36px]">
      <h2 className="text-2xl font-bold mb-6">Masuk</h2>
      <form>
        <div className="mb-4">
          <Controller
            name="usernameOrEmail" // Nama field yang digunakan dalam validasi
            control={control}
            defaultValue=""
            render={({ field }: any) => (
              <Input
                type="text"
                size="reguler"
                placeholder="Username/Email"
                field={field}
                label="Username/email"
                name="usernameOrEmail"
                setValue={setValue}
              />
            )}
          />
        </div>
        <div className="mb-2">
          <Controller
            name="password" // Nama field yang digunakan dalam validasi
            control={control}
            defaultValue=""
            render={({ field }: any) => (
              <InputPassword
                type="password"
                size="reguler"
                placeholder="Password"
                field={field}
                label="password"
                name="password"
                setValue={setValue}
              />
            )}
          />
        </div>
      </form>
      <div className="mb-9">
        <Link href={"/lupa-password"}>Lupa Password?</Link>
      </div>

      <div>
        <Button
          disabled={false}
          size="large"
          styleType="primary"
          onClick={handleSubmit(onSubmit)}
          label="Masuk"
        />
      </div>
    </div>
  );
};

export default FormLogin;
