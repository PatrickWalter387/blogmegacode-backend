const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

PostagensSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    data: {
        type: Date,
        default: Date.now
    },
    conteudo: {
        type: String,
        required: true
    }
});

PostagensSchema.plugin(mongoosePaginate);

mongoose.model('Postagens', PostagensSchema);