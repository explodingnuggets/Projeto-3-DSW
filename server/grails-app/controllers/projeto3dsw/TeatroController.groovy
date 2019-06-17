package projeto3dsw


import grails.rest.*
import grails.converters.*
import grails.plugin.springsecurity.annotation.Secured

@Secured(['ROLE_ADMIN'])
class TeatroController extends RestfulController {
    static responseFormats = ['json']
    TeatroController() {
        super(Teatro)
    }

    @Secured(['IS_AUTHENTICATED_ANONYMOUSLY'])
    def index(Integer max) {
        if (params.city) {
            respond Teatro.findAllByCityLike("${params.city}%")
        } else {
            super.index(max)
        }
    }

    @Secured(['IS_AUTHENTICATED_ANONYMOUSLY'])
    def show() {
        super.show()
    }
}
