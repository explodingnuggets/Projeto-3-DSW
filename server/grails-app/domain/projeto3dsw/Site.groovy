package projeto3dsw

class Site {

    String url;
    String name;
    String phone;
    User user;
    static belongsTo = User;

    static constraints = {
        url nullable: false, blank: false, unique: true
        name nullable: false, blank: false
        phone nullable: false, blank: false, size: 10..11
    }
}
