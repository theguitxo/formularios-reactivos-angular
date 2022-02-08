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
                                <a href="modules/ComunModule.html" data-type="entity-link" >ComunModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ComunModule-3f58ee599411682fd4ab760205f3ff9c56e3c260c61d830505f9b82cbd29de4723b8520247f09247c39585976ec11c67e575b2e9fa4a57c9f4e2c2ee410fc5ff"' : 'data-target="#xs-components-links-module-ComunModule-3f58ee599411682fd4ab760205f3ff9c56e3c260c61d830505f9b82cbd29de4723b8520247f09247c39585976ec11c67e575b2e9fa4a57c9f4e2c2ee410fc5ff"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ComunModule-3f58ee599411682fd4ab760205f3ff9c56e3c260c61d830505f9b82cbd29de4723b8520247f09247c39585976ec11c67e575b2e9fa4a57c9f4e2c2ee410fc5ff"' :
                                            'id="xs-components-links-module-ComunModule-3f58ee599411682fd4ab760205f3ff9c56e3c260c61d830505f9b82cbd29de4723b8520247f09247c39585976ec11c67e575b2e9fa4a57c9f4e2c2ee410fc5ff"' }>
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
                                            'data-target="#components-links-module-InputTextModule-4fdfa36f90488843e57d2ea3291da004e445962c872158a03a7979b787727346678b2609b8965c6e2b370ed89901014cfcdc474df3191346936c213649827415"' : 'data-target="#xs-components-links-module-InputTextModule-4fdfa36f90488843e57d2ea3291da004e445962c872158a03a7979b787727346678b2609b8965c6e2b370ed89901014cfcdc474df3191346936c213649827415"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-InputTextModule-4fdfa36f90488843e57d2ea3291da004e445962c872158a03a7979b787727346678b2609b8965c6e2b370ed89901014cfcdc474df3191346936c213649827415"' :
                                            'id="xs-components-links-module-InputTextModule-4fdfa36f90488843e57d2ea3291da004e445962c872158a03a7979b787727346678b2609b8965c6e2b370ed89901014cfcdc474df3191346936c213649827415"' }>
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
                                            'data-target="#components-links-module-RadioButtonCheckboxModule-ac322b034763ddafeed23c96d56bceb14f4977c2381a60101aafa6c737518b97d5d8a93c3d2502d266f41cb8ff6e0913586c2f38e6579095fd43b0afcde863d0"' : 'data-target="#xs-components-links-module-RadioButtonCheckboxModule-ac322b034763ddafeed23c96d56bceb14f4977c2381a60101aafa6c737518b97d5d8a93c3d2502d266f41cb8ff6e0913586c2f38e6579095fd43b0afcde863d0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RadioButtonCheckboxModule-ac322b034763ddafeed23c96d56bceb14f4977c2381a60101aafa6c737518b97d5d8a93c3d2502d266f41cb8ff6e0913586c2f38e6579095fd43b0afcde863d0"' :
                                            'id="xs-components-links-module-RadioButtonCheckboxModule-ac322b034763ddafeed23c96d56bceb14f4977c2381a60101aafa6c737518b97d5d8a93c3d2502d266f41cb8ff6e0913586c2f38e6579095fd43b0afcde863d0"' }>
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
                                            'data-target="#components-links-module-SelectorModule-744263dc91e5a4a9f5d33ccf21d55d82f66c340fde6cba009b74ad468ad9c160b895de5e0a54737e075a9de5bb789539dd43d97bfb66bb0ed72fbc65ebf64706"' : 'data-target="#xs-components-links-module-SelectorModule-744263dc91e5a4a9f5d33ccf21d55d82f66c340fde6cba009b74ad468ad9c160b895de5e0a54737e075a9de5bb789539dd43d97bfb66bb0ed72fbc65ebf64706"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SelectorModule-744263dc91e5a4a9f5d33ccf21d55d82f66c340fde6cba009b74ad468ad9c160b895de5e0a54737e075a9de5bb789539dd43d97bfb66bb0ed72fbc65ebf64706"' :
                                            'id="xs-components-links-module-SelectorModule-744263dc91e5a4a9f5d33ccf21d55d82f66c340fde6cba009b74ad468ad9c160b895de5e0a54737e075a9de5bb789539dd43d97bfb66bb0ed72fbc65ebf64706"' }>
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
                                <a href="interfaces/IListaProvincias.html" data-type="entity-link" >IListaProvincias</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IOpcionProvincia.html" data-type="entity-link" >IOpcionProvincia</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IOpcionValorEtiqueta.html" data-type="entity-link" >IOpcionValorEtiqueta</a>
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