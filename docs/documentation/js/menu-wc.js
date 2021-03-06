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
                                            'data-target="#components-links-module-AppModule-1fca326e79b7e0f942169f5ded5c2d01a47bf8f3dbd829ed1e1b5eca53e2a8e1ac7918c15e5478a4bfd4cb946b5b79ffbd8cbbf6b17a09be6c880d0d9214216b"' : 'data-target="#xs-components-links-module-AppModule-1fca326e79b7e0f942169f5ded5c2d01a47bf8f3dbd829ed1e1b5eca53e2a8e1ac7918c15e5478a4bfd4cb946b5b79ffbd8cbbf6b17a09be6c880d0d9214216b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-1fca326e79b7e0f942169f5ded5c2d01a47bf8f3dbd829ed1e1b5eca53e2a8e1ac7918c15e5478a4bfd4cb946b5b79ffbd8cbbf6b17a09be6c880d0d9214216b"' :
                                            'id="xs-components-links-module-AppModule-1fca326e79b7e0f942169f5ded5c2d01a47bf8f3dbd829ed1e1b5eca53e2a8e1ac7918c15e5478a4bfd4cb946b5b79ffbd8cbbf6b17a09be6c880d0d9214216b"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FormModule.html" data-type="entity-link" >FormModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FormModule-ab77d8725909f64a5f26a1dd3e112dd4ac7c249b4951e955f902a537d2cad179b700a10565d1bd165bc4e5069c6a4ef8436ccd69c67ae45fb9fcd774d1871c76"' : 'data-target="#xs-components-links-module-FormModule-ab77d8725909f64a5f26a1dd3e112dd4ac7c249b4951e955f902a537d2cad179b700a10565d1bd165bc4e5069c6a4ef8436ccd69c67ae45fb9fcd774d1871c76"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FormModule-ab77d8725909f64a5f26a1dd3e112dd4ac7c249b4951e955f902a537d2cad179b700a10565d1bd165bc4e5069c6a4ef8436ccd69c67ae45fb9fcd774d1871c76"' :
                                            'id="xs-components-links-module-FormModule-ab77d8725909f64a5f26a1dd3e112dd4ac7c249b4951e955f902a537d2cad179b700a10565d1bd165bc4e5069c6a4ef8436ccd69c67ae45fb9fcd774d1871c76"' }>
                                            <li class="link">
                                                <a href="components/FormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LangSelectorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LangSelectorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FormRoutingModule.html" data-type="entity-link" >FormRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/InputTextModule.html" data-type="entity-link" >InputTextModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-InputTextModule-a4ad3465eb362793e3e89a99a40124f18f8778ad6a072249e2bc8218f293da8159c3fbbb8ebcd6da8ab43fb7a469346cdfc6bd66daa2e96d5818d27c34b70d59"' : 'data-target="#xs-components-links-module-InputTextModule-a4ad3465eb362793e3e89a99a40124f18f8778ad6a072249e2bc8218f293da8159c3fbbb8ebcd6da8ab43fb7a469346cdfc6bd66daa2e96d5818d27c34b70d59"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-InputTextModule-a4ad3465eb362793e3e89a99a40124f18f8778ad6a072249e2bc8218f293da8159c3fbbb8ebcd6da8ab43fb7a469346cdfc6bd66daa2e96d5818d27c34b70d59"' :
                                            'id="xs-components-links-module-InputTextModule-a4ad3465eb362793e3e89a99a40124f18f8778ad6a072249e2bc8218f293da8159c3fbbb8ebcd6da8ab43fb7a469346cdfc6bd66daa2e96d5818d27c34b70d59"' }>
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
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-InputTextModule-a4ad3465eb362793e3e89a99a40124f18f8778ad6a072249e2bc8218f293da8159c3fbbb8ebcd6da8ab43fb7a469346cdfc6bd66daa2e96d5818d27c34b70d59"' : 'data-target="#xs-injectables-links-module-InputTextModule-a4ad3465eb362793e3e89a99a40124f18f8778ad6a072249e2bc8218f293da8159c3fbbb8ebcd6da8ab43fb7a469346cdfc6bd66daa2e96d5818d27c34b70d59"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-InputTextModule-a4ad3465eb362793e3e89a99a40124f18f8778ad6a072249e2bc8218f293da8159c3fbbb8ebcd6da8ab43fb7a469346cdfc6bd66daa2e96d5818d27c34b70d59"' :
                                        'id="xs-injectables-links-module-InputTextModule-a4ad3465eb362793e3e89a99a40124f18f8778ad6a072249e2bc8218f293da8159c3fbbb8ebcd6da8ab43fb7a469346cdfc6bd66daa2e96d5818d27c34b70d59"' }>
                                        <li class="link">
                                            <a href="injectables/StyleSelectorService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StyleSelectorService</a>
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
                                            'data-target="#components-links-module-RadioButtonCheckboxModule-4164d5e09b60fc70a03ecadac2fd1f4aab008adaf3bf642af915a6b29954e97796267632d12962934512fedea66abae506d835125c4457b0317c099319532108"' : 'data-target="#xs-components-links-module-RadioButtonCheckboxModule-4164d5e09b60fc70a03ecadac2fd1f4aab008adaf3bf642af915a6b29954e97796267632d12962934512fedea66abae506d835125c4457b0317c099319532108"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RadioButtonCheckboxModule-4164d5e09b60fc70a03ecadac2fd1f4aab008adaf3bf642af915a6b29954e97796267632d12962934512fedea66abae506d835125c4457b0317c099319532108"' :
                                            'id="xs-components-links-module-RadioButtonCheckboxModule-4164d5e09b60fc70a03ecadac2fd1f4aab008adaf3bf642af915a6b29954e97796267632d12962934512fedea66abae506d835125c4457b0317c099319532108"' }>
                                            <li class="link">
                                                <a href="components/CVARadioButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CVARadioButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CVARadioButtonExampleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CVARadioButtonExampleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CheckboxRequiredComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CheckboxRequiredComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RadioButtonCheckboxComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RadioButtonCheckboxComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RadioButtonRequiredComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RadioButtonRequiredComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-RadioButtonCheckboxModule-4164d5e09b60fc70a03ecadac2fd1f4aab008adaf3bf642af915a6b29954e97796267632d12962934512fedea66abae506d835125c4457b0317c099319532108"' : 'data-target="#xs-injectables-links-module-RadioButtonCheckboxModule-4164d5e09b60fc70a03ecadac2fd1f4aab008adaf3bf642af915a6b29954e97796267632d12962934512fedea66abae506d835125c4457b0317c099319532108"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RadioButtonCheckboxModule-4164d5e09b60fc70a03ecadac2fd1f4aab008adaf3bf642af915a6b29954e97796267632d12962934512fedea66abae506d835125c4457b0317c099319532108"' :
                                        'id="xs-injectables-links-module-RadioButtonCheckboxModule-4164d5e09b60fc70a03ecadac2fd1f4aab008adaf3bf642af915a6b29954e97796267632d12962934512fedea66abae506d835125c4457b0317c099319532108"' }>
                                        <li class="link">
                                            <a href="injectables/StyleSelectorService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StyleSelectorService</a>
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
                                            'data-target="#components-links-module-SelectorModule-2ede428022d0563a1a6d6c08838f756dc58c7f153446a6e6034094b76be36071cccce4d7e9f53d20b5c6427bad3cc416fa186ababf45337e41fdc778de139daf"' : 'data-target="#xs-components-links-module-SelectorModule-2ede428022d0563a1a6d6c08838f756dc58c7f153446a6e6034094b76be36071cccce4d7e9f53d20b5c6427bad3cc416fa186ababf45337e41fdc778de139daf"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SelectorModule-2ede428022d0563a1a6d6c08838f756dc58c7f153446a6e6034094b76be36071cccce4d7e9f53d20b5c6427bad3cc416fa186ababf45337e41fdc778de139daf"' :
                                            'id="xs-components-links-module-SelectorModule-2ede428022d0563a1a6d6c08838f756dc58c7f153446a6e6034094b76be36071cccce4d7e9f53d20b5c6427bad3cc416fa186ababf45337e41fdc778de139daf"' }>
                                            <li class="link">
                                                <a href="components/CVASelectorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CVASelectorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CVASelectorExampleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CVASelectorExampleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MaterialSelectorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MaterialSelectorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RequiredSelectorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RequiredSelectorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SelectorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SelectorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SimpleSelectorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SimpleSelectorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SelectorModule-2ede428022d0563a1a6d6c08838f756dc58c7f153446a6e6034094b76be36071cccce4d7e9f53d20b5c6427bad3cc416fa186ababf45337e41fdc778de139daf"' : 'data-target="#xs-injectables-links-module-SelectorModule-2ede428022d0563a1a6d6c08838f756dc58c7f153446a6e6034094b76be36071cccce4d7e9f53d20b5c6427bad3cc416fa186ababf45337e41fdc778de139daf"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SelectorModule-2ede428022d0563a1a6d6c08838f756dc58c7f153446a6e6034094b76be36071cccce4d7e9f53d20b5c6427bad3cc416fa186ababf45337e41fdc778de139daf"' :
                                        'id="xs-injectables-links-module-SelectorModule-2ede428022d0563a1a6d6c08838f756dc58c7f153446a6e6034094b76be36071cccce4d7e9f53d20b5c6427bad3cc416fa186ababf45337e41fdc778de139daf"' }>
                                        <li class="link">
                                            <a href="injectables/StyleSelectorService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StyleSelectorService</a>
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
                                            'data-target="#components-links-module-SharedModule-fdee3c725a6461ccaae9f2378a45f427ce5d2546fb4e8d9963e7c84709b9efa3b93d53fbe9dd6969c565e120fce5ffaefaed92c8a648303304cb4ee4b786f970"' : 'data-target="#xs-components-links-module-SharedModule-fdee3c725a6461ccaae9f2378a45f427ce5d2546fb4e8d9963e7c84709b9efa3b93d53fbe9dd6969c565e120fce5ffaefaed92c8a648303304cb4ee4b786f970"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-fdee3c725a6461ccaae9f2378a45f427ce5d2546fb4e8d9963e7c84709b9efa3b93d53fbe9dd6969c565e120fce5ffaefaed92c8a648303304cb4ee4b786f970"' :
                                            'id="xs-components-links-module-SharedModule-fdee3c725a6461ccaae9f2378a45f427ce5d2546fb4e8d9963e7c84709b9efa3b93d53fbe9dd6969c565e120fce5ffaefaed92c8a648303304cb4ee4b786f970"' }>
                                            <li class="link">
                                                <a href="components/ControlDataTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ControlDataTableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StyleSelectorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StyleSelectorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TextAreaModule.html" data-type="entity-link" >TextAreaModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TextAreaModule-061b3450826732943b0b7313c1d80bebf1456fe2378065b7196e089a031fd4afcc8ca4012cfb48d02f8c2015a6b18c356558f8ab4ff5f1a903228203b048fb62"' : 'data-target="#xs-components-links-module-TextAreaModule-061b3450826732943b0b7313c1d80bebf1456fe2378065b7196e089a031fd4afcc8ca4012cfb48d02f8c2015a6b18c356558f8ab4ff5f1a903228203b048fb62"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TextAreaModule-061b3450826732943b0b7313c1d80bebf1456fe2378065b7196e089a031fd4afcc8ca4012cfb48d02f8c2015a6b18c356558f8ab4ff5f1a903228203b048fb62"' :
                                            'id="xs-components-links-module-TextAreaModule-061b3450826732943b0b7313c1d80bebf1456fe2378065b7196e089a031fd4afcc8ca4012cfb48d02f8c2015a6b18c356558f8ab4ff5f1a903228203b048fb62"' }>
                                            <li class="link">
                                                <a href="components/TextAreaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TextAreaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TextAreaCountComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TextAreaCountComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TextAreaMaxComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TextAreaMaxComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TextAreaModule-061b3450826732943b0b7313c1d80bebf1456fe2378065b7196e089a031fd4afcc8ca4012cfb48d02f8c2015a6b18c356558f8ab4ff5f1a903228203b048fb62"' : 'data-target="#xs-injectables-links-module-TextAreaModule-061b3450826732943b0b7313c1d80bebf1456fe2378065b7196e089a031fd4afcc8ca4012cfb48d02f8c2015a6b18c356558f8ab4ff5f1a903228203b048fb62"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TextAreaModule-061b3450826732943b0b7313c1d80bebf1456fe2378065b7196e089a031fd4afcc8ca4012cfb48d02f8c2015a6b18c356558f8ab4ff5f1a903228203b048fb62"' :
                                        'id="xs-injectables-links-module-TextAreaModule-061b3450826732943b0b7313c1d80bebf1456fe2378065b7196e089a031fd4afcc8ca4012cfb48d02f8c2015a6b18c356558f8ab4ff5f1a903228203b048fb62"' }>
                                        <li class="link">
                                            <a href="injectables/StyleSelectorService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StyleSelectorService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TextAreaRoutingModule.html" data-type="entity-link" >TextAreaRoutingModule</a>
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
                                <a href="classes/ErrorMatcher.html" data-type="entity-link" >ErrorMatcher</a>
                            </li>
                            <li class="link">
                                <a href="classes/ErrorMatcherNoPristine.html" data-type="entity-link" >ErrorMatcherNoPristine</a>
                            </li>
                            <li class="link">
                                <a href="classes/SharedClass.html" data-type="entity-link" >SharedClass</a>
                            </li>
                            <li class="link">
                                <a href="classes/Utils.html" data-type="entity-link" >Utils</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/StyleSelectorService.html" data-type="entity-link" >StyleSelectorService</a>
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
                                <a href="interfaces/IHomeCard.html" data-type="entity-link" >IHomeCard</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ILangIcon.html" data-type="entity-link" >ILangIcon</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ILink.html" data-type="entity-link" >ILink</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IOptionState.html" data-type="entity-link" >IOptionState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IOptionValueLabel.html" data-type="entity-link" >IOptionValueLabel</a>
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