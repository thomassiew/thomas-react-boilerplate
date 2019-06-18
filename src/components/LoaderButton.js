import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import '../constant/css/LoaderButton.css';

export default ({ isLoading, text, loadingText, className = '', disabled = false, ...props }) => (
	<Button className={`LoaderButton ${className}`} disabled={disabled || isLoading} {...props}>
		{isLoading && <Spinner animation="border" variant="danger" />}
		{!isLoading ? text : loadingText}
	</Button>
);
