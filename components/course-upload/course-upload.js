import {Button, Form} from "react-bootstrap";
import { useForm } from 'react-hook-form';
import React, {useState,useRef,useEffect} from "react";
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import parse from 'html-react-parser'

const CourseUpload = () => {
    // const editorRef = useRef();
    const [ editorLoaded, setEditorLoaded ] = useState( true )
    const [shortDescription,setShortDescription] = useState("");
    // const { CKEditor, ClassicEditor } = editorRef.current || {};
    // useEffect( () => {
    //     editorRef.current = {
    //         // import {CKEditor} from '@ckeditor/ckeditor5-react',
    //         // import {ClassicEditor} from '@ckeditor/ckeditor5-build-classic'
    //         CKEditor: require( '@ckeditor/ckeditor5-react' ),
    //         ClassicEditor: require( '@ckeditor/ckeditor5-build-classic' )
    //     }
    //     setEditorLoaded( true )
    // }, [] )
    const handleShortDescription = (e,editor) => {
        const data = editor.getData();
        setShortDescription(data);
    }
    const onSubmit = async (values) => {

    }


    const {register, handleSubmit, error} = useForm();
    return editorLoaded ? (
        <>
            <h1 className="text-center">Course Upload</h1>
            <Form
                onSubmit={handleSubmit(onSubmit)}
                className="form-group"
            >
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Course Title</Form.Label>
                    <Form.Control
                        name="title"
                        type="text"
                        placeholder="Enter your course title"
                        ref={register()}
                    />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Requirements</Form.Label>
                    <Form.Control
                        name="requirements"
                        type="text"
                        placeholder="Write your Requirements"
                        ref={register()}
                    />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Add a section</Form.Label>
                    <Form.Control
                        name="section"
                        type="text"
                        placeholder="Write a section name"
                        ref={register()}
                    />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Add a lecture</Form.Label>
                    <Form.Control
                        name="lecture"
                        type="text"
                        placeholder="Write a lecture name"
                        ref={register()}
                    />
                </Form.Group>
                <Form.Group>
                    <CKEditor
                        editor={ ClassicEditor }
                        onChange={handleShortDescription}
                        data = {shortDescription}
                    />
                </Form.Group>
                <div style={{background: "#fff4f4"}}>
                    {parse(shortDescription)}
                </div>
                <Form.Group >
                    <Form.Label>Add a lecture2</Form.Label>
                    <Form.Control
                        name="lecture"
                        type="text"
                        placeholder="Write a lecture name"
                        ref={register()}
                    />
                </Form.Group>

                <Button
                    variant="primary"
                    type="submit"
                >
                    Submit
                </Button>
                <br/>
                <br/>
                <span>Click here to <a href="">Register</a></span>
            </Form>
        </>
    ) : (
        <div>Editor loading</div>
    )

}

export default CourseUpload;