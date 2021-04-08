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
                <Form.Label>Write 4 ponts that students will learn from this course</Form.Label>
                <div className="row">
                  <div className="col-6">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>point 1 :</Form.Label>
                        <Form.Control
                            name="title"
                            type="text"
                            placeholder="Enter your course title"
                            ref={register()}
                        />
                    </Form.Group>
                  </div>
                  <div className="col-6">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>point 2 :</Form.Label>
                        <Form.Control
                            name="title"
                            type="text"
                            placeholder="Enter your course title"
                            ref={register()}
                        />
                    </Form.Group>
                  </div>
                  <div className="col-6">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>point 3 :</Form.Label>
                        <Form.Control
                            name="title"
                            type="text"
                            placeholder="Enter your course title"
                            ref={register()}
                        />
                    </Form.Group>
                  </div>
                  <div className="col-6">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>point 4 :</Form.Label>
                        <Form.Control
                            name="title"
                            type="text"
                            placeholder="Enter your course title"
                            ref={register()}
                        />
                    </Form.Group>
                  </div>
                </div>
                <Form.Group>
                    <Form.Label>Requirements for this course</Form.Label>
                    <CKEditor
                        editor={ ClassicEditor }
                        onChange={handleShortDescription}
                        data = {shortDescription}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Short Description</Form.Label>
                    <CKEditor
                        editor={ ClassicEditor }
                        onChange={handleShortDescription}
                        data = {shortDescription}
                    />
                </Form.Group>
                <div style={{background: "#fff4f4"}}>
                    {parse(shortDescription)}
                </div>
                <Form.Group>
                    <Form.Label>Long Description</Form.Label>
                    <CKEditor
                        editor={ ClassicEditor }
                        onChange={handleShortDescription}
                        data = {shortDescription}
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
