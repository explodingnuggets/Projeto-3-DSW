package projeto3dsw

class Promocao {

    Site site
    Teatro teatro
    String name
    Double price
    Date date
    static belongsTo = [Site, Teatro]

    static constraints = {
        name blank: false, nullable: false
        price blank: false, nullable: false
        date blank: false, nullable: false, unique: ['site', 'teatro']
    }
}
