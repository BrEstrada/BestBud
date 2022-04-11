import React from 'react';
import { IoCloudUploadOutline, IoCloudDoneOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { Button } from 'ui/buttons';

import {
    EditorFeedbackStyles,
    Feedback,
    FeedbackMessage,
    FeedbackOption,
} from './styles';

function EditorFeedback({ children, status, writeCompleted, ...props }) {
    const navigator = useNavigate();

    return (
        <EditorFeedbackStyles {...props}>
            {!status ? (
                <Feedback>
                    <IoCloudDoneOutline color="#99d629" size="12rem" />
                    <FeedbackMessage>
                        Product Uploaded Successfully.
                    </FeedbackMessage>
                </Feedback>
            ) : (
                <Feedback>
                    <IoCloudUploadOutline color="#99d629" size="12rem" />
                    <FeedbackMessage>Uploading New Product...</FeedbackMessage>
                </Feedback>
            )}

            <FeedbackOption>
                <Button
                    bc="tomato"
                    color="white"
                    onClick={() => writeCompleted(false)}
                    disabled={status}
                >
                    Add Another Product
                </Button>
                <Button
                    bc="cornflowerblue"
                    color="white"
                    onClick={() => navigator('/dashboard')}
                >
                    View All Products
                </Button>
            </FeedbackOption>
        </EditorFeedbackStyles>
    );
}

export default EditorFeedback;
