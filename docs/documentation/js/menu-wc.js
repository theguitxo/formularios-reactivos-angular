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
                                            'data-target="#components-links-module-AppModule-032018b5dc1283560ea7111f9f3b1552d68a574cce8caaff8dfa29904dbaa43e148d8aa405293e5bca78e263a04be7abea5e7e1f48c501db010b2255bb685800"' : 'data-target="#xs-components-links-module-AppModule-032018b5dc1283560ea7111f9f3b1552d68a574cce8caaff8dfa29904dbaa43e148d8aa405293e5bca78e263a04be7abea5e7e1f48c501db010b2255bb685800"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-032018b5dc1283560ea7111f9f3b1552d68a574cce8caaff8dfa29904dbaa43e148d8aa405293e5bca78e263a04be7abea5e7e1f48c501db010b2255bb685800"' :
                                            'id="xs-components-links-module-AppModule-032018b5dc1283560ea7111f9f3b1552d68a574cce8caaff8dfa29904dbaa43e148d8aa405293e5bca78e263a04be7abea5e7e1f48c501db010b2255bb685800"' }>
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
                                <a href="modules/FormularioModule.html" data-type="entity-link" >FormularioModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FormularioModule-e0d93ef63662b226368503973a4c00d220954400d26e451a8c8dec8e7fa1dd8ba483bbd6ccd235ce522c4b2fd2cf606cfcc8b3f6f45851c18ecb2c073582ea74"' : 'data-target="#xs-components-links-module-FormularioModule-e0d93ef63662b226368503973a4c00d220954400d26e451a8c8dec8e7fa1dd8ba483bbd6ccd235ce522c4b2fd2cf606cfcc8b3f6f45851c18ecb2c073582ea74"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FormularioModule-e0d93ef63662b226368503973a4c00d220954400d26e451a8c8dec8e7fa1dd8ba483bbd6ccd235ce522c4b2fd2cf606cfcc8b3f6f45851c18ecb2c073582ea74"' :
                                            'id="xs-components-links-module-FormularioModule-e0d93ef63662b226368503973a4c00d220954400d26e451a8c8dec8e7fa1dd8ba483bbd6ccd235ce522c4b2fd2cf606cfcc8b3f6f45851c18ecb2c073582ea74"' }>
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
                                            'data-target="#components-links-module-InputTextModule-c41ec1258da7027b38d9250665ffaad3f818d5f2d6ea8572143574618f66616dfc5e0cc494062a929be6b4a49273005c454f28d6a6b247057f4498726cf69181"' : 'data-target="#xs-components-links-module-InputTextModule-c41ec1258da7027b38d9250665ffaad3f818d5f2d6ea8572143574618f66616dfc5e0cc494062a929be6b4a49273005c454f28d6a6b247057f4498726cf69181"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-InputTextModule-c41ec1258da7027b38d9250665ffaad3f818d5f2d6ea8572143574618f66616dfc5e0cc494062a929be6b4a49273005c454f28d6a6b247057f4498726cf69181"' :
                                            'id="xs-components-links-module-InputTextModule-c41ec1258da7027b38d9250665ffaad3f818d5f2d6ea8572143574618f66616dfc5e0cc494062a929be6b4a49273005c454f28d6a6b247057f4498726cf69181"' }>
                                            <li class="link">
                                                <a href="components/CVAInputTextComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CVAInputTextComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CVAInputTextExampleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CVAInputTextExampleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InputNumberMinMaxComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InputNumberMinMaxComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InputTextComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InputTextComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InputTextEmailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InputTextEmailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InputTextMinMaxLengthComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InputTextMinMaxLengthComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InputTextRequiredComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InputTextRequiredComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InputTextSimpleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InputTextSimpleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InputTextValidPatternComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InputTextValidPatternComponent</a>
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
                                            'data-target="#components-links-module-RadioButtonCheckboxModule-1ce7ceb4551982d67163e1d0b8cb25582558476fa3434c00e791f95bb040ec1efc19676825dbd3cf8f302bd8d279f0bb3a630bd96ae0d8e224bb31b2ca653783"' : 'data-target="#xs-components-links-module-RadioButtonCheckboxModule-1ce7ceb4551982d67163e1d0b8cb25582558476fa3434c00e791f95bb040ec1efc19676825dbd3cf8f302bd8d279f0bb3a630bd96ae0d8e224bb31b2ca653783"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RadioButtonCheckboxModule-1ce7ceb4551982d67163e1d0b8cb25582558476fa3434c00e791f95bb040ec1efc19676825dbd3cf8f302bd8d279f0bb3a630bd96ae0d8e224bb31b2ca653783"' :
                                            'id="xs-components-links-module-RadioButtonCheckboxModule-1ce7ceb4551982d67163e1d0b8cb25582558476fa3434c00e791f95bb040ec1efc19676825dbd3cf8f302bd8d279f0bb3a630bd96ae0d8e224bb31b2ca653783"' }>
                                            <li class="link">
                                                <a href="components/CVARadioButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CVARadioButtonComponent</a>
                                            </li>
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
                                            'data-target="#components-links-module-SelectorModule-44a5056dca7fd528b4a573a602220ffbc6c0e0b578132087e4b13747f8cd5d763fd9feb07c9de2ee96d99e1502960919dcdec491be9604019a3fe3fd1254ef71"' : 'data-target="#xs-components-links-module-SelectorModule-44a5056dca7fd528b4a573a602220ffbc6c0e0b578132087e4b13747f8cd5d763fd9feb07c9de2ee96d99e1502960919dcdec491be9604019a3fe3fd1254ef71"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SelectorModule-44a5056dca7fd528b4a573a602220ffbc6c0e0b578132087e4b13747f8cd5d763fd9feb07c9de2ee96d99e1502960919dcdec491be9604019a3fe3fd1254ef71"' :
                                            'id="xs-components-links-module-SelectorModule-44a5056dca7fd528b4a573a602220ffbc6c0e0b578132087e4b13747f8cd5d763fd9feb07c9de2ee96d99e1502960919dcdec491be9604019a3fe3fd1254ef71"' }>
                                            <li class="link">
                                                <a href="components/CVASelectorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CVASelectorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MaterialSelectorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MaterialSelectorComponent</a>
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
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-8774e018c38dc61cd9e2e7f85a83c2a52eeea6500ba25ef2eb1ef1018f42e6aab8db4224ac11526a979c3fef2002f019870f45a0fa88b133ccb27fc18ee9ec7e"' : 'data-target="#xs-components-links-module-SharedModule-8774e018c38dc61cd9e2e7f85a83c2a52eeea6500ba25ef2eb1ef1018f42e6aab8db4224ac11526a979c3fef2002f019870f45a0fa88b133ccb27fc18ee9ec7e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-8774e018c38dc61cd9e2e7f85a83c2a52eeea6500ba25ef2eb1ef1018f42e6aab8db4224ac11526a979c3fef2002f019870f45a0fa88b133ccb27fc18ee9ec7e"' :
                                            'id="xs-components-links-module-SharedModule-8774e018c38dc61cd9e2e7f85a83c2a52eeea6500ba25ef2eb1ef1018f42e6aab8db4224ac11526a979c3fef2002f019870f45a0fa88b133ccb27fc18ee9ec7e"' }>
                                            <li class="link">
                                                <a href="components/TablaDatosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TablaDatosComponent</a>
                                            </li>
                                        </ul>
                                    </li>
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
                                <a href="interfaces/ILangIcon.html" data-type="entity-link" >ILangIcon</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IListaProvincias.html" data-type="entity-link" >IListaProvincias</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IOptionState.html" data-type="entity-link" >IOptionState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IOptionValueLabel.html" data-type="entity-link" >IOptionValueLabel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRadioButtonTipoEjemplo.html" data-type="entity-link" >IRadioButtonTipoEjemplo</a>
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
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
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