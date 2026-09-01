import { API_URL, USE_MOCK } from "./api";

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
  tipoDocumentoId: number;
};

// Dados Mockados Iniciais
let mockDocumentos: Documento[] = [
  {
    id: 1,
    numero: "DOC-2026-001",
    orgaoEmissor: "Receita Federal",
    cidadeEmissao: "São Paulo",
    usuario: "Nicolay Neves",
    tipo: "Certidão Negativa",
  },
  {
    id: 2,
    numero: "DOC-2026-002",
    orgaoEmissor: "Junta Comercial",
    cidadeEmissao: "Rio de Janeiro",
    usuario: "Nicolay Neves",
    tipo: "Contrato Social",
  },
  {
    id: 3,
    numero: "DOC-2026-003",
    orgaoEmissor: "Prefeitura de SP",
    cidadeEmissao: "São Paulo",
    usuario: "Nicolay Neves",
    tipo: "Alvará de Funcionamento",
  },
  {
    id: 4,
    numero: "DOC-2026-004",
    orgaoEmissor: "Cartório de Notas",
    cidadeEmissao: "Belo Horizonte",
    usuario: "Nicolay Neves",
    tipo: "Procuração",
  },
];

const mockTipos: TipoDocumento[] = [
  { id: 1, nome: "Certidão Negativa" },
  { id: 2, nome: "Contrato Social" },
  { id: 3, nome: "Alvará de Funcionamento" },
  { id: 4, nome: "Procuração" },
];

export async function buscarDocumentos(): Promise<Documento[]> {
  if (USE_MOCK) {
    return Promise.resolve(mockDocumentos);
  }

  const token = localStorage.getItem("token");

  try {
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
  } catch (error) {
    console.warn("API indisponível ou com erro, utilizando dados mockados:", error);
    return mockDocumentos;
  }
}

export async function buscarTiposDocumento(): Promise<TipoDocumento[]> {
  if (USE_MOCK) {
    return Promise.resolve(mockTipos);
  }

  try {
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
  } catch (error) {
    console.warn("API indisponível ou com erro, utilizando tipos mockados:", error);
    return mockTipos;
  }
}

export async function criarDocumento(dados: CriarDocumento) {
  if (USE_MOCK) {
    const tipoEncontrado = mockTipos.find((t) => t.id === Number(dados.tipoDocumentoId));
    const novoDoc: Documento = {
      id: Date.now(),
      numero: dados.numero,
      orgaoEmissor: dados.orgaoEmissor,
      cidadeEmissao: dados.cidadeEmissao,
      usuario: "Nicolay Neves",
      tipo: tipoEncontrado?.nome || "Documento Geral",
    };
    mockDocumentos.unshift(novoDoc);
    return Promise.resolve({ mensagem: "Documento criado com sucesso (Mock)!", documento: novoDoc });
  }

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