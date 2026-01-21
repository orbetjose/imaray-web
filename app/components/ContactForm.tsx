"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {

  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    numero: "",
    mensaje: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage("¡Formulario enviado exitosamente!");
        setFormData({ nombre: "", correo: "", numero: "", mensaje: "" });
      } else {
        setStatus("error");
        setMessage(data.error || "Error al enviar el formulario");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Error de conexión");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="md:max-w-lg pt-6">
      <form
        onSubmit={handleSubmit}
        className="space-y-4">
        <div>
          <label
            htmlFor="nombre"
            className="mb-2 font-medium hidden">
            Nombre y apellido
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Nombre y apellido"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg bg-white focus:outline-none focus:border-2 focus:border-purple text-black font-sans "
          />
        </div>

        <div>
          <label
            htmlFor="correo"
            className="mb-2 font-medium hidden">
            Correo
          </label>
          <input
            type="email"
            id="correo"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            placeholder="Correo"
            required
            className="w-full px-4 py-2 border rounded-lg bg-white focus:outline-none focus:border-2 focus:border-purple text-black font-sans"
          />
        </div>

        <div>
          <label
            htmlFor="numero"
            className="mb-2 font-medium hidden">
            Número
          </label>
          <input
            type="tel"
            id="numero"
            name="numero"
            value={formData.numero}
            onChange={handleChange}
            placeholder="Número"
            required
            className="w-full px-4 py-2 border rounded-lg bg-white focus:outline-none focus:border-2 focus:border-purple text-black font-sans"
          />
        </div>

        <div>
          <label
            htmlFor="mensaje"
            className="mb-2 font-medium hidden">
            Mensaje
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            placeholder="Mensaje"
            required
            rows={4}
            className="w-full px-4 py-2 border rounded-lg bg-white focus:outline-none focus:border-2 focus:border-purple text-black font-sans"
          />
        </div>
        <div className="w-40 bg-transparent border border-white text-white py-1 px-4 rounded-3xl hover:bg-purple hover:border-purple hover:text-white disabled:opacity-50 font-sans font-black flex justify-evenly items-center">
          <button
            type="submit"
            disabled={status === "loading"}
            className="cursor-pointer">
            {status === "loading" ? "Enviando..." : "Enviar"}
          </button>
          <span className="text-xl">&#8594;</span>
        </div>

        {message && (
          <div
            className={`font-sans p-4 rounded ${status === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
            {message}
          </div>
        )}
      </form>
    </div>
  );
}
