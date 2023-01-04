import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import { Button, Container, Dialog, Input, Portal, Text } from '~src/components';
import { useClickOutside, useHotkeys } from '~src/hooks';

const Flex = styled.div`
	display: flex;
	align-items: center;
	justify-content: start;
	gap: 15px;
`;

export const HomePage = () => {
	const [openDialog, setOpenDialog] = useState(false);
	const [textValue, setTextValue] = useState('');
	const navigate = useNavigate();
	const refClickOut = useClickOutside(() => setOpenDialog(false));
	const inputRef = useRef<HTMLInputElement>(null);

	const handleNavigate = (to: string) => {
		navigate(to);
	};

	useHotkeys(
		[
			[
				'ctrl+shift+f2',
				() => {
					if (openDialog) return;

					setOpenDialog(true);
				},
			],
			[
				'escape',
				() => {
					if (!openDialog) return;

					setOpenDialog(false);
				},
			],
			[
				'ctrl+shift+f3',
				() => {
					if (!openDialog || !inputRef.current) return;

					inputRef.current.focus();
				},
			],
		],
		[],
	);

	return (
		<Container>
			<Text padding="0 0 10px" size={30} fontWeight="bold">
				Home Page
			</Text>

			<Flex>
				<Button color="primary" radius="rounded" type="button" onClick={() => handleNavigate('/products')}>
					Products
				</Button>
				<Button color="warning" radius="rounded" type="button" onClick={() => handleNavigate('/users')}>
					Users
				</Button>
				<Button color="danger" radius="rounded" type="button" onClick={() => handleNavigate('/verification')}>
					Verification
				</Button>

				<Button color="success" radius="rounded" type="button" onClick={() => setOpenDialog((prev) => !prev)}>
					Toggle Dialog
				</Button>
			</Flex>

			<Portal
				bodyClassName="dialog-opened"
				className="show-dialog with-animation"
				withBackdrop
				styles={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
				isOpen={openDialog}
			>
				<Dialog title="Dialog Title" css={{ width: '500px', flex: '0 1 auto' }} ref={refClickOut} onClose={() => setOpenDialog(false)}>
					<Text size={18} fontWeight="bold" padding="0 0 0.25rem">
						Text Field Label :
					</Text>

					<Input
						type="text"
						placeholder="Enter your text here"
						css={{ fontSize: '17px', height: '47px', backgroundColor: '#f7f7f7', display: 'block', width: '100%' }}
						ref={inputRef}
						value={textValue}
						onChange={(e) => setTextValue(e.target.value)}
					/>
				</Dialog>
			</Portal>
		</Container>
	);
};
