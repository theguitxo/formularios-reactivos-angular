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
                                            'data-target="#components-links-module-InputTextModule-1b85d44ac16c28c66bd0d92060add032a684fe9e6e00c6f0709cc4f590cf84396c37c9dce2469041ba4d74758a7fcd395c86f1e2253a946eb2302da15a22ac6c"' : 'data-target="#xs-components-links-module-InputTextModule-1b85d44ac16c28c66bd0d92060add032a684fe9e6e00c6f0709cc4f590cf84396c37c9dce2469041ba4d74758a7fcd395c86f1e2253a946eb2302da15a22ac6c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-InputTextModule-1b85d44ac16c28c66bd0d92060add032a684fe9e6e00c6f0709cc4f590cf84396c37c9dce2469041ba4d74758a7fcd395c86f1e2253a946eb2302da15a22ac6c"' :
                                            'id="xs-components-links-module-InputTextModule-1b85d44ac16c28c66bd0d92060add032a684fe9e6e00c6f0709cc4f590cf84396c37c9dce2469041ba4d74758a7fcd395c86f1e2253a946eb2302da15a22ac6c"' }>
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
                                            'data-target="#components-links-module-RadioButtonCheckboxModule-d582ce386bb0a0163ac3cef4cb03ccf115f8177e0b8970a6717fdcb9cde5e304f8717ed44af994c29c9edf27c3a6844d123035666f6bccd357a0628c170d7d75"' : 'data-target="#xs-components-links-module-RadioButtonCheckboxModule-d582ce386bb0a0163ac3cef4cb03ccf115f8177e0b8970a6717fdcb9cde5e304f8717ed44af994c29c9edf27c3a6844d123035666f6bccd357a0628c170d7d75"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RadioButtonCheckboxModule-d582ce386bb0a0163ac3cef4cb03ccf115f8177e0b8970a6717fdcb9cde5e304f8717ed44af994c29c9edf27c3a6844d123035666f6bccd357a0628c170d7d75"' :
                                            'id="xs-components-links-module-RadioButtonCheckboxModule-d582ce386bb0a0163ac3cef4cb03ccf115f8177e0b8970a6717fdcb9cde5e304f8717ed44af994c29c9edf27c3a6844d123035666f6bccd357a0628c170d7d75"' }>
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
                                            'data-target="#components-links-module-SelectorModule-b64a26ee8d17df13411b529073c7ae161faa5cff2a0e15b0b4b85b31e8e89bf5e732b0249b8c61f713af2d359764e9ac34978c4a2005fef46ae2548683a76477"' : 'data-target="#xs-components-links-module-SelectorModule-b64a26ee8d17df13411b529073c7ae161faa5cff2a0e15b0b4b85b31e8e89bf5e732b0249b8c61f713af2d359764e9ac34978c4a2005fef46ae2548683a76477"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SelectorModule-b64a26ee8d17df13411b529073c7ae161faa5cff2a0e15b0b4b85b31e8e89bf5e732b0249b8c61f713af2d359764e9ac34978c4a2005fef46ae2548683a76477"' :
                                            'id="xs-components-links-module-SelectorModule-b64a26ee8d17df13411b529073c7ae161faa5cff2a0e15b0b4b85b31e8e89bf5e732b0249b8c61f713af2d359764e9ac34978c4a2005fef46ae2548683a76477"' }>
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
                                            'data-target="#components-links-module-SharedModule-c71ea6ed5020047d8e1006d9da1c7afb96f926c39dd21656e1902c2867eb65753472eea6ca3cbf28f35c5fd2ca56df150fb9a62d2f3823f7f1f56133e3f1df0d"' : 'data-target="#xs-components-links-module-SharedModule-c71ea6ed5020047d8e1006d9da1c7afb96f926c39dd21656e1902c2867eb65753472eea6ca3cbf28f35c5fd2ca56df150fb9a62d2f3823f7f1f56133e3f1df0d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-c71ea6ed5020047d8e1006d9da1c7afb96f926c39dd21656e1902c2867eb65753472eea6ca3cbf28f35c5fd2ca56df150fb9a62d2f3823f7f1f56133e3f1df0d"' :
                                            'id="xs-components-links-module-SharedModule-c71ea6ed5020047d8e1006d9da1c7afb96f926c39dd21656e1902c2867eb65753472eea6ca3cbf28f35c5fd2ca56df150fb9a62d2f3823f7f1f56133e3f1df0d"' }>
                                            <li class="link">
                                                <a href="components/ControlDataTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ControlDataTableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StyleSelectorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StyleSelectorComponent</a>
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
                                <a href="interfaces/ICard.html" data-type="entity-link" >ICard</a>
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
                            <li class="link">
                                <a href="interfaces/IRadioButtonExampleType.html" data-type="entity-link" >IRadioButtonExampleType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IStatesList.html" data-type="entity-link" >IStatesList</a>
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