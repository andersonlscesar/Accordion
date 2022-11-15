class Accordion {
    private elementTarget: NodeList
    public content: NodeList

    /**
     * 
     * @param elementTarget 
     * @param content 
     */

    constructor(elementTarget: NodeList, content: NodeList) {
        this.elementTarget = elementTarget
        this.content = content
        this.init()        
    }

    init() {
        this.elementTarget.forEach((element, index) => {
            element.addEventListener('click', this.toggleAccordion.bind(Accordion, index, this.content, this.elementTarget))
        })
    }

    toggleAccordion(index: number, contentParam: NodeList, targetParam: NodeList) {
        const content = <HTMLElement> contentParam[index] // HTMLElement implements the ElementCSSInlineStyle
        const target = <HTMLElement> targetParam[index]
      
        contentParam.forEach(c => {
            const content = <HTMLElement> c
            content.classList.remove('active')    
        })

        targetParam.forEach(c => {
            const target = <HTMLElement> c
            target.classList.remove('active')    
        })
        
        if(content.style.maxHeight === '') { 
            target.classList.add('active')        
            content.style.maxHeight = `${content.scrollHeight}px`
        } else {
            content.style.padding = ''
            content.style.maxHeight = ''
        }
    }
}


const elementTarget = <NodeList> document.querySelectorAll('.section__element')!
const contents = <NodeList> document.querySelectorAll('.section__content')!
const accordion = new Accordion(elementTarget, contents)