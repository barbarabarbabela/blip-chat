import React from "react";
import { useForm } from "react-hook-form";
import "./../App.css";
import { login } from "../http/login";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const { register, handleSubmit, setError, formState: { errors } } = useForm();

  const navigate = useNavigate();

  async function handleLogin(data) {
    try {
      await login(data);
      navigate("/home");
    } catch (error) {
      console.error("Invalid Credentials", error);
      setError("apiKey", {
        type: "manual",
        message: "Credenciais inválidas. Verifique a chave API."
      });
      
    }
  }

  return (
    <div className="container">
      <h1>Login</h1>
      <p>Insira a chave da sua API Blip para acessar os seus contatos</p>
      <form onSubmit={handleSubmit(handleLogin)}>
        <div className="input-container">
          <input 
            type="text" 
            placeholder="API KEY" 
            {...register("apiKey", { required: "A chave API é obrigatória" })} 
            className={errors.apiKey ? "input-error" : ""}
          />
        {errors.apiKey?.message && (
            <p className="error">{String(errors.apiKey.message)}</p>
          )}
        </div>
        <input type="submit" value="Entrar" />
      </form>
    </div>
  );
}

export default LoginPage;
