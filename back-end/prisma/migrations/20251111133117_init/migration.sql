-- CreateTable
CREATE TABLE "Categoria" (
    "id_categoria" SERIAL NOT NULL,
    "nome_categoria" TEXT NOT NULL,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("id_categoria")
);

-- CreateTable
CREATE TABLE "Instituicao" (
    "id_instituicao" SERIAL NOT NULL,
    "nome_instituicao" TEXT NOT NULL,
    "site" TEXT,

    CONSTRAINT "Instituicao_pkey" PRIMARY KEY ("id_instituicao")
);

-- CreateTable
CREATE TABLE "Iniciativa" (
    "id_iniciativa" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "data_cadastro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fk_id_categoria" INTEGER NOT NULL,
    "fk_id_instituicao" INTEGER NOT NULL,

    CONSTRAINT "Iniciativa_pkey" PRIMARY KEY ("id_iniciativa")
);

-- AddForeignKey
ALTER TABLE "Iniciativa" ADD CONSTRAINT "Iniciativa_fk_id_categoria_fkey" FOREIGN KEY ("fk_id_categoria") REFERENCES "Categoria"("id_categoria") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Iniciativa" ADD CONSTRAINT "Iniciativa_fk_id_instituicao_fkey" FOREIGN KEY ("fk_id_instituicao") REFERENCES "Instituicao"("id_instituicao") ON DELETE RESTRICT ON UPDATE CASCADE;
