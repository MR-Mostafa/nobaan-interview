export interface IStepperInputProps {
	length: number;
	autoFocus?: boolean;
	value: string;
	setValue: (val: string) => void;
	pattern?: string;
}
