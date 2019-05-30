package projeto3dsw

class BootStrap {

    def init = { servletContext ->
        def userRole = new Role(authority: 'ROLE_USER').save()
        def adminRole = new Role(authority: 'ROLE_ADMIN').save()
        def adminUser = new User(username: 'admin@email.com', password: 'admin').save()

        UserRole.create(adminUser, adminRole, true)
    }
    def destroy = {
    }
}
