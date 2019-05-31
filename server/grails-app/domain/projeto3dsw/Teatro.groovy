package projeto3dsw

class Teatro {

    String cnpj;
    String name;
    String city;

    static constraints = {
        cnpj nullable: false, blank: false, unique: true
        name nullable: false, blank: false
        city nullable: false, blank: false
    }
}
