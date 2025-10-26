# 💡 SUS Iniciativas Digitais

Catálogo de cases de sucesso em saúde digital, com base no projeto **GT7 – Uso Racional das IAs Generativas e Chatbots no Apoio ao Profissional de Saúde**.

## 🎯 Objetivo
Reunir e organizar cases reais de iniciativas digitais implementadas no SUS, permitindo que outras instituições possam se inspirar, replicar e aprimorar soluções de saúde digital.

## 🧩 Tecnologias
- Node.js
- Prisma ORM
- PostgreSQL (com pgAdmin)
-

## 🧱 Estrutura do Banco
O banco contém três entidades:
- **Categoria** (ex: Telemedicina, Prontuário Eletrônico)
- **Instituição** (ex: Secretaria de Saúde do Ceará)
- **Iniciativa** (ex: UBS+Digital, AGHUse Bahia)

## 🚀 Como executar
```bash
git clone https://github.com/seuusuario/sus-iniciativas-digitais
```
```bash
cd sus-iniciativas-digitais
```
```bash
npm install
```
```bash
npx prisma migrate dev --name init
```
```bash
npm run seed
```
```bash
npm start
```
