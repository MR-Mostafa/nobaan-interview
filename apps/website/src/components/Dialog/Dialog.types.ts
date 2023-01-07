export interface IDialogProps extends React.HTMLAttributes<HTMLDivElement> {
	children?: React.ReactNode;
	title?: string;
	onClose?: () => void;
}
