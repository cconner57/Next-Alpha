export interface IconProps {
	image: any;
	alt: string;
}

export interface ModalProps {
	openModal: boolean;
	closeModal: () => void;
	children: React.ReactNode;
}

export interface ToggleViewProps {
	viewToggle: string;
	setViewToggle: (view: "grid" | "list") => void;
}

export interface ButtonProps {
	text: string;
	variant: "primary" | "secondary";
	size?: "small" | "medium" | "large";
}