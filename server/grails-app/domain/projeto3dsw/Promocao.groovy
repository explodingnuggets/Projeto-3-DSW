package projeto3dsw

class Promocao {

    String url
    String cnpj
    String name
    Double price
    Date date

    static constraints = {
        name blank: false, nullable: false
        price blank: false, nullable: false
        date blank: false, nullable: false, unique: ['url', 'cnpj']
    }
}
