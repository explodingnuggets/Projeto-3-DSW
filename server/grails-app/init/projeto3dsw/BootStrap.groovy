package projeto3dsw

class BootStrap {

    def init = { servletContext ->
        def adminRole = new Role(authority: 'ROLE_ADMIN').save()
        def adminUser = new User(username: 'admin@email.com', password: 'admin').save()

        UserRole.create(adminUser, adminRole, true)

        assert Role.count() == 1
        assert User.count() == 1
        assert UserRole.count() == 1
    }
    def destroy = {
    }
}
