

class Laudos {
    
    async getLaudo(placa) {
        const response = await global.db
            .collection('vwLaudos')
            .find({ placa })
            .toArray();

        return response;
    }

}

module.exports = Laudos;