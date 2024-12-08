import knex from "knex";
import knexfile from "./knexfile.js";
import { criarTabela, inserirPessoa, consultar, alterarDados, deletarDados } from "./funcoes.js";

const conexao = knex(knexfile)



// criar tabela
// await criarTabela(conexao)



// inserir pessoa
//                                     obs:tabem pode ser um array de objetos no param dados
// await inserirPessoa(conexao, {nome:"eduardo", email:"eduardo@email.com"})


//consultar dados
await consultar(conexao, {id:4} )


// alterar dados
// await alterarDados(conexao,{id:2},{nome:"Jozefina", email:"jozefina@email.com"})


// deletar dados

// await deletarDados(conexao,{id:1})

// para encerrar  conexao com o database
conexao.destroy()