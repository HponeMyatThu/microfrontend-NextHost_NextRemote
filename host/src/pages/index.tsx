'use client';

import dynamic from "next/dynamic";
// import { useState } from "react";

type RemoteButtonProps = {
  title: string;
  extraValue: {
    name: string;
    passwords: string;
  };
};

type RemoteInputProps = {
  type: string;
  className: string;
  placeholder: string;
  value: string;
  setChange: (value: string) => void;
};

const RemoteButton = dynamic<RemoteButtonProps>(
  () =>
    import("remote/Button").then(
      (mod) => mod.default as React.ComponentType<RemoteButtonProps>
    ),
  { ssr: false }
);
const RemoteInputName = dynamic<RemoteInputProps>(
  () =>
    import("remote/Input").then(
      (mod) => mod.default as React.ComponentType<RemoteInputProps>
    ),
  { ssr: false }
);
const RemoteInputPassword = dynamic<RemoteInputProps>(
  () =>
    import("remote/Input").then(
      (mod) => mod.default as React.ComponentType<RemoteInputProps>
    ),
  { ssr: false }
);

const Home = () => {
  const mockObj = {
    name: "John Doe",
    passwords: "password123",
  };
  // const [name, setName] = useState<string>("");
  // const [password, setPassword] = useState<string>("");

  return (
    <div>
      <h1>Host Application</h1>
      <RemoteInputName
        type={"text"}
        className={""}
        placeholder={"Enter name"}
        setChange={() => {}}
        value={""}
      />
      <br />
      <RemoteInputPassword
        type={"password"}
        className={""}
        placeholder={"Enter password"}
        setChange={() => {}}
        value={""}
      />
      <br />
      <RemoteButton title="Login" extraValue={mockObj} />
    </div>
  );
};

export default Home;
