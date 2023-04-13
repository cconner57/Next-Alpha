export interface tabMenu {
	tab: "All" | "Started" | "On Hold" | "Completed";
}

export interface ProjectGridItemProps {
	id: number;
	title: string;
	subTitle: string;
	participants: ProjectParticipantProps[];
	totalTask: number;
	completedTask: number;
	messages: number;
	attachments: number;
	dueDate: string;
	status: "started" | "on hold" | "completed";
}

interface ProjectParticipantProps {
	id: number;
	name: string;
	role: string;
	image: string | null;
}
