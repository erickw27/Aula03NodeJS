const express = require('express');
 
const app = express();
 
app.use(express.json());
 
app.get('/home', (req, res) => {
    res.send('ADS UNIP Desenvolvimento NodeJS!');
});
 
app.get('/mensagem', (req, res) => {
    res.send( { mensagem: "Nossa segunda API!",
                professor: "Eu (Joseffe)"
              } );
});
 
app.post('/inserirCliente', (req, res) => {
    const {nome} = req.body;
 
    res.send("Cliente " + nome + " foi recebido com sucesso!");
});
 
app.delete('/excluirCliente/:id', (req, res) => {
    const {id} = req.params;
 
    res.send("Cliente ID " + id + " foi excluído com sucesso!");
});
 
app.get('/consultarCliente', (req, res) => {
    const {nome, idade} = req.query;
 
    res.send("Cliente " + nome + " localizado e sua idade é: " + idade);
});
 
app.get('/dadospessoais', (req, res) => {
    res.send( { nome: 'Joseffe',
                idade: 32,
                email: 'joseffe@gmail.com',
                profissao: 'professor'} );
}); 
app.get('/dadospessoais1', (req, res) => {
    res.send( { nome: 'Erick',
                idade: 23,
                email: 'erick@gmail.com',
                profissao: 'Autonomo'} );
}); 

app.get('/formacao', (req, res) => {
    res.send( { nome: 'Erick',
                formacao: 'Universidade paulista unip',
                projetos: 'Pim ADS',
                lazer: 'Jogos em pc'} );
}); 
 
app.post('/cliente', (req, res) => {
    res.send( { nome: 'Williams',
    idade: 30,
    email: 'williams@gmail.com',
    formacao: 'Unip',
    profissao: 'Farra'} );
}); 

app.put('/publicliente', (req, res) => {
    res.send( { nome: 'Ferreira',
    idade: 20,
    email: 'ferreira@gmail.com',
    telefone: '13996954168',
    profissao: 'Carroceiro'} );
}); 

app.delete('/excluircliente/:id', (req, res) => {
    const {id} = req.params;
 
    res.send("Cliente ID " + nome + " foi excluído com sucesso!");
});

app.listen(3333, () => {
    console.log("Servidor Backend ON!");
});
