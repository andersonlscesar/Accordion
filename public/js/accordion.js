"use strict";
class Accordion {
    /**
     *
     * @param elementTarget
     * @param content
     */
    constructor(elementTarget, content) {
        this.elementTarget = elementTarget;
        this.content = content;
        this.init();
    }
    init() {
        this.elementTarget.forEach((element, index) => {
            element.addEventListener('click', this.toggleAccordion.bind(Accordion, index, this.content, this.elementTarget));
        });
    }
    toggleAccordion(index, contentParam, targetParam) {
        const content = contentParam[index]; // HTMLElement implements the ElementCSSInlineStyle
        const target = targetParam[index];
        contentParam.forEach(c => {
            const content = c;
            content.classList.remove('active');
        });
        targetParam.forEach(c => {
            const target = c;
            target.classList.remove('active');
        });
        if (content.style.maxHeight === '') {
            target.classList.add('active');
            content.style.maxHeight = `${content.scrollHeight}px`;
        }
        else {
            content.style.padding = '';
            content.style.maxHeight = '';
        }
    }
}
const elementTarget = document.querySelectorAll('.section__element');
const contents = document.querySelectorAll('.section__content');
const accordion = new Accordion(elementTarget, contents);
