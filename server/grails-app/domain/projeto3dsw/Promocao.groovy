package projeto3dsw

class Promocao {

    Site site
    Teatro theater
    String name
    Double price
    Date date
    static belongsTo = [Site, Teatro]

    static constraints = {
        name blank: false, nullable: false
        price blank: false, nullable: false
        date blank: false, nullable: false, unique: ['site', 'theater']
    }
}
