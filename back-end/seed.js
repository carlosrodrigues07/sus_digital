const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Categorias
  await prisma.categoria.createMany({
    data: [
      { nome_categoria: "Doenças Crônicas" },
      { nome_categoria: "Saúde Mental" },
      { nome_categoria: "Atenção Primária" },
      { nome_categoria: "Interoperabilidade de Dados" },
      { nome_categoria: "Educação e Treinamento" },
    ],
  });

  // Instituições
  await prisma.instituicao.createMany({
    data: [
      { nome_instituicao: "Prefeitura de Fortaleza", site: "https://saudedigital.fortaleza.ce.gov.br" },
      { nome_instituicao: "Fiocruz / Ministério da Saúde", site: "https://www.gov.br/saude/pt-br/composicao/saps/saude-mental/telepsi" },
      { nome_instituicao: "DATASUS / Ministério da Saúde", site: "https://bi.saude.gov.br" },
      { nome_instituicao: "Ministério da Saúde", site: "https://capacitasus.saude.gov.br" },
      { nome_instituicao: "Prefeitura de Recife", site: "https://recife.pe.gov.br/noticias/saude-digital" },
      { nome_instituicao: "Prefeitura de São Paulo", site: "https://www.prefeitura.sp.gov.br/cidade/secretarias/saude/saude_mental/" },
    ],
  });

  // Iniciativas
  await prisma.iniciativa.createMany({
    data: [
      {
        titulo: "Monitoramento de Hipertensos em Fortaleza",
        descricao: "Sistema real de acompanhamento remoto de pacientes hipertensos via aplicativo móvel e alertas automáticos, com integração às UBSs.",
        fk_id_categoria: 1,
        fk_id_instituicao: 1,
      },
      {
        titulo: "TelePSI Fiocruz",
        descricao: "Serviço nacional de teleatendimento psicológico gratuito criado pela Fiocruz para profissionais de saúde durante e após a pandemia.",
        fk_id_categoria: 2,
        fk_id_instituicao: 2,
      },
      {
        titulo: "Painel BI-SUS",
        descricao: "Painel nacional do DATASUS para monitoramento de indicadores da Atenção Primária (hipertensão, diabetes, vacinação etc.).",
        fk_id_categoria: 4,
        fk_id_instituicao: 3,
      },
      {
        titulo: "CapacitaSUS",
        descricao: "Plataforma de cursos e formações online para profissionais do SUS, voltada à saúde digital e inovação pública.",
        fk_id_categoria: 5,
        fk_id_instituicao: 4,
      },
      {
        titulo: "Projeto Cuidar Melhor – Recife",
        descricao: "Programa de acompanhamento remoto de pacientes crônicos com envio de lembretes e integração ao prontuário eletrônico.",
        fk_id_categoria: 3,
        fk_id_instituicao: 5,
      },
      {
        titulo: "Rede de Atenção Psicossocial Digital (RAPS-SP)",
        descricao: "Iniciativa da Prefeitura de São Paulo que digitalizou atendimentos psicológicos nos CAPS, integrando prontuário eletrônico e consultas híbridas.",
        fk_id_categoria: 2,
        fk_id_instituicao: 6,
      },
    ],
  });

  console.log("✅ Banco populado com cases reais de sucesso!");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => prisma.$disconnect());
