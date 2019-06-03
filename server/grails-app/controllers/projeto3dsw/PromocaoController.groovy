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

    @Override
    protected getObjectToBind() {
        def params = request.JSON
        params.site = Site.findByUrl(params.site)
        params.theater = Teatro.findByCnpj(params.theater)
        params
    }
}
