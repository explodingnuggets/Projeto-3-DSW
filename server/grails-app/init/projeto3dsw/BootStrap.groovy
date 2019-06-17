package projeto3dsw

class BootStrap {

    def init = { servletContext ->
        def userRole = new Role(authority: 'ROLE_USER').save()
        def adminRole = new Role(authority: 'ROLE_ADMIN').save()
        def theaterRole = new Role(authority: 'ROLE_THEATER').save()
        def siteRole = new Role(authority: 'ROLE_SITE').save()
        def adminUser = new User(username: 'admin@email.com', password: 'admin').save()
        def theaterUser = new User(username: 'teatro@email.com', password: 'teatro').save()
        def siteUser = new User(username: 'site@email.com', password: 'site').save()
        def theater = new Teatro(cnpj: '000000000000000', name: 'Broadway', city: 'Nova York', user: theaterUser).save()
        def site = new Site(url: 'ingresso.com', name: 'Ingresso', phone: '1630003000', user: siteUser).save()

        UserRole.create(adminUser, adminRole)
        UserRole.create(theaterUser, theaterRole)
        UserRole.create(siteUser, siteRole, true)
    }
    def destroy = {
    }
}
