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
                                            'data-target="#components-links-module-ComunModule-9af944db67066968a2465d571a09900e7271df3de8b926bab23008981ffe02fecaf1e4612af4de15c3ca4c8f991fcab611d7a0fd3e08632b1a41047530ecd537"' : 'data-target="#xs-components-links-module-ComunModule-9af944db67066968a2465d571a09900e7271df3de8b926bab23008981ffe02fecaf1e4612af4de15c3ca4c8f991fcab611d7a0fd3e08632b1a41047530ecd537"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ComunModule-9af944db67066968a2465d571a09900e7271df3de8b926bab23008981ffe02fecaf1e4612af4de15c3ca4c8f991fcab611d7a0fd3e08632b1a41047530ecd537"' :
                                            'id="xs-components-links-module-ComunModule-9af944db67066968a2465d571a09900e7271df3de8b926bab23008981ffe02fecaf1e4612af4de15c3ca4c8f991fcab611d7a0fd3e08632b1a41047530ecd537"' }>
                                            <li class="link">
                                                <a href="components/TablaDatosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TablaDatosComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FormularioModule.html" data-type="entity-link" >FormularioModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FormularioModule-50969a0bc51db07ca59593d8912a82caed9e94747eb75c2caefc656f8b1fbcd73fc2faa5220bcf52cf6c35c66c3c525ab13111461dde31905b62fefc039a8fe9"' : 'data-target="#xs-components-links-module-FormularioModule-50969a0bc51db07ca59593d8912a82caed9e94747eb75c2caefc656f8b1fbcd73fc2faa5220bcf52cf6c35c66c3c525ab13111461dde31905b62fefc039a8fe9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FormularioModule-50969a0bc51db07ca59593d8912a82caed9e94747eb75c2caefc656f8b1fbcd73fc2faa5220bcf52cf6c35c66c3c525ab13111461dde31905b62fefc039a8fe9"' :
                                            'id="xs-components-links-module-FormularioModule-50969a0bc51db07ca59593d8912a82caed9e94747eb75c2caefc656f8b1fbcd73fc2faa5220bcf52cf6c35c66c3c525ab13111461dde31905b62fefc039a8fe9"' }>
                                            <li class="link">
                                                <a href="components/FormularioComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormularioComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SelectorIdiomaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SelectorIdiomaComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FormularioRoutingModule.html" data-type="entity-link" >FormularioRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/InputTextModule.html" data-type="entity-link" >InputTextModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-InputTextModule-1bc96f19d95e206daf8c058ae9cb32c89b9ca49acee224304d96d2e2de0ef2bb466cdd8b39d3fb4818e8eb6717d7cd724433e2e0947f045ee99126a037ee9e50"' : 'data-target="#xs-components-links-module-InputTextModule-1bc96f19d95e206daf8c058ae9cb32c89b9ca49acee224304d96d2e2de0ef2bb466cdd8b39d3fb4818e8eb6717d7cd724433e2e0947f045ee99126a037ee9e50"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-InputTextModule-1bc96f19d95e206daf8c058ae9cb32c89b9ca49acee224304d96d2e2de0ef2bb466cdd8b39d3fb4818e8eb6717d7cd724433e2e0947f045ee99126a037ee9e50"' :
                                            'id="xs-components-links-module-InputTextModule-1bc96f19d95e206daf8c058ae9cb32c89b9ca49acee224304d96d2e2de0ef2bb466cdd8b39d3fb4818e8eb6717d7cd724433e2e0947f045ee99126a037ee9e50"' }>
                                            <li class="link">
                                                <a href="components/CVAInputTextComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CVAInputTextComponent</a>
                                            </li>
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
                                <a href="modules/RadioButtonCheckboxModule.html" data-type="entity-link" >RadioButtonCheckboxModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RadioButtonCheckboxModule-297d1edc26316c40d7c92631a9ec85351905fa84bd13b25b6202985576fa70316109ba97c4c116123d2ef3b61fdae578cc9cb1a8262a5a9190efdfed38475a6a"' : 'data-target="#xs-components-links-module-RadioButtonCheckboxModule-297d1edc26316c40d7c92631a9ec85351905fa84bd13b25b6202985576fa70316109ba97c4c116123d2ef3b61fdae578cc9cb1a8262a5a9190efdfed38475a6a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RadioButtonCheckboxModule-297d1edc26316c40d7c92631a9ec85351905fa84bd13b25b6202985576fa70316109ba97c4c116123d2ef3b61fdae578cc9cb1a8262a5a9190efdfed38475a6a"' :
                                            'id="xs-components-links-module-RadioButtonCheckboxModule-297d1edc26316c40d7c92631a9ec85351905fa84bd13b25b6202985576fa70316109ba97c4c116123d2ef3b61fdae578cc9cb1a8262a5a9190efdfed38475a6a"' }>
                                            <li class="link">
                                                <a href="components/CustomRadioButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomRadioButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RadioButtonCheckboxComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RadioButtonCheckboxComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RadioButtonCheckboxRoutingModule.html" data-type="entity-link" >RadioButtonCheckboxRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SelectorModule.html" data-type="entity-link" >SelectorModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SelectorModule-bc4ca43e325f8747089a804b678010638e4cd53b5abea6eb4c41d0ab5004a0c81bf1dc1a4d7bcfdfe09f49ddc09b9bb61f01de3913f0c94ff0ce3c46317e8710"' : 'data-target="#xs-components-links-module-SelectorModule-bc4ca43e325f8747089a804b678010638e4cd53b5abea6eb4c41d0ab5004a0c81bf1dc1a4d7bcfdfe09f49ddc09b9bb61f01de3913f0c94ff0ce3c46317e8710"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SelectorModule-bc4ca43e325f8747089a804b678010638e4cd53b5abea6eb4c41d0ab5004a0c81bf1dc1a4d7bcfdfe09f49ddc09b9bb61f01de3913f0c94ff0ce3c46317e8710"' :
                                            'id="xs-components-links-module-SelectorModule-bc4ca43e325f8747089a804b678010638e4cd53b5abea6eb4c41d0ab5004a0c81bf1dc1a4d7bcfdfe09f49ddc09b9bb61f01de3913f0c94ff0ce3c46317e8710"' }>
                                            <li class="link">
                                                <a href="components/CVASelectorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CVASelectorComponent</a>
                                            </li>
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
                                <a href="components/CVARadioButtonComponent.html" data-type="entity-link" >CVARadioButtonComponent</a>
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
                                <a href="interfaces/IIconoIdioma.html" data-type="entity-link" >IIconoIdioma</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IOpcionProvincia.html" data-type="entity-link" >IOpcionProvincia</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IOpcionValorEtiqueta.html" data-type="entity-link" >IOpcionValorEtiqueta</a>
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