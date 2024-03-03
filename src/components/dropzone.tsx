"use client";
import { cn } from "@/lib/utils";
import React from "react";
import Dropzone from "react-dropzone";

const DropzoneInput = () => {
  const MAXSIZE = 52428800;
  return (
    <Dropzone
      minSize={0}
      maxSize={MAXSIZE}
      onDrop={(acceptedFiles) => console.log(acceptedFiles)}
    >
      {({
        getRootProps,
        getInputProps,
        isDragActive,
        isDragReject,
        fileRejections,
      }) => {
        const isLarge =
          fileRejections.length > 0 && fileRejections[0].file.size > MAXSIZE;
        return (
          <section className="m-4">
            <div
              {...getRootProps()}
              className={cn(
                "w-full h-52 flex justify-center items-center p-5 border border-black rounded-lg text-center cursor-pointer",
                isDragActive
                  ? "bg-[#035FFE] text-white animate-pulse"
                  : "bg-slate-100/50 dark:bg-slate-800/80 text-slate-400",
              )}
            >
              <input {...getInputProps()} />
              {!isDragActive && "Click here or drop a file to upload!"}
              {isDragActive && !isDragReject && "Drop to upload!"}
              {isDragReject && "File type not accepted!"}
              {isLarge && (
                <h1 className="text-danger mt-2">Oops, file too large!</h1>
              )}
            </div>
          </section>
        );
      }}
    </Dropzone>
  );
};

export default DropzoneInput;
