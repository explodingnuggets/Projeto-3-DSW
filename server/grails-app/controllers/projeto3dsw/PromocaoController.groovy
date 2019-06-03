package projeto3dsw


import grails.rest.*
import grails.converters.*
import grails.plugin.springsecurity.annotation.Secured

@Secured(['ROLE_ADMIN'])
class PromocaoController extends RestfulController {
    static responseFormats = ['json']
    PromocaoController() {
        super(Promocao)
    }
}
