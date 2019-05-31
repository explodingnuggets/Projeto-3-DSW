package projeto3dsw

class Teatro {

    String cpnj;
    String nome;
    String cidade;

    static constraints = {
        cpnj nullable: false, blank: false, unique: true,
        nome nullable: false, blank: false
        cidade nullable: false, blank: false
    }
}
