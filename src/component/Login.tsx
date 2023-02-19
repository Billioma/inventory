import { useUserAuth } from "@/context/UserAuthContext";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const { signUp, googleSignIn } = useUserAuth();
  const [password, setPassword] = useState("");
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      router.push("/about");
    } catch (err) {}
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        style={{ background: "red" }}
        type="email"
        placeholder="Username/Email ID"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        style={{ background: "blue" }}
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">login</button>
    </form>
  );
};

export default Login;
