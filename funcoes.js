 
 export async function criarTabela(conexao) {
    await conexao.schema.createTable("pessoas", tabela => {

        tabela.increments("id")
        tabela.string("nome")
        tabela.string("email")
    })
    console.log("tabela criada")
}


export async function inserirPessoa(conexao,dados) {
 
    await conexao("pessoas").insert(dados)
    console.log("pessoa inserida")
}


 export async function consultar(conexao, filtro) {
    //    select() =  o campo que vai ser exibido ex: select(["id","nome"]) 
    const dados = await conexao.select().from("pessoas").where(filtro)
    console.log(dados)

}


export async function alterarDados(conexao,ondeAlterar,oQueAlterar) {
    
    await conexao("pessoas").where(ondeAlterar).update(oQueAlterar)
    console.log("dados alterados")

}


export async function deletarDados(conexao,filtro) {
    
    await conexao("pessoas").where(filtro).del()
    console.log("Dados deletados!")

}





