class Tabelas {
    init(conexao) {
        this.conexao = conexao;
        this.criarTabelaCarrinhos();
        this.criarTabelaPedidos();
        this.criarTabelaGrupos();
        this.criarTabelaSementes();
    }

    criarTabelaGrupos() {
        const sql = 
        `
        CREATE TABLE if not exists grupos (
            idgrupo int primary key not null auto_increment,
            grupoNome varchar(20) not null
          );
        `;
        this.conexao.query(sql, (error) => {
            if(error) {
                console.log(error);
                return;
            }
            console.log("Deu certo a tabela de grupos")
        })
    }

    criarTabelaPedidos() {
        const sql = 
        `
        create table if not exists pedidos(
            idpedido int primary key not null auto_increment,
            nome varchar(60) NOT NULL,
           preco int NOT NULL,
           quantidade int not null,
           id_carrinho_pedidos int,
            data_de_entrega date
         );
        `;
        this.conexao.query(sql, (error) => {
            if(error) {
                console.log(error);
                return;
            }
            console.log("Deu certo a tabela de pedidos")
        })
    }

    criarTabelaCarrinhos() {
        const sql = 
        `
        create table if not exists carrinho (
            idcarrinho int primary key NOT NULL AUTO_INCREMENT,
           nome varchar(60) NOT NULL,
           preco int NOT NULL,
           quantidade int not null
         );
        `;
        this.conexao.query(sql, (error) => {
            if(error) {
                console.log(error);
                return;
            }
            console.log("Deu certo a tabela de carrinhos")
        })
    }

    criarTabelaSementes() {
        const sql = 
        `
        CREATE TABLE if not exists sementes (
            idsemente int primary key NOT NULL AUTO_INCREMENT,
            nome varchar(60) NOT NULL,
            preco int NOT NULL,
            sementes_grupos_id int,
             FOREIGN KEY (sementes_grupos_id) REFERENCES grupos(idgrupo)
          );
        `;
        this.conexao.query(sql, (error) => {
            if(error) {
                console.log(error);
                return;
            }
            console.log("Deu certo a tabela de sementes")
        })
    }
}

module.exports = new Tabelas()