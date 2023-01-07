import { useCallback, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Button } from 'button';
import styled from 'styled-components';

import { Container, Dialog, Input, Portal, Text } from '~src/components';
import { useClickOutside, useHotkeys } from '~src/hooks';
import { currentValue, updateValue } from '~src/store/slice/textValue';

const Flex = styled.div`
	display: flex;
	align-items: center;
	justify-content: start;
	gap: 15px;
`;

const HomePage = () => {
	const [openDialog, setOpenDialog] = useState(false);
	const textValue = useSelector(currentValue);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const refClickOut = useClickOutside(() => setOpenDialog(false));
	const inputRef = useRef<HTMLInputElement>(null);

	const updateTextValue = useCallback(
		(value: string) => {
			dispatch(updateValue(value));
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[],
	);

	const handleNavigate = useCallback(
		(to: string) => {
			navigate(to);
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[],
	);

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
			<Text padding="0 0 10px" size={30} fontWeight="bold" className="title">
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

			<Text size={18} fontWeight="bold" padding="0 0 0.25rem" css={{ display: 'block', marginTop: '15px', marginBottom: '20px' }}>
				Your Text Field : {textValue}
			</Text>

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
						onChange={(e) => updateTextValue(e.target.value)}
					/>

					<Text size={18} fontWeight="bold" padding="0 0 0.25rem" css={{ display: 'block', marginTop: '15px' }}>
						Your Text Field : {textValue}
					</Text>
				</Dialog>
			</Portal>
		</Container>
	);
};

export default HomePage;
