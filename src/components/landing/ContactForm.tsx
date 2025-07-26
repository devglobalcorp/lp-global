"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { dismissToast, showError, showLoading, showSuccess } from "@/utils/toast";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as z from "zod";

// REMOVIDO: Esquema de validação foi simplificado, removendo todos os campos de documento.
const formSchema = z.object({
  name: z.string().min(2, "Nome é obrigatório."),
  email: z.string().email("E-mail inválido."),
  phone: z.string().optional(),
  message: z.string().optional(),
  zipcode: z.string().min(1, "CEP é obrigatório.").regex(/^\d{5}-?\d{3}$/, "Formato de CEP inválido (Ex: 12345-678)."),
  state: z.string().min(1, "Estado é obrigatório."),
  city: z.string().min(1, "Cidade é obrigatória."),
  street: z.string().min(1, "Rua é obrigatória."),
  number: z.string().optional(),
  complement: z.string().optional(),
  neighborhood: z.string().min(1, "Bairro é obrigatório."),
});

type FormData = z.infer<typeof formSchema>;

const ContactForm = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    // REMOVIDO: Valores padrão para os campos de documento foram removidos.
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      zipcode: "",
      state: "",
      city: "",
      street: "",
      number: "",
      complement: "",
      neighborhood: "",
    },
  });

  // Função para buscar endereço via ViaCEP (mantida)
  const fetchAddressByZipCode = async (cep: string) => {
    const cleanedCep = cep.replace(/\D/g, '');
    if (cleanedCep.length !== 8) {
      form.setValue("state", "");
      form.setValue("city", "");
      form.setValue("street", "");
      form.setValue("neighborhood", "");
      return;
    }

    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cleanedCep}/json/`);
      const data = response.data;

      if (data.erro) {
        showError("CEP não encontrado.");
        form.setValue("state", "");
        form.setValue("city", "");
        form.setValue("street", "");
        form.setValue("neighborhood", "");
        return;
      }

      form.setValue("state", data.uf);
      form.setValue("city", data.localidade);
      form.setValue("street", data.logradouro);
      form.setValue("neighborhood", data.bairro);
    } catch (error) {
      console.error("Erro ao buscar CEP na ViaCEP:", error);
      showError("Erro ao buscar CEP. Verifique sua conexão ou tente novamente.");
      form.setValue("state", "");
      form.setValue("city", "");
      form.setValue("street", "");
      form.setValue("neighborhood", "");
    }
  };

  const onSubmit = async (data: FormData) => {
    let loadingToastId: string | undefined;

    try {
      const LUVICK_API_TOKEN = import.meta.env.VITE_LUVICK_API_TOKEN;

      if (!LUVICK_API_TOKEN || LUVICK_API_TOKEN === "YOUR_LUVICK_API_TOKEN") {
        showError("Token da Luvik API não configurado.");
        return;
      }

      // MANTIDO: Esta é a linha que exibe o toast de carregamento.
      loadingToastId = showLoading("Enviando sua solicitação...");

      // REMOVIDO: Campos 'type' e 'document' removidos do payload enviado à API.
      const payload: any = {
        name: data.name,
        email: data.email,
        phone: data.phone || "",
        details: data.message || "Contato via Landing Page - Quero ser Partner Global Energia Solar",
        originLabel: "Outros",
        tags: ["partner", "energia-solar"],
        zipcode: data.zipcode.replace(/\D/g, ''),
        state: data.state,
        city: data.city,
        street: data.street,
        number: data.number || "",
        complement: data.complement || "",
        neighborhood: data.neighborhood,
      };

      await axios.post(`https://services.luvik.com.br/api/v1/contacts?apiKey=${LUVICK_API_TOKEN}`, payload, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${LUVICK_API_TOKEN}`,
        },
      });

      showSuccess("Sua solicitação foi enviada com sucesso! Em breve entraremos em contato.");
      form.reset();
    } catch (error) {
      console.error("Error sending form to Luvik API:", error);
      showError("Ocorreu um erro ao enviar sua solicitação. Por favor, tente novamente.");
    } finally {
      // MANTIDO: Esta linha remove o toast de carregamento após a conclusão (sucesso ou erro).
      if (loadingToastId) {
        dismissToast(loadingToastId);
      }
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl text-gray-900">
      <h2 className="text-2xl font-bold mb-6 text-center">Quero ser Partner agora!</h2>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="mb-4">
          <Label htmlFor="name">Nome:</Label>
          <Input id="name" type="text" placeholder="Seu nome completo" {...form.register("name")} />
          {form.formState.errors.name && (<p className="text-red-500 text-sm mt-1">{form.formState.errors.name.message}</p>)}
        </div>
        <div className="mb-4">
          <Label htmlFor="email">E-mail:</Label>
          <Input id="email" type="email" placeholder="seu@email.com" {...form.register("email")} />
          {form.formState.errors.email && (<p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>)}
        </div>
        <div className="mb-4">
          <Label htmlFor="phone">Telefone (opcional):</Label>
          <Input id="phone" type="tel" placeholder="(XX) XXXXX-XXXX" {...form.register("phone")} />
        </div>

        {/* Campos de Endereço (mantidos) */}
        <div className="mb-4">
          <Label htmlFor="zipcode">CEP:</Label>
          <Input id="zipcode" type="text" placeholder="XXXXX-XXX" {...form.register("zipcode")} onBlur={(e) => fetchAddressByZipCode(e.target.value)} />
          {form.formState.errors.zipcode && (<p className="text-red-500 text-sm mt-1">{form.formState.errors.zipcode.message}</p>)}
        </div>
        <div className="mb-4">
          <Label htmlFor="state">Estado:</Label>
          <Input id="state" type="text" placeholder="Estado" {...form.register("state")} />
          {form.formState.errors.state && (<p className="text-red-500 text-sm mt-1">{form.formState.errors.state.message}</p>)}
        </div>
        <div className="mb-4">
          <Label htmlFor="city">Cidade:</Label>
          <Input id="city" type="text" placeholder="Cidade" {...form.register("city")} />
          {form.formState.errors.city && (<p className="text-red-500 text-sm mt-1">{form.formState.errors.city.message}</p>)}
        </div>
        <div className="mb-4">
          <Label htmlFor="neighborhood">Bairro:</Label>
          <Input id="neighborhood" type="text" placeholder="Bairro" {...form.register("neighborhood")} />
          {form.formState.errors.neighborhood && (<p className="text-red-500 text-sm mt-1">{form.formState.errors.neighborhood.message}</p>)}
        </div>
        <div className="mb-4">
          <Label htmlFor="street">Rua:</Label>
          <Input id="street" type="text" placeholder="Rua" {...form.register("street")} />
          {form.formState.errors.street && (<p className="text-red-500 text-sm mt-1">{form.formState.errors.street.message}</p>)}
        </div>
        <div className="mb-4 flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <Label htmlFor="number">Número:</Label>
            <Input id="number" type="text" placeholder="Número" {...form.register("number")} />
          </div>
          <div className="flex-1">
            <Label htmlFor="complement">Complemento (opcional):</Label>
            <Input id="complement" type="text" placeholder="Apto, Bloco, etc." {...form.register("complement")} />
          </div>
        </div>

        {/* REMOVIDO: Seção inteira de seleção de documento, número do documento e campos condicionais de PF/PJ. */}

        <div className="mb-6">
          <Label htmlFor="message">Sua Mensagem (opcional):</Label>
          <Textarea id="message" rows={4} placeholder="Conte-nos um pouco sobre seu interesse ou negócio." {...form.register("message")} />
        </div>
        <div className="text-center">
          <Button
            type="submit"
            className="bg-[#FE6608] text-white font-bold py-3 px-8 rounded-full text-md hover:bg-orange-600 transition duration-300 shadow-lg max-w-full"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? "Enviando..." : "QUERO SER PARTNER AGORA"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;