const CLS = {
	COLLAPSIBLE: "collapsible",
	COLLAPSIBLE_TITLEBAR: "collapsible-titlebar",
	COLLAPSIBLE_CONTENT: "collapsible-content",
	COLLAPSIBLE_TITLETEXT: "collapsible-titletext",
	COLLAPSIBLE_INDICATOR: "collapse-indicator",
	COLLAPSIBLE_IS_COLLAPSED: "is-collapsed"
}

class Collapsible {
    options = {
        startCollapsed: true,
        dynamicCollapse: true
    }
    
    constructor(el) {
        this.collapseEl = createDiv({cls: CLS.COLLAPSIBLE})
        this.collapseTitleEl = this.collapseEl.createDiv({cls: CLS.COLLAPSIBLE_TITLEBAR})
        this.collapseContentEl = this.collapseEl.appendChild(createDiv({cls: CLS.COLLAPSIBLE_CONTENT}))		
    
        this.collapseTitleTextEl = this.collapseTitleEl.createSpan({cls: CLS.COLLAPSIBLE_TITLETEXT}) 
        this.collapseIndicator = createSpan({cls: CLS.COLLAPSIBLE_INDICATOR})
        this.collapseTitleEl.prepend(this.collapseIndicator)

        if (this.options.startCollapsed) {
            this.collapseEl.addClass(CLS.COLLAPSIBLE_IS_COLLAPSED);
            this.collapseContentEl.setAttribute("style", `max-height: 0px;`)
        }
		
        this.collapseTitleEl.addEventListener("click", (event) => {
			let b = this.collapseEl.hasClass(CLS.COLLAPSIBLE_IS_COLLAPSED)
			if (this.options.dynamicCollapse) {
                let h = b ? (el.clientHeight + (el.clientHeight * 0.2)) : 0
				this.collapseContentEl.setAttribute("style", `max-height: ${h}px;`);
			}
			this.collapseEl.toggleClass(CLS.COLLAPSIBLE_IS_COLLAPSED, !b)
		})
		
		/* Calculate max height before first collapse */
		if (this.options.dynamicCollapse) 
			this.collapseTitleEl.addEventListener("mouseover", () => {
				if ((!this.collapseContentEl.hasAttribute("style")) )
					this.collapseContentEl.setAttribute("style", `max-height: ${el.clientHeight + (el.clientHeight * 0.2)}px;`)
            });
        }
}

function wrap(title) {
    with(this) {
        sk.child.registerPost(() => {
            let s = sk.child.el.innerHTML
            sk.child.el.empty()
            let embed = createDiv()
            embed.innerHTML = s
            let col = new Collapsible(embed)
            obsidian.setIcon(col.collapseIndicator, "right-triangle")
            col.collapseTitleTextEl.setText(title ?? '')
            sk.child.el.append(col.collapseEl)
            col.collapseContentEl.append(embed)
        })
    }
}

module.exports = {_name: 'collapse', Collapsible, wrap}