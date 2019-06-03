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

    def index() {
        if (params.city) {
            respond Teatro.findAllByCityLike("${params.city}%")
        } else {
            respond Teatro.list()
        }
    }
}
