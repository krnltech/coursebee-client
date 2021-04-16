import {Button, Form} from "react-bootstrap";
import { useForm } from 'react-hook-form';
import React, {useState,useRef,useEffect} from "react";
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import parse from 'html-react-parser';
import { useSelector, useDispatch } from "react-redux";
import axios from "../../axios/axios";

const CourseUpload = () => {

    const { user } = useSelector((state) => state.auth.user);
    // const editorRef = useRef();
    const [ editorLoaded, setEditorLoaded ] = useState( true )
    const [requirements,setRequirements] = useState("");
    const [shortDescription,setShortDescription] = useState("");
    const [description,setDescription] = useState("");
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
    const handleRequirements = (e,editor) => {
        const data = editor.getData();
        setRequirements(data);
    }
    const handleShortDescription = (e,editor) => {
        const data = editor.getData();
        setShortDescription(data);
    }
    const handleDescription = (e,editor) => {
        const data = editor.getData();
        setDescription(data);
    }
    const onSubmit = async (values) => {
        var course = {};
        var whatToLearn = [];
        var tags = values.tags.split(',').map(tag =>tag.trim() )

        whatToLearn.push(values.point1);
        whatToLearn.push(values.point2);
        whatToLearn.push(values.point3);
        whatToLearn.push(values.point4);

        course['tags'] = tags;
        course['whatToLearn'] = whatToLearn;
        course['name'] = values.name;
        course['requirements'] = requirements;
        course['shortDescription'] = shortDescription;
        course['description'] = description;
        course['mentorId'] = user.id;

        console.log(course);

        await axios.post('/api/mentor/addcourse',course)
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        })
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
                        name="name"
                        type="text"
                        placeholder="Enter your course name"
                        ref={register()}
                    />
                </Form.Group>
                <Form.Label>Write 4 ponts that students will learn from this course</Form.Label>
                <div className="row">
                  <div className="col-6">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>point 1 :</Form.Label>
                        <Form.Control
                            name="point1"
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
                            name="point2"
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
                            name="point3"
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
                            name="point4"
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
                        name="requirements"
                        editor={ ClassicEditor }
                        onChange={handleRequirements}
                        data = {requirements}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Short Description</Form.Label>
                    <CKEditor
                        name="short"
                        editor={ ClassicEditor }
                        onChange={handleShortDescription}
                        data = {shortDescription}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Long Description</Form.Label>
                    <CKEditor
                        name="long"
                        editor={ ClassicEditor }
                        onChange={handleDescription}
                        data = {description}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicEmail1">
                    <Form.Label>Tags (use comma (,) after each tag)</Form.Label>
                    <Form.Control
                        name="tags"
                        type="text"
                        placeholder="Enter your course name"
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
