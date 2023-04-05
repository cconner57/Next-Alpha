export interface NavBarProps {
	currentTab: TabState;
	setCurrentTab: (tab: TabState) => void;
}

export interface TabState {
	tab:
		| "dashboard"
		| "cart"
		| "calendar"
		| "mail"
		| "chat"
		| "tasks"
		| "files"
		| "notes"
		| "contacts"
		| "projects";
}
