const mongoose = require('mongoose');

const Postagens = mongoose.model('Postagens');

module.exports = {
    async listar(req, res){
        const { page = 1 } = req.query;

        const postagens = await Postagens.paginate({}, { page: page, limit: 4, 
            sort: {data: -1} });
        res.setHeader("Access-Control-Allow-Origin", "*");
        return res.json(postagens);
    },

    async listarEspecifico(req, res){
    
            const postagens = await Postagens.find().sort({data: -1}).limit(5);
            res.setHeader("Access-Control-Allow-Origin", "*");
            return res.json(postagens);
    },

    async criar(req, res){

        const post = new Postagens();
        post.titulo = req.body.titulo;
        post.conteudo = req.body.conteudo;

        await post.save();

        res.redirect(process.env.APP_URL);
        
        
    },

    async refresh(req, res){
        res.redirect(process.env.APP_URL);
        
        
    },

    async excluir(req, res){
        await Postagens.findByIdAndRemove(req.params.id);
        this.refresh;
        

    },

    async atualizar(req, res){
        const postagens = await Postagens.findByIdAndUpdate(req.params.id, req.body, {new: true});

        res.redirect(process.env.APP_URL);
    }
}