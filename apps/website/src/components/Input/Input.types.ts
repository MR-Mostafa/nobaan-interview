export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	type?: string;
	disabled?: boolean;
	hasError?: boolean;
}
