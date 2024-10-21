import React from "react";
import { useForm } from "react-hook-form";
import { login } from "../http/login";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  async function handleLogin(data) {
    try {
      await login(data);
      navigate("/home");
    } catch (error) {
      console.error("Invalid Credentials", error);
      setError("apiKey", {
        type: "manual",
        message: "Credenciais inválidas. Verifique a chave API.",
      });
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <p className="text-gray-600 mb-4 text-center">
          Insira a chave da sua API Blip para acessar os seus contatos
        </p>
        <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="API KEY"
              {...register("apiKey", { required: "A chave API é obrigatória" })}
              className={`w-full p-3 border rounded-md ${
                errors.apiKey ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.apiKey?.message && (
              <p className="text-red-500 mt-2">
                {String(errors.apiKey.message)}
              </p>
            )}
          </div>
          <div>
            <input
              type="submit"
              value="Entrar"
              className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition duration-300"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
