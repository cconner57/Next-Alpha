export interface IIcon {
	image: any;
	alt: string;
}

export interface IModal {
	openModal: boolean;
	closeModal: () => void;
	children: React.ReactNode;
}

export interface IToggleView {
	viewToggle: string;
	setViewToggle: (view: "grid" | "list") => void;
}

export interface IButton {
	text: string;
	variant: "primary" | "secondary";
	size?: "small" | "medium" | "large";
}

export interface IHeader {
	title: string;
	buttonText: string;
	children?: React.ReactNode;
}

export interface IPage {
    children: React.ReactNode;
}