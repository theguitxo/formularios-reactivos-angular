'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">documentacion</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-b529e7dbf1c68b8ed6129d2511f0018e3ee2d626fc4c4160e8ab1841fa025a3ce32a058ef5e6aa190710124efb96fa97ab633ff8d97105a458bb97d0b315a30c"' : 'data-target="#xs-components-links-module-AppModule-b529e7dbf1c68b8ed6129d2511f0018e3ee2d626fc4c4160e8ab1841fa025a3ce32a058ef5e6aa190710124efb96fa97ab633ff8d97105a458bb97d0b315a30c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-b529e7dbf1c68b8ed6129d2511f0018e3ee2d626fc4c4160e8ab1841fa025a3ce32a058ef5e6aa190710124efb96fa97ab633ff8d97105a458bb97d0b315a30c"' :
                                            'id="xs-components-links-module-AppModule-b529e7dbf1c68b8ed6129d2511f0018e3ee2d626fc4c4160e8ab1841fa025a3ce32a058ef5e6aa190710124efb96fa97ab633ff8d97105a458bb97d0b315a30c"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InicioComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InicioComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ComunModule.html" data-type="entity-link" >ComunModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ComunModule-ba00769eb0b2188a84177f16d6fd63fa05a0e5cb4bddadd10aacab3727cb2dc8a8bf2010930e10241f9ff58fcc1070e67d445fcfbe11996c7eb5d5da9081274c"' : 'data-target="#xs-components-links-module-ComunModule-ba00769eb0b2188a84177f16d6fd63fa05a0e5cb4bddadd10aacab3727cb2dc8a8bf2010930e10241f9ff58fcc1070e67d445fcfbe11996c7eb5d5da9081274c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ComunModule-ba00769eb0b2188a84177f16d6fd63fa05a0e5cb4bddadd10aacab3727cb2dc8a8bf2010930e10241f9ff58fcc1070e67d445fcfbe11996c7eb5d5da9081274c"' :
                                            'id="xs-components-links-module-ComunModule-ba00769eb0b2188a84177f16d6fd63fa05a0e5cb4bddadd10aacab3727cb2dc8a8bf2010930e10241f9ff58fcc1070e67d445fcfbe11996c7eb5d5da9081274c"' }>
                                            <li class="link">
                                                <a href="components/TablaDatosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TablaDatosComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/InputTextModule.html" data-type="entity-link" >InputTextModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-InputTextModule-0f8c5f86b56e1211f9d049c579746443bc4ba90f7d203390275facfa674b293460984f406953855f60dadf622614a9a6f2cbb0a715448806bd3cf04d2536f2d2"' : 'data-target="#xs-components-links-module-InputTextModule-0f8c5f86b56e1211f9d049c579746443bc4ba90f7d203390275facfa674b293460984f406953855f60dadf622614a9a6f2cbb0a715448806bd3cf04d2536f2d2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-InputTextModule-0f8c5f86b56e1211f9d049c579746443bc4ba90f7d203390275facfa674b293460984f406953855f60dadf622614a9a6f2cbb0a715448806bd3cf04d2536f2d2"' :
                                            'id="xs-components-links-module-InputTextModule-0f8c5f86b56e1211f9d049c579746443bc4ba90f7d203390275facfa674b293460984f406953855f60dadf622614a9a6f2cbb0a715448806bd3cf04d2536f2d2"' }>
                                            <li class="link">
                                                <a href="components/InputTextComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InputTextComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/InputTextRoutingModule.html" data-type="entity-link" >InputTextRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RadioButtonModule.html" data-type="entity-link" >RadioButtonModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RadioButtonModule-3d735a301cca456eaecb4cdc41e2211fac5ec49589b97dabcb0980c52d658e72fc09f1c5a78638079c913043c2147da7a2588ee5869373e3ca7f14bb7ded2756"' : 'data-target="#xs-components-links-module-RadioButtonModule-3d735a301cca456eaecb4cdc41e2211fac5ec49589b97dabcb0980c52d658e72fc09f1c5a78638079c913043c2147da7a2588ee5869373e3ca7f14bb7ded2756"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RadioButtonModule-3d735a301cca456eaecb4cdc41e2211fac5ec49589b97dabcb0980c52d658e72fc09f1c5a78638079c913043c2147da7a2588ee5869373e3ca7f14bb7ded2756"' :
                                            'id="xs-components-links-module-RadioButtonModule-3d735a301cca456eaecb4cdc41e2211fac5ec49589b97dabcb0980c52d658e72fc09f1c5a78638079c913043c2147da7a2588ee5869373e3ca7f14bb7ded2756"' }>
                                            <li class="link">
                                                <a href="components/RadioButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RadioButtonComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RadioButtonRoutingModule.html" data-type="entity-link" >RadioButtonRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SelectorModule.html" data-type="entity-link" >SelectorModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SelectorModule-f266df64fb7bc2ac06fa09880dc328f8c140525c7063880a20627fa8098635adf6d34169bc4f8b9726a601efae36dca6c1598a4b91261c1237e41f6c6e732602"' : 'data-target="#xs-components-links-module-SelectorModule-f266df64fb7bc2ac06fa09880dc328f8c140525c7063880a20627fa8098635adf6d34169bc4f8b9726a601efae36dca6c1598a4b91261c1237e41f6c6e732602"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SelectorModule-f266df64fb7bc2ac06fa09880dc328f8c140525c7063880a20627fa8098635adf6d34169bc4f8b9726a601efae36dca6c1598a4b91261c1237e41f6c6e732602"' :
                                            'id="xs-components-links-module-SelectorModule-f266df64fb7bc2ac06fa09880dc328f8c140525c7063880a20627fa8098635adf6d34169bc4f8b9726a601efae36dca6c1598a4b91261c1237e41f6c6e732602"' }>
                                            <li class="link">
                                                <a href="components/SelectorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SelectorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SelectorRoutingModule.html" data-type="entity-link" >SelectorRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/Prueba1Component.html" data-type="entity-link" >Prueba1Component</a>
                            </li>
                            <li class="link">
                                <a href="components/Prueba2Component.html" data-type="entity-link" >Prueba2Component</a>
                            </li>
                            <li class="link">
                                <a href="components/Prueba3Component.html" data-type="entity-link" >Prueba3Component</a>
                            </li>
                            <li class="link">
                                <a href="components/Prueba4Component.html" data-type="entity-link" >Prueba4Component</a>
                            </li>
                            <li class="link">
                                <a href="components/Prueba5Component.html" data-type="entity-link" >Prueba5Component</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Utils.html" data-type="entity-link" >Utils</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IEnlace.html" data-type="entity-link" >IEnlace</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITarjeta.html" data-type="entity-link" >ITarjeta</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});