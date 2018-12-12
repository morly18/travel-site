import $ from 'jquery';

class MobileMenu {
	constructor(){
		this.siteHeader = $(".site-header");
		this.MenuIcon = $(".site-header__menu-icon");
		this.MenuContent = $(".site-header__menu-content");
		this.events();
	}

	events(){
		this.MenuIcon.click(this.toggleTheMenu.bind(this));
	}

	//methods
	toggleTheMenu() {
		this.MenuContent.toggleClass("site-header__menu-content--is-visible");
		this.siteHeader.toggleClass("site-header--is-expanded");
		this.MenuIcon.toggleClass("site-header__menu-icon--close-x");
	}
}

export default MobileMenu;