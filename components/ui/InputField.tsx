"use client";
import { Button } from "@/components/ui/button";
import { Input } from "./input";
import { InputFieldProps } from "@/types";
import PlusIcon from "./Plus";
const InputField = ({
  onSubmit,
  onTextChange,
  enteredValue,
}: InputFieldProps) => {
  return (
    <>
      <div className="flex items-center mt-12 ml-14 pt-14">
        <Input
          value={enteredValue}
          onChange={onTextChange}
          type="text"
          placeholder="Add a new task"
          className="w-[381px] h-[40px] mr-2 rounded-[10px] border-[1px] p-4 placeholder-input-color placeholder:text-[16px] bg-form-bg border-border-color text-white"
        />
        <Button
          className="flex justify-center items-center bg-border-color rounded"
          onClick={onSubmit}
        >
          <PlusIcon />
        </Button>
      </div>
    </>
  );
};

export default InputField;
