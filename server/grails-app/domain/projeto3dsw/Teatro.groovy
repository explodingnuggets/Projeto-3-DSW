package projeto3dsw

class Teatro {

    String cnpj;
    String name;
    String city;
    User user;
    static belongsTo = User;

    static constraints = {
        cnpj nullable: false, blank: false, unique: true
        name nullable: false, blank: false
        city nullable: false, blank: false
    }
}
