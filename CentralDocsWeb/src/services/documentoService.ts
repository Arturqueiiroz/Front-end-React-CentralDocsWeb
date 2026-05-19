import { API_URL } from "./api";

export type Documento = {
  id: number;
  numero: string;
  orgaoEmissor: string;
  cidadeEmissao: string;
  usuario: string;
  tipo: string;
};

export type TipoDocumento = {
  id: number;
  nome: string;
};

export type CriarDocumento = {
  numero: string;
  orgaoEmissor: string;
  dataEmissao: string;
  cidadeEmissao: string;
  usuarioId: number;
  tipoDocumentoId: number;
};

export async function buscarDocumentos(): Promise<Documento[]> {
  const token = localStorage.getItem("token");

  const resposta = await fetch(`${API_URL}/api/Documento`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!resposta.ok) {
    throw new Error("Erro ao buscar documentos.");
  }

  return resposta.json();
}

export async function buscarTiposDocumento(): Promise<TipoDocumento[]> {
  const resposta = await fetch(`${API_URL}/api/TipoDocumento`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!resposta.ok) {
    throw new Error("Erro ao buscar tipos de documento.");
  }

  return resposta.json();
}

export async function criarDocumento(dados: CriarDocumento) {
  const token = localStorage.getItem("token");

  const resposta = await fetch(`${API_URL}/api/Documento`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(dados),
  });

  const texto = await resposta.text();

  let resultado;
  try {
    resultado = texto ? JSON.parse(texto) : null;
  } catch {
    resultado = texto;
  }

  if (!resposta.ok) {
    console.log("Erro da API:", resultado);
    throw new Error(
      typeof resultado === "string"
        ? resultado
        : resultado?.mensagem || resultado?.Mensagem || "Erro ao criar documento."
    );
  }

  return resultado;
}